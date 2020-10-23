import { formatComment } from '../type-gen-utils'
import { AggregateType } from './AggregateType'
import { CodeFile, TypeCodeGenerator } from '../CodeGenerator'
import { AggregateFieldModelCodeGenerator } from './AggregateFieldModelCodeGenerator'

export class AggregateTypeModelCodeGenerator implements TypeCodeGenerator<AggregateType> {

  private readonly aggregateFieldModelCodeGenerator = new AggregateFieldModelCodeGenerator()

  globals(): CodeFile[] {
      return []
  }

  asCodeString(aggregateType: AggregateType) {
    const imports = this.getImports(aggregateType)
    const code = `${imports}/**${
      formatComment(' * ', aggregateType.documentation.definition)
    }
 */
export interface ${aggregateType.typeName} {
${aggregateType
      .fields
      .map(field => this.aggregateFieldModelCodeGenerator.asCodeString(aggregateType, field))
      .join('\n\n')}
}
`
    return {
      dirPath: aggregateType.module,
      fileName: aggregateType.typeName,
      content: code
    }
  }

  private getImports(aggregateType: AggregateType) {
    const importFields = this.getImportFields(aggregateType)
    const imports = importFields.length == 0
      ? ''
      : `${
      importFields
        .map(field => this.aggregateFieldModelCodeGenerator.asImportString(aggregateType, field))
        .join('\n')}\n\n`
    return imports
  }

  private getImportFields(aggregateType: AggregateType) {
    const withoutSelf = aggregateType.fields.filter(field => field.resolvedType.name !== aggregateType.typeName)
    const withTypeKey = withoutSelf.map(field => ({ type: field.resolvedType.name, field }))
    const sorted = withTypeKey.sort(
      (a, b) => a.type.localeCompare(b.type)
    )
    const unique = new Map(sorted.map(fieldWithType => [fieldWithType.type, fieldWithType.field]))
    return Array.from(unique.values())
  }
}
