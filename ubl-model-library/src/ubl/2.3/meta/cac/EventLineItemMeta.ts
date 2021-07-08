import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ItemType } from './ItemMeta'
import { LocationType } from './LocationMeta'
import { NumericType } from '../cbc/NumericMeta'
import { RetailPlannedImpactType } from './RetailPlannedImpactMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EventLineItemFieldMetaLineNumberNumeric = new FieldMeta<EventLineItemField>(
  EventLineItemField.LineNumberNumeric,
  'LineNumberNumeric',
  'Line Number',
  NumericType.name,
  'The number of this event line item.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EventLineItemFieldMetaParticipatingLocationsLocation = new FieldMeta<EventLineItemField>(
  EventLineItemField.ParticipatingLocationsLocation,
  'ParticipatingLocationsLocation',
  'Participating Locations Location',
  LocationType.name,
  'The location of the stores involved in the event described in this line item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EventLineItemFieldMetaRetailPlannedImpact = new FieldMeta<EventLineItemField>(
  EventLineItemField.RetailPlannedImpact,
  'RetailPlannedImpact',
  'Retail Planned Impact',
  RetailPlannedImpactType.name,
  'A planned impact of the event described in this line item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EventLineItemFieldMetaSupplyItem = new FieldMeta<EventLineItemField>(
  EventLineItemField.SupplyItem,
  'SupplyItem',
  'Supply Item',
  ItemType.name,
  'The product with which the event is associated.',
  FieldCardinality.Uni,
  TypeModule.cac,
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

export const EventLineItemType: Type<EventLineItemField> = {
  name: 'EventLineItem',
  label: 'Event Line Item',
  module: TypeModule.cac,
  definition: 'A class to define a line item describing the expected impacts associated with a retail event involving a specific product at a specific location.',
  fields: EventLineItemFieldMap,
}
