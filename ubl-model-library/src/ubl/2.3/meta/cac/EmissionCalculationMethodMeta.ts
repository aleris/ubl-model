import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { LocationType } from './LocationMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaCalculationMethodCode = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.CalculationMethodCode,
  'CalculationMethodCode',
  'Calculation Method Code',
  CodeType.name,
  'A code signifying the method used to calculate the emission.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaFullnessIndicationCode = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.FullnessIndicationCode,
  'FullnessIndicationCode',
  'Fullness Indication Code',
  CodeType.name,
  'A code signifying whether a piece of transport equipment is full, partially full, or empty. This indication is used as a parameter when calculating the environmental emission.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaMeasurementFromLocation = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.MeasurementFromLocation,
  'MeasurementFromLocation',
  'Measurement From Location',
  LocationType.name,
  'A start location from which an environmental emission is calculated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EmissionCalculationMethodFieldMetaMeasurementToLocation = new FieldMeta<EmissionCalculationMethodField>(
  EmissionCalculationMethodField.MeasurementToLocation,
  'MeasurementToLocation',
  'Measurement To Location',
  LocationType.name,
  'An end location to which an environmental emission is calculated.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const EmissionCalculationMethodType: Type<EmissionCalculationMethodField> = {
  name: 'EmissionCalculationMethod',
  label: 'Emission Calculation Method',
  module: TypeModule.cac,
  definition: 'A class to define how an environmental emission is calculated.',
  fields: EmissionCalculationMethodFieldMap,
}
