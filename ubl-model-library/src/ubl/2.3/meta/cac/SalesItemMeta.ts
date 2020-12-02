import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const SalesItemFieldMetaQuantity = new FieldMeta<SalesItemField>(
  SalesItemField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity the given information are related to',
  '1',
  'cbc',
  undefined,
  undefined
)

export const SalesItemFieldMetaActivityProperty = new FieldMeta<SalesItemField>(
  SalesItemField.ActivityProperty,
  'ActivityProperty',
  'Activity Property',
  'ActivityProperty',
  'A class to describe the activity (for example "sales", "movement", ...) related to the item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SalesItemFieldMetaTaxExclusivePrice = new FieldMeta<SalesItemField>(
  SalesItemField.TaxExclusivePrice,
  'TaxExclusivePrice',
  'Tax Exclusive Price',
  'Price',
  'A price for this sales item, exclusive of tax.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SalesItemFieldMetaTaxInclusivePrice = new FieldMeta<SalesItemField>(
  SalesItemField.TaxInclusivePrice,
  'TaxInclusivePrice',
  'Tax Inclusive Price',
  'Price',
  'A price for this sales item, including tax.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const SalesItemFieldMetaItem = new FieldMeta<SalesItemField>(
  SalesItemField.Item,
  'Item',
  'Item',
  'Item',
  'The sales item itself.',
  '1',
  'cac',
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
