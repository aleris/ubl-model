import { FieldMeta } from '../FieldMeta'

export enum ItemLocationQuantityField {
  UBLExtensions = 'UBLExtensions',
  LeadTimeMeasure = 'LeadTimeMeasure',
  MinimumQuantity = 'MinimumQuantity',
  MaximumQuantity = 'MaximumQuantity',
  HazardousRiskIndicator = 'HazardousRiskIndicator',
  TradingRestrictions = 'TradingRestrictions',
  ApplicableTerritoryAddress = 'ApplicableTerritoryAddress',
  Price = 'Price',
  DeliveryUnit = 'DeliveryUnit',
  ApplicableTaxCategory = 'ApplicableTaxCategory',
  Package = 'Package',
  AllowanceCharge = 'AllowanceCharge',
  DependentPriceReference = 'DependentPriceReference'
}

export const ItemLocationQuantityFieldMetaUBLExtensions = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaLeadTimeMeasure = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.LeadTimeMeasure,
  'LeadTimeMeasure',
  'Lead Time',
  'Measure',
  'The lead time, i.e., the time taken from the time at which an item is ordered to the time of its delivery.',
  '0..1',
  'cbc',
  undefined,
  '2 days , 24 hours'
)

export const ItemLocationQuantityFieldMetaMinimumQuantity = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  'Quantity',
  'The minimum quantity that can be ordered to qualify for a specific price.',
  '0..1',
  'cbc',
  undefined,
  '10 boxes , 1 carton , 1000 sheets'
)

export const ItemLocationQuantityFieldMetaMaximumQuantity = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  'Quantity',
  'The maximum quantity that can be ordered to qualify for a specific price.',
  '0..1',
  'cbc',
  undefined,
  '10 boxes , 1 carton , 1000 sheets'
)

export const ItemLocationQuantityFieldMetaHazardousRiskIndicator = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Hazardous Risk Indicator',
  'Indicator',
  'An indication that the transported item, as delivered, in the stated quantity to the stated location, is subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'Default is negative'
)

export const ItemLocationQuantityFieldMetaTradingRestrictions = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.TradingRestrictions,
  'TradingRestrictions',
  'Trading Restrictions',
  'Text',
  'Text describing trade restrictions on the quantity of this item or on the item itself.',
  '0..n',
  'cbc',
  undefined,
  'not for export'
)

export const ItemLocationQuantityFieldMetaApplicableTerritoryAddress = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.ApplicableTerritoryAddress,
  'ApplicableTerritoryAddress',
  'Applicable Territory Address',
  'Address',
  'The applicable sales territory.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaPrice = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.Price,
  'Price',
  'Price',
  'Price',
  'The price associated with the given location.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaDeliveryUnit = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.DeliveryUnit,
  'DeliveryUnit',
  'Delivery Unit',
  'DeliveryUnit',
  'A delivery unit in which the item is located.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaApplicableTaxCategory = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.ApplicableTaxCategory,
  'ApplicableTaxCategory',
  'Applicable Tax Category',
  'TaxCategory',
  'A tax category applicable to this item location quantity.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaPackage = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.Package,
  'Package',
  'Package',
  'Package',
  'The package to which this price applies.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaAllowanceCharge = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charge associated with this item location quantity.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaDependentPriceReference = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.DependentPriceReference,
  'DependentPriceReference',
  'Dependent Price Reference',
  'DependentPriceReference',
  'The price of the item as a percentage of the price of some other item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class ItemLocationQuantityFieldMeta {
  public static readonly UBLExtensions = ItemLocationQuantityFieldMetaUBLExtensions
  public static readonly LeadTimeMeasure = ItemLocationQuantityFieldMetaLeadTimeMeasure
  public static readonly MinimumQuantity = ItemLocationQuantityFieldMetaMinimumQuantity
  public static readonly MaximumQuantity = ItemLocationQuantityFieldMetaMaximumQuantity
  public static readonly HazardousRiskIndicator = ItemLocationQuantityFieldMetaHazardousRiskIndicator
  public static readonly TradingRestrictions = ItemLocationQuantityFieldMetaTradingRestrictions
  public static readonly ApplicableTerritoryAddress = ItemLocationQuantityFieldMetaApplicableTerritoryAddress
  public static readonly Price = ItemLocationQuantityFieldMetaPrice
  public static readonly DeliveryUnit = ItemLocationQuantityFieldMetaDeliveryUnit
  public static readonly ApplicableTaxCategory = ItemLocationQuantityFieldMetaApplicableTaxCategory
  public static readonly Package = ItemLocationQuantityFieldMetaPackage
  public static readonly AllowanceCharge = ItemLocationQuantityFieldMetaAllowanceCharge
  public static readonly DependentPriceReference = ItemLocationQuantityFieldMetaDependentPriceReference
}

export const ItemLocationQuantityFieldMap = new Map([
  [ItemLocationQuantityField.UBLExtensions, ItemLocationQuantityFieldMetaUBLExtensions],
  [ItemLocationQuantityField.LeadTimeMeasure, ItemLocationQuantityFieldMetaLeadTimeMeasure],
  [ItemLocationQuantityField.MinimumQuantity, ItemLocationQuantityFieldMetaMinimumQuantity],
  [ItemLocationQuantityField.MaximumQuantity, ItemLocationQuantityFieldMetaMaximumQuantity],
  [ItemLocationQuantityField.HazardousRiskIndicator, ItemLocationQuantityFieldMetaHazardousRiskIndicator],
  [ItemLocationQuantityField.TradingRestrictions, ItemLocationQuantityFieldMetaTradingRestrictions],
  [ItemLocationQuantityField.ApplicableTerritoryAddress, ItemLocationQuantityFieldMetaApplicableTerritoryAddress],
  [ItemLocationQuantityField.Price, ItemLocationQuantityFieldMetaPrice],
  [ItemLocationQuantityField.DeliveryUnit, ItemLocationQuantityFieldMetaDeliveryUnit],
  [ItemLocationQuantityField.ApplicableTaxCategory, ItemLocationQuantityFieldMetaApplicableTaxCategory],
  [ItemLocationQuantityField.Package, ItemLocationQuantityFieldMetaPackage],
  [ItemLocationQuantityField.AllowanceCharge, ItemLocationQuantityFieldMetaAllowanceCharge],
  [ItemLocationQuantityField.DependentPriceReference, ItemLocationQuantityFieldMetaDependentPriceReference]
])
