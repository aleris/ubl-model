import { Identifier } from '../cbc/Identifier'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'

/**
 * A class to describe a measurement of temperature.
 */
export interface Temperature {
  /**
   * An identifier for this temperature measurement.
   * Identifier
   * Cardinality: 1
   */
  AttributeID: [Identifier]

  /**
   * The value of this temperature measurement.
   * Measure
   * Cardinality: 1
   */
  Measure: [Measure]

  /**
   * Text describing this temperature measurement.
   * Text
   * Cardinality: 0..n
   * Examples: at sea level
   */
  Description?: Array<Text> | undefined
}
