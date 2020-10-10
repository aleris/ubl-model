import { ContractingParty } from '../cac/ContractingParty'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { ProcurementProject } from '../cac/ProcurementProject'
import { ProcurementProjectLot } from '../cac/ProcurementProjectLot'
import { Signature } from '../cac/Signature'
import { TenderingProcess } from '../cac/TenderingProcess'
import { TenderingTerms } from '../cac/TenderingTerms'
import { TenderResult } from '../cac/TenderResult'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document published by a Contracting Party to announce the awarding of a procurement project.
 */
export interface ContractAwardNotice {
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
   */
  UBLVersionID: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   */
  CustomizationID: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
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
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

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
  IssueTime: [Time] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * Information about the law that defines the regulatory domain.
   * Text
   * Cardinality: 0..n
   */
  RegulatoryDomain: Array<Text> | undefined

  /**
   * An indicator specifying if the notice is published for service contracts within certain service categories (true)
   * or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  PublishAwardIndicator: [Indicator] | undefined

  /**
   * A reference to a previously sent document.
   * Document Reference
   * Cardinality: 0..n
   */
  PreviousDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to a set of minutes.
   * Document Reference
   * Cardinality: 0..n
   */
  MinutesDocumentReference: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The contracting party.
   * Contracting Party
   * Cardinality: 1
   */
  ContractingParty: [ContractingParty]

  /**
   * The party who originated Order.
   * Customer Party
   * Cardinality: 0..1
   */
  OriginatorCustomerParty: [CustomerParty] | undefined

  /**
   * The party receiving this document.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty: [Party] | undefined

  /**
   * The tendering terms associated with this tendering process.
   * Tendering Terms
   * Cardinality: 0..1
   */
  TenderingTerms: [TenderingTerms] | undefined

  /**
   * A description of the tendering process itself.
   * Tendering Process
   * Cardinality: 0..1
   */
  TenderingProcess: [TenderingProcess] | undefined

  /**
   * An overall definition of this procurement project.
   * Procurement Project
   * Cardinality: 0..1
   */
  ProcurementProject: [ProcurementProject] | undefined

  /**
   * One of the procurement project lots into which this contract can be split.
   * Procurement Project Lot
   * Cardinality: 0..n
   */
  ProcurementProjectLot: Array<ProcurementProjectLot> | undefined

  /**
   * A result of the bid opening in the tendering process.
   * Tender Result
   * Cardinality: 1..n
   */
  TenderResult: Array<TenderResult>
}
