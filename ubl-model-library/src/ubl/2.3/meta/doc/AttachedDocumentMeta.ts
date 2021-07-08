import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AttachmentType } from '../cac/AttachmentMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { LineReferenceType } from '../cac/LineReferenceMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AttachedDocumentField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Note = 'Note',
  DocumentTypeCode = 'DocumentTypeCode',
  DocumentType = 'DocumentType',
  ParentDocumentID = 'ParentDocumentID',
  ParentDocumentTypeCode = 'ParentDocumentTypeCode',
  ParentDocumentVersionID = 'ParentDocumentVersionID',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  Attachment = 'Attachment',
  ParentDocumentLineReference = 'ParentDocumentLineReference'
}

export const AttachedDocumentFieldMetaUBLExtensions = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaUBLVersionID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const AttachedDocumentFieldMetaCustomizationID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const AttachedDocumentFieldMetaProfileID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const AttachedDocumentFieldMetaProfileExecutionID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaUUID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaIssueDate = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaIssueTime = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaNote = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaDocumentTypeCode = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.DocumentTypeCode,
  'DocumentTypeCode',
  'Document Type Code',
  CodeType.name,
  'A code signifying the type of document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaDocumentType = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.DocumentType,
  'DocumentType',
  'Document Type',
  TextType.name,
  'Text specifying the type of document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaParentDocumentID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ParentDocumentID,
  'ParentDocumentID',
  'Parent Document Identifier',
  IdentifierType.name,
  'The Identifier of the parent document.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaParentDocumentTypeCode = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ParentDocumentTypeCode,
  'ParentDocumentTypeCode',
  'Parent Document Type Code',
  CodeType.name,
  'A code signifying the type of parent document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaParentDocumentVersionID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ParentDocumentVersionID,
  'ParentDocumentVersionID',
  'Parent Document Version',
  IdentifierType.name,
  'Indicates the current version of the referred document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const AttachedDocumentFieldMetaSignature = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaSenderParty = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaReceiverParty = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaAttachment = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.Attachment,
  'Attachment',
  'Attachment',
  AttachmentType.name,
  'An attachment containing the document content.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaParentDocumentLineReference = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ParentDocumentLineReference,
  'ParentDocumentLineReference',
  'Parent Document Line Reference',
  LineReferenceType.name,
  'A reference to a line in the attached document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class AttachedDocumentFieldMeta {
  public static readonly UBLExtensions = AttachedDocumentFieldMetaUBLExtensions
  public static readonly UBLVersionID = AttachedDocumentFieldMetaUBLVersionID
  public static readonly CustomizationID = AttachedDocumentFieldMetaCustomizationID
  public static readonly ProfileID = AttachedDocumentFieldMetaProfileID
  public static readonly ProfileExecutionID = AttachedDocumentFieldMetaProfileExecutionID
  public static readonly ID = AttachedDocumentFieldMetaID
  public static readonly UUID = AttachedDocumentFieldMetaUUID
  public static readonly IssueDate = AttachedDocumentFieldMetaIssueDate
  public static readonly IssueTime = AttachedDocumentFieldMetaIssueTime
  public static readonly Note = AttachedDocumentFieldMetaNote
  public static readonly DocumentTypeCode = AttachedDocumentFieldMetaDocumentTypeCode
  public static readonly DocumentType = AttachedDocumentFieldMetaDocumentType
  public static readonly ParentDocumentID = AttachedDocumentFieldMetaParentDocumentID
  public static readonly ParentDocumentTypeCode = AttachedDocumentFieldMetaParentDocumentTypeCode
  public static readonly ParentDocumentVersionID = AttachedDocumentFieldMetaParentDocumentVersionID
  public static readonly Signature = AttachedDocumentFieldMetaSignature
  public static readonly SenderParty = AttachedDocumentFieldMetaSenderParty
  public static readonly ReceiverParty = AttachedDocumentFieldMetaReceiverParty
  public static readonly Attachment = AttachedDocumentFieldMetaAttachment
  public static readonly ParentDocumentLineReference = AttachedDocumentFieldMetaParentDocumentLineReference
}

export const AttachedDocumentFieldMap = new Map([
  [AttachedDocumentField.UBLExtensions, AttachedDocumentFieldMetaUBLExtensions],
  [AttachedDocumentField.UBLVersionID, AttachedDocumentFieldMetaUBLVersionID],
  [AttachedDocumentField.CustomizationID, AttachedDocumentFieldMetaCustomizationID],
  [AttachedDocumentField.ProfileID, AttachedDocumentFieldMetaProfileID],
  [AttachedDocumentField.ProfileExecutionID, AttachedDocumentFieldMetaProfileExecutionID],
  [AttachedDocumentField.ID, AttachedDocumentFieldMetaID],
  [AttachedDocumentField.UUID, AttachedDocumentFieldMetaUUID],
  [AttachedDocumentField.IssueDate, AttachedDocumentFieldMetaIssueDate],
  [AttachedDocumentField.IssueTime, AttachedDocumentFieldMetaIssueTime],
  [AttachedDocumentField.Note, AttachedDocumentFieldMetaNote],
  [AttachedDocumentField.DocumentTypeCode, AttachedDocumentFieldMetaDocumentTypeCode],
  [AttachedDocumentField.DocumentType, AttachedDocumentFieldMetaDocumentType],
  [AttachedDocumentField.ParentDocumentID, AttachedDocumentFieldMetaParentDocumentID],
  [AttachedDocumentField.ParentDocumentTypeCode, AttachedDocumentFieldMetaParentDocumentTypeCode],
  [AttachedDocumentField.ParentDocumentVersionID, AttachedDocumentFieldMetaParentDocumentVersionID],
  [AttachedDocumentField.Signature, AttachedDocumentFieldMetaSignature],
  [AttachedDocumentField.SenderParty, AttachedDocumentFieldMetaSenderParty],
  [AttachedDocumentField.ReceiverParty, AttachedDocumentFieldMetaReceiverParty],
  [AttachedDocumentField.Attachment, AttachedDocumentFieldMetaAttachment],
  [AttachedDocumentField.ParentDocumentLineReference, AttachedDocumentFieldMetaParentDocumentLineReference]
])

export const AttachedDocumentType: Type<AttachedDocumentField> = {
  name: 'AttachedDocument',
  label: 'Attached Document',
  module: TypeModule.doc,
  definition: 'A wrapper that allows a document of any kind to be packaged with the UBL document that references it.',
  fields: AttachedDocumentFieldMap,
}
