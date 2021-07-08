import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { EvidenceType } from './EvidenceMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EvaluationCriterionField {
  UBLExtensions = 'UBLExtensions',
  EvaluationCriterionTypeCode = 'EvaluationCriterionTypeCode',
  Description = 'Description',
  ThresholdAmount = 'ThresholdAmount',
  ThresholdQuantity = 'ThresholdQuantity',
  ExpressionCode = 'ExpressionCode',
  Expression = 'Expression',
  DurationPeriod = 'DurationPeriod',
  SuggestedEvidence = 'SuggestedEvidence'
}

export const EvaluationCriterionFieldMetaUBLExtensions = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaEvaluationCriterionTypeCode = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.EvaluationCriterionTypeCode,
  'EvaluationCriterionTypeCode',
  'Evaluation Criterion Type Code',
  CodeType.name,
  'A code that specifies the criterion; it may be financial, technical or organizational.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaDescription = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.Description,
  'Description',
  'Description',
  TextType.name,
  'A description of the criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaThresholdAmount = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.ThresholdAmount,
  'ThresholdAmount',
  'Threshold Amount',
  AmountType.name,
  'Estimated monetary amount of the threshold for the criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaThresholdQuantity = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.ThresholdQuantity,
  'ThresholdQuantity',
  'Threshold Quantity',
  QuantityType.name,
  'Estimated quantity of the threshold for the criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaExpressionCode = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.ExpressionCode,
  'ExpressionCode',
  'Expression Code',
  CodeType.name,
  'A code identifying the expression that will be used to evaluate the criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaExpression = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.Expression,
  'Expression',
  'Expression',
  TextType.name,
  'The expression that will be used to evaluate the criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaDurationPeriod = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.DurationPeriod,
  'DurationPeriod',
  'Duration Period',
  PeriodType.name,
  'Describes the period for which the evaluation criterion is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaSuggestedEvidence = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.SuggestedEvidence,
  'SuggestedEvidence',
  'Suggested Evidence',
  EvidenceType.name,
  'Describes any evidences that should be used to satisfy the criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class EvaluationCriterionFieldMeta {
  public static readonly UBLExtensions = EvaluationCriterionFieldMetaUBLExtensions
  public static readonly EvaluationCriterionTypeCode = EvaluationCriterionFieldMetaEvaluationCriterionTypeCode
  public static readonly Description = EvaluationCriterionFieldMetaDescription
  public static readonly ThresholdAmount = EvaluationCriterionFieldMetaThresholdAmount
  public static readonly ThresholdQuantity = EvaluationCriterionFieldMetaThresholdQuantity
  public static readonly ExpressionCode = EvaluationCriterionFieldMetaExpressionCode
  public static readonly Expression = EvaluationCriterionFieldMetaExpression
  public static readonly DurationPeriod = EvaluationCriterionFieldMetaDurationPeriod
  public static readonly SuggestedEvidence = EvaluationCriterionFieldMetaSuggestedEvidence
}

export const EvaluationCriterionFieldMap = new Map([
  [EvaluationCriterionField.UBLExtensions, EvaluationCriterionFieldMetaUBLExtensions],
  [EvaluationCriterionField.EvaluationCriterionTypeCode, EvaluationCriterionFieldMetaEvaluationCriterionTypeCode],
  [EvaluationCriterionField.Description, EvaluationCriterionFieldMetaDescription],
  [EvaluationCriterionField.ThresholdAmount, EvaluationCriterionFieldMetaThresholdAmount],
  [EvaluationCriterionField.ThresholdQuantity, EvaluationCriterionFieldMetaThresholdQuantity],
  [EvaluationCriterionField.ExpressionCode, EvaluationCriterionFieldMetaExpressionCode],
  [EvaluationCriterionField.Expression, EvaluationCriterionFieldMetaExpression],
  [EvaluationCriterionField.DurationPeriod, EvaluationCriterionFieldMetaDurationPeriod],
  [EvaluationCriterionField.SuggestedEvidence, EvaluationCriterionFieldMetaSuggestedEvidence]
])

export const EvaluationCriterionType: Type<EvaluationCriterionField> = {
  name: 'EvaluationCriterion',
  label: 'Evaluation Criterion',
  module: TypeModule.cac,
  definition: 'A class defining the required criterion for a tenderer to be elligible in a tendering process.',
  fields: EvaluationCriterionFieldMap,
}
