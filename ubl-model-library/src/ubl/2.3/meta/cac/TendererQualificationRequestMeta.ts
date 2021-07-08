import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ClassificationSchemeType } from './ClassificationSchemeMeta'
import { CodeType } from '../cbc/CodeMeta'
import { EconomicOperatorRoleType } from './EconomicOperatorRoleMeta'
import { EvaluationCriterionType } from './EvaluationCriterionMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TendererRequirementType } from './TendererRequirementMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaCompanyLegalFormCode = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.CompanyLegalFormCode,
  'CompanyLegalFormCode',
  'Company Legal Form Code',
  CodeType.name,
  'The legal status requested for potential tenderers, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaCompanyLegalForm = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.CompanyLegalForm,
  'CompanyLegalForm',
  'Company Legal Form',
  TextType.name,
  'The legal status requested for potential tenderers, expressed as text',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaPersonalSituation = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.PersonalSituation,
  'PersonalSituation',
  'Personal Situation',
  TextType.name,
  'Text describing the personal situation of the economic operators in this tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaOperatingYearsQuantity = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.OperatingYearsQuantity,
  'OperatingYearsQuantity',
  'Operating Years',
  QuantityType.name,
  'Textual description of the legal form required for potential tenderers.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaEmployeeQuantity = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.EmployeeQuantity,
  'EmployeeQuantity',
  'Employee',
  QuantityType.name,
  'Textual description of the legal form required for potential tenderers.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaDescription = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the evaluation requirements for this tenderer.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaRequiredBusinessClassificationScheme = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.RequiredBusinessClassificationScheme,
  'RequiredBusinessClassificationScheme',
  'Required Business Classification Scheme',
  ClassificationSchemeType.name,
  'A classification scheme for the business profile.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaTechnicalEvaluationCriterion = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.TechnicalEvaluationCriterion,
  'TechnicalEvaluationCriterion',
  'Technical Evaluation Criterion',
  EvaluationCriterionType.name,
  'A technical evaluation criterion required for an economic operator in a tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaFinancialEvaluationCriterion = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.FinancialEvaluationCriterion,
  'FinancialEvaluationCriterion',
  'Financial Evaluation Criterion',
  EvaluationCriterionType.name,
  'A financial evaluation criterion required for an economic operator in a tendering process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationRequestFieldMetaSpecificTendererRequirement = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.SpecificTendererRequirement,
  'SpecificTendererRequirement',
  'Specific Tenderer Requirement',
  TendererRequirementType.name,
  'A requirement to be met by a tenderer.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  'Preregistration in a Business Registry'
)

export const TendererQualificationRequestFieldMetaEconomicOperatorRole = new FieldMeta<TendererQualificationRequestField>(
  TendererQualificationRequestField.EconomicOperatorRole,
  'EconomicOperatorRole',
  'Economic Operator Role',
  EconomicOperatorRoleType.name,
  'A class to describe the tenderer contracting role.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TendererQualificationRequestType: Type<TendererQualificationRequestField> = {
  name: 'TendererQualificationRequest',
  label: 'Tenderer Qualification Request',
  module: TypeModule.cac,
  definition: 'The evaluation that the Contracting Authority party requests to fulfill to the tenderers.',
  fields: TendererQualificationRequestFieldMap,
}
