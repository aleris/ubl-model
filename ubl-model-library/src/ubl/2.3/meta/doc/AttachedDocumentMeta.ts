import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaUBLVersionID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const AttachedDocumentFieldMetaCustomizationID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const AttachedDocumentFieldMetaProfileID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const AttachedDocumentFieldMetaProfileExecutionID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaUUID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaIssueDate = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaIssueTime = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaNote = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaDocumentTypeCode = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.DocumentTypeCode,
  'DocumentTypeCode',
  'Document Type Code',
  'Code',
  'A code signifying the type of document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaDocumentType = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.DocumentType,
  'DocumentType',
  'Document Type',
  'Text',
  'Text specifying the type of document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaParentDocumentID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ParentDocumentID,
  'ParentDocumentID',
  'Parent Document Identifier',
  'Identifier',
  'The Identifier of the parent document.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaParentDocumentTypeCode = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ParentDocumentTypeCode,
  'ParentDocumentTypeCode',
  'Parent Document Type Code',
  'Code',
  'A code signifying the type of parent document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaParentDocumentVersionID = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ParentDocumentVersionID,
  'ParentDocumentVersionID',
  'Parent Document Version',
  'Identifier',
  'Indicates the current version of the referred document.',
  '0..1',
  'cbc',
  undefined,
  '1.1'
)

export const AttachedDocumentFieldMetaSignature = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaSenderParty = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The party sending this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaReceiverParty = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaAttachment = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.Attachment,
  'Attachment',
  'Attachment',
  'Attachment',
  'An attachment containing the document content.',
  '1',
  'cac',
  undefined,
  undefined
)

export const AttachedDocumentFieldMetaParentDocumentLineReference = new FieldMeta<AttachedDocumentField>(
  AttachedDocumentField.ParentDocumentLineReference,
  'ParentDocumentLineReference',
  'Parent Document Line Reference',
  'LineReference',
  'A reference to a line in the attached document.',
  '0..n',
  'cac',
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
