import { Code } from '../cbc/Code'
import { ContractingParty } from '../cac/ContractingParty'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Language } from '../cac/Language'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { ProcurementProject } from '../cac/ProcurementProject'
import { ProcurementProjectLot } from '../cac/ProcurementProjectLot'
import { Signature } from '../cac/Signature'
import { TenderingProcess } from '../cac/TenderingProcess'
import { TenderingTerms } from '../cac/TenderingTerms'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used by a Contracting party to announce a project to buy goods, services, or works.
 */
export interface ContractNotice {
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
   */
  UBLVersionID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   */
  CustomizationID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileID?: Array<Identifier> | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
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
   * Cardinality: 0..1
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * An identifier of the current version of the Contract Notice.
   * Identifier
   * Cardinality: 0..1
   */
  VersionID?: Array<Identifier> | undefined

  /**
   * An identifier of the previous version of the Contract Notice which is superceded by this version.
   * Identifier
   * Cardinality: 0..1
   */
  PreviousVersionID?: Array<Identifier> | undefined

  /**
   * The requested publication date for this Contract Notice.
   * Date
   * Cardinality: 0..1
   */
  RequestedPublicationDate?: Array<Date> | undefined

  /**
   * Information about the law that defines the regulatory domain.
   * Text
   * Cardinality: 0..n
   */
  RegulatoryDomain?: Array<Text> | undefined

  /**
   * The type of notice (PIN, Qualification, Reduce time...)
   * Code
   * Cardinality: 0..1
   */
  NoticeTypeCode?: Array<Code> | undefined

  /**
   * The language used for this contract notice.
   * Code
   * Cardinality: 0..1
   */
  NoticeLanguageCode?: Array<Code> | undefined

  /**
   * An additional official language used in this contract notice.
   * Language
   * Cardinality: 0..n
   */
  AdditionalNoticeLanguage?: Array<Language> | undefined

  /**
   * The estimated frequency of future notices.
   * Period
   * Cardinality: 0..1
   */
  FrequencyPeriod?: Array<Period> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The contracting party or parties in case of joint procurement.
   * Contracting Party
   * Cardinality: 1..n
   */
  ContractingParty: Array<ContractingParty>

  /**
   * A party who originally requested the tender.
   * Customer Party
   * Cardinality: 0..n
   */
  OriginatorCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The party receiving this document.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty?: Array<Party> | undefined

  /**
   * The tendering terms associated with this tendering process.
   * Tendering Terms
   * Cardinality: 0..1
   */
  TenderingTerms?: Array<TenderingTerms> | undefined

  /**
   * A description of the tendering process itself.
   * Tendering Process
   * Cardinality: 0..1
   */
  TenderingProcess?: Array<TenderingProcess> | undefined

  /**
   * An overall definition of this procurement project.
   * Procurement Project
   * Cardinality: 1
   */
  ProcurementProject: Array<ProcurementProject>

  /**
   * One of the procurement project lots into which this contract can be split.
   * Procurement Project Lot
   * Cardinality: 0..n
   */
  ProcurementProjectLot?: Array<ProcurementProjectLot> | undefined
}
