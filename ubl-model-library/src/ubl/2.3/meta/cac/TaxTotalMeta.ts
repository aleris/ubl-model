import { FieldMeta } from '../FieldMeta'

export enum TaxTotalField {
  UBLExtensions = 'UBLExtensions',
  TaxAmount = 'TaxAmount',
  CalculationSequenceNumeric = 'CalculationSequenceNumeric',
  RoundingAmount = 'RoundingAmount',
  TaxEvidenceIndicator = 'TaxEvidenceIndicator',
  TaxIncludedIndicator = 'TaxIncludedIndicator',
  TaxSubtotal = 'TaxSubtotal'
}

export const TaxTotalFieldMetaUBLExtensions = new FieldMeta<TaxTotalField>(
  TaxTotalField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TaxTotalFieldMetaTaxAmount = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxAmount,
  'TaxAmount',
  'Tax Amount',
  'Amount',
  'The total tax amount for a particular taxation scheme, e.g., VAT; the sum of the tax subtotals for each tax category within the taxation scheme.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TaxTotalFieldMetaCalculationSequenceNumeric = new FieldMeta<TaxTotalField>(
  TaxTotalField.CalculationSequenceNumeric,
  'CalculationSequenceNumeric',
  'Calculation Sequence',
  'Numeric',
  'The number of this tax total in the sequence of tax totals corresponding to the order in which multiple taxes are applied. If all taxes are applied to the same taxable amount (i.e., their order of application is inconsequential), then CalculationSequenceNumeric is 1 for all tax totals applied to a given amount.',
  '0..1',
  'cbc',
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
  'cbc',
  undefined,
  undefined
)

export const TaxTotalFieldMetaTaxEvidenceIndicator = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxEvidenceIndicator,
  'TaxEvidenceIndicator',
  'Tax Evidence Indicator',
  'Indicator',
  'An indicator that this total is recognized as legal evidence for taxation purposes (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  'default is negative'
)

export const TaxTotalFieldMetaTaxIncludedIndicator = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxIncludedIndicator,
  'TaxIncludedIndicator',
  'Tax Included Indicator',
  'Indicator',
  'An indicator that tax is included in the calculation (true) or not (false).',
  '0..1',
  'cbc',
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
  'cac',
  undefined,
  undefined
)

export class TaxTotalFieldMeta {
  public static readonly UBLExtensions = TaxTotalFieldMetaUBLExtensions
  public static readonly TaxAmount = TaxTotalFieldMetaTaxAmount
  public static readonly CalculationSequenceNumeric = TaxTotalFieldMetaCalculationSequenceNumeric
  public static readonly RoundingAmount = TaxTotalFieldMetaRoundingAmount
  public static readonly TaxEvidenceIndicator = TaxTotalFieldMetaTaxEvidenceIndicator
  public static readonly TaxIncludedIndicator = TaxTotalFieldMetaTaxIncludedIndicator
  public static readonly TaxSubtotal = TaxTotalFieldMetaTaxSubtotal
}

export const TaxTotalFieldMap = new Map([
  [TaxTotalField.UBLExtensions, TaxTotalFieldMetaUBLExtensions],
  [TaxTotalField.TaxAmount, TaxTotalFieldMetaTaxAmount],
  [TaxTotalField.CalculationSequenceNumeric, TaxTotalFieldMetaCalculationSequenceNumeric],
  [TaxTotalField.RoundingAmount, TaxTotalFieldMetaRoundingAmount],
  [TaxTotalField.TaxEvidenceIndicator, TaxTotalFieldMetaTaxEvidenceIndicator],
  [TaxTotalField.TaxIncludedIndicator, TaxTotalFieldMetaTaxIncludedIndicator],
  [TaxTotalField.TaxSubtotal, TaxTotalFieldMetaTaxSubtotal]
])
