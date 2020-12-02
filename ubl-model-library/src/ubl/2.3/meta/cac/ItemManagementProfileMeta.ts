import { FieldMeta } from '../FieldMeta'

export enum ItemManagementProfileField {
  UBLExtensions = 'UBLExtensions',
  FrozenPeriodDaysNumeric = 'FrozenPeriodDaysNumeric',
  MinimumInventoryQuantity = 'MinimumInventoryQuantity',
  MultipleOrderQuantity = 'MultipleOrderQuantity',
  OrderIntervalDaysNumeric = 'OrderIntervalDaysNumeric',
  ReplenishmentOwnerDescription = 'ReplenishmentOwnerDescription',
  TargetServicePercent = 'TargetServicePercent',
  TargetInventoryQuantity = 'TargetInventoryQuantity',
  EffectivePeriod = 'EffectivePeriod',
  Item = 'Item',
  ItemLocationQuantity = 'ItemLocationQuantity'
}

export const ItemManagementProfileFieldMetaUBLExtensions = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaFrozenPeriodDaysNumeric = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.FrozenPeriodDaysNumeric,
  'FrozenPeriodDaysNumeric',
  'Frozen Period Days',
  'Numeric',
  'The number of days in the future that an order forecast quantity automatically becomes a confirmed order for a product.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaMinimumInventoryQuantity = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.MinimumInventoryQuantity,
  'MinimumInventoryQuantity',
  'Minimum Inventory Quantity',
  'Quantity',
  'The quantity of the item that should trigger a replenishment order to avoid depleting the safety stock.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaMultipleOrderQuantity = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.MultipleOrderQuantity,
  'MultipleOrderQuantity',
  'Multiple Order Quantity',
  'Quantity',
  'The order quantity multiples in which the product may be ordered.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaOrderIntervalDaysNumeric = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.OrderIntervalDaysNumeric,
  'OrderIntervalDaysNumeric',
  'Order Interval Days',
  'Numeric',
  'The number of days between regular replenishment orders for the product.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaReplenishmentOwnerDescription = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.ReplenishmentOwnerDescription,
  'ReplenishmentOwnerDescription',
  'Replenishment Owner Description',
  'Text',
  'The trading partner maintaining this item management profile.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaTargetServicePercent = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.TargetServicePercent,
  'TargetServicePercent',
  'Target Service Percent',
  'Numeric',
  'The Unit Service Level the trading partners expect to be maintained, expressed as a percentage. Unite Service Level (USL) is a term used in Inventory Management, which is sometimes known as "fill rate", counts the average number of units short expressed as the percentage of the order quantity.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaTargetInventoryQuantity = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.TargetInventoryQuantity,
  'TargetInventoryQuantity',
  'Target Inventory Quantity',
  'Quantity',
  'The target inventory quantity.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaEffectivePeriod = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.EffectivePeriod,
  'EffectivePeriod',
  'Effective Period',
  'Period',
  'The period during which this profile is effective.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaItem = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.Item,
  'Item',
  'Item',
  'Item',
  'The item associated with this item management profile.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaItemLocationQuantity = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.ItemLocationQuantity,
  'ItemLocationQuantity',
  'Item Location Quantity',
  'ItemLocationQuantity',
  'A set of location-specific properties (e.g., price and quantity) associated with the item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class ItemManagementProfileFieldMeta {
  public static readonly UBLExtensions = ItemManagementProfileFieldMetaUBLExtensions
  public static readonly FrozenPeriodDaysNumeric = ItemManagementProfileFieldMetaFrozenPeriodDaysNumeric
  public static readonly MinimumInventoryQuantity = ItemManagementProfileFieldMetaMinimumInventoryQuantity
  public static readonly MultipleOrderQuantity = ItemManagementProfileFieldMetaMultipleOrderQuantity
  public static readonly OrderIntervalDaysNumeric = ItemManagementProfileFieldMetaOrderIntervalDaysNumeric
  public static readonly ReplenishmentOwnerDescription = ItemManagementProfileFieldMetaReplenishmentOwnerDescription
  public static readonly TargetServicePercent = ItemManagementProfileFieldMetaTargetServicePercent
  public static readonly TargetInventoryQuantity = ItemManagementProfileFieldMetaTargetInventoryQuantity
  public static readonly EffectivePeriod = ItemManagementProfileFieldMetaEffectivePeriod
  public static readonly Item = ItemManagementProfileFieldMetaItem
  public static readonly ItemLocationQuantity = ItemManagementProfileFieldMetaItemLocationQuantity
}

export const ItemManagementProfileFieldMap = new Map([
  [ItemManagementProfileField.UBLExtensions, ItemManagementProfileFieldMetaUBLExtensions],
  [ItemManagementProfileField.FrozenPeriodDaysNumeric, ItemManagementProfileFieldMetaFrozenPeriodDaysNumeric],
  [ItemManagementProfileField.MinimumInventoryQuantity, ItemManagementProfileFieldMetaMinimumInventoryQuantity],
  [ItemManagementProfileField.MultipleOrderQuantity, ItemManagementProfileFieldMetaMultipleOrderQuantity],
  [ItemManagementProfileField.OrderIntervalDaysNumeric, ItemManagementProfileFieldMetaOrderIntervalDaysNumeric],
  [ItemManagementProfileField.ReplenishmentOwnerDescription, ItemManagementProfileFieldMetaReplenishmentOwnerDescription],
  [ItemManagementProfileField.TargetServicePercent, ItemManagementProfileFieldMetaTargetServicePercent],
  [ItemManagementProfileField.TargetInventoryQuantity, ItemManagementProfileFieldMetaTargetInventoryQuantity],
  [ItemManagementProfileField.EffectivePeriod, ItemManagementProfileFieldMetaEffectivePeriod],
  [ItemManagementProfileField.Item, ItemManagementProfileFieldMetaItem],
  [ItemManagementProfileField.ItemLocationQuantity, ItemManagementProfileFieldMetaItemLocationQuantity]
])
