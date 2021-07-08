import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ServiceFrequencyField {
  UBLExtensions = 'UBLExtensions',
  WeekDayCode = 'WeekDayCode'
}

export const ServiceFrequencyFieldMetaUBLExtensions = new FieldMeta<ServiceFrequencyField>(
  ServiceFrequencyField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ServiceFrequencyFieldMetaWeekDayCode = new FieldMeta<ServiceFrequencyField>(
  ServiceFrequencyField.WeekDayCode,
  'WeekDayCode',
  'Week Day',
  CodeType.name,
  'A day of the week, expressed as code.',
  FieldCardinality.Uni,
  TypeModule.cbc,
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

export const ServiceFrequencyType: Type<ServiceFrequencyField> = {
  name: 'ServiceFrequency',
  label: 'Service Frequency',
  module: TypeModule.cac,
  definition: 'A class to specify which day of the week a transport service is operational.',
  fields: ServiceFrequencyFieldMap,
}
