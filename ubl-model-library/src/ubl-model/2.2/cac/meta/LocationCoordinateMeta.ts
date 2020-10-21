import { FieldMeta } from '../../FieldMeta'

export enum LocationCoordinateField {
  CoordinateSystemCode = 'CoordinateSystemCode',
  LatitudeDegreesMeasure = 'LatitudeDegreesMeasure',
  LatitudeMinutesMeasure = 'LatitudeMinutesMeasure',
  LatitudeDirectionCode = 'LatitudeDirectionCode',
  LongitudeDegreesMeasure = 'LongitudeDegreesMeasure',
  LongitudeMinutesMeasure = 'LongitudeMinutesMeasure',
  LongitudeDirectionCode = 'LongitudeDirectionCode',
  AltitudeMeasure = 'AltitudeMeasure'
}

export const LocationCoordinateFieldMetaCoordinateSystemCode = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.CoordinateSystemCode,
  'CoordinateSystemCode',
  'Coordinate System Code',
  'Code',
  'A code signifying the location system used.',
  '0..1',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLatitudeDegreesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LatitudeDegreesMeasure,
  'LatitudeDegreesMeasure',
  'Degrees',
  'Measure',
  'The degree component of a latitude measured in degrees and minutes.',
  '0..1',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLatitudeMinutesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LatitudeMinutesMeasure,
  'LatitudeMinutesMeasure',
  'Minutes',
  'Measure',
  'The minutes component of a latitude measured in degrees and minutes (modulo 60).',
  '0..1',
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
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLongitudeDegreesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LongitudeDegreesMeasure,
  'LongitudeDegreesMeasure',
  'Degrees',
  'Measure',
  'The degree component of a longitude measured in degrees and minutes.',
  '0..1',
  undefined,
  undefined
)

export const LocationCoordinateFieldMetaLongitudeMinutesMeasure = new FieldMeta<LocationCoordinateField>(
  LocationCoordinateField.LongitudeMinutesMeasure,
  'LongitudeMinutesMeasure',
  'Minutes',
  'Measure',
  'The minutes component of a longitude measured in degrees and minutes (modulo 60).',
  '0..1',
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
  undefined,
  undefined
)

export class LocationCoordinateFieldMeta {
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
  [LocationCoordinateField.CoordinateSystemCode, LocationCoordinateFieldMetaCoordinateSystemCode],
  [LocationCoordinateField.LatitudeDegreesMeasure, LocationCoordinateFieldMetaLatitudeDegreesMeasure],
  [LocationCoordinateField.LatitudeMinutesMeasure, LocationCoordinateFieldMetaLatitudeMinutesMeasure],
  [LocationCoordinateField.LatitudeDirectionCode, LocationCoordinateFieldMetaLatitudeDirectionCode],
  [LocationCoordinateField.LongitudeDegreesMeasure, LocationCoordinateFieldMetaLongitudeDegreesMeasure],
  [LocationCoordinateField.LongitudeMinutesMeasure, LocationCoordinateFieldMetaLongitudeMinutesMeasure],
  [LocationCoordinateField.LongitudeDirectionCode, LocationCoordinateFieldMetaLongitudeDirectionCode],
  [LocationCoordinateField.AltitudeMeasure, LocationCoordinateFieldMetaAltitudeMeasure]
])
