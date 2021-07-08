import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ForecastExceptionCriterionLineType } from './ForecastExceptionCriterionLineMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ExceptionCriteriaLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  ThresholdValueComparisonCode = 'ThresholdValueComparisonCode',
  ThresholdQuantity = 'ThresholdQuantity',
  ExceptionStatusCode = 'ExceptionStatusCode',
  CollaborationPriorityCode = 'CollaborationPriorityCode',
  ExceptionResolutionCode = 'ExceptionResolutionCode',
  SupplyChainActivityTypeCode = 'SupplyChainActivityTypeCode',
  PerformanceMetricTypeCode = 'PerformanceMetricTypeCode',
  EffectivePeriod = 'EffectivePeriod',
  SupplyItem = 'SupplyItem',
  ForecastExceptionCriterionLine = 'ForecastExceptionCriterionLine'
}

export const ExceptionCriteriaLineFieldMetaUBLExtensions = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaID = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this exception criteria line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaNote = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaThresholdValueComparisonCode = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.ThresholdValueComparisonCode,
  'ThresholdValueComparisonCode',
  'Threshold Value Comparison Code',
  CodeType.name,
  'Type of comparison to be carried out in reference to the set threshold." Allowed values are: EXCEEDS_EXCEPTION_VALUE FALLS_BELOW_EXCEPTION_VALUE',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaThresholdQuantity = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.ThresholdQuantity,
  'ThresholdQuantity',
  'Threshold Quantity',
  QuantityType.name,
  'A quantity beyond which an exception will be triggered.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaExceptionStatusCode = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.ExceptionStatusCode,
  'ExceptionStatusCode',
  'Exception Status Code',
  CodeType.name,
  'A code signifying status specific to a shipment exception.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaCollaborationPriorityCode = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.CollaborationPriorityCode,
  'CollaborationPriorityCode',
  'Collaboration Priority Code',
  CodeType.name,
  'A collaboratively assigned code signifying priority of the Exception. Possible values are: HIGH, LOW, MEDIUM',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaExceptionResolutionCode = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.ExceptionResolutionCode,
  'ExceptionResolutionCode',
  'Exception Resolution Code',
  CodeType.name,
  'Coded representation of possible resolution methods". Possible values are: DEFAULT_TO_AVERAGE_OF_COMPARED_VALUES DEFAULT_TO_BUYERS_VALUE DEFAULT_TO_HIGH_VALUE DEFAULT_TO_LOW_VALUE DEFAULT_TO_SELLERS_VALUE MANUAL_RESOLUTION MUTUALLY_DEFINED',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaSupplyChainActivityTypeCode = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.SupplyChainActivityTypeCode,
  'SupplyChainActivityTypeCode',
  'Supply Chain Activity Type Code',
  CodeType.name,
  'Establishes the criterion for one of the three types of exceptions. There can be three types of exception criteria: Operational, Metric and Forecast Exceptions. This will be set if this Exception is about an Operational Exception. Description could be: A code used to identify an operational exception. Possible values are: CANCELED_ORDERS EMERGENCY_ORDERS ON_HAND ORDERS RECEIPTS SALES SHIPMENTS',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaPerformanceMetricTypeCode = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.PerformanceMetricTypeCode,
  'PerformanceMetricTypeCode',
  'Performance Metric Type Code',
  CodeType.name,
  'A code signifying a measure of performance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaEffectivePeriod = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.EffectivePeriod,
  'EffectivePeriod',
  'Effective Period',
  PeriodType.name,
  'The period during which this exception criteria line is in effect.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaSupplyItem = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.SupplyItem,
  'SupplyItem',
  'Supply Item',
  ItemType.name,
  'The Trade Item that is the subject of the Exception Criterion.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionCriteriaLineFieldMetaForecastExceptionCriterionLine = new FieldMeta<ExceptionCriteriaLineField>(
  ExceptionCriteriaLineField.ForecastExceptionCriterionLine,
  'ForecastExceptionCriterionLine',
  'Forecast Exception Criterion Line',
  ForecastExceptionCriterionLineType.name,
  'Establishes the criterion for one of the three types of exceptions. This class provides the criterion for the kind of forecast exception, the identification of the purpose of the forecast, the source of data and the time basis criterion for the exception.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ExceptionCriteriaLineFieldMeta {
  public static readonly UBLExtensions = ExceptionCriteriaLineFieldMetaUBLExtensions
  public static readonly ID = ExceptionCriteriaLineFieldMetaID
  public static readonly Note = ExceptionCriteriaLineFieldMetaNote
  public static readonly ThresholdValueComparisonCode = ExceptionCriteriaLineFieldMetaThresholdValueComparisonCode
  public static readonly ThresholdQuantity = ExceptionCriteriaLineFieldMetaThresholdQuantity
  public static readonly ExceptionStatusCode = ExceptionCriteriaLineFieldMetaExceptionStatusCode
  public static readonly CollaborationPriorityCode = ExceptionCriteriaLineFieldMetaCollaborationPriorityCode
  public static readonly ExceptionResolutionCode = ExceptionCriteriaLineFieldMetaExceptionResolutionCode
  public static readonly SupplyChainActivityTypeCode = ExceptionCriteriaLineFieldMetaSupplyChainActivityTypeCode
  public static readonly PerformanceMetricTypeCode = ExceptionCriteriaLineFieldMetaPerformanceMetricTypeCode
  public static readonly EffectivePeriod = ExceptionCriteriaLineFieldMetaEffectivePeriod
  public static readonly SupplyItem = ExceptionCriteriaLineFieldMetaSupplyItem
  public static readonly ForecastExceptionCriterionLine = ExceptionCriteriaLineFieldMetaForecastExceptionCriterionLine
}

