import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum LocationCoordinateField {
  UBLExtensions = 'UBLExtensions',
  CoordinateSystemCode = 'CoordinateSystemCode',
  LatitudeDegreesMeasure = 'LatitudeDegreesMeasure',
  LatitudeMinutesMeasure = 'LatitudeMinutesMeasure',
  LatitudeDirectionCode = 'LatitudeDirectionCode',
  LongitudeDegreesMeasure = 'LongitudeDegreesMeasure',
  LongitudeMinutesMeasure = 'LongitudeMinutesMeasure',
  LongitudeDirectionCode = 'LongitudeDirectionCode',
  AltitudeMeasure = 'AltitudeMeasure'
}

export const LocationCoordinateFieldMetaUBLExtensions = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaCoordinateSystemCode = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.CoordinateSystemCode,
  'CoordinateSystemCode',
  'Coordinate System Code',
  CodeType.name,
  'A code signifying the location system used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLatitudeDegreesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LatitudeDegreesMeasure,
  'LatitudeDegreesMeasure',
  'Latitude Degrees',
  MeasureType.name,
  'The degree component of a latitude measured in degrees and minutes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLatitudeMinutesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LatitudeMinutesMeasure,
  'LatitudeMinutesMeasure',
  'Latitude Minutes',
  MeasureType.name,
  'The minutes component of a latitude measured in degrees and minutes (modulo 60).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLatitudeDirectionCode = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LatitudeDirectionCode,
  'LatitudeDirectionCode',
  'Latitude Direction Code',
  CodeType.name,
  'A code signifying the direction of latitude measurement from the equator (north or south).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLongitudeDegreesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LongitudeDegreesMeasure,
  'LongitudeDegreesMeasure',
  'Longitude Degrees',
  MeasureType.name,
  'The degree component of a longitude measured in degrees and minutes.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLongitudeMinutesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LongitudeMinutesMeasure,
  'LongitudeMinutesMeasure',
  'Longitude Minutes',
  MeasureType.name,
  'The minutes component of a longitude measured in degrees and minutes (modulo 60).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLongitudeDirectionCode = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LongitudeDirectionCode,
  'LongitudeDirectionCode',
  'Longitude Direction Code',
  CodeType.name,
  'A code signifying the direction of longitude measurement from the prime meridian (east or west).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaAltitudeMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.AltitudeMeasure,
  'AltitudeMeasure',
  'Altitude',
  MeasureType.name,
  'The altitude of the location.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class LocationCoordinateFieldMeta {
  public static readonly UBLExtensions = LocationCoordinateFieldMetaUBLExtensions
  public static readonly CoordinateSystemCode = LocationCoordinateFieldMetaCoordinateSystemCode
  public static readonly LatitudeDegreesMeasure = LocationCoordinateFieldMetaLatitudeDegreesMeasure
  public static readonly LatitudeMinutesMeasure = LocationCoordinateFieldMetaLatitudeMinutesMeasure
  public static readonly LatitudeDirectionCode = LocationCoordinateFieldMetaLatitudeDirectionCode
  public static readonly LongitudeDegreesMeasure = LocationCoordinateFieldMetaLongitudeDegreesMeasure
  public static readonly LongitudeMinutesMeasure = LocationCoordinateFieldMetaLongitudeMinutesMeasure
  public static readonly LongitudeDirectionCode = LocationCoordinateFieldMetaLongitudeDirectionCode
  public static readonly AltitudeMeasure = LocationCoordinateFieldMetaAltitudeMeasure
}

export const LocationCoordinateFieldMap = new Map([
  [LocationCoordinateField.UBLExtensions, LocationCoordinateFieldMetaUBLExtensions],
  [LocationCoordinateField.CoordinateSystemCode, LocationCoordinateFieldMetaCoordinateSystemCode],
  [LocationCoordinateField.LatitudeDegreesMeasure, LocationCoordinateFieldMetaLatitudeDegreesMeasure],
  [LocationCoordinateField.LatitudeMinutesMeasure, LocationCoordinateFieldMetaLatitudeMinutesMeasure],
  [LocationCoordinateField.LatitudeDirectionCode, LocationCoordinateFieldMetaLatitudeDirectionCode],
  [LocationCoordinateField.LongitudeDegreesMeasure, LocationCoordinateFieldMetaLongitudeDegreesMeasure],
  [LocationCoordinateField.LongitudeMinutesMeasure, LocationCoordinateFieldMetaLongitudeMinutesMeasure],
  [LocationCoordinateField.LongitudeDirectionCode, LocationCoordinateFieldMetaLongitudeDirectionCode],
  [LocationCoordinateField.AltitudeMeasure, LocationCoordinateFieldMetaAltitudeMeasure]
])

export const LocationCoordinateType: Type<LocationCoordinateField> = {
  name: 'LocationCoordinate',
  label: 'Location Coordinate',
  module: TypeModule.cac,
  definition: 'A class for defining a set of geographical coordinates (apparently misnamed).',
  fields: LocationCoordinateFieldMap,
}
