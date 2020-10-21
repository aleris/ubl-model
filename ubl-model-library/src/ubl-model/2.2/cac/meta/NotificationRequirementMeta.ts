import { FieldMeta } from '../../FieldMeta'

export enum NotificationRequirementField {
  NotificationTypeCode = 'NotificationTypeCode',
  PostEventNotificationDurationMeasure = 'PostEventNotificationDurationMeasure',
  PreEventNotificationDurationMeasure = 'PreEventNotificationDurationMeasure',
  NotifyParty = 'NotifyParty',
  NotificationPeriod = 'NotificationPeriod',
  NotificationLocation = 'NotificationLocation'
}

export const NotificationRequirementFieldMetaNotificationTypeCode = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.NotificationTypeCode,
  'NotificationTypeCode',
  'Notification Type Code',
  'Code',
  'A code signifying the type of notification (e.g., pickup status).',
  '1',
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaPostEventNotificationDurationMeasure = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.PostEventNotificationDurationMeasure,
  'PostEventNotificationDurationMeasure',
  'Post Event Notification Duration',
  'Measure',
  'The length of time between the occurrence of a given event and the issuance of a notification.',
  '0..1',
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaPreEventNotificationDurationMeasure = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.PreEventNotificationDurationMeasure,
  'PreEventNotificationDurationMeasure',
  'Pre Event Notification Duration',
  'Measure',
  'The length of time to elapse between the issuance of a notification and the occurrence of the event it relates to.',
  '0..1',
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaNotifyParty = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.NotifyParty,
  'NotifyParty',
  'Party',
  'Party',
  'A party to be notified.',
  '0..n',
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaNotificationPeriod = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.NotificationPeriod,
  'NotificationPeriod',
  'Period',
  'Period',
  'A period during which a notification should be issued.',
  '0..n',
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaNotificationLocation = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.NotificationLocation,
  'NotificationLocation',
  'Location',
  'Location',
  'A location at which a notification should be issued.',
  '0..n',
  undefined,
  undefined
)

export class NotificationRequirementFieldMeta {
  public static readonly NotificationTypeCode = NotificationRequirementFieldMetaNotificationTypeCode
  public static readonly PostEventNotificationDurationMeasure = NotificationRequirementFieldMetaPostEventNotificationDurationMeasure
  public static readonly PreEventNotificationDurationMeasure = NotificationRequirementFieldMetaPreEventNotificationDurationMeasure
  public static readonly NotifyParty = NotificationRequirementFieldMetaNotifyParty
  public static readonly NotificationPeriod = NotificationRequirementFieldMetaNotificationPeriod
  public static readonly NotificationLocation = NotificationRequirementFieldMetaNotificationLocation
}

export const NotificationRequirementFieldMap = new Map([
  [NotificationRequirementField.NotificationTypeCode, NotificationRequirementFieldMetaNotificationTypeCode],
  [NotificationRequirementField.PostEventNotificationDurationMeasure, NotificationRequirementFieldMetaPostEventNotificationDurationMeasure],
  [NotificationRequirementField.PreEventNotificationDurationMeasure, NotificationRequirementFieldMetaPreEventNotificationDurationMeasure],
  [NotificationRequirementField.NotifyParty, NotificationRequirementFieldMetaNotifyParty],
  [NotificationRequirementField.NotificationPeriod, NotificationRequirementFieldMetaNotificationPeriod],
  [NotificationRequirementField.NotificationLocation, NotificationRequirementFieldMetaNotificationLocation]
])
