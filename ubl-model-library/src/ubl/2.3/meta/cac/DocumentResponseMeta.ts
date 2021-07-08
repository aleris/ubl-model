import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DocumentReferenceType } from './DocumentReferenceMeta'
import { LineResponseType } from './LineResponseMeta'
import { PartyType } from './PartyMeta'
import { ResponseType } from './ResponseMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DocumentResponseField {
  UBLExtensions = 'UBLExtensions',
  Response = 'Response',
  DocumentReference = 'DocumentReference',
  IssuerParty = 'IssuerParty',
  RecipientParty = 'RecipientParty',
  LineResponse = 'LineResponse'
}

export const DocumentResponseFieldMetaUBLExtensions = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DocumentResponseFieldMetaResponse = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.Response,
  'Response',
  'Response',
  ResponseType.name,
  'A response to the document as a whole.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentResponseFieldMetaDocumentReference = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A referenced document.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentResponseFieldMetaIssuerParty = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party that issued the document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentResponseFieldMetaRecipientParty = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.RecipientParty,
  'RecipientParty',
  'Recipient Party',
  PartyType.name,
  'The party for which the document is intended.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentResponseFieldMetaLineResponse = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.LineResponse,
  'LineResponse',
  'Line Response',
  LineResponseType.name,
  'A response to a particular line in the document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DocumentResponseFieldMeta {
  public static readonly UBLExtensions = DocumentResponseFieldMetaUBLExtensions
  public static readonly Response = DocumentResponseFieldMetaResponse
  public static readonly DocumentReference = DocumentResponseFieldMetaDocumentReference
  public static readonly IssuerParty = DocumentResponseFieldMetaIssuerParty
  public static readonly RecipientParty = DocumentResponseFieldMetaRecipientParty
  public static readonly LineResponse = DocumentResponseFieldMetaLineResponse
}

export const DocumentResponseFieldMap = new Map([
  [DocumentResponseField.UBLExtensions, DocumentResponseFieldMetaUBLExtensions],
  [DocumentResponseField.Response, DocumentResponseFieldMetaResponse],
  [DocumentResponseField.DocumentReference, DocumentResponseFieldMetaDocumentReference],
  [DocumentResponseField.IssuerParty, DocumentResponseFieldMetaIssuerParty],
  [DocumentResponseField.RecipientParty, DocumentResponseFieldMetaRecipientParty],
  [DocumentResponseField.LineResponse, DocumentResponseFieldMetaLineResponse]
])

export const DocumentResponseType: Type<DocumentResponseField> = {
  name: 'DocumentResponse',
  label: 'Document Response',
  module: TypeModule.cac,
  definition: 'A class to describe an application-level response to a document.',
  fields: DocumentResponseFieldMap,
}
