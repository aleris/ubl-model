import { Contract } from '../cac/Contract'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { OrderReference } from '../cac/OrderReference'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used to cancel an entire fulfilment document (Despatch Advice or Receipt Advice).
 */
export interface FulfilmentCancellation {
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
   * Identifies a user-defined profile of the customization of UBL being used.
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
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * The reason for cancellation of the referenced document.
   * Text
   * Cardinality: 1..n
   */
  CancellationNote: Array<Text>

  /**
   * A reference to a Despatch Advice associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  DespatchDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to a Receipt Advice associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  ReceiptDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to an Order document associated with the referenced Despatch or Receipt Advice(s).
   * Order Reference
   * Cardinality: 0..n
   */
  OrderReference: Array<OrderReference> | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference: Array<DocumentReference> | undefined

  /**
   * The contracts or framework agreements with which the referenced fulfilment document is associated.
   * Contract
   * Cardinality: 0..n
   */
  Contract: Array<Contract> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The buyer.
   * Customer Party
   * Cardinality: 1
   */
  BuyerCustomerParty: [CustomerParty]

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 1
   */
  SellerSupplierParty: [SupplierParty]

  /**
   * The delivery party.
   * Customer Party
   * Cardinality: 0..1
   */
  DeliveryCustomerParty: [CustomerParty] | undefined

  /**
   * The despatch party.
   * Supplier Party
   * Cardinality: 0..1
   */
  DespatchSupplierParty: [SupplierParty] | undefined

  /**
   * The originator party
   * Customer Party
   * Cardinality: 0..1
   */
  OriginatorCustomerParty: [CustomerParty] | undefined
}
