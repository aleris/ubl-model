import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { LocationType } from './LocationMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum NotificationRequirementField {
  UBLExtensions = 'UBLExtensions',
  NotificationTypeCode = 'NotificationTypeCode',
  PostEventNotificationDurationMeasure = 'PostEventNotificationDurationMeasure',
  PreEventNotificationDurationMeasure = 'PreEventNotificationDurationMeasure',
  NotifyParty = 'NotifyParty',
  NotificationPeriod = 'NotificationPeriod',
  NotificationLocation = 'NotificationLocation'
}

export const NotificationRequirementFieldMetaUBLExtensions = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaNotificationTypeCode = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.NotificationTypeCode,
  'NotificationTypeCode',
  'Notification Type Code',
  CodeType.name,
  'A code signifying the type of notification (e.g., pickup status).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaPostEventNotificationDurationMeasure = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.PostEventNotificationDurationMeasure,
  'PostEventNotificationDurationMeasure',
  'Post Event Notification Duration',
  MeasureType.name,
  'The length of time between the occurrence of a given event and the issuance of a notification.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaPreEventNotificationDurationMeasure = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.PreEventNotificationDurationMeasure,
  'PreEventNotificationDurationMeasure',
  'Pre Event Notification Duration',
  MeasureType.name,
  'The length of time to elapse between the issuance of a notification and the occurrence of the event it relates to.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaNotifyParty = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.NotifyParty,
  'NotifyParty',
  'Notify Party',
  PartyType.name,
  'A party to be notified.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaNotificationPeriod = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.NotificationPeriod,
  'NotificationPeriod',
  'Notification Period',
  PeriodType.name,
  'A period during which a notification should be issued.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const NotificationRequirementFieldMetaNotificationLocation = new FieldMeta<NotificationRequirementField>(
  NotificationRequirementField.NotificationLocation,
  'NotificationLocation',
  'Notification Location',
  LocationType.name,
  'A location at which a notification should be issued.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class NotificationRequirementFieldMeta {
  public static readonly UBLExtensions = NotificationRequirementFieldMetaUBLExtensions
  public static readonly NotificationTypeCode = NotificationRequirementFieldMetaNotificationTypeCode
  public static readonly PostEventNotificationDurationMeasure = NotificationRequirementFieldMetaPostEventNotificationDurationMeasure
  public static readonly PreEventNotificationDurationMeasure = NotificationRequirementFieldMetaPreEventNotificationDurationMeasure
  public static readonly NotifyParty = NotificationRequirementFieldMetaNotifyParty
  public static readonly NotificationPeriod = NotificationRequirementFieldMetaNotificationPeriod
  public static readonly NotificationLocation = NotificationRequirementFieldMetaNotificationLocation
}

export const NotificationRequirementFieldMap = new Map([
  [NotificationRequirementField.UBLExtensions, NotificationRequirementFieldMetaUBLExtensions],
  [NotificationRequirementField.NotificationTypeCode, NotificationRequirementFieldMetaNotificationTypeCode],
  [NotificationRequirementField.PostEventNotificationDurationMeasure, NotificationRequirementFieldMetaPostEventNotificationDurationMeasure],
  [NotificationRequirementField.PreEventNotificationDurationMeasure, NotificationRequirementFieldMetaPreEventNotificationDurationMeasure],
  [NotificationRequirementField.NotifyParty, NotificationRequirementFieldMetaNotifyParty],
  [NotificationRequirementField.NotificationPeriod, NotificationRequirementFieldMetaNotificationPeriod],
  [NotificationRequirementField.NotificationLocation, NotificationRequirementFieldMetaNotificationLocation]
])

export const NotificationRequirementType: Type<NotificationRequirementField> = {
  name: 'NotificationRequirement',
  label: 'Notification Requirement',
  module: TypeModule.cac,
  definition: 'A class to describe a notification requirement.',
  fields: NotificationRequirementFieldMap,
}
