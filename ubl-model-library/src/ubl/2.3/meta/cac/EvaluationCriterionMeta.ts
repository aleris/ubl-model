import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaEvaluationCriterionTypeCode = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.EvaluationCriterionTypeCode,
  'EvaluationCriterionTypeCode',
  'Evaluation Criterion Type Code',
  'Code',
  'A code that specifies the criterion; it may be financial, technical or organizational.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaDescription = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.Description,
  'Description',
  'Description',
  'Text',
  'A description of the criterion.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaThresholdAmount = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.ThresholdAmount,
  'ThresholdAmount',
  'Threshold Amount',
  'Amount',
  'Estimated monetary amount of the threshold for the criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaThresholdQuantity = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.ThresholdQuantity,
  'ThresholdQuantity',
  'Threshold Quantity',
  'Quantity',
  'Estimated quantity of the threshold for the criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaExpressionCode = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.ExpressionCode,
  'ExpressionCode',
  'Expression Code',
  'Code',
  'A code identifying the expression that will be used to evaluate the criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaExpression = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.Expression,
  'Expression',
  'Expression',
  'Text',
  'The expression that will be used to evaluate the criterion.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaDurationPeriod = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.DurationPeriod,
  'DurationPeriod',
  'Duration Period',
  'Period',
  'Describes the period for which the evaluation criterion is valid.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const EvaluationCriterionFieldMetaSuggestedEvidence = new FieldMeta<EvaluationCriterionField>(
  EvaluationCriterionField.SuggestedEvidence,
  'SuggestedEvidence',
  'Suggested Evidence',
  'Evidence',
  'Describes any evidences that should be used to satisfy the criterion.',
  '0..n',
  'cac',
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
