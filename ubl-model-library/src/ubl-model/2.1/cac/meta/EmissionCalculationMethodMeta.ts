import { FieldMeta } from '../../FieldMeta'

export enum EmissionCalculationMethodField {
  CalculationMethodCode = 'CalculationMethodCode',
  FullnessIndicationCode = 'FullnessIndicationCode',
  MeasurementFromLocation = 'MeasurementFromLocation',
  MeasurementToLocation = 'MeasurementToLocation'
}

export const EmissionCalculationMethodFieldMetaCalculationMethodCode = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.CalculationMethodCode,
  'CalculationMethodCode',
  'Calculation Method Code',
  'Code',
  'A code signifying the method used to calculate the emission.',
  '0..1',
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
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaMeasurementFromLocation = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.MeasurementFromLocation,
  'MeasurementFromLocation',
  'Location',
  'Location',
  'A start location from which an environmental emission is calculated.',
  '0..1',
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaMeasurementToLocation = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.MeasurementToLocation,
  'MeasurementToLocation',
  'Location',
  'Location',
  'An end location to which an environmental emission is calculated.',
  '0..1',
  undefined,
  undefined
)

export class EmissionCalculationMethodFieldMeta {
  public static readonly CalculationMethodCode = EmissionCalculationMethodFieldMetaCalculationMethodCode
  public static readonly FullnessIndicationCode = EmissionCalculationMethodFieldMetaFullnessIndicationCode
  public static readonly MeasurementFromLocation = EmissionCalculationMethodFieldMetaMeasurementFromLocation
  public static readonly MeasurementToLocation = EmissionCalculationMethodFieldMetaMeasurementToLocation
}

export const EmissionCalculationMethodFieldMap = new Map([
  [EmissionCalculationMethodField.CalculationMethodCode, EmissionCalculationMethodFieldMetaCalculationMethodCode],
  [EmissionCalculationMethodField.FullnessIndicationCode, EmissionCalculationMethodFieldMetaFullnessIndicationCode],
  [EmissionCalculationMethodField.MeasurementFromLocation, EmissionCalculationMethodFieldMetaMeasurementFromLocation],
  [EmissionCalculationMethodField.MeasurementToLocation, EmissionCalculationMethodFieldMetaMeasurementToLocation]
])
