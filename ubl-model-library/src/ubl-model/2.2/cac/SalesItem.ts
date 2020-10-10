import { ActivityProperty } from './ActivityProperty'
import { Item } from './Item'
import { Price } from './Price'
import { Quantity } from '../cbc/Quantity'

/**
 * A class to describe information related to an item in a sales context
 */
export interface SalesItem {
  /**
   * The quantity the given information are related to
   * Quantity
   * Cardinality: 1
   */
  Quantity: [Quantity]

  /**
   * A class to describe the activity (for example "sales", "movement", ...) related to the item.
   * Activity Property
   * Cardinality: 0..n
   */
  ActivityProperty: Array<ActivityProperty> | undefined

  /**
   * A price for this sales item, exclusive of tax.
   * Price
   * Cardinality: 0..n
   */
  TaxExclusivePrice: Array<Price> | undefined

  /**
   * A price for this sales item, including tax.
   * Price
   * Cardinality: 0..n
   */
  TaxInclusivePrice: Array<Price> | undefined

  /**
   * The sales item itself.
   * Item
   * Cardinality: 1
   */
  Item: [Item]
}
