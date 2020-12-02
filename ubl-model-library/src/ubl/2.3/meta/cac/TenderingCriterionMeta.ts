import { FieldMeta } from '../FieldMeta'

export enum TenderingCriterionField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  CriterionTypeCode = 'CriterionTypeCode',
  Name = 'Name',
  Description = 'Description',
  WeightNumeric = 'WeightNumeric',
  FulfilmentIndicator = 'FulfilmentIndicator',
  FulfilmentIndicatorTypeCode = 'FulfilmentIndicatorTypeCode',
  EvaluationMethodTypeCode = 'EvaluationMethodTypeCode',
  WeightingConsiderationDescription = 'WeightingConsiderationDescription',
  ProcurementProjectLotReference = 'ProcurementProjectLotReference',
  CommodityClassification = 'CommodityClassification',
  SubTenderingCriterion = 'SubTenderingCriterion',
  Legislation = 'Legislation',
  TenderingCriterionPropertyGroup = 'TenderingCriterionPropertyGroup'
}

export const TenderingCriterionFieldMetaUBLExtensions = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaID = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this item of criterion support.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaCriterionTypeCode = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.CriterionTypeCode,
  'CriterionTypeCode',
  'Criterion Type Code',
  'Code',
  'A code signifying the type of criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaName = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.Name,
  'Name',
  'Name',
  'Text',
  'The name of the criterion.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaDescription = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.Description,
  'Description',
  'Description',
  'Text',
  'The textual description for this criterion.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaWeightNumeric = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.WeightNumeric,
  'WeightNumeric',
  'Weight Numeric',
  'Numeric',
  'A weighting to provide for automatic scoring of the criterion.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaFulfilmentIndicator = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.FulfilmentIndicator,
  'FulfilmentIndicator',
  'Fulfilment Indicator',
  'Indicator',
  'An indication that this criterion has been fulfilled.',
  '0..1',
  'cbc',
  undefined,
  'TRUE means fulfilled, FALSE means not fulfilled'
)

export const TenderingCriterionFieldMetaFulfilmentIndicatorTypeCode = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.FulfilmentIndicatorTypeCode,
  'FulfilmentIndicatorTypeCode',
  'Fulfilment Indicator Type Code',
  'Code',
  'A code signifying how this criterion has been fulfilled.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaEvaluationMethodTypeCode = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.EvaluationMethodTypeCode,
  'EvaluationMethodTypeCode',
  'Evaluation Method Type Code',
  'Code',
  'A code signifying the type of Evaluation.',
  '0..1',
  'cbc',
  undefined,
  'Weight'
)

export const TenderingCriterionFieldMetaWeightingConsiderationDescription = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.WeightingConsiderationDescription,
  'WeightingConsiderationDescription',
  'Weighting Consideration Description',
  'Text',
  'The textual description of the Weighting Description',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaProcurementProjectLotReference = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  'ProcurementProjectLotReference',
  'One or more lots to which the tendering criterion applies',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaCommodityClassification = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.CommodityClassification,
  'CommodityClassification',
  'Commodity Classification',
  'CommodityClassification',
  'One or more classification to which this criterion applies',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaSubTenderingCriterion = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.SubTenderingCriterion,
  'SubTenderingCriterion',
  'Sub Tendering Criterion',
  'TenderingCriterion',
  'One or more tendering subcriteria.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaLegislation = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.Legislation,
  'Legislation',
  'Legislation',
  'Legislation',
  'The legislation reference for the criterion.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaTenderingCriterionPropertyGroup = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.TenderingCriterionPropertyGroup,
  'TenderingCriterionPropertyGroup',
  'Tendering Criterion Property Group',
  'TenderingCriterionPropertyGroup',
  'The sets of properties that can be used to fulfil the tendering criterion.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class TenderingCriterionFieldMeta {
  public static readonly UBLExtensions = TenderingCriterionFieldMetaUBLExtensions
  public static readonly ID = TenderingCriterionFieldMetaID
  public static readonly CriterionTypeCode = TenderingCriterionFieldMetaCriterionTypeCode
  public static readonly Name = TenderingCriterionFieldMetaName
  public static readonly Description = TenderingCriterionFieldMetaDescription
  public static readonly WeightNumeric = TenderingCriterionFieldMetaWeightNumeric
  public static readonly FulfilmentIndicator = TenderingCriterionFieldMetaFulfilmentIndicator
  public static readonly FulfilmentIndicatorTypeCode = TenderingCriterionFieldMetaFulfilmentIndicatorTypeCode
  public static readonly EvaluationMethodTypeCode = TenderingCriterionFieldMetaEvaluationMethodTypeCode
  public static readonly WeightingConsiderationDescription = TenderingCriterionFieldMetaWeightingConsiderationDescription
  public static readonly ProcurementProjectLotReference = TenderingCriterionFieldMetaProcurementProjectLotReference
  public static readonly CommodityClassification = TenderingCriterionFieldMetaCommodityClassification
  public static readonly SubTenderingCriterion = TenderingCriterionFieldMetaSubTenderingCriterion
  public static readonly Legislation = TenderingCriterionFieldMetaLegislation
  public static readonly TenderingCriterionPropertyGroup = TenderingCriterionFieldMetaTenderingCriterionPropertyGroup
}

export const TenderingCriterionFieldMap = new Map([
  [TenderingCriterionField.UBLExtensions, TenderingCriterionFieldMetaUBLExtensions],
  [TenderingCriterionField.ID, TenderingCriterionFieldMetaID],
  [TenderingCriterionField.CriterionTypeCode, TenderingCriterionFieldMetaCriterionTypeCode],
  [TenderingCriterionField.Name, TenderingCriterionFieldMetaName],
  [TenderingCriterionField.Description, TenderingCriterionFieldMetaDescription],
  [TenderingCriterionField.WeightNumeric, TenderingCriterionFieldMetaWeightNumeric],
  [TenderingCriterionField.FulfilmentIndicator, TenderingCriterionFieldMetaFulfilmentIndicator],
  [TenderingCriterionField.FulfilmentIndicatorTypeCode, TenderingCriterionFieldMetaFulfilmentIndicatorTypeCode],
  [TenderingCriterionField.EvaluationMethodTypeCode, TenderingCriterionFieldMetaEvaluationMethodTypeCode],
  [TenderingCriterionField.WeightingConsiderationDescription, TenderingCriterionFieldMetaWeightingConsiderationDescription],
  [TenderingCriterionField.ProcurementProjectLotReference, TenderingCriterionFieldMetaProcurementProjectLotReference],
  [TenderingCriterionField.CommodityClassification, TenderingCriterionFieldMetaCommodityClassification],
  [TenderingCriterionField.SubTenderingCriterion, TenderingCriterionFieldMetaSubTenderingCriterion],
  [TenderingCriterionField.Legislation, TenderingCriterionFieldMetaLegislation],
  [TenderingCriterionField.TenderingCriterionPropertyGroup, TenderingCriterionFieldMetaTenderingCriterionPropertyGroup]
])
