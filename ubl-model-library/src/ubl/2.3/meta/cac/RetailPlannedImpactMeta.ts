import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const RetailPlannedImpactFieldMetaAmount = new FieldMeta<RetailPlannedImpactField>(
  RetailPlannedImpactField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'Estimated monetary value of the planned event as an impact',
  '1',
  'cbc',
  undefined,
  undefined
)

export const RetailPlannedImpactFieldMetaForecastPurposeCode = new FieldMeta<RetailPlannedImpactField>(
  RetailPlannedImpactField.ForecastPurposeCode,
  'ForecastPurposeCode',
  'Forecast Purpose Code',
  'Code',
  'It will have impact on either Sales forecast or Order Forecast',
  '1',
  'cbc',
  undefined,
  undefined
)

export const RetailPlannedImpactFieldMetaForecastTypeCode = new FieldMeta<RetailPlannedImpactField>(
  RetailPlannedImpactField.ForecastTypeCode,
  'ForecastTypeCode',
  'Forecast Type Code',
  'Code',
  'A code signifying the type of forecast. Examples of values are: BASE PROMOTIONAL SEASONAL TOTAL',
  '1',
  'cbc',
  undefined,
  undefined
)

export const RetailPlannedImpactFieldMetaPeriod = new FieldMeta<RetailPlannedImpactField>(
  RetailPlannedImpactField.Period,
  'Period',
  'Period',
  'Period',
  'The period to which this impact applies.',
  '0..1',
  'cac',
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
