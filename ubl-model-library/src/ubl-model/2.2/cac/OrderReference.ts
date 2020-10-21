import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to define a reference to an Order.
 */
export interface OrderReference {
  /**
   * An identifier for this order reference, assigned by the buyer.
   * Identifier
   * Cardinality: 1
   * Examples: PO-001 3333-44-123
   */
  ID: [Identifier]

  /**
   * An identifier for this order reference, assigned by the seller.
   * Identifier
   * Cardinality: 0..1
   */
  SalesOrderID?: [Identifier] | undefined

  /**
   * Indicates whether the referenced Order is a copy (true) or the original (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: [Indicator] | undefined

  /**
   * A universally unique identifier for this order reference.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

  /**
   * The date on which the referenced Order was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: [Date] | undefined

  /**
   * The time at which the referenced Order was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: [Time] | undefined

  /**
   * Text used for tagging purchasing card transactions.
   * Text
   * Cardinality: 0..1
   */
  CustomerReference?: [Text] | undefined

  /**
   * A code signifying the type of the referenced Order.
   * Code
   * Cardinality: 0..1
   */
  OrderTypeCode?: [Code] | undefined

  /**
   * A document associated with this reference to an Order.
   * Document Reference
   * Cardinality: 0..1
   */
  DocumentReference?: [DocumentReference] | undefined
}
