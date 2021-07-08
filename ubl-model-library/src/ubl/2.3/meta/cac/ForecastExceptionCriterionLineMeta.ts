import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ForecastExceptionCriterionLineField {
  UBLExtensions = 'UBLExtensions',
  ForecastPurposeCode = 'ForecastPurposeCode',
  ForecastTypeCode = 'ForecastTypeCode',
  ComparisonDataSourceCode = 'ComparisonDataSourceCode',
  DataSourceCode = 'DataSourceCode',
  TimeDeltaDaysQuantity = 'TimeDeltaDaysQuantity'
}

export const ForecastExceptionCriterionLineFieldMetaUBLExtensions = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ForecastExceptionCriterionLineFieldMetaForecastPurposeCode = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.ForecastPurposeCode,
  'ForecastPurposeCode',
  'Forecast Purpose Code',
  CodeType.name,
  'A description of the purpose for the forecast that is assigned to each forecast data item exception criterion.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionCriterionLineFieldMetaForecastTypeCode = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.ForecastTypeCode,
  'ForecastTypeCode',
  'Forecast Type Code',
  CodeType.name,
  'A description of a Forecast selected from a list.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionCriterionLineFieldMetaComparisonDataSourceCode = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.ComparisonDataSourceCode,
  'ComparisonDataSourceCode',
  'Comparison Data Source Code',
  CodeType.name,
  'If it is a forecast comparison exception, this value indicates the other source of information.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionCriterionLineFieldMetaDataSourceCode = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.DataSourceCode,
  'DataSourceCode',
  'Data Source Code',
  CodeType.name,
  'Indication of the partner who provides the information.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionCriterionLineFieldMetaTimeDeltaDaysQuantity = new FieldMeta<ForecastExceptionCriterionLineField>(
  ForecastExceptionCriterionLineField.TimeDeltaDaysQuantity,
  'TimeDeltaDaysQuantity',
  'Time Delta Days Quantity',
  QuantityType.name,
  'Time basis in days for the Exception.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ForecastExceptionCriterionLineFieldMeta {
  public static readonly UBLExtensions = ForecastExceptionCriterionLineFieldMetaUBLExtensions
  public static readonly ForecastPurposeCode = ForecastExceptionCriterionLineFieldMetaForecastPurposeCode
  public static readonly ForecastTypeCode = ForecastExceptionCriterionLineFieldMetaForecastTypeCode
  public static readonly ComparisonDataSourceCode = ForecastExceptionCriterionLineFieldMetaComparisonDataSourceCode
  public static readonly DataSourceCode = ForecastExceptionCriterionLineFieldMetaDataSourceCode
  public static readonly TimeDeltaDaysQuantity = ForecastExceptionCriterionLineFieldMetaTimeDeltaDaysQuantity
}

export const ForecastExceptionCriterionLineFieldMap = new Map([
  [ForecastExceptionCriterionLineField.UBLExtensions, ForecastExceptionCriterionLineFieldMetaUBLExtensions],
  [ForecastExceptionCriterionLineField.ForecastPurposeCode, ForecastExceptionCriterionLineFieldMetaForecastPurposeCode],
  [ForecastExceptionCriterionLineField.ForecastTypeCode, ForecastExceptionCriterionLineFieldMetaForecastTypeCode],
  [ForecastExceptionCriterionLineField.ComparisonDataSourceCode, ForecastExceptionCriterionLineFieldMetaComparisonDataSourceCode],
  [ForecastExceptionCriterionLineField.DataSourceCode, ForecastExceptionCriterionLineFieldMetaDataSourceCode],
  [ForecastExceptionCriterionLineField.TimeDeltaDaysQuantity, ForecastExceptionCriterionLineFieldMetaTimeDeltaDaysQuantity]
])

export const ForecastExceptionCriterionLineType: Type<ForecastExceptionCriterionLineField> = {
  name: 'ForecastExceptionCriterionLine',
  label: 'Forecast Exception Criterion Line',
  module: TypeModule.cac,
  definition: 'Establishes the criterion for one of the three types of exceptions. This class provides criteria for the kind of forecast exception, the identification of the purpose of the forecast, the source of data and the time basis criterion for the exception.',
  fields: ForecastExceptionCriterionLineFieldMap,
}
