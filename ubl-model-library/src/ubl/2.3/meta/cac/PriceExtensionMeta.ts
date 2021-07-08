import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { TaxTotalType } from './TaxTotalMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum PriceExtensionField {
  UBLExtensions = 'UBLExtensions',
  Amount = 'Amount',
  TaxTotal = 'TaxTotal'
}

export const PriceExtensionFieldMetaUBLExtensions = new FieldMeta<PriceExtensionField>(
  PriceExtensionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const PriceExtensionFieldMetaAmount = new FieldMeta<PriceExtensionField>(
  PriceExtensionField.Amount,
  'Amount',
  'Amount',
  AmountType.name,
  'The amount of this price extension.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const PriceExtensionFieldMetaTaxTotal = new FieldMeta<PriceExtensionField>(
  PriceExtensionField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'A total amount of taxes of a particular kind applicable to this price extension.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class PriceExtensionFieldMeta {
  public static readonly UBLExtensions = PriceExtensionFieldMetaUBLExtensions
  public static readonly Amount = PriceExtensionFieldMetaAmount
  public static readonly TaxTotal = PriceExtensionFieldMetaTaxTotal
}

export const PriceExtensionFieldMap = new Map([
  [PriceExtensionField.UBLExtensions, PriceExtensionFieldMetaUBLExtensions],
  [PriceExtensionField.Amount, PriceExtensionFieldMetaAmount],
  [PriceExtensionField.TaxTotal, PriceExtensionFieldMetaTaxTotal]
])

export const PriceExtensionType: Type<PriceExtensionField> = {
  name: 'PriceExtension',
  label: 'Price Extension',
  module: TypeModule.cac,
  definition: 'A class to describe a price extension, calculated by multiplying the price per unit by the quantity of items.',
  fields: PriceExtensionFieldMap,
}
