import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { NumericType } from '../cbc/NumericMeta'
import { TaxSchemeType } from './TaxSchemeMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TaxCategoryFieldMetaID = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this tax category.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'http://www.unece.org/uncefact/codelist/standard/UNECE_DutyorTaxorFeeCategoryCode_D09B.xsd'
)

export const TaxCategoryFieldMetaName = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.Name,
  'Name',
  'Name',
  TextType.name,
  'The name of this tax category.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Luxury Goods , Wine Equalization , Exempt'
)

export const TaxCategoryFieldMetaPercent = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.Percent,
  'Percent',
  'Percent',
  NumericType.name,
  'The tax rate for this category, expressed as a percentage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxCategoryFieldMetaBaseUnitMeasure = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.BaseUnitMeasure,
  'BaseUnitMeasure',
  'Base Unit Measure',
  MeasureType.name,
  'A Unit of Measures used as the basic for the tax calculation applied at a certain rate per unit.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxCategoryFieldMetaPerUnitAmount = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.PerUnitAmount,
  'PerUnitAmount',
  'Per Unit Amount',
  AmountType.name,
  'Where a tax is applied at a certain rate per unit, the rate per unit applied.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxCategoryFieldMetaTaxExemptionReasonCode = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TaxExemptionReasonCode,
  'TaxExemptionReasonCode',
  'Tax Exemption Reason Code',
  CodeType.name,
  'The reason for tax being exempted, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'http://www.unece.org/uncefact/codelist/standard/UNECE_DutyTaxFeeTypeCode_D09B.xsd'
)

export const TaxCategoryFieldMetaTaxExemptionReason = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TaxExemptionReason,
  'TaxExemptionReason',
  'Tax Exemption Reason',
  TextType.name,
  'The reason for tax being exempted, expressed as text.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxCategoryFieldMetaTierRange = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TierRange,
  'TierRange',
  'Tier Range',
  TextType.name,
  'Where a tax is tiered, the range of taxable amounts that determines the rate of tax applicable to this tax category.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxCategoryFieldMetaTierRatePercent = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TierRatePercent,
  'TierRatePercent',
  'Tier Rate',
  NumericType.name,
  'Where a tax is tiered, the tax rate that applies within the specified range of taxable amounts for this tax category.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TaxCategoryFieldMetaTaxScheme = new FieldMeta<TaxCategoryField>(
  TaxCategoryField.TaxScheme,
  'TaxScheme',
  'Tax Scheme',
  TaxSchemeType.name,
  'The taxation scheme within which this tax category is defined.',
  FieldCardinality.Uni,
  TypeModule.cac,
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

export const TaxCategoryType: Type<TaxCategoryField> = {
  name: 'TaxCategory',
  label: 'Tax Category',
  module: TypeModule.cac,
  definition: 'A class to describe one of the tax categories within a taxation scheme (e.g., High Rate VAT, Low Rate VAT).',
  fields: TaxCategoryFieldMap,
}
