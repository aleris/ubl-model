import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ItemPropertyRangeField {
  UBLExtensions = 'UBLExtensions',
  MinimumValue = 'MinimumValue',
  MaximumValue = 'MaximumValue'
}

export const ItemPropertyRangeFieldMetaUBLExtensions = new FieldMeta<ItemPropertyRangeField>(
  ItemPropertyRangeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemPropertyRangeFieldMetaMinimumValue = new FieldMeta<ItemPropertyRangeField>(
  ItemPropertyRangeField.MinimumValue,
  'MinimumValue',
  'Minimum Value',
  TextType.name,
  'The minimum value in this range of values.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemPropertyRangeFieldMetaMaximumValue = new FieldMeta<ItemPropertyRangeField>(
  ItemPropertyRangeField.MaximumValue,
  'MaximumValue',
  'Maximum Value',
  TextType.name,
  'The maximum value in this range of values.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ItemPropertyRangeFieldMeta {
  public static readonly UBLExtensions = ItemPropertyRangeFieldMetaUBLExtensions
  public static readonly MinimumValue = ItemPropertyRangeFieldMetaMinimumValue
  public static readonly MaximumValue = ItemPropertyRangeFieldMetaMaximumValue
}

export const ItemPropertyRangeFieldMap = new Map([
  [ItemPropertyRangeField.UBLExtensions, ItemPropertyRangeFieldMetaUBLExtensions],
  [ItemPropertyRangeField.MinimumValue, ItemPropertyRangeFieldMetaMinimumValue],
  [ItemPropertyRangeField.MaximumValue, ItemPropertyRangeFieldMetaMaximumValue]
])

export const ItemPropertyRangeType: Type<ItemPropertyRangeField> = {
  name: 'ItemPropertyRange',
  label: 'Item Property Range',
  module: TypeModule.cac,
  definition: 'A class to describe a range of values for an item property.',
  fields: ItemPropertyRangeFieldMap,
}
