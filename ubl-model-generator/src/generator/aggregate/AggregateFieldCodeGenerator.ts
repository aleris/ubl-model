import { FieldCodeGenerator } from '../CodeGenerator'
import { AggregateField } from './AggregateField'
import { AggregateType } from './AggregateType'

export abstract class AggregateFieldCodeGenerator implements FieldCodeGenerator<AggregateType, AggregateField> {

  abstract asCodeString(type: AggregateType, fieldType: AggregateField): string

  asImportString(type: AggregateType, fieldType: AggregateField): string {
    const prefix = fieldType.resolvedType.prefix
    const fieldTypeName = fieldType.resolvedType.name

    if (prefix === type.module) {
      return `import { ${fieldTypeName} } from './${fieldTypeName}'`
    } else {
      return `import { ${fieldTypeName} } from '../${prefix}/${fieldTypeName}'`
    }
  }
}
