import { FieldMeta } from '../FieldMeta'

export enum ItemComparisonField {
  UBLExtensions = 'UBLExtensions',
  PriceAmount = 'PriceAmount',
  Quantity = 'Quantity'
}

export const ItemComparisonFieldMetaUBLExtensions = new FieldMeta<ItemComparisonField>(
  ItemComparisonField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ItemComparisonFieldMetaPriceAmount = new FieldMeta<ItemComparisonField>(
  ItemComparisonField.PriceAmount,
  'PriceAmount',
  'Price Amount',
  'Amount',
  'The price for the Item Comparison',
  '0..1',
  'cbc',
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
  'cbc',
  undefined,
  'per unit'
)

export class ItemComparisonFieldMeta {
  public static readonly UBLExtensions = ItemComparisonFieldMetaUBLExtensions
  public static readonly PriceAmount = ItemComparisonFieldMetaPriceAmount
  public static readonly Quantity = ItemComparisonFieldMetaQuantity
}

export const ItemComparisonFieldMap = new Map([
  [ItemComparisonField.UBLExtensions, ItemComparisonFieldMetaUBLExtensions],
  [ItemComparisonField.PriceAmount, ItemComparisonFieldMetaPriceAmount],
  [ItemComparisonField.Quantity, ItemComparisonFieldMetaQuantity]
])
