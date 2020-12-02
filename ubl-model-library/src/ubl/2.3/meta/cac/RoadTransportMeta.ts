import { FieldMeta } from '../FieldMeta'

export enum RoadTransportField {
  UBLExtensions = 'UBLExtensions',
  LicensePlateID = 'LicensePlateID'
}

export const RoadTransportFieldMetaUBLExtensions = new FieldMeta<RoadTransportField>(
  RoadTransportField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const RoadTransportFieldMetaLicensePlateID = new FieldMeta<RoadTransportField>(
  RoadTransportField.LicensePlateID,
  'LicensePlateID',
  'License Plate Identifier',
  'Identifier',
  'The license plate identifier of this vehicle.',
  '1',
  'cbc',
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
