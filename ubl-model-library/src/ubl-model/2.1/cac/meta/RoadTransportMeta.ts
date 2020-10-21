import { FieldMeta } from '../../FieldMeta'

export enum RoadTransportField {
  LicensePlateID = 'LicensePlateID'
}

export const RoadTransportFieldMetaLicensePlateID = new FieldMeta<RoadTransportField>(
  RoadTransportField.LicensePlateID,
  'LicensePlateID',
  'License Plate Identifier',
  'Identifier',
  'The license plate identifier of this vehicle.',
  '1',
  'Vehicle registration number (WCO ID 167)',
  undefined
)

export class RoadTransportFieldMeta {
  public static readonly LicensePlateID = RoadTransportFieldMetaLicensePlateID
}

export const RoadTransportFieldMap = new Map([
  [RoadTransportField.LicensePlateID, RoadTransportFieldMetaLicensePlateID]
])
