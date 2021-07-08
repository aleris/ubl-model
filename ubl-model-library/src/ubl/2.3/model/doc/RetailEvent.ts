import { Code } from '../cbc/Code'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { EventComment } from '../cac/EventComment'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { MiscellaneousEvent } from '../cac/MiscellaneousEvent'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { PromotionalEvent } from '../cac/PromotionalEvent'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document used to specify basic information about retail events (such as promotions, product introductions, and
 * community or environmental events) that affect supply or demand.
 */
export interface RetailEvent {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID?: Array<Identifier> | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID?: Array<Identifier> | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Retail Event Number
   */
  ID: Array<Identifier>

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: Array<Indicator> | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 0..1
   * Alternative business terms: Retail Event Date
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * A title, theme, slogan, or other identifier for the event for use by trading partners.
   * Name
   * Cardinality: 0..1
   */
  RetailEventName?: Array<Text> | undefined

  /**
   * Describes the logical state of the discrete activity affecting supply or demand in the supply chain
   * Code
   * Cardinality: 1
   */
  RetailEventStatusCode: Array<Code>

  /**
   * An event tracking identifier assigned by the seller.
   * Identifier
   * Cardinality: 0..1
   */
  SellerEventID?: Array<Identifier> | undefined

  /**
   * An event tracking identifier assigned by the buyer.
   * Identifier
   * Cardinality: 0..1
   */
  BuyerEventID?: Array<Identifier> | undefined

  /**
   * Definition of the discrete activity affecting supply or demand in the supply chain
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The period during which the event takes place.
   * Period
   * Cardinality: 1
   */
  Period: Array<Period>

  /**
   * A reference to a Forecast document associated with this event.
   * Document Reference
   * Cardinality: 0..n
   */
  OriginalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party sending this document.
   * Party
   * Cardinality: 1
   */
  SenderParty: Array<Party>

  /**
   * The party receiving this document.
   * Party
   * Cardinality: 1
   */
  ReceiverParty: Array<Party>

  /**
   * The buyer.
   * Customer Party
   * Cardinality: 0..1
   */
  BuyerCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty?: Array<SupplierParty> | undefined

  /**
   * A comment regarding the event.
   * Event Comment
   * Cardinality: 0..n
   */
  EventComment?: Array<EventComment> | undefined

  /**
   * The description of a promotional event associated with this event.
   * Promotional Event
   * Cardinality: 0..1
   */
  PromotionalEvent?: Array<PromotionalEvent> | undefined

  /**
   * A miscellaneous event associated with this event.
   * Miscellaneous Event
   * Cardinality: 0..1
   */
  MiscellaneousEvent?: Array<MiscellaneousEvent> | undefined
}
