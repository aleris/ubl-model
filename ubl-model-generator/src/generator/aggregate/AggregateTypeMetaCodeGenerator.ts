import { CodeFile, TypeCodeGenerator } from '../CodeGenerator'
import { AggregateType } from './AggregateType'
import { AggregateFieldMetaCodeGenerator } from './AggregateFieldMetaCodeGenerator'

export class AggregateTypeMetaCodeGenerator implements TypeCodeGenerator<AggregateType> {

  private readonly aggregateFieldMetaCodeGenerator = new AggregateFieldMetaCodeGenerator()

  globals(): CodeFile[] {
    const fieldMetaCode = `export class FieldMeta<E> {
  constructor(
    public readonly field: E,
    public readonly name: string,
    public readonly label: string,
    public readonly typeName: string,
    public readonly definition: string,
    public readonly cardinality: string,
    public readonly alternativeBusinessTerms?: string,
    public readonly examples?: string
  ) { }
}
`
    return [{
      dirPath: '',
      fileName: 'FieldMeta',
      content: fieldMetaCode
    }];
  }

  asCodeString(aggregateType: AggregateType): CodeFile {
    const code = `import { FieldMeta } from '../../FieldMeta'

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
      dirPath: `${aggregateType.module}/meta`,
      fileName: `${aggregateType.typeName}Meta`,
      content: code
    }
  }
}
