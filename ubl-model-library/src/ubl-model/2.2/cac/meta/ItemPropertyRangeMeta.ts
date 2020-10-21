import { FieldMeta } from '../../FieldMeta'

export enum ItemPropertyRangeField {
  MinimumValue = 'MinimumValue',
  MaximumValue = 'MaximumValue'
}

export const ItemPropertyRangeFieldMetaMinimumValue = new FieldMeta<ItemPropertyRangeField>(
  ItemPropertyRangeField.MinimumValue,
  'MinimumValue',
  'Value',
  'Text',
  'The minimum value in this range of values.',
  '0..1',
  undefined,
  undefined
)

export const ItemPropertyRangeFieldMetaMaximumValue = new FieldMeta<ItemPropertyRangeField>(
  ItemPropertyRangeField.MaximumValue,
  'MaximumValue',
  'Value',
  'Text',
  'The maximum value in this range of values.',
  '0..1',
  undefined,
  undefined
)

export class ItemPropertyRangeFieldMeta {
  public static readonly MinimumValue = ItemPropertyRangeFieldMetaMinimumValue
  public static readonly MaximumValue = ItemPropertyRangeFieldMetaMaximumValue
}

export const ItemPropertyRangeFieldMap = new Map([
  [ItemPropertyRangeField.MinimumValue, ItemPropertyRangeFieldMetaMinimumValue],
  [ItemPropertyRangeField.MaximumValue, ItemPropertyRangeFieldMetaMaximumValue]
])
