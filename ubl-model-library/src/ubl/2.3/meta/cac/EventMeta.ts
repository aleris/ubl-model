import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EventFieldMetaIdentificationID = new FieldMeta<EventField>(
  EventField.IdentificationID,
  'IdentificationID',
  'Identification',
  'Identifier',
  'An identifier for this event within an agreed event identification scheme.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EventFieldMetaOccurrenceDate = new FieldMeta<EventField>(
  EventField.OccurrenceDate,
  'OccurrenceDate',
  'Occurrence Date',
  'Date',
  'The date of this event.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EventFieldMetaOccurrenceTime = new FieldMeta<EventField>(
  EventField.OccurrenceTime,
  'OccurrenceTime',
  'Occurrence Time',
  'Time',
  'The time of this event.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EventFieldMetaTypeCode = new FieldMeta<EventField>(
  EventField.TypeCode,
  'TypeCode',
  'Type Code',
  'Code',
  'A code signifying the type of this event.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EventFieldMetaDescription = new FieldMeta<EventField>(
  EventField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this event.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const EventFieldMetaCompletionIndicator = new FieldMeta<EventField>(
  EventField.CompletionIndicator,
  'CompletionIndicator',
  'Completion Indicator',
  'Indicator',
  'An indicator that this event has been completed (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EventFieldMetaCurrentStatus = new FieldMeta<EventField>(
  EventField.CurrentStatus,
  'CurrentStatus',
  'Current Status',
  'Status',
  'The current status of this event.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const EventFieldMetaContact = new FieldMeta<EventField>(
  EventField.Contact,
  'Contact',
  'Contact',
  'Contact',
  'Contacts associated with this event.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const EventFieldMetaOccurenceLocation = new FieldMeta<EventField>(
  EventField.OccurenceLocation,
  'OccurenceLocation',
  'Occurence Location',
  'Location',
  'The location of this event.',
  '0..1',
  'cac',
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
