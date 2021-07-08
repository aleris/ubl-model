import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PeriodField {
  UBLExtensions = 'UBLExtensions',
  StartDate = 'StartDate',
  StartTime = 'StartTime',
  EndDate = 'EndDate',
  EndTime = 'EndTime',
  DurationMeasure = 'DurationMeasure',
  DescriptionCode = 'DescriptionCode',
  Description = 'Description'
}

export const PeriodFieldMetaUBLExtensions = new FieldMeta<PeriodField>(
  PeriodField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PeriodFieldMetaStartDate = new FieldMeta<PeriodField>(
  PeriodField.StartDate,
  'StartDate',
  'Start Date',
  DateType.name,
  'The date on which this period begins.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PeriodFieldMetaStartTime = new FieldMeta<PeriodField>(
  PeriodField.StartTime,
  'StartTime',
  'Start Time',
  TimeType.name,
  'The time at which this period begins.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PeriodFieldMetaEndDate = new FieldMeta<PeriodField>(
  PeriodField.EndDate,
  'EndDate',
  'End Date',
  DateType.name,
  'The date on which this period ends.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PeriodFieldMetaEndTime = new FieldMeta<PeriodField>(
  PeriodField.EndTime,
  'EndTime',
  'End Time',
  TimeType.name,
  'The time at which this period ends.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PeriodFieldMetaDurationMeasure = new FieldMeta<PeriodField>(
  PeriodField.DurationMeasure,
  'DurationMeasure',
  'Duration',
  MeasureType.name,
  'The duration of this period, expressed as an ISO 8601 code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PeriodFieldMetaDescriptionCode = new FieldMeta<PeriodField>(
  PeriodField.DescriptionCode,
  'DescriptionCode',
  'Description Code',
  CodeType.name,
  'A description of this period, expressed as a code.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PeriodFieldMetaDescription = new FieldMeta<PeriodField>(
  PeriodField.Description,
  'Description',
  'Description',
  TextType.name,
  'A description of this period, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class PeriodFieldMeta {
  public static readonly UBLExtensions = PeriodFieldMetaUBLExtensions
  public static readonly StartDate = PeriodFieldMetaStartDate
  public static readonly StartTime = PeriodFieldMetaStartTime
  public static readonly EndDate = PeriodFieldMetaEndDate
  public static readonly EndTime = PeriodFieldMetaEndTime
  public static readonly DurationMeasure = PeriodFieldMetaDurationMeasure
  public static readonly DescriptionCode = PeriodFieldMetaDescriptionCode
  public static readonly Description = PeriodFieldMetaDescription
}

export const PeriodFieldMap = new Map([
  [PeriodField.UBLExtensions, PeriodFieldMetaUBLExtensions],
  [PeriodField.StartDate, PeriodFieldMetaStartDate],
  [PeriodField.StartTime, PeriodFieldMetaStartTime],
  [PeriodField.EndDate, PeriodFieldMetaEndDate],
  [PeriodField.EndTime, PeriodFieldMetaEndTime],
  [PeriodField.DurationMeasure, PeriodFieldMetaDurationMeasure],
  [PeriodField.DescriptionCode, PeriodFieldMetaDescriptionCode],
  [PeriodField.Description, PeriodFieldMetaDescription]
])

export const PeriodType: Type<PeriodField> = {
  name: 'Period',
  label: 'Period',
  module: TypeModule.cac,
  definition: 'A class to describe a period of time.',
  fields: PeriodFieldMap,
}
