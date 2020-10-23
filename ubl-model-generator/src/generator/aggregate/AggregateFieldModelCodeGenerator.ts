import { AggregateField } from './AggregateField'
import { AggregateFieldCodeGenerator } from './AggregateFieldCodeGenerator'
import { AggregateType } from './AggregateType'
import { formatComment, getMinOccurOptionalProps } from '../type-gen-utils'

export class AggregateFieldModelCodeGenerator extends AggregateFieldCodeGenerator {
  asCodeString(type: AggregateType, fieldType: AggregateField): string {
    const typeAsArray = fieldType.maxOccurs === '1' ? `[${fieldType.resolvedType.name}]` : `Array<${fieldType.resolvedType.name}>`
    const { optionalField, optionalUndefined } = getMinOccurOptionalProps(fieldType.minOccur)
    const cardinality = this.getCardinalityWithFallbackToOccur(fieldType)
    return `  /**${
      formatComment('   * ', fieldType.documentation.definition)
    }${
      formatComment('   * ', fieldType.documentation.representationTerm)
    }
   * Cardinality: ${
      cardinality
    }${
      formatComment('   * Alternative business terms: ', fieldType.documentation.alternativeBusinessTerms)
    }${
      formatComment('   * Examples: ', fieldType.documentation.examples)
    }
   */
  ${fieldType.fieldName}${optionalField}: ${typeAsArray}${optionalUndefined}`
  }
}
