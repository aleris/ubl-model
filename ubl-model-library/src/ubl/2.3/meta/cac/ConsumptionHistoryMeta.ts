import { FieldMeta } from '../FieldMeta'

export enum ConsumptionHistoryField {
  UBLExtensions = 'UBLExtensions',
  MeterNumber = 'MeterNumber',
  Quantity = 'Quantity',
  Amount = 'Amount',
  ConsumptionLevelCode = 'ConsumptionLevelCode',
  ConsumptionLevel = 'ConsumptionLevel',
  Description = 'Description',
  Period = 'Period'
}

export const ConsumptionHistoryFieldMetaUBLExtensions = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ConsumptionHistoryFieldMetaMeterNumber = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.MeterNumber,
  'MeterNumber',
  'Meter Number',
  'Text',
  'A text identifier for the meter measuring the consumption.',
  '0..1',
  'cbc',
  undefined,
  '61722x'
)

export const ConsumptionHistoryFieldMetaQuantity = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity consumed.',
  '1',
  'cbc',
  undefined,
  '7621.00'
)

export const ConsumptionHistoryFieldMetaAmount = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The monetary amount to be charged for the quantity consumed.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ConsumptionHistoryFieldMetaConsumptionLevelCode = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.ConsumptionLevelCode,
  'ConsumptionLevelCode',
  'Consumption Level Code',
  'Code',
  'The consumption level, expressed as a code used explain the consumption quantity, e.g.. diversion from the normal.',
  '0..1',
  'cbc',
  undefined,
  'B'
)

export const ConsumptionHistoryFieldMetaConsumptionLevel = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.ConsumptionLevel,
  'ConsumptionLevel',
  'Consumption Level Text',
  'Text',
  'The consumption level, expressed as text, used explain the consumption quantity, e.g.. diversion from the normal.',
  '0..1',
  'cbc',
  undefined,
  'Average'
)

export const ConsumptionHistoryFieldMetaDescription = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the consumption itself.',
  '0..n',
  'cbc',
  undefined,
  '2004/2005'
)

export const ConsumptionHistoryFieldMetaPeriod = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.Period,
  'Period',
  'Period',
  'Period',
  'The period during which the consumption took place.',
  '1',
  'cac',
  undefined,
  undefined
)

export class ConsumptionHistoryFieldMeta {
  public static readonly UBLExtensions = ConsumptionHistoryFieldMetaUBLExtensions
  public static readonly MeterNumber = ConsumptionHistoryFieldMetaMeterNumber
  public static readonly Quantity = ConsumptionHistoryFieldMetaQuantity
  public static readonly Amount = ConsumptionHistoryFieldMetaAmount
  public static readonly ConsumptionLevelCode = ConsumptionHistoryFieldMetaConsumptionLevelCode
  public static readonly ConsumptionLevel = ConsumptionHistoryFieldMetaConsumptionLevel
  public static readonly Description = ConsumptionHistoryFieldMetaDescription
  public static readonly Period = ConsumptionHistoryFieldMetaPeriod
}

export const ConsumptionHistoryFieldMap = new Map([
  [ConsumptionHistoryField.UBLExtensions, ConsumptionHistoryFieldMetaUBLExtensions],
  [ConsumptionHistoryField.MeterNumber, ConsumptionHistoryFieldMetaMeterNumber],
  [ConsumptionHistoryField.Quantity, ConsumptionHistoryFieldMetaQuantity],
  [ConsumptionHistoryField.Amount, ConsumptionHistoryFieldMetaAmount],
  [ConsumptionHistoryField.ConsumptionLevelCode, ConsumptionHistoryFieldMetaConsumptionLevelCode],
  [ConsumptionHistoryField.ConsumptionLevel, ConsumptionHistoryFieldMetaConsumptionLevel],
  [ConsumptionHistoryField.Description, ConsumptionHistoryFieldMetaDescription],
  [ConsumptionHistoryField.Period, ConsumptionHistoryFieldMetaPeriod]
])
