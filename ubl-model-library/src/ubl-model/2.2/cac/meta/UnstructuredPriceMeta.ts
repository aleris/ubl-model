import { FieldMeta } from '../../FieldMeta'

export enum UnstructuredPriceField {
  PriceAmount = 'PriceAmount',
  TimeAmount = 'TimeAmount'
}

export const UnstructuredPriceFieldMetaPriceAmount = new FieldMeta<UnstructuredPriceField>(
  UnstructuredPriceField.PriceAmount,
  'PriceAmount',
  'Price Amount',
  'Amount',
  'The price amount.',
  '0..1',
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
  undefined,
  undefined
)

export class UnstructuredPriceFieldMeta {
  public static readonly PriceAmount = UnstructuredPriceFieldMetaPriceAmount
  public static readonly TimeAmount = UnstructuredPriceFieldMetaTimeAmount
}

export const UnstructuredPriceFieldMap = new Map([
  [UnstructuredPriceField.PriceAmount, UnstructuredPriceFieldMetaPriceAmount],
  [UnstructuredPriceField.TimeAmount, UnstructuredPriceFieldMetaTimeAmount]
])
