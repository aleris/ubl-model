import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { LineItem } from './LineItem'
import { LineReference } from './LineReference'
import { OrderLineReference } from './OrderLineReference'
import { Text } from '../cbc/Text'

/**
 * A class to define a line in an order document (e.g., Order, Order Change, or Order Response) describing an item being
 * ordered.
 */
export interface OrderLine {
  /**
   * A code signifying the substitution status of the item on this order line. The order line may indicate that the
   * substitute is proposed by the buyer (in Order) or by the seller (in Order Response) or that a substitution has been
   * made by the seller (in Order Response).
   * Code
   * Cardinality: 0..1
   */
  SubstitutionStatusCode: [Code] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * The line item itself.
   * Line Item
   * Cardinality: 1
   */
  LineItem: [LineItem]

  /**
   * In Order Response, a line item proposed by the seller describing a product that might substitute for the product
   * described in this order line.
   * Line Item
   * Cardinality: 0..n
   */
  SellerProposedSubstituteLineItem: Array<LineItem> | undefined

  /**
   * In Order Response, a line item that has replaced the original order line item. The specified quantity and pricing
   * may differ from those in the original line item, but when a line item is substituted by the seller, it is assumed
   * that other information, such as shipment details, will remain the same.
   * Line Item
   * Cardinality: 0..n
   */
  SellerSubstitutedLineItem: Array<LineItem> | undefined

  /**
   * A description of an item proposed by the buyer as a possible alternative to the item associated with this order
   * line.
   * Line Item
   * Cardinality: 0..n
   */
  BuyerProposedSubstituteLineItem: Array<LineItem> | undefined

  /**
   * A reference to a catalogue line associated with this order line.
   * Line Reference
   * Cardinality: 0..1
   */
  CatalogueLineReference: [LineReference] | undefined

  /**
   * A reference to a quotation line associated with this order line.
   * Line Reference
   * Cardinality: 0..1
   */
  QuotationLineReference: [LineReference] | undefined

  /**
   * A reference to another order line, such as in a replacement order or another line on the same order that is
   * related.
   * Order Line Reference
   * Cardinality: 0..n
   */
  OrderLineReference: Array<OrderLineReference> | undefined

  /**
   * A reference to a document associated with this order line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference: Array<DocumentReference> | undefined
}
