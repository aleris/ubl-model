import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ItemType } from './ItemMeta'
import { ItemLocationQuantityType } from './ItemLocationQuantityMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PeriodType } from './PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaFrozenPeriodDaysNumeric = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.FrozenPeriodDaysNumeric,
  'FrozenPeriodDaysNumeric',
  'Frozen Period Days',
  NumericType.name,
  'The number of days in the future that an order forecast quantity automatically becomes a confirmed order for a product.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaMinimumInventoryQuantity = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.MinimumInventoryQuantity,
  'MinimumInventoryQuantity',
  'Minimum Inventory Quantity',
  QuantityType.name,
  'The quantity of the item that should trigger a replenishment order to avoid depleting the safety stock.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaMultipleOrderQuantity = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.MultipleOrderQuantity,
  'MultipleOrderQuantity',
  'Multiple Order Quantity',
  QuantityType.name,
  'The order quantity multiples in which the product may be ordered.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaOrderIntervalDaysNumeric = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.OrderIntervalDaysNumeric,
  'OrderIntervalDaysNumeric',
  'Order Interval Days',
  NumericType.name,
  'The number of days between regular replenishment orders for the product.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaReplenishmentOwnerDescription = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.ReplenishmentOwnerDescription,
  'ReplenishmentOwnerDescription',
  'Replenishment Owner Description',
  TextType.name,
  'The trading partner maintaining this item management profile.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaTargetServicePercent = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.TargetServicePercent,
  'TargetServicePercent',
  'Target Service Percent',
  NumericType.name,
  'The Unit Service Level the trading partners expect to be maintained, expressed as a percentage. Unite Service Level (USL) is a term used in Inventory Management, which is sometimes known as "fill rate", counts the average number of units short expressed as the percentage of the order quantity.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaTargetInventoryQuantity = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.TargetInventoryQuantity,
  'TargetInventoryQuantity',
  'Target Inventory Quantity',
  QuantityType.name,
  'The target inventory quantity.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaEffectivePeriod = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.EffectivePeriod,
  'EffectivePeriod',
  'Effective Period',
  PeriodType.name,
  'The period during which this profile is effective.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaItem = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.Item,
  'Item',
  'Item',
  ItemType.name,
  'The item associated with this item management profile.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemManagementProfileFieldMetaItemLocationQuantity = new FieldMeta<ItemManagementProfileField>(
  ItemManagementProfileField.ItemLocationQuantity,
  'ItemLocationQuantity',
  'Item Location Quantity',
  ItemLocationQuantityType.name,
  'A set of location-specific properties (e.g., price and quantity) associated with the item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const ItemManagementProfileType: Type<ItemManagementProfileField> = {
  name: 'ItemManagementProfile',
  label: 'Item Management Profile',
  module: TypeModule.cac,
  definition: 'A class to define a management profile for an item.',
  fields: ItemManagementProfileFieldMap,
}
