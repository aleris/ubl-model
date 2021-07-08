import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { PackageType } from './PackageMeta'
import { ShipmentType } from './ShipmentMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum OrderedShipmentField {
  UBLExtensions = 'UBLExtensions',
  Shipment = 'Shipment',
  Package = 'Package'
}

export const OrderedShipmentFieldMetaUBLExtensions = new FieldMeta<OrderedShipmentField>(
  OrderedShipmentField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const OrderedShipmentFieldMetaShipment = new FieldMeta<OrderedShipmentField>(
  OrderedShipmentField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'The ordered shipment.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderedShipmentFieldMetaPackage = new FieldMeta<OrderedShipmentField>(
  OrderedShipmentField.Package,
  'Package',
  'Package',
  PackageType.name,
  'A package in this ordered shipment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class OrderedShipmentFieldMeta {
  public static readonly UBLExtensions = OrderedShipmentFieldMetaUBLExtensions
  public static readonly Shipment = OrderedShipmentFieldMetaShipment
  public static readonly Package = OrderedShipmentFieldMetaPackage
}

export const OrderedShipmentFieldMap = new Map([
  [OrderedShipmentField.UBLExtensions, OrderedShipmentFieldMetaUBLExtensions],
  [OrderedShipmentField.Shipment, OrderedShipmentFieldMetaShipment],
  [OrderedShipmentField.Package, OrderedShipmentFieldMetaPackage]
])

export const OrderedShipmentType: Type<OrderedShipmentField> = {
  name: 'OrderedShipment',
  label: 'Ordered Shipment',
  module: TypeModule.cac,
  definition: 'A class to describe an ordered shipment.',
  fields: OrderedShipmentFieldMap,
}
