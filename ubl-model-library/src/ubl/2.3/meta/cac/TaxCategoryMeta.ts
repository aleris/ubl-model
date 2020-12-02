import { FieldMeta } from '../FieldMeta'

export enum TaxCategoryField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Name = 'Name',
  Percent = 'Percent',
  BaseUnitMeasure = 'BaseUnitMeasure',
  PerUnitAmount = 'PerUnitAmount',
  TaxExemptionReasonCode = 'TaxExemptionReasonCode',
  TaxExemptionReason = 'TaxExemptionReason',
  TierRange = 'TierRange',
  TierRatePercent = 'TierRatePercent',
  TaxScheme = 'TaxScheme'
}

export const TaxCategoryFieldMetaUBLExtensions = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TaxCategoryFieldMetaID = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this tax category.',
  '0..1',
  'cbc',
  undefined,
  'http://www.unece.org/uncefact/codelist/standard/UNECE_DutyorTaxorFeeCategoryCode_D09B.xsd'
)

export const TaxCategoryFieldMetaName = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.Name,
  'Name',
  'Name',
  'Text',
  'The name of this tax category.',
  '0..1',
  'cbc',
  undefined,
  'Luxury Goods , Wine Equalization , Exempt'
)

export const TaxCategoryFieldMetaPercent = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.Percent,
  'Percent',
  'Percent',
  'Numeric',
  'The tax rate for this category, expressed as a percentage.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TaxCategoryFieldMetaBaseUnitMeasure = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.BaseUnitMeasure,
  'BaseUnitMeasure',
  'Base Unit Measure',
  'Measure',
  'A Unit of Measures used as the basic for the tax calculation applied at a certain rate per unit.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TaxCategoryFieldMetaPerUnitAmount = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.PerUnitAmount,
  'PerUnitAmount',
  'Per Unit Amount',
  'Amount',
  'Where a tax is applied at a certain rate per unit, the rate per unit applied.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TaxCategoryFieldMetaTaxExemptionReasonCode = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TaxExemptionReasonCode,
  'TaxExemptionReasonCode',
  'Tax Exemption Reason Code',
  'Code',
  'The reason for tax being exempted, expressed as a code.',
  '0..1',
  'cbc',
  undefined,
  'http://www.unece.org/uncefact/codelist/standard/UNECE_DutyTaxFeeTypeCode_D09B.xsd'
)

export const TaxCategoryFieldMetaTaxExemptionReason = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TaxExemptionReason,
  'TaxExemptionReason',
  'Tax Exemption Reason',
  'Text',
  'The reason for tax being exempted, expressed as text.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TaxCategoryFieldMetaTierRange = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TierRange,
  'TierRange',
  'Tier Range',
  'Text',
  'Where a tax is tiered, the range of taxable amounts that determines the rate of tax applicable to this tax category.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TaxCategoryFieldMetaTierRatePercent = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TierRatePercent,
  'TierRatePercent',
  'Tier Rate',
  'Numeric',
  'Where a tax is tiered, the tax rate that applies within the specified range of taxable amounts for this tax category.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TaxCategoryFieldMetaTaxScheme = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TaxScheme,
  'TaxScheme',
  'Tax Scheme',
  'TaxScheme',
  'The taxation scheme within which this tax category is defined.',
  '1',
  'cac',
  undefined,
  undefined
)

export class TaxCategoryFieldMeta {
  public static readonly UBLExtensions = TaxCategoryFieldMetaUBLExtensions
  public static readonly ID = TaxCategoryFieldMetaID
  public static readonly Name = TaxCategoryFieldMetaName
  public static readonly Percent = TaxCategoryFieldMetaPercent
  public static readonly BaseUnitMeasure = TaxCategoryFieldMetaBaseUnitMeasure
  public static readonly PerUnitAmount = TaxCategoryFieldMetaPerUnitAmount
  public static readonly TaxExemptionReasonCode = TaxCategoryFieldMetaTaxExemptionReasonCode
  public static readonly TaxExemptionReason = TaxCategoryFieldMetaTaxExemptionReason
  public static readonly TierRange = TaxCategoryFieldMetaTierRange
  public static readonly TierRatePercent = TaxCategoryFieldMetaTierRatePercent
  public static readonly TaxScheme = TaxCategoryFieldMetaTaxScheme
}

export const TaxCategoryFieldMap = new Map([
  [TaxCategoryField.UBLExtensions, TaxCategoryFieldMetaUBLExtensions],
  [TaxCategoryField.ID, TaxCategoryFieldMetaID],
  [TaxCategoryField.Name, TaxCategoryFieldMetaName],
  [TaxCategoryField.Percent, TaxCategoryFieldMetaPercent],
  [TaxCategoryField.BaseUnitMeasure, TaxCategoryFieldMetaBaseUnitMeasure],
  [TaxCategoryField.PerUnitAmount, TaxCategoryFieldMetaPerUnitAmount],
  [TaxCategoryField.TaxExemptionReasonCode, TaxCategoryFieldMetaTaxExemptionReasonCode],
  [TaxCategoryField.TaxExemptionReason, TaxCategoryFieldMetaTaxExemptionReason],
  [TaxCategoryField.TierRange, TaxCategoryFieldMetaTierRange],
  [TaxCategoryField.TierRatePercent, TaxCategoryFieldMetaTierRatePercent],
  [TaxCategoryField.TaxScheme, TaxCategoryFieldMetaTaxScheme]
])
