import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { NumericType } from '../cbc/NumericMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaID = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'Identifies a specific awarding criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaAwardingCriterionTypeCode = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.AwardingCriterionTypeCode,
  'AwardingCriterionTypeCode',
  'Awarding Criterion Type Code',
  CodeType.name,
  'A code used to define this awarding criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaName = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this awarding criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaDescription = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.Description,
  'Description',
  'Description',
  TextType.name,
  'A description of the awarding criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaWeightNumeric = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.WeightNumeric,
  'WeightNumeric',
  'Weight Numeric',
  NumericType.name,
  'A number defining the comparative weighting assigned to this awarding criterion, to enable formulaic evaluation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaWeight = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.Weight,
  'Weight',
  'Weight',
  TextType.name,
  'A description of the comparative weighting for this awarding criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaCalculationExpression = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.CalculationExpression,
  'CalculationExpression',
  'Calculation Expression',
  TextType.name,
  'The mathematical expression that will be used to evaluate this criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaCalculationExpressionCode = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.CalculationExpressionCode,
  'CalculationExpressionCode',
  'Calculation Expression Code',
  CodeType.name,
  'A code identifying the mathematical expression that will be used to evaluate this criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMinimumQuantity = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  QuantityType.name,
  'The minimum quantity for an awarding criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMaximumQuantity = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  QuantityType.name,
  'The maximum quantity for an awarding criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMinimumAmount = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MinimumAmount,
  'MinimumAmount',
  'Minimum Amount',
  AmountType.name,
  'The minimum monetary amount for an awarding criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMaximumAmount = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MaximumAmount,
  'MaximumAmount',
  'Maximum Amount',
  AmountType.name,
  'The maximum monetary amount for an awarding criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaMinimumImprovementBid = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.MinimumImprovementBid,
  'MinimumImprovementBid',
  'Minimum Improvement Bid',
  TextType.name,
  'Describes the minimum improvement bid for this awarding criterion when used in an auction.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardingCriterionFieldMetaSubordinateAwardingCriterion = new FieldMeta<AwardingCriterionField>(
  AwardingCriterionField.SubordinateAwardingCriterion,
  'SubordinateAwardingCriterion',
  'Subordinate Awarding Criterion',
  AwardingCriterionType.name,
  'Defines any subsidiary awarding criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const AwardingCriterionType: Type<AwardingCriterionField> = {
  name: 'AwardingCriterion',
  label: 'Awarding Criterion',
  module: TypeModule.cac,
  definition: 'A class to define a criterion from the contracting party that will be taken into account when awarding a contract. An awarding criterion can be objective, when it can be evaluated following a formula, or subjective, when human analysis is required.',
  fields: AwardingCriterionFieldMap,
}
