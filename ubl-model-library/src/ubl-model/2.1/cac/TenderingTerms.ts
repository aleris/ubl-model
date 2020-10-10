import { Amount } from '../cbc/Amount'
import { AppealTerms } from './AppealTerms'
import { AwardingTerms } from './AwardingTerms'
import { BudgetAccountLine } from './BudgetAccountLine'
import { Clause } from './Clause'
import { Code } from '../cbc/Code'
import { ContractExecutionRequirement } from './ContractExecutionRequirement'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { FinancialGuarantee } from './FinancialGuarantee'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Language } from './Language'
import { Party } from './Party'
import { PaymentTerms } from './PaymentTerms'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { SubcontractTerms } from './SubcontractTerms'
import { TendererQualificationRequest } from './TendererQualificationRequest'
import { TenderPreparation } from './TenderPreparation'
import { Text } from '../cbc/Text'

/**
 * A class to describe tendering terms for a tendering process.
 */
export interface TenderingTerms {
  /**
   * A code signifying the awarding method in a tendering process (e.g., a method favoring the tender with the lowest
   * price or the tender that is most economically advantageous).
   * Code
   * Cardinality: 0..1
   * Examples: Price, Multiple criteria
   */
  AwardingMethodTypeCode: [Code] | undefined

  /**
   * Textual description of the legal form required for potential tenderers.
   * Code
   * Cardinality: 0..1
   * Examples: Unit prices, global price
   */
  PriceEvaluationCode: [Code] | undefined

  /**
   * Maximum number of variants the tenderer is allowed to present for this tendering project.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumVariantQuantity: [Quantity] | undefined

  /**
   * An indicator that variants are allowed and unconstrained in number (true) or not allowed (false).
   * Indicator
   * Cardinality: 0..1
   */
  VariantConstraintIndicator: [Indicator] | undefined

  /**
   * Text specifying the things for which variants are accepted.
   * Text
   * Cardinality: 0..n
   */
  AcceptedVariantsDescription: Array<Text> | undefined

  /**
   * Text describing the formula for price revision.
   * Text
   * Cardinality: 0..n
   */
  PriceRevisionFormulaDescription: Array<Text> | undefined

  /**
   * The program that funds the tendering process (e.g., "National", "European"), expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  FundingProgramCode: [Code] | undefined

  /**
   * The program that funds the tendering process (e.g., EU 6th Framework Program) expressed as text.
   * Text
   * Cardinality: 0..n
   */
  FundingProgram: Array<Text> | undefined

  /**
   * The maximum advertised monetary value of the tendering process.
   * Amount
   * Cardinality: 0..1
   */
  MaximumAdvertisementAmount: [Amount] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * A code signifying the frequency of payment in the contract associated with the tendering process.
   * Code
   * Cardinality: 0..1
   */
  PaymentFrequencyCode: [Code] | undefined

  /**
   * The Uniform Resource Identifier (URI) of an electronic registry of economic operators.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Web site
   */
  EconomicOperatorRegistryURI: [Identifier] | undefined

  /**
   * An indicator that tenderers are required to provide a curriculum vitae for each participant in the project (true)
   * or are not so required (false).
   * Indicator
   * Cardinality: 0..1
   */
  RequiredCurriculaIndicator: [Indicator] | undefined

  /**
   * Indicates whether other conditions exist (true) or not (false). If the indicator is true, the description may be
   * provided.
   * Indicator
   * Cardinality: 0..1
   */
  OtherConditionsIndicator: [Indicator] | undefined

  /**
   * Other existing conditions.
   * Text
   * Cardinality: 0..n
   */
  AdditionalConditions: Array<Text> | undefined

  /**
   * The end date until which the candidates can obtain the necessary level of security clearance.
   * Date
   * Cardinality: 0..1
   */
  LatestSecurityClearanceDate: [Date] | undefined

  /**
   * The amount to be paid to obtain the contract documents and additional documentation.
   * Amount
   * Cardinality: 0..1
   */
  DocumentationFeeAmount: [Amount] | undefined

  /**
   * The penalty clauses
   * Clause
   * Cardinality: 0..n
   */
  PenaltyClause: Array<Clause> | undefined

  /**
   * A financial guarantee of a tenderer or bid submitter's actual entry into a contract in the event that it is the
   * successful bidder.
   * Financial Guarantee
   * Cardinality: 0..n
   */
  RequiredFinancialGuarantee: Array<FinancialGuarantee> | undefined

