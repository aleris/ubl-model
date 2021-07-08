import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AttachmentType } from './AttachmentMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { ResultOfVerificationType } from './ResultOfVerificationMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DocumentReferenceField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  DocumentTypeCode = 'DocumentTypeCode',
  DocumentType = 'DocumentType',
  XPath = 'XPath',
  ReferencedDocumentInternalAddress = 'ReferencedDocumentInternalAddress',
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

export const DocumentReferenceFieldMetaUBLExtensions = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaID = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for the referenced document.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  'PO-001 3333-44-123'
)

export const DocumentReferenceFieldMetaCopyIndicator = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'An indicator that the referenced document is a copy (true) or the original (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaUUID = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for this document reference.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaIssueDate = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender of the referenced document, on which the document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaIssueTime = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender of the referenced document, at which the document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaDocumentTypeCode = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.DocumentTypeCode,
  'DocumentTypeCode',
  'Document Type Code',
  CodeType.name,
  'The type of document being referenced, expressed as a code.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaDocumentType = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.DocumentType,
  'DocumentType',
  'Document Type',
  TextType.name,
  'The type of document being referenced, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaXPath = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.XPath,
  'XPath',
  'XPath',
  TextType.name,
  'An unambiguous location within the bounding document or the document referenced by the parent DocumentReference, expressed as an XPath',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaReferencedDocumentInternalAddress = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.ReferencedDocumentInternalAddress,
  'ReferencedDocumentInternalAddress',
  'Referenced Document Internal Address',
  TextType.name,
  'A pointer to a location within the document being referenced',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaLanguageID = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.LanguageID,
  'LanguageID',
  'Language',
  IdentifierType.name,
  'An identifier for the language used in the referenced document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaLocaleCode = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.LocaleCode,
  'LocaleCode',
  'Locale Code',
  CodeType.name,
  'A code signifying the locale in which the language in the referenced document is used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaVersionID = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'An identifier for the current version of the referenced document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const DocumentReferenceFieldMetaDocumentStatusCode = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  CodeType.name,
  'A code signifying the status of the reference document with respect to its original state.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaDocumentDescription = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.DocumentDescription,
  'DocumentDescription',
  'Document Description',
  TextType.name,
  'Text describing the referenced document.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'stock no longer provided'
)

export const DocumentReferenceFieldMetaAttachment = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.Attachment,
  'Attachment',
  'Attachment',
  AttachmentType.name,
  'The referenced document as an attachment to the document from which it is referenced.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaValidityPeriod = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period for which this document reference is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaIssuerParty = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.IssuerParty,
  'IssuerParty',
  'Issuer Party',
  PartyType.name,
  'The party who issued the referenced document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DocumentReferenceFieldMetaResultOfVerification = new FieldMeta<DocumentReferenceField>(
  DocumentReferenceField.ResultOfVerification,
  'ResultOfVerification',
  'Result Of Verification',
  ResultOfVerificationType.name,
  'The result of an attempt to verify a signature associated with the referenced document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class DocumentReferenceFieldMeta {
  public static readonly UBLExtensions = DocumentReferenceFieldMetaUBLExtensions
  public static readonly ID = DocumentReferenceFieldMetaID
  public static readonly CopyIndicator = DocumentReferenceFieldMetaCopyIndicator
  public static readonly UUID = DocumentReferenceFieldMetaUUID
  public static readonly IssueDate = DocumentReferenceFieldMetaIssueDate
  public static readonly IssueTime = DocumentReferenceFieldMetaIssueTime
  public static readonly DocumentTypeCode = DocumentReferenceFieldMetaDocumentTypeCode
  public static readonly DocumentType = DocumentReferenceFieldMetaDocumentType
  public static readonly XPath = DocumentReferenceFieldMetaXPath
  public static readonly ReferencedDocumentInternalAddress = DocumentReferenceFieldMetaReferencedDocumentInternalAddress
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
  [DocumentReferenceField.UBLExtensions, DocumentReferenceFieldMetaUBLExtensions],
  [DocumentReferenceField.ID, DocumentReferenceFieldMetaID],
  [DocumentReferenceField.CopyIndicator, DocumentReferenceFieldMetaCopyIndicator],
  [DocumentReferenceField.UUID, DocumentReferenceFieldMetaUUID],
  [DocumentReferenceField.IssueDate, DocumentReferenceFieldMetaIssueDate],
  [DocumentReferenceField.IssueTime, DocumentReferenceFieldMetaIssueTime],
  [DocumentReferenceField.DocumentTypeCode, DocumentReferenceFieldMetaDocumentTypeCode],
  [DocumentReferenceField.DocumentType, DocumentReferenceFieldMetaDocumentType],
  [DocumentReferenceField.XPath, DocumentReferenceFieldMetaXPath],
  [DocumentReferenceField.ReferencedDocumentInternalAddress, DocumentReferenceFieldMetaReferencedDocumentInternalAddress],
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

export const DocumentReferenceType: Type<DocumentReferenceField> = {
  name: 'DocumentReference',
  label: 'Document Reference',
  module: TypeModule.cac,
  definition: 'A class to define a reference to a document.',
  fields: DocumentReferenceFieldMap,
}
