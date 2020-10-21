import { FieldMeta } from '../../FieldMeta'

export enum ConditionField {
  AttributeID = 'AttributeID',
  Measure = 'Measure',
  Description = 'Description',
  MinimumMeasure = 'MinimumMeasure',
  MaximumMeasure = 'MaximumMeasure'
}

export const ConditionFieldMetaAttributeID = new FieldMeta<ConditionField>(
  ConditionField.AttributeID,
  'AttributeID',
  'Attribute Identifier',
  'Identifier',
  'An identifier for the attribute that applies to the condition.',
  '1',
  undefined,
  undefined
)

export const ConditionFieldMetaMeasure = new FieldMeta<ConditionField>(
  ConditionField.Measure,
  'Measure',
  'Measure',
  'Measure',
  'The measurement value.',
  '0..1',
  undefined,
  undefined
)

export const ConditionFieldMetaDescription = new FieldMeta<ConditionField>(
  ConditionField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the attribute that applies to the condition.',
  '0..n',
  undefined,
  undefined
)

export const ConditionFieldMetaMinimumMeasure = new FieldMeta<ConditionField>(
  ConditionField.MinimumMeasure,
  'MinimumMeasure',
  'Measure',
  'Measure',
  'The minimum value in a range of measurement for this condition.',
  '0..1',
  undefined,
  undefined
)

export const ConditionFieldMetaMaximumMeasure = new FieldMeta<ConditionField>(
  ConditionField.MaximumMeasure,
  'MaximumMeasure',
  'Measure',
  'Measure',
  'The maximum value in a range of measurement for this condition.',
  '0..1',
  undefined,
  undefined
)

export class ConditionFieldMeta {
  public static readonly AttributeID = ConditionFieldMetaAttributeID
  public static readonly Measure = ConditionFieldMetaMeasure
  public static readonly Description = ConditionFieldMetaDescription
  public static readonly MinimumMeasure = ConditionFieldMetaMinimumMeasure
  public static readonly MaximumMeasure = ConditionFieldMetaMaximumMeasure
}

export const ConditionFieldMap = new Map([
  [ConditionField.AttributeID, ConditionFieldMetaAttributeID],
  [ConditionField.Measure, ConditionFieldMetaMeasure],
  [ConditionField.Description, ConditionFieldMetaDescription],
  [ConditionField.MinimumMeasure, ConditionFieldMetaMinimumMeasure],
  [ConditionField.MaximumMeasure, ConditionFieldMetaMaximumMeasure]
])
