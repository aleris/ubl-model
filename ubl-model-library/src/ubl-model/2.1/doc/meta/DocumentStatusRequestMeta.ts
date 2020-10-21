import { FieldMeta } from '../../FieldMeta'

export enum DocumentStatusRequestField {
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
  TrackingID = 'TrackingID',
  RequestedDocumentReference = 'RequestedDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty'
}

export const DocumentStatusRequestFieldMetaUBLExtensions = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaUBLVersionID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const DocumentStatusRequestFieldMetaCustomizationID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const DocumentStatusRequestFieldMetaProfileID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const DocumentStatusRequestFieldMetaProfileExecutionID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const DocumentStatusRequestFieldMetaID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaCopyIndicator = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaUUID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaIssueDate = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaIssueTime = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaNote = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaTrackingID = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.TrackingID,
  'TrackingID',
  'Tracking Identifier',
  'Identifier',
  'An identifier for tracking status of the business process .',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaRequestedDocumentReference = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.RequestedDocumentReference,
  'RequestedDocumentReference',
  'Document Reference',
  'DocumentReference',
  'The document about which status is requested.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaSignature = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaSenderParty = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending this document.',
  '0..1',
  undefined,
  undefined
)

export const DocumentStatusRequestFieldMetaReceiverParty = new FieldMeta<DocumentStatusRequestField>(
  DocumentStatusRequestField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this document.',
  '0..1',
  undefined,
  undefined
)

export class DocumentStatusRequestFieldMeta {
  public static readonly UBLExtensions = DocumentStatusRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = DocumentStatusRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = DocumentStatusRequestFieldMetaCustomizationID
  public static readonly ProfileID = DocumentStatusRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = DocumentStatusRequestFieldMetaProfileExecutionID
  public static readonly ID = DocumentStatusRequestFieldMetaID
  public static readonly CopyIndicator = DocumentStatusRequestFieldMetaCopyIndicator
  public static readonly UUID = DocumentStatusRequestFieldMetaUUID
  public static readonly IssueDate = DocumentStatusRequestFieldMetaIssueDate
  public static readonly IssueTime = DocumentStatusRequestFieldMetaIssueTime
  public static readonly Note = DocumentStatusRequestFieldMetaNote
  public static readonly TrackingID = DocumentStatusRequestFieldMetaTrackingID
  public static readonly RequestedDocumentReference = DocumentStatusRequestFieldMetaRequestedDocumentReference
  public static readonly Signature = DocumentStatusRequestFieldMetaSignature
  public static readonly SenderParty = DocumentStatusRequestFieldMetaSenderParty
  public static readonly ReceiverParty = DocumentStatusRequestFieldMetaReceiverParty
}

export const DocumentStatusRequestFieldMap = new Map([
  [DocumentStatusRequestField.UBLExtensions, DocumentStatusRequestFieldMetaUBLExtensions],
  [DocumentStatusRequestField.UBLVersionID, DocumentStatusRequestFieldMetaUBLVersionID],
  [DocumentStatusRequestField.CustomizationID, DocumentStatusRequestFieldMetaCustomizationID],
  [DocumentStatusRequestField.ProfileID, DocumentStatusRequestFieldMetaProfileID],
  [DocumentStatusRequestField.ProfileExecutionID, DocumentStatusRequestFieldMetaProfileExecutionID],
  [DocumentStatusRequestField.ID, DocumentStatusRequestFieldMetaID],
  [DocumentStatusRequestField.CopyIndicator, DocumentStatusRequestFieldMetaCopyIndicator],
  [DocumentStatusRequestField.UUID, DocumentStatusRequestFieldMetaUUID],
  [DocumentStatusRequestField.IssueDate, DocumentStatusRequestFieldMetaIssueDate],
  [DocumentStatusRequestField.IssueTime, DocumentStatusRequestFieldMetaIssueTime],
  [DocumentStatusRequestField.Note, DocumentStatusRequestFieldMetaNote],
  [DocumentStatusRequestField.TrackingID, DocumentStatusRequestFieldMetaTrackingID],
  [DocumentStatusRequestField.RequestedDocumentReference, DocumentStatusRequestFieldMetaRequestedDocumentReference],
  [DocumentStatusRequestField.Signature, DocumentStatusRequestFieldMetaSignature],
  [DocumentStatusRequestField.SenderParty, DocumentStatusRequestFieldMetaSenderParty],
  [DocumentStatusRequestField.ReceiverParty, DocumentStatusRequestFieldMetaReceiverParty]
])
