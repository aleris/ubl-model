import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum UnstructuredPriceField {
  UBLExtensions = 'UBLExtensions',
  PriceAmount = 'PriceAmount',
  TimeAmount = 'TimeAmount'
}

export const UnstructuredPriceFieldMetaUBLExtensions = new FieldMeta<UnstructuredPriceField>(
  UnstructuredPriceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const UnstructuredPriceFieldMetaPriceAmount = new FieldMeta<UnstructuredPriceField>(
  UnstructuredPriceField.PriceAmount,
  'PriceAmount',
  'Price Amount',
  AmountType.name,
  'The price amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '23.45'
)

export const UnstructuredPriceFieldMetaTimeAmount = new FieldMeta<UnstructuredPriceField>(
  UnstructuredPriceField.TimeAmount,
  'TimeAmount',
  'Time Amount',
  TextType.name,
  'The usage time upon which the price is based.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const UnstructuredPriceType: Type<UnstructuredPriceField> = {
  name: 'UnstructuredPrice',
  label: 'Unstructured Price',
  module: TypeModule.cac,
  definition: 'A simplified version of the Price class intended for applications such as telephone billing.',
  fields: UnstructuredPriceFieldMap,
}
