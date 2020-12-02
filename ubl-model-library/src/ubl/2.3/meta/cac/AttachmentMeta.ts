import { FieldMeta } from '../FieldMeta'

export enum AttachmentField {
  UBLExtensions = 'UBLExtensions',
  EmbeddedDocumentBinaryObject = 'EmbeddedDocumentBinaryObject',
  EmbeddedDocument = 'EmbeddedDocument',
  ExternalReference = 'ExternalReference'
}

export const AttachmentFieldMetaUBLExtensions = new FieldMeta<AttachmentField>(
  AttachmentField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AttachmentFieldMetaEmbeddedDocumentBinaryObject = new FieldMeta<AttachmentField>(
  AttachmentField.EmbeddedDocumentBinaryObject,
  'EmbeddedDocumentBinaryObject',
  'Embedded Document',
  'BinaryObject',
  'A binary large object containing an attached document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttachmentFieldMetaEmbeddedDocument = new FieldMeta<AttachmentField>(
  AttachmentField.EmbeddedDocument,
  'EmbeddedDocument',
  'Embedded Document',
  'Text',
  'A clear text object containing an attached document.',
  '0..1',
  'cbc',
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
  'cac',
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
