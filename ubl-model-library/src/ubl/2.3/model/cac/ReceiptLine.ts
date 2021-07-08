import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { LineReference } from './LineReference'
import { OrderLineReference } from './OrderLineReference'
import { Quantity } from '../cbc/Quantity'
import { Shipment } from './Shipment'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a line in a Receipt Advice.
 */
export interface ReceiptLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this receipt line.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * A universally unique identifier for this receipt line.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The quantity received.
   * Quantity
   * Cardinality: 0..1
   */
  ReceivedQuantity?: Array<Quantity> | undefined

  /**
   * The quantity received short; the difference between the quantity reported despatched and the quantity actually
   * received.
   * Quantity
   * Cardinality: 0..1
   */
  ShortQuantity?: Array<Quantity> | undefined

  /**
   * A code signifying the action that the delivery party wishes the despatch party to take as the result of a shortage.
   * Code
   * Cardinality: 0..1
   */
  ShortageActionCode?: Array<Code> | undefined

  /**
   * The quantity rejected.
   * Quantity
   * Cardinality: 0..1
   */
  RejectedQuantity?: Array<Quantity> | undefined

  /**
   * The reason for a rejection, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  RejectReasonCode?: Array<Code> | undefined

  /**
   * The reason for a rejection, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  RejectReason?: Array<Text> | undefined

  /**
   * A code signifying the action that the delivery party wishes the despatch party to take as the result of a
   * rejection.
   * Code
   * Cardinality: 0..1
   */
  RejectActionCode?: Array<Code> | undefined

  /**
   * A code signifying the type of a discrepancy in quantity.
   * Code
   * Cardinality: 0..1
   */
  QuantityDiscrepancyCode?: Array<Code> | undefined

  /**
   * The quantity over-supplied, i.e., the quantity over and above the quantity ordered.
   * Quantity
   * Cardinality: 0..1
   */
  OversupplyQuantity?: Array<Quantity> | undefined

  /**
   * The date on which the goods or services were received.
   * Date
   * Cardinality: 0..1
   */
  ReceivedDate?: Array<Date> | undefined

  /**
   * A complaint about the timing of delivery, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  TimingComplaintCode?: Array<Code> | undefined

  /**
   * A complaint about the timing of delivery, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  TimingComplaint?: Array<Text> | undefined

  /**
   * A reference to the order line associated with this receipt line.
   * Order Line Reference
   * Cardinality: 0..1
   */
  OrderLineReference?: Array<OrderLineReference> | undefined

  /**
   * A reference to a despatch line associated with this receipt line.
   * Line Reference
   * Cardinality: 0..n
   */
  DespatchLineReference?: Array<LineReference> | undefined

  /**
   * A reference to a document associated with this receipt line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * An item associated with this receipt line.
   * Item
   * Cardinality: 0..n
   */
  Item?: Array<Item> | undefined

  /**
   * A shipment associated with this receipt line.
   * Shipment
   * Cardinality: 0..n
   */
  Shipment?: Array<Shipment> | undefined
}
