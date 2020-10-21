import { Code } from '../cbc/Code'
import { ContractingParty } from '../cac/ContractingParty'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { Signature } from '../cac/Signature'
import { TenderedProject } from '../cac/TenderedProject'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document whereby an economic operator (the tenderer) makes a formal offer (the tender) to a contracting authority
 * to execute an order for the supply or purchase of goods, or for the execution of work, according to the terms of a
 * proposed contract.
 */
export interface Tender {
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
   * Cardinality: 1
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
   * A code to specify the type of tender (economical or objective criteria versus technical or subjective criteria)
   * Code
   * Cardinality: 0..1
   */
  TenderTypeCode?: [Code] | undefined

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
   * Short title of a contract associated with this Tender.
   * Text
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
   * The period for which the Tender is valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: [Period] | undefined

  /**
   * A reference to another document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The primary tenderer.
   * Party
   * Cardinality: 1
   */
  TendererParty: [Party]

  /**
   * A reference to the tenderer qualification document that has been used to qualify the tenderer.
   * Document Reference
   * Cardinality: 0..1
   */
  TendererQualificationDocumentReference?: [DocumentReference] | undefined

  /**
   * A subcontractor or other tenderer participating in the same Tender.
   * Party
   * Cardinality: 0..n
   */
  SubcontractorParty?: Array<Party> | undefined

  /**
   * The contracting party.
   * Contracting Party
   * Cardinality: 0..1
   */
  ContractingParty?: [ContractingParty] | undefined

  /**
   * The party originating the Tender.
   * Customer Party
   * Cardinality: 0..1
   */
  OriginatorCustomerParty?: [CustomerParty] | undefined

  /**
   * A project with which this Tender is associated. A single Tender can be used to bid for one project, multiple
   * projects, or the global project.
   * Tendered Project
   * Cardinality: 1..n
   */
  TenderedProject: Array<TenderedProject>
}
