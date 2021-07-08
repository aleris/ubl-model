import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LocationType } from './LocationMeta'
import { MeasureType } from '../cbc/MeasureMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaVesselID = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.VesselID,
  'VesselID',
  'Vessel Identifier',
  IdentifierType.name,
  'An identifier for a specific vessel.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Lloyds Number, Registration Number (WCO ID 167)',
  'International Maritime Organisation number of a vessel'
)

export const MaritimeTransportFieldMetaVesselName = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.VesselName,
  'VesselName',
  'Vessel Name',
  TextType.name,
  'The name of the vessel.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  'Ships Name',
  undefined
)

export const MaritimeTransportFieldMetaRadioCallSignID = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.RadioCallSignID,
  'RadioCallSignID',
  'Radio Call Sign Identifier',
  IdentifierType.name,
  'The radio call sign of the vessel.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const MaritimeTransportFieldMetaShipsRequirements = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.ShipsRequirements,
  'ShipsRequirements',
  'Ships Requirements',
  TextType.name,
  'Information about what services a vessel will require when it arrives at a port, such as refueling, maintenance, waste disposal etc.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaGrossTonnageMeasure = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.GrossTonnageMeasure,
  'GrossTonnageMeasure',
  'Gross Tonnage',
  MeasureType.name,
  'Gross tonnage is calculated by measuring a ship\'s volume (from keel to funnel, to the outside of the hull framing) and applying a mathematical formula and is used to determine things such as a ship\'s manning regulations, safety rules, registration fees and port dues.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaNetTonnageMeasure = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.NetTonnageMeasure,
  'NetTonnageMeasure',
  'Net Tonnage',
  MeasureType.name,
  'Net tonnage is calculated by measuring a ship\'s internal volume and applying a mathematical formula and is used to calculate the port duties.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaRegistryCertificateDocumentReference = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.RegistryCertificateDocumentReference,
  'RegistryCertificateDocumentReference',
  'Registry Certificate Document Reference',
  DocumentReferenceType.name,
  'The certificate issued to the ship by the ships registry in a given flag state.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const MaritimeTransportFieldMetaRegistryPortLocation = new FieldMeta<MaritimeTransportField>(
  MaritimeTransportField.RegistryPortLocation,
  'RegistryPortLocation',
  'Registry Port Location',
  LocationType.name,
  'The port in which a vessel is registered or permanently based.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const MaritimeTransportType: Type<MaritimeTransportField> = {
  name: 'MaritimeTransport',
  label: 'Maritime Transport',
  module: TypeModule.cac,
  definition: 'A class to describe a vessel used for transport by water (including sea, river, and canal).',
  fields: MaritimeTransportFieldMap,
}
