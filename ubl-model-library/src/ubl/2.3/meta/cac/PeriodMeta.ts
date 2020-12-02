import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PeriodFieldMetaStartDate = new FieldMeta<PeriodField>(
  PeriodField.StartDate,
  'StartDate',
  'Start Date',
  'Date',
  'The date on which this period begins.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PeriodFieldMetaStartTime = new FieldMeta<PeriodField>(
  PeriodField.StartTime,
  'StartTime',
  'Start Time',
  'Time',
  'The time at which this period begins.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PeriodFieldMetaEndDate = new FieldMeta<PeriodField>(
  PeriodField.EndDate,
  'EndDate',
  'End Date',
  'Date',
  'The date on which this period ends.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PeriodFieldMetaEndTime = new FieldMeta<PeriodField>(
  PeriodField.EndTime,
  'EndTime',
  'End Time',
  'Time',
  'The time at which this period ends.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PeriodFieldMetaDurationMeasure = new FieldMeta<PeriodField>(
  PeriodField.DurationMeasure,
  'DurationMeasure',
  'Duration',
  'Measure',
  'The duration of this period, expressed as an ISO 8601 code.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PeriodFieldMetaDescriptionCode = new FieldMeta<PeriodField>(
  PeriodField.DescriptionCode,
  'DescriptionCode',
  'Description Code',
  'Code',
  'A description of this period, expressed as a code.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const PeriodFieldMetaDescription = new FieldMeta<PeriodField>(
  PeriodField.Description,
  'Description',
  'Description',
  'Text',
  'A description of this period, expressed as text.',
  '0..n',
  'cbc',
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
