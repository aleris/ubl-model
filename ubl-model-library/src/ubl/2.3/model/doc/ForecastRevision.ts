import { Code } from '../cbc/Code'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { ForecastRevisionLine } from '../cac/ForecastRevisionLine'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document used to revise a Forecast.
 */
export interface ForecastRevision {
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
   * Alternative business terms: Forecast Revision Number
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
   * Cardinality: 1
   * Alternative business terms: Forecast Date
   */
  IssueDate: Array<Date>

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
   * A sequence number, to ensure the proper sequencing of revisions.
   * Identifier
   * Cardinality: 1
   */
  SequenceNumberID: Array<Identifier>

  /**
   * Indicates the revision status of this Forecast Revision.
   * Code
   * Cardinality: 0..1
   */
  RevisionStatusCode?: Array<Code> | undefined

  /**
   * Indicates the purpose of the revision.
   * Code
   * Cardinality: 0..1
   */
  PurposeCode?: Array<Code> | undefined

  /**
   * The period to which the Forecast applies.
   * Period
   * Cardinality: 1
   */
  ForecastPeriod: Array<Period>

  /**
   * The Forecast document being revised.
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
   * A line that revises a line in the Forecast.
   * Forecast Revision Line
   * Cardinality: 1..n
   */
  ForecastRevisionLine: Array<ForecastRevisionLine>
}
