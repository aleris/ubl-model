import { Code } from '../cbc/Code'
import { ContractingParty } from '../cac/ContractingParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { EconomicOperatorParty } from '../cac/EconomicOperatorParty'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Period } from '../cac/Period'
import { ProcurementProject } from '../cac/ProcurementProject'
import { ProcurementProjectLotReference } from '../cac/ProcurementProjectLotReference'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * An expression of interest to a tendering process. An Economic Operator can demonstrate interest in a tendering
 * process issuing an Expression Of Interest document to the contracting party. Upon reception, the Contracting Party
 * registers the interest of the Economic Operator sending the relevant information for the tendering process.
 */
export interface ExpressionOfInterestRequest {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: [UBLExtensions] | undefined

  /**
   * The earliest version of the UBL 2 schema for this document type that defines all of the elements that might be
   * encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   */
  UBLVersionID?: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   */
  CustomizationID?: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileID?: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
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
   * An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.
   * Identifier
   * Cardinality: 0..1
   */
  ContractFolderID?: [Identifier] | undefined

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
   * Short title of a contract associated with this Expression of Interest.
   * Name
   * Cardinality: 0..n
   */
  ContractName?: Array<Text> | undefined

  /**
   * A code signifying the locale in which the language in the required documents is preferred.
   * Code
   * Cardinality: 0..1
   */
  PreferredLanguageLocaleCode?: [Code] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The period for which the expression of interest is valid.
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
   * The Economic Operator issuing the expression of interest.
   * Economic Operator Party
   * Cardinality: 1
   */
  EconomicOperatorParty: [EconomicOperatorParty]

  /**
   * The Contracting Party or the contracting parties in case of joint procurement.
   * Contracting Party
   * Cardinality: 1..n
   */
  ContractingParty: Array<ContractingParty>

  /**
   * An overall definition of this procurement project.
   * Procurement Project
   * Cardinality: 0..1
   */
  ProcurementProject?: [ProcurementProject] | undefined

  /**
   * One of the procurement project lots into which this contract can be split.
   * Procurement Project Lot Reference
   * Cardinality: 0..n
   */
  ProcurementProjectLotReference?: Array<ProcurementProjectLotReference> | undefined
}
