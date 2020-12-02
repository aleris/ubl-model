import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PackageFieldMetaID = new FieldMeta<PackageField>(
  PackageField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this package.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PackageFieldMetaQuantity = new FieldMeta<PackageField>(
  PackageField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The quantity of items contained in this package.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PackageFieldMetaReturnableMaterialIndicator = new FieldMeta<PackageField>(
  PackageField.ReturnableMaterialIndicator,
  'ReturnableMaterialIndicator',
  'Returnable Material Indicator',
  'Indicator',
  'An indicator that the packaging material is returnable (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PackageFieldMetaPackageLevelCode = new FieldMeta<PackageField>(
  PackageField.PackageLevelCode,
  'PackageLevelCode',
  'Package Level Code',
  'Code',
  'A code signifying a level of packaging.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PackageFieldMetaPackagingTypeCode = new FieldMeta<PackageField>(
  PackageField.PackagingTypeCode,
  'PackagingTypeCode',
  'Packaging Type Code',
  'Code',
  'A code signifying a type of packaging.',
  '0..1',
  'cbc',
  'Package classification code',
  undefined
)

export const PackageFieldMetaPackingMaterial = new FieldMeta<PackageField>(
  PackageField.PackingMaterial,
  'PackingMaterial',
  'Packing Material',
  'Text',
  'Text describing the packaging material.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const PackageFieldMetaTraceID = new FieldMeta<PackageField>(
  PackageField.TraceID,
  'TraceID',
  'Trace Identifier',
  'Identifier',
  'An identifier for use in tracing this package, such as the EPC number used in RFID.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const PackageFieldMetaContainedPackage = new FieldMeta<PackageField>(
  PackageField.ContainedPackage,
  'ContainedPackage',
  'Contained Package',
  'Package',
  'A package contained within this package.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const PackageFieldMetaContainingTransportEquipment = new FieldMeta<PackageField>(
  PackageField.ContainingTransportEquipment,
  'ContainingTransportEquipment',
  'Containing Transport Equipment',
  'TransportEquipment',
  'The piece of transport equipment containing this package.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PackageFieldMetaGoodsItem = new FieldMeta<PackageField>(
  PackageField.GoodsItem,
  'GoodsItem',
  'Goods Item',
  'GoodsItem',
  'A goods item included in this package.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const PackageFieldMetaMeasurementDimension = new FieldMeta<PackageField>(
  PackageField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  'Dimension',
  'A measurable dimension (length, mass, weight, or volume) of this package.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const PackageFieldMetaDeliveryUnit = new FieldMeta<PackageField>(
  PackageField.DeliveryUnit,
  'DeliveryUnit',
  'Delivery Unit',
  'DeliveryUnit',
  'A delivery unit within this package.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const PackageFieldMetaDelivery = new FieldMeta<PackageField>(
  PackageField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'The delivery of this package.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PackageFieldMetaPickup = new FieldMeta<PackageField>(
  PackageField.Pickup,
  'Pickup',
  'Pickup',
  'Pickup',
  'The pickup of this package.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PackageFieldMetaDespatch = new FieldMeta<PackageField>(
  PackageField.Despatch,
  'Despatch',
  'Despatch',
  'Despatch',
  'The despatch of this package.',
  '0..1',
  'cac',
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
