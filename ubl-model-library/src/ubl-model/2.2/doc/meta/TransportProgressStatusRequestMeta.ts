import { FieldMeta } from '../../FieldMeta'

export enum TransportProgressStatusRequestField {
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
  TransportMeans = 'TransportMeans',
  StatusLocation = 'StatusLocation'
}

export const TransportProgressStatusRequestFieldMetaUBLExtensions = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaUBLVersionID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaCustomizationID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaProfileID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaProfileExecutionID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaCopyIndicator = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaUUID = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaIssueDate = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaIssueTime = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaNote = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaSignature = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaSenderParty = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending the Transport Progress Status Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaReceiverParty = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving the Transport Progress Status Request.',
  '0..1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaTransportMeans = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.TransportMeans,
  'TransportMeans',
  'Transport Means',
  'TransportMeans',
  'The transport means by which the current transport service is effectuated and for which status is requested.',
  '1',
  undefined,
  undefined
)

export const TransportProgressStatusRequestFieldMetaStatusLocation = new FieldMeta<TransportProgressStatusRequestField>(
  TransportProgressStatusRequestField.StatusLocation,
  'StatusLocation',
  'Location',
  'Location',
  'A location for which status is requested.',
  '0..n',
  undefined,
  undefined
)

export class TransportProgressStatusRequestFieldMeta {
  public static readonly UBLExtensions = TransportProgressStatusRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = TransportProgressStatusRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = TransportProgressStatusRequestFieldMetaCustomizationID
  public static readonly ProfileID = TransportProgressStatusRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = TransportProgressStatusRequestFieldMetaProfileExecutionID
  public static readonly ID = TransportProgressStatusRequestFieldMetaID
  public static readonly CopyIndicator = TransportProgressStatusRequestFieldMetaCopyIndicator
  public static readonly UUID = TransportProgressStatusRequestFieldMetaUUID
  public static readonly IssueDate = TransportProgressStatusRequestFieldMetaIssueDate
  public static readonly IssueTime = TransportProgressStatusRequestFieldMetaIssueTime
  public static readonly Note = TransportProgressStatusRequestFieldMetaNote
  public static readonly Signature = TransportProgressStatusRequestFieldMetaSignature
  public static readonly SenderParty = TransportProgressStatusRequestFieldMetaSenderParty
  public static readonly ReceiverParty = TransportProgressStatusRequestFieldMetaReceiverParty
  public static readonly TransportMeans = TransportProgressStatusRequestFieldMetaTransportMeans
  public static readonly StatusLocation = TransportProgressStatusRequestFieldMetaStatusLocation
}

export const TransportProgressStatusRequestFieldMap = new Map([
  [TransportProgressStatusRequestField.UBLExtensions, TransportProgressStatusRequestFieldMetaUBLExtensions],
  [TransportProgressStatusRequestField.UBLVersionID, TransportProgressStatusRequestFieldMetaUBLVersionID],
  [TransportProgressStatusRequestField.CustomizationID, TransportProgressStatusRequestFieldMetaCustomizationID],
  [TransportProgressStatusRequestField.ProfileID, TransportProgressStatusRequestFieldMetaProfileID],
  [TransportProgressStatusRequestField.ProfileExecutionID, TransportProgressStatusRequestFieldMetaProfileExecutionID],
  [TransportProgressStatusRequestField.ID, TransportProgressStatusRequestFieldMetaID],
  [TransportProgressStatusRequestField.CopyIndicator, TransportProgressStatusRequestFieldMetaCopyIndicator],
  [TransportProgressStatusRequestField.UUID, TransportProgressStatusRequestFieldMetaUUID],
  [TransportProgressStatusRequestField.IssueDate, TransportProgressStatusRequestFieldMetaIssueDate],
  [TransportProgressStatusRequestField.IssueTime, TransportProgressStatusRequestFieldMetaIssueTime],
  [TransportProgressStatusRequestField.Note, TransportProgressStatusRequestFieldMetaNote],
  [TransportProgressStatusRequestField.Signature, TransportProgressStatusRequestFieldMetaSignature],
  [TransportProgressStatusRequestField.SenderParty, TransportProgressStatusRequestFieldMetaSenderParty],
  [TransportProgressStatusRequestField.ReceiverParty, TransportProgressStatusRequestFieldMetaReceiverParty],
  [TransportProgressStatusRequestField.TransportMeans, TransportProgressStatusRequestFieldMetaTransportMeans],
  [TransportProgressStatusRequestField.StatusLocation, TransportProgressStatusRequestFieldMetaStatusLocation]
])
