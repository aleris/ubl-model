import { FieldMeta } from '../FieldMeta'

export enum OrderedShipmentField {
  UBLExtensions = 'UBLExtensions',
  Shipment = 'Shipment',
  Package = 'Package'
}

export const OrderedShipmentFieldMetaUBLExtensions = new FieldMeta<OrderedShipmentField>(
  OrderedShipmentField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const OrderedShipmentFieldMetaShipment = new FieldMeta<OrderedShipmentField>(
  OrderedShipmentField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'The ordered shipment.',
  '1',
  'cac',
  undefined,
  undefined
)

export const OrderedShipmentFieldMetaPackage = new FieldMeta<OrderedShipmentField>(
  OrderedShipmentField.Package,
  'Package',
  'Package',
  'Package',
  'A package in this ordered shipment.',
  '0..n',
  'cac',
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
