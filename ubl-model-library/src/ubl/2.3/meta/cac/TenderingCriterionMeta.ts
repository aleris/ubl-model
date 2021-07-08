import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CommodityClassificationType } from './CommodityClassificationMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LegislationType } from './LegislationMeta'
import { NumericType } from '../cbc/NumericMeta'
import { ProcurementProjectLotReferenceType } from './ProcurementProjectLotReferenceMeta'
import { TenderingCriterionPropertyGroupType } from './TenderingCriterionPropertyGroupMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaID = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this item of criterion support.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaCriterionTypeCode = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.CriterionTypeCode,
  'CriterionTypeCode',
  'Criterion Type Code',
  CodeType.name,
  'A code signifying the type of criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaName = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of the criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaDescription = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.Description,
  'Description',
  'Description',
  TextType.name,
  'The textual description for this criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaWeightNumeric = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.WeightNumeric,
  'WeightNumeric',
  'Weight Numeric',
  NumericType.name,
  'A weighting to provide for automatic scoring of the criterion.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaFulfilmentIndicator = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.FulfilmentIndicator,
  'FulfilmentIndicator',
  'Fulfilment Indicator',
  IndicatorType.name,
  'An indication that this criterion has been fulfilled.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'TRUE means fulfilled, FALSE means not fulfilled'
)

export const TenderingCriterionFieldMetaFulfilmentIndicatorTypeCode = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.FulfilmentIndicatorTypeCode,
  'FulfilmentIndicatorTypeCode',
  'Fulfilment Indicator Type Code',
  CodeType.name,
  'A code signifying how this criterion has been fulfilled.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaEvaluationMethodTypeCode = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.EvaluationMethodTypeCode,
  'EvaluationMethodTypeCode',
  'Evaluation Method Type Code',
  CodeType.name,
  'A code signifying the type of Evaluation.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Weight'
)

export const TenderingCriterionFieldMetaWeightingConsiderationDescription = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.WeightingConsiderationDescription,
  'WeightingConsiderationDescription',
  'Weighting Consideration Description',
  TextType.name,
  'The textual description of the Weighting Description',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaProcurementProjectLotReference = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.ProcurementProjectLotReference,
  'ProcurementProjectLotReference',
  'Procurement Project Lot Reference',
  ProcurementProjectLotReferenceType.name,
  'One or more lots to which the tendering criterion applies',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaCommodityClassification = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.CommodityClassification,
  'CommodityClassification',
  'Commodity Classification',
  CommodityClassificationType.name,
  'One or more classification to which this criterion applies',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaSubTenderingCriterion = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.SubTenderingCriterion,
  'SubTenderingCriterion',
  'Sub Tendering Criterion',
  TenderingCriterionType.name,
  'One or more tendering subcriteria.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaLegislation = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.Legislation,
  'Legislation',
  'Legislation',
  LegislationType.name,
  'The legislation reference for the criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderingCriterionFieldMetaTenderingCriterionPropertyGroup = new FieldMeta<TenderingCriterionField>(
  TenderingCriterionField.TenderingCriterionPropertyGroup,
  'TenderingCriterionPropertyGroup',
  'Tendering Criterion Property Group',
  TenderingCriterionPropertyGroupType.name,
  'The sets of properties that can be used to fulfil the tendering criterion.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TenderingCriterionType: Type<TenderingCriterionField> = {
  name: 'TenderingCriterion',
  label: 'Tendering Criterion',
  module: TypeModule.cac,
  definition: 'A class to describe an item of criterion support for representations of capabilities or the ability to meet tendering requirements, which an economic operator must provide for acceptance into a tendering process.',
  fields: TenderingCriterionFieldMap,
}
