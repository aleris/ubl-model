import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { AppealTermsType } from './AppealTermsMeta'
import { AwardingTermsType } from './AwardingTermsMeta'
import { BudgetAccountLineType } from './BudgetAccountLineMeta'
import { ClauseType } from './ClauseMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ContractExecutionRequirementType } from './ContractExecutionRequirementMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { EconomicOperatorShortListType } from './EconomicOperatorShortListMeta'
import { FinancialGuaranteeType } from './FinancialGuaranteeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LanguageType } from './LanguageMeta'
import { LotDistributionType } from './LotDistributionMeta'
import { PartyType } from './PartyMeta'
import { PaymentTermsType } from './PaymentTermsMeta'
import { PeriodType } from './PeriodMeta'
import { PostAwardProcessType } from './PostAwardProcessMeta'
import { PrizeType } from './PrizeMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { SecurityClearanceTermType } from './SecurityClearanceTermMeta'
import { SubcontractTermsType } from './SubcontractTermsMeta'
import { TendererQualificationRequestType } from './TendererQualificationRequestMeta'
import { TenderPreparationType } from './TenderPreparationMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TenderingTermsField {
  UBLExtensions = 'UBLExtensions',
  AwardingMethodTypeCode = 'AwardingMethodTypeCode',
  PriceEvaluationCode = 'PriceEvaluationCode',
  MaximumVariantQuantity = 'MaximumVariantQuantity',
  VariantConstraintIndicator = 'VariantConstraintIndicator',
  AcceptedVariantsDescription = 'AcceptedVariantsDescription',
  PriceRevisionFormulaDescription = 'PriceRevisionFormulaDescription',
  FundingProgramCode = 'FundingProgramCode',
  FundingProgram = 'FundingProgram',
  MaximumAdvertisementAmount = 'MaximumAdvertisementAmount',
  Note = 'Note',
  PaymentFrequencyCode = 'PaymentFrequencyCode',
  EconomicOperatorRegistryURI = 'EconomicOperatorRegistryURI',
  RequiredCurriculaIndicator = 'RequiredCurriculaIndicator',
  RequiredCurriculaCode = 'RequiredCurriculaCode',
  OtherConditionsIndicator = 'OtherConditionsIndicator',
  RecurringProcurementIndicator = 'RecurringProcurementIndicator',
  RecurringProcurementDescription = 'RecurringProcurementDescription',
  EstimatedTimingFurtherPublication = 'EstimatedTimingFurtherPublication',
  AdditionalConditions = 'AdditionalConditions',
  LatestSecurityClearanceDate = 'LatestSecurityClearanceDate',
  DocumentationFeeAmount = 'DocumentationFeeAmount',
  MultipleTendersCode = 'MultipleTendersCode',
  VariantConstraintCode = 'VariantConstraintCode',
  PenaltyClause = 'PenaltyClause',
  RequiredFinancialGuarantee = 'RequiredFinancialGuarantee',
  ProcurementLegislationDocumentReference = 'ProcurementLegislationDocumentReference',
  FiscalLegislationDocumentReference = 'FiscalLegislationDocumentReference',
  EnvironmentalLegislationDocumentReference = 'EnvironmentalLegislationDocumentReference',
  EmploymentLegislationDocumentReference = 'EmploymentLegislationDocumentReference',
  ContractualDocumentReference = 'ContractualDocumentReference',
  CallForTendersDocumentReference = 'CallForTendersDocumentReference',
  WarrantyValidityPeriod = 'WarrantyValidityPeriod',
  PaymentTerms = 'PaymentTerms',
  TendererQualificationRequest = 'TendererQualificationRequest',
  AllowedSubcontractTerms = 'AllowedSubcontractTerms',
  TenderPreparation = 'TenderPreparation',
  ContractExecutionRequirement = 'ContractExecutionRequirement',
  AwardingTerms = 'AwardingTerms',
  AdditionalInformationParty = 'AdditionalInformationParty',
  DocumentProviderParty = 'DocumentProviderParty',
  TenderRecipientParty = 'TenderRecipientParty',
  ContractResponsibleParty = 'ContractResponsibleParty',
  TenderEvaluationParty = 'TenderEvaluationParty',
  QualificationRequestRecipientParty = 'QualificationRequestRecipientParty',
  TenderValidityPeriod = 'TenderValidityPeriod',
  ContractAcceptancePeriod = 'ContractAcceptancePeriod',
  AppealTerms = 'AppealTerms',
  Language = 'Language',
  BudgetAccountLine = 'BudgetAccountLine',
  ReplacedNoticeDocumentReference = 'ReplacedNoticeDocumentReference',
  LotDistribution = 'LotDistribution',
  PostAwardProcess = 'PostAwardProcess',
  EconomicOperatorShortList = 'EconomicOperatorShortList',
  Prize = 'Prize',
  SecurityClearanceTerm = 'SecurityClearanceTerm'
}

