import { FieldMeta } from '../FieldMeta'

export enum EmissionCalculationMethodField {
  UBLExtensions = 'UBLExtensions',
  CalculationMethodCode = 'CalculationMethodCode',
  FullnessIndicationCode = 'FullnessIndicationCode',
  MeasurementFromLocation = 'MeasurementFromLocation',
  MeasurementToLocation = 'MeasurementToLocation'
}

export const EmissionCalculationMethodFieldMetaUBLExtensions = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaCalculationMethodCode = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.CalculationMethodCode,
  'CalculationMethodCode',
  'Calculation Method Code',
  'Code',
  'A code signifying the method used to calculate the emission.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaFullnessIndicationCode = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.FullnessIndicationCode,
  'FullnessIndicationCode',
  'Fullness Indication Code',
  'Code',
  'A code signifying whether a piece of transport equipment is full, partially full, or empty. This indication is used as a parameter when calculating the environmental emission.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaMeasurementFromLocation = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.MeasurementFromLocation,
  'MeasurementFromLocation',
  'Measurement From Location',
  'Location',
  'A start location from which an environmental emission is calculated.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaMeasurementToLocation = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.MeasurementToLocation,
  'MeasurementToLocation',
  'Measurement To Location',
  'Location',
  'An end location to which an environmental emission is calculated.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class EmissionCalculationMethodFieldMeta {
  public static readonly UBLExtensions = EmissionCalculationMethodFieldMetaUBLExtensions
  public static readonly CalculationMethodCode = EmissionCalculationMethodFieldMetaCalculationMethodCode
  public static readonly FullnessIndicationCode = EmissionCalculationMethodFieldMetaFullnessIndicationCode
  public static readonly MeasurementFromLocation = EmissionCalculationMethodFieldMetaMeasurementFromLocation
  public static readonly MeasurementToLocation = EmissionCalculationMethodFieldMetaMeasurementToLocation
}

export const EmissionCalculationMethodFieldMap = new Map([
  [EmissionCalculationMethodField.UBLExtensions, EmissionCalculationMethodFieldMetaUBLExtensions],
  [EmissionCalculationMethodField.CalculationMethodCode, EmissionCalculationMethodFieldMetaCalculationMethodCode],
  [EmissionCalculationMethodField.FullnessIndicationCode, EmissionCalculationMethodFieldMetaFullnessIndicationCode],
  [EmissionCalculationMethodField.MeasurementFromLocation, EmissionCalculationMethodFieldMetaMeasurementFromLocation],
  [EmissionCalculationMethodField.MeasurementToLocation, EmissionCalculationMethodFieldMetaMeasurementToLocation]
])
