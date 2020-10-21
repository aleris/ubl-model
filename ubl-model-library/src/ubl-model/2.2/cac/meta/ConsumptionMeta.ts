import { FieldMeta } from '../../FieldMeta'

export enum ConsumptionField {
  UtilityStatementTypeCode = 'UtilityStatementTypeCode',
  MainPeriod = 'MainPeriod',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  EnergyWaterSupply = 'EnergyWaterSupply',
  TelecommunicationsSupply = 'TelecommunicationsSupply',
  LegalMonetaryTotal = 'LegalMonetaryTotal'
}

export const ConsumptionFieldMetaUtilityStatementTypeCode = new FieldMeta<ConsumptionField>(
  ConsumptionField.UtilityStatementTypeCode,
  'UtilityStatementTypeCode',
  'Utility Statement Type Code',
  'Code',
  'A code identifying the type of the Utility Statement required for this consumption. Explains the kind of utility the statement is about, e.g.. "gas", "electricity", "telephone"',
  '0..1',
  undefined,
  'Electricity'
)

export const ConsumptionFieldMetaMainPeriod = new FieldMeta<ConsumptionField>(
  ConsumptionField.MainPeriod,
  'MainPeriod',
  'Period',
  'Period',
  'The period of consumption.',
  '0..1',
  undefined,
  undefined
)

export const ConsumptionFieldMetaAllowanceCharge = new FieldMeta<ConsumptionField>(
  ConsumptionField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'An allowance or charges that may apply with this consumption.',
  '0..n',
  undefined,
  undefined
)

export const ConsumptionFieldMetaTaxTotal = new FieldMeta<ConsumptionField>(
  ConsumptionField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total of taxes for each tax type covering the consumption.',
  '0..n',
  undefined,
  undefined
)

export const ConsumptionFieldMetaEnergyWaterSupply = new FieldMeta<ConsumptionField>(
  ConsumptionField.EnergyWaterSupply,
  'EnergyWaterSupply',
  'Energy Water Supply',
  'EnergyWaterSupply',
  'The details of any energy or water consumption.',
  '0..1',
  undefined,
  undefined
)

export const ConsumptionFieldMetaTelecommunicationsSupply = new FieldMeta<ConsumptionField>(
  ConsumptionField.TelecommunicationsSupply,
  'TelecommunicationsSupply',
  'Telecommunications Supply',
  'TelecommunicationsSupply',
  'The details of any telecommunications consumption.',
  '0..1',
  undefined,
  undefined
)

export const ConsumptionFieldMetaLegalMonetaryTotal = new FieldMeta<ConsumptionField>(
  ConsumptionField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Monetary Total',
  'MonetaryTotal',
  'The total amount payable on this consumption, including any allowances, charges, or taxes.',
  '1',
  undefined,
  undefined
)

export class ConsumptionFieldMeta {
  public static readonly UtilityStatementTypeCode = ConsumptionFieldMetaUtilityStatementTypeCode
  public static readonly MainPeriod = ConsumptionFieldMetaMainPeriod
  public static readonly AllowanceCharge = ConsumptionFieldMetaAllowanceCharge
  public static readonly TaxTotal = ConsumptionFieldMetaTaxTotal
  public static readonly EnergyWaterSupply = ConsumptionFieldMetaEnergyWaterSupply
  public static readonly TelecommunicationsSupply = ConsumptionFieldMetaTelecommunicationsSupply
  public static readonly LegalMonetaryTotal = ConsumptionFieldMetaLegalMonetaryTotal
}

export const ConsumptionFieldMap = new Map([
  [ConsumptionField.UtilityStatementTypeCode, ConsumptionFieldMetaUtilityStatementTypeCode],
  [ConsumptionField.MainPeriod, ConsumptionFieldMetaMainPeriod],
  [ConsumptionField.AllowanceCharge, ConsumptionFieldMetaAllowanceCharge],
  [ConsumptionField.TaxTotal, ConsumptionFieldMetaTaxTotal],
  [ConsumptionField.EnergyWaterSupply, ConsumptionFieldMetaEnergyWaterSupply],
  [ConsumptionField.TelecommunicationsSupply, ConsumptionFieldMetaTelecommunicationsSupply],
  [ConsumptionField.LegalMonetaryTotal, ConsumptionFieldMetaLegalMonetaryTotal]
])
