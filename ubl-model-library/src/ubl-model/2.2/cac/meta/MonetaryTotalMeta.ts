import { FieldMeta } from '../../FieldMeta'

export enum MonetaryTotalField {
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

export const MonetaryTotalFieldMetaLineExtensionAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.LineExtensionAmount,
  'LineExtensionAmount',
  'Line Extension Amount',
  'Amount',
  'The monetary amount of an extended transaction line, net of tax and settlement discounts, but inclusive of any applicable rounding amount.',
  '0..1',
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaTaxExclusiveAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.TaxExclusiveAmount,
  'TaxExclusiveAmount',
  'Tax Exclusive Amount',
  'Amount',
  'The monetary amount of an extended transaction line, exclusive of taxes.',
  '0..1',
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaTaxInclusiveAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.TaxInclusiveAmount,
  'TaxInclusiveAmount',
  'Tax Inclusive Amount',
  'Amount',
  'The monetary amount including taxes; the sum of payable amount and prepaid amount.',
  '0..1',
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaAllowanceTotalAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.AllowanceTotalAmount,
  'AllowanceTotalAmount',
  'Total Amount',
  'Amount',
  'The total monetary amount of all allowances.',
  '0..1',
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaChargeTotalAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.ChargeTotalAmount,
  'ChargeTotalAmount',
  'Total Amount',
  'Amount',
  'The total monetary amount of all charges.',
  '0..1',
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaWithholdingTaxTotalAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.WithholdingTaxTotalAmount,
  'WithholdingTaxTotalAmount',
  'Total Amount',
  'Amount',
  'The total withholding tax amount.',
  '0..1',
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaPrepaidAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.PrepaidAmount,
  'PrepaidAmount',
  'Prepaid Amount',
  'Amount',
  'The total prepaid monetary amount.',
  '0..1',
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaPayableRoundingAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.PayableRoundingAmount,
  'PayableRoundingAmount',
  'Rounding Amount',
  'Amount',
  'The rounding amount (positive or negative) added to produce the line extension amount.',
  '0..1',
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaPayableAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.PayableAmount,
  'PayableAmount',
  'Amount',
  'Amount',
  'The amount of the monetary total to be paid.',
  '1',
  undefined,
  undefined
)

export const MonetaryTotalFieldMetaPayableAlternativeAmount = new FieldMeta<MonetaryTotalField>(
  MonetaryTotalField.PayableAlternativeAmount,
  'PayableAlternativeAmount',
  'Alternative Amount',
  'Amount',
  'The amount of the monetary total to be paid, expressed in an alternative currency.',
  '0..1',
  undefined,
  undefined
)

export class MonetaryTotalFieldMeta {
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
