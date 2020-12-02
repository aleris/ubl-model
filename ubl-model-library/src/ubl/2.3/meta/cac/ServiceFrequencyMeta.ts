import { FieldMeta } from '../FieldMeta'

export enum ServiceFrequencyField {
  UBLExtensions = 'UBLExtensions',
  WeekDayCode = 'WeekDayCode'
}

export const ServiceFrequencyFieldMetaUBLExtensions = new FieldMeta<ServiceFrequencyField>(
  ServiceFrequencyField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ServiceFrequencyFieldMetaWeekDayCode = new FieldMeta<ServiceFrequencyField>(
  ServiceFrequencyField.WeekDayCode,
  'WeekDayCode',
  'Week Day',
  'Code',
  'A day of the week, expressed as code.',
  '1',
  'cbc',
  undefined,
  undefined
)

export class ServiceFrequencyFieldMeta {
  public static readonly UBLExtensions = ServiceFrequencyFieldMetaUBLExtensions
  public static readonly WeekDayCode = ServiceFrequencyFieldMetaWeekDayCode
}

export const ServiceFrequencyFieldMap = new Map([
  [ServiceFrequencyField.UBLExtensions, ServiceFrequencyFieldMetaUBLExtensions],
  [ServiceFrequencyField.WeekDayCode, ServiceFrequencyFieldMetaWeekDayCode]
])
