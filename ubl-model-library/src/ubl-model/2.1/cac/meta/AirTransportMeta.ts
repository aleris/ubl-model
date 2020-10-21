import { FieldMeta } from '../../FieldMeta'

export enum AirTransportField {
  AircraftID = 'AircraftID'
}

export const AirTransportFieldMetaAircraftID = new FieldMeta<AirTransportField>(
  AirTransportField.AircraftID,
  'AircraftID',
  'Aircraft Identifier',
  'Identifier',
  'An identifer for a specific aircraft.',
  '1',
  undefined,
  undefined
)

export class AirTransportFieldMeta {
  public static readonly AircraftID = AirTransportFieldMetaAircraftID
}

export const AirTransportFieldMap = new Map([
  [AirTransportField.AircraftID, AirTransportFieldMetaAircraftID]
])
