import { Capability } from '../cac/Capability'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used to provide information about a business party and its business capabilities.
 */
export interface BusinessCard {
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
   * Examples: 2.2
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
   * Cardinality: 1
   */
  ID: [Identifier]

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
   * Identifies the current version of this business card.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1
   */
  VersionID?: [Identifier] | undefined

  /**
   * Identifies the previous version of this business card.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1
   */
  PreviousVersionID?: [Identifier] | undefined

  /**
   * Textual description of the document instance.
   * Text
   * Cardinality: 0..n
   */
  BriefDescription?: Array<Text> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party sending this business card. This party could be the owner of this business card or a third-party acting
   * on behalf of the owner (e.g. business network).
   * Party
   * Cardinality: 0..1
   */
  SenderParty?: [Party] | undefined

  /**
   * The party receiving this business card.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty?: [Party] | undefined

  /**
   * The party owning this business card.
   * Party
   * Cardinality: 1
   */
  BusinessParty: [Party]

  /**
   * A reference to a company brochure document.
   * Document Reference
   * Cardinality: 0..n
   */
  BrochureDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document (e.g. presentations).
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * The business capabilities of the party.
   * Capability
   * Cardinality: 0..n
   */
  BusinessCapability?: Array<Capability> | undefined
}
