import { FieldMeta } from '../FieldMeta'

export enum UnstructuredPriceField {
  UBLExtensions = 'UBLExtensions',
  PriceAmount = 'PriceAmount',
  TimeAmount = 'TimeAmount'
}

export const UnstructuredPriceFieldMetaUBLExtensions = new FieldMeta<UnstructuredPriceField>(
  UnstructuredPriceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const UnstructuredPriceFieldMetaPriceAmount = new FieldMeta<UnstructuredPriceField>(
  UnstructuredPriceField.PriceAmount,
  'PriceAmount',
  'Price Amount',
  'Amount',
  'The price amount.',
  '0..1',
  'cbc',
  undefined,
  '23.45'
)

export const UnstructuredPriceFieldMetaTimeAmount = new FieldMeta<UnstructuredPriceField>(
  UnstructuredPriceField.TimeAmount,
  'TimeAmount',
  'Time Amount',
  'Text',
  'The usage time upon which the price is based.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export class UnstructuredPriceFieldMeta {
  public static readonly UBLExtensions = UnstructuredPriceFieldMetaUBLExtensions
  public static readonly PriceAmount = UnstructuredPriceFieldMetaPriceAmount
  public static readonly TimeAmount = UnstructuredPriceFieldMetaTimeAmount
}

export const UnstructuredPriceFieldMap = new Map([
  [UnstructuredPriceField.UBLExtensions, UnstructuredPriceFieldMetaUBLExtensions],
  [UnstructuredPriceField.PriceAmount, UnstructuredPriceFieldMetaPriceAmount],
  [UnstructuredPriceField.TimeAmount, UnstructuredPriceFieldMetaTimeAmount]
])
