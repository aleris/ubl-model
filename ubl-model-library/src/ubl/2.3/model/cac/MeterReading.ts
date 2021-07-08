import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a meter reading.
 */
export interface MeterReading {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this meter reading.
   * Identifier
   * Cardinality: 0..1
   * Examples: 7411013716x
   */
  ID?: Array<Identifier> | undefined

  /**
   * The type of this meter reading, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Electricity
   */
  MeterReadingType?: Array<Text> | undefined

  /**
   * The type of this meter reading, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Electricity
   */
  MeterReadingTypeCode?: Array<Code> | undefined

  /**
   * The date of the previous meter reading.
   * Date
   * Cardinality: 1
   * Examples: 2006-09-01
   */
  PreviousMeterReadingDate: Array<Date>

  /**
   * The quantity of the previous meter reading.
   * Quantity
   * Cardinality: 1
   * Examples: 122604.00
   */
  PreviousMeterQuantity: Array<Quantity>

  /**
   * The date of the latest meter reading.
   * Date
   * Cardinality: 1
   * Examples: 2006-09-01
   */
  LatestMeterReadingDate: Array<Date>

  /**
   * The quantity of the latest meter reading.
   * Quantity
   * Cardinality: 1
   * Examples: 128365.00
   */
  LatestMeterQuantity: Array<Quantity>

  /**
   * The method used for the previous meter reading, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Manuel
   */
  PreviousMeterReadingMethod?: Array<Text> | undefined

  /**
   * The method used for the previous meter reading, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Estimated
   */
  PreviousMeterReadingMethodCode?: Array<Code> | undefined

  /**
   * The method used for the latest meter reading, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Manuel
   */
  LatestMeterReadingMethod?: Array<Text> | undefined

  /**
   * The method used for the latest meter reading, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Estimated
   */
  LatestMeterReadingMethodCode?: Array<Code> | undefined

  /**
   * Text containing comments on this meter reading.
   * Text
   * Cardinality: 0..n
   * Examples: The last stated meterstand is estimated
   */
  MeterReadingComments?: Array<Text> | undefined

  /**
   * Consumption in the period from PreviousMeterReadingDate to LatestMeterReadingDate.
   * Quantity
   * Cardinality: 1
   */
  DeliveredQuantity: Array<Quantity>
}
