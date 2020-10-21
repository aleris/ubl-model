import { FieldMeta } from '../../FieldMeta'

export enum SalesItemField {
  Quantity = 'Quantity',
  ActivityProperty = 'ActivityProperty',
  TaxExclusivePrice = 'TaxExclusivePrice',
  TaxInclusivePrice = 'TaxInclusivePrice',
  Item = 'Item'
}

export const SalesItemFieldMetaQuantity = new FieldMeta<SalesItemField>(
  SalesItemField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity the given information are related to',
  '1',
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
  undefined,
  undefined
)

export const SalesItemFieldMetaTaxExclusivePrice = new FieldMeta<SalesItemField>(
  SalesItemField.TaxExclusivePrice,
  'TaxExclusivePrice',
  'Price',
  'Price',
  'A price for this sales item, exclusive of tax.',
  '0..n',
  undefined,
  undefined
)

export const SalesItemFieldMetaTaxInclusivePrice = new FieldMeta<SalesItemField>(
  SalesItemField.TaxInclusivePrice,
  'TaxInclusivePrice',
  'Price',
  'Price',
  'A price for this sales item, including tax.',
  '0..n',
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
  undefined,
  undefined
)

export class SalesItemFieldMeta {
  public static readonly Quantity = SalesItemFieldMetaQuantity
  public static readonly ActivityProperty = SalesItemFieldMetaActivityProperty
  public static readonly TaxExclusivePrice = SalesItemFieldMetaTaxExclusivePrice
  public static readonly TaxInclusivePrice = SalesItemFieldMetaTaxInclusivePrice
  public static readonly Item = SalesItemFieldMetaItem
}

export const SalesItemFieldMap = new Map([
  [SalesItemField.Quantity, SalesItemFieldMetaQuantity],
  [SalesItemField.ActivityProperty, SalesItemFieldMetaActivityProperty],
  [SalesItemField.TaxExclusivePrice, SalesItemFieldMetaTaxExclusivePrice],
  [SalesItemField.TaxInclusivePrice, SalesItemFieldMetaTaxInclusivePrice],
  [SalesItemField.Item, SalesItemFieldMetaItem]
])
