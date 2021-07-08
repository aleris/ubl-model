import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { NumericType } from '../cbc/NumericMeta'
import { PeriodType } from './PeriodMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaGuaranteeTypeCode = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.GuaranteeTypeCode,
  'GuaranteeTypeCode',
  'Guarantee Type Code',
  CodeType.name,
  'A code signifying the type of financial guarantee. For instance "Provisional Guarantee" or "Final Guarantee"',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaDescription = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this financial guarantee.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaLiabilityAmount = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.LiabilityAmount,
  'LiabilityAmount',
  'Liability',
  AmountType.name,
  'The amount of liability in this financial guarantee.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaAmountRate = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.AmountRate,
  'AmountRate',
  'Amount',
  NumericType.name,
  'The rate used to calculate the amount of liability in this financial guarantee.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FinancialGuaranteeFieldMetaConstitutionPeriod = new FieldMeta<FinancialGuaranteeField>(
  FinancialGuaranteeField.ConstitutionPeriod,
  'ConstitutionPeriod',
  'Constitution Period',
  PeriodType.name,
  'The period during the tendering process to which this financial guarantee has to be settled.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const FinancialGuaranteeType: Type<FinancialGuaranteeField> = {
  name: 'FinancialGuarantee',
  label: 'Financial Guarantee',
  module: TypeModule.cac,
  definition: 'A class to describe the bond guarantee of a tenderer or bid submitter\'s actual entry into a contract in the event that it is the successful bidder.',
  fields: FinancialGuaranteeFieldMap,
}
