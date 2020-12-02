import { FieldMeta } from '../FieldMeta'

export enum StowageField {
  UBLExtensions = 'UBLExtensions',
  LocationID = 'LocationID',
  Location = 'Location',
  MeasurementDimension = 'MeasurementDimension'
}

export const StowageFieldMetaUBLExtensions = new FieldMeta<StowageField>(
  StowageField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const StowageFieldMetaLocationID = new FieldMeta<StowageField>(
  StowageField.LocationID,
  'LocationID',
  'Location Identifier',
  'Identifier',
  'An identifier for the location.',
  '0..1',
  'cbc',
  'Cell Location, coded',
  undefined
)

export const StowageFieldMetaLocation = new FieldMeta<StowageField>(
  StowageField.Location,
  'Location',
  'Location',
  'Text',
  'Text describing the location.',
  '0..n',
  'cbc',
  'Cell Location',
  undefined
)

export const StowageFieldMetaMeasurementDimension = new FieldMeta<StowageField>(
  StowageField.MeasurementDimension,
  'MeasurementDimension',
  'Measurement Dimension',
  'Dimension',
  'A measurable dimension (length, mass, weight, or volume) of this stowage.',
  '0..n',
  'cac',
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
