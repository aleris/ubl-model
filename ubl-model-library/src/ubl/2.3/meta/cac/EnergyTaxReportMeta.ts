import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EnergyTaxReportFieldMetaTaxEnergyAmount = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxEnergyAmount,
  'TaxEnergyAmount',
  'Tax Energy Amount',
  'Amount',
  'The monetary amount of taxes (and duties).',
  '0..1',
  'cbc',
  undefined,
  '3087.90'
)

export const EnergyTaxReportFieldMetaTaxEnergyOnAccountAmount = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxEnergyOnAccountAmount,
  'TaxEnergyOnAccountAmount',
  'Tax Energy On Account Amount',
  'Amount',
  'The monetary amount of taxes (and duties) paid on account.',
  '0..1',
  'cbc',
  undefined,
  '2855.40'
)

export const EnergyTaxReportFieldMetaTaxEnergyBalanceAmount = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxEnergyBalanceAmount,
  'TaxEnergyBalanceAmount',
  'Tax Energy Balance',
  'Amount',
  'The monetary amount of the balance of taxes owing.',
  '0..1',
  'cbc',
  undefined,
  '232.49'
)

export const EnergyTaxReportFieldMetaTaxScheme = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxScheme,
  'TaxScheme',
  'Tax Scheme',
  'TaxScheme',
  'The relevant taxation scheme.',
  '1',
  'cac',
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
