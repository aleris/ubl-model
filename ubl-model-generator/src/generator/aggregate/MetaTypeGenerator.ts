import * as fs from 'fs'
import * as path from 'path'
import { CodeFile, TypeCodeGenerator } from '../CodeGenerator'
import { AggregateType } from './AggregateType'
import { MetaFieldGenerator } from './MetaFieldGenerator'

export class MetaTypeGenerator implements TypeCodeGenerator<AggregateType> {

  private readonly aggregateFieldMetaCodeGenerator = new MetaFieldGenerator()

  globals(): CodeFile[] {
    return [{
      dirPath: 'meta',
      fileName: 'FieldMeta.ts',
      content: fs.readFileSync(path.resolve('src/generator/globals/2.2/meta/FieldMeta.tst')).toString()
    }];
  }

  asCodeString(aggregateType: AggregateType): CodeFile {
    const code = `import { FieldMeta } from '../FieldMeta'

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

    return {
      dirPath: `meta/${aggregateType.module}`,
      fileName: `${aggregateType.typeName}Meta.ts`,
      content: code
    }
  }
}
