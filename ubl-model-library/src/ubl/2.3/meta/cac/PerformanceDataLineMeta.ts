import { FieldMeta } from '../FieldMeta'

export enum PerformanceDataLineField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Note = 'Note',
  PerformanceValueQuantity = 'PerformanceValueQuantity',
  PerformanceMetricTypeCode = 'PerformanceMetricTypeCode',
  Period = 'Period',
  Item = 'Item'
}

export const PerformanceDataLineFieldMetaUBLExtensions = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaID = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this performance data line.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaNote = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaPerformanceValueQuantity = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.PerformanceValueQuantity,
  'PerformanceValueQuantity',
  'Performance Value',
  'Quantity',
  'The value of the reported attribute.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaPerformanceMetricTypeCode = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.PerformanceMetricTypeCode,
  'PerformanceMetricTypeCode',
  'Performance Metric Type Code',
  'Code',
  'A code signifying the measure of performance applicable to the reported attribute.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaPeriod = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.Period,
  'Period',
  'Period',
  'Period',
  'The period to which this performance data line applies.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaItem = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.Item,
  'Item',
  'Item',
  'Item',
  'The item whose performance is reported in this data line.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class PerformanceDataLineFieldMeta {
  public static readonly UBLExtensions = PerformanceDataLineFieldMetaUBLExtensions
  public static readonly ID = PerformanceDataLineFieldMetaID
  public static readonly Note = PerformanceDataLineFieldMetaNote
  public static readonly PerformanceValueQuantity = PerformanceDataLineFieldMetaPerformanceValueQuantity
  public static readonly PerformanceMetricTypeCode = PerformanceDataLineFieldMetaPerformanceMetricTypeCode
  public static readonly Period = PerformanceDataLineFieldMetaPeriod
  public static readonly Item = PerformanceDataLineFieldMetaItem
}

export const PerformanceDataLineFieldMap = new Map([
  [PerformanceDataLineField.UBLExtensions, PerformanceDataLineFieldMetaUBLExtensions],
  [PerformanceDataLineField.ID, PerformanceDataLineFieldMetaID],
  [PerformanceDataLineField.Note, PerformanceDataLineFieldMetaNote],
  [PerformanceDataLineField.PerformanceValueQuantity, PerformanceDataLineFieldMetaPerformanceValueQuantity],
  [PerformanceDataLineField.PerformanceMetricTypeCode, PerformanceDataLineFieldMetaPerformanceMetricTypeCode],
  [PerformanceDataLineField.Period, PerformanceDataLineFieldMetaPeriod],
  [PerformanceDataLineField.Item, PerformanceDataLineFieldMetaItem]
])
