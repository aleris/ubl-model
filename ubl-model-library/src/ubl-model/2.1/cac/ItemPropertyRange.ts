import { Text } from '../cbc/Text'

/**
 * A class to describe a range of values for an item property.
 */
export interface ItemPropertyRange {
  /**
   * The minimum value in this range of values.
   * Text
   * Cardinality: 0..1
   */
  MinimumValue: [Text] | undefined

  /**
   * The maximum value in this range of values.
   * Text
   * Cardinality: 0..1
   */
  MaximumValue: [Text] | undefined
}
