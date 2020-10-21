import { Code } from '../cbc/Code'
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
 * A document used to indicate simple acceptance or rejection of an entire Order.
 */
export interface OrderResponseSimple {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: [UBLExtensions] | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID?: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID?: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID?: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileExecutionID?: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Purchase Order Response Number, Acknowledgement of Order Number
   */
  ID: [Identifier]

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: [Indicator] | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

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
  IssueTime?: [Time] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Indicates whether the Order is accepted (true) or rejected (false).
   * Indicator
   * Cardinality: 1
   */
  AcceptedIndicator: [Indicator]

  /**
   * The reason for rejection if the order was not accepted.
   * Text
   * Cardinality: 0..n
   * Examples: Out of Stock , Not able to supply , Unable to fulfill within the contracted conditions , Buyer Account
   * Examples: not Recognised
   */
  RejectionNote?: Array<Text> | undefined

  /**
   * A supplementary reference for the transaction (e.g., when using a purchasing card).
   * Text
   * Cardinality: 0..1
   */
  CustomerReference?: [Text] | undefined

  /**
   * An accounting cost code applied to the order as a whole.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode?: [Code] | undefined

  /**
   * An accounting cost code applied to the order as a whole, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost?: [Text] | undefined

  /**
   * A reference to the Order being responded to.
   * Order Reference
   * Cardinality: 1
   */
  OrderReference: [OrderReference]

  /**
   * A reference to an Order Change being responded to.
   * Document Reference
   * Cardinality: 0..n
   */
  OrderChangeDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 1
   */
  SellerSupplierParty: [SupplierParty]

  /**
   * The buyer.
   * Customer Party
   * Cardinality: 1
   */
  BuyerCustomerParty: [CustomerParty]

  /**
   * The originator.
   * Customer Party
   * Cardinality: 0..1
   */
  OriginatorCustomerParty?: [CustomerParty] | undefined

  /**
   * The accounting supplier party.
   * Supplier Party
   * Cardinality: 0..1
   */
  AccountingSupplierParty?: [SupplierParty] | undefined

  /**
   * The accounting customer party.
   * Customer Party
   * Cardinality: 0..1
   */
  AccountingCustomerParty?: [CustomerParty] | undefined
}
