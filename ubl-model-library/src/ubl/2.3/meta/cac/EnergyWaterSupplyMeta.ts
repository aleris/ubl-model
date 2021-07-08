import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ConsumptionAverageType } from './ConsumptionAverageMeta'
import { ConsumptionCorrectionType } from './ConsumptionCorrectionMeta'
import { ConsumptionReportType } from './ConsumptionReportMeta'
import { EnergyTaxReportType } from './EnergyTaxReportMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EnergyWaterSupplyFieldMetaConsumptionReport = new FieldMeta<EnergyWaterSupplyField>(
  EnergyWaterSupplyField.ConsumptionReport,
  'ConsumptionReport',
  'Consumption Report',
  ConsumptionReportType.name,
  'An amount of energy or water consumed.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EnergyWaterSupplyFieldMetaEnergyTaxReport = new FieldMeta<EnergyWaterSupplyField>(
  EnergyWaterSupplyField.EnergyTaxReport,
  'EnergyTaxReport',
  'Energy Tax Report',
  EnergyTaxReportType.name,
  'A tax on the consumption of energy or water.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EnergyWaterSupplyFieldMetaConsumptionAverage = new FieldMeta<EnergyWaterSupplyField>(
  EnergyWaterSupplyField.ConsumptionAverage,
  'ConsumptionAverage',
  'Consumption Average',
  ConsumptionAverageType.name,
  'A consumption average.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EnergyWaterSupplyFieldMetaEnergyWaterConsumptionCorrection = new FieldMeta<EnergyWaterSupplyField>(
  EnergyWaterSupplyField.EnergyWaterConsumptionCorrection,
  'EnergyWaterConsumptionCorrection',
  'Energy Water Consumption Correction',
  ConsumptionCorrectionType.name,
  'Describes any corrections or adjustments to the supply of energy or water.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const EnergyWaterSupplyType: Type<EnergyWaterSupplyField> = {
  name: 'EnergyWaterSupply',
  label: 'Energy Water Supply',
  module: TypeModule.cac,
  definition: 'A class to describe the supply (and therefore consumption) of an amount of energy or water.',
  fields: EnergyWaterSupplyFieldMap,
}
