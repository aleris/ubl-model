import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Evidence } from './Evidence'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Text } from '../cbc/Text'

/**
 * A class to describe the criterion properties.
 */
export interface TenderingCriterionProperty {
  /**
   * An identifier to refer to the criterion property.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The name of the criterion property.
   * Name
   * Cardinality: 0..1
   */
  Name: [Text] | undefined

  /**
   * A description of the criterion property.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * A mutually agreed code signifying the type of the property.
   * Code
   * Cardinality: 0..1
   */
  TypeCode: [Code] | undefined

  /**
   * The data type of the numeric value and any constraints on the data type metadata.
   * Code
   * Cardinality: 0..1
   */
  ValueDataTypeCode: [Code] | undefined

  /**
   * The unit of measure of the numeric value as a quantity or measure.
   * Code
   * Cardinality: 0..1
   */
  ValueUnitCode: [Code] | undefined

  /**
   * The currency of the numeric value as an amount.
   * Code
   * Cardinality: 0..1
   */
  ValueCurrencyCode: [Code] | undefined

  /**
   * The expected amount that the responder has to provide in the criterion response.
   * Amount
   * Cardinality: 0..1
   */
  ExpectedAmount: [Amount] | undefined

  /**
   * The expected identifier that the responder has to provide in the criterion response.
   * Identifier
   * Cardinality: 0..1
   */
  ExpectedID: [Identifier] | undefined

  /**
   * The expected code that the responder has to provide in the criterion response.
   * Code
   * Cardinality: 0..1
   */
  ExpectedCode: [Code] | undefined

  /**
   * The expected value that the responder has to provide in the criterion response.
   * Numeric
   * Cardinality: 0..1
   */
  ExpectedValueNumeric: [Numeric] | undefined

  /**
   * The description of the of the expected 
   * Text
   * Cardinality: 0..1
   */
  ExpectedDescription: [Text] | undefined

  /**
   * The maximum amount the response must have.
   * Amount
   * Cardinality: 0..1
   */
  MaximumAmount: [Amount] | undefined

  /**
   * The minimum amount the response must have.
   * Amount
   * Cardinality: 0..1
   */
  MinimumAmount: [Amount] | undefined

  /**
   * The maximum value the response must have.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumValueNumeric: [Numeric] | undefined

  /**
   * The minimum value the response must have.
   * Numeric
   * Cardinality: 0..1
   */
  MinimumValueNumeric: [Numeric] | undefined

  /**
   * The type of Transation that the requirement shall be translated for example certified translation
   * Code
   * Cardinality: 0..1
   */
  TranslationTypeCode: [Code] | undefined

  /**
   * The description of the level of the expected certification
   * Text
   * Cardinality: 0..n
   */
  CertificationLevelDescription: Array<Text> | undefined

  /**
   * The type of Copy quality, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  CopyQualityTypeCode: [Code] | undefined

  /**
   * The period to which this criterion property shall apply.
   * Period
   * Cardinality: 0..n
   */
  ApplicablePeriod: Array<Period> | undefined

  /**
   * An evidence that can be used to meet this criterion property.
   * Evidence
   * Cardinality: 0..n
   */
  TemplateEvidence: Array<Evidence> | undefined
}
