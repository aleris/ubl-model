import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { EmissionCalculationMethodType } from './EmissionCalculationMethodMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EnvironmentalEmissionField {
  UBLExtensions = 'UBLExtensions',
  EnvironmentalEmissionTypeCode = 'EnvironmentalEmissionTypeCode',
  ValueMeasure = 'ValueMeasure',
  Description = 'Description',
  EmissionCalculationMethod = 'EmissionCalculationMethod'
}

export const EnvironmentalEmissionFieldMetaUBLExtensions = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EnvironmentalEmissionFieldMetaEnvironmentalEmissionTypeCode = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.EnvironmentalEmissionTypeCode,
  'EnvironmentalEmissionTypeCode',
  'Environmental Emission Type Code',
  CodeType.name,
  'A code specifying the type of environmental emission.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EnvironmentalEmissionFieldMetaValueMeasure = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.ValueMeasure,
  'ValueMeasure',
  'Value',
  MeasureType.name,
  'A value measurement for the environmental emission.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EnvironmentalEmissionFieldMetaDescription = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this environmental emission.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EnvironmentalEmissionFieldMetaEmissionCalculationMethod = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.EmissionCalculationMethod,
  'EmissionCalculationMethod',
  'Emission Calculation Method',
  EmissionCalculationMethodType.name,
  'A method used to calculate the amount of this emission.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class EnvironmentalEmissionFieldMeta {
  public static readonly UBLExtensions = EnvironmentalEmissionFieldMetaUBLExtensions
  public static readonly EnvironmentalEmissionTypeCode = EnvironmentalEmissionFieldMetaEnvironmentalEmissionTypeCode
  public static readonly ValueMeasure = EnvironmentalEmissionFieldMetaValueMeasure
  public static readonly Description = EnvironmentalEmissionFieldMetaDescription
  public static readonly EmissionCalculationMethod = EnvironmentalEmissionFieldMetaEmissionCalculationMethod
}

export const EnvironmentalEmissionFieldMap = new Map([
  [EnvironmentalEmissionField.UBLExtensions, EnvironmentalEmissionFieldMetaUBLExtensions],
  [EnvironmentalEmissionField.EnvironmentalEmissionTypeCode, EnvironmentalEmissionFieldMetaEnvironmentalEmissionTypeCode],
  [EnvironmentalEmissionField.ValueMeasure, EnvironmentalEmissionFieldMetaValueMeasure],
  [EnvironmentalEmissionField.Description, EnvironmentalEmissionFieldMetaDescription],
  [EnvironmentalEmissionField.EmissionCalculationMethod, EnvironmentalEmissionFieldMetaEmissionCalculationMethod]
])

export const EnvironmentalEmissionType: Type<EnvironmentalEmissionField> = {
  name: 'EnvironmentalEmission',
  label: 'Environmental Emission',
  module: TypeModule.cac,
  definition: 'A class to describe an environmental emission.',
  fields: EnvironmentalEmissionFieldMap,
}
