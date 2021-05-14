import { AggregateField } from './AggregateField'
import { AggregateType } from './AggregateType'
import { FieldCodeGenerator } from '../CodeGenerator'

export class DisplayFieldGenerator implements FieldCodeGenerator<AggregateType, AggregateField> {
  asCodeString(type: AggregateType, fieldType: AggregateField): string {
    const names = Array.from(new Set([type.typeName, fieldType.resolvedType.name, fieldType.fieldName]).values())
      .map(name => `ubl-${name}`)
      .join(' ')
    const className = `ubl-${fieldType.resolvedType.prefix} ${names}`
    console.log(type.typeName, fieldType.cardinalityWithFallbackToOccur)
    if (fieldType.cardinalityWithFallbackToOccur.endsWith('..n')) {
      return `        <AttributeListDisplay
          className="${className}"
          meta={${type.typeName}FieldMeta.${fieldType.fieldName}} 
          value={value.${fieldType.fieldName}}
          itemDisplay={ (itemValue: ${fieldType.resolvedType.name}, key: string | number) =>
            <${fieldType.resolvedType.name}Display
              key={key}
              label="${fieldType.propertyTermWithFallbackToName}"
              value={itemValue}
              meta={${type.typeName}FieldMeta.${fieldType.fieldName}}
            />
          }
        />`
    } else {
      return `        <AttributeSingleDisplay
          className="${className}"
          meta={${type.typeName}FieldMeta.${fieldType.fieldName}} 
          value={value.${fieldType.fieldName}}
          itemDisplay={ (itemValue: ${fieldType.resolvedType.name}, key: string | number) =>
            <${fieldType.resolvedType.name}Display
              key={key}
              label="${fieldType.propertyTermWithFallbackToName}"
              value={itemValue}
              meta={${type.typeName}FieldMeta.${fieldType.fieldName}}
            />
          }
        />`
    }
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
