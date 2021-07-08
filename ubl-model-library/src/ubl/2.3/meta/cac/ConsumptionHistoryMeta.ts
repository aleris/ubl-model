import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ConsumptionHistoryFieldMetaMeterNumber = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.MeterNumber,
  'MeterNumber',
  'Meter Number',
  TextType.name,
  'A text identifier for the meter measuring the consumption.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '61722x'
)

export const ConsumptionHistoryFieldMetaQuantity = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity consumed.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '7621.00'
)

export const ConsumptionHistoryFieldMetaAmount = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The monetary amount to be charged for the quantity consumed.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConsumptionHistoryFieldMetaConsumptionLevelCode = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.ConsumptionLevelCode,
  'ConsumptionLevelCode',
  'Consumption Level Code',
  CodeType.name,
  'The consumption level, expressed as a code used explain the consumption quantity, e.g.. diversion from the normal.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'B'
)

export const ConsumptionHistoryFieldMetaConsumptionLevel = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.ConsumptionLevel,
  'ConsumptionLevel',
  'Consumption Level Text',
  TextType.name,
  'The consumption level, expressed as text, used explain the consumption quantity, e.g.. diversion from the normal.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Average'
)

export const ConsumptionHistoryFieldMetaDescription = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the consumption itself.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  '2004/2005'
)

export const ConsumptionHistoryFieldMetaPeriod = new FieldMeta<ConsumptionHistoryField>(
  ConsumptionHistoryField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period during which the consumption took place.',
  FieldCardinality.Uni,
  TypeModule.cac,
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

export const ConsumptionHistoryType: Type<ConsumptionHistoryField> = {
  name: 'ConsumptionHistory',
  label: 'Consumption History',
  module: TypeModule.cac,
  definition: 'A class to describe the measurement of a type of consumption during a particular period, used for the subscriber to get an overview of his consumption',
  fields: ConsumptionHistoryFieldMap,
}