  /**
   * A reference to a document providing references to procurement legislation applicable to the tendering process.
   * Document Reference
   * Cardinality: 0..1
   */
  ProcurementLegislationDocumentReference: [DocumentReference] | undefined

  /**
   * A reference to a document providing references to fiscal legislation applicable to the tendering process.
   * Document Reference
   * Cardinality: 0..1
   */
  FiscalLegislationDocumentReference: [DocumentReference] | undefined

  /**
   * A reference to a document providing references to environmental legislation applicable to the tendering process.
   * Document Reference
   * Cardinality: 0..1
   */
  EnvironmentalLegislationDocumentReference: [DocumentReference] | undefined

  /**
   * A reference to a document providing references to employment legislation applicable to the tendering process.
   * Document Reference
   * Cardinality: 0..1
   */
  EmploymentLegislationDocumentReference: [DocumentReference] | undefined

  /**
   * A reference to a document that will become part of the awarded contract.
   * Document Reference
   * Cardinality: 0..n
   */
  ContractualDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to the Call for Tender associated with these tendering terms.
   * Document Reference
   * Cardinality: 0..1
   */
  CallForTendersDocumentReference: [DocumentReference] | undefined

  /**
   * The period during which a warranty for work, service, or goods associated with these tendering terms is valid.
   * Period
   * Cardinality: 0..1
   */
  WarrantyValidityPeriod: [Period] | undefined

  /**
   * A specification of payment terms associated with the tendering process.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms: Array<PaymentTerms> | undefined

  /**
   * Required set of qualifications for a tenderer in this tendering process.
   * Tenderer Qualification Request
   * Cardinality: 0..n
   */
  TendererQualificationRequest: Array<TendererQualificationRequest> | undefined

  /**
   * Subcontract terms for the tendering process.
   * Subcontract Terms
   * Cardinality: 0..n
   */
  AllowedSubcontractTerms: Array<SubcontractTerms> | undefined

  /**
   * Directions for preparing a tender for the+D2057 tendering process.
   * Tender Preparation
   * Cardinality: 0..n
   * Examples: Curricula required, Experience required, ....
   */
  TenderPreparation: Array<TenderPreparation> | undefined

  /**
   * A requirement relating to execution of the contract that will be awarded as a result of the tendering process.
   * Contract Execution Requirement
   * Cardinality: 0..n
   */
  ContractExecutionRequirement: Array<ContractExecutionRequirement> | undefined

  /**
   * The terms in the tendering process for awarding the contract for a project.
   * Awarding Terms
   * Cardinality: 0..1
   */
  AwardingTerms: [AwardingTerms] | undefined

  /**
   * A party that has additional information about the tendering process.
   * Party
   * Cardinality: 0..1
   */
  AdditionalInformationParty: [Party] | undefined

  /**
   * The party that has the contract documents for the tendering process.
   * Party
   * Cardinality: 0..1
   */
  DocumentProviderParty: [Party] | undefined

  /**
   * The party to which tenders should be presented.
   * Party
   * Cardinality: 0..1
   */
  TenderRecipientParty: [Party] | undefined

  /**
   * The party responsible for the execution of the contract.
   * Party
   * Cardinality: 0..1
   */
  ContractResponsibleParty: [Party] | undefined

  /**
   * A party in the contracting authority responsible for evaluating tenders received.
   * Party
   * Cardinality: 0..n
   */
  TenderEvaluationParty: Array<Party> | undefined

  /**
   * The period during which tenders submitted for this tendering process must remain valid.
   * Period
   * Cardinality: 0..1
   */
  TenderValidityPeriod: [Period] | undefined

  /**
   * The period of time during which the contracting authority may accept a contract.
   * Period
   * Cardinality: 0..1
   */
  ContractAcceptancePeriod: [Period] | undefined

  /**
   * Information about the terms to present for an appeal against a tender award.
   * Appeal Terms
   * Cardinality: 0..1
   */
  AppealTerms: [AppealTerms] | undefined

  /**
   * One of the default languages specified for the tendering process.
   * Language
   * Cardinality: 0..n
   */
  Language: Array<Language> | undefined

  /**
   * A budget account line associated with the tendering process.
   * Budget Account Line
   * Cardinality: 0..n
   */
  BudgetAccountLine: Array<BudgetAccountLine> | undefined

  /**
   * A class defining a reference to the notice that is being replaced.
   * Document Reference
   * Cardinality: 0..1
   */
  ReplacedNoticeDocumentReference: [DocumentReference] | undefined
}
