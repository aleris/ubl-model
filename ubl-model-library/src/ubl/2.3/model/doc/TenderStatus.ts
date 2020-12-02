import { Code } from '../cbc/Code'
import { ContractingParty } from '../cac/ContractingParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { EconomicOperatorParty } from '../cac/EconomicOperatorParty'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { ProcurementProject } from '../cac/ProcurementProject'
import { ProcurementProjectLot } from '../cac/ProcurementProjectLot'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document sent by the Contracting Party to an Economic Operator describing the status of a tendering procedure.
 */
export interface TenderStatus {
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
   * A code signifying the type of this tendering procedure.
   * Code
   * Cardinality: 0..1
   * Examples: Open, Restricted, Negotiated
   */
  ProcedureCode?: Array<Code> | undefined

  /**
   * The period during which tenders must be delivered.
   * Period
   * Cardinality: 0..1
   */
  TenderSubmissionDeadlinePeriod?: Array<Period> | undefined

  /**
   * The period during which invitations to tender must be completed and delivered.
   * Period
   * Cardinality: 0..1
   */
  InvitationSubmissionPeriod?: Array<Period> | undefined

  /**
   * The period during which requests for participation must be completed and delivered.
   * Period
   * Cardinality: 0..1
   */
  ParticipationRequestReceptionPeriod?: Array<Period> | undefined

  /**
   * A reference to a document providing references to procurement legislation applicable to the tendering process.
   * Document Reference
   * Cardinality: 0..1
   */
  ProcurementLegislationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a document providing references to fiscal legislation applicable to the tendering process.
   * Document Reference
   * Cardinality: 0..1
   */
  FiscalLegislationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a document providing references to environmental legislation applicable to the tendering process.
   * Document Reference
   * Cardinality: 0..1
   */
  EnvironmentalLegislationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a document providing references to employment legislation applicable to the tendering process.
   * Document Reference
   * Cardinality: 0..1
   */
  EmploymentLegislationDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a received Tender status inquiry.
   * Document Reference
   * Cardinality: 0..n
   */
  TenderStatusInquiryDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The Contracting Party issuing the information about the tender status.
   * Contracting Party
   * Cardinality: 1
   */
  ContractingParty: Array<ContractingParty>

  /**
   * The Economic Operator receiving the tender status information.
   * Economic Operator Party
   * Cardinality: 1
   */
  EconomicOperatorParty: Array<EconomicOperatorParty>

  /**
   * The party that has the contract documents for the tendering process.
   * Party
   * Cardinality: 0..1
   */
  DocumentProviderParty?: Array<Party> | undefined

  /**
   * The party to which tenders should be presented.
   * Party
   * Cardinality: 0..1
   */
  TenderRecipientParty?: Array<Party> | undefined

  /**
   * An overall definition of this procurement project.
   * Procurement Project
   * Cardinality: 0..1
   */
  ProcurementProject?: Array<ProcurementProject> | undefined

  /**
   * One of the procurement project lots into which this contract can be split.
   * Procurement Project Lot
   * Cardinality: 0..n
   */
  ProcurementProjectLot?: Array<ProcurementProjectLot> | undefined
}
