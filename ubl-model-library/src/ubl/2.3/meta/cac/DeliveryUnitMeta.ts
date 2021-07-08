import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DeliveryUnitField {
  UBLExtensions = 'UBLExtensions',
  BatchQuantity = 'BatchQuantity',
  ConsumerUnitQuantity = 'ConsumerUnitQuantity',
  HazardousRiskIndicator = 'HazardousRiskIndicator'
}

export const DeliveryUnitFieldMetaUBLExtensions = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DeliveryUnitFieldMetaBatchQuantity = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.BatchQuantity,
  'BatchQuantity',
  'Batch Quantity',
  QuantityType.name,
  'The quantity of ordered Items that constitutes a batch for delivery purposes.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '100 units , by the dozen'
)

export const DeliveryUnitFieldMetaConsumerUnitQuantity = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.ConsumerUnitQuantity,
  'ConsumerUnitQuantity',
  'Consumer Unit',
  QuantityType.name,
  'The quantity of units in the Delivery Unit expressed in the units used by the consumer.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'packs of 10'
)

export const DeliveryUnitFieldMetaHazardousRiskIndicator = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Hazardous Risk Indicator',
  IndicatorType.name,
  'An indication that the transported goods are subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Default is negative'
)

export class DeliveryUnitFieldMeta {
  public static readonly UBLExtensions = DeliveryUnitFieldMetaUBLExtensions
  public static readonly BatchQuantity = DeliveryUnitFieldMetaBatchQuantity
  public static readonly ConsumerUnitQuantity = DeliveryUnitFieldMetaConsumerUnitQuantity
  public static readonly HazardousRiskIndicator = DeliveryUnitFieldMetaHazardousRiskIndicator
}

export const DeliveryUnitFieldMap = new Map([
  [DeliveryUnitField.UBLExtensions, DeliveryUnitFieldMetaUBLExtensions],
  [DeliveryUnitField.BatchQuantity, DeliveryUnitFieldMetaBatchQuantity],
  [DeliveryUnitField.ConsumerUnitQuantity, DeliveryUnitFieldMetaConsumerUnitQuantity],
  [DeliveryUnitField.HazardousRiskIndicator, DeliveryUnitFieldMetaHazardousRiskIndicator]
])

export const DeliveryUnitType: Type<DeliveryUnitField> = {
  name: 'DeliveryUnit',
  label: 'Delivery Unit',
  module: TypeModule.cac,
  definition: 'A class to describe a delivery unit.',
  fields: DeliveryUnitFieldMap,
}
