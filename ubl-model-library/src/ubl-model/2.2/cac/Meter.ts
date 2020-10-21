import { Code } from '../cbc/Code'
import { MeterProperty } from './MeterProperty'
import { MeterReading } from './MeterReading'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to describe a meter and its readings.
 */
export interface Meter {
  /**
   * The meter number, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: 61722x
   */
  MeterNumber?: [Text] | undefined

  /**
   * The name of this meter, which serves as an identifier to distinguish a main meter from a submeter.
   * Name
   * Cardinality: 0..1
   */
  MeterName?: [Text] | undefined

  /**
   * The factor by which readings of this meter must be multiplied to calculate consumption, expressed as text.
   * Text
   * Cardinality: 0..1
   * Examples: 1.000
   */
  MeterConstant?: [Text] | undefined

  /**
   * A code signifying the formula to be used in applying the meter constant.
   * Code
   * Cardinality: 0..1
   * Examples: Factor
   */
  MeterConstantCode?: [Code] | undefined

  /**
   * The quantity delivered; the total quantity consumed as calculated from the meter readings.
   * Quantity
   * Cardinality: 0..1
   * Examples: 5761.00
   */
  TotalDeliveredQuantity?: [Quantity] | undefined

  /**
   * A reading of this meter.
   * Meter Reading
   * Cardinality: 0..n
   */
  MeterReading?: Array<MeterReading> | undefined

  /**
   * A property of this meter.
   * Meter Property
   * Cardinality: 0..n
   */
  MeterProperty?: Array<MeterProperty> | undefined
}
