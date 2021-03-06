import { FieldMeta } from '../FieldMeta'

export enum TemperatureField {
  UBLExtensions = 'UBLExtensions',
  AttributeID = 'AttributeID',
  Measure = 'Measure',
  Description = 'Description'
}

export const TemperatureFieldMetaUBLExtensions = new FieldMeta<TemperatureField>(
  TemperatureField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TemperatureFieldMetaAttributeID = new FieldMeta<TemperatureField>(
  TemperatureField.AttributeID,
  'AttributeID',
  'Attribute Identifier',
  'Identifier',
  'An identifier for this temperature measurement.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TemperatureFieldMetaMeasure = new FieldMeta<TemperatureField>(
  TemperatureField.Measure,
  'Measure',
  'Measure',
  'Measure',
  'The value of this temperature measurement.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TemperatureFieldMetaDescription = new FieldMeta<TemperatureField>(
  TemperatureField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing this temperature measurement.',
  '0..n',
  'cbc',
  undefined,
  'at sea level'
)

export class TemperatureFieldMeta {
  public static readonly UBLExtensions = TemperatureFieldMetaUBLExtensions
  public static readonly AttributeID = TemperatureFieldMetaAttributeID
  public static readonly Measure = TemperatureFieldMetaMeasure
  public static readonly Description = TemperatureFieldMetaDescription
}

export const TemperatureFieldMap = new Map([
  [TemperatureField.UBLExtensions, TemperatureFieldMetaUBLExtensions],
  [TemperatureField.AttributeID, TemperatureFieldMetaAttributeID],
  [TemperatureField.Measure, TemperatureFieldMetaMeasure],
  [TemperatureField.Description, TemperatureFieldMetaDescription]
])
