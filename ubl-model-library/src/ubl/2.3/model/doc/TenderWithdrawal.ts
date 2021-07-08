import { ContractingParty } from '../cac/ContractingParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document sent by an Economic Operator to a Contracting Party with the intention of withdrawing a previously sent
 * Tender document.
 */
export interface TenderWithdrawal {
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
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

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
   * An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.
   * Identifier
   * Cardinality: 0..1
   */
  ContractFolderID?: Array<Identifier> | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: Array<Date>

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * Short title of a contract associated with this Tender.
   * Name
   * Cardinality: 0..n
   */
  ContractName?: Array<Text> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Indicates whether the referred tender has to be withdrawn (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  WithdrawOfferIndicator?: Array<Indicator> | undefined

  /**
   * A reference to a received Tender.
   * Document Reference
   * Cardinality: 0..n
   */
  TenderDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to the Tender Receipt Notification.
   * Document Reference
   * Cardinality: 0..n
   */
  TenderNotificationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The Contracting Party or parties in case of joint procurement.
   * Contracting Party
   * Cardinality: 1..n
   */
  ContractingParty: Array<ContractingParty>

  /**
   * The economic operator or the main tenderer in case of a consortium that is withdrawing the tender.
   * Party
   * Cardinality: 1
   */
  TendererParty: Array<Party>
}
