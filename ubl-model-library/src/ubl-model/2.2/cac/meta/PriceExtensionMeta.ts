import { FieldMeta } from '../../FieldMeta'

export enum PriceExtensionField {
  Amount = 'Amount',
  TaxTotal = 'TaxTotal'
}

export const PriceExtensionFieldMetaAmount = new FieldMeta<PriceExtensionField>(
  PriceExtensionField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The amount of this price extension.',
  '1',
  undefined,
  undefined
)

export const PriceExtensionFieldMetaTaxTotal = new FieldMeta<PriceExtensionField>(
  PriceExtensionField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'A total amount of taxes of a particular kind applicable to this price extension.',
  '0..n',
  undefined,
  undefined
)

export class PriceExtensionFieldMeta {
  public static readonly Amount = PriceExtensionFieldMetaAmount
  public static readonly TaxTotal = PriceExtensionFieldMetaTaxTotal
}

export const PriceExtensionFieldMap = new Map([
  [PriceExtensionField.Amount, PriceExtensionFieldMetaAmount],
  [PriceExtensionField.TaxTotal, PriceExtensionFieldMetaTaxTotal]
])
