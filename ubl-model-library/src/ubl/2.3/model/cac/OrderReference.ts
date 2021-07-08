import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a reference to an Order.
 */
export interface OrderReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this order reference, assigned by the buyer.
   * Identifier
   * Cardinality: 1
   * Examples: PO-001 3333-44-123
   */
  ID: Array<Identifier>

  /**
   * An identifier for this order reference, assigned by the seller.
   * Identifier
   * Cardinality: 0..1
   */
  SalesOrderID?: Array<Identifier> | undefined

  /**
   * Indicates whether the referenced Order is a copy (true) or the original (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: Array<Indicator> | undefined

  /**
   * A universally unique identifier for this order reference.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * The date on which the referenced Order was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The time at which the referenced Order was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * Text used for tagging purchasing card transactions.
   * Text
   * Cardinality: 0..1
   */
  CustomerReference?: Array<Text> | undefined

  /**
   * A code signifying the type of the referenced Order.
   * Code
   * Cardinality: 0..1
   */
  OrderTypeCode?: Array<Code> | undefined

  /**
   * A document associated with this reference to an Order.
   * Document Reference
   * Cardinality: 0..1
   */
  DocumentReference?: Array<DocumentReference> | undefined
}
