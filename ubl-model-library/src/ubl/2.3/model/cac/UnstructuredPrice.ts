import { Amount } from '../cbc/Amount'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A simplified version of the Price class intended for applications such as telephone billing.
 */
export interface UnstructuredPrice {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The price amount.
   * Amount
   * Cardinality: 0..1
   * Examples: 23.45
   */
  PriceAmount?: Array<Amount> | undefined

  /**
   * The usage time upon which the price is based.
   * Text
   * Cardinality: 0..1
   */
  TimeAmount?: Array<Text> | undefined
}
