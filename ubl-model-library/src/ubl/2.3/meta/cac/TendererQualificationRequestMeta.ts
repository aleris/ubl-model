import { FieldMeta } from '../FieldMeta'

export enum TendererQualificationRequestField {
  UBLExtensions = 'UBLExtensions',
  CompanyLegalFormCode = 'CompanyLegalFormCode',
  CompanyLegalForm = 'CompanyLegalForm',
  PersonalSituation = 'PersonalSituation',
  OperatingYearsQuantity = 'OperatingYearsQuantity',
  EmployeeQuantity = 'EmployeeQuantity',
  Description = 'Description',
  RequiredBusinessClassificationScheme = 'RequiredBusinessClassificationScheme',
  TechnicalEvaluationCriterion = 'TechnicalEvaluationCriterion',
  FinancialEvaluationCriterion = 'FinancialEvaluationCriterion',
  SpecificTendererRequirement = 'SpecificTendererRequirement',
  EconomicOperatorRole = 'EconomicOperatorRole'
}

export const TendererQualificationRequestFieldMetaUBLExtensions = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaCompanyLegalFormCode = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.CompanyLegalFormCode,
  'CompanyLegalFormCode',
  'Company Legal Form Code',
  'Code',
  'The legal status requested for potential tenderers, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaCompanyLegalForm = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.CompanyLegalForm,
  'CompanyLegalForm',
  'Company Legal Form',
  'Text',
  'The legal status requested for potential tenderers, expressed as text',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaPersonalSituation = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.PersonalSituation,
  'PersonalSituation',
  'Personal Situation',
  'Text',
  'Text describing the personal situation of the economic operators in this tendering process.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaOperatingYearsQuantity = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.OperatingYearsQuantity,
  'OperatingYearsQuantity',
  'Operating Years',
  'Quantity',
  'Textual description of the legal form required for potential tenderers.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaEmployeeQuantity = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.EmployeeQuantity,
  'EmployeeQuantity',
  'Employee',
  'Quantity',
  'Textual description of the legal form required for potential tenderers.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaDescription = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the evaluation requirements for this tenderer.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaRequiredBusinessClassificationScheme = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.RequiredBusinessClassificationScheme,
  'RequiredBusinessClassificationScheme',
  'Required Business Classification Scheme',
  'ClassificationScheme',
  'A classification scheme for the business profile.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaTechnicalEvaluationCriterion = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.TechnicalEvaluationCriterion,
  'TechnicalEvaluationCriterion',
  'Technical Evaluation Criterion',
  'EvaluationCriterion',
  'A technical evaluation criterion required for an economic operator in a tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaFinancialEvaluationCriterion = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.FinancialEvaluationCriterion,
  'FinancialEvaluationCriterion',
  'Financial Evaluation Criterion',
  'EvaluationCriterion',
  'A financial evaluation criterion required for an economic operator in a tendering process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaSpecificTendererRequirement = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.SpecificTendererRequirement,
  'SpecificTendererRequirement',
  'Specific Tenderer Requirement',
  'TendererRequirement',
  'A requirement to be met by a tenderer.',
  '0..n',
  'cac',
  undefined,
  'Preregistration in a Business Registry'
)

export const TendererQualificationRequestFieldMetaEconomicOperatorRole = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.EconomicOperatorRole,
  'EconomicOperatorRole',
  'Economic Operator Role',
  'EconomicOperatorRole',
  'A class to describe the tenderer contracting role.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class TendererQualificationRequestFieldMeta {
  public static readonly UBLExtensions = TendererQualificationRequestFieldMetaUBLExtensions
  public static readonly CompanyLegalFormCode = TendererQualificationRequestFieldMetaCompanyLegalFormCode
  public static readonly CompanyLegalForm = TendererQualificationRequestFieldMetaCompanyLegalForm
  public static readonly PersonalSituation = TendererQualificationRequestFieldMetaPersonalSituation
  public static readonly OperatingYearsQuantity = TendererQualificationRequestFieldMetaOperatingYearsQuantity
  public static readonly EmployeeQuantity = TendererQualificationRequestFieldMetaEmployeeQuantity
  public static readonly Description = TendererQualificationRequestFieldMetaDescription
  public static readonly RequiredBusinessClassificationScheme = TendererQualificationRequestFieldMetaRequiredBusinessClassificationScheme
  public static readonly TechnicalEvaluationCriterion = TendererQualificationRequestFieldMetaTechnicalEvaluationCriterion
  public static readonly FinancialEvaluationCriterion = TendererQualificationRequestFieldMetaFinancialEvaluationCriterion
  public static readonly SpecificTendererRequirement = TendererQualificationRequestFieldMetaSpecificTendererRequirement
  public static readonly EconomicOperatorRole = TendererQualificationRequestFieldMetaEconomicOperatorRole
}

export const TendererQualificationRequestFieldMap = new Map([
  [TendererQualificationRequestField.UBLExtensions, TendererQualificationRequestFieldMetaUBLExtensions],
  [TendererQualificationRequestField.CompanyLegalFormCode, TendererQualificationRequestFieldMetaCompanyLegalFormCode],
  [TendererQualificationRequestField.CompanyLegalForm, TendererQualificationRequestFieldMetaCompanyLegalForm],
  [TendererQualificationRequestField.PersonalSituation, TendererQualificationRequestFieldMetaPersonalSituation],
  [TendererQualificationRequestField.OperatingYearsQuantity, TendererQualificationRequestFieldMetaOperatingYearsQuantity],
  [TendererQualificationRequestField.EmployeeQuantity, TendererQualificationRequestFieldMetaEmployeeQuantity],
  [TendererQualificationRequestField.Description, TendererQualificationRequestFieldMetaDescription],
  [TendererQualificationRequestField.RequiredBusinessClassificationScheme, TendererQualificationRequestFieldMetaRequiredBusinessClassificationScheme],
  [TendererQualificationRequestField.TechnicalEvaluationCriterion, TendererQualificationRequestFieldMetaTechnicalEvaluationCriterion],
  [TendererQualificationRequestField.FinancialEvaluationCriterion, TendererQualificationRequestFieldMetaFinancialEvaluationCriterion],
  [TendererQualificationRequestField.SpecificTendererRequirement, TendererQualificationRequestFieldMetaSpecificTendererRequirement],
  [TendererQualificationRequestField.EconomicOperatorRole, TendererQualificationRequestFieldMetaEconomicOperatorRole]
])
