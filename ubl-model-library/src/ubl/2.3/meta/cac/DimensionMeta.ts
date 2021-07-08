import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DimensionFieldMetaAttributeID = new FieldMeta<DimensionField>(
  DimensionField.AttributeID,
  'AttributeID',
  'Attribute Identifier',
  IdentifierType.name,
  'An identifier for the attribute to which the measure applies.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DimensionFieldMetaMeasure = new FieldMeta<DimensionField>(
  DimensionField.Measure,
  'Measure',
  'Measure',
  MeasureType.name,
  'The measurement value.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DimensionFieldMetaDescription = new FieldMeta<DimensionField>(
  DimensionField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the measurement attribute.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DimensionFieldMetaMinimumMeasure = new FieldMeta<DimensionField>(
  DimensionField.MinimumMeasure,
  'MinimumMeasure',
  'Minimum Measure',
  MeasureType.name,
  'The minimum value in a range of measurement of this dimension.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DimensionFieldMetaMaximumMeasure = new FieldMeta<DimensionField>(
  DimensionField.MaximumMeasure,
  'MaximumMeasure',
  'Maximum Measure',
  MeasureType.name,
  'The maximum value in a range of measurement of this dimension.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const DimensionType: Type<DimensionField> = {
  name: 'Dimension',
  label: 'Dimension',
  module: TypeModule.cac,
  definition: 'A class to define a measurable dimension (length, mass, weight, volume, or area) of an item.',
  fields: DimensionFieldMap,
}
