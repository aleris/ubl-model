import { FieldMeta } from '../../FieldMeta'

export enum DocumentReferenceField {
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  DocumentTypeCode = 'DocumentTypeCode',
  DocumentType = 'DocumentType',
  XPath = 'XPath',
  LanguageID = 'LanguageID',
  LocaleCode = 'LocaleCode',
  VersionID = 'VersionID',
  DocumentStatusCode = 'DocumentStatusCode',
  DocumentDescription = 'DocumentDescription',
  Attachment = 'Attachment',
  ValidityPeriod = 'ValidityPeriod',
  IssuerParty = 'IssuerParty',
  ResultOfVerification = 'ResultOfVerification'
}

export const DocumentReferenceFieldMetaID = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for the referenced document.',
  '1',
  undefined,
  'PO-001 3333-44-123'
)

export const DocumentReferenceFieldMetaCopyIndicator = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'An indicator that the referenced document is a copy (true) or the original (false).',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaUUID = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for this document reference.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaIssueDate = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender of the referenced document, on which the document was issued.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaIssueTime = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender of the referenced document, at which the document was issued.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaDocumentTypeCode = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.DocumentTypeCode,
  'DocumentTypeCode',
  'Document Type Code',
  'Code',
  'The type of document being referenced, expressed as a code.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaDocumentType = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.DocumentType,
  'DocumentType',
  'Document Type',
  'Text',
  'The type of document being referenced, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaXPath = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.XPath,
  'XPath',
  'XPath',
  'Text',
  'A reference to another place in the same XML document instance in which DocumentReference appears.',
  '0..n',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaLanguageID = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.LanguageID,
  'LanguageID',
  'Language',
  'Identifier',
  'An identifier for the language used in the referenced document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaLocaleCode = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.LocaleCode,
  'LocaleCode',
  'Locale Code',
  'Code',
  'A code signifying the locale in which the language in the referenced document is used.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaVersionID = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'An identifier for the current version of the referenced document.',
  '0..1',
  undefined,
  '1.1'
)

export const DocumentReferenceFieldMetaDocumentStatusCode = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  'Code',
  'A code signifying the status of the reference document with respect to its original state.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaDocumentDescription = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.DocumentDescription,
  'DocumentDescription',
  'Description',
  'Text',
  'Text describing the referenced document.',
  '0..n',
  undefined,
  'stock no longer provided'
)

export const DocumentReferenceFieldMetaAttachment = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.Attachment,
  'Attachment',
  'Attachment',
  'Attachment',
  'The referenced document as an attachment to the document from which it is referenced.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaValidityPeriod = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'The period for which this document reference is valid.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaIssuerParty = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.IssuerParty,
  'IssuerParty',
  'Party',
  'Party',
  'The party who issued the referenced document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaResultOfVerification = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.ResultOfVerification,
  'ResultOfVerification',
  'Result Of Verification',
  'ResultOfVerification',
  'The result of an attempt to verify a signature associated with the referenced document.',
  '0..1',
  undefined,
  undefined
)

export class DocumentReferenceFieldMeta {
  public static readonly ID = DocumentReferenceFieldMetaID
  public static readonly CopyIndicator = DocumentReferenceFieldMetaCopyIndicator
  public static readonly UUID = DocumentReferenceFieldMetaUUID
  public static readonly IssueDate = DocumentReferenceFieldMetaIssueDate
  public static readonly IssueTime = DocumentReferenceFieldMetaIssueTime
  public static readonly DocumentTypeCode = DocumentReferenceFieldMetaDocumentTypeCode
  public static readonly DocumentType = DocumentReferenceFieldMetaDocumentType
  public static readonly XPath = DocumentReferenceFieldMetaXPath
  public static readonly LanguageID = DocumentReferenceFieldMetaLanguageID
  public static readonly LocaleCode = DocumentReferenceFieldMetaLocaleCode
  public static readonly VersionID = DocumentReferenceFieldMetaVersionID
  public static readonly DocumentStatusCode = DocumentReferenceFieldMetaDocumentStatusCode
  public static readonly DocumentDescription = DocumentReferenceFieldMetaDocumentDescription
  public static readonly Attachment = DocumentReferenceFieldMetaAttachment
  public static readonly ValidityPeriod = DocumentReferenceFieldMetaValidityPeriod
  public static readonly IssuerParty = DocumentReferenceFieldMetaIssuerParty
  public static readonly ResultOfVerification = DocumentReferenceFieldMetaResultOfVerification
}

export const DocumentReferenceFieldMap = new Map([
  [DocumentReferenceField.ID, DocumentReferenceFieldMetaID],
  [DocumentReferenceField.CopyIndicator, DocumentReferenceFieldMetaCopyIndicator],
  [DocumentReferenceField.UUID, DocumentReferenceFieldMetaUUID],
  [DocumentReferenceField.IssueDate, DocumentReferenceFieldMetaIssueDate],
  [DocumentReferenceField.IssueTime, DocumentReferenceFieldMetaIssueTime],
  [DocumentReferenceField.DocumentTypeCode, DocumentReferenceFieldMetaDocumentTypeCode],
  [DocumentReferenceField.DocumentType, DocumentReferenceFieldMetaDocumentType],
  [DocumentReferenceField.XPath, DocumentReferenceFieldMetaXPath],
  [DocumentReferenceField.LanguageID, DocumentReferenceFieldMetaLanguageID],
  [DocumentReferenceField.LocaleCode, DocumentReferenceFieldMetaLocaleCode],
  [DocumentReferenceField.VersionID, DocumentReferenceFieldMetaVersionID],
  [DocumentReferenceField.DocumentStatusCode, DocumentReferenceFieldMetaDocumentStatusCode],
  [DocumentReferenceField.DocumentDescription, DocumentReferenceFieldMetaDocumentDescription],
  [DocumentReferenceField.Attachment, DocumentReferenceFieldMetaAttachment],
  [DocumentReferenceField.ValidityPeriod, DocumentReferenceFieldMetaValidityPeriod],
  [DocumentReferenceField.IssuerParty, DocumentReferenceFieldMetaIssuerParty],
  [DocumentReferenceField.ResultOfVerification, DocumentReferenceFieldMetaResultOfVerification]
])
