import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a range of values for an item property.
 */
export interface ItemPropertyRange {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The minimum value in this range of values.
   * Text
   * Cardinality: 0..1
   */
  MinimumValue?: Array<Text> | undefined

  /**
   * The maximum value in this range of values.
   * Text
   * Cardinality: 0..1
   */
  MaximumValue?: Array<Text> | undefined
}
