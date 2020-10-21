import { FieldMeta } from '../../FieldMeta'

export enum AttachmentField {
  EmbeddedDocumentBinaryObject = 'EmbeddedDocumentBinaryObject',
  EmbeddedDocument = 'EmbeddedDocument',
  ExternalReference = 'ExternalReference'
}

export const AttachmentFieldMetaEmbeddedDocumentBinaryObject = new FieldMeta<AttachmentField>(
  AttachmentField.EmbeddedDocumentBinaryObject,
  'EmbeddedDocumentBinaryObject',
  'Document',
  'BinaryObject',
  'A binary large object containing an attached document.',
  '0..1',
  undefined,
  undefined
)

export const AttachmentFieldMetaEmbeddedDocument = new FieldMeta<AttachmentField>(
  AttachmentField.EmbeddedDocument,
  'EmbeddedDocument',
  'Document',
  'Text',
  'A clear text object containing an attached document.',
  '0..1',
  undefined,
  undefined
)

export const AttachmentFieldMetaExternalReference = new FieldMeta<AttachmentField>(
  AttachmentField.ExternalReference,
  'ExternalReference',
  'External Reference',
  'ExternalReference',
  'A reference to an attached document that is external to the document(s) being exchanged.',
  '0..1',
  undefined,
  undefined
)

export class AttachmentFieldMeta {
  public static readonly EmbeddedDocumentBinaryObject = AttachmentFieldMetaEmbeddedDocumentBinaryObject
  public static readonly EmbeddedDocument = AttachmentFieldMetaEmbeddedDocument
  public static readonly ExternalReference = AttachmentFieldMetaExternalReference
}

export const AttachmentFieldMap = new Map([
  [AttachmentField.EmbeddedDocumentBinaryObject, AttachmentFieldMetaEmbeddedDocumentBinaryObject],
  [AttachmentField.EmbeddedDocument, AttachmentFieldMetaEmbeddedDocument],
  [AttachmentField.ExternalReference, AttachmentFieldMetaExternalReference]
])
