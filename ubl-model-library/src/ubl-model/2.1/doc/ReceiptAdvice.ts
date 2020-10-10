import { Code } from '../cbc/Code'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { OrderReference } from '../cac/OrderReference'
import { ReceiptLine } from '../cac/ReceiptLine'
import { Shipment } from '../cac/Shipment'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used to describe the receipt of goods and services.
 */
export interface ReceiptAdvice {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions: [UBLExtensions] | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the subset of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileExecutionID: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator: [Indicator] | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * A code signifying the status of the Receipt Advice with respect to its original state. This code may be used if the
   * document precedes the event and is subsequently found to be incorrect and in need of cancellation or revision.
   * Code
   * Cardinality: 0..1
   */
  DocumentStatusCode: [Code] | undefined

  /**
   * A code signifying the type of the Receipt Advice.
   * Code
   * Cardinality: 0..1
   */
  ReceiptAdviceTypeCode: [Code] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * The number of Receipt Lines in this document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric: [Numeric] | undefined

  /**
   * A reference to an Order associated with this Receipt Advice.
   * Order Reference
   * Cardinality: 0..n
   */
  OrderReference: Array<OrderReference> | undefined

  /**
   * A reference to a Despatch Advice associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  DespatchDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The customer party.
   * Customer Party
   * Cardinality: 1
   */
  DeliveryCustomerParty: [CustomerParty]

  /**
   * The supplier party.
   * Supplier Party
   * Cardinality: 1
   */
  DespatchSupplierParty: [SupplierParty]

  /**
   * The buyer.
   * Customer Party
   * Cardinality: 0..1
   */
  BuyerCustomerParty: [CustomerParty] | undefined

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty: [SupplierParty] | undefined

  /**
   * Details about the Shipment.
   * Shipment
   * Cardinality: 0..1
   */
  Shipment: [Shipment] | undefined

  /**
   * A line detailing a kind of item received.
   * Receipt Line
   * Cardinality: 1..n
   */
  ReceiptLine: Array<ReceiptLine>
}
