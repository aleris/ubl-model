import { Amount } from '../cbc/Amount'
import { AppealTerms } from './AppealTerms'
import { AwardingTerms } from './AwardingTerms'
import { BudgetAccountLine } from './BudgetAccountLine'
import { Clause } from './Clause'
import { Code } from '../cbc/Code'
import { ContractExecutionRequirement } from './ContractExecutionRequirement'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { EconomicOperatorShortList } from './EconomicOperatorShortList'
import { FinancialGuarantee } from './FinancialGuarantee'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Language } from './Language'
import { LotDistribution } from './LotDistribution'
import { Party } from './Party'
import { PaymentTerms } from './PaymentTerms'
import { Period } from './Period'
import { PostAwardProcess } from './PostAwardProcess'
import { Prize } from './Prize'
import { Quantity } from '../cbc/Quantity'
import { SecurityClearanceTerm } from './SecurityClearanceTerm'
import { SubcontractTerms } from './SubcontractTerms'
import { TendererQualificationRequest } from './TendererQualificationRequest'
import { TenderPreparation } from './TenderPreparation'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe tendering terms for a tendering process.
 */
export interface TenderingTerms {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the awarding method in a tendering process (e.g., a method favoring the tender with the lowest
   * price or the tender that is most economically advantageous).
   * Code
   * Cardinality: 0..1
   * Examples: Price, Multiple criteria
   */
  AwardingMethodTypeCode?: Array<Code> | undefined

  /**
   * Textual description of the legal form required for potential tenderers.
   * Code
   * Cardinality: 0..1
   * Examples: Unit prices, global price
   */
  PriceEvaluationCode?: Array<Code> | undefined

  /**
   * Maximum number of variants the tenderer is allowed to present for this tendering project.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumVariantQuantity?: Array<Quantity> | undefined

  /**
   * An indicator that variants are allowed and unconstrained in number (true) or not allowed (false).
   * Indicator
   * Cardinality: 0..1
   */
  VariantConstraintIndicator?: Array<Indicator> | undefined

  /**
   * Text specifying the things for which variants are accepted.
   * Text
   * Cardinality: 0..n
   */
  AcceptedVariantsDescription?: Array<Text> | undefined

  /**
   * Text describing the formula for price revision.
   * Text
   * Cardinality: 0..n
   */
  PriceRevisionFormulaDescription?: Array<Text> | undefined

  /**
   * The program that funds the tendering process (e.g., "National", "European"), expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  FundingProgramCode?: Array<Code> | undefined

  /**
   * The program that funds the tendering process (e.g., EU 6th Framework Program) expressed as text.
   * Text
   * Cardinality: 0..n
   */
  FundingProgram?: Array<Text> | undefined

  /**
   * The maximum advertised monetary value of the tendering process.
   * Amount
   * Cardinality: 0..1
   */
  MaximumAdvertisementAmount?: Array<Amount> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * A code signifying the frequency of payment in the contract associated with the tendering process.
   * Code
   * Cardinality: 0..1
   */
  PaymentFrequencyCode?: Array<Code> | undefined

  /**
   * The Uniform Resource Identifier (URI) of an electronic registry of economic operators.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Web site
   */
  EconomicOperatorRegistryURI?: Array<Identifier> | undefined

  /**
   * An indicator that tenderers are required to provide a curriculum vitae for each participant in the project (true)
   * or are not so required (false).
   * Indicator
   * Cardinality: 0..1
   */
  RequiredCurriculaIndicator?: Array<Indicator> | undefined

  /**
   * A code signifying the conditions applying for tenderers to provide a curriculum vitae.
   * Code
   * Cardinality: 0..1
   */
  RequiredCurriculaCode?: Array<Code> | undefined

  /**
   * Indicates whether other conditions exist (true) or not (false). If the indicator is true, the description may be
   * provided.
   * Indicator
   * Cardinality: 0..1
   */
  OtherConditionsIndicator?: Array<Indicator> | undefined

  /**
   * Indicates whether the procurement is recurring (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  RecurringProcurementIndicator?: Array<Indicator> | undefined

  /**
   * Any additional information about recurrence (e.g. estimated timing).
   * Text
   * Cardinality: 0..n
   */
  RecurringProcurementDescription?: Array<Text> | undefined

  /**
   * The description of the estimated timing for further notices to be published.
   * Text
   * Cardinality: 0..n
   */
  EstimatedTimingFurtherPublication?: Array<Text> | undefined

  /**
   * Other existing conditions.
   * Text
   * Cardinality: 0..n
   */
  AdditionalConditions?: Array<Text> | undefined

  /**
   * The end date until which the candidates can obtain the necessary level of security clearance.
   * Date
   * Cardinality: 0..1
   */
  LatestSecurityClearanceDate?: Array<Date> | undefined

  /**
   * The amount to be paid to obtain the contract documents and additional documentation.
   * Amount
   * Cardinality: 0..1
   */
  DocumentationFeeAmount?: Array<Amount> | undefined

  /**
   * A code signifying whether a tenderer is allowed to submit multiple tenders.
   * Code
   * Cardinality: 0..1
   */
  MultipleTendersCode?: Array<Code> | undefined

