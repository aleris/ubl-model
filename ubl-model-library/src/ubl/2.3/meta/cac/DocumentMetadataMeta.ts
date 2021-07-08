import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DocumentMetadataField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  FormatID = 'FormatID',
  VersionID = 'VersionID',
  SchemaURI = 'SchemaURI',
  DocumentTypeCode = 'DocumentTypeCode'
}

export const DocumentMetadataFieldMetaUBLExtensions = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DocumentMetadataFieldMetaID = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentMetadataFieldMetaFormatID = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.FormatID,
  'FormatID',
  'Format Identifier',
  IdentifierType.name,
  'An identifier for the document format (e.g. standard business vocabularies).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'UBL, ISO20022, EDIFACT'
)

export const DocumentMetadataFieldMetaVersionID = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.VersionID,
  'VersionID',
  'Version Identifier',
  IdentifierType.name,
  'An identifier for a precise version of a document format.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '2.2'
)

export const DocumentMetadataFieldMetaSchemaURI = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.SchemaURI,
  'SchemaURI',
  'Schema URI',
  IdentifierType.name,
  'The Uniform Resource Identifier (URI) of a schema definition for the business document (e.g. a namespace URI for XML schemas, a message ID for non-xml legacy documents).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'urn:oasis:names:specification:ubl:schema:xsd:Invoice-2, INVOIC'
)

export const DocumentMetadataFieldMetaDocumentTypeCode = new FieldMeta<DocumentMetadataField>(
  DocumentMetadataField.DocumentTypeCode,
  'DocumentTypeCode',
  'Document Type Code',
  CodeType.name,
  'The type of document, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export class DocumentMetadataFieldMeta {
  public static readonly UBLExtensions = DocumentMetadataFieldMetaUBLExtensions
  public static readonly ID = DocumentMetadataFieldMetaID
  public static readonly FormatID = DocumentMetadataFieldMetaFormatID
  public static readonly VersionID = DocumentMetadataFieldMetaVersionID
  public static readonly SchemaURI = DocumentMetadataFieldMetaSchemaURI
  public static readonly DocumentTypeCode = DocumentMetadataFieldMetaDocumentTypeCode
}

export const DocumentMetadataFieldMap = new Map([
  [DocumentMetadataField.UBLExtensions, DocumentMetadataFieldMetaUBLExtensions],
  [DocumentMetadataField.ID, DocumentMetadataFieldMetaID],
  [DocumentMetadataField.FormatID, DocumentMetadataFieldMetaFormatID],
  [DocumentMetadataField.VersionID, DocumentMetadataFieldMetaVersionID],
  [DocumentMetadataField.SchemaURI, DocumentMetadataFieldMetaSchemaURI],
  [DocumentMetadataField.DocumentTypeCode, DocumentMetadataFieldMetaDocumentTypeCode]
])

export const DocumentMetadataType: Type<DocumentMetadataField> = {
  name: 'DocumentMetadata',
  label: 'Document Metadata',
  module: TypeModule.cac,
  definition: 'A class to describe the metadata of a specific business document based on any document format (e.g. UBL, EDIFACT, ...).',
  fields: DocumentMetadataFieldMap,
}
