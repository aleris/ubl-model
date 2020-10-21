import { FieldMeta } from '../../FieldMeta'

export enum DocumentMetadataField {
  ID = 'ID',
  FormatID = 'FormatID',
  VersionID = 'VersionID',
  SchemaURI = 'SchemaURI',
  DocumentTypeCode = 'DocumentTypeCode'
}

export const DocumentMetadataFieldMetaID = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentMetadataFieldMetaFormatID = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.FormatID,
  'FormatID',
  'Format Identifier',
  'Identifier',
  'An identifier for the document format (e.g. standard business vocabularies).',
  '1',
  undefined,
  'UBL, ISO20022, EDIFACT'
)

export const DocumentMetadataFieldMetaVersionID = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.VersionID,
  'VersionID',
  'Version Identifier',
  'Identifier',
  'An identifier for a precise version of a document format.',
  '1',
  undefined,
  '2.2'
)

export const DocumentMetadataFieldMetaSchemaURI = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.SchemaURI,
  'SchemaURI',
  'Schema URI',
  'Identifier',
  'The Uniform Resource Identifier (URI) of a schema definition for the business document (e.g. a namespace URI for XML schemas, a message ID for non-xml legacy documents).',
  '0..1',
  undefined,
  'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2, INVOIC'
)

export const DocumentMetadataFieldMetaDocumentTypeCode = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.DocumentTypeCode,
  'DocumentTypeCode',
  'Document Type Code',
  'Code',
  'The type of document, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export class DocumentMetadataFieldMeta {
  public static readonly ID = DocumentMetadataFieldMetaID
  public static readonly FormatID = DocumentMetadataFieldMetaFormatID
  public static readonly VersionID = DocumentMetadataFieldMetaVersionID
  public static readonly SchemaURI = DocumentMetadataFieldMetaSchemaURI
  public static readonly DocumentTypeCode = DocumentMetadataFieldMetaDocumentTypeCode
}

export const DocumentMetadataFieldMap = new Map([
  [DocumentMetadataField.ID, DocumentMetadataFieldMetaID],
  [DocumentMetadataField.FormatID, DocumentMetadataFieldMetaFormatID],
  [DocumentMetadataField.VersionID, DocumentMetadataFieldMetaVersionID],
  [DocumentMetadataField.SchemaURI, DocumentMetadataFieldMetaSchemaURI],
  [DocumentMetadataField.DocumentTypeCode, DocumentMetadataFieldMetaDocumentTypeCode]
])
