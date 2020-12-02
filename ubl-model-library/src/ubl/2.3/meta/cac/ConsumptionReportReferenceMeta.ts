import { FieldMeta } from '../FieldMeta'

export enum ConsumptionReportReferenceField {
  UBLExtensions = 'UBLExtensions',
  ConsumptionReportID = 'ConsumptionReportID',
  ConsumptionType = 'ConsumptionType',
  ConsumptionTypeCode = 'ConsumptionTypeCode',
  TotalConsumedQuantity = 'TotalConsumedQuantity',
  Period = 'Period'
}

export const ConsumptionReportReferenceFieldMetaUBLExtensions = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ConsumptionReportReferenceFieldMetaConsumptionReportID = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.ConsumptionReportID,
  'ConsumptionReportID',
  'Consumption Report Identifier',
  'Identifier',
  'An identifier for the referenced consumption report.',
  '1',
  'cbc',
  undefined,
  'n/a'
)

export const ConsumptionReportReferenceFieldMetaConsumptionType = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.ConsumptionType,
  'ConsumptionType',
  'Consumption Type',
  'Text',
  'The reported consumption type, expressed as text.',
  '0..1',
  'cbc',
  undefined,
  'Consumption'
)

export const ConsumptionReportReferenceFieldMetaConsumptionTypeCode = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.ConsumptionTypeCode,
  'ConsumptionTypeCode',
  'Consumption Type Code',
  'Code',
  'The reported consumption type, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'Consumption'
)

export const ConsumptionReportReferenceFieldMetaTotalConsumedQuantity = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.TotalConsumedQuantity,
  'TotalConsumedQuantity',
  'Total Consumed Quantity',
  'Quantity',
  'The total quantity consumed during the period of the referenced report.',
  '1',
  'cbc',
  undefined,
  '20479.00'
)

export const ConsumptionReportReferenceFieldMetaPeriod = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.Period,
  'Period',
  'Period',
  'Period',
  'The period of consumption covered by the referenced report.',
  '1',
  'cac',
  undefined,
  undefined
)

export class ConsumptionReportReferenceFieldMeta {
  public static readonly UBLExtensions = ConsumptionReportReferenceFieldMetaUBLExtensions
  public static readonly ConsumptionReportID = ConsumptionReportReferenceFieldMetaConsumptionReportID
  public static readonly ConsumptionType = ConsumptionReportReferenceFieldMetaConsumptionType
  public static readonly ConsumptionTypeCode = ConsumptionReportReferenceFieldMetaConsumptionTypeCode
  public static readonly TotalConsumedQuantity = ConsumptionReportReferenceFieldMetaTotalConsumedQuantity
  public static readonly Period = ConsumptionReportReferenceFieldMetaPeriod
}

export const ConsumptionReportReferenceFieldMap = new Map([
  [ConsumptionReportReferenceField.UBLExtensions, ConsumptionReportReferenceFieldMetaUBLExtensions],
  [ConsumptionReportReferenceField.ConsumptionReportID, ConsumptionReportReferenceFieldMetaConsumptionReportID],
  [ConsumptionReportReferenceField.ConsumptionType, ConsumptionReportReferenceFieldMetaConsumptionType],
  [ConsumptionReportReferenceField.ConsumptionTypeCode, ConsumptionReportReferenceFieldMetaConsumptionTypeCode],
  [ConsumptionReportReferenceField.TotalConsumedQuantity, ConsumptionReportReferenceFieldMetaTotalConsumedQuantity],
  [ConsumptionReportReferenceField.Period, ConsumptionReportReferenceFieldMetaPeriod]
])