export const ExceptionCriteriaLineFieldMap = new Map([
  [ExceptionCriteriaLineField.UBLExtensions, ExceptionCriteriaLineFieldMetaUBLExtensions],
  [ExceptionCriteriaLineField.ID, ExceptionCriteriaLineFieldMetaID],
  [ExceptionCriteriaLineField.Note, ExceptionCriteriaLineFieldMetaNote],
  [ExceptionCriteriaLineField.ThresholdValueComparisonCode, ExceptionCriteriaLineFieldMetaThresholdValueComparisonCode],
  [ExceptionCriteriaLineField.ThresholdQuantity, ExceptionCriteriaLineFieldMetaThresholdQuantity],
  [ExceptionCriteriaLineField.ExceptionStatusCode, ExceptionCriteriaLineFieldMetaExceptionStatusCode],
  [ExceptionCriteriaLineField.CollaborationPriorityCode, ExceptionCriteriaLineFieldMetaCollaborationPriorityCode],
  [ExceptionCriteriaLineField.ExceptionResolutionCode, ExceptionCriteriaLineFieldMetaExceptionResolutionCode],
  [ExceptionCriteriaLineField.SupplyChainActivityTypeCode, ExceptionCriteriaLineFieldMetaSupplyChainActivityTypeCode],
  [ExceptionCriteriaLineField.PerformanceMetricTypeCode, ExceptionCriteriaLineFieldMetaPerformanceMetricTypeCode],
  [ExceptionCriteriaLineField.EffectivePeriod, ExceptionCriteriaLineFieldMetaEffectivePeriod],
  [ExceptionCriteriaLineField.SupplyItem, ExceptionCriteriaLineFieldMetaSupplyItem],
  [ExceptionCriteriaLineField.ForecastExceptionCriterionLine, ExceptionCriteriaLineFieldMetaForecastExceptionCriterionLine]
])

export const ExceptionCriteriaLineType: Type<ExceptionCriteriaLineField> = {
  name: 'ExceptionCriteriaLine',
  label: 'Exception Criteria Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in an ExceptionCriteria document that specifies a threshold for forecast variance, product activity, or performance history, the exceeding of which should trigger an exception message.',
  fields: ExceptionCriteriaLineFieldMap,
}