export const TenderingTermsFieldMetaUBLExtensions = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAwardingMethodTypeCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AwardingMethodTypeCode,
  'AwardingMethodTypeCode',
  'Awarding Method Type Code',
  CodeType.name,
  'A code signifying the awarding method in a tendering process (e.g., a method favoring the tender with the lowest price or the tender that is most economically advantageous).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Price, Multiple criteria'
)

export const TenderingTermsFieldMetaPriceEvaluationCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PriceEvaluationCode,
  'PriceEvaluationCode',
  'Price Evaluation Code',
  CodeType.name,
  'Textual description of the legal form required for potential tenderers.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Unit prices, global price'
)

export const TenderingTermsFieldMetaMaximumVariantQuantity = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.MaximumVariantQuantity,
  'MaximumVariantQuantity',
  'Maximum Variant Quantity',
  QuantityType.name,
  'Maximum number of variants the tenderer is allowed to present for this tendering project.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaVariantConstraintIndicator = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.VariantConstraintIndicator,
  'VariantConstraintIndicator',
  'Variant Constraint',
  IndicatorType.name,
  'An indicator that variants are allowed and unconstrained in number (true) or not allowed (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAcceptedVariantsDescription = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AcceptedVariantsDescription,
  'AcceptedVariantsDescription',
  'Accepted Variants Description',
  TextType.name,
  'Text specifying the things for which variants are accepted.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPriceRevisionFormulaDescription = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PriceRevisionFormulaDescription,
  'PriceRevisionFormulaDescription',
  'Price Revision Formula Description',
  TextType.name,
  'Text describing the formula for price revision.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaFundingProgramCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.FundingProgramCode,
  'FundingProgramCode',
  'Funding Program Code',
  CodeType.name,
  'The program that funds the tendering process (e.g., "National", "European"), expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaFundingProgram = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.FundingProgram,
  'FundingProgram',
  'Funding Program',
  TextType.name,
  'The program that funds the tendering process (e.g., EU 6th Framework Program) expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaMaximumAdvertisementAmount = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.MaximumAdvertisementAmount,
  'MaximumAdvertisementAmount',
  'Maximum Advertisement',
  AmountType.name,
  'The maximum advertised monetary value of the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaNote = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPaymentFrequencyCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PaymentFrequencyCode,
  'PaymentFrequencyCode',
  'Payment Frequency Code',
  CodeType.name,
  'A code signifying the frequency of payment in the contract associated with the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEconomicOperatorRegistryURI = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EconomicOperatorRegistryURI,
  'EconomicOperatorRegistryURI',
  'Economic Operator Registry URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of an electronic registry of economic operators.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Web site',
  undefined
)

