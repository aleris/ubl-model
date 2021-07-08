import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ServiceLevelAgreementField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ServiceTypeCode = 'ServiceTypeCode',
  ServiceType = 'ServiceType',
  AvailabilityTimePercent = 'AvailabilityTimePercent',
  MondayAvailabilityIndicator = 'MondayAvailabilityIndicator',
  TuesdayAvailabilityIndicator = 'TuesdayAvailabilityIndicator',
  WednesdayAvailabilityIndicator = 'WednesdayAvailabilityIndicator',
  ThursdayAvailabilityIndicator = 'ThursdayAvailabilityIndicator',
  FridayAvailabilityIndicator = 'FridayAvailabilityIndicator',
  SaturdayAvailabilityIndicator = 'SaturdayAvailabilityIndicator',
  SundayAvailabilityIndicator = 'SundayAvailabilityIndicator',
  MinimumResponseTimeDurationMeasure = 'MinimumResponseTimeDurationMeasure',
  MinimumDownTimeScheduleDurationMeasure = 'MinimumDownTimeScheduleDurationMeasure',
  MaximumIncidentNotificationDurationMeasure = 'MaximumIncidentNotificationDurationMeasure',
  MaximumDataLossDurationMeasure = 'MaximumDataLossDurationMeasure',
  MeanTimeToRecoverDurationMeasure = 'MeanTimeToRecoverDurationMeasure',
  ServiceAvailabilityPeriod = 'ServiceAvailabilityPeriod',
  ServiceMaintenancePeriod = 'ServiceMaintenancePeriod'
}

export const ServiceLevelAgreementFieldMetaUBLExtensions = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaID = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this service level agreement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaServiceTypeCode = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ServiceTypeCode,
  'ServiceTypeCode',
  'Service Type Code',
  CodeType.name,
  'A specific type of service subject to this service level agreement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'AP, SMP'
)

export const ServiceLevelAgreementFieldMetaServiceType = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ServiceType,
  'ServiceType',
  'Service Type',
  TextType.name,
  'A specific type of service subject to this service level agreement, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaAvailabilityTimePercent = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.AvailabilityTimePercent,
  'AvailabilityTimePercent',
  'Availability Time Percent',
  NumericType.name,
  'The availability percentage (e.g. 98.5% of the time).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Time Service Factor',
  '98.5'
)

export const ServiceLevelAgreementFieldMetaMondayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MondayAvailabilityIndicator,
  'MondayAvailabilityIndicator',
  'Monday Availability Indicator',
  IndicatorType.name,
  'Indicates whether this service is available on monday (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaTuesdayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.TuesdayAvailabilityIndicator,
  'TuesdayAvailabilityIndicator',
  'Tuesday Availability Indicator',
  IndicatorType.name,
  'Indicates whether this service is available on tuesday (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaWednesdayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.WednesdayAvailabilityIndicator,
  'WednesdayAvailabilityIndicator',
  'Wednesday Availability Indicator',
  IndicatorType.name,
  'Indicates whether this service is available on wednesday (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaThursdayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ThursdayAvailabilityIndicator,
  'ThursdayAvailabilityIndicator',
  'Thursday Availability Indicator',
  IndicatorType.name,
  'Indicates whether this service is available on thursday (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaFridayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.FridayAvailabilityIndicator,
  'FridayAvailabilityIndicator',
  'Friday Availability Indicator',
  IndicatorType.name,
  'Indicates whether this service is available on friday (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaSaturdayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.SaturdayAvailabilityIndicator,
  'SaturdayAvailabilityIndicator',
  'Saturday Availability Indicator',
  IndicatorType.name,
  'Indicates whether this service is available on saturday (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaSundayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.SundayAvailabilityIndicator,
  'SundayAvailabilityIndicator',
  'Sunday Availability Indicator',
  IndicatorType.name,
  'Indicates whether this service is available on sunday (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaMinimumResponseTimeDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MinimumResponseTimeDurationMeasure,
  'MinimumResponseTimeDurationMeasure',
  'Minimum Response Time Duration',
  MeasureType.name,
  'The response time for aknowledgment (e.g. to send a receipt to a sending Access Point within 300 seconds).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '300'
)

