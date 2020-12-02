import { FieldMeta } from '../FieldMeta'

export enum FeeField {
  UBLExtensions = 'UBLExtensions',
  FeeTypeCode = 'FeeTypeCode',
  FeeAmount = 'FeeAmount',
  FeeDescription = 'FeeDescription'
}

export const FeeFieldMetaUBLExtensions = new FieldMeta<FeeField>(
  FeeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const FeeFieldMetaFeeTypeCode = new FieldMeta<FeeField>(
  FeeField.FeeTypeCode,
  'FeeTypeCode',
  'Fee Type Code',
  'Code',
  'A code signifying the type of this fee.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const FeeFieldMetaFeeAmount = new FieldMeta<FeeField>(
  FeeField.FeeAmount,
  'FeeAmount',
  'Fee Amount',
  'Amount',
  'The amount of a fee.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const FeeFieldMetaFeeDescription = new FieldMeta<FeeField>(
  FeeField.FeeDescription,
  'FeeDescription',
  'Fee Description',
  'Text',
  'Text describing this fee.',
  '0..n',
  'cbc',
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
