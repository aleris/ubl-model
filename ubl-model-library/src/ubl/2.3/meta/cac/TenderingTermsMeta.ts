import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAwardingMethodTypeCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AwardingMethodTypeCode,
  'AwardingMethodTypeCode',
  'Awarding Method Type Code',
  'Code',
  'A code signifying the awarding method in a tendering process (e.g., a method favoring the tender with the lowest price or the tender that is most economically advantageous).',
  '0..1',
  'cbc',
  undefined,
  'Price, Multiple criteria'
)

export const TenderingTermsFieldMetaPriceEvaluationCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PriceEvaluationCode,
  'PriceEvaluationCode',
  'Price Evaluation Code',
  'Code',
  'Textual description of the legal form required for potential tenderers.',
  '0..1',
  'cbc',
  undefined,
  'Unit prices, global price'
)

export const TenderingTermsFieldMetaMaximumVariantQuantity = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.MaximumVariantQuantity,
  'MaximumVariantQuantity',
  'Maximum Variant Quantity',
  'Quantity',
  'Maximum number of variants the tenderer is allowed to present for this tendering project.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaVariantConstraintIndicator = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.VariantConstraintIndicator,
  'VariantConstraintIndicator',
  'Variant Constraint',
  'Indicator',
  'An indicator that variants are allowed and unconstrained in number (true) or not allowed (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAcceptedVariantsDescription = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AcceptedVariantsDescription,
  'AcceptedVariantsDescription',
  'Accepted Variants Description',
  'Text',
  'Text specifying the things for which variants are accepted.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPriceRevisionFormulaDescription = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PriceRevisionFormulaDescription,
  'PriceRevisionFormulaDescription',
  'Price Revision Formula Description',
  'Text',
  'Text describing the formula for price revision.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaFundingProgramCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.FundingProgramCode,
  'FundingProgramCode',
  'Funding Program Code',
  'Code',
  'The program that funds the tendering process (e.g., "National", "European"), expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaFundingProgram = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.FundingProgram,
  'FundingProgram',
  'Funding Program',
  'Text',
  'The program that funds the tendering process (e.g., EU 6th Framework Program) expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaMaximumAdvertisementAmount = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.MaximumAdvertisementAmount,
  'MaximumAdvertisementAmount',
  'Maximum Advertisement',
  'Amount',
  'The maximum advertised monetary value of the tendering process.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaNote = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPaymentFrequencyCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PaymentFrequencyCode,
  'PaymentFrequencyCode',
  'Payment Frequency Code',
  'Code',
  'A code signifying the frequency of payment in the contract associated with the tendering process.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEconomicOperatorRegistryURI = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EconomicOperatorRegistryURI,
  'EconomicOperatorRegistryURI',
  'Economic Operator Registry URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of an electronic registry of economic operators.',
  '0..1',
  'cbc',
  'Web site',
  undefined
)

