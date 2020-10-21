import { FieldMeta } from '../../FieldMeta'

export enum PickupField {
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

export const PickupFieldMetaID = new FieldMeta<PickupField>(
  PickupField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this pickup.',
  '0..1',
  undefined,
  undefined
)

export const PickupFieldMetaActualPickupDate = new FieldMeta<PickupField>(
  PickupField.ActualPickupDate,
  'ActualPickupDate',
  'Pickup Date',
  'Date',
  'The actual pickup date.',
  '0..1',
  undefined,
  undefined
)

export const PickupFieldMetaActualPickupTime = new FieldMeta<PickupField>(
  PickupField.ActualPickupTime,
  'ActualPickupTime',
  'Pickup Time',
  'Time',
  'The actual pickup time.',
  '0..1',
  undefined,
  undefined
)

export const PickupFieldMetaEarliestPickupDate = new FieldMeta<PickupField>(
  PickupField.EarliestPickupDate,
  'EarliestPickupDate',
  'Pickup Date',
  'Date',
  'The earliest pickup date.',
  '0..1',
  undefined,
  undefined
)

export const PickupFieldMetaEarliestPickupTime = new FieldMeta<PickupField>(
  PickupField.EarliestPickupTime,
  'EarliestPickupTime',
  'Pickup Time',
  'Time',
  'The earliest pickup time.',
  '0..1',
  undefined,
  undefined
)

export const PickupFieldMetaLatestPickupDate = new FieldMeta<PickupField>(
  PickupField.LatestPickupDate,
  'LatestPickupDate',
  'Pickup Date',
  'Date',
  'The latest pickup date.',
  '0..1',
  undefined,
  undefined
)

export const PickupFieldMetaLatestPickupTime = new FieldMeta<PickupField>(
  PickupField.LatestPickupTime,
  'LatestPickupTime',
  'Pickup Time',
  'Time',
  'The latest pickup time.',
  '0..1',
  undefined,
  undefined
)

export const PickupFieldMetaPickupLocation = new FieldMeta<PickupField>(
  PickupField.PickupLocation,
  'PickupLocation',
  'Location',
  'Location',
  'The pickup location.',
  '0..1',
  undefined,
  undefined
)

export const PickupFieldMetaPickupParty = new FieldMeta<PickupField>(
  PickupField.PickupParty,
  'PickupParty',
  'Party',
  'Party',
  'The party responsible for picking up a delivery.',
  '0..1',
  undefined,
  undefined
)

export class PickupFieldMeta {
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
