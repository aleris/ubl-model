import { AggregateField } from './AggregateField'
import { AggregateType } from './AggregateType'
import { FieldGenerator } from './FieldGenerator'

export class DisplayFieldGenerator extends FieldGenerator {
  asCodeString(type: AggregateType, fieldType: AggregateField): string {
    return `{ meta: ${type.typeName}FieldMeta.${fieldType.fieldName},
  template: ({value, renderContext, fieldConfig}) => <${fieldType.resolvedType.name}Display
    key={${type.typeName}Field.${fieldType.fieldName}}
    meta={${type.typeName}FieldMeta.${fieldType.fieldName}}
    fieldConfig={fieldConfig}
    ${fieldType.propertyName}={value?.${fieldType.fieldName}}
    renderContext={renderContext}
  />}`
  }

  asImportString(type: AggregateType, fieldType: AggregateField): string {
    const prefix = fieldType.resolvedType.prefix
    const fieldTypeName = fieldType.resolvedType.name

    if (prefix === type.module) {
      return `import { ${fieldTypeName}Display } from './${fieldTypeName}Display'`
    } else {
      return `import { ${fieldTypeName}Display } from '../${prefix}/${fieldTypeName}Display'`
    }
  }
}
