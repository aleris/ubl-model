import { singleQuoteEscape } from '../type-gen-utils'
import { AggregateField } from './AggregateField'
import { AggregateType } from './AggregateType'
import { FieldGenerator } from './FieldGenerator'

export class MetaFieldGenerator extends FieldGenerator {

  asCodeString(type: AggregateType, fieldType: AggregateField): string {
    const containingTypeName = type.typeName
    return `export const ${containingTypeName}FieldMeta${fieldType.fieldName} = new FieldMeta<${containingTypeName}Field>(
  ${containingTypeName}Field.${fieldType.fieldName},
  '${fieldType.fieldName}',
  '${fieldType.propertyTermWithFallbackToName}',
  '${fieldType.resolvedType.name}',
  ${singleQuoteEscape(fieldType.documentation.definition)},
  '${fieldType.cardinalityWithFallbackToOccur}',
  '${fieldType.resolvedType.prefix}',
  ${fieldType.documentation.alternativeBusinessTerms ? singleQuoteEscape(fieldType.documentation.alternativeBusinessTerms) : 'undefined'},
  ${fieldType.documentation.examples ? singleQuoteEscape(fieldType.documentation.examples) : 'undefined'}
)`
  }

}
