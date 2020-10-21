import { FieldMeta } from '../../FieldMeta'

export enum DocumentStatusField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Note = 'Note',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  DocumentResponse = 'DocumentResponse',
  AdditionalDocumentResponse = 'AdditionalDocumentResponse'
}

export const DocumentStatusFieldMetaUBLExtensions = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaUBLVersionID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const DocumentStatusFieldMetaCustomizationID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const DocumentStatusFieldMetaProfileID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const DocumentStatusFieldMetaProfileExecutionID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const DocumentStatusFieldMetaID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaCopyIndicator = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaUUID = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaIssueDate = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaIssueTime = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaNote = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaSignature = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaSenderParty = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending this document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaReceiverParty = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaDocumentResponse = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.DocumentResponse,
  'DocumentResponse',
  'Document Response',
  'DocumentResponse',
  'A response to the document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusFieldMetaAdditionalDocumentResponse = new FieldMeta<DocumentStatusField>(
  DocumentStatusField.AdditionalDocumentResponse,
  'AdditionalDocumentResponse',
  'Document Response',
  'DocumentResponse',
  'A document linked or related to the document for which the status was requested.',
  '0..n',
  undefined,
  undefined
)

export class DocumentStatusFieldMeta {
  public static readonly UBLExtensions = DocumentStatusFieldMetaUBLExtensions
  public static readonly UBLVersionID = DocumentStatusFieldMetaUBLVersionID
  public static readonly CustomizationID = DocumentStatusFieldMetaCustomizationID
  public static readonly ProfileID = DocumentStatusFieldMetaProfileID
  public static readonly ProfileExecutionID = DocumentStatusFieldMetaProfileExecutionID
  public static readonly ID = DocumentStatusFieldMetaID
  public static readonly CopyIndicator = DocumentStatusFieldMetaCopyIndicator
  public static readonly UUID = DocumentStatusFieldMetaUUID
  public static readonly IssueDate = DocumentStatusFieldMetaIssueDate
  public static readonly IssueTime = DocumentStatusFieldMetaIssueTime
  public static readonly Note = DocumentStatusFieldMetaNote
  public static readonly Signature = DocumentStatusFieldMetaSignature
  public static readonly SenderParty = DocumentStatusFieldMetaSenderParty
  public static readonly ReceiverParty = DocumentStatusFieldMetaReceiverParty
  public static readonly DocumentResponse = DocumentStatusFieldMetaDocumentResponse
  public static readonly AdditionalDocumentResponse = DocumentStatusFieldMetaAdditionalDocumentResponse
}

export const DocumentStatusFieldMap = new Map([
  [DocumentStatusField.UBLExtensions, DocumentStatusFieldMetaUBLExtensions],
  [DocumentStatusField.UBLVersionID, DocumentStatusFieldMetaUBLVersionID],
  [DocumentStatusField.CustomizationID, DocumentStatusFieldMetaCustomizationID],
  [DocumentStatusField.ProfileID, DocumentStatusFieldMetaProfileID],
  [DocumentStatusField.ProfileExecutionID, DocumentStatusFieldMetaProfileExecutionID],
  [DocumentStatusField.ID, DocumentStatusFieldMetaID],
  [DocumentStatusField.CopyIndicator, DocumentStatusFieldMetaCopyIndicator],
  [DocumentStatusField.UUID, DocumentStatusFieldMetaUUID],
  [DocumentStatusField.IssueDate, DocumentStatusFieldMetaIssueDate],
  [DocumentStatusField.IssueTime, DocumentStatusFieldMetaIssueTime],
  [DocumentStatusField.Note, DocumentStatusFieldMetaNote],
  [DocumentStatusField.Signature, DocumentStatusFieldMetaSignature],
  [DocumentStatusField.SenderParty, DocumentStatusFieldMetaSenderParty],
  [DocumentStatusField.ReceiverParty, DocumentStatusFieldMetaReceiverParty],
  [DocumentStatusField.DocumentResponse, DocumentStatusFieldMetaDocumentResponse],
  [DocumentStatusField.AdditionalDocumentResponse, DocumentStatusFieldMetaAdditionalDocumentResponse]
])
