import { Date } from '../cbc/Date'
import { DigitalProcess } from '../cac/DigitalProcess'
import { Identifier } from '../cbc/Identifier'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document used to provide information about a business party and its digital trade capabilities.
 */
export interface DigitalCapability {
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
   * Examples: 2.2
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
   */
  ID: Array<Identifier>

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
   */
  IssueDate: Array<Date>

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * Identifies the current version of party's digital capabilities.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1
   */
  VersionID?: Array<Identifier> | undefined

  /**
   * Identifies the previous version of party's digital capabilities.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1
   */
  PreviousVersionID?: Array<Identifier> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party sending these digital capabilities. This party could be the owner of these digital capabilities or a
   * third-party acting on behalf of the owner (e.g. service provider).
   * Party
   * Cardinality: 0..1
   */
  SenderParty?: Array<Party> | undefined

  /**
   * The party receiving these digital capabilities.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty?: Array<Party> | undefined

  /**
   * The party owning these digital capabilities.
   * Party
   * Cardinality: 1
   */
  BusinessParty: Array<Party>

  /**
   * The digital trade processes supported by the party.
   * Digital Process
   * Cardinality: 1..n
   */
  DigitalProcess: Array<DigitalProcess>
}
