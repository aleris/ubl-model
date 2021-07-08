import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a line in a Performance History.
 */
export interface PerformanceDataLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this performance data line.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The value of the reported attribute.
   * Quantity
   * Cardinality: 1
   */
  PerformanceValueQuantity: Array<Quantity>

  /**
   * A code signifying the measure of performance applicable to the reported attribute.
   * Code
   * Cardinality: 1
   */
  PerformanceMetricTypeCode: Array<Code>

  /**
   * The period to which this performance data line applies.
   * Period
   * Cardinality: 0..1
   */
  Period?: Array<Period> | undefined

  /**
   * The item whose performance is reported in this data line.
   * Item
   * Cardinality: 0..1
   */
  Item?: Array<Item> | undefined
}
