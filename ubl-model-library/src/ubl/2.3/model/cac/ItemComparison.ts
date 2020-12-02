import { Amount } from '../cbc/Amount'
import { Quantity } from '../cbc/Quantity'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to provide information about price and quantity of an item for use in price comparisons based on price,
 * quantity, or measurements.
 */
export interface ItemComparison {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The price for the Item Comparison
   * Amount
   * Cardinality: 0..1
   */
  PriceAmount?: Array<Amount> | undefined

  /**
   * The quantity for which this comparison is valid.
   * Quantity
   * Cardinality: 0..1
   * Examples: per unit
   */
  Quantity?: Array<Quantity> | undefined
}
