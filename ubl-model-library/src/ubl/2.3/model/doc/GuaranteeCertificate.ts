import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { ImmobilizedSecurity } from '../cac/ImmobilizedSecurity'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { Regulation } from '../cac/Regulation'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document to notify the deposit of a bid bond guarantee.
 */
export interface GuaranteeCertificate {
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
   * Cardinality: 1
   */
  ContractFolderID: Array<Identifier>

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
   * A code signifying the type of the guarantee.
   * Code
   * Cardinality: 0..1
   */
  GuaranteeTypeCode?: Array<Code> | undefined

  /**
   * A textual description of the purpose of the bid bond guarantee.
   * Text
   * Cardinality: 0..n
   */
  Purpose?: Array<Text> | undefined

  /**
   * The liability amount (a monetary value) in the bid bond guarantee.
   * Amount
   * Cardinality: 1
   */
  LiabilityAmount: Array<Amount>

  /**
   * The code stating the constitution means of the guarantee.
   * Code
   * Cardinality: 0..1
   */
  ConstitutionCode?: Array<Code> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The specified period in the tendering process for which this bid bond guarantee is effective
   * Period
   * Cardinality: 0..1
   */
  ApplicablePeriod?: Array<Period> | undefined

  /**
   * A reference to an applicable regulation.
   * Regulation
   * Cardinality: 0..n
   */
  ApplicableRegulation?: Array<Regulation> | undefined

  /**
   * A reference to a legal document.
   * Document Reference
   * Cardinality: 0..n
   */
  GuaranteeDocumentReference?: Array<DocumentReference> | undefined

  /**
   * Details of an immobilized security.
   * Immobilized Security
   * Cardinality: 0..n
   */
  ImmobilizedSecurity?: Array<ImmobilizedSecurity> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The guarantee creditor organization that has the authority to charge bid bond guarantee credit.
   * Party
   * Cardinality: 1
   */
  GuarantorParty: Array<Party>

  /**
   * The party depositing the bid bond guarantee.
   * Party
   * Cardinality: 1
   */
  InterestedParty: Array<Party>

  /**
   * The beneficiary of the bid bond guarantee.
   * Party
   * Cardinality: 0..1
   */
  BeneficiaryParty?: Array<Party> | undefined
}
