import { FieldMeta } from '../../FieldMeta'

export enum ItemComparisonField {
  PriceAmount = 'PriceAmount',
  Quantity = 'Quantity'
}

export const ItemComparisonFieldMetaPriceAmount = new FieldMeta<ItemComparisonField>(
  ItemComparisonField.PriceAmount,
  'PriceAmount',
  'Price Amount',
  'Amount',
  'The price for the Item Comparison',
  '0..1',
  undefined,
  undefined
)

export const ItemComparisonFieldMetaQuantity = new FieldMeta<ItemComparisonField>(
  ItemComparisonField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity for which this comparison is valid.',
  '0..1',
  undefined,
  'per unit'
)

export class ItemComparisonFieldMeta {
  public static readonly PriceAmount = ItemComparisonFieldMetaPriceAmount
  public static readonly Quantity = ItemComparisonFieldMetaQuantity
}

export const ItemComparisonFieldMap = new Map([
  [ItemComparisonField.PriceAmount, ItemComparisonFieldMetaPriceAmount],
  [ItemComparisonField.Quantity, ItemComparisonFieldMetaQuantity]
])
