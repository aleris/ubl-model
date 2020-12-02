import { FieldMeta } from '../FieldMeta'

export enum AirTransportField {
  UBLExtensions = 'UBLExtensions',
  AircraftID = 'AircraftID'
}

export const AirTransportFieldMetaUBLExtensions = new FieldMeta<AirTransportField>(
  AirTransportField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AirTransportFieldMetaAircraftID = new FieldMeta<AirTransportField>(
  AirTransportField.AircraftID,
  'AircraftID',
  'Aircraft Identifier',
  'Identifier',
  'An identifer for a specific aircraft.',
  '1',
  'cbc',
  undefined,
  undefined
)

export class AirTransportFieldMeta {
  public static readonly UBLExtensions = AirTransportFieldMetaUBLExtensions
  public static readonly AircraftID = AirTransportFieldMetaAircraftID
}

export const AirTransportFieldMap = new Map([
  [AirTransportField.UBLExtensions, AirTransportFieldMetaUBLExtensions],
  [AirTransportField.AircraftID, AirTransportFieldMetaAircraftID]
])
