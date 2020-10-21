import { Code } from '../cbc/Code'
import { ContractingParty } from '../cac/ContractingParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { EconomicOperatorParty } from '../cac/EconomicOperatorParty'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { ProcurementProject } from '../cac/ProcurementProject'
import { ProcurementProjectLot } from '../cac/ProcurementProjectLot'
import { Signature } from '../cac/Signature'
import { TenderingCriterion } from '../cac/TenderingCriterion'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document issued by a procurement organization to notify an economic operator whether it has been admitted to or
 * excluded from the tendering process.
 */
export interface QualificationApplicationRequest {
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
   * Short title of a contract associated with this Tender.
   * Name
   * Cardinality: 0..n
   */
  ContractName?: Array<Text> | undefined

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
   * Indicates the current version of the Qualification Application Request.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1
   */
  VersionID?: [Identifier] | undefined

  /**
   * Identifies the previous version of the Qualification Application Request which is superceded by this version.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.0
   */
  PreviousVersionID?: [Identifier] | undefined

  /**
   * A code signifying the type of this tendering procedure.
   * Code
   * Cardinality: 0..1
   * Examples: Open, Restricted, Negotiated
   */
  ProcedureCode?: [Code] | undefined

  /**
   * A code specifying the type of the Qualification Application.
   * Code
   * Cardinality: 0..1
   * Examples: "Regulated", "Self-contained"
   */
  QualificationApplicationTypeCode?: [Code] | undefined

  /**
   * Free-form text to describing information about Weight Scoring Methodology.
   * Text
   * Cardinality: 0..n
   */
  WeightScoringMethodologyNote?: Array<Text> | undefined

  /**
   * A code specifying the type of the Weighting.
   * Code
   * Cardinality: 0..1
   * Examples: "Regulated", "Self-contained"
   */
  WeightingTypeCode?: [Code] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The contracting party.
   * Contracting Party
   * Cardinality: 1..n
   */
  ContractingParty: Array<ContractingParty>

  /**
   * The Economic Operator receiving the Qualification Application Resquest.
   * Economic Operator Party
   * Cardinality: 0..n
   */
  EconomicOperatorParty?: Array<EconomicOperatorParty> | undefined

  /**
   * An overall definition of this procurement project.
   * Procurement Project
   * Cardinality: 0..1
   */
  ProcurementProject?: [ProcurementProject] | undefined

  /**
   * One of the procurement project lots into which this contract can be split.
   * Procurement Project Lot
   * Cardinality: 0..n
   */
  ProcurementProjectLot?: Array<ProcurementProjectLot> | undefined

  /**
   * A criterion supporting Tenderer qualifications.
   * Tendering Criterion
   * Cardinality: 0..n
   */
  TenderingCriterion?: Array<TenderingCriterion> | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined
}
