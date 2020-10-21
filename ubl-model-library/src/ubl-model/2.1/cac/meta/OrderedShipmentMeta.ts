import { FieldMeta } from '../../FieldMeta'

export enum OrderedShipmentField {
  Shipment = 'Shipment',
  Package = 'Package'
}

export const OrderedShipmentFieldMetaShipment = new FieldMeta<OrderedShipmentField>(
  OrderedShipmentField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'The ordered shipment.',
  '1',
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
  undefined,
  undefined
)

export class OrderedShipmentFieldMeta {
  public static readonly Shipment = OrderedShipmentFieldMetaShipment
  public static readonly Package = OrderedShipmentFieldMetaPackage
}

export const OrderedShipmentFieldMap = new Map([
  [OrderedShipmentField.Shipment, OrderedShipmentFieldMetaShipment],
  [OrderedShipmentField.Package, OrderedShipmentFieldMetaPackage]
])
