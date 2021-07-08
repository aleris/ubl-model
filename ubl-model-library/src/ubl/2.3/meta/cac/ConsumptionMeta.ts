import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { CodeType } from '../cbc/CodeMeta'
import { EnergyWaterSupplyType } from './EnergyWaterSupplyMeta'
import { MonetaryTotalType } from './MonetaryTotalMeta'
import { PeriodType } from './PeriodMeta'
import { TaxTotalType } from './TaxTotalMeta'
import { TelecommunicationsSupplyType } from './TelecommunicationsSupplyMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ConsumptionField {
  UBLExtensions = 'UBLExtensions',
  UtilityStatementTypeCode = 'UtilityStatementTypeCode',
  MainPeriod = 'MainPeriod',
  AllowanceCharge = 'AllowanceCharge',
  TaxTotal = 'TaxTotal',
  EnergyWaterSupply = 'EnergyWaterSupply',
  TelecommunicationsSupply = 'TelecommunicationsSupply',
  LegalMonetaryTotal = 'LegalMonetaryTotal'
}

export const ConsumptionFieldMetaUBLExtensions = new FieldMeta<ConsumptionField>(
  ConsumptionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ConsumptionFieldMetaUtilityStatementTypeCode = new FieldMeta<ConsumptionField>(
  ConsumptionField.UtilityStatementTypeCode,
  'UtilityStatementTypeCode',
  'Utility Statement Type Code',
  CodeType.name,
  'A code identifying the type of the Utility Statement required for this consumption. Explains the kind of utility the statement is about, e.g.. "gas", "electricity", "telephone"',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Electricity'
)

export const ConsumptionFieldMetaMainPeriod = new FieldMeta<ConsumptionField>(
  ConsumptionField.MainPeriod,
  'MainPeriod',
  'Main Period',
  PeriodType.name,
  'The period of consumption.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionFieldMetaAllowanceCharge = new FieldMeta<ConsumptionField>(
  ConsumptionField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'An allowance or charges that may apply with this consumption.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionFieldMetaTaxTotal = new FieldMeta<ConsumptionField>(
  ConsumptionField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total of taxes for each tax type covering the consumption.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionFieldMetaEnergyWaterSupply = new FieldMeta<ConsumptionField>(
  ConsumptionField.EnergyWaterSupply,
  'EnergyWaterSupply',
  'Energy Water Supply',
  EnergyWaterSupplyType.name,
  'The details of any energy or water consumption.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionFieldMetaTelecommunicationsSupply = new FieldMeta<ConsumptionField>(
  ConsumptionField.TelecommunicationsSupply,
  'TelecommunicationsSupply',
  'Telecommunications Supply',
  TelecommunicationsSupplyType.name,
  'The details of any telecommunications consumption.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ConsumptionFieldMetaLegalMonetaryTotal = new FieldMeta<ConsumptionField>(
  ConsumptionField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  MonetaryTotalType.name,
  'The total amount payable on this consumption, including any allowances, charges, or taxes.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class ConsumptionFieldMeta {
  public static readonly UBLExtensions = ConsumptionFieldMetaUBLExtensions
  public static readonly UtilityStatementTypeCode = ConsumptionFieldMetaUtilityStatementTypeCode
  public static readonly MainPeriod = ConsumptionFieldMetaMainPeriod
  public static readonly AllowanceCharge = ConsumptionFieldMetaAllowanceCharge
  public static readonly TaxTotal = ConsumptionFieldMetaTaxTotal
  public static readonly EnergyWaterSupply = ConsumptionFieldMetaEnergyWaterSupply
  public static readonly TelecommunicationsSupply = ConsumptionFieldMetaTelecommunicationsSupply
  public static readonly LegalMonetaryTotal = ConsumptionFieldMetaLegalMonetaryTotal
}

export const ConsumptionFieldMap = new Map([
  [ConsumptionField.UBLExtensions, ConsumptionFieldMetaUBLExtensions],
  [ConsumptionField.UtilityStatementTypeCode, ConsumptionFieldMetaUtilityStatementTypeCode],
  [ConsumptionField.MainPeriod, ConsumptionFieldMetaMainPeriod],
  [ConsumptionField.AllowanceCharge, ConsumptionFieldMetaAllowanceCharge],
  [ConsumptionField.TaxTotal, ConsumptionFieldMetaTaxTotal],
  [ConsumptionField.EnergyWaterSupply, ConsumptionFieldMetaEnergyWaterSupply],
  [ConsumptionField.TelecommunicationsSupply, ConsumptionFieldMetaTelecommunicationsSupply],
  [ConsumptionField.LegalMonetaryTotal, ConsumptionFieldMetaLegalMonetaryTotal]
])

export const ConsumptionType: Type<ConsumptionField> = {
  name: 'Consumption',
  label: 'Consumption',
  module: TypeModule.cac,
  definition: 'A class to describe the consumption of a utility.',
  fields: ConsumptionFieldMap,
}
