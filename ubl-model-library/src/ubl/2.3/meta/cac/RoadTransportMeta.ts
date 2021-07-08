import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum RoadTransportField {
  UBLExtensions = 'UBLExtensions',
  LicensePlateID = 'LicensePlateID'
}

export const RoadTransportFieldMetaUBLExtensions = new FieldMeta<RoadTransportField>(
  RoadTransportField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const RoadTransportFieldMetaLicensePlateID = new FieldMeta<RoadTransportField>(
  RoadTransportField.LicensePlateID,
  'LicensePlateID',
  'License Plate Identifier',
  IdentifierType.name,
  'The license plate identifier of this vehicle.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Vehicle registration number (WCO ID 167)',
  undefined
)

export class RoadTransportFieldMeta {
  public static readonly UBLExtensions = RoadTransportFieldMetaUBLExtensions
  public static readonly LicensePlateID = RoadTransportFieldMetaLicensePlateID
}

export const RoadTransportFieldMap = new Map([
  [RoadTransportField.UBLExtensions, RoadTransportFieldMetaUBLExtensions],
  [RoadTransportField.LicensePlateID, RoadTransportFieldMetaLicensePlateID]
])

export const RoadTransportType: Type<RoadTransportField> = {
  name: 'RoadTransport',
  label: 'Road Transport',
  module: TypeModule.cac,
  definition: 'A class for identifying a vehicle used for road transport.',
  fields: RoadTransportFieldMap,
}
