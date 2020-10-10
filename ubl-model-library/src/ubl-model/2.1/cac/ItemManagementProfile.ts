import { Item } from './Item'
import { ItemLocationQuantity } from './ItemLocationQuantity'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to define a management profile for an item.
 */
export interface ItemManagementProfile {
  /**
   * The number of days in the future that an order forecast quantity automatically becomes a confirmed order for a
   * product.
   * Numeric
   * Cardinality: 0..1
   */
  FrozenPeriodDaysNumeric: [Numeric] | undefined

  /**
   * The quantity of the item that should trigger a replenishment order to avoid depleting the safety stock.
   * Quantity
   * Cardinality: 0..1
   */
  MinimumInventoryQuantity: [Quantity] | undefined

  /**
   * The order quantity multiples in which the product may be ordered.
   * Quantity
   * Cardinality: 0..1
   */
  MultipleOrderQuantity: [Quantity] | undefined

  /**
   * The number of days between regular replenishment orders for the product.
   * Numeric
   * Cardinality: 0..1
   */
  OrderIntervalDaysNumeric: [Numeric] | undefined

  /**
   * The trading partner maintaining this item management profile.
   * Text
   * Cardinality: 0..n
   */
  ReplenishmentOwnerDescription: Array<Text> | undefined

  /**
   * The Unit Service Level the trading partners expect to be maintained, expressed as a percentage. Unite Service Level
   * (USL) is a term used in Inventory Management, which is sometimes known as "fill rate", counts the average number of
   * units short expressed as the percentage of the order quantity.
   * Percent
   * Cardinality: 0..1
   */
  TargetServicePercent: [Numeric] | undefined

  /**
   * The target inventory quantity.
   * Quantity
   * Cardinality: 0..1
   */
  TargetInventoryQuantity: [Quantity] | undefined

  /**
   * The period during which this profile is effective.
   * Period
   * Cardinality: 1
   */
  EffectivePeriod: [Period]

  /**
   * The item associated with this item management profile.
   * Item
   * Cardinality: 1
   */
  Item: [Item]

  /**
   * A set of location-specific properties (e.g., price and quantity) associated with the item.
   * Item Location Quantity
   * Cardinality: 0..1
   */
  ItemLocationQuantity: [ItemLocationQuantity] | undefined
}
