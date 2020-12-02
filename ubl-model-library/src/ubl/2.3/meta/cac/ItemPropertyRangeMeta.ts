import { FieldMeta } from '../FieldMeta'

export enum ItemPropertyRangeField {
  UBLExtensions = 'UBLExtensions',
  MinimumValue = 'MinimumValue',
  MaximumValue = 'MaximumValue'
}

export const ItemPropertyRangeFieldMetaUBLExtensions = new FieldMeta<ItemPropertyRangeField>(
  ItemPropertyRangeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ItemPropertyRangeFieldMetaMinimumValue = new FieldMeta<ItemPropertyRangeField>(
  ItemPropertyRangeField.MinimumValue,
  'MinimumValue',
  'Minimum Value',
  'Text',
  'The minimum value in this range of values.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemPropertyRangeFieldMetaMaximumValue = new FieldMeta<ItemPropertyRangeField>(
  ItemPropertyRangeField.MaximumValue,
  'MaximumValue',
  'Maximum Value',
  'Text',
  'The maximum value in this range of values.',
  '0..1',
  'cbc',
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
