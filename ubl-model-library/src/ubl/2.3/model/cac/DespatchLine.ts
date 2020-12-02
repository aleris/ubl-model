import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { OrderLineReference } from './OrderLineReference'
import { Quantity } from '../cbc/Quantity'
import { Shipment } from './Shipment'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a line in a Despatch Advice.
 */
export interface DespatchLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this despatch line.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * A universally unique identifier for this despatch line.
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
   * A code signifying the status of this despatch line with respect to its original state.
   * Code
   * Cardinality: 0..1
   */
  LineStatusCode?: Array<Code> | undefined

  /**
   * The quantity despatched (picked up).
   * Quantity
   * Cardinality: 0..1
   */
  DeliveredQuantity?: Array<Quantity> | undefined

  /**
   * The quantity on back order at the supplier.
   * Quantity
   * Cardinality: 0..1
   */
  BackorderQuantity?: Array<Quantity> | undefined

  /**
   * The reason for the back order.
   * Text
   * Cardinality: 0..n
   */
  BackorderReason?: Array<Text> | undefined

  /**
   * The quantity outstanding (which will follow in a later despatch).
   * Quantity
   * Cardinality: 0..1
   */
  OutstandingQuantity?: Array<Quantity> | undefined

  /**
   * The reason for the outstanding quantity.
   * Text
   * Cardinality: 0..n
   */
  OutstandingReason?: Array<Text> | undefined

  /**
   * The quantity over-supplied, i.e., the quantity over and above that ordered.
   * Quantity
   * Cardinality: 0..1
   */
  OversupplyQuantity?: Array<Quantity> | undefined

  /**
   * A reference to an order line associated with this despatch line.
   * Order Line Reference
   * Cardinality: 1..n
   */
  OrderLineReference: Array<OrderLineReference>

  /**
   * A reference to a document associated with this despatch line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * The item associated with this despatch line.
   * Item
   * Cardinality: 1
   */
  Item: Array<Item>

  /**
   * A shipment associated with this despatch line.
   * Shipment
   * Cardinality: 0..n
   */
  Shipment?: Array<Shipment> | undefined
}
