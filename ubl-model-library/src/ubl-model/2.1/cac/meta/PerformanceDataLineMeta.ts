import { FieldMeta } from '../../FieldMeta'

export enum PerformanceDataLineField {
  ID = 'ID',
  Note = 'Note',
  PerformanceValueQuantity = 'PerformanceValueQuantity',
  PerformanceMetricTypeCode = 'PerformanceMetricTypeCode',
  Period = 'Period',
  Item = 'Item'
}

export const PerformanceDataLineFieldMetaID = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this performance data line.',
  '1',
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
  undefined,
  undefined
)

export class PerformanceDataLineFieldMeta {
  public static readonly ID = PerformanceDataLineFieldMetaID
  public static readonly Note = PerformanceDataLineFieldMetaNote
  public static readonly PerformanceValueQuantity = PerformanceDataLineFieldMetaPerformanceValueQuantity
  public static readonly PerformanceMetricTypeCode = PerformanceDataLineFieldMetaPerformanceMetricTypeCode
  public static readonly Period = PerformanceDataLineFieldMetaPeriod
  public static readonly Item = PerformanceDataLineFieldMetaItem
}

export const PerformanceDataLineFieldMap = new Map([
  [PerformanceDataLineField.ID, PerformanceDataLineFieldMetaID],
  [PerformanceDataLineField.Note, PerformanceDataLineFieldMetaNote],
  [PerformanceDataLineField.PerformanceValueQuantity, PerformanceDataLineFieldMetaPerformanceValueQuantity],
  [PerformanceDataLineField.PerformanceMetricTypeCode, PerformanceDataLineFieldMetaPerformanceMetricTypeCode],
  [PerformanceDataLineField.Period, PerformanceDataLineFieldMetaPeriod],
  [PerformanceDataLineField.Item, PerformanceDataLineFieldMetaItem]
])