export const TenderingTermsFieldMetaRequiredCurriculaIndicator = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RequiredCurriculaIndicator,
  'RequiredCurriculaIndicator',
  'Required Curricula',
  IndicatorType.name,
  'An indicator that tenderers are required to provide a curriculum vitae for each participant in the project (true) or are not so required (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaRequiredCurriculaCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RequiredCurriculaCode,
  'RequiredCurriculaCode',
  'Required Curricula',
  CodeType.name,
  'A code signifying the conditions applying for tenderers to provide a curriculum vitae.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaOtherConditionsIndicator = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.OtherConditionsIndicator,
  'OtherConditionsIndicator',
  'Other Conditions',
  IndicatorType.name,
  'Indicates whether other conditions exist (true) or not (false). If the indicator is true, the description may be provided.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaRecurringProcurementIndicator = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RecurringProcurementIndicator,
  'RecurringProcurementIndicator',
  'Recurring Procurement',
  IndicatorType.name,
  'Indicates whether the procurement is recurring (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaRecurringProcurementDescription = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RecurringProcurementDescription,
  'RecurringProcurementDescription',
  'Recurring Procurement Description',
  TextType.name,
  'Any additional information about recurrence (e.g. estimated timing).',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEstimatedTimingFurtherPublication = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EstimatedTimingFurtherPublication,
  'EstimatedTimingFurtherPublication',
  'Estimated Timing Further Publication',
  TextType.name,
  'The description of the estimated timing for further notices to be published.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAdditionalConditions = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AdditionalConditions,
  'AdditionalConditions',
  'Additional Conditions',
  TextType.name,
  'Other existing conditions.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaLatestSecurityClearanceDate = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.LatestSecurityClearanceDate,
  'LatestSecurityClearanceDate',
  'Latest Security Clearance Date',
  DateType.name,
  'The end date until which the candidates can obtain the necessary level of security clearance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaDocumentationFeeAmount = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.DocumentationFeeAmount,
  'DocumentationFeeAmount',
  'Documentation Fee Amount',
  AmountType.name,
  'The amount to be paid to obtain the contract documents and additional documentation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaMultipleTendersCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.MultipleTendersCode,
  'MultipleTendersCode',
  'Multiple Tenders',
  CodeType.name,
  'A code signifying whether a tenderer is allowed to submit multiple tenders.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaVariantConstraintCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.VariantConstraintCode,
  'VariantConstraintCode',
  'Variant Constraint',
  CodeType.name,
  'A code signifying the modalities for a tenderer to submit variants of tenders.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPenaltyClause = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PenaltyClause,
  'PenaltyClause',
  'Penalty Clause',
  ClauseType.name,
  'The penalty clauses',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaRequiredFinancialGuarantee = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RequiredFinancialGuarantee,
  'RequiredFinancialGuarantee',
  'Required Financial Guarantee',
  FinancialGuaranteeType.name,
  'A financial guarantee of a tenderer or bid submitter\'s actual entry into a contract in the event that it is the successful bidder.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaProcurementLegislationDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ProcurementLegislationDocumentReference,
  'ProcurementLegislationDocumentReference',
  'Procurement Legislation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document providing references to procurement legislation applicable to the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaFiscalLegislationDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.FiscalLegislationDocumentReference,
  'FiscalLegislationDocumentReference',
  'Fiscal Legislation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document providing references to fiscal legislation applicable to the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEnvironmentalLegislationDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EnvironmentalLegislationDocumentReference,
  'EnvironmentalLegislationDocumentReference',
  'Environmental Legislation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document providing references to environmental legislation applicable to the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEmploymentLegislationDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EmploymentLegislationDocumentReference,
  'EmploymentLegislationDocumentReference',
  'Employment Legislation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document providing references to employment legislation applicable to the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaContractualDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ContractualDocumentReference,
  'ContractualDocumentReference',
  'Contractual Document Reference',
  DocumentReferenceType.name,
  'A reference to a document that will become part of the awarded contract.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaCallForTendersDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.CallForTendersDocumentReference,
  'CallForTendersDocumentReference',
  'Call For Tenders Document Reference',
  DocumentReferenceType.name,
  'A reference to the Call for Tender associated with these tendering terms.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaWarrantyValidityPeriod = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.WarrantyValidityPeriod,
  'WarrantyValidityPeriod',
  'Warranty Validity Period',
  PeriodType.name,
  'The period during which a warranty for work, service, or goods associated with these tendering terms is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPaymentTerms = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A specification of payment terms associated with the tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTendererQualificationRequest = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TendererQualificationRequest,
  'TendererQualificationRequest',
  'Tenderer Qualification Request',
  TendererQualificationRequestType.name,
  'Required set of qualifications for a tenderer in this tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAllowedSubcontractTerms = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AllowedSubcontractTerms,
  'AllowedSubcontractTerms',
  'Allowed Subcontract Terms',
  SubcontractTermsType.name,
  'Subcontract terms for the tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTenderPreparation = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TenderPreparation,
  'TenderPreparation',
  'Tender Preparation',
  TenderPreparationType.name,
  'Directions for preparing a tender for the+D2057 tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  'Curricula required, Experience required, ....'
)

