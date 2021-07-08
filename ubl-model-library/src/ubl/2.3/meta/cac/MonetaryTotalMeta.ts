import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum MonetaryTotalField {
  UBLExtensions = 'UBLExtensions',
  LineExtensionAmount = 'LineExtensionAmount',
  TaxExclusiveAmount = 'TaxExclusiveAmount',
  TaxInclusiveAmount = 'TaxInclusiveAmount',
  AllowanceTotalAmount = 'AllowanceTotalAmount',
  ChargeTotalAmount = 'ChargeTotalAmount',
  WithholdingTaxTotalAmount = 'WithholdingTaxTotalAmount',
  PrepaidAmount = 'PrepaidAmount',
  PayableRoundingAmount = 'PayableRoundingAmount',
  PayableAmount = 'PayableAmount',
  PayableAlternativeAmount = 'PayableAlternativeAmount'
}

export const MonetaryTotalFieldMetaUBLExtensions = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaLineExtensionAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  AmountType.name,
  'The monetary amount of an extended transaction line, net of tax and settlement discounts, but inclusive of any applicable rounding amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaTaxExclusiveAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.TaxExclusiveAmount,
  'TaxExclusiveAmount',
  'Tax Exclusive Amount',
  AmountType.name,
  'The monetary amount of an extended transaction line, exclusive of taxes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaTaxInclusiveAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.TaxInclusiveAmount,
  'TaxInclusiveAmount',
  'Tax Inclusive Amount',
  AmountType.name,
  'The monetary amount including taxes; the sum of payable amount and prepaid amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaAllowanceTotalAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.AllowanceTotalAmount,
  'AllowanceTotalAmount',
  'Allowance Total Amount',
  AmountType.name,
  'The total monetary amount of all allowances.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaChargeTotalAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.ChargeTotalAmount,
  'ChargeTotalAmount',
  'Charge Total Amount',
  AmountType.name,
  'The total monetary amount of all charges.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaWithholdingTaxTotalAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.WithholdingTaxTotalAmount,
  'WithholdingTaxTotalAmount',
  'Withholding Tax Total Amount',
  AmountType.name,
  'The total withholding tax amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaPrepaidAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.PrepaidAmount,
  'PrepaidAmount',
  'Prepaid Amount',
  AmountType.name,
  'The total prepaid monetary amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaPayableRoundingAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.PayableRoundingAmount,
  'PayableRoundingAmount',
  'Payable Rounding Amount',
  AmountType.name,
  'The rounding amount (positive or negative) added to produce the line extension amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaPayableAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.PayableAmount,
  'PayableAmount',
  'Payable Amount',
  AmountType.name,
  'The amount of the monetary total to be paid.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaPayableAlternativeAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.PayableAlternativeAmount,
  'PayableAlternativeAmount',
  'Payable Alternative Amount',
  AmountType.name,
  'The amount of the monetary total to be paid, expressed in an alternative currency.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class MonetaryTotalFieldMeta {
  public static readonly UBLExtensions = MonetaryTotalFieldMetaUBLExtensions
  public static readonly LineExtensionAmount = MonetaryTotalFieldMetaLineExtensionAmount
  public static readonly TaxExclusiveAmount = MonetaryTotalFieldMetaTaxExclusiveAmount
  public static readonly TaxInclusiveAmount = MonetaryTotalFieldMetaTaxInclusiveAmount
  public static readonly AllowanceTotalAmount = MonetaryTotalFieldMetaAllowanceTotalAmount
  public static readonly ChargeTotalAmount = MonetaryTotalFieldMetaChargeTotalAmount
  public static readonly WithholdingTaxTotalAmount = MonetaryTotalFieldMetaWithholdingTaxTotalAmount
  public static readonly PrepaidAmount = MonetaryTotalFieldMetaPrepaidAmount
  public static readonly PayableRoundingAmount = MonetaryTotalFieldMetaPayableRoundingAmount
  public static readonly PayableAmount = MonetaryTotalFieldMetaPayableAmount
  public static readonly PayableAlternativeAmount = MonetaryTotalFieldMetaPayableAlternativeAmount
}

export const MonetaryTotalFieldMap = new Map([
  [MonetaryTotalField.UBLExtensions, MonetaryTotalFieldMetaUBLExtensions],
  [MonetaryTotalField.LineExtensionAmount, MonetaryTotalFieldMetaLineExtensionAmount],
  [MonetaryTotalField.TaxExclusiveAmount, MonetaryTotalFieldMetaTaxExclusiveAmount],
  [MonetaryTotalField.TaxInclusiveAmount, MonetaryTotalFieldMetaTaxInclusiveAmount],
  [MonetaryTotalField.AllowanceTotalAmount, MonetaryTotalFieldMetaAllowanceTotalAmount],
  [MonetaryTotalField.ChargeTotalAmount, MonetaryTotalFieldMetaChargeTotalAmount],
  [MonetaryTotalField.WithholdingTaxTotalAmount, MonetaryTotalFieldMetaWithholdingTaxTotalAmount],
  [MonetaryTotalField.PrepaidAmount, MonetaryTotalFieldMetaPrepaidAmount],
  [MonetaryTotalField.PayableRoundingAmount, MonetaryTotalFieldMetaPayableRoundingAmount],
  [MonetaryTotalField.PayableAmount, MonetaryTotalFieldMetaPayableAmount],
  [MonetaryTotalField.PayableAlternativeAmount, MonetaryTotalFieldMetaPayableAlternativeAmount]
])

export const MonetaryTotalType: Type<MonetaryTotalField> = {
  name: 'MonetaryTotal',
  label: 'Monetary Total',
  module: TypeModule.cac,
  definition: 'A class to define a monetary total.',
  fields: MonetaryTotalFieldMap,
}
