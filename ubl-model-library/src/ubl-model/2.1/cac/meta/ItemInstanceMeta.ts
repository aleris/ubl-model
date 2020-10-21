import { FieldMeta } from '../../FieldMeta'

export enum ItemInstanceField {
  ProductTraceID = 'ProductTraceID',
  ManufactureDate = 'ManufactureDate',
  ManufactureTime = 'ManufactureTime',
  BestBeforeDate = 'BestBeforeDate',
  RegistrationID = 'RegistrationID',
  SerialID = 'SerialID',
  AdditionalItemProperty = 'AdditionalItemProperty',
  LotIdentification = 'LotIdentification'
}

export const ItemInstanceFieldMetaProductTraceID = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.ProductTraceID,
  'ProductTraceID',
  'Identifier',
  'Identifier',
  'An identifier used for tracing this item instance, such as the EPC number used in RFID.',
  '0..1',
  undefined,
  undefined
)

export const ItemInstanceFieldMetaManufactureDate = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.ManufactureDate,
  'ManufactureDate',
  'Manufacture Date',
  'Date',
  'The date on which this item instance was manufactured.',
  '0..1',
  undefined,
  undefined
)

export const ItemInstanceFieldMetaManufactureTime = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.ManufactureTime,
  'ManufactureTime',
  'Manufacture Time',
  'Time',
  'The time at which this item instance was manufactured.',
  '0..1',
  undefined,
  undefined
)

export const ItemInstanceFieldMetaBestBeforeDate = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.BestBeforeDate,
  'BestBeforeDate',
  'Best Before Date',
  'Date',
  'The date before which it is best to use this item instance.',
  '0..1',
  undefined,
  undefined
)

export const ItemInstanceFieldMetaRegistrationID = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.RegistrationID,
  'RegistrationID',
  'Registration Identifier',
  'Identifier',
  'The registration identifier of this item instance.',
  '0..1',
  undefined,
  'car registration or licensing number'
)

export const ItemInstanceFieldMetaSerialID = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.SerialID,
  'SerialID',
  'Serial Identifier',
  'Identifier',
  'The serial number of this item instance.',
  '0..1',
  undefined,
  'chassis number of a car'
)

export const ItemInstanceFieldMetaAdditionalItemProperty = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.AdditionalItemProperty,
  'AdditionalItemProperty',
  'Item Property',
  'ItemProperty',
  'An additional property of this item instance.',
  '0..n',
  undefined,
  undefined
)

export const ItemInstanceFieldMetaLotIdentification = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.LotIdentification,
  'LotIdentification',
  'Lot Identification',
  'LotIdentification',
  'The lot identifier of this item instance (the identifier that allows recall of the item if necessary).',
  '0..1',
  undefined,
  undefined
)

export class ItemInstanceFieldMeta {
  public static readonly ProductTraceID = ItemInstanceFieldMetaProductTraceID
  public static readonly ManufactureDate = ItemInstanceFieldMetaManufactureDate
  public static readonly ManufactureTime = ItemInstanceFieldMetaManufactureTime
  public static readonly BestBeforeDate = ItemInstanceFieldMetaBestBeforeDate
  public static readonly RegistrationID = ItemInstanceFieldMetaRegistrationID
  public static readonly SerialID = ItemInstanceFieldMetaSerialID
  public static readonly AdditionalItemProperty = ItemInstanceFieldMetaAdditionalItemProperty
  public static readonly LotIdentification = ItemInstanceFieldMetaLotIdentification
}

export const ItemInstanceFieldMap = new Map([
  [ItemInstanceField.ProductTraceID, ItemInstanceFieldMetaProductTraceID],
  [ItemInstanceField.ManufactureDate, ItemInstanceFieldMetaManufactureDate],
  [ItemInstanceField.ManufactureTime, ItemInstanceFieldMetaManufactureTime],
  [ItemInstanceField.BestBeforeDate, ItemInstanceFieldMetaBestBeforeDate],
  [ItemInstanceField.RegistrationID, ItemInstanceFieldMetaRegistrationID],
  [ItemInstanceField.SerialID, ItemInstanceFieldMetaSerialID],
  [ItemInstanceField.AdditionalItemProperty, ItemInstanceFieldMetaAdditionalItemProperty],
  [ItemInstanceField.LotIdentification, ItemInstanceFieldMetaLotIdentification]
])
