import { FieldMeta } from '../../FieldMeta'

export enum ExceptionNotificationLineField {
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

export const ExceptionNotificationLineFieldMetaID = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this exception notification line.',
  '1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaNote = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaDescription = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the exception.',
  '0..n',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaExceptionStatusCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ExceptionStatusCode,
  'ExceptionStatusCode',
  'Exception Status Code',
  'Code',
  'A code signifying status specific to a shipment exception.',
  '0..1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaCollaborationPriorityCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.CollaborationPriorityCode,
  'CollaborationPriorityCode',
  'Priority Code',
  'Code',
  'Priority of Exception.',
  '0..1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaResolutionCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ResolutionCode,
  'ResolutionCode',
  'Resolution Code',
  'Code',
  'Coded representation of possible resolution methods". Possible values are: DEFAULT_TO_AVERAGE_OF_COMPARED_VALUES DEFAULT_TO_BUYERS_VALUE DEFAULT_TO_HIGH_VALUE DEFAULT_TO_LOW_VALUE DEFAULT_TO_SELLERS_VALUE MANUAL_RESOLUTION MUTUALLY_DEFINED',
  '0..1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaComparedValueMeasure = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ComparedValueMeasure,
  'ComparedValueMeasure',
  'Compared Value',
  'Measure',
  'The value that was compared with the source value that resulted in the exception',
  '1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaSourceValueMeasure = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.SourceValueMeasure,
  'SourceValueMeasure',
  'Source Value',
  'Measure',
  'The value used as the basis of comparison',
  '1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaVarianceQuantity = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.VarianceQuantity,
  'VarianceQuantity',
  'Variance',
  'Quantity',
  'The variance of a data item from an expected value during a particular time interval.',
  '0..1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaSupplyChainActivityTypeCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.SupplyChainActivityTypeCode,
  'SupplyChainActivityTypeCode',
  'Supply Chain Activity Type Code',
  'Code',
  'Establishes the criterion for one of the three types of exceptions: Operational, performance metric and forecast. This reports an exception notification about an operational exception. Description could be: A code used to identify an operational exception. Possible values are: CANCELED_ORDERS EMERGENCY_ORDERS ON_HAND ORDERS RECEIPTS SALES SHIPMENTS',
  '0..1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaPerformanceMetricTypeCode = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.PerformanceMetricTypeCode,
  'PerformanceMetricTypeCode',
  'Performance Metric Type Code',
  'Code',
  'A code used to identify a measure of performance. It defines the type of the Performance Metric on which an exception criteria is being defined',
  '0..1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaExceptionObservationPeriod = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ExceptionObservationPeriod,
  'ExceptionObservationPeriod',
  'Period',
  'Period',
  'The period (start-end date) when this exception is observed',
  '0..1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaDocumentReference = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to Exception Criteria document can be provided.',
  '0..n',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaForecastException = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.ForecastException,
  'ForecastException',
  'Forecast Exception',
  'ForecastException',
  'A forecast accuracy or comparison exception.',
  '0..1',
  undefined,
  undefined
)

export const ExceptionNotificationLineFieldMetaSupplyItem = new FieldMeta<ExceptionNotificationLineField>(
  ExceptionNotificationLineField.SupplyItem,
  'SupplyItem',
  'Item',
  'Item',
  'The product associated with this exception notification line.',
  '1',
  undefined,
  undefined
)

export class ExceptionNotificationLineFieldMeta {
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
