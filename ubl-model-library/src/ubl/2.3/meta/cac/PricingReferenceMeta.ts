import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ItemLocationQuantityType } from './ItemLocationQuantityMeta'
import { PriceType } from './PriceMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PricingReferenceField {
  UBLExtensions = 'UBLExtensions',
  OriginalItemLocationQuantity = 'OriginalItemLocationQuantity',
  AlternativeConditionPrice = 'AlternativeConditionPrice'
}

export const PricingReferenceFieldMetaUBLExtensions = new FieldMeta<PricingReferenceField>(
  PricingReferenceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PricingReferenceFieldMetaOriginalItemLocationQuantity = new FieldMeta<PricingReferenceField>(
  PricingReferenceField.OriginalItemLocationQuantity,
  'OriginalItemLocationQuantity',
  'Original Item Location Quantity',
  ItemLocationQuantityType.name,
  'An original set of location-specific properties (e.g., price and quantity) associated with this item.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const PricingReferenceFieldMetaAlternativeConditionPrice = new FieldMeta<PricingReferenceField>(
  PricingReferenceField.AlternativeConditionPrice,
  'AlternativeConditionPrice',
  'Alternative Condition Price',
  PriceType.name,
  'The price expressed in terms other than the actual price, e.g., the list price v. the contracted price, or the price in bags v. the price in kilos, or the list price in bags v. the contracted price in kilos.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const PricingReferenceType: Type<PricingReferenceField> = {
  name: 'PricingReference',
  label: 'Pricing Reference',
  module: TypeModule.cac,
  definition: 'A reference to the basis for pricing. This may be based on a catalogue or a quoted amount from a price list and include some alternative pricing conditions.',
  fields: PricingReferenceFieldMap,
}
