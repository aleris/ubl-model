import { FieldCodeGenerator } from '../CodeGenerator'
import { AggregateField } from './AggregateField'
import { AggregateType } from './AggregateType'

export abstract class FieldGenerator implements FieldCodeGenerator<AggregateType, AggregateField> {

  abstract asCodeString(type: AggregateType, fieldType: AggregateField): string

  asImportString(type: AggregateType, fieldType: AggregateField, typeSuffix: string, fileSuffix: string): string {
    const prefix = fieldType.resolvedType.prefix
    const fieldTypeName = fieldType.resolvedType.name

    if (prefix === type.module) {
      return `import { ${fieldTypeName}${typeSuffix} } from './${fieldTypeName}${fileSuffix}'`
    } else {
      return `import { ${fieldTypeName}${typeSuffix} } from '../${prefix}/${fieldTypeName}${fileSuffix}'`
    }
  }

  getImports(aggregateType: AggregateType, typeSuffix = '', fileSuffix = '') {
    const importFields = this.getImportFields(aggregateType)
    const imports = importFields.length == 0
      ? ''
      : `${
        importFields
          .map(field => this.asImportString(aggregateType, field, typeSuffix, fileSuffix))
          .join('\n')}\n`
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
