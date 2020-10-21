import { FieldMeta } from '../../FieldMeta'

export enum TaxTotalField {
  TaxAmount = 'TaxAmount',
  RoundingAmount = 'RoundingAmount',
  TaxEvidenceIndicator = 'TaxEvidenceIndicator',
  TaxIncludedIndicator = 'TaxIncludedIndicator',
  TaxSubtotal = 'TaxSubtotal'
}

export const TaxTotalFieldMetaTaxAmount = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxAmount,
  'TaxAmount',
  'Tax Amount',
  'Amount',
  'The total tax amount for a particular taxation scheme, e.g., VAT; the sum of the tax subtotals for each tax category within the taxation scheme.',
  '1',
  undefined,
  undefined
)

export const TaxTotalFieldMetaRoundingAmount = new FieldMeta<TaxTotalField>(
  TaxTotalField.RoundingAmount,
  'RoundingAmount',
  'Rounding Amount',
  'Amount',
  'The rounding amount (positive or negative) added to the calculated tax total to produce the rounded TaxAmount.',
  '0..1',
  undefined,
  undefined
)

export const TaxTotalFieldMetaTaxEvidenceIndicator = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxEvidenceIndicator,
  'TaxEvidenceIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this total is recognized as legal evidence for taxation purposes (true) or not (false).',
  '0..1',
  undefined,
  'default is negative'
)

export const TaxTotalFieldMetaTaxIncludedIndicator = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxIncludedIndicator,
  'TaxIncludedIndicator',
  'Indicator',
  'Indicator',
  'An indicator that tax is included in the calculation (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TaxTotalFieldMetaTaxSubtotal = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxSubtotal,
  'TaxSubtotal',
  'Tax Subtotal',
  'TaxSubtotal',
  'One of the subtotals the sum of which equals the total tax amount for a particular taxation scheme.',
  '0..n',
  undefined,
  undefined
)

export class TaxTotalFieldMeta {
  public static readonly TaxAmount = TaxTotalFieldMetaTaxAmount
  public static readonly RoundingAmount = TaxTotalFieldMetaRoundingAmount
  public static readonly TaxEvidenceIndicator = TaxTotalFieldMetaTaxEvidenceIndicator
  public static readonly TaxIncludedIndicator = TaxTotalFieldMetaTaxIncludedIndicator
  public static readonly TaxSubtotal = TaxTotalFieldMetaTaxSubtotal
}

export const TaxTotalFieldMap = new Map([
  [TaxTotalField.TaxAmount, TaxTotalFieldMetaTaxAmount],
  [TaxTotalField.RoundingAmount, TaxTotalFieldMetaRoundingAmount],
  [TaxTotalField.TaxEvidenceIndicator, TaxTotalFieldMetaTaxEvidenceIndicator],
  [TaxTotalField.TaxIncludedIndicator, TaxTotalFieldMetaTaxIncludedIndicator],
  [TaxTotalField.TaxSubtotal, TaxTotalFieldMetaTaxSubtotal]
])
