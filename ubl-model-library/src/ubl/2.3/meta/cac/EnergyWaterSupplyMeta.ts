import { FieldMeta } from '../FieldMeta'

export enum EnergyWaterSupplyField {
  UBLExtensions = 'UBLExtensions',
  ConsumptionReport = 'ConsumptionReport',
  EnergyTaxReport = 'EnergyTaxReport',
  ConsumptionAverage = 'ConsumptionAverage',
  EnergyWaterConsumptionCorrection = 'EnergyWaterConsumptionCorrection'
}

export const EnergyWaterSupplyFieldMetaUBLExtensions = new FieldMeta<EnergyWaterSupplyField>(
  EnergyWaterSupplyField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EnergyWaterSupplyFieldMetaConsumptionReport = new FieldMeta<EnergyWaterSupplyField>(
  EnergyWaterSupplyField.ConsumptionReport,
  'ConsumptionReport',
  'Consumption Report',
  'ConsumptionReport',
  'An amount of energy or water consumed.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const EnergyWaterSupplyFieldMetaEnergyTaxReport = new FieldMeta<EnergyWaterSupplyField>(
  EnergyWaterSupplyField.EnergyTaxReport,
  'EnergyTaxReport',
  'Energy Tax Report',
  'EnergyTaxReport',
  'A tax on the consumption of energy or water.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const EnergyWaterSupplyFieldMetaConsumptionAverage = new FieldMeta<EnergyWaterSupplyField>(
  EnergyWaterSupplyField.ConsumptionAverage,
  'ConsumptionAverage',
  'Consumption Average',
  'ConsumptionAverage',
  'A consumption average.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const EnergyWaterSupplyFieldMetaEnergyWaterConsumptionCorrection = new FieldMeta<EnergyWaterSupplyField>(
  EnergyWaterSupplyField.EnergyWaterConsumptionCorrection,
  'EnergyWaterConsumptionCorrection',
  'Energy Water Consumption Correction',
  'ConsumptionCorrection',
  'Describes any corrections or adjustments to the supply of energy or water.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class EnergyWaterSupplyFieldMeta {
  public static readonly UBLExtensions = EnergyWaterSupplyFieldMetaUBLExtensions
  public static readonly ConsumptionReport = EnergyWaterSupplyFieldMetaConsumptionReport
  public static readonly EnergyTaxReport = EnergyWaterSupplyFieldMetaEnergyTaxReport
  public static readonly ConsumptionAverage = EnergyWaterSupplyFieldMetaConsumptionAverage
  public static readonly EnergyWaterConsumptionCorrection = EnergyWaterSupplyFieldMetaEnergyWaterConsumptionCorrection
}

export const EnergyWaterSupplyFieldMap = new Map([
  [EnergyWaterSupplyField.UBLExtensions, EnergyWaterSupplyFieldMetaUBLExtensions],
  [EnergyWaterSupplyField.ConsumptionReport, EnergyWaterSupplyFieldMetaConsumptionReport],
  [EnergyWaterSupplyField.EnergyTaxReport, EnergyWaterSupplyFieldMetaEnergyTaxReport],
  [EnergyWaterSupplyField.ConsumptionAverage, EnergyWaterSupplyFieldMetaConsumptionAverage],
  [EnergyWaterSupplyField.EnergyWaterConsumptionCorrection, EnergyWaterSupplyFieldMetaEnergyWaterConsumptionCorrection]
])
