import * as fs from 'fs'
import * as path from 'path'
import { CodeFile, TypeCodeGenerator } from '../CodeGenerator'
import { singleQuoteEscape } from '../type-gen-utils'
import { mapModuleToEnum } from '../UblModule'
import { AggregateType } from './AggregateType'
import { MetaFieldGenerator } from './MetaFieldGenerator'

export class MetaTypeGenerator implements TypeCodeGenerator<AggregateType> {

  private readonly aggregateFieldMetaCodeGenerator = new MetaFieldGenerator()

  globals(): CodeFile[] {
    return [
      {
        dirPath: 'meta',
        fileName: 'FieldMeta.ts',
        content: fs.readFileSync(path.resolve('src/generator/globals/2.3/meta/FieldMeta.tst')).toString()
      },
      {
        dirPath: 'meta',
        fileName: 'Type.ts',
        content: fs.readFileSync(path.resolve('src/generator/globals/2.3/meta/Type.tst')).toString()
      },
      ...fs.readdirSync(path.resolve('src/generator/globals/2.3/meta/cbc'), { withFileTypes: true })
        .filter(file => file.isFile())
        .map(file => ({
          dirPath: `meta/cbc`,
          fileName: `${file.name.replace(/\.tsxt$/, '.tsx').replace(/\.tst$/, '.ts')}`,
          content: fs.readFileSync(path.resolve(`src/generator/globals/2.3/meta/cbc/${file.name}`)).toString()
        })),
    ];
  }

  asCodeFiles(aggregateType: AggregateType): CodeFile[] {
    const imports = this.aggregateFieldMetaCodeGenerator.getImports(aggregateType, 'Type', 'Meta')
    const code = `import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
${imports}
export enum ${aggregateType.typeName}Field {
${aggregateType.fields.map(field => `  ${field.fieldName} = '${field.fieldName}'`).join(',\n')}
}

${aggregateType.fields.map(field => this.aggregateFieldMetaCodeGenerator.asCodeString(aggregateType, field)).join('\n\n')}

export class ${aggregateType.typeName}FieldMeta {
${aggregateType.fields.map(field => `  public static readonly ${field.fieldName} = ${aggregateType.typeName}FieldMeta${field.fieldName}`).join('\n')}
}

export const ${aggregateType.typeName}FieldMap = new Map([
${aggregateType.fields.map(field => `  [${aggregateType.typeName}Field.${field.fieldName}, ${aggregateType.typeName}FieldMeta${field.fieldName}]`).join(',\n')}
])

export const ${aggregateType.typeName}Type: Type<${aggregateType.typeName}Field> = {
  name: '${aggregateType.typeName}',
  label: '${aggregateType.documentation.objectClass}',
  module: ${mapModuleToEnum(aggregateType.module)},
  definition: ${singleQuoteEscape(aggregateType.documentation.definition)},
  fields: ${aggregateType.typeName}FieldMap,
}
`

    return [{
      dirPath: `meta/${aggregateType.module}`,
      fileName: `${aggregateType.typeName}Meta.ts`,
      content: code
    }]
  }
}
