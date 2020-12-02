import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a revenue.
 */
export interface Fee {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the type of this fee.
   * Code
   * Cardinality: 0..1
   */
  FeeTypeCode?: Array<Code> | undefined

  /**
   * The amount of a fee.
   * Amount
   * Cardinality: 0..1
   */
  FeeAmount?: Array<Amount> | undefined

  /**
   * Text describing this fee.
   * Text
   * Cardinality: 0..n
   */
  FeeDescription?: Array<Text> | undefined
}
