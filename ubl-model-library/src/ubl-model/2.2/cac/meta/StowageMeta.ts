import { FieldMeta } from '../../FieldMeta'

export enum StowageField {
  LocationID = 'LocationID',
  Location = 'Location',
  MeasurementDimension = 'MeasurementDimension'
}

export const StowageFieldMetaLocationID = new FieldMeta<StowageField>(
  StowageField.LocationID,
  'LocationID',
  'Location Identifier',
  'Identifier',
  'An identifier for the location.',
  '0..1',
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
  'Cell Location',
  undefined
)

export const StowageFieldMetaMeasurementDimension = new FieldMeta<StowageField>(
  StowageField.MeasurementDimension,
  'MeasurementDimension',
  'Dimension',
  'Dimension',
  'A measurable dimension (length, mass, weight, or volume) of this stowage.',
  '0..n',
  undefined,
  undefined
)

export class StowageFieldMeta {
  public static readonly LocationID = StowageFieldMetaLocationID
  public static readonly Location = StowageFieldMetaLocation
  public static readonly MeasurementDimension = StowageFieldMetaMeasurementDimension
}

export const StowageFieldMap = new Map([
  [StowageField.LocationID, StowageFieldMetaLocationID],
  [StowageField.Location, StowageFieldMetaLocation],
  [StowageField.MeasurementDimension, StowageFieldMetaMeasurementDimension]
])
