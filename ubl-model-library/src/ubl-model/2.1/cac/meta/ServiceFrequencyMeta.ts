import { FieldMeta } from '../../FieldMeta'

export enum ServiceFrequencyField {
  WeekDayCode = 'WeekDayCode'
}

export const ServiceFrequencyFieldMetaWeekDayCode = new FieldMeta<ServiceFrequencyField>(
  ServiceFrequencyField.WeekDayCode,
  'WeekDayCode',
  'Week Day',
  'Code',
  'A day of the week, expressed as code.',
  '1',
  undefined,
  undefined
)

export class ServiceFrequencyFieldMeta {
  public static readonly WeekDayCode = ServiceFrequencyFieldMetaWeekDayCode
}

export const ServiceFrequencyFieldMap = new Map([
  [ServiceFrequencyField.WeekDayCode, ServiceFrequencyFieldMetaWeekDayCode]
])
