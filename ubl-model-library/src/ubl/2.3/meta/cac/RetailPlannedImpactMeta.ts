import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { PeriodType } from './PeriodMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RetailPlannedImpactField {
  UBLExtensions = 'UBLExtensions',
  Amount = 'Amount',
  ForecastPurposeCode = 'ForecastPurposeCode',
  ForecastTypeCode = 'ForecastTypeCode',
  Period = 'Period'
}

export const RetailPlannedImpactFieldMetaUBLExtensions = new FieldMeta<RetailPlannedImpactField>(
  RetailPlannedImpactField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RetailPlannedImpactFieldMetaAmount = new FieldMeta<RetailPlannedImpactField>(
  RetailPlannedImpactField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'Estimated monetary value of the planned event as an impact',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailPlannedImpactFieldMetaForecastPurposeCode = new FieldMeta<RetailPlannedImpactField>(
  RetailPlannedImpactField.ForecastPurposeCode,
  'ForecastPurposeCode',
  'Forecast Purpose Code',
  CodeType.name,
  'It will have impact on either Sales forecast or Order Forecast',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailPlannedImpactFieldMetaForecastTypeCode = new FieldMeta<RetailPlannedImpactField>(
  RetailPlannedImpactField.ForecastTypeCode,
  'ForecastTypeCode',
  'Forecast Type Code',
  CodeType.name,
  'A code signifying the type of forecast. Examples of values are: BASE PROMOTIONAL SEASONAL TOTAL',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const RetailPlannedImpactFieldMetaPeriod = new FieldMeta<RetailPlannedImpactField>(
  RetailPlannedImpactField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period to which this impact applies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class RetailPlannedImpactFieldMeta {
  public static readonly UBLExtensions = RetailPlannedImpactFieldMetaUBLExtensions
  public static readonly Amount = RetailPlannedImpactFieldMetaAmount
  public static readonly ForecastPurposeCode = RetailPlannedImpactFieldMetaForecastPurposeCode
  public static readonly ForecastTypeCode = RetailPlannedImpactFieldMetaForecastTypeCode
  public static readonly Period = RetailPlannedImpactFieldMetaPeriod
}

export const RetailPlannedImpactFieldMap = new Map([
  [RetailPlannedImpactField.UBLExtensions, RetailPlannedImpactFieldMetaUBLExtensions],
  [RetailPlannedImpactField.Amount, RetailPlannedImpactFieldMetaAmount],
  [RetailPlannedImpactField.ForecastPurposeCode, RetailPlannedImpactFieldMetaForecastPurposeCode],
  [RetailPlannedImpactField.ForecastTypeCode, RetailPlannedImpactFieldMetaForecastTypeCode],
  [RetailPlannedImpactField.Period, RetailPlannedImpactFieldMetaPeriod]
])

export const RetailPlannedImpactType: Type<RetailPlannedImpactField> = {
  name: 'RetailPlannedImpact',
  label: 'Retail Planned Impact',
  module: TypeModule.cac,
  definition: 'A class to describe a planned effect of a retail event (e.g., a promotion or a change in inventory policy) upon supply or demand.',
  fields: RetailPlannedImpactFieldMap,
}
