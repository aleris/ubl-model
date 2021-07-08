import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AirTransportField {
  UBLExtensions = 'UBLExtensions',
  AircraftID = 'AircraftID'
}

export const AirTransportFieldMetaUBLExtensions = new FieldMeta<AirTransportField>(
  AirTransportField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AirTransportFieldMetaAircraftID = new FieldMeta<AirTransportField>(
  AirTransportField.AircraftID,
  'AircraftID',
  'Aircraft Identifier',
  IdentifierType.name,
  'An identifer for a specific aircraft.',
  FieldCardinality.Uni,
  TypeModule.cbc,
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

export const AirTransportType: Type<AirTransportField> = {
  name: 'AirTransport',
  label: 'Air Transport',
  module: TypeModule.cac,
  definition: 'A class to identify a specific aircraft used for transportation.',
  fields: AirTransportFieldMap,
}
