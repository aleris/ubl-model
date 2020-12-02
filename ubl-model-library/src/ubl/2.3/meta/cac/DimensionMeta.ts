import { FieldMeta } from '../FieldMeta'

export enum DimensionField {
  UBLExtensions = 'UBLExtensions',
  AttributeID = 'AttributeID',
  Measure = 'Measure',
  Description = 'Description',
  MinimumMeasure = 'MinimumMeasure',
  MaximumMeasure = 'MaximumMeasure'
}

export const DimensionFieldMetaUBLExtensions = new FieldMeta<DimensionField>(
  DimensionField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DimensionFieldMetaAttributeID = new FieldMeta<DimensionField>(
  DimensionField.AttributeID,
  'AttributeID',
  'Attribute Identifier',
  'Identifier',
  'An identifier for the attribute to which the measure applies.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const DimensionFieldMetaMeasure = new FieldMeta<DimensionField>(
  DimensionField.Measure,
  'Measure',
  'Measure',
  'Measure',
  'The measurement value.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DimensionFieldMetaDescription = new FieldMeta<DimensionField>(
  DimensionField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the measurement attribute.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const DimensionFieldMetaMinimumMeasure = new FieldMeta<DimensionField>(
  DimensionField.MinimumMeasure,
  'MinimumMeasure',
  'Minimum Measure',
  'Measure',
  'The minimum value in a range of measurement of this dimension.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DimensionFieldMetaMaximumMeasure = new FieldMeta<DimensionField>(
  DimensionField.MaximumMeasure,
  'MaximumMeasure',
  'Maximum Measure',
  'Measure',
  'The maximum value in a range of measurement of this dimension.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export class DimensionFieldMeta {
  public static readonly UBLExtensions = DimensionFieldMetaUBLExtensions
  public static readonly AttributeID = DimensionFieldMetaAttributeID
  public static readonly Measure = DimensionFieldMetaMeasure
  public static readonly Description = DimensionFieldMetaDescription
  public static readonly MinimumMeasure = DimensionFieldMetaMinimumMeasure
  public static readonly MaximumMeasure = DimensionFieldMetaMaximumMeasure
}

export const DimensionFieldMap = new Map([
  [DimensionField.UBLExtensions, DimensionFieldMetaUBLExtensions],
  [DimensionField.AttributeID, DimensionFieldMetaAttributeID],
  [DimensionField.Measure, DimensionFieldMetaMeasure],
  [DimensionField.Description, DimensionFieldMetaDescription],
  [DimensionField.MinimumMeasure, DimensionFieldMetaMinimumMeasure],
  [DimensionField.MaximumMeasure, DimensionFieldMetaMaximumMeasure]
])
