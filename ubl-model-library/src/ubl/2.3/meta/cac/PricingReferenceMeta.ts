import { FieldMeta } from '../FieldMeta'

export enum PricingReferenceField {
  UBLExtensions = 'UBLExtensions',
  OriginalItemLocationQuantity = 'OriginalItemLocationQuantity',
  AlternativeConditionPrice = 'AlternativeConditionPrice'
}

export const PricingReferenceFieldMetaUBLExtensions = new FieldMeta<PricingReferenceField>(
  PricingReferenceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PricingReferenceFieldMetaOriginalItemLocationQuantity = new FieldMeta<PricingReferenceField>(
  PricingReferenceField.OriginalItemLocationQuantity,
  'OriginalItemLocationQuantity',
  'Original Item Location Quantity',
  'ItemLocationQuantity',
  'An original set of location-specific properties (e.g., price and quantity) associated with this item.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const PricingReferenceFieldMetaAlternativeConditionPrice = new FieldMeta<PricingReferenceField>(
  PricingReferenceField.AlternativeConditionPrice,
  'AlternativeConditionPrice',
  'Alternative Condition Price',
  'Price',
  'The price expressed in terms other than the actual price, e.g., the list price v. the contracted price, or the price in bags v. the price in kilos, or the list price in bags v. the contracted price in kilos.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class PricingReferenceFieldMeta {
  public static readonly UBLExtensions = PricingReferenceFieldMetaUBLExtensions
  public static readonly OriginalItemLocationQuantity = PricingReferenceFieldMetaOriginalItemLocationQuantity
  public static readonly AlternativeConditionPrice = PricingReferenceFieldMetaAlternativeConditionPrice
}

export const PricingReferenceFieldMap = new Map([
  [PricingReferenceField.UBLExtensions, PricingReferenceFieldMetaUBLExtensions],
  [PricingReferenceField.OriginalItemLocationQuantity, PricingReferenceFieldMetaOriginalItemLocationQuantity],
  [PricingReferenceField.AlternativeConditionPrice, PricingReferenceFieldMetaAlternativeConditionPrice]
])
