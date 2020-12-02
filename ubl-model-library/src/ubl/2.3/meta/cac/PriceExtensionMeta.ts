import { FieldMeta } from '../FieldMeta'

export enum PriceExtensionField {
  UBLExtensions = 'UBLExtensions',
  Amount = 'Amount',
  TaxTotal = 'TaxTotal'
}

export const PriceExtensionFieldMetaUBLExtensions = new FieldMeta<PriceExtensionField>(
  PriceExtensionField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const PriceExtensionFieldMetaAmount = new FieldMeta<PriceExtensionField>(
  PriceExtensionField.Amount,
  'Amount',
  'Amount',
  'Amount',
  'The amount of this price extension.',
  '1',
  'cbc',
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
  'cac',
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
