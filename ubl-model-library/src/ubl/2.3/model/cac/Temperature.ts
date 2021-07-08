import { Identifier } from '../cbc/Identifier'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a measurement of temperature.
 */
export interface Temperature {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this temperature measurement.
   * Identifier
   * Cardinality: 1
   */
  AttributeID: Array<Identifier>

  /**
   * The value of this temperature measurement.
   * Measure
   * Cardinality: 1
   */
  Measure: Array<Measure>

  /**
   * Text describing this temperature measurement.
   * Text
   * Cardinality: 0..n
   * Examples: at sea level
   */
  Description?: Array<Text> | undefined
}
