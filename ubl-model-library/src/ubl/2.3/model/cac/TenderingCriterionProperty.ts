import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Evidence } from './Evidence'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe the criterion properties.
 */
export interface TenderingCriterionProperty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier to refer to the criterion property.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of the criterion property.
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * A description of the criterion property.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A mutually agreed code signifying the type of the property.
   * Code
   * Cardinality: 0..1
   */
  TypeCode?: Array<Code> | undefined

  /**
   * The data type of the numeric value and any constraints on the data type metadata.
   * Code
   * Cardinality: 0..1
   */
  ValueDataTypeCode?: Array<Code> | undefined

  /**
   * The unit of measure of the numeric value as a quantity or measure.
   * Code
   * Cardinality: 0..1
   */
  ValueUnitCode?: Array<Code> | undefined

  /**
   * The currency of the numeric value as an amount.
   * Code
   * Cardinality: 0..1
   */
  ValueCurrencyCode?: Array<Code> | undefined

  /**
   * The expected amount that the responder has to provide in the criterion response.
   * Amount
   * Cardinality: 0..1
   */
  ExpectedAmount?: Array<Amount> | undefined

  /**
   * The expected identifier that the responder has to provide in the criterion response.
   * Identifier
   * Cardinality: 0..1
   */
  ExpectedID?: Array<Identifier> | undefined

  /**
   * The expected indicator (true or false) that the responder has to provide in the criterion response.
   * Indicator
   * Cardinality: 0..1
   */
  ExpectedIndicator?: Array<Indicator> | undefined

  /**
   * The expected code that the responder has to provide in the criterion response.
   * Code
   * Cardinality: 0..1
   */
  ExpectedCode?: Array<Code> | undefined

  /**
   * The expected value that the responder has to provide in the criterion response.
   * Numeric
   * Cardinality: 0..1
   */
  ExpectedValueNumeric?: Array<Numeric> | undefined

  /**
   * The description of the of the expected
   * Text
   * Cardinality: 0..1
   */
  ExpectedDescription?: Array<Text> | undefined

  /**
   * The expected URL that the responder has to provide in the criterion response.
   * Identifier
   * Cardinality: 0..1
   */
  ExpectedURI?: Array<Identifier> | undefined

  /**
   * The maximum amount the response must have.
   * Amount
   * Cardinality: 0..1
   */
  MaximumAmount?: Array<Amount> | undefined

  /**
   * The minimum amount the response must have.
   * Amount
   * Cardinality: 0..1
   */
  MinimumAmount?: Array<Amount> | undefined

  /**
   * The maximum value the response must have.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumValueNumeric?: Array<Numeric> | undefined

  /**
   * The minimum value the response must have.
   * Numeric
   * Cardinality: 0..1
   */
  MinimumValueNumeric?: Array<Numeric> | undefined

  /**
   * The maximum quantity value the response must have.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumQuantity?: Array<Quantity> | undefined

  /**
   * The minimum quantity value the response must have.
   * Quantity
   * Cardinality: 0..1
   */
  MinimumQuantity?: Array<Quantity> | undefined

  /**
   * The type of Transation that the requirement shall be translated for example certified translation
   * Code
   * Cardinality: 0..1
   */
  TranslationTypeCode?: Array<Code> | undefined

  /**
   * The description of the level of the expected certification
   * Text
   * Cardinality: 0..n
   */
  CertificationLevelDescription?: Array<Text> | undefined

  /**
   * The type of Copy quality, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  CopyQualityTypeCode?: Array<Code> | undefined

  /**
   * The period to which this criterion property shall apply.
   * Period
   * Cardinality: 0..n
   */
  ApplicablePeriod?: Array<Period> | undefined

  /**
   * An evidence that can be used to meet this criterion property.
   * Evidence
   * Cardinality: 0..n
   */
  TemplateEvidence?: Array<Evidence> | undefined
}
