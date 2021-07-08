import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { ForecastExceptionType } from './ForecastExceptionMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ExceptionNotificationLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  Description = 'Description',
  ExceptionStatusCode = 'ExceptionStatusCode',
  CollaborationPriorityCode = 'CollaborationPriorityCode',
  ResolutionCode = 'ResolutionCode',
  ComparedValueMeasure = 'ComparedValueMeasure',
  SourceValueMeasure = 'SourceValueMeasure',
  VarianceQuantity = 'VarianceQuantity',
  SupplyChainActivityTypeCode = 'SupplyChainActivityTypeCode',
  PerformanceMetricTypeCode = 'PerformanceMetricTypeCode',
  ExceptionObservationPeriod = 'ExceptionObservationPeriod',
  DocumentReference = 'DocumentReference',
  ForecastException = 'ForecastException',
  SupplyItem = 'SupplyItem'
}

export const ExceptionNotificationLineFieldMetaUBLExtensions = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaID = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this exception notification line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaNote = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaDescription = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the exception.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaExceptionStatusCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ExceptionStatusCode,
  'ExceptionStatusCode',
  'Exception Status Code',
  CodeType.name,
  'A code signifying status specific to a shipment exception.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaCollaborationPriorityCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.CollaborationPriorityCode,
  'CollaborationPriorityCode',
  'Collaboration Priority Code',
  CodeType.name,
  'Priority of Exception.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaResolutionCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ResolutionCode,
  'ResolutionCode',
  'Resolution Code',
  CodeType.name,
  'Coded representation of possible resolution methods". Possible values are: DEFAULT_TO_AVERAGE_OF_COMPARED_VALUES DEFAULT_TO_BUYERS_VALUE DEFAULT_TO_HIGH_VALUE DEFAULT_TO_LOW_VALUE DEFAULT_TO_SELLERS_VALUE MANUAL_RESOLUTION MUTUALLY_DEFINED',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaComparedValueMeasure = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ComparedValueMeasure,
  'ComparedValueMeasure',
  'Compared Value',
  MeasureType.name,
  'The value that was compared with the source value that resulted in the exception',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaSourceValueMeasure = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.SourceValueMeasure,
  'SourceValueMeasure',
  'Source Value',
  MeasureType.name,
  'The value used as the basis of comparison',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaVarianceQuantity = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.VarianceQuantity,
  'VarianceQuantity',
  'Variance',
  QuantityType.name,
  'The variance of a data item from an expected value during a particular time interval.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaSupplyChainActivityTypeCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.SupplyChainActivityTypeCode,
  'SupplyChainActivityTypeCode',
  'Supply Chain Activity Type Code',
  CodeType.name,
  'Establishes the criterion for one of the three types of exceptions: Operational, performance metric and forecast. This reports an exception notification about an operational exception. Description could be: A code used to identify an operational exception. Possible values are: CANCELED_ORDERS EMERGENCY_ORDERS ON_HAND ORDERS RECEIPTS SALES SHIPMENTS',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaPerformanceMetricTypeCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.PerformanceMetricTypeCode,
  'PerformanceMetricTypeCode',
  'Performance Metric Type Code',
  CodeType.name,
  'A code used to identify a measure of performance. It defines the type of the Performance Metric on which an exception criteria is being defined',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaExceptionObservationPeriod = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ExceptionObservationPeriod,
  'ExceptionObservationPeriod',
  'Exception Observation Period',
  PeriodType.name,
  'The period (start-end date) when this exception is observed',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaDocumentReference = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to Exception Criteria document can be provided.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaForecastException = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ForecastException,
  'ForecastException',
  'Forecast Exception',
  ForecastExceptionType.name,
  'A forecast accuracy or comparison exception.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaSupplyItem = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.SupplyItem,
  'SupplyItem',
  'Supply Item',
  ItemType.name,
  'The product associated with this exception notification line.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class ExceptionNotificationLineFieldMeta {
  public static readonly UBLExtensions = ExceptionNotificationLineFieldMetaUBLExtensions
  public static readonly ID = ExceptionNotificationLineFieldMetaID
  public static readonly Note = ExceptionNotificationLineFieldMetaNote
  public static readonly Description = ExceptionNotificationLineFieldMetaDescription
  public static readonly ExceptionStatusCode = ExceptionNotificationLineFieldMetaExceptionStatusCode
  public static readonly CollaborationPriorityCode = ExceptionNotificationLineFieldMetaCollaborationPriorityCode
  public static readonly ResolutionCode = ExceptionNotificationLineFieldMetaResolutionCode
  public static readonly ComparedValueMeasure = ExceptionNotificationLineFieldMetaComparedValueMeasure
  public static readonly SourceValueMeasure = ExceptionNotificationLineFieldMetaSourceValueMeasure
  public static readonly VarianceQuantity = ExceptionNotificationLineFieldMetaVarianceQuantity
  public static readonly SupplyChainActivityTypeCode = ExceptionNotificationLineFieldMetaSupplyChainActivityTypeCode
  public static readonly PerformanceMetricTypeCode = ExceptionNotificationLineFieldMetaPerformanceMetricTypeCode
  public static readonly ExceptionObservationPeriod = ExceptionNotificationLineFieldMetaExceptionObservationPeriod
  public static readonly DocumentReference = ExceptionNotificationLineFieldMetaDocumentReference
  public static readonly ForecastException = ExceptionNotificationLineFieldMetaForecastException
  public static readonly SupplyItem = ExceptionNotificationLineFieldMetaSupplyItem
}

