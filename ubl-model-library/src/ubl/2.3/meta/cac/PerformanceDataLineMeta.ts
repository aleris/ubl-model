import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemType } from './ItemMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaID = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this performance data line.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaNote = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaPerformanceValueQuantity = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.PerformanceValueQuantity,
  'PerformanceValueQuantity',
  'Performance Value',
  QuantityType.name,
  'The value of the reported attribute.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaPerformanceMetricTypeCode = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.PerformanceMetricTypeCode,
  'PerformanceMetricTypeCode',
  'Performance Metric Type Code',
  CodeType.name,
  'A code signifying the measure of performance applicable to the reported attribute.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaPeriod = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period to which this performance data line applies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PerformanceDataLineFieldMetaItem = new FieldMeta<PerformanceDataLineField>(
  PerformanceDataLineField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The item whose performance is reported in this data line.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const PerformanceDataLineType: Type<PerformanceDataLineField> = {
  name: 'PerformanceDataLine',
  label: 'Performance Data Line',
  module: TypeModule.cac,
  definition: 'A class to define a line in a Performance History.',
  fields: PerformanceDataLineFieldMap,
}
