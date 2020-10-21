import { FieldMeta } from '../../FieldMeta'

export enum DigitalProcessField {
  ID = 'ID',
  Description = 'Description',
  ProfileID = 'ProfileID',
  DigitalCollaboration = 'DigitalCollaboration',
  CertificationDocumentReference = 'CertificationDocumentReference'
}

export const DigitalProcessFieldMetaID = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the digital collaboration.',
  '0..1',
  undefined,
  undefined
)

export const DigitalProcessFieldMetaDescription = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.Description,
  'Description',
  'Description',
  'Text',
  'Text describing the digital process.',
  '0..n',
  undefined,
  undefined
)

export const DigitalProcessFieldMetaProfileID = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of this digital process (e.g. an UBL profile).',
  '0..1',
  undefined,
  'urn:www.cenbii.eu:profile:bii05:ver2.0'
)

export const DigitalProcessFieldMetaDigitalCollaboration = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.DigitalCollaboration,
  'DigitalCollaboration',
  'Digital Collaboration',
  'DigitalCollaboration',
  'The digital collaboration associated with this digital process.',
  '0..n',
  undefined,
  undefined
)

export const DigitalProcessFieldMetaCertificationDocumentReference = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.CertificationDocumentReference,
  'CertificationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a certification document associated with this digital process.',
  '0..n',
  undefined,
  undefined
)

export class DigitalProcessFieldMeta {
  public static readonly ID = DigitalProcessFieldMetaID
  public static readonly Description = DigitalProcessFieldMetaDescription
  public static readonly ProfileID = DigitalProcessFieldMetaProfileID
  public static readonly DigitalCollaboration = DigitalProcessFieldMetaDigitalCollaboration
  public static readonly CertificationDocumentReference = DigitalProcessFieldMetaCertificationDocumentReference
}

export const DigitalProcessFieldMap = new Map([
  [DigitalProcessField.ID, DigitalProcessFieldMetaID],
  [DigitalProcessField.Description, DigitalProcessFieldMetaDescription],
  [DigitalProcessField.ProfileID, DigitalProcessFieldMetaProfileID],
  [DigitalProcessField.DigitalCollaboration, DigitalProcessFieldMetaDigitalCollaboration],
  [DigitalProcessField.CertificationDocumentReference, DigitalProcessFieldMetaCertificationDocumentReference]
])
