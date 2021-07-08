import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ActivityPropertyType } from './ActivityPropertyMeta'
import { ItemType } from './ItemMeta'
import { PriceType } from './PriceMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum SalesItemField {
  UBLExtensions = 'UBLExtensions',
  Quantity = 'Quantity',
  ActivityProperty = 'ActivityProperty',
  TaxExclusivePrice = 'TaxExclusivePrice',
  TaxInclusivePrice = 'TaxInclusivePrice',
  Item = 'Item'
}

export const SalesItemFieldMetaUBLExtensions = new FieldMeta<SalesItemField>(
  SalesItemField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const SalesItemFieldMetaQuantity = new FieldMeta<SalesItemField>(
  SalesItemField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity the given information are related to',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const SalesItemFieldMetaActivityProperty = new FieldMeta<SalesItemField>(
  SalesItemField.ActivityProperty,
  'ActivityProperty',
  'Activity Property',
  ActivityPropertyType.name,
  'A class to describe the activity (for example "sales", "movement", ...) related to the item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SalesItemFieldMetaTaxExclusivePrice = new FieldMeta<SalesItemField>(
  SalesItemField.TaxExclusivePrice,
  'TaxExclusivePrice',
  'Tax Exclusive Price',
  PriceType.name,
  'A price for this sales item, exclusive of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SalesItemFieldMetaTaxInclusivePrice = new FieldMeta<SalesItemField>(
  SalesItemField.TaxInclusivePrice,
  'TaxInclusivePrice',
  'Tax Inclusive Price',
  PriceType.name,
  'A price for this sales item, including tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const SalesItemFieldMetaItem = new FieldMeta<SalesItemField>(
  SalesItemField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The sales item itself.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class SalesItemFieldMeta {
  public static readonly UBLExtensions = SalesItemFieldMetaUBLExtensions
  public static readonly Quantity = SalesItemFieldMetaQuantity
  public static readonly ActivityProperty = SalesItemFieldMetaActivityProperty
  public static readonly TaxExclusivePrice = SalesItemFieldMetaTaxExclusivePrice
  public static readonly TaxInclusivePrice = SalesItemFieldMetaTaxInclusivePrice
  public static readonly Item = SalesItemFieldMetaItem
}

export const SalesItemFieldMap = new Map([
  [SalesItemField.UBLExtensions, SalesItemFieldMetaUBLExtensions],
  [SalesItemField.Quantity, SalesItemFieldMetaQuantity],
  [SalesItemField.ActivityProperty, SalesItemFieldMetaActivityProperty],
  [SalesItemField.TaxExclusivePrice, SalesItemFieldMetaTaxExclusivePrice],
  [SalesItemField.TaxInclusivePrice, SalesItemFieldMetaTaxInclusivePrice],
  [SalesItemField.Item, SalesItemFieldMetaItem]
])

export const SalesItemType: Type<SalesItemField> = {
  name: 'SalesItem',
  label: 'Sales Item',
  module: TypeModule.cac,
  definition: 'A class to describe information related to an item in a sales context',
  fields: SalesItemFieldMap,
}
