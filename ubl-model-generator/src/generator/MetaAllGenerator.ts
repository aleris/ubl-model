import fs from 'fs'
import path from 'path'
import { AggregateAttribute } from './aggregate/AggregateAttribute'
import { AggregateField } from './aggregate/AggregateField'
import { AggregateType } from './aggregate/AggregateType'
import { AggregateTypesReader } from './aggregate/AggregateTypesReader'
import { CodeFileWriter } from './CodeFileWriter'
import { CodeFile } from './CodeGenerator'
import { indent, mapCardinalityToEnum, singleQuoteEscape } from './type-gen-utils'
import { TypeDictionary } from './TypeDictionary'
import { TypeResolver } from './TypeResolver'
import { mapModuleToEnum, UblModule } from './UblModule'
import { AllUblVersions, UblSchema } from './UblSchema'

type Schema = {
  version: string,
  schema: UblSchema,
  typeDictionary: TypeDictionary,
  types: AggregateType[]
}

export class MetaAllGenerator {
  private schemaMap: Map<string, Schema> | undefined
  private codeFileWriter: CodeFileWriter | undefined

  async generateModels(rootGenDirPath: string) {
    // const schema = new UblSchema('2.3')
    // const typeDictionary = await new TypeDictionary(schema).loadFromSchema()
    // const typeResolver = new TypeResolver(typeDictionary)
    // const aggregateTypesReader = new AggregateTypesReader(schema, typeResolver)
    // const types = await aggregateTypesReader.readTypes(
    //   UblModule.cbc,
    //   'common/UBL-UnqualifiedDataTypes',
    //   await aggregateTypesReader.readTypes(UblModule.ccts_cct, 'common/CCTS_CCT_SchemaModule')
    // )
    // console.log(types.find(t => t.typeName === 'Date'))
    const schemaList = await Promise.all(AllUblVersions.map(async (version) => {
      const schema = new UblSchema(version)
      const typeDictionary = await new TypeDictionary(schema).loadFromSchema()
      const typeResolver = new TypeResolver(typeDictionary)
      const aggregateTypesReader = new AggregateTypesReader(schema, typeResolver)
      const types = await aggregateTypesReader.readAllTypes()
      return {
        version,
        schema,
        typeDictionary,
        types,
      }
    }))
    this.schemaMap = new Map(schemaList.map(s => [s.version, s]))
    this.codeFileWriter = new CodeFileWriter(rootGenDirPath, '', false)

    const codeFiles = [
      {
        dirPath: 'meta',
        fileName: 'Meta.ts',
        content: fs.readFileSync(path.resolve('src/generator/globals/meta2/Meta.tst')).toString()
      },
      ...this.genAllTypes(),
      {
        dirPath: 'model',
        fileName: 'Doc.ts',
        content: this.genDoc()
      },
      {
        dirPath: 'meta',
        fileName: 'All.ts',
        content: this.genAllMap()
      },
    ]

    for (const codeFile of codeFiles) {
      this.codeFileWriter.write(codeFile)
    }
  }

  private get lastVersion() {
    return AllUblVersions[AllUblVersions.length - 1]
  }

  private get lastVersionSchema() {
    return this.schemaMap?.get(this.lastVersion)
  }

  private genAllTypes(): CodeFile[] {
    if (this.lastVersionSchema === undefined) {
      throw Error('lastVersionSchema is undefined')
    }
    return this.lastVersionSchema.types.map(type => ({
      dirPath: `meta/${type.module}`,
      fileName: `${type.typeName}TypeMeta.ts`,
      content: this.genType(type)
    }))
  }

  private genType(type: AggregateType): string {
    return `import { Cardinality, ElementMeta, TypeMeta, UblModule } from '../Meta'
${this.genElements(type)}
export const ${type.typeName}TypeMeta: TypeMeta = {
  module: ${mapModuleToEnum(type.module)},
  name: '${type.typeName}',
  label: '${type.label}',
  definition: ${singleQuoteEscape(type.documentation.definition)},${type.fields.length !== 0 ? `
  elements: ${type.typeName}ElementList,` : ''}
}
`
  }

  private genElements(type: AggregateType) {
    if (type.fields.length === 0) {
      return ''
    }
    return `
${type.fields.map(field => `const ${field.fieldName}Element: ElementMeta = ${this.genFieldCode(type, field)}`).join('\n\n')}

export const ${type.name}Elements = {
${type.fields.map(field => `  ${field.fieldName}: ${field.fieldName}Element`).join(',\n')}
}

const ${type.typeName}ElementList: ElementMeta[] = [
${type.fields.map(field => `  ${field.fieldName}Element`).join(',\n')}
]
`
  }

  private genFieldCode(type: AggregateType, field: AggregateField): string {
    return `{
  module: ${mapModuleToEnum(field.resolvedType.prefix)},
  name: '${field.fieldName}',
  label: '${field.propertyTermWithFallbackToName}',
  definition: ${singleQuoteEscape(field.documentation.definition)},
  typeName: '${field.resolvedType.prefixedName}',
  cardinality: ${mapCardinalityToEnum(field.cardinalityWithFallbackToOccur)},
  alternativeBusinessTerms: ${field.documentation.alternativeBusinessTerms ? singleQuoteEscape(field.documentation.alternativeBusinessTerms) : 'undefined'},
  examples: ${field.documentation.examples ? singleQuoteEscape(field.documentation.examples) : 'undefined'},
  usageRule: ${field.documentation.usageRule ? singleQuoteEscape(field.documentation.usageRule) : 'undefined'},
}`
  }

  private genAllMap() {
    if (this.lastVersionSchema === undefined) {
      throw Error('lastVersionSchema is undefined')
    }

    const typesSorted = this.lastVersionSchema.types
      .sort((t1, t2) => t1.label.toLowerCase().localeCompare(t2.label.toLowerCase()))

    const imports = typesSorted.map(type =>
      `import { ${type.typeName}TypeMeta } from './${type.module}/${type.typeName}TypeMeta'`
    ).join('\n')

    const list = typesSorted.map(type =>
      `  ${type.typeName}TypeMeta,`
    ).join('\n')

    const mapItems = typesSorted.map(type =>
      `  ['${type.module}:${type.typeName}', ${type.typeName}TypeMeta],`
    ).join('\n')

    return `import { Meta } from './Meta'
${imports}

export const AllList = [
${list}
]

export const AllMap = new Map<string, Meta>([
${mapItems}
])
`
  }

  private genDoc() {
    if (this.lastVersionSchema === undefined) {
      throw Error('lastVersionSchema is undefined')
    }

    const docsSorted = this.lastVersionSchema.types
      .filter(t => t.module === UblModule.doc)
      .sort((t1, t2) => t1.label.toLowerCase().localeCompare(t2.label.toLowerCase()))

    const imports = docsSorted.map(type =>
      `import { ${type.typeName} } from './${type.module}/${type.typeName}'`
    ).join('\n')

    const list = docsSorted.map(type =>
      `  ${type.typeName}?: ${type.typeName}[],`
    ).join('\n')

    return `${imports}

export type Doc = {
${list}
}
`
  }

}