export const TenderingTermsFieldMetaRequiredCurriculaIndicator = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RequiredCurriculaIndicator,
  'RequiredCurriculaIndicator',
  'Required Curricula',
  'Indicator',
  'An indicator that tenderers are required to provide a curriculum vitae for each participant in the project (true) or are not so required (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaRequiredCurriculaCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RequiredCurriculaCode,
  'RequiredCurriculaCode',
  'Required Curricula',
  'Code',
  'A code signifying the conditions applying for tenderers to provide a curriculum vitae.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaOtherConditionsIndicator = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.OtherConditionsIndicator,
  'OtherConditionsIndicator',
  'Other Conditions',
  'Indicator',
  'Indicates whether other conditions exist (true) or not (false). If the indicator is true, the description may be provided.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaRecurringProcurementIndicator = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RecurringProcurementIndicator,
  'RecurringProcurementIndicator',
  'Recurring Procurement',
  'Indicator',
  'Indicates whether the procurement is recurring (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaRecurringProcurementDescription = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RecurringProcurementDescription,
  'RecurringProcurementDescription',
  'Recurring Procurement Description',
  'Text',
  'Any additional information about recurrence (e.g. estimated timing).',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEstimatedTimingFurtherPublication = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EstimatedTimingFurtherPublication,
  'EstimatedTimingFurtherPublication',
  'Estimated Timing Further Publication',
  'Text',
  'The description of the estimated timing for further notices to be published.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAdditionalConditions = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AdditionalConditions,
  'AdditionalConditions',
  'Additional Conditions',
  'Text',
  'Other existing conditions.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaLatestSecurityClearanceDate = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.LatestSecurityClearanceDate,
  'LatestSecurityClearanceDate',
  'Latest Security Clearance Date',
  'Date',
  'The end date until which the candidates can obtain the necessary level of security clearance.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaDocumentationFeeAmount = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.DocumentationFeeAmount,
  'DocumentationFeeAmount',
  'Documentation Fee Amount',
  'Amount',
  'The amount to be paid to obtain the contract documents and additional documentation.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaMultipleTendersCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.MultipleTendersCode,
  'MultipleTendersCode',
  'Multiple Tenders',
  'Code',
  'A code signifying whether a tenderer is allowed to submit multiple tenders.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaVariantConstraintCode = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.VariantConstraintCode,
  'VariantConstraintCode',
  'Variant Constraint',
  'Code',
  'A code signifying the modalities for a tenderer to submit variants of tenders.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPenaltyClause = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PenaltyClause,
  'PenaltyClause',
  'Penalty Clause',
  'Clause',
  'The penalty clauses',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaRequiredFinancialGuarantee = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.RequiredFinancialGuarantee,
  'RequiredFinancialGuarantee',
  'Required Financial Guarantee',
  'FinancialGuarantee',
  'A financial guarantee of a tenderer or bid submitter\'s actual entry into a contract in the event that it is the successful bidder.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaProcurementLegislationDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ProcurementLegislationDocumentReference,
  'ProcurementLegislationDocumentReference',
  'Procurement Legislation Document Reference',
  'DocumentReference',
  'A reference to a document providing references to procurement legislation applicable to the tendering process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaFiscalLegislationDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.FiscalLegislationDocumentReference,
  'FiscalLegislationDocumentReference',
  'Fiscal Legislation Document Reference',
  'DocumentReference',
  'A reference to a document providing references to fiscal legislation applicable to the tendering process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEnvironmentalLegislationDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EnvironmentalLegislationDocumentReference,
  'EnvironmentalLegislationDocumentReference',
  'Environmental Legislation Document Reference',
  'DocumentReference',
  'A reference to a document providing references to environmental legislation applicable to the tendering process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEmploymentLegislationDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EmploymentLegislationDocumentReference,
  'EmploymentLegislationDocumentReference',
  'Employment Legislation Document Reference',
  'DocumentReference',
  'A reference to a document providing references to employment legislation applicable to the tendering process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaContractualDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ContractualDocumentReference,
  'ContractualDocumentReference',
  'Contractual Document Reference',
  'DocumentReference',
  'A reference to a document that will become part of the awarded contract.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaCallForTendersDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.CallForTendersDocumentReference,
  'CallForTendersDocumentReference',
  'Call For Tenders Document Reference',
  'DocumentReference',
  'A reference to the Call for Tender associated with these tendering terms.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaWarrantyValidityPeriod = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.WarrantyValidityPeriod,
  'WarrantyValidityPeriod',
  'Warranty Validity Period',
  'Period',
  'The period during which a warranty for work, service, or goods associated with these tendering terms is valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPaymentTerms = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A specification of payment terms associated with the tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTendererQualificationRequest = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TendererQualificationRequest,
  'TendererQualificationRequest',
  'Tenderer Qualification Request',
  'TendererQualificationRequest',
  'Required set of qualifications for a tenderer in this tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAllowedSubcontractTerms = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AllowedSubcontractTerms,
  'AllowedSubcontractTerms',
  'Allowed Subcontract Terms',
  'SubcontractTerms',
  'Subcontract terms for the tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTenderPreparation = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TenderPreparation,
  'TenderPreparation',
  'Tender Preparation',
  'TenderPreparation',
  'Directions for preparing a tender for the+D2057 tendering process.',
  '0..n',
  'cac',
  undefined,
  'Curricula required, Experience required, ....'
)

