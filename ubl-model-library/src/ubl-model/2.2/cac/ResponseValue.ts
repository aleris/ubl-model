import { Amount } from '../cbc/Amount'
import { BinaryObject } from '../cbc/BinaryObject'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Measure } from '../cbc/Measure'
import { Numeric } from '../cbc/Numeric'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to describe the criterion requirement response value.
 */
export interface ResponseValue {
  /**
   * An identifier to refer to the criterion requirement response value.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * A description of the response value to the criterion requirement.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A text or name used as a reply to the criterion requirement.
   * Text
   * Cardinality: 0..n
   */
  Response?: Array<Text> | undefined

  /**
   * An amount used as a reply to the criterion requirement.
   * Amount
   * Cardinality: 0..1
   */
  ResponseAmount?: [Amount] | undefined

  /**
   * A binary graphic, picture, sound or video object used as a reply to the criterion requirement.
   * Binary Object
   * Cardinality: 0..1
   */
  ResponseBinaryObject?: [BinaryObject] | undefined

  /**
   * A code used as a reply to the criterion requirement.
   * Code
   * Cardinality: 0..1
   */
  ResponseCode?: [Code] | undefined

  /**
   * A date used as a reply to the criterion requirement.
   * Date
   * Cardinality: 0..1
   */
  ResponseDate?: [Date] | undefined

  /**
   * An identifier used as a reply to the criterion requirement.
   * Identifier
   * Cardinality: 0..1
   */
  ResponseID?: [Identifier] | undefined

  /**
   * An indicator used as a reply to the criterion requirement.
   * Indicator
   * Cardinality: 0..1
   */
  ResponseIndicator?: [Indicator] | undefined

  /**
   * A measure used as a reply to the criterion requirement.
   * Measure
   * Cardinality: 0..1
   */
  ResponseMeasure?: [Measure] | undefined

  /**
   * A number, rate or percent used as a reply to the criterion requirement.
   * Numeric
   * Cardinality: 0..1
   */
  ResponseNumeric?: [Numeric] | undefined

  /**
   * A quantity used as a reply to the criterion requirement.
   * Quantity
   * Cardinality: 0..1
   */
  ResponseQuantity?: [Quantity] | undefined

  /**
   * A time used as a reply to the criterion requirement.
   * Time
   * Cardinality: 0..1
   */
  ResponseTime?: [Time] | undefined

  /**
   * A URI value used as a reply to the criterion requirement.
   * Identifier
   * Cardinality: 0..1
   */
  ResponseURI?: [Identifier] | undefined
}
