import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DeliveryChannelType } from './DeliveryChannelMeta'
import { DocumentMetadataType } from './DocumentMetadataMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DigitalServiceField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  CustomizationID = 'CustomizationID',
  DigitalDocumentMetadata = 'DigitalDocumentMetadata',
  DigitalDeliveryChannel = 'DigitalDeliveryChannel',
  CertificationDocumentReference = 'CertificationDocumentReference'
}

export const DigitalServiceFieldMetaUBLExtensions = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DigitalServiceFieldMetaID = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the digital service (aka transaction ID).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'urn:www.cenbii.eu:transaction:biitrns010:ver2.0'
)

export const DigitalServiceFieldMetaCustomizationID = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of this digital service (e.g. a PEPPOL customization).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'urn:www.cenbii.eu:transaction:biitrns010:ver2.0:extended:urn:www.peppol.eu:bis:peppol5a:ver2.0'
)

export const DigitalServiceFieldMetaDigitalDocumentMetadata = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.DigitalDocumentMetadata,
  'DigitalDocumentMetadata',
  'Digital Document Metadata',
  DocumentMetadataType.name,
  'The digital document metadata associated with this digital service.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalServiceFieldMetaDigitalDeliveryChannel = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.DigitalDeliveryChannel,
  'DigitalDeliveryChannel',
  'Digital Delivery Channel',
  DeliveryChannelType.name,
  'The digital delivery channel associated with this digital service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalServiceFieldMetaCertificationDocumentReference = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.CertificationDocumentReference,
  'CertificationDocumentReference',
  'Certification Document Reference',
  DocumentReferenceType.name,
  'A reference to a certification document associated with this digital service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DigitalServiceFieldMeta {
  public static readonly UBLExtensions = DigitalServiceFieldMetaUBLExtensions
  public static readonly ID = DigitalServiceFieldMetaID
  public static readonly CustomizationID = DigitalServiceFieldMetaCustomizationID
  public static readonly DigitalDocumentMetadata = DigitalServiceFieldMetaDigitalDocumentMetadata
  public static readonly DigitalDeliveryChannel = DigitalServiceFieldMetaDigitalDeliveryChannel
  public static readonly CertificationDocumentReference = DigitalServiceFieldMetaCertificationDocumentReference
}

export const DigitalServiceFieldMap = new Map([
  [DigitalServiceField.UBLExtensions, DigitalServiceFieldMetaUBLExtensions],
  [DigitalServiceField.ID, DigitalServiceFieldMetaID],
  [DigitalServiceField.CustomizationID, DigitalServiceFieldMetaCustomizationID],
  [DigitalServiceField.DigitalDocumentMetadata, DigitalServiceFieldMetaDigitalDocumentMetadata],
  [DigitalServiceField.DigitalDeliveryChannel, DigitalServiceFieldMetaDigitalDeliveryChannel],
  [DigitalServiceField.CertificationDocumentReference, DigitalServiceFieldMetaCertificationDocumentReference]
])

export const DigitalServiceType: Type<DigitalServiceField> = {
  name: 'DigitalService',
  label: 'Digital Service',
  module: TypeModule.cac,
  definition: 'A class to describe a specific digital trade service supported by an organization for either sending or receiving business documents on different formats (e.g. UBL, ISO20022, EDIFACT, ...).',
  fields: DigitalServiceFieldMap,
}
