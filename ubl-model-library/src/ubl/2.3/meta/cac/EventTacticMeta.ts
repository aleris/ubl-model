import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { EventTacticEnumerationType } from './EventTacticEnumerationMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EventTacticField {
  UBLExtensions = 'UBLExtensions',
  Comment = 'Comment',
  Quantity = 'Quantity',
  EventTacticEnumeration = 'EventTacticEnumeration',
  Period = 'Period'
}

export const EventTacticFieldMetaUBLExtensions = new FieldMeta<EventTacticField>(
  EventTacticField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EventTacticFieldMetaComment = new FieldMeta<EventTacticField>(
  EventTacticField.Comment,
  'Comment',
  'Comment',
  TextType.name,
  'Generic field to add additional information or to specify mutually defined eventTacticTypes that are not currently listed.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventTacticFieldMetaQuantity = new FieldMeta<EventTacticField>(
  EventTacticField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The currencies, units, etc. that describes what is need for the event or promotion Usage example: Number of pallets per store for a stack display',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventTacticFieldMetaEventTacticEnumeration = new FieldMeta<EventTacticField>(
  EventTacticField.EventTacticEnumeration,
  'EventTacticEnumeration',
  'Event Tactic Enumeration',
  EventTacticEnumerationType.name,
  'The set of codes that describes this event tactic.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const EventTacticFieldMetaPeriod = new FieldMeta<EventTacticField>(
  EventTacticField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period covered by this event tactic.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class EventTacticFieldMeta {
  public static readonly UBLExtensions = EventTacticFieldMetaUBLExtensions
  public static readonly Comment = EventTacticFieldMetaComment
  public static readonly Quantity = EventTacticFieldMetaQuantity
  public static readonly EventTacticEnumeration = EventTacticFieldMetaEventTacticEnumeration
  public static readonly Period = EventTacticFieldMetaPeriod
}

export const EventTacticFieldMap = new Map([
  [EventTacticField.UBLExtensions, EventTacticFieldMetaUBLExtensions],
  [EventTacticField.Comment, EventTacticFieldMetaComment],
  [EventTacticField.Quantity, EventTacticFieldMetaQuantity],
  [EventTacticField.EventTacticEnumeration, EventTacticFieldMetaEventTacticEnumeration],
  [EventTacticField.Period, EventTacticFieldMetaPeriod]
])

export const EventTacticType: Type<EventTacticField> = {
  name: 'EventTactic',
  label: 'Event Tactic',
  module: TypeModule.cac,
  definition: 'A class defining a specific type of action or situation arranged by the Buyer or the Seller to promote the product or products.',
  fields: EventTacticFieldMap,
}
