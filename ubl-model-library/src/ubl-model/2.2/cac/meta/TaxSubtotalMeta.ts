import { FieldMeta } from '../../FieldMeta'

export enum TaxSubtotalField {
  TaxableAmount = 'TaxableAmount',
  TaxAmount = 'TaxAmount',
  CalculationSequenceNumeric = 'CalculationSequenceNumeric',
  TransactionCurrencyTaxAmount = 'TransactionCurrencyTaxAmount',
  Percent = 'Percent',
  BaseUnitMeasure = 'BaseUnitMeasure',
  PerUnitAmount = 'PerUnitAmount',
  TierRange = 'TierRange',
  TierRatePercent = 'TierRatePercent',
  TaxCategory = 'TaxCategory'
}

export const TaxSubtotalFieldMetaTaxableAmount = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TaxableAmount,
  'TaxableAmount',
  'Amount',
  'Amount',
  'The net amount to which the tax percent (rate) is applied to calculate the tax amount.',
  '0..1',
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTaxAmount = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TaxAmount,
  'TaxAmount',
  'Tax Amount',
  'Amount',
  'The amount of this tax subtotal.',
  '1',
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaCalculationSequenceNumeric = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.CalculationSequenceNumeric,
  'CalculationSequenceNumeric',
  'Calculation Sequence',
  'Numeric',
  'The number of this tax subtotal in the sequence of subtotals corresponding to the order in which multiple taxes are applied. If all taxes are applied to the same taxable amount (i.e., their order of application is inconsequential), then CalculationSequenceNumeric is 1 for all tax subtotals applied to a given amount.',
  '0..1',
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTransactionCurrencyTaxAmount = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TransactionCurrencyTaxAmount,
  'TransactionCurrencyTaxAmount',
  'Tax Amount',
  'Amount',
  'The amount of this tax subtotal, expressed in the currency used for invoicing.',
  '0..1',
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaPercent = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.Percent,
  'Percent',
  'Percent',
  'Numeric',
  'The tax rate of the tax category applied to this tax subtotal, expressed as a percentage.',
  '0..1',
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaBaseUnitMeasure = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.BaseUnitMeasure,
  'BaseUnitMeasure',
  'Base Unit Measure',
  'Measure',
  'The unit of measure on which the tax calculation is based',
  '0..1',
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaPerUnitAmount = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.PerUnitAmount,
  'PerUnitAmount',
  'Amount',
  'Amount',
  'Where a tax is applied at a certain rate per unit, the rate per unit applied.',
  '0..1',
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTierRange = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TierRange,
  'TierRange',
  'Tier Range',
  'Text',
  'Where a tax is tiered, the range of taxable amounts that determines the rate of tax applicable to this tax subtotal.',
  '0..1',
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTierRatePercent = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TierRatePercent,
  'TierRatePercent',
  'Tier Rate',
  'Numeric',
  'Where a tax is tiered, the tax rate that applies within a specified range of taxable amounts for this tax subtotal.',
  '0..1',
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTaxCategory = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TaxCategory,
  'TaxCategory',
  'Tax Category',
  'TaxCategory',
  'The tax category applicable to this subtotal.',
  '1',
  undefined,
  undefined
)

export class TaxSubtotalFieldMeta {
  public static readonly TaxableAmount = TaxSubtotalFieldMetaTaxableAmount
  public static readonly TaxAmount = TaxSubtotalFieldMetaTaxAmount
  public static readonly CalculationSequenceNumeric = TaxSubtotalFieldMetaCalculationSequenceNumeric
  public static readonly TransactionCurrencyTaxAmount = TaxSubtotalFieldMetaTransactionCurrencyTaxAmount
  public static readonly Percent = TaxSubtotalFieldMetaPercent
  public static readonly BaseUnitMeasure = TaxSubtotalFieldMetaBaseUnitMeasure
  public static readonly PerUnitAmount = TaxSubtotalFieldMetaPerUnitAmount
  public static readonly TierRange = TaxSubtotalFieldMetaTierRange
  public static readonly TierRatePercent = TaxSubtotalFieldMetaTierRatePercent
  public static readonly TaxCategory = TaxSubtotalFieldMetaTaxCategory
}

export const TaxSubtotalFieldMap = new Map([
  [TaxSubtotalField.TaxableAmount, TaxSubtotalFieldMetaTaxableAmount],
  [TaxSubtotalField.TaxAmount, TaxSubtotalFieldMetaTaxAmount],
  [TaxSubtotalField.CalculationSequenceNumeric, TaxSubtotalFieldMetaCalculationSequenceNumeric],
  [TaxSubtotalField.TransactionCurrencyTaxAmount, TaxSubtotalFieldMetaTransactionCurrencyTaxAmount],
  [TaxSubtotalField.Percent, TaxSubtotalFieldMetaPercent],
  [TaxSubtotalField.BaseUnitMeasure, TaxSubtotalFieldMetaBaseUnitMeasure],
  [TaxSubtotalField.PerUnitAmount, TaxSubtotalFieldMetaPerUnitAmount],
  [TaxSubtotalField.TierRange, TaxSubtotalFieldMetaTierRange],
  [TaxSubtotalField.TierRatePercent, TaxSubtotalFieldMetaTierRatePercent],
  [TaxSubtotalField.TaxCategory, TaxSubtotalFieldMetaTaxCategory]
])
