import { Amount } from '../cbc/Amount'
import { Quantity } from '../cbc/Quantity'

/**
 * A class to provide information about price and quantity of an item for use in price comparisons based on price,
 * quantity, or measurements.
 */
export interface ItemComparison {
  /**
   * The price for the Item Comparison
   * Amount
   * Cardinality: 0..1
   */
  PriceAmount?: [Amount] | undefined

  /**
   * The quantity for which this comparison is valid.
   * Quantity
   * Cardinality: 0..1
   * Examples: per unit
   */
  Quantity?: [Quantity] | undefined
}
