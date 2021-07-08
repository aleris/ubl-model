import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { NumericType } from '../cbc/NumericMeta'
import { TaxCategoryType } from './TaxCategoryMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TaxSubtotalField {
  UBLExtensions = 'UBLExtensions',
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

export const TaxSubtotalFieldMetaUBLExtensions = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTaxableAmount = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TaxableAmount,
  'TaxableAmount',
  'Taxable Amount',
  AmountType.name,
  'The net amount to which the tax percent (rate) is applied to calculate the tax amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTaxAmount = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TaxAmount,
  'TaxAmount',
  'Tax Amount',
  AmountType.name,
  'The amount of this tax subtotal.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaCalculationSequenceNumeric = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.CalculationSequenceNumeric,
  'CalculationSequenceNumeric',
  'Calculation Sequence',
  NumericType.name,
  'The number of this tax subtotal in the sequence of subtotals corresponding to the order in which multiple taxes are applied. If all taxes are applied to the same taxable amount (i.e., their order of application is inconsequential), then CalculationSequenceNumeric is 1 for all tax subtotals applied to a given amount.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTransactionCurrencyTaxAmount = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TransactionCurrencyTaxAmount,
  'TransactionCurrencyTaxAmount',
  'Transaction Currency Tax Amount',
  AmountType.name,
  'The amount of this tax subtotal, expressed in the currency used for invoicing.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaPercent = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.Percent,
  'Percent',
  'Percent',
  NumericType.name,
  'The tax rate of the tax category applied to this tax subtotal, expressed as a percentage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaBaseUnitMeasure = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.BaseUnitMeasure,
  'BaseUnitMeasure',
  'Base Unit Measure',
  MeasureType.name,
  'The unit of measure on which the tax calculation is based',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaPerUnitAmount = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.PerUnitAmount,
  'PerUnitAmount',
  'Per Unit Amount',
  AmountType.name,
  'Where a tax is applied at a certain rate per unit, the rate per unit applied.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTierRange = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TierRange,
  'TierRange',
  'Tier Range',
  TextType.name,
  'Where a tax is tiered, the range of taxable amounts that determines the rate of tax applicable to this tax subtotal.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTierRatePercent = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TierRatePercent,
  'TierRatePercent',
  'Tier Rate',
  NumericType.name,
  'Where a tax is tiered, the tax rate that applies within a specified range of taxable amounts for this tax subtotal.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxSubtotalFieldMetaTaxCategory = new FieldMeta<TaxSubtotalField>(
  TaxSubtotalField.TaxCategory,
  'TaxCategory',
  'Tax Category',
  TaxCategoryType.name,
  'The tax category applicable to this subtotal.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class TaxSubtotalFieldMeta {
  public static readonly UBLExtensions = TaxSubtotalFieldMetaUBLExtensions
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
  [TaxSubtotalField.UBLExtensions, TaxSubtotalFieldMetaUBLExtensions],
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

export const TaxSubtotalType: Type<TaxSubtotalField> = {
  name: 'TaxSubtotal',
  label: 'Tax Subtotal',
  module: TypeModule.cac,
  definition: 'A class to define the subtotal for a particular tax category within a particular taxation scheme, such as standard rate within VAT.',
  fields: TaxSubtotalFieldMap,
}
