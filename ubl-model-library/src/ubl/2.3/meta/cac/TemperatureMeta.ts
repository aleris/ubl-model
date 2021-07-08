import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TemperatureField {
  UBLExtensions = 'UBLExtensions',
  AttributeID = 'AttributeID',
  Measure = 'Measure',
  Description = 'Description'
}

export const TemperatureFieldMetaUBLExtensions = new FieldMeta<TemperatureField>(
  TemperatureField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TemperatureFieldMetaAttributeID = new FieldMeta<TemperatureField>(
  TemperatureField.AttributeID,
  'AttributeID',
  'Attribute Identifier',
  IdentifierType.name,
  'An identifier for this temperature measurement.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TemperatureFieldMetaMeasure = new FieldMeta<TemperatureField>(
  TemperatureField.Measure,
  'Measure',
  'Measure',
  MeasureType.name,
  'The value of this temperature measurement.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TemperatureFieldMetaDescription = new FieldMeta<TemperatureField>(
  TemperatureField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing this temperature measurement.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
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

export const TemperatureType: Type<TemperatureField> = {
  name: 'Temperature',
  label: 'Temperature',
  module: TypeModule.cac,
  definition: 'A class to describe a measurement of temperature.',
  fields: TemperatureFieldMap,
}
