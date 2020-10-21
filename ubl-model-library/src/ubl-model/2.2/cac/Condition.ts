import { Identifier } from '../cbc/Identifier'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'

/**
 * A class to define a measurable condition of an object.
 */
export interface Condition {
  /**
   * An identifier for the attribute that applies to the condition.
   * Identifier
   * Cardinality: 1
   */
  AttributeID: [Identifier]

  /**
   * The measurement value.
   * Measure
   * Cardinality: 0..1
   */
  Measure?: [Measure] | undefined

  /**
   * Text describing the attribute that applies to the condition.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The minimum value in a range of measurement for this condition.
   * Measure
   * Cardinality: 0..1
   */
  MinimumMeasure?: [Measure] | undefined

  /**
   * The maximum value in a range of measurement for this condition.
   * Measure
   * Cardinality: 0..1
   */
  MaximumMeasure?: [Measure] | undefined
}
