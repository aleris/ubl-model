import { Code } from '../cbc/Code'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * The name of this meter property.
 */
export interface MeterProperty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The name of this meter property, expressed as a code.
   * Name
   * Cardinality: 0..1
   * Examples: Energy Rating , Collar Size , Fat Content
   */
  Name?: Array<Text> | undefined

  /**
   * The value of this meter property, expressed as text.
   * Code
   * Cardinality: 0..1
   */
  NameCode?: Array<Code> | undefined

  /**
   * The value of this meter property, expressed as a quantity.
   * Text
   * Cardinality: 0..1
   * Examples: 100 watts , 15 European , 20% +/- 5%
   */
  Value?: Array<Text> | undefined

  /**
   * The value of this meter property, expressed as a quantity.
   * Quantity
   * Cardinality: 0..1
   */
  ValueQuantity?: Array<Quantity> | undefined

  /**
   * An additional value to qualify the value of the meter
   * Text
   * Cardinality: 0..n
   */
  ValueQualifier?: Array<Text> | undefined
}
