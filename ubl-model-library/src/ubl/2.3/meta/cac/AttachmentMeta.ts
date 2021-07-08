import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { BinaryObjectType } from '../cbc/BinaryObjectMeta'
import { ExternalReferenceType } from './ExternalReferenceMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AttachmentField {
  UBLExtensions = 'UBLExtensions',
  EmbeddedDocumentBinaryObject = 'EmbeddedDocumentBinaryObject',
  EmbeddedDocument = 'EmbeddedDocument',
  ExternalReference = 'ExternalReference'
}

export const AttachmentFieldMetaUBLExtensions = new FieldMeta<AttachmentField>(
  AttachmentField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AttachmentFieldMetaEmbeddedDocumentBinaryObject = new FieldMeta<AttachmentField>(
  AttachmentField.EmbeddedDocumentBinaryObject,
  'EmbeddedDocumentBinaryObject',
  'Embedded Document',
  BinaryObjectType.name,
  'A binary large object containing an attached document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachmentFieldMetaEmbeddedDocument = new FieldMeta<AttachmentField>(
  AttachmentField.EmbeddedDocument,
  'EmbeddedDocument',
  'Embedded Document',
  TextType.name,
  'A clear text object containing an attached document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachmentFieldMetaExternalReference = new FieldMeta<AttachmentField>(
  AttachmentField.ExternalReference,
  'ExternalReference',
  'External Reference',
  ExternalReferenceType.name,
  'A reference to an attached document that is external to the document(s) being exchanged.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class AttachmentFieldMeta {
  public static readonly UBLExtensions = AttachmentFieldMetaUBLExtensions
  public static readonly EmbeddedDocumentBinaryObject = AttachmentFieldMetaEmbeddedDocumentBinaryObject
  public static readonly EmbeddedDocument = AttachmentFieldMetaEmbeddedDocument
  public static readonly ExternalReference = AttachmentFieldMetaExternalReference
}

export const AttachmentFieldMap = new Map([
  [AttachmentField.UBLExtensions, AttachmentFieldMetaUBLExtensions],
  [AttachmentField.EmbeddedDocumentBinaryObject, AttachmentFieldMetaEmbeddedDocumentBinaryObject],
  [AttachmentField.EmbeddedDocument, AttachmentFieldMetaEmbeddedDocument],
  [AttachmentField.ExternalReference, AttachmentFieldMetaExternalReference]
])

export const AttachmentType: Type<AttachmentField> = {
  name: 'Attachment',
  label: 'Attachment',
  module: TypeModule.cac,
  definition: 'A class to describe an attached document. An attachment can refer to an external document or be included with the document being exchanged.',
  fields: AttachmentFieldMap,
}