export const TenderingTermsFieldMetaContractExecutionRequirement = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ContractExecutionRequirement,
  'ContractExecutionRequirement',
  'Contract Execution Requirement',
  ContractExecutionRequirementType.name,
  'A requirement relating to execution of the contract that will be awarded as a result of the tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAwardingTerms = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AwardingTerms,
  'AwardingTerms',
  'Awarding Terms',
  AwardingTermsType.name,
  'The terms in the tendering process for awarding the contract for a project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAdditionalInformationParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AdditionalInformationParty,
  'AdditionalInformationParty',
  'Additional Information Party',
  PartyType.name,
  'A party that has additional information about the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaDocumentProviderParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.DocumentProviderParty,
  'DocumentProviderParty',
  'Document Provider Party',
  PartyType.name,
  'The party that has the contract documents for the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTenderRecipientParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TenderRecipientParty,
  'TenderRecipientParty',
  'Tender Recipient Party',
  PartyType.name,
  'The party to which tenders should be presented.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaContractResponsibleParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ContractResponsibleParty,
  'ContractResponsibleParty',
  'Contract Responsible Party',
  PartyType.name,
  'The party responsible for the execution of the contract.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTenderEvaluationParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TenderEvaluationParty,
  'TenderEvaluationParty',
  'Tender Evaluation Party',
  PartyType.name,
  'A party in the contracting authority responsible for evaluating tenders received.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaQualificationRequestRecipientParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.QualificationRequestRecipientParty,
  'QualificationRequestRecipientParty',
  'Qualification Request Recipient Party',
  PartyType.name,
  'A party in the contracting authority responsible for receiving qualification requests.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTenderValidityPeriod = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TenderValidityPeriod,
  'TenderValidityPeriod',
  'Tender Validity Period',
  PeriodType.name,
  'The period during which tenders submitted for this tendering process must remain valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaContractAcceptancePeriod = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ContractAcceptancePeriod,
  'ContractAcceptancePeriod',
  'Contract Acceptance Period',
  PeriodType.name,
  'The period of time during which the contracting authority may accept a contract.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAppealTerms = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AppealTerms,
  'AppealTerms',
  'Appeal Terms',
  AppealTermsType.name,
  'Information about the terms to present for an appeal against a tender award.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaLanguage = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.Language,
  'Language',
  'Language',
  LanguageType.name,
  'One of the default languages specified for the tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaBudgetAccountLine = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.BudgetAccountLine,
  'BudgetAccountLine',
  'Budget Account Line',
  BudgetAccountLineType.name,
  'A budget account line associated with the tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaReplacedNoticeDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ReplacedNoticeDocumentReference,
  'ReplacedNoticeDocumentReference',
  'Replaced Notice Document Reference',
  DocumentReferenceType.name,
  'A class defining a reference to the notice that is being replaced.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaLotDistribution = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.LotDistribution,
  'LotDistribution',
  'Lot Distribution',
  LotDistributionType.name,
  'List of specific ways to tender to the lots of the procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPostAwardProcess = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PostAwardProcess,
  'PostAwardProcess',
  'Post Award Process',
  PostAwardProcessType.name,
  'Information about the post-award process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEconomicOperatorShortList = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EconomicOperatorShortList,
  'EconomicOperatorShortList',
  'Economic Operator Short List',
  EconomicOperatorShortListType.name,
  'A set of criteria used to create a short list of candidates.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPrize = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.Prize,
  'Prize',
  'Prize',
  PrizeType.name,
  'Information about the value amount that will be offered to the winner depending on his rank.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  'In a design context , 1st place EUR 10 000 , 2nd place EUR 5000'
)

