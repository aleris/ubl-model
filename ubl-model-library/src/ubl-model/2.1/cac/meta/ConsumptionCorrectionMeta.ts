import { FieldMeta } from '../../FieldMeta'

export enum ConsumptionCorrectionField {
  CorrectionType = 'CorrectionType',
  CorrectionTypeCode = 'CorrectionTypeCode',
  MeterNumber = 'MeterNumber',
  GasPressureQuantity = 'GasPressureQuantity',
  ActualTemperatureReductionQuantity = 'ActualTemperatureReductionQuantity',
  NormalTemperatureReductionQuantity = 'NormalTemperatureReductionQuantity',
  DifferenceTemperatureReductionQuantity = 'DifferenceTemperatureReductionQuantity',
  Description = 'Description',
  CorrectionUnitAmount = 'CorrectionUnitAmount',
  ConsumptionEnergyQuantity = 'ConsumptionEnergyQuantity',
  ConsumptionWaterQuantity = 'ConsumptionWaterQuantity',
  CorrectionAmount = 'CorrectionAmount'
}

export const ConsumptionCorrectionFieldMetaCorrectionType = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.CorrectionType,
  'CorrectionType',
  'Correction Type',
  'Text',
  'Statement for the correction type.',
  '0..1',
  undefined,
  'Heating Correction'
)

export const ConsumptionCorrectionFieldMetaCorrectionTypeCode = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.CorrectionTypeCode,
  'CorrectionTypeCode',
  'Correction Type Code',
  'Code',
  'Statement at the code for the correction type.',
  '0..1',
  undefined,
  'HeatingCorrection'
)

export const ConsumptionCorrectionFieldMetaMeterNumber = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.MeterNumber,
  'MeterNumber',
  'Meter Number',
  'Text',
  'Statement for meter number.',
  '0..1',
  undefined,
  '530071575'
)

export const ConsumptionCorrectionFieldMetaGasPressureQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.GasPressureQuantity,
  'GasPressureQuantity',
  'Gas Pressure',
  'Quantity',
  'Correction of the gas pressure.',
  '0..1',
  undefined,
  undefined
)

export const ConsumptionCorrectionFieldMetaActualTemperatureReductionQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.ActualTemperatureReductionQuantity,
  'ActualTemperatureReductionQuantity',
  'Temperature Reduction',
  'Quantity',
  'Statement for the actuel heating correction temperature.',
  '0..1',
  undefined,
  '-36.69'
)

export const ConsumptionCorrectionFieldMetaNormalTemperatureReductionQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.NormalTemperatureReductionQuantity,
  'NormalTemperatureReductionQuantity',
  'Temperature Reduction',
  'Quantity',
  'Statement for the standard for heating correction temperature.',
  '0..1',
  undefined,
  '-37.00'
)

export const ConsumptionCorrectionFieldMetaDifferenceTemperatureReductionQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.DifferenceTemperatureReductionQuantity,
  'DifferenceTemperatureReductionQuantity',
  'Temperature Reduction',
  'Quantity',
  'Deviation from standard heating correction.',
  '0..1',
  undefined,
  '0.31'
)

export const ConsumptionCorrectionFieldMetaDescription = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.Description,
  'Description',
  'Description',
  'Text',
  'Description related to the corrections.',
  '0..n',
  undefined,
  undefined
)

export const ConsumptionCorrectionFieldMetaCorrectionUnitAmount = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.CorrectionUnitAmount,
  'CorrectionUnitAmount',
  'Correction Unit Amount',
  'Amount',
  'Correction per MWH per degree C.',
  '0..1',
  undefined,
  '0.0000'
)

export const ConsumptionCorrectionFieldMetaConsumptionEnergyQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.ConsumptionEnergyQuantity,
  'ConsumptionEnergyQuantity',
  'Consumption Energy',
  'Quantity',
  'Your consumpt for district heating energy.',
  '0..1',
  undefined,
  '563.6240'
)

export const ConsumptionCorrectionFieldMetaConsumptionWaterQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.ConsumptionWaterQuantity,
  'ConsumptionWaterQuantity',
  'Consumption Water',
  'Quantity',
  'Your consumpt for district heating water.',
  '0..1',
  undefined,
  '13212.14'
)

export const ConsumptionCorrectionFieldMetaCorrectionAmount = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.CorrectionAmount,
  'CorrectionAmount',
  'Correction Amount',
  'Amount',
  'Your correction for heating correction.',
  '0..1',
  undefined,
  '0.00'
)

export class ConsumptionCorrectionFieldMeta {
  public static readonly CorrectionType = ConsumptionCorrectionFieldMetaCorrectionType
  public static readonly CorrectionTypeCode = ConsumptionCorrectionFieldMetaCorrectionTypeCode
  public static readonly MeterNumber = ConsumptionCorrectionFieldMetaMeterNumber
  public static readonly GasPressureQuantity = ConsumptionCorrectionFieldMetaGasPressureQuantity
  public static readonly ActualTemperatureReductionQuantity = ConsumptionCorrectionFieldMetaActualTemperatureReductionQuantity
  public static readonly NormalTemperatureReductionQuantity = ConsumptionCorrectionFieldMetaNormalTemperatureReductionQuantity
  public static readonly DifferenceTemperatureReductionQuantity = ConsumptionCorrectionFieldMetaDifferenceTemperatureReductionQuantity
  public static readonly Description = ConsumptionCorrectionFieldMetaDescription
  public static readonly CorrectionUnitAmount = ConsumptionCorrectionFieldMetaCorrectionUnitAmount
  public static readonly ConsumptionEnergyQuantity = ConsumptionCorrectionFieldMetaConsumptionEnergyQuantity
  public static readonly ConsumptionWaterQuantity = ConsumptionCorrectionFieldMetaConsumptionWaterQuantity
  public static readonly CorrectionAmount = ConsumptionCorrectionFieldMetaCorrectionAmount
}

export const ConsumptionCorrectionFieldMap = new Map([
  [ConsumptionCorrectionField.CorrectionType, ConsumptionCorrectionFieldMetaCorrectionType],
  [ConsumptionCorrectionField.CorrectionTypeCode, ConsumptionCorrectionFieldMetaCorrectionTypeCode],
  [ConsumptionCorrectionField.MeterNumber, ConsumptionCorrectionFieldMetaMeterNumber],
  [ConsumptionCorrectionField.GasPressureQuantity, ConsumptionCorrectionFieldMetaGasPressureQuantity],
  [ConsumptionCorrectionField.ActualTemperatureReductionQuantity, ConsumptionCorrectionFieldMetaActualTemperatureReductionQuantity],
  [ConsumptionCorrectionField.NormalTemperatureReductionQuantity, ConsumptionCorrectionFieldMetaNormalTemperatureReductionQuantity],
  [ConsumptionCorrectionField.DifferenceTemperatureReductionQuantity, ConsumptionCorrectionFieldMetaDifferenceTemperatureReductionQuantity],
  [ConsumptionCorrectionField.Description, ConsumptionCorrectionFieldMetaDescription],
  [ConsumptionCorrectionField.CorrectionUnitAmount, ConsumptionCorrectionFieldMetaCorrectionUnitAmount],
  [ConsumptionCorrectionField.ConsumptionEnergyQuantity, ConsumptionCorrectionFieldMetaConsumptionEnergyQuantity],
  [ConsumptionCorrectionField.ConsumptionWaterQuantity, ConsumptionCorrectionFieldMetaConsumptionWaterQuantity],
  [ConsumptionCorrectionField.CorrectionAmount, ConsumptionCorrectionFieldMetaCorrectionAmount]
])
