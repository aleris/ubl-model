import { FieldMeta } from '../../FieldMeta'

export enum DeliveryUnitField {
  BatchQuantity = 'BatchQuantity',
  ConsumerUnitQuantity = 'ConsumerUnitQuantity',
  HazardousRiskIndicator = 'HazardousRiskIndicator'
}

export const DeliveryUnitFieldMetaBatchQuantity = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.BatchQuantity,
  'BatchQuantity',
  'Batch Quantity',
  'Quantity',
  'The quantity of ordered Items that constitutes a batch for delivery purposes.',
  '1',
  undefined,
  '100 units , by the dozen'
)

export const DeliveryUnitFieldMetaConsumerUnitQuantity = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.ConsumerUnitQuantity,
  'ConsumerUnitQuantity',
  'Unit',
  'Quantity',
  'The quantity of units in the Delivery Unit expressed in the units used by the consumer.',
  '0..1',
  undefined,
  'packs of 10'
)

export const DeliveryUnitFieldMetaHazardousRiskIndicator = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Indicator',
  'Indicator',
  'An indication that the transported goods are subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  '0..1',
  undefined,
  'Default is negative'
)

export class DeliveryUnitFieldMeta {
  public static readonly BatchQuantity = DeliveryUnitFieldMetaBatchQuantity
  public static readonly ConsumerUnitQuantity = DeliveryUnitFieldMetaConsumerUnitQuantity
  public static readonly HazardousRiskIndicator = DeliveryUnitFieldMetaHazardousRiskIndicator
}

export const DeliveryUnitFieldMap = new Map([
  [DeliveryUnitField.BatchQuantity, DeliveryUnitFieldMetaBatchQuantity],
  [DeliveryUnitField.ConsumerUnitQuantity, DeliveryUnitFieldMetaConsumerUnitQuantity],
  [DeliveryUnitField.HazardousRiskIndicator, DeliveryUnitFieldMetaHazardousRiskIndicator]
])
