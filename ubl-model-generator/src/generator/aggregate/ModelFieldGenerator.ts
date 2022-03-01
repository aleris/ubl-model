import { AggregateField } from './AggregateField'
import { FieldGenerator } from './FieldGenerator'
import { AggregateType } from './AggregateType'
import { formatComment, getMinOccurOptionalProps } from '../type-gen-utils'

export class ModelFieldGenerator extends FieldGenerator {
  asCodeString(type: AggregateType, fieldType: AggregateField): string {
    // const typeAsArray = `Array<${fieldType.resolvedType.name}>`
    const typeAsArray = fieldType.maxOccurs === '1' ? `[${fieldType.resolvedType.name}]` : `Array<${fieldType.resolvedType.name}>`
    const { optionalField, optionalUndefined } = getMinOccurOptionalProps(fieldType.minOccur)
    return `  /**${
      formatComment('   * ', fieldType.documentation.definition)
    }${
      formatComment('   * ', fieldType.documentation.representationTerm)
    }
   * Cardinality: ${
      fieldType.cardinalityWithFallbackToOccur
    }${
      formatComment('   * Alternative business terms: ', fieldType.documentation.alternativeBusinessTerms)
    }${
      formatComment('   * Examples: ', fieldType.documentation.examples)
    }
   */
  ${fieldType.fieldName}${optionalField}: ${typeAsArray}${optionalUndefined}`
  }
}
