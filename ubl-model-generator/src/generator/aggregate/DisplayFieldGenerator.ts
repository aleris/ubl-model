import { AggregateField } from './AggregateField'
import { AggregateType } from './AggregateType'
import { FieldCodeGenerator } from '../CodeGenerator'

export class DisplayFieldGenerator implements FieldCodeGenerator<AggregateType, AggregateField> {
  asCodeString(type: AggregateType, fieldType: AggregateField): string {
    const fieldDisplay = `<${fieldType.resolvedType.name}Display key={key} meta={${type.typeName}FieldMeta.${fieldType.fieldName}} value={itemValue} />`
    return `        <AttributeDisplay
          meta={${type.typeName}FieldMeta.${fieldType.fieldName}} 
          value={value.${fieldType.fieldName}}
          itemDisplay={ (itemValue: ${fieldType.resolvedType.name}, key: string | number) =>
            ${fieldDisplay}
          }
        />`
  }

  asImportString(type: AggregateType, fieldType: AggregateField): string {
    const prefix = fieldType.resolvedType.prefix
    const fieldTypeName = fieldType.resolvedType.name

    if (prefix === type.module) {
      return `import ${fieldTypeName}Display from './${fieldTypeName}Display'
import { ${fieldTypeName} } from '../../model/${prefix}/${fieldTypeName}'`
    } else {
      return `import ${fieldTypeName}Display from '../${prefix}/${fieldTypeName}Display'
import { ${fieldTypeName} } from '../../model/${prefix}/${fieldTypeName}'`
    }
  }
}
