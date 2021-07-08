import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationType } from './LocationMeta'
import { PartyType } from './PartyMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PickupField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  ActualPickupDate = 'ActualPickupDate',
  ActualPickupTime = 'ActualPickupTime',
  EarliestPickupDate = 'EarliestPickupDate',
  EarliestPickupTime = 'EarliestPickupTime',
  LatestPickupDate = 'LatestPickupDate',
  LatestPickupTime = 'LatestPickupTime',
  PickupLocation = 'PickupLocation',
  PickupParty = 'PickupParty'
}

export const PickupFieldMetaUBLExtensions = new FieldMeta<PickupField>(
  PickupField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PickupFieldMetaID = new FieldMeta<PickupField>(
  PickupField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this pickup.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PickupFieldMetaActualPickupDate = new FieldMeta<PickupField>(
  PickupField.ActualPickupDate,
  'ActualPickupDate',
  'Actual Pickup Date',
  DateType.name,
  'The actual pickup date.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PickupFieldMetaActualPickupTime = new FieldMeta<PickupField>(
  PickupField.ActualPickupTime,
  'ActualPickupTime',
  'Actual Pickup Time',
  TimeType.name,
  'The actual pickup time.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PickupFieldMetaEarliestPickupDate = new FieldMeta<PickupField>(
  PickupField.EarliestPickupDate,
  'EarliestPickupDate',
  'Earliest Pickup Date',
  DateType.name,
  'The earliest pickup date.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PickupFieldMetaEarliestPickupTime = new FieldMeta<PickupField>(
  PickupField.EarliestPickupTime,
  'EarliestPickupTime',
  'Earliest Pickup Time',
  TimeType.name,
  'The earliest pickup time.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PickupFieldMetaLatestPickupDate = new FieldMeta<PickupField>(
  PickupField.LatestPickupDate,
  'LatestPickupDate',
  'Latest Pickup Date',
  DateType.name,
  'The latest pickup date.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PickupFieldMetaLatestPickupTime = new FieldMeta<PickupField>(
  PickupField.LatestPickupTime,
  'LatestPickupTime',
  'Latest Pickup Time',
  TimeType.name,
  'The latest pickup time.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PickupFieldMetaPickupLocation = new FieldMeta<PickupField>(
  PickupField.PickupLocation,
  'PickupLocation',
  'Pickup Location',
  LocationType.name,
  'The pickup location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PickupFieldMetaPickupParty = new FieldMeta<PickupField>(
  PickupField.PickupParty,
  'PickupParty',
  'Pickup Party',
  PartyType.name,
  'The party responsible for picking up a delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PickupFieldMeta {
  public static readonly UBLExtensions = PickupFieldMetaUBLExtensions
  public static readonly ID = PickupFieldMetaID
  public static readonly ActualPickupDate = PickupFieldMetaActualPickupDate
  public static readonly ActualPickupTime = PickupFieldMetaActualPickupTime
  public static readonly EarliestPickupDate = PickupFieldMetaEarliestPickupDate
  public static readonly EarliestPickupTime = PickupFieldMetaEarliestPickupTime
  public static readonly LatestPickupDate = PickupFieldMetaLatestPickupDate
  public static readonly LatestPickupTime = PickupFieldMetaLatestPickupTime
  public static readonly PickupLocation = PickupFieldMetaPickupLocation
  public static readonly PickupParty = PickupFieldMetaPickupParty
}

export const PickupFieldMap = new Map([
  [PickupField.UBLExtensions, PickupFieldMetaUBLExtensions],
  [PickupField.ID, PickupFieldMetaID],
  [PickupField.ActualPickupDate, PickupFieldMetaActualPickupDate],
  [PickupField.ActualPickupTime, PickupFieldMetaActualPickupTime],
  [PickupField.EarliestPickupDate, PickupFieldMetaEarliestPickupDate],
  [PickupField.EarliestPickupTime, PickupFieldMetaEarliestPickupTime],
  [PickupField.LatestPickupDate, PickupFieldMetaLatestPickupDate],
  [PickupField.LatestPickupTime, PickupFieldMetaLatestPickupTime],
  [PickupField.PickupLocation, PickupFieldMetaPickupLocation],
  [PickupField.PickupParty, PickupFieldMetaPickupParty]
])

export const PickupType: Type<PickupField> = {
  name: 'Pickup',
  label: 'Pickup',
  module: TypeModule.cac,
  definition: 'A class to describe a pickup for delivery.',
  fields: PickupFieldMap,
}
