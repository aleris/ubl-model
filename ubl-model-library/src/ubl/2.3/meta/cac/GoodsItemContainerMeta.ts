import { FieldMeta } from '../FieldMeta'

export enum GoodsItemContainerField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Quantity = 'Quantity',
  TransportEquipment = 'TransportEquipment'
}

export const GoodsItemContainerFieldMetaUBLExtensions = new FieldMeta<GoodsItemContainerField>(
  GoodsItemContainerField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const GoodsItemContainerFieldMetaID = new FieldMeta<GoodsItemContainerField>(
  GoodsItemContainerField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this goods item container.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const GoodsItemContainerFieldMetaQuantity = new FieldMeta<GoodsItemContainerField>(
  GoodsItemContainerField.Quantity,
  'Quantity',
  'Quantity',
  'Quantity',
  'The number of goods items loaded into or onto one piece of transport equipment as a total consignment or part of a consignment.',
  '0..1',
  'cbc',
  'Number of packages stuffed',
  undefined
)

export const GoodsItemContainerFieldMetaTransportEquipment = new FieldMeta<GoodsItemContainerField>(
  GoodsItemContainerField.TransportEquipment,
  'TransportEquipment',
  'Transport Equipment',
  'TransportEquipment',
  'A piece of transport equipment used to contain a single goods item.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class GoodsItemContainerFieldMeta {
  public static readonly UBLExtensions = GoodsItemContainerFieldMetaUBLExtensions
  public static readonly ID = GoodsItemContainerFieldMetaID
  public static readonly Quantity = GoodsItemContainerFieldMetaQuantity
  public static readonly TransportEquipment = GoodsItemContainerFieldMetaTransportEquipment
}

export const GoodsItemContainerFieldMap = new Map([
  [GoodsItemContainerField.UBLExtensions, GoodsItemContainerFieldMetaUBLExtensions],
  [GoodsItemContainerField.ID, GoodsItemContainerFieldMetaID],
  [GoodsItemContainerField.Quantity, GoodsItemContainerFieldMetaQuantity],
  [GoodsItemContainerField.TransportEquipment, GoodsItemContainerFieldMetaTransportEquipment]
])
