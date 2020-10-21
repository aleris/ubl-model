import { FieldMeta } from '../../FieldMeta'

export enum EnergyTaxReportField {
  TaxEnergyAmount = 'TaxEnergyAmount',
  TaxEnergyOnAccountAmount = 'TaxEnergyOnAccountAmount',
  TaxEnergyBalanceAmount = 'TaxEnergyBalanceAmount',
  TaxScheme = 'TaxScheme'
}

export const EnergyTaxReportFieldMetaTaxEnergyAmount = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxEnergyAmount,
  'TaxEnergyAmount',
  'Tax Energy Amount',
  'Amount',
  'The monetary amount of taxes (and duties).',
  '0..1',
  undefined,
  '3087.90'
)

export const EnergyTaxReportFieldMetaTaxEnergyOnAccountAmount = new FieldMeta<EnergyTaxReportField>(
  EnergyTaxReportField.TaxEnergyOnAccountAmount,
  'TaxEnergyOnAccountAmount',
  'On Account Amount',
  'Amount',
  'The monetary amount of taxes (and duties) paid on account.',
  '0..1',
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
  undefined,
  undefined
)

export class EnergyTaxReportFieldMeta {
  public static readonly TaxEnergyAmount = EnergyTaxReportFieldMetaTaxEnergyAmount
  public static readonly TaxEnergyOnAccountAmount = EnergyTaxReportFieldMetaTaxEnergyOnAccountAmount
  public static readonly TaxEnergyBalanceAmount = EnergyTaxReportFieldMetaTaxEnergyBalanceAmount
  public static readonly TaxScheme = EnergyTaxReportFieldMetaTaxScheme
}

export const EnergyTaxReportFieldMap = new Map([
  [EnergyTaxReportField.TaxEnergyAmount, EnergyTaxReportFieldMetaTaxEnergyAmount],
  [EnergyTaxReportField.TaxEnergyOnAccountAmount, EnergyTaxReportFieldMetaTaxEnergyOnAccountAmount],
  [EnergyTaxReportField.TaxEnergyBalanceAmount, EnergyTaxReportFieldMetaTaxEnergyBalanceAmount],
  [EnergyTaxReportField.TaxScheme, EnergyTaxReportFieldMetaTaxScheme]
])
