import { FieldMeta } from '../../FieldMeta'

export enum DigitalServiceField {
  ID = 'ID',
  CustomizationID = 'CustomizationID',
  DigitalDocumentMetadata = 'DigitalDocumentMetadata',
  DigitalDeliveryChannel = 'DigitalDeliveryChannel',
  CertificationDocumentReference = 'CertificationDocumentReference'
}

export const DigitalServiceFieldMetaID = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the digital service (aka transaction ID).',
  '0..1',
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
  undefined,
  'urn:www.cenbii.eu:transaction:biitrns010:ver2.0:extended:urn:www.peppol.eu:bis:peppol5a:ver2.0'
)

export const DigitalServiceFieldMetaDigitalDocumentMetadata = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.DigitalDocumentMetadata,
  'DigitalDocumentMetadata',
  'Document Metadata',
  'DocumentMetadata',
  'The digital document metadata associated with this digital service.',
  '1..n',
  undefined,
  undefined
)

export const DigitalServiceFieldMetaDigitalDeliveryChannel = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.DigitalDeliveryChannel,
  'DigitalDeliveryChannel',
  'Delivery Channel',
  'DeliveryChannel',
  'The digital delivery channel associated with this digital service.',
  '0..n',
  undefined,
  undefined
)

export const DigitalServiceFieldMetaCertificationDocumentReference = new FieldMeta<DigitalServiceField>(
  DigitalServiceField.CertificationDocumentReference,
  'CertificationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a certification document associated with this digital service.',
  '0..n',
  undefined,
  undefined
)

export class DigitalServiceFieldMeta {
  public static readonly ID = DigitalServiceFieldMetaID
  public static readonly CustomizationID = DigitalServiceFieldMetaCustomizationID
  public static readonly DigitalDocumentMetadata = DigitalServiceFieldMetaDigitalDocumentMetadata
  public static readonly DigitalDeliveryChannel = DigitalServiceFieldMetaDigitalDeliveryChannel
  public static readonly CertificationDocumentReference = DigitalServiceFieldMetaCertificationDocumentReference
}

export const DigitalServiceFieldMap = new Map([
  [DigitalServiceField.ID, DigitalServiceFieldMetaID],
  [DigitalServiceField.CustomizationID, DigitalServiceFieldMetaCustomizationID],
  [DigitalServiceField.DigitalDocumentMetadata, DigitalServiceFieldMetaDigitalDocumentMetadata],
  [DigitalServiceField.DigitalDeliveryChannel, DigitalServiceFieldMetaDigitalDeliveryChannel],
  [DigitalServiceField.CertificationDocumentReference, DigitalServiceFieldMetaCertificationDocumentReference]
])
