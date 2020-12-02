import { FieldMeta } from '../FieldMeta'

export enum MaritimeTransportField {
  UBLExtensions = 'UBLExtensions',
  VesselID = 'VesselID',
  VesselName = 'VesselName',
  RadioCallSignID = 'RadioCallSignID',
  ShipsRequirements = 'ShipsRequirements',
  GrossTonnageMeasure = 'GrossTonnageMeasure',
  NetTonnageMeasure = 'NetTonnageMeasure',
  RegistryCertificateDocumentReference = 'RegistryCertificateDocumentReference',
  RegistryPortLocation = 'RegistryPortLocation'
}

export const MaritimeTransportFieldMetaUBLExtensions = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaVesselID = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.VesselID,
  'VesselID',
  'Vessel Identifier',
  'Identifier',
  'An identifier for a specific vessel.',
  '0..1',
  'cbc',
  'Lloyds Number, Registration Number (WCO ID 167)',
  'International Maritime Organisation number of a vessel'
)

export const MaritimeTransportFieldMetaVesselName = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.VesselName,
  'VesselName',
  'Vessel Name',
  'Text',
  'The name of the vessel.',
  '0..1',
  'cbc',
  'Ships Name',
  undefined
)

export const MaritimeTransportFieldMetaRadioCallSignID = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.RadioCallSignID,
  'RadioCallSignID',
  'Radio Call Sign Identifier',
  'Identifier',
  'The radio call sign of the vessel.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const MaritimeTransportFieldMetaShipsRequirements = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.ShipsRequirements,
  'ShipsRequirements',
  'Ships Requirements',
  'Text',
  'Information about what services a vessel will require when it arrives at a port, such as refueling, maintenance, waste disposal etc.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaGrossTonnageMeasure = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.GrossTonnageMeasure,
  'GrossTonnageMeasure',
  'Gross Tonnage',
  'Measure',
  'Gross tonnage is calculated by measuring a ship\'s volume (from keel to funnel, to the outside of the hull framing) and applying a mathematical formula and is used to determine things such as a ship\'s manning regulations, safety rules, registration fees and port dues.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaNetTonnageMeasure = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.NetTonnageMeasure,
  'NetTonnageMeasure',
  'Net Tonnage',
  'Measure',
  'Net tonnage is calculated by measuring a ship\'s internal volume and applying a mathematical formula and is used to calculate the port duties.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaRegistryCertificateDocumentReference = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.RegistryCertificateDocumentReference,
  'RegistryCertificateDocumentReference',
  'Registry Certificate Document Reference',
  'DocumentReference',
  'The certificate issued to the ship by the ships registry in a given flag state.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaRegistryPortLocation = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.RegistryPortLocation,
  'RegistryPortLocation',
  'Registry Port Location',
  'Location',
  'The port in which a vessel is registered or permanently based.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class MaritimeTransportFieldMeta {
  public static readonly UBLExtensions = MaritimeTransportFieldMetaUBLExtensions
  public static readonly VesselID = MaritimeTransportFieldMetaVesselID
  public static readonly VesselName = MaritimeTransportFieldMetaVesselName
  public static readonly RadioCallSignID = MaritimeTransportFieldMetaRadioCallSignID
  public static readonly ShipsRequirements = MaritimeTransportFieldMetaShipsRequirements
  public static readonly GrossTonnageMeasure = MaritimeTransportFieldMetaGrossTonnageMeasure
  public static readonly NetTonnageMeasure = MaritimeTransportFieldMetaNetTonnageMeasure
  public static readonly RegistryCertificateDocumentReference = MaritimeTransportFieldMetaRegistryCertificateDocumentReference
  public static readonly RegistryPortLocation = MaritimeTransportFieldMetaRegistryPortLocation
}

export const MaritimeTransportFieldMap = new Map([
  [MaritimeTransportField.UBLExtensions, MaritimeTransportFieldMetaUBLExtensions],
  [MaritimeTransportField.VesselID, MaritimeTransportFieldMetaVesselID],
  [MaritimeTransportField.VesselName, MaritimeTransportFieldMetaVesselName],
  [MaritimeTransportField.RadioCallSignID, MaritimeTransportFieldMetaRadioCallSignID],
  [MaritimeTransportField.ShipsRequirements, MaritimeTransportFieldMetaShipsRequirements],
  [MaritimeTransportField.GrossTonnageMeasure, MaritimeTransportFieldMetaGrossTonnageMeasure],
  [MaritimeTransportField.NetTonnageMeasure, MaritimeTransportFieldMetaNetTonnageMeasure],
  [MaritimeTransportField.RegistryCertificateDocumentReference, MaritimeTransportFieldMetaRegistryCertificateDocumentReference],
  [MaritimeTransportField.RegistryPortLocation, MaritimeTransportFieldMetaRegistryPortLocation]
])
