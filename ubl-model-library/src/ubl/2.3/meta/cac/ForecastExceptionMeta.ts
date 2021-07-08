import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ForecastExceptionField {
  UBLExtensions = 'UBLExtensions',
  ForecastPurposeCode = 'ForecastPurposeCode',
  ForecastTypeCode = 'ForecastTypeCode',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  DataSourceCode = 'DataSourceCode',
  ComparisonDataCode = 'ComparisonDataCode',
  ComparisonForecastIssueTime = 'ComparisonForecastIssueTime',
  ComparisonForecastIssueDate = 'ComparisonForecastIssueDate'
}

export const ForecastExceptionFieldMetaUBLExtensions = new FieldMeta<ForecastExceptionField>(
  ForecastExceptionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ForecastExceptionFieldMetaForecastPurposeCode = new FieldMeta<ForecastExceptionField>(
  ForecastExceptionField.ForecastPurposeCode,
  'ForecastPurposeCode',
  'Forecast Purpose Code',
  CodeType.name,
  'It is either Sales forecast or Order Forecast. Definition can be changed like: "The purpose of the Forecast (either sales or order), about which an exception criteria is being defined".',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionFieldMetaForecastTypeCode = new FieldMeta<ForecastExceptionField>(
  ForecastExceptionField.ForecastTypeCode,
  'ForecastTypeCode',
  'Forecast Type Code',
  CodeType.name,
  'A code signifying the type of forecast. Example of values are:BASE PROMOTIONAL SEASONAL TOTAL',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionFieldMetaIssueDate = new FieldMeta<ForecastExceptionField>(
  ForecastExceptionField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date on which the forecast was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionFieldMetaIssueTime = new FieldMeta<ForecastExceptionField>(
  ForecastExceptionField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time at which the forecast was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionFieldMetaDataSourceCode = new FieldMeta<ForecastExceptionField>(
  ForecastExceptionField.DataSourceCode,
  'DataSourceCode',
  'Data Source Code',
  CodeType.name,
  'A code signifying the partner who provides this information.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionFieldMetaComparisonDataCode = new FieldMeta<ForecastExceptionField>(
  ForecastExceptionField.ComparisonDataCode,
  'ComparisonDataCode',
  'Comparison Data Code',
  CodeType.name,
  'A code signifying the partner providing the information in this forecast exception.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionFieldMetaComparisonForecastIssueTime = new FieldMeta<ForecastExceptionField>(
  ForecastExceptionField.ComparisonForecastIssueTime,
  'ComparisonForecastIssueTime',
  'Comparison Forecast Issue Time',
  TimeType.name,
  'The time at which this comparison forecast was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ForecastExceptionFieldMetaComparisonForecastIssueDate = new FieldMeta<ForecastExceptionField>(
  ForecastExceptionField.ComparisonForecastIssueDate,
  'ComparisonForecastIssueDate',
  'Comparison Forecast Issue Date',
  DateType.name,
  'The date on which this comparison forecast was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ForecastExceptionFieldMeta {
  public static readonly UBLExtensions = ForecastExceptionFieldMetaUBLExtensions
  public static readonly ForecastPurposeCode = ForecastExceptionFieldMetaForecastPurposeCode
  public static readonly ForecastTypeCode = ForecastExceptionFieldMetaForecastTypeCode
  public static readonly IssueDate = ForecastExceptionFieldMetaIssueDate
  public static readonly IssueTime = ForecastExceptionFieldMetaIssueTime
  public static readonly DataSourceCode = ForecastExceptionFieldMetaDataSourceCode
  public static readonly ComparisonDataCode = ForecastExceptionFieldMetaComparisonDataCode
  public static readonly ComparisonForecastIssueTime = ForecastExceptionFieldMetaComparisonForecastIssueTime
  public static readonly ComparisonForecastIssueDate = ForecastExceptionFieldMetaComparisonForecastIssueDate
}

export const ForecastExceptionFieldMap = new Map([
  [ForecastExceptionField.UBLExtensions, ForecastExceptionFieldMetaUBLExtensions],
  [ForecastExceptionField.ForecastPurposeCode, ForecastExceptionFieldMetaForecastPurposeCode],
  [ForecastExceptionField.ForecastTypeCode, ForecastExceptionFieldMetaForecastTypeCode],
  [ForecastExceptionField.IssueDate, ForecastExceptionFieldMetaIssueDate],
  [ForecastExceptionField.IssueTime, ForecastExceptionFieldMetaIssueTime],
  [ForecastExceptionField.DataSourceCode, ForecastExceptionFieldMetaDataSourceCode],
  [ForecastExceptionField.ComparisonDataCode, ForecastExceptionFieldMetaComparisonDataCode],
  [ForecastExceptionField.ComparisonForecastIssueTime, ForecastExceptionFieldMetaComparisonForecastIssueTime],
  [ForecastExceptionField.ComparisonForecastIssueDate, ForecastExceptionFieldMetaComparisonForecastIssueDate]
])

export const ForecastExceptionType: Type<ForecastExceptionField> = {
  name: 'ForecastException',
  label: 'Forecast Exception',
  module: TypeModule.cac,
  definition: 'As explained in Exception Criteria Line: Three types of exception criteria can be defined, Operational, Metric or Forecast Exceptions. This class provides criteria for forecast exception type: the identification of the purpose of the forecast, the source of data and the time basis criteria for the exception.',
  fields: ForecastExceptionFieldMap,
}
