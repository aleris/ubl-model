import { FieldMeta } from '../../FieldMeta'

export enum EnvironmentalEmissionField {
  EnvironmentalEmissionTypeCode = 'EnvironmentalEmissionTypeCode',
  ValueMeasure = 'ValueMeasure',
  Description = 'Description',
  EmissionCalculationMethod = 'EmissionCalculationMethod'
}

export const EnvironmentalEmissionFieldMetaEnvironmentalEmissionTypeCode = new FieldMeta<EnvironmentalEmissionField>(
  EnvironmentalEmissionField.EnvironmentalEmissionTypeCode,
  'EnvironmentalEmissionTypeCode',
  'Environmental Emission Type Code',
  'Code',
  'A code specifying the type of environmental emission.',
  '1',
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
  undefined,
  undefined
)

export class EnvironmentalEmissionFieldMeta {
  public static readonly EnvironmentalEmissionTypeCode = EnvironmentalEmissionFieldMetaEnvironmentalEmissionTypeCode
  public static readonly ValueMeasure = EnvironmentalEmissionFieldMetaValueMeasure
  public static readonly Description = EnvironmentalEmissionFieldMetaDescription
  public static readonly EmissionCalculationMethod = EnvironmentalEmissionFieldMetaEmissionCalculationMethod
}

export const EnvironmentalEmissionFieldMap = new Map([
  [EnvironmentalEmissionField.EnvironmentalEmissionTypeCode, EnvironmentalEmissionFieldMetaEnvironmentalEmissionTypeCode],
  [EnvironmentalEmissionField.ValueMeasure, EnvironmentalEmissionFieldMetaValueMeasure],
  [EnvironmentalEmissionField.Description, EnvironmentalEmissionFieldMetaDescription],
  [EnvironmentalEmissionField.EmissionCalculationMethod, EnvironmentalEmissionFieldMetaEmissionCalculationMethod]
])
