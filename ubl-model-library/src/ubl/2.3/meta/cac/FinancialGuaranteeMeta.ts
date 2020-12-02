import { FieldMeta } from '../FieldMeta'

export enum FinancialGuaranteeField {
  UBLExtensions = 'UBLExtensions',
  GuaranteeTypeCode = 'GuaranteeTypeCode',
  Description = 'Description',
  LiabilityAmount = 'LiabilityAmount',
  AmountRate = 'AmountRate',
  ConstitutionPeriod = 'ConstitutionPeriod'
}

export const FinancialGuaranteeFieldMetaUBLExtensions = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaGuaranteeTypeCode = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.GuaranteeTypeCode,
  'GuaranteeTypeCode',
  'Guarantee Type Code',
  'Code',
  'A code signifying the type of financial guarantee. For instance "Provisional Guarantee" or "Final Guarantee"',
  '1',
  'cbc',
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaDescription = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this financial guarantee.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaLiabilityAmount = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.LiabilityAmount,
  'LiabilityAmount',
  'Liability',
  'Amount',
  'The amount of liability in this financial guarantee.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaAmountRate = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.AmountRate,
  'AmountRate',
  'Amount',
  'Numeric',
  'The rate used to calculate the amount of liability in this financial guarantee.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaConstitutionPeriod = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.ConstitutionPeriod,
  'ConstitutionPeriod',
  'Constitution Period',
  'Period',
  'The period during the tendering process to which this financial guarantee has to be settled.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class FinancialGuaranteeFieldMeta {
  public static readonly UBLExtensions = FinancialGuaranteeFieldMetaUBLExtensions
  public static readonly GuaranteeTypeCode = FinancialGuaranteeFieldMetaGuaranteeTypeCode
  public static readonly Description = FinancialGuaranteeFieldMetaDescription
  public static readonly LiabilityAmount = FinancialGuaranteeFieldMetaLiabilityAmount
  public static readonly AmountRate = FinancialGuaranteeFieldMetaAmountRate
  public static readonly ConstitutionPeriod = FinancialGuaranteeFieldMetaConstitutionPeriod
}

export const FinancialGuaranteeFieldMap = new Map([
  [FinancialGuaranteeField.UBLExtensions, FinancialGuaranteeFieldMetaUBLExtensions],
  [FinancialGuaranteeField.GuaranteeTypeCode, FinancialGuaranteeFieldMetaGuaranteeTypeCode],
  [FinancialGuaranteeField.Description, FinancialGuaranteeFieldMetaDescription],
  [FinancialGuaranteeField.LiabilityAmount, FinancialGuaranteeFieldMetaLiabilityAmount],
  [FinancialGuaranteeField.AmountRate, FinancialGuaranteeFieldMetaAmountRate],
  [FinancialGuaranteeField.ConstitutionPeriod, FinancialGuaranteeFieldMetaConstitutionPeriod]
])
