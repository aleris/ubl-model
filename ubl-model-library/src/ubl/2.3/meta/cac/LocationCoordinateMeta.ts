import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaCoordinateSystemCode = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.CoordinateSystemCode,
  'CoordinateSystemCode',
  'Coordinate System Code',
  'Code',
  'A code signifying the location system used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLatitudeDegreesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LatitudeDegreesMeasure,
  'LatitudeDegreesMeasure',
  'Latitude Degrees',
  'Measure',
  'The degree component of a latitude measured in degrees and minutes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLatitudeMinutesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LatitudeMinutesMeasure,
  'LatitudeMinutesMeasure',
  'Latitude Minutes',
  'Measure',
  'The minutes component of a latitude measured in degrees and minutes (modulo 60).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLatitudeDirectionCode = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LatitudeDirectionCode,
  'LatitudeDirectionCode',
  'Latitude Direction Code',
  'Code',
  'A code signifying the direction of latitude measurement from the equator (north or south).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLongitudeDegreesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LongitudeDegreesMeasure,
  'LongitudeDegreesMeasure',
  'Longitude Degrees',
  'Measure',
  'The degree component of a longitude measured in degrees and minutes.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLongitudeMinutesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LongitudeMinutesMeasure,
  'LongitudeMinutesMeasure',
  'Longitude Minutes',
  'Measure',
  'The minutes component of a longitude measured in degrees and minutes (modulo 60).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLongitudeDirectionCode = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LongitudeDirectionCode,
  'LongitudeDirectionCode',
  'Longitude Direction Code',
  'Code',
  'A code signifying the direction of longitude measurement from the prime meridian (east or west).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaAltitudeMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.AltitudeMeasure,
  'AltitudeMeasure',
  'Altitude',
  'Measure',
  'The altitude of the location.',
  '0..1',
  'cbc',
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
