import { FieldMeta } from '../../FieldMeta'

export enum ServiceLevelAgreementField {
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

export const ServiceLevelAgreementFieldMetaID = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this service level agreement.',
  '0..1',
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaServiceTypeCode = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ServiceTypeCode,
  'ServiceTypeCode',
  'Service Type Code',
  'Code',
  'A specific type of service subject to this service level agreement.',
  '0..1',
  undefined,
  'AP, SMP'
)

export const ServiceLevelAgreementFieldMetaServiceType = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ServiceType,
  'ServiceType',
  'Service Type',
  'Text',
  'A specific type of service subject to this service level agreement, expressed as text.',
  '0..n',
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaAvailabilityTimePercent = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.AvailabilityTimePercent,
  'AvailabilityTimePercent',
  'Time Percent',
  'Numeric',
  'The availability percentage (e.g. 98.5% of the time).',
  '0..1',
  'Time Service Factor',
  '98.5'
)

export const ServiceLevelAgreementFieldMetaMondayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MondayAvailabilityIndicator,
  'MondayAvailabilityIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this service is available on monday (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaTuesdayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.TuesdayAvailabilityIndicator,
  'TuesdayAvailabilityIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this service is available on tuesday (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaWednesdayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.WednesdayAvailabilityIndicator,
  'WednesdayAvailabilityIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this service is available on wednesday (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaThursdayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ThursdayAvailabilityIndicator,
  'ThursdayAvailabilityIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this service is available on thursday (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaFridayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.FridayAvailabilityIndicator,
  'FridayAvailabilityIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this service is available on friday (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaSaturdayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.SaturdayAvailabilityIndicator,
  'SaturdayAvailabilityIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this service is available on saturday (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaSundayAvailabilityIndicator = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.SundayAvailabilityIndicator,
  'SundayAvailabilityIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this service is available on sunday (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const ServiceLevelAgreementFieldMetaMinimumResponseTimeDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MinimumResponseTimeDurationMeasure,
  'MinimumResponseTimeDurationMeasure',
  'Response Time Duration',
  'Measure',
  'The response time for aknowledgment (e.g. to send a receipt to a sending Access Point within 300 seconds).',
  '0..1',
  undefined,
  '300'
)

export const ServiceLevelAgreementFieldMetaMinimumDownTimeScheduleDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MinimumDownTimeScheduleDurationMeasure,
  'MinimumDownTimeScheduleDurationMeasure',
  'Down Time Schedule Duration',
  'Measure',
  'The minimum down time schedule for programmed maintenance (e.g. scheduled 3 days before).',
  '0..1',
  undefined,
  '3'
)

export const ServiceLevelAgreementFieldMetaMaximumIncidentNotificationDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MaximumIncidentNotificationDurationMeasure,
  'MaximumIncidentNotificationDurationMeasure',
  'Incident Notification Duration',
  'Measure',
  'The maximum length of time between the occurrence of an incident and the issuance of a notification (e.g. within 4 hours).',
  '0..1',
  undefined,
  '4'
)

export const ServiceLevelAgreementFieldMetaMaximumDataLossDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MaximumDataLossDurationMeasure,
  'MaximumDataLossDurationMeasure',
  'Data Loss Duration',
  'Measure',
  'The maximum data loss permitted (e.g. last 24 hours).',
  '0..1',
  undefined,
  '24'
)

export const ServiceLevelAgreementFieldMetaMeanTimeToRecoverDurationMeasure = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.MeanTimeToRecoverDurationMeasure,
  'MeanTimeToRecoverDurationMeasure',
  'Time To Recover Duration',
  'Measure',
  'The time taken to recover after an outage of service (e.g. 3 hours).',
  '0..1',
  'MTTR',
  '3'
)

export const ServiceLevelAgreementFieldMetaServiceAvailabilityPeriod = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ServiceAvailabilityPeriod,
  'ServiceAvailabilityPeriod',
  'Period',
  'Period',
  'The period for which the service is available.',
  '0..n',
  'Uptime',
  undefined
)

export const ServiceLevelAgreementFieldMetaServiceMaintenancePeriod = new FieldMeta<ServiceLevelAgreementField>(
  ServiceLevelAgreementField.ServiceMaintenancePeriod,
  'ServiceMaintenancePeriod',
  'Period',
  'Period',
  'The period of time designated in advance by the technical staff, during which preventive maintenance that could cause disruption of service may be performed.',
  '0..n',
  'Downtime',
  undefined
)

export class ServiceLevelAgreementFieldMeta {
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
