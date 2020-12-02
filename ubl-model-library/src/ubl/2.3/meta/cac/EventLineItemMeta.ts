import { FieldMeta } from '../FieldMeta'

export enum EventLineItemField {
  UBLExtensions = 'UBLExtensions',
  LineNumberNumeric = 'LineNumberNumeric',
  ParticipatingLocationsLocation = 'ParticipatingLocationsLocation',
  RetailPlannedImpact = 'RetailPlannedImpact',
  SupplyItem = 'SupplyItem'
}

export const EventLineItemFieldMetaUBLExtensions = new FieldMeta<EventLineItemField>(
  EventLineItemField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EventLineItemFieldMetaLineNumberNumeric = new FieldMeta<EventLineItemField>(
  EventLineItemField.LineNumberNumeric,
  'LineNumberNumeric',
  'Line Number',
  'Numeric',
  'The number of this event line item.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EventLineItemFieldMetaParticipatingLocationsLocation = new FieldMeta<EventLineItemField>(
  EventLineItemField.ParticipatingLocationsLocation,
  'ParticipatingLocationsLocation',
  'Participating Locations Location',
  'Location',
  'The location of the stores involved in the event described in this line item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const EventLineItemFieldMetaRetailPlannedImpact = new FieldMeta<EventLineItemField>(
  EventLineItemField.RetailPlannedImpact,
  'RetailPlannedImpact',
  'Retail Planned Impact',
  'RetailPlannedImpact',
  'A planned impact of the event described in this line item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const EventLineItemFieldMetaSupplyItem = new FieldMeta<EventLineItemField>(
  EventLineItemField.SupplyItem,
  'SupplyItem',
  'Supply Item',
  'Item',
  'The product with which the event is associated.',
  '1',
  'cac',
  undefined,
  undefined
)

export class EventLineItemFieldMeta {
  public static readonly UBLExtensions = EventLineItemFieldMetaUBLExtensions
  public static readonly LineNumberNumeric = EventLineItemFieldMetaLineNumberNumeric
  public static readonly ParticipatingLocationsLocation = EventLineItemFieldMetaParticipatingLocationsLocation
  public static readonly RetailPlannedImpact = EventLineItemFieldMetaRetailPlannedImpact
  public static readonly SupplyItem = EventLineItemFieldMetaSupplyItem
}

export const EventLineItemFieldMap = new Map([
  [EventLineItemField.UBLExtensions, EventLineItemFieldMetaUBLExtensions],
  [EventLineItemField.LineNumberNumeric, EventLineItemFieldMetaLineNumberNumeric],
  [EventLineItemField.ParticipatingLocationsLocation, EventLineItemFieldMetaParticipatingLocationsLocation],
  [EventLineItemField.RetailPlannedImpact, EventLineItemFieldMetaRetailPlannedImpact],
  [EventLineItemField.SupplyItem, EventLineItemFieldMetaSupplyItem]
])
