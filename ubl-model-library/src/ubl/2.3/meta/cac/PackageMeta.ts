import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { DeliveryType } from './DeliveryMeta'
import { DeliveryUnitType } from './DeliveryUnitMeta'
import { DespatchType } from './DespatchMeta'
import { DimensionType } from './DimensionMeta'
import { GoodsItemType } from './GoodsItemMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PickupType } from './PickupMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { TransportEquipmentType } from './TransportEquipmentMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PackageField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Quantity = 'Quantity',
  ReturnableMaterialIndicator = 'ReturnableMaterialIndicator',
  PackageLevelCode = 'PackageLevelCode',
  PackagingTypeCode = 'PackagingTypeCode',
  PackingMaterial = 'PackingMaterial',
  TraceID = 'TraceID',
  ContainedPackage = 'ContainedPackage',
  ContainingTransportEquipment = 'ContainingTransportEquipment',
  GoodsItem = 'GoodsItem',
  MeasurementDimension = 'MeasurementDimension',
  DeliveryUnit = 'DeliveryUnit',
  Delivery = 'Delivery',
  Pickup = 'Pickup',
  Despatch = 'Despatch'
}

export const PackageFieldMetaUBLExtensions = new FieldMeta<PackageField>(
  PackageField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PackageFieldMetaID = new FieldMeta<PackageField>(
  PackageField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this package.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackageFieldMetaQuantity = new FieldMeta<PackageField>(
  PackageField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The quantity of items contained in this package.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackageFieldMetaReturnableMaterialIndicator = new FieldMeta<PackageField>(
  PackageField.ReturnableMaterialIndicator,
  'ReturnableMaterialIndicator',
  'Returnable Material Indicator',
  IndicatorType.name,
  'An indicator that the packaging material is returnable (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackageFieldMetaPackageLevelCode = new FieldMeta<PackageField>(
  PackageField.PackageLevelCode,
  'PackageLevelCode',
  'Package Level Code',
  CodeType.name,
  'A code signifying a level of packaging.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackageFieldMetaPackagingTypeCode = new FieldMeta<PackageField>(
  PackageField.PackagingTypeCode,
  'PackagingTypeCode',
  'Packaging Type Code',
  CodeType.name,
  'A code signifying a type of packaging.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Package classification code',
  undefined
)

export const PackageFieldMetaPackingMaterial = new FieldMeta<PackageField>(
  PackageField.PackingMaterial,
  'PackingMaterial',
  'Packing Material',
  TextType.name,
  'Text describing the packaging material.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackageFieldMetaTraceID = new FieldMeta<PackageField>(
  PackageField.TraceID,
  'TraceID',
  'Trace Identifier',
  IdentifierType.name,
  'An identifier for use in tracing this package, such as the EPC number used in RFID.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PackageFieldMetaContainedPackage = new FieldMeta<PackageField>(
  PackageField.ContainedPackage,
  'ContainedPackage',
  'Contained Package',
  PackageType.name,
  'A package contained within this package.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackageFieldMetaContainingTransportEquipment = new FieldMeta<PackageField>(
  PackageField.ContainingTransportEquipment,
  'ContainingTransportEquipment',
  'Containing Transport Equipment',
  TransportEquipmentType.name,
  'The piece of transport equipment containing this package.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackageFieldMetaGoodsItem = new FieldMeta<PackageField>(
  PackageField.GoodsItem,
  'GoodsItem',
  'Goods Item',
  GoodsItemType.name,
  'A goods item included in this package.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackageFieldMetaMeasurementDimension = new FieldMeta<PackageField>(
  PackageField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  DimensionType.name,
  'A measurable dimension (length, mass, weight, or volume) of this package.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackageFieldMetaDeliveryUnit = new FieldMeta<PackageField>(
  PackageField.DeliveryUnit,
  'DeliveryUnit',
  'Delivery Unit',
  DeliveryUnitType.name,
  'A delivery unit within this package.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackageFieldMetaDelivery = new FieldMeta<PackageField>(
  PackageField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'The delivery of this package.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackageFieldMetaPickup = new FieldMeta<PackageField>(
  PackageField.Pickup,
  'Pickup',
  'Pickup',
  PickupType.name,
  'The pickup of this package.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PackageFieldMetaDespatch = new FieldMeta<PackageField>(
  PackageField.Despatch,
  'Despatch',
  'Despatch',
  DespatchType.name,
  'The despatch of this package.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PackageFieldMeta {
  public static readonly UBLExtensions = PackageFieldMetaUBLExtensions
  public static readonly ID = PackageFieldMetaID
  public static readonly Quantity = PackageFieldMetaQuantity
  public static readonly ReturnableMaterialIndicator = PackageFieldMetaReturnableMaterialIndicator
  public static readonly PackageLevelCode = PackageFieldMetaPackageLevelCode
  public static readonly PackagingTypeCode = PackageFieldMetaPackagingTypeCode
  public static readonly PackingMaterial = PackageFieldMetaPackingMaterial
  public static readonly TraceID = PackageFieldMetaTraceID
  public static readonly ContainedPackage = PackageFieldMetaContainedPackage
  public static readonly ContainingTransportEquipment = PackageFieldMetaContainingTransportEquipment
  public static readonly GoodsItem = PackageFieldMetaGoodsItem
  public static readonly MeasurementDimension = PackageFieldMetaMeasurementDimension
  public static readonly DeliveryUnit = PackageFieldMetaDeliveryUnit
  public static readonly Delivery = PackageFieldMetaDelivery
  public static readonly Pickup = PackageFieldMetaPickup
  public static readonly Despatch = PackageFieldMetaDespatch
}

export const PackageFieldMap = new Map([
  [PackageField.UBLExtensions, PackageFieldMetaUBLExtensions],
  [PackageField.ID, PackageFieldMetaID],
  [PackageField.Quantity, PackageFieldMetaQuantity],
  [PackageField.ReturnableMaterialIndicator, PackageFieldMetaReturnableMaterialIndicator],
  [PackageField.PackageLevelCode, PackageFieldMetaPackageLevelCode],
  [PackageField.PackagingTypeCode, PackageFieldMetaPackagingTypeCode],
  [PackageField.PackingMaterial, PackageFieldMetaPackingMaterial],
  [PackageField.TraceID, PackageFieldMetaTraceID],
  [PackageField.ContainedPackage, PackageFieldMetaContainedPackage],
  [PackageField.ContainingTransportEquipment, PackageFieldMetaContainingTransportEquipment],
  [PackageField.GoodsItem, PackageFieldMetaGoodsItem],
  [PackageField.MeasurementDimension, PackageFieldMetaMeasurementDimension],
  [PackageField.DeliveryUnit, PackageFieldMetaDeliveryUnit],
  [PackageField.Delivery, PackageFieldMetaDelivery],
  [PackageField.Pickup, PackageFieldMetaPickup],
  [PackageField.Despatch, PackageFieldMetaDespatch]
])

export const PackageType: Type<PackageField> = {
  name: 'Package',
  label: 'Package',
  module: TypeModule.cac,
  definition: 'A class to describe a package.',
  fields: PackageFieldMap,
}
