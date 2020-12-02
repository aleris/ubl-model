import { FieldMeta } from '../FieldMeta'

export enum DeliveryUnitField {
  UBLExtensions = 'UBLExtensions',
  BatchQuantity = 'BatchQuantity',
  ConsumerUnitQuantity = 'ConsumerUnitQuantity',
  HazardousRiskIndicator = 'HazardousRiskIndicator'
}

export const DeliveryUnitFieldMetaUBLExtensions = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DeliveryUnitFieldMetaBatchQuantity = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.BatchQuantity,
  'BatchQuantity',
  'Batch Quantity',
  'Quantity',
  'The quantity of ordered Items that constitutes a batch for delivery purposes.',
  '1',
  'cbc',
  undefined,
  '100 units , by the dozen'
)

export const DeliveryUnitFieldMetaConsumerUnitQuantity = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.ConsumerUnitQuantity,
  'ConsumerUnitQuantity',
  'Consumer Unit',
  'Quantity',
  'The quantity of units in the Delivery Unit expressed in the units used by the consumer.',
  '0..1',
  'cbc',
  undefined,
  'packs of 10'
)

export const DeliveryUnitFieldMetaHazardousRiskIndicator = new FieldMeta<DeliveryUnitField>(
  DeliveryUnitField.HazardousRiskIndicator,
  'HazardousRiskIndicator',
  'Hazardous Risk Indicator',
  'Indicator',
  'An indication that the transported goods are subject to an international regulation concerning the carriage of dangerous goods (true) or not (false).',
  '0..1',
  'cbc',
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