export const TenderingTermsFieldMetaContractExecutionRequirement = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ContractExecutionRequirement,
  'ContractExecutionRequirement',
  'Contract Execution Requirement',
  'ContractExecutionRequirement',
  'A requirement relating to execution of the contract that will be awarded as a result of the tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAwardingTerms = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AwardingTerms,
  'AwardingTerms',
  'Awarding Terms',
  'AwardingTerms',
  'The terms in the tendering process for awarding the contract for a project.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAdditionalInformationParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AdditionalInformationParty,
  'AdditionalInformationParty',
  'Additional Information Party',
  'Party',
  'A party that has additional information about the tendering process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaDocumentProviderParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.DocumentProviderParty,
  'DocumentProviderParty',
  'Document Provider Party',
  'Party',
  'The party that has the contract documents for the tendering process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTenderRecipientParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TenderRecipientParty,
  'TenderRecipientParty',
  'Tender Recipient Party',
  'Party',
  'The party to which tenders should be presented.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaContractResponsibleParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ContractResponsibleParty,
  'ContractResponsibleParty',
  'Contract Responsible Party',
  'Party',
  'The party responsible for the execution of the contract.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTenderEvaluationParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TenderEvaluationParty,
  'TenderEvaluationParty',
  'Tender Evaluation Party',
  'Party',
  'A party in the contracting authority responsible for evaluating tenders received.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaQualificationRequestRecipientParty = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.QualificationRequestRecipientParty,
  'QualificationRequestRecipientParty',
  'Qualification Request Recipient Party',
  'Party',
  'A party in the contracting authority responsible for receiving qualification requests.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaTenderValidityPeriod = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.TenderValidityPeriod,
  'TenderValidityPeriod',
  'Tender Validity Period',
  'Period',
  'The period during which tenders submitted for this tendering process must remain valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaContractAcceptancePeriod = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ContractAcceptancePeriod,
  'ContractAcceptancePeriod',
  'Contract Acceptance Period',
  'Period',
  'The period of time during which the contracting authority may accept a contract.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaAppealTerms = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.AppealTerms,
  'AppealTerms',
  'Appeal Terms',
  'AppealTerms',
  'Information about the terms to present for an appeal against a tender award.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaLanguage = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.Language,
  'Language',
  'Language',
  'Language',
  'One of the default languages specified for the tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaBudgetAccountLine = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.BudgetAccountLine,
  'BudgetAccountLine',
  'Budget Account Line',
  'BudgetAccountLine',
  'A budget account line associated with the tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaReplacedNoticeDocumentReference = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.ReplacedNoticeDocumentReference,
  'ReplacedNoticeDocumentReference',
  'Replaced Notice Document Reference',
  'DocumentReference',
  'A class defining a reference to the notice that is being replaced.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaLotDistribution = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.LotDistribution,
  'LotDistribution',
  'Lot Distribution',
  'LotDistribution',
  'List of specific ways to tender to the lots of the procurement project.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPostAwardProcess = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.PostAwardProcess,
  'PostAwardProcess',
  'Post Award Process',
  'PostAwardProcess',
  'Information about the post-award process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaEconomicOperatorShortList = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.EconomicOperatorShortList,
  'EconomicOperatorShortList',
  'Economic Operator Short List',
  'EconomicOperatorShortList',
  'A set of criteria used to create a short list of candidates.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TenderingTermsFieldMetaPrize = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.Prize,
  'Prize',
  'Prize',
  'Prize',
  'Information about the value amount that will be offered to the winner depending on his rank.',
  '0..n',
  'cac',
  undefined,
  'In a design context , 1st place EUR 10 000 , 2nd place EUR 5000'
)

export const TenderingTermsFieldMetaSecurityClearanceTerm = new FieldMeta<TenderingTermsField>(
  TenderingTermsField.SecurityClearanceTerm,
  'SecurityClearanceTerm',
  'Security Clearance Term',
  'SecurityClearanceTerm',
  'Information about the terms to present for a security clearance.',
  '0..n',
  'cac',
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
