import { FieldMeta } from '../../FieldMeta'

export enum TransportProgressStatusField {
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
  StatusAvailableIndicator = 'StatusAvailableIndicator',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  SourceIssuerParty = 'SourceIssuerParty',
  TransportProgressStatusRequestDocumentReference = 'TransportProgressStatusRequestDocumentReference',
  TransportMeans = 'TransportMeans',
  TransportSchedule = 'TransportSchedule'
}

export const TransportProgressStatusFieldMetaUBLExtensions = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaUBLVersionID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaCustomizationID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaProfileID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaProfileExecutionID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaCopyIndicator = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaUUID = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaIssueDate = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaIssueTime = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaNote = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaStatusAvailableIndicator = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.StatusAvailableIndicator,
  'StatusAvailableIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether transport progress information is available.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaSignature = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaSenderParty = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending the Transport Progress Status.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaReceiverParty = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving the Transport Progress Status.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaSourceIssuerParty = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.SourceIssuerParty,
  'SourceIssuerParty',
  'Party',
  'Party',
  'The party that is the source of the Transport Progress Status.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaTransportProgressStatusRequestDocumentReference = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.TransportProgressStatusRequestDocumentReference,
  'TransportProgressStatusRequestDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the Transport Progress Status Request document to which this status report is a response.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaTransportMeans = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.TransportMeans,
  'TransportMeans',
  'Transport Means',
  'TransportMeans',
  'The transport means by which the current transport service is effectuated.',
  '1',
  undefined,
  undefined
)

export const TransportProgressStatusFieldMetaTransportSchedule = new FieldMeta<TransportProgressStatusField>(
  TransportProgressStatusField.TransportSchedule,
  'TransportSchedule',
  'Transport Schedule',
  'TransportSchedule',
  'Describes the status and schedule of the transport means operating the transport service as well as the current location of the transport means.',
  '0..n',
  undefined,
  undefined
)

export class TransportProgressStatusFieldMeta {
  public static readonly UBLExtensions = TransportProgressStatusFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportProgressStatusFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportProgressStatusFieldMetaCustomizationID
  public static readonly ProfileID = TransportProgressStatusFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportProgressStatusFieldMetaProfileExecutionID
  public static readonly ID = TransportProgressStatusFieldMetaID
  public static readonly CopyIndicator = TransportProgressStatusFieldMetaCopyIndicator
  public static readonly UUID = TransportProgressStatusFieldMetaUUID
  public static readonly IssueDate = TransportProgressStatusFieldMetaIssueDate
  public static readonly IssueTime = TransportProgressStatusFieldMetaIssueTime
  public static readonly Note = TransportProgressStatusFieldMetaNote
  public static readonly StatusAvailableIndicator = TransportProgressStatusFieldMetaStatusAvailableIndicator
  public static readonly Signature = TransportProgressStatusFieldMetaSignature
  public static readonly SenderParty = TransportProgressStatusFieldMetaSenderParty
  public static readonly ReceiverParty = TransportProgressStatusFieldMetaReceiverParty
  public static readonly SourceIssuerParty = TransportProgressStatusFieldMetaSourceIssuerParty
  public static readonly TransportProgressStatusRequestDocumentReference = TransportProgressStatusFieldMetaTransportProgressStatusRequestDocumentReference
  public static readonly TransportMeans = TransportProgressStatusFieldMetaTransportMeans
  public static readonly TransportSchedule = TransportProgressStatusFieldMetaTransportSchedule
}

export const TransportProgressStatusFieldMap = new Map([
  [TransportProgressStatusField.UBLExtensions, TransportProgressStatusFieldMetaUBLExtensions],
  [TransportProgressStatusField.UBLVersionID, TransportProgressStatusFieldMetaUBLVersionID],
  [TransportProgressStatusField.CustomizationID, TransportProgressStatusFieldMetaCustomizationID],
  [TransportProgressStatusField.ProfileID, TransportProgressStatusFieldMetaProfileID],
  [TransportProgressStatusField.ProfileExecutionID, TransportProgressStatusFieldMetaProfileExecutionID],
  [TransportProgressStatusField.ID, TransportProgressStatusFieldMetaID],
  [TransportProgressStatusField.CopyIndicator, TransportProgressStatusFieldMetaCopyIndicator],
  [TransportProgressStatusField.UUID, TransportProgressStatusFieldMetaUUID],
  [TransportProgressStatusField.IssueDate, TransportProgressStatusFieldMetaIssueDate],
  [TransportProgressStatusField.IssueTime, TransportProgressStatusFieldMetaIssueTime],
  [TransportProgressStatusField.Note, TransportProgressStatusFieldMetaNote],
  [TransportProgressStatusField.StatusAvailableIndicator, TransportProgressStatusFieldMetaStatusAvailableIndicator],
  [TransportProgressStatusField.Signature, TransportProgressStatusFieldMetaSignature],
  [TransportProgressStatusField.SenderParty, TransportProgressStatusFieldMetaSenderParty],
  [TransportProgressStatusField.ReceiverParty, TransportProgressStatusFieldMetaReceiverParty],
  [TransportProgressStatusField.SourceIssuerParty, TransportProgressStatusFieldMetaSourceIssuerParty],
  [TransportProgressStatusField.TransportProgressStatusRequestDocumentReference, TransportProgressStatusFieldMetaTransportProgressStatusRequestDocumentReference],
  [TransportProgressStatusField.TransportMeans, TransportProgressStatusFieldMetaTransportMeans],
  [TransportProgressStatusField.TransportSchedule, TransportProgressStatusFieldMetaTransportSchedule]
])
