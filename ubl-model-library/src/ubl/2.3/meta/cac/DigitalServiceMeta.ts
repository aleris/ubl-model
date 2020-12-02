import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DigitalServiceFieldMetaID = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the digital service (aka transaction ID).',
  '0..1',
  'cbc',
  undefined,
  'urn:www.cenbii.eu:transaction:biitrns010:ver2.0'
)

export const DigitalServiceFieldMetaCustomizationID = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of this digital service (e.g. a PEPPOL customization).',
  '0..1',
  'cbc',
  undefined,
  'urn:www.cenbii.eu:transaction:biitrns010:ver2.0:extended:urn:www.peppol.eu:bis:peppol5a:ver2.0'
)

export const DigitalServiceFieldMetaDigitalDocumentMetadata = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.DigitalDocumentMetadata,
  'DigitalDocumentMetadata',
  'Digital Document Metadata',
  'DocumentMetadata',
  'The digital document metadata associated with this digital service.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const DigitalServiceFieldMetaDigitalDeliveryChannel = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.DigitalDeliveryChannel,
  'DigitalDeliveryChannel',
  'Digital Delivery Channel',
  'DeliveryChannel',
  'The digital delivery channel associated with this digital service.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const DigitalServiceFieldMetaCertificationDocumentReference = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.CertificationDocumentReference,
  'CertificationDocumentReference',
  'Certification Document Reference',
  'DocumentReference',
  'A reference to a certification document associated with this digital service.',
  '0..n',
  'cac',
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
