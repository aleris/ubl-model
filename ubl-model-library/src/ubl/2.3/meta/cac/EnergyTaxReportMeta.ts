import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { TaxSchemeType } from './TaxSchemeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EnergyTaxReportField {
  UBLExtensions = 'UBLExtensions',
  TaxEnergyAmount = 'TaxEnergyAmount',
  TaxEnergyOnAccountAmount = 'TaxEnergyOnAccountAmount',
  TaxEnergyBalanceAmount = 'TaxEnergyBalanceAmount',
  TaxScheme = 'TaxScheme'
}

export const EnergyTaxReportFieldMetaUBLExtensions = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EnergyTaxReportFieldMetaTaxEnergyAmount = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxEnergyAmount,
  'TaxEnergyAmount',
  'Tax Energy Amount',
  AmountType.name,
  'The monetary amount of taxes (and duties).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '3087.90'
)

export const EnergyTaxReportFieldMetaTaxEnergyOnAccountAmount = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxEnergyOnAccountAmount,
  'TaxEnergyOnAccountAmount',
  'Tax Energy On Account Amount',
  AmountType.name,
  'The monetary amount of taxes (and duties) paid on account.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2855.40'
)

export const EnergyTaxReportFieldMetaTaxEnergyBalanceAmount = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxEnergyBalanceAmount,
  'TaxEnergyBalanceAmount',
  'Tax Energy Balance',
  AmountType.name,
  'The monetary amount of the balance of taxes owing.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '232.49'
)

export const EnergyTaxReportFieldMetaTaxScheme = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxScheme,
  'TaxScheme',
  'Tax Scheme',
  TaxSchemeType.name,
  'The relevant taxation scheme.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class EnergyTaxReportFieldMeta {
  public static readonly UBLExtensions = EnergyTaxReportFieldMetaUBLExtensions
  public static readonly TaxEnergyAmount = EnergyTaxReportFieldMetaTaxEnergyAmount
  public static readonly TaxEnergyOnAccountAmount = EnergyTaxReportFieldMetaTaxEnergyOnAccountAmount
  public static readonly TaxEnergyBalanceAmount = EnergyTaxReportFieldMetaTaxEnergyBalanceAmount
  public static readonly TaxScheme = EnergyTaxReportFieldMetaTaxScheme
}

export const EnergyTaxReportFieldMap = new Map([
  [EnergyTaxReportField.UBLExtensions, EnergyTaxReportFieldMetaUBLExtensions],
  [EnergyTaxReportField.TaxEnergyAmount, EnergyTaxReportFieldMetaTaxEnergyAmount],
  [EnergyTaxReportField.TaxEnergyOnAccountAmount, EnergyTaxReportFieldMetaTaxEnergyOnAccountAmount],
  [EnergyTaxReportField.TaxEnergyBalanceAmount, EnergyTaxReportFieldMetaTaxEnergyBalanceAmount],
  [EnergyTaxReportField.TaxScheme, EnergyTaxReportFieldMetaTaxScheme]
])

export const EnergyTaxReportType: Type<EnergyTaxReportField> = {
  name: 'EnergyTaxReport',
  label: 'Energy Tax Report',
  module: TypeModule.cac,
  definition: 'A class to describe energy taxes.',
  fields: EnergyTaxReportFieldMap,
}
