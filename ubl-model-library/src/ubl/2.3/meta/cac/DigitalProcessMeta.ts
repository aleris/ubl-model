import { FieldMeta } from '../FieldMeta'

export enum DigitalProcessField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  Description = 'Description',
  ProfileID = 'ProfileID',
  DigitalCollaboration = 'DigitalCollaboration',
  CertificationDocumentReference = 'CertificationDocumentReference'
}

export const DigitalProcessFieldMetaUBLExtensions = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DigitalProcessFieldMetaID = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the digital collaboration.',
  '0..1',
  'cbc',
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
  'cbc',
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
  'cbc',
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
  'cac',
  undefined,
  undefined
)

export const DigitalProcessFieldMetaCertificationDocumentReference = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.CertificationDocumentReference,
  'CertificationDocumentReference',
  'Certification Document Reference',
  'DocumentReference',
  'A reference to a certification document associated with this digital process.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class DigitalProcessFieldMeta {
  public static readonly UBLExtensions = DigitalProcessFieldMetaUBLExtensions
  public static readonly ID = DigitalProcessFieldMetaID
  public static readonly Description = DigitalProcessFieldMetaDescription
  public static readonly ProfileID = DigitalProcessFieldMetaProfileID
  public static readonly DigitalCollaboration = DigitalProcessFieldMetaDigitalCollaboration
  public static readonly CertificationDocumentReference = DigitalProcessFieldMetaCertificationDocumentReference
}

export const DigitalProcessFieldMap = new Map([
  [DigitalProcessField.UBLExtensions, DigitalProcessFieldMetaUBLExtensions],
  [DigitalProcessField.ID, DigitalProcessFieldMetaID],
  [DigitalProcessField.Description, DigitalProcessFieldMetaDescription],
  [DigitalProcessField.ProfileID, DigitalProcessFieldMetaProfileID],
  [DigitalProcessField.DigitalCollaboration, DigitalProcessFieldMetaDigitalCollaboration],
  [DigitalProcessField.CertificationDocumentReference, DigitalProcessFieldMetaCertificationDocumentReference]
])
