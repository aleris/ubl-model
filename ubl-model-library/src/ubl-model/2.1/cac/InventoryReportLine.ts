import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { Location } from './Location'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to define a line in an Inventory Report.
 */
export interface InventoryReportLine {
  /**
   * An identifier for this inventory report line.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The quantity of the item reported that is currently in stock.
   * Quantity
   * Cardinality: 1
   */
  Quantity: [Quantity]

  /**
   * The value of the quantity of the item reported that is currently in stock.
   * Amount
   * Cardinality: 0..1
   */
  InventoryValueAmount?: [Amount] | undefined

  /**
   * The date from which the goods will be available. If not present, the goods are available now.
   * Date
   * Cardinality: 0..1
   */
  AvailabilityDate?: [Date] | undefined

  /**
   * A code signifying the item's level of availability.
   * Code
   * Cardinality: 0..1
   */
  AvailabilityStatusCode?: [Code] | undefined

  /**
   * The item associated with this inventory report line.
   * Item
   * Cardinality: 1
   */
  Item: [Item]

  /**
   * The location of the reported quantity of goods.
   * Location
   * Cardinality: 0..1
   */
  InventoryLocation?: [Location] | undefined
}