export const ExceptionNotificationLineFieldMap = new Map([
  [ExceptionNotificationLineField.UBLExtensions, ExceptionNotificationLineFieldMetaUBLExtensions],
  [ExceptionNotificationLineField.ID, ExceptionNotificationLineFieldMetaID],
  [ExceptionNotificationLineField.Note, ExceptionNotificationLineFieldMetaNote],
  [ExceptionNotificationLineField.Description, ExceptionNotificationLineFieldMetaDescription],
  [ExceptionNotificationLineField.ExceptionStatusCode, ExceptionNotificationLineFieldMetaExceptionStatusCode],
  [ExceptionNotificationLineField.CollaborationPriorityCode, ExceptionNotificationLineFieldMetaCollaborationPriorityCode],
  [ExceptionNotificationLineField.ResolutionCode, ExceptionNotificationLineFieldMetaResolutionCode],
  [ExceptionNotificationLineField.ComparedValueMeasure, ExceptionNotificationLineFieldMetaComparedValueMeasure],
  [ExceptionNotificationLineField.SourceValueMeasure, ExceptionNotificationLineFieldMetaSourceValueMeasure],
  [ExceptionNotificationLineField.VarianceQuantity, ExceptionNotificationLineFieldMetaVarianceQuantity],
  [ExceptionNotificationLineField.SupplyChainActivityTypeCode, ExceptionNotificationLineFieldMetaSupplyChainActivityTypeCode],
  [ExceptionNotificationLineField.PerformanceMetricTypeCode, ExceptionNotificationLineFieldMetaPerformanceMetricTypeCode],
  [ExceptionNotificationLineField.ExceptionObservationPeriod, ExceptionNotificationLineFieldMetaExceptionObservationPeriod],
  [ExceptionNotificationLineField.DocumentReference, ExceptionNotificationLineFieldMetaDocumentReference],
  [ExceptionNotificationLineField.ForecastException, ExceptionNotificationLineFieldMetaForecastException],
  [ExceptionNotificationLineField.SupplyItem, ExceptionNotificationLineFieldMetaSupplyItem]
])

export const ExceptionNotificationLineType: Type<ExceptionNotificationLineField> = {
  name: 'ExceptionNotificationLine',
  label: 'Exception Notification Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in an Exception Notification.',
  fields: ExceptionNotificationLineFieldMap,
}
