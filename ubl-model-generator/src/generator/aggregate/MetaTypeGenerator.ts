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
        fileName: 'Meta.ts',
        content: fs.readFileSync(path.resolve('src/generator/globals/2.3/meta/Meta.tst')).toString()
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
    const imports = this.aggregateFieldMetaCodeGenerator.getImports(aggregateType, false, 'TypeMeta', 'MetaType')
    const code = `import { FieldCardinality, FieldMeta, UblModule } from '../Meta'
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
`

    const typeCode = `import { TypeMeta, UblModule } from '../Meta'

export const ${aggregateType.typeName}TypeMeta: TypeMeta = {
  name: '${aggregateType.name}',
  label: '${aggregateType.documentation.objectClass}',
  typeName: '${aggregateType.typeName}',
  definition: ${singleQuoteEscape(aggregateType.documentation.definition)},
  module: ${mapModuleToEnum(aggregateType.module)},
}
`

    return [{
      dirPath: `meta/${aggregateType.module}`,
      fileName: `${aggregateType.typeName}Meta.ts`,
      content: code
    }, {
      dirPath: `meta/${aggregateType.module}`,
      fileName: `${aggregateType.typeName}MetaType.ts`,
      content: typeCode
    }]
  }
}
