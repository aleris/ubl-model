import { Amount } from '../cbc/Amount'
import { Text } from '../cbc/Text'

/**
 * A simplified version of the Price class intended for applications such as telephone billing.
 */
export interface UnstructuredPrice {
  /**
   * The price amount.
   * Amount
   * Cardinality: 0..1
   * Examples: 23.45
   */
  PriceAmount?: [Amount] | undefined

  /**
   * The usage time upon which the price is based.
   * Text
   * Cardinality: 0..1
   */
  TimeAmount?: [Text] | undefined
}
