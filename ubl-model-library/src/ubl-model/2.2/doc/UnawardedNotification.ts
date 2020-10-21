import { AppealTerms } from '../cac/AppealTerms'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { TenderResult } from '../cac/TenderResult'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document communicating to a tenderer that the contract has been awarded to different tenderer.
 */
export interface UnawardedNotification {
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
   * Examples: BPP-1001
   */
  ProfileExecutionID?: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

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
   * An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.
   * Identifier
   * Cardinality: 1
   */
  ContractFolderID: [Identifier]

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
   * The name, expressed as text, of this procurement project.
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
  SenderParty: [Party]

  /**
   * The party receiving this document.
   * Party
   * Cardinality: 1
   */
  ReceiverParty: [Party]

  /**
   * A reference to a set of minutes associated with this award.
   * Document Reference
   * Cardinality: 0..1
   */
  MinutesDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to an additional document associated with this document. It can be used to include annex documents such
   * as the minutes of the awarding process meetings.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * An association to the Tender Result being notified
   * Tender Result
   * Cardinality: 1..n
   */
  TenderResult: Array<TenderResult>

  /**
   * Terms of appeal for this tendering process.
   * Appeal Terms
   * Cardinality: 0..1
   */
  AppealTerms?: [AppealTerms] | undefined
}