export const TenderingTermsFieldMetaSecurityClearanceTerm = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.SecurityClearanceTerm,
  'SecurityClearanceTerm',
  'Security Clearance Term',
  SecurityClearanceTermType.name,
  'Information about the terms to present for a security clearance.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderingTermsFieldMeta {
  public static readonly UBLExtensions = TenderingTermsFieldMetaUBLExtensions
  public static readonly AwardingMethodTypeCode = TenderingTermsFieldMetaAwardingMethodTypeCode
  public static readonly PriceEvaluationCode = TenderingTermsFieldMetaPriceEvaluationCode
  public static readonly MaximumVariantQuantity = TenderingTermsFieldMetaMaximumVariantQuantity
  public static readonly VariantConstraintIndicator = TenderingTermsFieldMetaVariantConstraintIndicator
  public static readonly AcceptedVariantsDescription = TenderingTermsFieldMetaAcceptedVariantsDescription
  public static readonly PriceRevisionFormulaDescription = TenderingTermsFieldMetaPriceRevisionFormulaDescription
  public static readonly FundingProgramCode = TenderingTermsFieldMetaFundingProgramCode
  public static readonly FundingProgram = TenderingTermsFieldMetaFundingProgram
  public static readonly MaximumAdvertisementAmount = TenderingTermsFieldMetaMaximumAdvertisementAmount
  public static readonly Note = TenderingTermsFieldMetaNote
  public static readonly PaymentFrequencyCode = TenderingTermsFieldMetaPaymentFrequencyCode
  public static readonly EconomicOperatorRegistryURI = TenderingTermsFieldMetaEconomicOperatorRegistryURI
  public static readonly RequiredCurriculaIndicator = TenderingTermsFieldMetaRequiredCurriculaIndicator
  public static readonly RequiredCurriculaCode = TenderingTermsFieldMetaRequiredCurriculaCode
  public static readonly OtherConditionsIndicator = TenderingTermsFieldMetaOtherConditionsIndicator
  public static readonly RecurringProcurementIndicator = TenderingTermsFieldMetaRecurringProcurementIndicator
  public static readonly RecurringProcurementDescription = TenderingTermsFieldMetaRecurringProcurementDescription
  public static readonly EstimatedTimingFurtherPublication = TenderingTermsFieldMetaEstimatedTimingFurtherPublication
  public static readonly AdditionalConditions = TenderingTermsFieldMetaAdditionalConditions
  public static readonly LatestSecurityClearanceDate = TenderingTermsFieldMetaLatestSecurityClearanceDate
  public static readonly DocumentationFeeAmount = TenderingTermsFieldMetaDocumentationFeeAmount
  public static readonly MultipleTendersCode = TenderingTermsFieldMetaMultipleTendersCode
  public static readonly VariantConstraintCode = TenderingTermsFieldMetaVariantConstraintCode
  public static readonly PenaltyClause = TenderingTermsFieldMetaPenaltyClause
  public static readonly RequiredFinancialGuarantee = TenderingTermsFieldMetaRequiredFinancialGuarantee
  public static readonly ProcurementLegislationDocumentReference = TenderingTermsFieldMetaProcurementLegislationDocumentReference
  public static readonly FiscalLegislationDocumentReference = TenderingTermsFieldMetaFiscalLegislationDocumentReference
  public static readonly EnvironmentalLegislationDocumentReference = TenderingTermsFieldMetaEnvironmentalLegislationDocumentReference
  public static readonly EmploymentLegislationDocumentReference = TenderingTermsFieldMetaEmploymentLegislationDocumentReference
  public static readonly ContractualDocumentReference = TenderingTermsFieldMetaContractualDocumentReference
  public static readonly CallForTendersDocumentReference = TenderingTermsFieldMetaCallForTendersDocumentReference
  public static readonly WarrantyValidityPeriod = TenderingTermsFieldMetaWarrantyValidityPeriod
  public static readonly PaymentTerms = TenderingTermsFieldMetaPaymentTerms
  public static readonly TendererQualificationRequest = TenderingTermsFieldMetaTendererQualificationRequest
  public static readonly AllowedSubcontractTerms = TenderingTermsFieldMetaAllowedSubcontractTerms
  public static readonly TenderPreparation = TenderingTermsFieldMetaTenderPreparation
  public static readonly ContractExecutionRequirement = TenderingTermsFieldMetaContractExecutionRequirement
  public static readonly AwardingTerms = TenderingTermsFieldMetaAwardingTerms
  public static readonly AdditionalInformationParty = TenderingTermsFieldMetaAdditionalInformationParty
  public static readonly DocumentProviderParty = TenderingTermsFieldMetaDocumentProviderParty
  public static readonly TenderRecipientParty = TenderingTermsFieldMetaTenderRecipientParty
  public static readonly ContractResponsibleParty = TenderingTermsFieldMetaContractResponsibleParty
  public static readonly TenderEvaluationParty = TenderingTermsFieldMetaTenderEvaluationParty
  public static readonly QualificationRequestRecipientParty = TenderingTermsFieldMetaQualificationRequestRecipientParty
  public static readonly TenderValidityPeriod = TenderingTermsFieldMetaTenderValidityPeriod
  public static readonly ContractAcceptancePeriod = TenderingTermsFieldMetaContractAcceptancePeriod
  public static readonly AppealTerms = TenderingTermsFieldMetaAppealTerms
  public static readonly Language = TenderingTermsFieldMetaLanguage
  public static readonly BudgetAccountLine = TenderingTermsFieldMetaBudgetAccountLine
  public static readonly ReplacedNoticeDocumentReference = TenderingTermsFieldMetaReplacedNoticeDocumentReference
  public static readonly LotDistribution = TenderingTermsFieldMetaLotDistribution
  public static readonly PostAwardProcess = TenderingTermsFieldMetaPostAwardProcess
  public static readonly EconomicOperatorShortList = TenderingTermsFieldMetaEconomicOperatorShortList
  public static readonly Prize = TenderingTermsFieldMetaPrize
  public static readonly SecurityClearanceTerm = TenderingTermsFieldMetaSecurityClearanceTerm
}

