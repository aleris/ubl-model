import { FieldMeta } from '../../FieldMeta'

export enum ForecastExceptionCriterionLineField {
  ForecastPurposeCode = 'ForecastPurposeCode',
  ForecastTypeCode = 'ForecastTypeCode',
  ComparisonDataSourceCode = 'ComparisonDataSourceCode',
  DataSourceCode = 'DataSourceCode',
  TimeDeltaDaysQuantity = 'TimeDeltaDaysQuantity'
}

export const ForecastExceptionCriterionLineFieldMetaForecastPurposeCode = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.ForecastPurposeCode,
  'ForecastPurposeCode',
  'Purpose Code',
  'Code',
  'A description of the purpose for the forecast that is assigned to each forecast data item exception criterion.',
  '1',
  undefined,
  undefined
)

export const ForecastExceptionCriterionLineFieldMetaForecastTypeCode = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.ForecastTypeCode,
  'ForecastTypeCode',
  'Forecast Type Code',
  'Code',
  'A description of a Forecast selected from a list.',
  '1',
  undefined,
  undefined
)

export const ForecastExceptionCriterionLineFieldMetaComparisonDataSourceCode = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.ComparisonDataSourceCode,
  'ComparisonDataSourceCode',
  'Comparison Data Source Code',
  'Code',
  'If it is a forecast comparison exception, this value indicates the other source of information.',
  '0..1',
  undefined,
  undefined
)

export const ForecastExceptionCriterionLineFieldMetaDataSourceCode = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.DataSourceCode,
  'DataSourceCode',
  'Data Source Code',
  'Code',
  'Indication of the partner who provides the information.',
  '1',
  undefined,
  undefined
)

export const ForecastExceptionCriterionLineFieldMetaTimeDeltaDaysQuantity = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.TimeDeltaDaysQuantity,
  'TimeDeltaDaysQuantity',
  'Time Delta Days Quantity',
  'Quantity',
  'Time basis in days for the Exception.',
  '0..1',
  undefined,
  undefined
)

export class ForecastExceptionCriterionLineFieldMeta {
  public static readonly ForecastPurposeCode = ForecastExceptionCriterionLineFieldMetaForecastPurposeCode
  public static readonly ForecastTypeCode = ForecastExceptionCriterionLineFieldMetaForecastTypeCode
  public static readonly ComparisonDataSourceCode = ForecastExceptionCriterionLineFieldMetaComparisonDataSourceCode
  public static readonly DataSourceCode = ForecastExceptionCriterionLineFieldMetaDataSourceCode
  public static readonly TimeDeltaDaysQuantity = ForecastExceptionCriterionLineFieldMetaTimeDeltaDaysQuantity
}

export const ForecastExceptionCriterionLineFieldMap = new Map([
  [ForecastExceptionCriterionLineField.ForecastPurposeCode, ForecastExceptionCriterionLineFieldMetaForecastPurposeCode],
  [ForecastExceptionCriterionLineField.ForecastTypeCode, ForecastExceptionCriterionLineFieldMetaForecastTypeCode],
  [ForecastExceptionCriterionLineField.ComparisonDataSourceCode, ForecastExceptionCriterionLineFieldMetaComparisonDataSourceCode],
  [ForecastExceptionCriterionLineField.DataSourceCode, ForecastExceptionCriterionLineFieldMetaDataSourceCode],
  [ForecastExceptionCriterionLineField.TimeDeltaDaysQuantity, ForecastExceptionCriterionLineFieldMetaTimeDeltaDaysQuantity]
])
