import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EnvironmentalEmissionFieldMetaEnvironmentalEmissionTypeCode = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.EnvironmentalEmissionTypeCode,
  'EnvironmentalEmissionTypeCode',
  'Environmental Emission Type Code',
  'Code',
  'A code specifying the type of environmental emission.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const EnvironmentalEmissionFieldMetaValueMeasure = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.ValueMeasure,
  'ValueMeasure',
  'Value',
  'Measure',
  'A value measurement for the environmental emission.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const EnvironmentalEmissionFieldMetaDescription = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this environmental emission.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const EnvironmentalEmissionFieldMetaEmissionCalculationMethod = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.EmissionCalculationMethod,
  'EmissionCalculationMethod',
  'Emission Calculation Method',
  'EmissionCalculationMethod',
  'A method used to calculate the amount of this emission.',
  '0..n',
  'cac',
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