export const TenderingTermsFieldMap = new Map([
  [TenderingTermsField.UBLExtensions, TenderingTermsFieldMetaUBLExtensions],
  [TenderingTermsField.AwardingMethodTypeCode, TenderingTermsFieldMetaAwardingMethodTypeCode],
  [TenderingTermsField.PriceEvaluationCode, TenderingTermsFieldMetaPriceEvaluationCode],
  [TenderingTermsField.MaximumVariantQuantity, TenderingTermsFieldMetaMaximumVariantQuantity],
  [TenderingTermsField.VariantConstraintIndicator, TenderingTermsFieldMetaVariantConstraintIndicator],
  [TenderingTermsField.AcceptedVariantsDescription, TenderingTermsFieldMetaAcceptedVariantsDescription],
  [TenderingTermsField.PriceRevisionFormulaDescription, TenderingTermsFieldMetaPriceRevisionFormulaDescription],
  [TenderingTermsField.FundingProgramCode, TenderingTermsFieldMetaFundingProgramCode],
  [TenderingTermsField.FundingProgram, TenderingTermsFieldMetaFundingProgram],
  [TenderingTermsField.MaximumAdvertisementAmount, TenderingTermsFieldMetaMaximumAdvertisementAmount],
  [TenderingTermsField.Note, TenderingTermsFieldMetaNote],
  [TenderingTermsField.PaymentFrequencyCode, TenderingTermsFieldMetaPaymentFrequencyCode],
  [TenderingTermsField.EconomicOperatorRegistryURI, TenderingTermsFieldMetaEconomicOperatorRegistryURI],
  [TenderingTermsField.RequiredCurriculaIndicator, TenderingTermsFieldMetaRequiredCurriculaIndicator],
  [TenderingTermsField.RequiredCurriculaCode, TenderingTermsFieldMetaRequiredCurriculaCode],
  [TenderingTermsField.OtherConditionsIndicator, TenderingTermsFieldMetaOtherConditionsIndicator],
  [TenderingTermsField.RecurringProcurementIndicator, TenderingTermsFieldMetaRecurringProcurementIndicator],
  [TenderingTermsField.RecurringProcurementDescription, TenderingTermsFieldMetaRecurringProcurementDescription],
  [TenderingTermsField.EstimatedTimingFurtherPublication, TenderingTermsFieldMetaEstimatedTimingFurtherPublication],
  [TenderingTermsField.AdditionalConditions, TenderingTermsFieldMetaAdditionalConditions],
  [TenderingTermsField.LatestSecurityClearanceDate, TenderingTermsFieldMetaLatestSecurityClearanceDate],
  [TenderingTermsField.DocumentationFeeAmount, TenderingTermsFieldMetaDocumentationFeeAmount],
  [TenderingTermsField.MultipleTendersCode, TenderingTermsFieldMetaMultipleTendersCode],
  [TenderingTermsField.VariantConstraintCode, TenderingTermsFieldMetaVariantConstraintCode],
  [TenderingTermsField.PenaltyClause, TenderingTermsFieldMetaPenaltyClause],
  [TenderingTermsField.RequiredFinancialGuarantee, TenderingTermsFieldMetaRequiredFinancialGuarantee],
  [TenderingTermsField.ProcurementLegislationDocumentReference, TenderingTermsFieldMetaProcurementLegislationDocumentReference],
  [TenderingTermsField.FiscalLegislationDocumentReference, TenderingTermsFieldMetaFiscalLegislationDocumentReference],
  [TenderingTermsField.EnvironmentalLegislationDocumentReference, TenderingTermsFieldMetaEnvironmentalLegislationDocumentReference],
  [TenderingTermsField.EmploymentLegislationDocumentReference, TenderingTermsFieldMetaEmploymentLegislationDocumentReference],
  [TenderingTermsField.ContractualDocumentReference, TenderingTermsFieldMetaContractualDocumentReference],
  [TenderingTermsField.CallForTendersDocumentReference, TenderingTermsFieldMetaCallForTendersDocumentReference],
  [TenderingTermsField.WarrantyValidityPeriod, TenderingTermsFieldMetaWarrantyValidityPeriod],
  [TenderingTermsField.PaymentTerms, TenderingTermsFieldMetaPaymentTerms],
  [TenderingTermsField.TendererQualificationRequest, TenderingTermsFieldMetaTendererQualificationRequest],
  [TenderingTermsField.AllowedSubcontractTerms, TenderingTermsFieldMetaAllowedSubcontractTerms],
  [TenderingTermsField.TenderPreparation, TenderingTermsFieldMetaTenderPreparation],
  [TenderingTermsField.ContractExecutionRequirement, TenderingTermsFieldMetaContractExecutionRequirement],
  [TenderingTermsField.AwardingTerms, TenderingTermsFieldMetaAwardingTerms],
  [TenderingTermsField.AdditionalInformationParty, TenderingTermsFieldMetaAdditionalInformationParty],
  [TenderingTermsField.DocumentProviderParty, TenderingTermsFieldMetaDocumentProviderParty],
  [TenderingTermsField.TenderRecipientParty, TenderingTermsFieldMetaTenderRecipientParty],
  [TenderingTermsField.ContractResponsibleParty, TenderingTermsFieldMetaContractResponsibleParty],
  [TenderingTermsField.TenderEvaluationParty, TenderingTermsFieldMetaTenderEvaluationParty],
  [TenderingTermsField.QualificationRequestRecipientParty, TenderingTermsFieldMetaQualificationRequestRecipientParty],
  [TenderingTermsField.TenderValidityPeriod, TenderingTermsFieldMetaTenderValidityPeriod],
  [TenderingTermsField.ContractAcceptancePeriod, TenderingTermsFieldMetaContractAcceptancePeriod],
  [TenderingTermsField.AppealTerms, TenderingTermsFieldMetaAppealTerms],
  [TenderingTermsField.Language, TenderingTermsFieldMetaLanguage],
  [TenderingTermsField.BudgetAccountLine, TenderingTermsFieldMetaBudgetAccountLine],
  [TenderingTermsField.ReplacedNoticeDocumentReference, TenderingTermsFieldMetaReplacedNoticeDocumentReference],
  [TenderingTermsField.LotDistribution, TenderingTermsFieldMetaLotDistribution],
  [TenderingTermsField.PostAwardProcess, TenderingTermsFieldMetaPostAwardProcess],
  [TenderingTermsField.EconomicOperatorShortList, TenderingTermsFieldMetaEconomicOperatorShortList],
  [TenderingTermsField.Prize, TenderingTermsFieldMetaPrize],
  [TenderingTermsField.SecurityClearanceTerm, TenderingTermsFieldMetaSecurityClearanceTerm]
])

export const TenderingTermsType: Type<TenderingTermsField> = {
  name: 'TenderingTerms',
  label: 'Tendering Terms',
  module: TypeModule.cac,
  definition: 'A class to describe tendering terms for a tendering process.',
  fields: TenderingTermsFieldMap,
}
