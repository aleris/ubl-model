import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AmountType } from '../cbc/AmountMeta'
import { CodeType } from '../cbc/CodeMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ConsumptionCorrectionField {
  UBLExtensions = 'UBLExtensions',
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

export const ConsumptionCorrectionFieldMetaUBLExtensions = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ConsumptionCorrectionFieldMetaCorrectionType = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.CorrectionType,
  'CorrectionType',
  'Correction Type',
  TextType.name,
  'Statement for the correction type.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Heating Correction'
)

export const ConsumptionCorrectionFieldMetaCorrectionTypeCode = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.CorrectionTypeCode,
  'CorrectionTypeCode',
  'Correction Type Code',
  CodeType.name,
  'Statement at the code for the correction type.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'HeatingCorrection'
)

export const ConsumptionCorrectionFieldMetaMeterNumber = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.MeterNumber,
  'MeterNumber',
  'Meter Number',
  TextType.name,
  'Statement for meter number.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '530071575'
)

export const ConsumptionCorrectionFieldMetaGasPressureQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.GasPressureQuantity,
  'GasPressureQuantity',
  'Gas Pressure',
  QuantityType.name,
  'Correction of the gas pressure.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConsumptionCorrectionFieldMetaActualTemperatureReductionQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.ActualTemperatureReductionQuantity,
  'ActualTemperatureReductionQuantity',
  'Actual Temperature Reduction',
  QuantityType.name,
  'Statement for the actuel heating correction temperature.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '-36.69'
)

export const ConsumptionCorrectionFieldMetaNormalTemperatureReductionQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.NormalTemperatureReductionQuantity,
  'NormalTemperatureReductionQuantity',
  'Normal Temperature Reduction',
  QuantityType.name,
  'Statement for the standard for heating correction temperature.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '-37.00'
)

export const ConsumptionCorrectionFieldMetaDifferenceTemperatureReductionQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.DifferenceTemperatureReductionQuantity,
  'DifferenceTemperatureReductionQuantity',
  'Difference Temperature Reduction',
  QuantityType.name,
  'Deviation from standard heating correction.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '0.31'
)

export const ConsumptionCorrectionFieldMetaDescription = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.Description,
  'Description',
  'Description',
  TextType.name,
  'Description related to the corrections.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConsumptionCorrectionFieldMetaCorrectionUnitAmount = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.CorrectionUnitAmount,
  'CorrectionUnitAmount',
  'Correction Unit Amount',
  AmountType.name,
  'Correction per MWH per degree C.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '0.0000'
)

export const ConsumptionCorrectionFieldMetaConsumptionEnergyQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.ConsumptionEnergyQuantity,
  'ConsumptionEnergyQuantity',
  'Consumption Energy',
  QuantityType.name,
  'Your consumpt for district heating energy.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '563.6240'
)

export const ConsumptionCorrectionFieldMetaConsumptionWaterQuantity = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.ConsumptionWaterQuantity,
  'ConsumptionWaterQuantity',
  'Consumption Water',
  QuantityType.name,
  'Your consumpt for district heating water.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '13212.14'
)

export const ConsumptionCorrectionFieldMetaCorrectionAmount = new FieldMeta<ConsumptionCorrectionField>(
  ConsumptionCorrectionField.CorrectionAmount,
  'CorrectionAmount',
  'Correction Amount',
  AmountType.name,
  'Your correction for heating correction.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '0.00'
)

export class ConsumptionCorrectionFieldMeta {
  public static readonly UBLExtensions = ConsumptionCorrectionFieldMetaUBLExtensions
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
  [ConsumptionCorrectionField.UBLExtensions, ConsumptionCorrectionFieldMetaUBLExtensions],
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

export const ConsumptionCorrectionType: Type<ConsumptionCorrectionField> = {
  name: 'ConsumptionCorrection',
  label: 'Consumption Correction',
  module: TypeModule.cac,
  definition: 'The Statement of correction, for examples heating correction.',
  fields: ConsumptionCorrectionFieldMap,
}
