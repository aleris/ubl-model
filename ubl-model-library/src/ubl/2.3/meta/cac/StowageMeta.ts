import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DimensionType } from './DimensionMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum StowageField {
  UBLExtensions = 'UBLExtensions',
  LocationID = 'LocationID',
  Location = 'Location',
  MeasurementDimension = 'MeasurementDimension'
}

export const StowageFieldMetaUBLExtensions = new FieldMeta<StowageField>(
  StowageField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const StowageFieldMetaLocationID = new FieldMeta<StowageField>(
  StowageField.LocationID,
  'LocationID',
  'Location Identifier',
  IdentifierType.name,
  'An identifier for the location.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Cell Location, coded',
  undefined
)

export const StowageFieldMetaLocation = new FieldMeta<StowageField>(
  StowageField.Location,
  'Location',
  'Location',
  TextType.name,
  'Text describing the location.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  'Cell Location',
  undefined
)

export const StowageFieldMetaMeasurementDimension = new FieldMeta<StowageField>(
  StowageField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  DimensionType.name,
  'A measurable dimension (length, mass, weight, or volume) of this stowage.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class StowageFieldMeta {
  public static readonly UBLExtensions = StowageFieldMetaUBLExtensions
  public static readonly LocationID = StowageFieldMetaLocationID
  public static readonly Location = StowageFieldMetaLocation
  public static readonly MeasurementDimension = StowageFieldMetaMeasurementDimension
}

export const StowageFieldMap = new Map([
  [StowageField.UBLExtensions, StowageFieldMetaUBLExtensions],
  [StowageField.LocationID, StowageFieldMetaLocationID],
  [StowageField.Location, StowageFieldMetaLocation],
  [StowageField.MeasurementDimension, StowageFieldMetaMeasurementDimension]
])

export const StowageType: Type<StowageField> = {
  name: 'Stowage',
  label: 'Stowage',
  module: TypeModule.cac,
  definition: 'A class to describe a location on board a means of transport where specified goods or transport equipment have been stowed or are to be stowed.',
  fields: StowageFieldMap,
}
