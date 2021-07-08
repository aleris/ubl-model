import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a line in a Stock Availability Report describing the availability of an item of sale.
 */
export interface StockAvailabilityReportLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this stock availability line.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The quantity of the item currently in stock.
   * Quantity
   * Cardinality: 1
   */
  Quantity: Array<Quantity>

  /**
   * The monetary value of the quantity of the item currently in stock.
   * Amount
   * Cardinality: 0..1
   */
  ValueAmount?: Array<Amount> | undefined

  /**
   * The date from which the item will be available. A date identical to or earlier than the IssueDate of the Stock
   * Availability Report means that the item is available now
   * Date
   * Cardinality: 0..1
   */
  AvailabilityDate?: Array<Date> | undefined

  /**
   * A code signifying the level of availability of the item.
   * Code
   * Cardinality: 0..1
   */
  AvailabilityStatusCode?: Array<Code> | undefined

  /**
   * The item associated with this stock availability report line.
   * Item
   * Cardinality: 1
   */
  Item: Array<Item>
}
