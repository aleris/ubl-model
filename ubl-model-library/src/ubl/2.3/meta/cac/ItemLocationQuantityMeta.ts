import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AddressType } from './AddressMeta'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { DeliveryUnitType } from './DeliveryUnitMeta'
import { DependentPriceReferenceType } from './DependentPriceReferenceMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { PackageType } from './PackageMeta'
import { PriceType } from './PriceMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TaxCategoryType } from './TaxCategoryMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaLeadTimeMeasure = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.LeadTimeMeasure,
  'LeadTimeMeasure',
  'Lead Time',
  MeasureType.name,
  'The lead time, i.e., the time taken from the time at which an item is ordered to the time of its delivery.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2 days , 24 hours'
)

export const ItemLocationQuantityFieldMetaMinimumQuantity = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.MinimumQuantity,
  'MinimumQuantity',
  'Minimum Quantity',
  QuantityType.name,
  'The minimum quantity that can be ordered to qualify for a specific price.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '10 boxes , 1 carton , 1000 sheets'
)

export const ItemLocationQuantityFieldMetaMaximumQuantity = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.MaximumQuantity,
  'MaximumQuantity',
  'Maximum Quantity',
  QuantityType.name,
  'The maximum quantity that can be ordered to qualify for a specific price.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '10 boxes , 1 carton , 1000 sheets'
)

export const ItemLocationQuantityFieldMetaHazardousRiskIndicator = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Hazardous Risk Indicator',
  IndicatorType.name,
  'An indication that the transported item, as delivered, in the stated quantity to the stated location, is subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Default is negative'
)

export const ItemLocationQuantityFieldMetaTradingRestrictions = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.TradingRestrictions,
  'TradingRestrictions',
  'Trading Restrictions',
  TextType.name,
  'Text describing trade restrictions on the quantity of this item or on the item itself.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'not for export'
)

export const ItemLocationQuantityFieldMetaApplicableTerritoryAddress = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.ApplicableTerritoryAddress,
  'ApplicableTerritoryAddress',
  'Applicable Territory Address',
  AddressType.name,
  'The applicable sales territory.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaPrice = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.Price,
  'Price',
  'Price',
  PriceType.name,
  'The price associated with the given location.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaDeliveryUnit = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.DeliveryUnit,
  'DeliveryUnit',
  'Delivery Unit',
  DeliveryUnitType.name,
  'A delivery unit in which the item is located.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaApplicableTaxCategory = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.ApplicableTaxCategory,
  'ApplicableTaxCategory',
  'Applicable Tax Category',
  TaxCategoryType.name,
  'A tax category applicable to this item location quantity.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaPackage = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.Package,
  'Package',
  'Package',
  PackageType.name,
  'The package to which this price applies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaAllowanceCharge = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charge associated with this item location quantity.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemLocationQuantityFieldMetaDependentPriceReference = new FieldMeta<ItemLocationQuantityField>(
  ItemLocationQuantityField.DependentPriceReference,
  'DependentPriceReference',
  'Dependent Price Reference',
  DependentPriceReferenceType.name,
  'The price of the item as a percentage of the price of some other item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const ItemLocationQuantityType: Type<ItemLocationQuantityField> = {
  name: 'ItemLocationQuantity',
  label: 'Item Location Quantity',
  module: TypeModule.cac,
  definition: 'A class for information about pricing structure, lead time, and location associated with an item.',
  fields: ItemLocationQuantityFieldMap,
}
