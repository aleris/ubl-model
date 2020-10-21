import { FieldMeta } from '../../FieldMeta'

export enum EventTacticField {
  Comment = 'Comment',
  Quantity = 'Quantity',
  EventTacticEnumeration = 'EventTacticEnumeration',
  Period = 'Period'
}

export const EventTacticFieldMetaComment = new FieldMeta<EventTacticField>(
  EventTacticField.Comment,
  'Comment',
  'Comment',
  'Text',
  'Generic field to add additional information or to specify mutually defined eventTacticTypes that are not currently listed.',
  '0..1',
  undefined,
  undefined
)

export const EventTacticFieldMetaQuantity = new FieldMeta<EventTacticField>(
  EventTacticField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The currencies, units, etc. that describes what is need for the event or promotion Usage example: Number of pallets per store for a stack display',
  '0..1',
  undefined,
  undefined
)

export const EventTacticFieldMetaEventTacticEnumeration = new FieldMeta<EventTacticField>(
  EventTacticField.EventTacticEnumeration,
  'EventTacticEnumeration',
  'Event Tactic Enumeration',
  'EventTacticEnumeration',
  'The set of codes that describes this event tactic.',
  '1',
  undefined,
  undefined
)

export const EventTacticFieldMetaPeriod = new FieldMeta<EventTacticField>(
  EventTacticField.Period,
  'Period',
  'Period',
  'Period',
  'The period covered by this event tactic.',
  '0..1',
  undefined,
  undefined
)

export class EventTacticFieldMeta {
  public static readonly Comment = EventTacticFieldMetaComment
  public static readonly Quantity = EventTacticFieldMetaQuantity
  public static readonly EventTacticEnumeration = EventTacticFieldMetaEventTacticEnumeration
  public static readonly Period = EventTacticFieldMetaPeriod
}

export const EventTacticFieldMap = new Map([
  [EventTacticField.Comment, EventTacticFieldMetaComment],
  [EventTacticField.Quantity, EventTacticFieldMetaQuantity],
  [EventTacticField.EventTacticEnumeration, EventTacticFieldMetaEventTacticEnumeration],
  [EventTacticField.Period, EventTacticFieldMetaPeriod]
])
