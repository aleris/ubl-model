import { Identifier } from '../cbc/Identifier'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a measurable dimension (length, mass, weight, volume, or area) of an item.
 */
export interface Dimension {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the attribute to which the measure applies.
   * Identifier
   * Cardinality: 1
   */
  AttributeID: Array<Identifier>

  /**
   * The measurement value.
   * Measure
   * Cardinality: 0..1
   */
  Measure?: Array<Measure> | undefined

  /**
   * Text describing the measurement attribute.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The minimum value in a range of measurement of this dimension.
   * Measure
   * Cardinality: 0..1
   */
  MinimumMeasure?: Array<Measure> | undefined

  /**
   * The maximum value in a range of measurement of this dimension.
   * Measure
   * Cardinality: 0..1
   */
  MaximumMeasure?: Array<Measure> | undefined
}
