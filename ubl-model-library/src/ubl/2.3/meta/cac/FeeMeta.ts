import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum FeeField {
  UBLExtensions = 'UBLExtensions',
  FeeTypeCode = 'FeeTypeCode',
  FeeAmount = 'FeeAmount',
  FeeDescription = 'FeeDescription'
}

export const FeeFieldMetaUBLExtensions = new FieldMeta<FeeField>(
  FeeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const FeeFieldMetaFeeTypeCode = new FieldMeta<FeeField>(
  FeeField.FeeTypeCode,
  'FeeTypeCode',
  'Fee Type Code',
  CodeType.name,
  'A code signifying the type of this fee.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FeeFieldMetaFeeAmount = new FieldMeta<FeeField>(
  FeeField.FeeAmount,
  'FeeAmount',
  'Fee Amount',
  AmountType.name,
  'The amount of a fee.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FeeFieldMetaFeeDescription = new FieldMeta<FeeField>(
  FeeField.FeeDescription,
  'FeeDescription',
  'Fee Description',
  TextType.name,
  'Text describing this fee.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class FeeFieldMeta {
  public static readonly UBLExtensions = FeeFieldMetaUBLExtensions
  public static readonly FeeTypeCode = FeeFieldMetaFeeTypeCode
  public static readonly FeeAmount = FeeFieldMetaFeeAmount
  public static readonly FeeDescription = FeeFieldMetaFeeDescription
}

export const FeeFieldMap = new Map([
  [FeeField.UBLExtensions, FeeFieldMetaUBLExtensions],
  [FeeField.FeeTypeCode, FeeFieldMetaFeeTypeCode],
  [FeeField.FeeAmount, FeeFieldMetaFeeAmount],
  [FeeField.FeeDescription, FeeFieldMetaFeeDescription]
])

export const FeeType: Type<FeeField> = {
  name: 'Fee',
  label: 'Fee',
  module: TypeModule.cac,
  definition: 'A class to describe a revenue.',
  fields: FeeFieldMap,
}
