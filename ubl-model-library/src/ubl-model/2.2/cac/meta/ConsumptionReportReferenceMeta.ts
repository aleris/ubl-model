import { FieldMeta } from '../../FieldMeta'

export enum ConsumptionReportReferenceField {
  ConsumptionReportID = 'ConsumptionReportID',
  ConsumptionType = 'ConsumptionType',
  ConsumptionTypeCode = 'ConsumptionTypeCode',
  TotalConsumedQuantity = 'TotalConsumedQuantity',
  Period = 'Period'
}

export const ConsumptionReportReferenceFieldMetaConsumptionReportID = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.ConsumptionReportID,
  'ConsumptionReportID',
  'Report Identifier',
  'Identifier',
  'An identifier for the referenced consumption report.',
  '1',
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
  undefined,
  'Consumption'
)

export const ConsumptionReportReferenceFieldMetaTotalConsumedQuantity = new FieldMeta<ConsumptionReportReferenceField>(
  ConsumptionReportReferenceField.TotalConsumedQuantity,
  'TotalConsumedQuantity',
  'Consumed Quantity',
  'Quantity',
  'The total quantity consumed during the period of the referenced report.',
  '1',
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
  undefined,
  undefined
)

export class ConsumptionReportReferenceFieldMeta {
  public static readonly ConsumptionReportID = ConsumptionReportReferenceFieldMetaConsumptionReportID
  public static readonly ConsumptionType = ConsumptionReportReferenceFieldMetaConsumptionType
  public static readonly ConsumptionTypeCode = ConsumptionReportReferenceFieldMetaConsumptionTypeCode
  public static readonly TotalConsumedQuantity = ConsumptionReportReferenceFieldMetaTotalConsumedQuantity
  public static readonly Period = ConsumptionReportReferenceFieldMetaPeriod
}

export const ConsumptionReportReferenceFieldMap = new Map([
  [ConsumptionReportReferenceField.ConsumptionReportID, ConsumptionReportReferenceFieldMetaConsumptionReportID],
  [ConsumptionReportReferenceField.ConsumptionType, ConsumptionReportReferenceFieldMetaConsumptionType],
  [ConsumptionReportReferenceField.ConsumptionTypeCode, ConsumptionReportReferenceFieldMetaConsumptionTypeCode],
  [ConsumptionReportReferenceField.TotalConsumedQuantity, ConsumptionReportReferenceFieldMetaTotalConsumedQuantity],
  [ConsumptionReportReferenceField.Period, ConsumptionReportReferenceFieldMetaPeriod]
])
