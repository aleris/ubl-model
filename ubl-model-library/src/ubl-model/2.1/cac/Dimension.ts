import { Identifier } from '../cbc/Identifier'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'

/**
 * A class to define a measurable dimension (length, mass, weight, volume, or area) of an item.
 */
export interface Dimension {
  /**
   * An identifier for the attribute to which the measure applies.
   * Identifier
   * Cardinality: 1
   */
  AttributeID: [Identifier]

  /**
   * The measurement value.
   * Measure
   * Cardinality: 0..1
   */
  Measure: [Measure] | undefined

  /**
   * Text describing the measurement attribute.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * The minimum value in a range of measurement of this dimension.
   * Measure
   * Cardinality: 0..1
   */
  MinimumMeasure: [Measure] | undefined

  /**
   * The maximum value in a range of measurement of this dimension.
   * Measure
   * Cardinality: 0..1
   */
  MaximumMeasure: [Measure] | undefined
}
