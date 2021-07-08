import { ActivityProperty } from './ActivityProperty'
import { Item } from './Item'
import { Price } from './Price'
import { Quantity } from '../cbc/Quantity'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe information related to an item in a sales context
 */
export interface SalesItem {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The quantity the given information are related to
   * Quantity
   * Cardinality: 1
   */
  Quantity: Array<Quantity>

  /**
   * A class to describe the activity (for example "sales", "movement", ...) related to the item.
   * Activity Property
   * Cardinality: 0..n
   */
  ActivityProperty?: Array<ActivityProperty> | undefined

  /**
   * A price for this sales item, exclusive of tax.
   * Price
   * Cardinality: 0..n
   */
  TaxExclusivePrice?: Array<Price> | undefined

  /**
   * A price for this sales item, including tax.
   * Price
   * Cardinality: 0..n
   */
  TaxInclusivePrice?: Array<Price> | undefined

  /**
   * The sales item itself.
   * Item
   * Cardinality: 1
   */
  Item: Array<Item>
}
