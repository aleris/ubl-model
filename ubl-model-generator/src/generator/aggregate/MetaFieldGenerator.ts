import { mapCardinalityToEnum, singleQuoteEscape } from '../type-gen-utils'
import { mapModuleToEnum } from '../UblModule'
import { AggregateField } from './AggregateField'
import { AggregateType } from './AggregateType'
import { FieldGenerator } from './FieldGenerator'

export class MetaFieldGenerator extends FieldGenerator {

  asImportString(type: AggregateType, fieldType: AggregateField, typeSuffix: string, fileSuffix: string): string {
    const prefix = fieldType.resolvedType.prefix
    const fieldTypeName = fieldType.resolvedType.name

    if (prefix === type.module) {
      return `import { ${fieldTypeName}${typeSuffix} } from './${fieldTypeName}${fileSuffix}'`
    } else {
      return `import { ${fieldTypeName}${typeSuffix} } from '../${prefix}/${fieldTypeName}${fileSuffix}'`
    }
  }

  asCodeString(type: AggregateType, fieldType: AggregateField): string {
    const containingTypeName = type.typeName
    return `export const ${containingTypeName}FieldMeta${fieldType.fieldName}: FieldMeta<${containingTypeName}Field> = {
  field: ${containingTypeName}Field.${fieldType.fieldName},
  name: '${fieldType.fieldName}',
  label: '${fieldType.propertyTermWithFallbackToName}',
  typeName: ${fieldType.resolvedType.name}TypeMeta.name,
  definition: ${singleQuoteEscape(fieldType.documentation.definition)},
  module: ${mapModuleToEnum(fieldType.resolvedType.prefix)},
  cardinality: ${mapCardinalityToEnum(fieldType.cardinalityWithFallbackToOccur)},
  alternativeBusinessTerms: ${fieldType.documentation.alternativeBusinessTerms ? singleQuoteEscape(fieldType.documentation.alternativeBusinessTerms) : 'undefined'},
  examples: ${fieldType.documentation.examples ? singleQuoteEscape(fieldType.documentation.examples) : 'undefined'},
}`
  }
}
