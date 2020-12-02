import { Code } from '../cbc/Code'
import { Country } from '../cac/Country'
import { Date } from '../cbc/Date'
import { DigitalAgreementTerms } from '../cac/DigitalAgreementTerms'
import { DigitalProcess } from '../cac/DigitalProcess'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { ParticipantParty } from '../cac/ParticipantParty'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used to support business parties agreeing on a set of digital processes, terms and conditions to ensure
 * interoperability.
 */
export interface DigitalAgreement {
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
   * Examples: EESPA
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
   * A code signifying the type of digital agreement (e.g. bi-lateral, multi-lateral).
   * Code
   * Cardinality: 0..1
   * Examples: multi-lateral
   */
  AgreementTypeCode?: Array<Code> | undefined

  /**
   * Identifies the current version of this digital agreement.
   * Identifier
   * Cardinality: 1
   * Examples: 1.1
   */
  VersionID: Array<Identifier>

  /**
   * Identifies the previous version of this digital agreement.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1
   */
  PreviousVersionID?: Array<Identifier> | undefined

  /**
   * A code signifying the minimum response message level the parties are required to provide (e.g. EESPA response
   * message level).
   * Code
   * Cardinality: 0..1
   * Examples: RM2
   */
  RequiredResponseMessageLevelCode?: Array<Code> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party governing the agreement (e.g. a multi-lateral digital agreement).
   * Party
   * Cardinality: 0..1
   */
  GovernorParty?: Array<Party> | undefined

  /**
   * The business parties agreeing on a set of digital processes, terms and conditions to ensure interoperability.
   * Participant Party
   * Cardinality: 1..n
   */
  ParticipantParty: Array<ParticipantParty>

  /**
   * The country to which this digital agreement applies.
   * Country
   * Cardinality: 0..n
   */
  AgreementCountry?: Array<Country> | undefined

  /**
   * A reference to a certification document required by this digital agreement.
   * Document Reference
   * Cardinality: 0..n
   */
  RequiredCertificationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to digital agreement terms and conditions.
   * Digital Agreement Terms
   * Cardinality: 0..1
   */
  DigitalAgreementTerms?: Array<DigitalAgreementTerms> | undefined

  /**
   * The digital processes in scope of this digital agreement.
   * Digital Process
   * Cardinality: 1..n
   */
  DigitalProcess: Array<DigitalProcess>
}
