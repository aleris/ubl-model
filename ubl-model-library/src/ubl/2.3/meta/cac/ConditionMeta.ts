import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ConditionField {
  UBLExtensions = 'UBLExtensions',
  AttributeID = 'AttributeID',
  Measure = 'Measure',
  Description = 'Description',
  MinimumMeasure = 'MinimumMeasure',
  MaximumMeasure = 'MaximumMeasure'
}

export const ConditionFieldMetaUBLExtensions = new FieldMeta<ConditionField>(
  ConditionField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ConditionFieldMetaAttributeID = new FieldMeta<ConditionField>(
  ConditionField.AttributeID,
  'AttributeID',
  'Attribute Identifier',
  IdentifierType.name,
  'An identifier for the attribute that applies to the condition.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConditionFieldMetaMeasure = new FieldMeta<ConditionField>(
  ConditionField.Measure,
  'Measure',
  'Measure',
  MeasureType.name,
  'The measurement value.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConditionFieldMetaDescription = new FieldMeta<ConditionField>(
  ConditionField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the attribute that applies to the condition.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConditionFieldMetaMinimumMeasure = new FieldMeta<ConditionField>(
  ConditionField.MinimumMeasure,
  'MinimumMeasure',
  'Minimum Measure',
  MeasureType.name,
  'The minimum value in a range of measurement for this condition.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ConditionFieldMetaMaximumMeasure = new FieldMeta<ConditionField>(
  ConditionField.MaximumMeasure,
  'MaximumMeasure',
  'Maximum Measure',
  MeasureType.name,
  'The maximum value in a range of measurement for this condition.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class ConditionFieldMeta {
  public static readonly UBLExtensions = ConditionFieldMetaUBLExtensions
  public static readonly AttributeID = ConditionFieldMetaAttributeID
  public static readonly Measure = ConditionFieldMetaMeasure
  public static readonly Description = ConditionFieldMetaDescription
  public static readonly MinimumMeasure = ConditionFieldMetaMinimumMeasure
  public static readonly MaximumMeasure = ConditionFieldMetaMaximumMeasure
}

export const ConditionFieldMap = new Map([
  [ConditionField.UBLExtensions, ConditionFieldMetaUBLExtensions],
  [ConditionField.AttributeID, ConditionFieldMetaAttributeID],
  [ConditionField.Measure, ConditionFieldMetaMeasure],
  [ConditionField.Description, ConditionFieldMetaDescription],
  [ConditionField.MinimumMeasure, ConditionFieldMetaMinimumMeasure],
  [ConditionField.MaximumMeasure, ConditionFieldMetaMaximumMeasure]
])

export const ConditionType: Type<ConditionField> = {
  name: 'Condition',
  label: 'Condition',
  module: TypeModule.cac,
  definition: 'A class to define a measurable condition of an object.',
  fields: ConditionFieldMap,
}
