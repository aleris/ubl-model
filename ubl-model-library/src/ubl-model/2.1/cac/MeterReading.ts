import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to describe a meter reading.
 */
export interface MeterReading {
  /**
   * An identifier for this meter reading.
   * Identifier
   * Cardinality: 0..1
   * Examples: 7411013716x
   */
  ID: [Identifier] | undefined

  /**
   * The type of this meter reading, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Electricity
   */
  MeterReadingType: [Text] | undefined

  /**
   * The type of this meter reading, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Electricity
   */
  MeterReadingTypeCode: [Code] | undefined

  /**
   * The date of the previous meter reading.
   * Date
   * Cardinality: 1
   * Examples: 2006-09-01
   */
  PreviousMeterReadingDate: [Date]

  /**
   * The quantity of the previous meter reading.
   * Quantity
   * Cardinality: 1
   * Examples: 122604.00
   */
  PreviousMeterQuantity: [Quantity]

  /**
   * The date of the latest meter reading.
   * Date
   * Cardinality: 1
   * Examples: 2006-09-01
   */
  LatestMeterReadingDate: [Date]

  /**
   * The quantity of the latest meter reading.
   * Quantity
   * Cardinality: 1
   * Examples: 128365.00
   */
  LatestMeterQuantity: [Quantity]

  /**
   * The method used for the previous meter reading, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Manuel
   */
  PreviousMeterReadingMethod: [Text] | undefined

  /**
   * The method used for the previous meter reading, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Estimated
   */
  PreviousMeterReadingMethodCode: [Code] | undefined

  /**
   * The method used for the latest meter reading, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: Manuel
   */
  LatestMeterReadingMethod: [Text] | undefined

  /**
   * The method used for the latest meter reading, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: Estimated
   */
  LatestMeterReadingMethodCode: [Code] | undefined

  /**
   * Text containing comments on this meter reading.
   * Text
   * Cardinality: 0..n
   * Examples: The last stated meterstand is estimated
   */
  MeterReadingComments: Array<Text> | undefined

  /**
   * Consumption in the period from PreviousMeterReadingDate to LatestMeterReadingDate.
   * Quantity
   * Cardinality: 1
   */
  DeliveredQuantity: [Quantity]
}
