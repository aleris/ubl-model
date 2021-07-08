import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TransportEquipmentType } from './TransportEquipmentMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum GoodsItemContainerField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Quantity = 'Quantity',
  TransportEquipment = 'TransportEquipment'
}

export const GoodsItemContainerFieldMetaUBLExtensions = new FieldMeta<GoodsItemContainerField>(
  GoodsItemContainerField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const GoodsItemContainerFieldMetaID = new FieldMeta<GoodsItemContainerField>(
  GoodsItemContainerField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this goods item container.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const GoodsItemContainerFieldMetaQuantity = new FieldMeta<GoodsItemContainerField>(
  GoodsItemContainerField.Quantity,
  'Quantity',
  'Quantity',
  QuantityType.name,
  'The number of goods items loaded into or onto one piece of transport equipment as a total consignment or part of a consignment.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Number of packages stuffed',
  undefined
)

export const GoodsItemContainerFieldMetaTransportEquipment = new FieldMeta<GoodsItemContainerField>(
  GoodsItemContainerField.TransportEquipment,
  'TransportEquipment',
  'Transport Equipment',
  TransportEquipmentType.name,
  'A piece of transport equipment used to contain a single goods item.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const GoodsItemContainerType: Type<GoodsItemContainerField> = {
  name: 'GoodsItemContainer',
  label: 'Goods Item Container',
  module: TypeModule.cac,
  definition: 'A class defining how goods items are split across transport equipment.',
  fields: GoodsItemContainerFieldMap,
}
