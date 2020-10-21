import { FieldMeta } from '../../FieldMeta'

export enum PricingReferenceField {
  OriginalItemLocationQuantity = 'OriginalItemLocationQuantity',
  AlternativeConditionPrice = 'AlternativeConditionPrice'
}

export const PricingReferenceFieldMetaOriginalItemLocationQuantity = new FieldMeta<PricingReferenceField>(
  PricingReferenceField.OriginalItemLocationQuantity,
  'OriginalItemLocationQuantity',
  'Item Location Quantity',
  'ItemLocationQuantity',
  'An original set of location-specific properties (e.g., price and quantity) associated with this item.',
  '0..1',
  undefined,
  undefined
)

export const PricingReferenceFieldMetaAlternativeConditionPrice = new FieldMeta<PricingReferenceField>(
  PricingReferenceField.AlternativeConditionPrice,
  'AlternativeConditionPrice',
  'Price',
  'Price',
  'The price expressed in terms other than the actual price, e.g., the list price v. the contracted price, or the price in bags v. the price in kilos, or the list price in bags v. the contracted price in kilos.',
  '0..n',
  undefined,
  undefined
)

export class PricingReferenceFieldMeta {
  public static readonly OriginalItemLocationQuantity = PricingReferenceFieldMetaOriginalItemLocationQuantity
  public static readonly AlternativeConditionPrice = PricingReferenceFieldMetaAlternativeConditionPrice
}

export const PricingReferenceFieldMap = new Map([
  [PricingReferenceField.OriginalItemLocationQuantity, PricingReferenceFieldMetaOriginalItemLocationQuantity],
  [PricingReferenceField.AlternativeConditionPrice, PricingReferenceFieldMetaAlternativeConditionPrice]
])
