import { ItemLocationQuantity } from './ItemLocationQuantity'
import { Price } from './Price'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A reference to the basis for pricing. This may be based on a catalogue or a quoted amount from a price list and
 * include some alternative pricing conditions.
 */
export interface PricingReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An original set of location-specific properties (e.g., price and quantity) associated with this item.
   * Item Location Quantity
   * Cardinality: 0..1
   */
  OriginalItemLocationQuantity?: Array<ItemLocationQuantity> | undefined

  /**
   * The price expressed in terms other than the actual price, e.g., the list price v. the contracted price, or the
   * price in bags v. the price in kilos, or the list price in bags v. the contracted price in kilos.
   * Price
   * Cardinality: 0..n
   */
  AlternativeConditionPrice?: Array<Price> | undefined
}