export const ServiceLevelAgreementFieldMetaMinimumDownTimeScheduleDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MinimumDownTimeScheduleDurationMeasure,
  'MinimumDownTimeScheduleDurationMeasure',
  'Minimum Down Time Schedule Duration',
  MeasureType.name,
  'The minimum down time schedule for programmed maintenance (e.g. scheduled 3 days before).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '3'
)

export const ServiceLevelAgreementFieldMetaMaximumIncidentNotificationDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MaximumIncidentNotificationDurationMeasure,
  'MaximumIncidentNotificationDurationMeasure',
  'Maximum Incident Notification Duration',
  MeasureType.name,
  'The maximum length of time between the occurrence of an incident and the issuance of a notification (e.g. within 4 hours).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '4'
)

export const ServiceLevelAgreementFieldMetaMaximumDataLossDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MaximumDataLossDurationMeasure,
  'MaximumDataLossDurationMeasure',
  'Maximum Data Loss Duration',
  MeasureType.name,
  'The maximum data loss permitted (e.g. last 24 hours).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '24'
)

export const ServiceLevelAgreementFieldMetaMeanTimeToRecoverDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MeanTimeToRecoverDurationMeasure,
  'MeanTimeToRecoverDurationMeasure',
  'Mean Time To Recover Duration',
  MeasureType.name,
  'The time taken to recover after an outage of service (e.g. 3 hours).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'MTTR',
  '3'
)

export const ServiceLevelAgreementFieldMetaServiceAvailabilityPeriod = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ServiceAvailabilityPeriod,
  'ServiceAvailabilityPeriod',
  'Service Availability Period',
  PeriodType.name,
  'The period for which the service is available.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  'Uptime',
  undefined
)

export const ServiceLevelAgreementFieldMetaServiceMaintenancePeriod = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ServiceMaintenancePeriod,
  'ServiceMaintenancePeriod',
  'Service Maintenance Period',
  PeriodType.name,
  'The period of time designated in advance by the technical staff, during which preventive maintenance that could cause disruption of service may be performed.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  'Downtime',
  undefined
)

export class ServiceLevelAgreementFieldMeta {
  public static readonly UBLExtensions = ServiceLevelAgreementFieldMetaUBLExtensions
  public static readonly ID = ServiceLevelAgreementFieldMetaID
  public static readonly ServiceTypeCode = ServiceLevelAgreementFieldMetaServiceTypeCode
  public static readonly ServiceType = ServiceLevelAgreementFieldMetaServiceType
  public static readonly AvailabilityTimePercent = ServiceLevelAgreementFieldMetaAvailabilityTimePercent
  public static readonly MondayAvailabilityIndicator = ServiceLevelAgreementFieldMetaMondayAvailabilityIndicator
  public static readonly TuesdayAvailabilityIndicator = ServiceLevelAgreementFieldMetaTuesdayAvailabilityIndicator
  public static readonly WednesdayAvailabilityIndicator = ServiceLevelAgreementFieldMetaWednesdayAvailabilityIndicator
  public static readonly ThursdayAvailabilityIndicator = ServiceLevelAgreementFieldMetaThursdayAvailabilityIndicator
  public static readonly FridayAvailabilityIndicator = ServiceLevelAgreementFieldMetaFridayAvailabilityIndicator
  public static readonly SaturdayAvailabilityIndicator = ServiceLevelAgreementFieldMetaSaturdayAvailabilityIndicator
  public static readonly SundayAvailabilityIndicator = ServiceLevelAgreementFieldMetaSundayAvailabilityIndicator
  public static readonly MinimumResponseTimeDurationMeasure = ServiceLevelAgreementFieldMetaMinimumResponseTimeDurationMeasure
  public static readonly MinimumDownTimeScheduleDurationMeasure = ServiceLevelAgreementFieldMetaMinimumDownTimeScheduleDurationMeasure
  public static readonly MaximumIncidentNotificationDurationMeasure = ServiceLevelAgreementFieldMetaMaximumIncidentNotificationDurationMeasure
  public static readonly MaximumDataLossDurationMeasure = ServiceLevelAgreementFieldMetaMaximumDataLossDurationMeasure
  public static readonly MeanTimeToRecoverDurationMeasure = ServiceLevelAgreementFieldMetaMeanTimeToRecoverDurationMeasure
  public static readonly ServiceAvailabilityPeriod = ServiceLevelAgreementFieldMetaServiceAvailabilityPeriod
  public static readonly ServiceMaintenancePeriod = ServiceLevelAgreementFieldMetaServiceMaintenancePeriod
}