  /**
   * A code signifying the modalities for a tenderer to submit variants of tenders.
   * Code
   * Cardinality: 0..1
   */
  VariantConstraintCode?: Array<Code> | undefined

  /**
   * The penalty clauses
   * Clause
   * Cardinality: 0..n
   */
  PenaltyClause?: Array<Clause> | undefined

  /**
   * A financial guarantee of a tenderer or bid submitter's actual entry into a contract in the event that it is the
   * successful bidder.
   * Financial Guarantee
   * Cardinality: 0..n
   */
  RequiredFinancialGuarantee?: Array<FinancialGuarantee> | undefined

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
   * A reference to a document that will become part of the awarded contract.
   * Document Reference
   * Cardinality: 0..n
   */
  ContractualDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to the Call for Tender associated with these tendering terms.
   * Document Reference
   * Cardinality: 0..1
   */
  CallForTendersDocumentReference?: Array<DocumentReference> | undefined

  /**
   * The period during which a warranty for work, service, or goods associated with these tendering terms is valid.
   * Period
   * Cardinality: 0..1
   */
  WarrantyValidityPeriod?: Array<Period> | undefined

  /**
   * A specification of payment terms associated with the tendering process.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms?: Array<PaymentTerms> | undefined

  /**
   * Required set of qualifications for a tenderer in this tendering process.
   * Tenderer Qualification Request
   * Cardinality: 0..n
   */
  TendererQualificationRequest?: Array<TendererQualificationRequest> | undefined

  /**
   * Subcontract terms for the tendering process.
   * Subcontract Terms
   * Cardinality: 0..n
   */
  AllowedSubcontractTerms?: Array<SubcontractTerms> | undefined

  /**
   * Directions for preparing a tender for the+D2057 tendering process.
   * Tender Preparation
   * Cardinality: 0..n
   * Examples: Curricula required, Experience required, ....
   */
  TenderPreparation?: Array<TenderPreparation> | undefined

  /**
   * A requirement relating to execution of the contract that will be awarded as a result of the tendering process.
   * Contract Execution Requirement
   * Cardinality: 0..n
   */
  ContractExecutionRequirement?: Array<ContractExecutionRequirement> | undefined

  /**
   * The terms in the tendering process for awarding the contract for a project.
   * Awarding Terms
   * Cardinality: 0..1
   */
  AwardingTerms?: Array<AwardingTerms> | undefined

  /**
   * A party that has additional information about the tendering process.
   * Party
   * Cardinality: 0..1
   */
  AdditionalInformationParty?: Array<Party> | undefined

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
   * The party responsible for the execution of the contract.
   * Party
   * Cardinality: 0..1
   */
  ContractResponsibleParty?: Array<Party> | undefined

  /**
   * A party in the contracting authority responsible for evaluating tenders received.
   * Party
   * Cardinality: 0..n
   */
  TenderEvaluationParty?: Array<Party> | undefined

  /**
   * A party in the contracting authority responsible for receiving qualification requests.
   * Party
   * Cardinality: 0..1
   */
  QualificationRequestRecipientParty?: Array<Party> | undefined

  /**
   * The period during which tenders submitted for this tendering process must remain valid.
   * Period
   * Cardinality: 0..1
   */
  TenderValidityPeriod?: Array<Period> | undefined

  /**
   * The period of time during which the contracting authority may accept a contract.
   * Period
   * Cardinality: 0..1
   */
  ContractAcceptancePeriod?: Array<Period> | undefined

  /**
   * Information about the terms to present for an appeal against a tender award.
   * Appeal Terms
   * Cardinality: 0..1
   */
  AppealTerms?: Array<AppealTerms> | undefined

  /**
   * One of the default languages specified for the tendering process.
   * Language
   * Cardinality: 0..n
   */
  Language?: Array<Language> | undefined

  /**
   * A budget account line associated with the tendering process.
   * Budget Account Line
   * Cardinality: 0..n
   */
  BudgetAccountLine?: Array<BudgetAccountLine> | undefined

  /**
   * A class defining a reference to the notice that is being replaced.
   * Document Reference
   * Cardinality: 0..1
   */
  ReplacedNoticeDocumentReference?: Array<DocumentReference> | undefined

  /**
   * List of specific ways to tender to the lots of the procurement project.
   * Lot Distribution
   * Cardinality: 0..1
   */
  LotDistribution?: Array<LotDistribution> | undefined

  /**
   * Information about the post-award process.
   * Post Award Process
   * Cardinality: 0..1
   */
  PostAwardProcess?: Array<PostAwardProcess> | undefined

  /**
   * A set of criteria used to create a short list of candidates.
   * Economic Operator Short List
   * Cardinality: 0..1
   */
  EconomicOperatorShortList?: Array<EconomicOperatorShortList> | undefined

  /**
   * Information about the value amount that will be offered to the winner depending on his rank.
   * Prize
   * Cardinality: 0..n
   * Examples: In a design context , 1st place EUR 10 000 , 2nd place EUR 5000
   */
  Prize?: Array<Prize> | undefined

  /**
   * Information about the terms to present for a security clearance.
   * Security Clearance Term
   * Cardinality: 0..n
   */
  SecurityClearanceTerm?: Array<SecurityClearanceTerm> | undefined
}
