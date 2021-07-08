import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DigitalCollaborationType } from './DigitalCollaborationMeta'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DigitalProcessFieldMetaID = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the digital collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalProcessFieldMetaDescription = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.Description,
  'Description',
  'Description',
  TextType.name,
  'Text describing the digital process.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalProcessFieldMetaProfileID = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of this digital process (e.g. an UBL profile).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'urn:www.cenbii.eu:profile:bii05:ver2.0'
)

export const DigitalProcessFieldMetaDigitalCollaboration = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.DigitalCollaboration,
  'DigitalCollaboration',
  'Digital Collaboration',
  DigitalCollaborationType.name,
  'The digital collaboration associated with this digital process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalProcessFieldMetaCertificationDocumentReference = new FieldMeta<DigitalProcessField>(
  DigitalProcessField.CertificationDocumentReference,
  'CertificationDocumentReference',
  'Certification Document Reference',
  DocumentReferenceType.name,
  'A reference to a certification document associated with this digital process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const DigitalProcessType: Type<DigitalProcessField> = {
  name: 'DigitalProcess',
  label: 'Digital Process',
  module: TypeModule.cac,
  definition: 'A class to describe a digital trade process.',
  fields: DigitalProcessFieldMap,
}