export const ServiceLevelAgreementFieldMap = new Map([
  [ServiceLevelAgreementField.UBLExtensions, ServiceLevelAgreementFieldMetaUBLExtensions],
  [ServiceLevelAgreementField.ID, ServiceLevelAgreementFieldMetaID],
  [ServiceLevelAgreementField.ServiceTypeCode, ServiceLevelAgreementFieldMetaServiceTypeCode],
  [ServiceLevelAgreementField.ServiceType, ServiceLevelAgreementFieldMetaServiceType],
  [ServiceLevelAgreementField.AvailabilityTimePercent, ServiceLevelAgreementFieldMetaAvailabilityTimePercent],
  [ServiceLevelAgreementField.MondayAvailabilityIndicator, ServiceLevelAgreementFieldMetaMondayAvailabilityIndicator],
  [ServiceLevelAgreementField.TuesdayAvailabilityIndicator, ServiceLevelAgreementFieldMetaTuesdayAvailabilityIndicator],
  [ServiceLevelAgreementField.WednesdayAvailabilityIndicator, ServiceLevelAgreementFieldMetaWednesdayAvailabilityIndicator],
  [ServiceLevelAgreementField.ThursdayAvailabilityIndicator, ServiceLevelAgreementFieldMetaThursdayAvailabilityIndicator],
  [ServiceLevelAgreementField.FridayAvailabilityIndicator, ServiceLevelAgreementFieldMetaFridayAvailabilityIndicator],
  [ServiceLevelAgreementField.SaturdayAvailabilityIndicator, ServiceLevelAgreementFieldMetaSaturdayAvailabilityIndicator],
  [ServiceLevelAgreementField.SundayAvailabilityIndicator, ServiceLevelAgreementFieldMetaSundayAvailabilityIndicator],
  [ServiceLevelAgreementField.MinimumResponseTimeDurationMeasure, ServiceLevelAgreementFieldMetaMinimumResponseTimeDurationMeasure],
  [ServiceLevelAgreementField.MinimumDownTimeScheduleDurationMeasure, ServiceLevelAgreementFieldMetaMinimumDownTimeScheduleDurationMeasure],
  [ServiceLevelAgreementField.MaximumIncidentNotificationDurationMeasure, ServiceLevelAgreementFieldMetaMaximumIncidentNotificationDurationMeasure],
  [ServiceLevelAgreementField.MaximumDataLossDurationMeasure, ServiceLevelAgreementFieldMetaMaximumDataLossDurationMeasure],
  [ServiceLevelAgreementField.MeanTimeToRecoverDurationMeasure, ServiceLevelAgreementFieldMetaMeanTimeToRecoverDurationMeasure],
  [ServiceLevelAgreementField.ServiceAvailabilityPeriod, ServiceLevelAgreementFieldMetaServiceAvailabilityPeriod],
  [ServiceLevelAgreementField.ServiceMaintenancePeriod, ServiceLevelAgreementFieldMetaServiceMaintenancePeriod]
])

export const ServiceLevelAgreementType: Type<ServiceLevelAgreementField> = {
  name: 'ServiceLevelAgreement',
  label: 'Service Level Agreement',
  module: TypeModule.cac,
  definition: 'A class to describe a service level agreement which regulates the quality, availability and responsibilities of digital services.',
  fields: ServiceLevelAgreementFieldMap,
}
