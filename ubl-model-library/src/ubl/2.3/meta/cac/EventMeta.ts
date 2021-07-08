import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContactType } from './ContactMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LocationType } from './LocationMeta'
import { StatusType } from './StatusMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EventField {
  UBLExtensions = 'UBLExtensions',
  IdentificationID = 'IdentificationID',
  OccurrenceDate = 'OccurrenceDate',
  OccurrenceTime = 'OccurrenceTime',
  TypeCode = 'TypeCode',
  Description = 'Description',
  CompletionIndicator = 'CompletionIndicator',
  CurrentStatus = 'CurrentStatus',
  Contact = 'Contact',
  OccurenceLocation = 'OccurenceLocation'
}

export const EventFieldMetaUBLExtensions = new FieldMeta<EventField>(
  EventField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EventFieldMetaIdentificationID = new FieldMeta<EventField>(
  EventField.IdentificationID,
  'IdentificationID',
  'Identification',
  IdentifierType.name,
  'An identifier for this event within an agreed event identification scheme.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventFieldMetaOccurrenceDate = new FieldMeta<EventField>(
  EventField.OccurrenceDate,
  'OccurrenceDate',
  'Occurrence Date',
  DateType.name,
  'The date of this event.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventFieldMetaOccurrenceTime = new FieldMeta<EventField>(
  EventField.OccurrenceTime,
  'OccurrenceTime',
  'Occurrence Time',
  TimeType.name,
  'The time of this event.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventFieldMetaTypeCode = new FieldMeta<EventField>(
  EventField.TypeCode,
  'TypeCode',
  'Type Code',
  CodeType.name,
  'A code signifying the type of this event.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventFieldMetaDescription = new FieldMeta<EventField>(
  EventField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this event.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventFieldMetaCompletionIndicator = new FieldMeta<EventField>(
  EventField.CompletionIndicator,
  'CompletionIndicator',
  'Completion Indicator',
  IndicatorType.name,
  'An indicator that this event has been completed (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventFieldMetaCurrentStatus = new FieldMeta<EventField>(
  EventField.CurrentStatus,
  'CurrentStatus',
  'Current Status',
  StatusType.name,
  'The current status of this event.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EventFieldMetaContact = new FieldMeta<EventField>(
  EventField.Contact,
  'Contact',
  'Contact',
  ContactType.name,
  'Contacts associated with this event.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EventFieldMetaOccurenceLocation = new FieldMeta<EventField>(
  EventField.OccurenceLocation,
  'OccurenceLocation',
  'Occurence Location',
  LocationType.name,
  'The location of this event.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class EventFieldMeta {
  public static readonly UBLExtensions = EventFieldMetaUBLExtensions
  public static readonly IdentificationID = EventFieldMetaIdentificationID
  public static readonly OccurrenceDate = EventFieldMetaOccurrenceDate
  public static readonly OccurrenceTime = EventFieldMetaOccurrenceTime
  public static readonly TypeCode = EventFieldMetaTypeCode
  public static readonly Description = EventFieldMetaDescription
  public static readonly CompletionIndicator = EventFieldMetaCompletionIndicator
  public static readonly CurrentStatus = EventFieldMetaCurrentStatus
  public static readonly Contact = EventFieldMetaContact
  public static readonly OccurenceLocation = EventFieldMetaOccurenceLocation
}

export const EventFieldMap = new Map([
  [EventField.UBLExtensions, EventFieldMetaUBLExtensions],
  [EventField.IdentificationID, EventFieldMetaIdentificationID],
  [EventField.OccurrenceDate, EventFieldMetaOccurrenceDate],
  [EventField.OccurrenceTime, EventFieldMetaOccurrenceTime],
  [EventField.TypeCode, EventFieldMetaTypeCode],
  [EventField.Description, EventFieldMetaDescription],
  [EventField.CompletionIndicator, EventFieldMetaCompletionIndicator],
  [EventField.CurrentStatus, EventFieldMetaCurrentStatus],
  [EventField.Contact, EventFieldMetaContact],
  [EventField.OccurenceLocation, EventFieldMetaOccurenceLocation]
])

export const EventType: Type<EventField> = {
  name: 'Event',
  label: 'Event',
  module: TypeModule.cac,
  definition: 'A class to describe a significant occurrence relating to an object, process, or person.',
  fields: EventFieldMap,
}
