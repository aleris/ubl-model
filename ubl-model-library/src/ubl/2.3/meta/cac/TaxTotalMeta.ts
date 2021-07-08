import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { TaxSubtotalType } from './TaxSubtotalMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TaxTotalFieldMetaTaxAmount = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxAmount,
  'TaxAmount',
  'Tax Amount',
  AmountType.name,
  'The total tax amount for a particular taxation scheme, e.g., VAT; the sum of the tax subtotals for each tax category within the taxation scheme.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxTotalFieldMetaCalculationSequenceNumeric = new FieldMeta<TaxTotalField>(
  TaxTotalField.CalculationSequenceNumeric,
  'CalculationSequenceNumeric',
  'Calculation Sequence',
  NumericType.name,
  'The number of this tax total in the sequence of tax totals corresponding to the order in which multiple taxes are applied. If all taxes are applied to the same taxable amount (i.e., their order of application is inconsequential), then CalculationSequenceNumeric is 1 for all tax totals applied to a given amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxTotalFieldMetaRoundingAmount = new FieldMeta<TaxTotalField>(
  TaxTotalField.RoundingAmount,
  'RoundingAmount',
  'Rounding Amount',
  AmountType.name,
  'The rounding amount (positive or negative) added to the calculated tax total to produce the rounded TaxAmount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxTotalFieldMetaTaxEvidenceIndicator = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxEvidenceIndicator,
  'TaxEvidenceIndicator',
  'Tax Evidence Indicator',
  IndicatorType.name,
  'An indicator that this total is recognized as legal evidence for taxation purposes (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'default is negative'
)

export const TaxTotalFieldMetaTaxIncludedIndicator = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxIncludedIndicator,
  'TaxIncludedIndicator',
  'Tax Included Indicator',
  IndicatorType.name,
  'An indicator that tax is included in the calculation (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxTotalFieldMetaTaxSubtotal = new FieldMeta<TaxTotalField>(
  TaxTotalField.TaxSubtotal,
  'TaxSubtotal',
  'Tax Subtotal',
  TaxSubtotalType.name,
  'One of the subtotals the sum of which equals the total tax amount for a particular taxation scheme.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TaxTotalType: Type<TaxTotalField> = {
  name: 'TaxTotal',
  label: 'Tax Total',
  module: TypeModule.cac,
  definition: 'A class to describe the total tax for a particular taxation scheme.',
  fields: TaxTotalFieldMap,
}
