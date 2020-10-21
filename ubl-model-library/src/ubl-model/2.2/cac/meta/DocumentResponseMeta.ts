import { FieldMeta } from '../../FieldMeta'

export enum DocumentResponseField {
  Response = 'Response',
  DocumentReference = 'DocumentReference',
  IssuerParty = 'IssuerParty',
  RecipientParty = 'RecipientParty',
  LineResponse = 'LineResponse'
}

export const DocumentResponseFieldMetaResponse = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.Response,
  'Response',
  'Response',
  'Response',
  'A response to the document as a whole.',
  '1',
  undefined,
  undefined
)

export const DocumentResponseFieldMetaDocumentReference = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A referenced document.',
  '1..n',
  undefined,
  undefined
)

export const DocumentResponseFieldMetaIssuerParty = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.IssuerParty,
  'IssuerParty',
  'Party',
  'Party',
  'The party that issued the document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentResponseFieldMetaRecipientParty = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.RecipientParty,
  'RecipientParty',
  'Party',
  'Party',
  'The party for which the document is intended.',
  '0..1',
  undefined,
  undefined
)

export const DocumentResponseFieldMetaLineResponse = new FieldMeta<DocumentResponseField>(
  DocumentResponseField.LineResponse,
  'LineResponse',
  'Line Response',
  'LineResponse',
  'A response to a particular line in the document.',
  '0..n',
  undefined,
  undefined
)

export class DocumentResponseFieldMeta {
  public static readonly Response = DocumentResponseFieldMetaResponse
  public static readonly DocumentReference = DocumentResponseFieldMetaDocumentReference
  public static readonly IssuerParty = DocumentResponseFieldMetaIssuerParty
  public static readonly RecipientParty = DocumentResponseFieldMetaRecipientParty
  public static readonly LineResponse = DocumentResponseFieldMetaLineResponse
}

export const DocumentResponseFieldMap = new Map([
  [DocumentResponseField.Response, DocumentResponseFieldMetaResponse],
  [DocumentResponseField.DocumentReference, DocumentResponseFieldMetaDocumentReference],
  [DocumentResponseField.IssuerParty, DocumentResponseFieldMetaIssuerParty],
  [DocumentResponseField.RecipientParty, DocumentResponseFieldMetaRecipientParty],
  [DocumentResponseField.LineResponse, DocumentResponseFieldMetaLineResponse]
])
