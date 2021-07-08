import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ItemPropertyType } from './ItemPropertyMeta'
import { LotIdentificationType } from './LotIdentificationMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ItemInstanceField {
  UBLExtensions = 'UBLExtensions',
  ProductTraceID = 'ProductTraceID',
  ManufactureDate = 'ManufactureDate',
  ManufactureTime = 'ManufactureTime',
  BestBeforeDate = 'BestBeforeDate',
  RegistrationID = 'RegistrationID',
  SerialID = 'SerialID',
  AdditionalItemProperty = 'AdditionalItemProperty',
  LotIdentification = 'LotIdentification'
}

export const ItemInstanceFieldMetaUBLExtensions = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemInstanceFieldMetaProductTraceID = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.ProductTraceID,
  'ProductTraceID',
  'Product Trace Identifier',
  IdentifierType.name,
  'An identifier used for tracing this item instance, such as the EPC number used in RFID.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInstanceFieldMetaManufactureDate = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.ManufactureDate,
  'ManufactureDate',
  'Manufacture Date',
  DateType.name,
  'The date on which this item instance was manufactured.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInstanceFieldMetaManufactureTime = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.ManufactureTime,
  'ManufactureTime',
  'Manufacture Time',
  TimeType.name,
  'The time at which this item instance was manufactured.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInstanceFieldMetaBestBeforeDate = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.BestBeforeDate,
  'BestBeforeDate',
  'Best Before Date',
  DateType.name,
  'The date before which it is best to use this item instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInstanceFieldMetaRegistrationID = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.RegistrationID,
  'RegistrationID',
  'Registration Identifier',
  IdentifierType.name,
  'The registration identifier of this item instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'car registration or licensing number'
)

export const ItemInstanceFieldMetaSerialID = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.SerialID,
  'SerialID',
  'Serial Identifier',
  IdentifierType.name,
  'The serial number of this item instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'chassis number of a car'
)

export const ItemInstanceFieldMetaAdditionalItemProperty = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.AdditionalItemProperty,
  'AdditionalItemProperty',
  'Additional Item Property',
  ItemPropertyType.name,
  'An additional property of this item instance.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemInstanceFieldMetaLotIdentification = new FieldMeta<ItemInstanceField>(
  ItemInstanceField.LotIdentification,
  'LotIdentification',
  'Lot Identification',
  LotIdentificationType.name,
  'The lot identifier of this item instance (the identifier that allows recall of the item if necessary).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ItemInstanceFieldMeta {
  public static readonly UBLExtensions = ItemInstanceFieldMetaUBLExtensions
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
  [ItemInstanceField.UBLExtensions, ItemInstanceFieldMetaUBLExtensions],
  [ItemInstanceField.ProductTraceID, ItemInstanceFieldMetaProductTraceID],
  [ItemInstanceField.ManufactureDate, ItemInstanceFieldMetaManufactureDate],
  [ItemInstanceField.ManufactureTime, ItemInstanceFieldMetaManufactureTime],
  [ItemInstanceField.BestBeforeDate, ItemInstanceFieldMetaBestBeforeDate],
  [ItemInstanceField.RegistrationID, ItemInstanceFieldMetaRegistrationID],
  [ItemInstanceField.SerialID, ItemInstanceFieldMetaSerialID],
  [ItemInstanceField.AdditionalItemProperty, ItemInstanceFieldMetaAdditionalItemProperty],
  [ItemInstanceField.LotIdentification, ItemInstanceFieldMetaLotIdentification]
])

export const ItemInstanceType: Type<ItemInstanceField> = {
  name: 'ItemInstance',
  label: 'Item Instance',
  module: TypeModule.cac,
  definition: 'A class to describe a specific, trackable instance of an item.',
  fields: ItemInstanceFieldMap,
}
