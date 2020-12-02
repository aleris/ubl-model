import { FieldMeta } from '../FieldMeta'

export enum AwardingCriterionField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  AwardingCriterionTypeCode = 'AwardingCriterionTypeCode',
  Name = 'Name',
  Description = 'Description',
  WeightNumeric = 'WeightNumeric',
  Weight = 'Weight',
  CalculationExpression = 'CalculationExpression',
  CalculationExpressionCode = 'CalculationExpressionCode',
  MinimumQuantity = 'MinimumQuantity',
  MaximumQuantity = 'MaximumQuantity',
  MinimumAmount = 'MinimumAmount',
  MaximumAmount = 'MaximumAmount',
  MinimumImprovementBid = 'MinimumImprovementBid',
  SubordinateAwardingCriterion = 'SubordinateAwardingCriterion'
}

export const AwardingCriterionFieldMetaUBLExtensions = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaID = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'Identifies a specific awarding criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaAwardingCriterionTypeCode = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.AwardingCriterionTypeCode,
  'AwardingCriterionTypeCode',
  'Awarding Criterion Type Code',
  'Code',
  'A code used to define this awarding criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaName = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this awarding criterion.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaDescription = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.Description,
  'Description',
  'Description',
  'Text',
  'A description of the awarding criterion.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaWeightNumeric = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.WeightNumeric,
  'WeightNumeric',
  'Weight Numeric',
  'Numeric',
  'A number defining the comparative weighting assigned to this awarding criterion, to enable formulaic evaluation.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaWeight = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.Weight,
  'Weight',
  'Weight',
  'Text',
  'A description of the comparative weighting for this awarding criterion.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaCalculationExpression = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.CalculationExpression,
  'CalculationExpression',
  'Calculation Expression',
  'Text',
  'The mathematical expression that will be used to evaluate this criterion.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaCalculationExpressionCode = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.CalculationExpressionCode,
  'CalculationExpressionCode',
  'Calculation Expression Code',
  'Code',
  'A code identifying the mathematical expression that will be used to evaluate this criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMinimumQuantity = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  'Quantity',
  'The minimum quantity for an awarding criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMaximumQuantity = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  'Quantity',
  'The maximum quantity for an awarding criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMinimumAmount = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MinimumAmount,
  'MinimumAmount',
  'Minimum Amount',
  'Amount',
  'The minimum monetary amount for an awarding criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMaximumAmount = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MaximumAmount,
  'MaximumAmount',
  'Maximum Amount',
  'Amount',
  'The maximum monetary amount for an awarding criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMinimumImprovementBid = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MinimumImprovementBid,
  'MinimumImprovementBid',
  'Minimum Improvement Bid',
  'Text',
  'Describes the minimum improvement bid for this awarding criterion when used in an auction.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaSubordinateAwardingCriterion = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.SubordinateAwardingCriterion,
  'SubordinateAwardingCriterion',
  'Subordinate Awarding Criterion',
  'AwardingCriterion',
  'Defines any subsidiary awarding criterion.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class AwardingCriterionFieldMeta {
  public static readonly UBLExtensions = AwardingCriterionFieldMetaUBLExtensions
  public static readonly ID = AwardingCriterionFieldMetaID
  public static readonly AwardingCriterionTypeCode = AwardingCriterionFieldMetaAwardingCriterionTypeCode
  public static readonly Name = AwardingCriterionFieldMetaName
  public static readonly Description = AwardingCriterionFieldMetaDescription
  public static readonly WeightNumeric = AwardingCriterionFieldMetaWeightNumeric
  public static readonly Weight = AwardingCriterionFieldMetaWeight
  public static readonly CalculationExpression = AwardingCriterionFieldMetaCalculationExpression
  public static readonly CalculationExpressionCode = AwardingCriterionFieldMetaCalculationExpressionCode
  public static readonly MinimumQuantity = AwardingCriterionFieldMetaMinimumQuantity
  public static readonly MaximumQuantity = AwardingCriterionFieldMetaMaximumQuantity
  public static readonly MinimumAmount = AwardingCriterionFieldMetaMinimumAmount
  public static readonly MaximumAmount = AwardingCriterionFieldMetaMaximumAmount
  public static readonly MinimumImprovementBid = AwardingCriterionFieldMetaMinimumImprovementBid
  public static readonly SubordinateAwardingCriterion = AwardingCriterionFieldMetaSubordinateAwardingCriterion
}

export const AwardingCriterionFieldMap = new Map([
  [AwardingCriterionField.UBLExtensions, AwardingCriterionFieldMetaUBLExtensions],
  [AwardingCriterionField.ID, AwardingCriterionFieldMetaID],
  [AwardingCriterionField.AwardingCriterionTypeCode, AwardingCriterionFieldMetaAwardingCriterionTypeCode],
  [AwardingCriterionField.Name, AwardingCriterionFieldMetaName],
  [AwardingCriterionField.Description, AwardingCriterionFieldMetaDescription],
  [AwardingCriterionField.WeightNumeric, AwardingCriterionFieldMetaWeightNumeric],
  [AwardingCriterionField.Weight, AwardingCriterionFieldMetaWeight],
  [AwardingCriterionField.CalculationExpression, AwardingCriterionFieldMetaCalculationExpression],
  [AwardingCriterionField.CalculationExpressionCode, AwardingCriterionFieldMetaCalculationExpressionCode],
  [AwardingCriterionField.MinimumQuantity, AwardingCriterionFieldMetaMinimumQuantity],
  [AwardingCriterionField.MaximumQuantity, AwardingCriterionFieldMetaMaximumQuantity],
  [AwardingCriterionField.MinimumAmount, AwardingCriterionFieldMetaMinimumAmount],
  [AwardingCriterionField.MaximumAmount, AwardingCriterionFieldMetaMaximumAmount],
  [AwardingCriterionField.MinimumImprovementBid, AwardingCriterionFieldMetaMinimumImprovementBid],
  [AwardingCriterionField.SubordinateAwardingCriterion, AwardingCriterionFieldMetaSubordinateAwardingCriterion]
])
