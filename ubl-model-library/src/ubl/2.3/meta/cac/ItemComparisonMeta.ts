import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ItemComparisonField {
  UBLExtensions = 'UBLExtensions',
  PriceAmount = 'PriceAmount',
  Quantity = 'Quantity'
}

export const ItemComparisonFieldMetaUBLExtensions = new FieldMeta<ItemComparisonField>(
  ItemComparisonField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemComparisonFieldMetaPriceAmount = new FieldMeta<ItemComparisonField>(
  ItemComparisonField.PriceAmount,
  'PriceAmount',
  'Price Amount',
  AmountType.name,
  'The price for the Item Comparison',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemComparisonFieldMetaQuantity = new FieldMeta<ItemComparisonField>(
  ItemComparisonField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity for which this comparison is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const ItemComparisonType: Type<ItemComparisonField> = {
  name: 'ItemComparison',
  label: 'Item Comparison',
  module: TypeModule.cac,
  definition: 'A class to provide information about price and quantity of an item for use in price comparisons based on price, quantity, or measurements.',
  fields: ItemComparisonFieldMap,
}
