import { FieldMeta } from '../../FieldMeta'

export enum TenderReceiptField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  ContractFolderID = 'ContractFolderID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  ContractName = 'ContractName',
  Note = 'Note',
  RegisteredDate = 'RegisteredDate',
  RegisteredTime = 'RegisteredTime',
  TenderDocumentReference = 'TenderDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty'
}

export const TenderReceiptFieldMetaUBLExtensions = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaUBLVersionID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const TenderReceiptFieldMetaCustomizationID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const TenderReceiptFieldMetaProfileID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const TenderReceiptFieldMetaProfileExecutionID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const TenderReceiptFieldMetaID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaCopyIndicator = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaUUID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaContractFolderID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaIssueDate = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaIssueTime = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaContractName = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Tender.',
  '0..n',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaNote = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaRegisteredDate = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.RegisteredDate,
  'RegisteredDate',
  'Registered Date',
  'Date',
  'The date, assigned by the sender, on which the Tender Receipt was created.',
  '1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaRegisteredTime = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.RegisteredTime,
  'RegisteredTime',
  'Registered Time',
  'Time',
  'The time, assigned by the sender, at which the Tender Receipt was created.',
  '1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaTenderDocumentReference = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.TenderDocumentReference,
  'TenderDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a received Tender.',
  '0..n',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaSignature = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaSenderParty = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending this document.',
  '1',
  undefined,
  undefined
)

export const TenderReceiptFieldMetaReceiverParty = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this document.',
  '1',
  undefined,
  undefined
)

export class TenderReceiptFieldMeta {
  public static readonly UBLExtensions = TenderReceiptFieldMetaUBLExtensions
  public static readonly UBLVersionID = TenderReceiptFieldMetaUBLVersionID
  public static readonly CustomizationID = TenderReceiptFieldMetaCustomizationID
  public static readonly ProfileID = TenderReceiptFieldMetaProfileID
  public static readonly ProfileExecutionID = TenderReceiptFieldMetaProfileExecutionID
  public static readonly ID = TenderReceiptFieldMetaID
  public static readonly CopyIndicator = TenderReceiptFieldMetaCopyIndicator
  public static readonly UUID = TenderReceiptFieldMetaUUID
  public static readonly ContractFolderID = TenderReceiptFieldMetaContractFolderID
  public static readonly IssueDate = TenderReceiptFieldMetaIssueDate
  public static readonly IssueTime = TenderReceiptFieldMetaIssueTime
  public static readonly ContractName = TenderReceiptFieldMetaContractName
  public static readonly Note = TenderReceiptFieldMetaNote
  public static readonly RegisteredDate = TenderReceiptFieldMetaRegisteredDate
  public static readonly RegisteredTime = TenderReceiptFieldMetaRegisteredTime
  public static readonly TenderDocumentReference = TenderReceiptFieldMetaTenderDocumentReference
  public static readonly Signature = TenderReceiptFieldMetaSignature
  public static readonly SenderParty = TenderReceiptFieldMetaSenderParty
  public static readonly ReceiverParty = TenderReceiptFieldMetaReceiverParty
}

export const TenderReceiptFieldMap = new Map([
  [TenderReceiptField.UBLExtensions, TenderReceiptFieldMetaUBLExtensions],
  [TenderReceiptField.UBLVersionID, TenderReceiptFieldMetaUBLVersionID],
  [TenderReceiptField.CustomizationID, TenderReceiptFieldMetaCustomizationID],
  [TenderReceiptField.ProfileID, TenderReceiptFieldMetaProfileID],
  [TenderReceiptField.ProfileExecutionID, TenderReceiptFieldMetaProfileExecutionID],
  [TenderReceiptField.ID, TenderReceiptFieldMetaID],
  [TenderReceiptField.CopyIndicator, TenderReceiptFieldMetaCopyIndicator],
  [TenderReceiptField.UUID, TenderReceiptFieldMetaUUID],
  [TenderReceiptField.ContractFolderID, TenderReceiptFieldMetaContractFolderID],
  [TenderReceiptField.IssueDate, TenderReceiptFieldMetaIssueDate],
  [TenderReceiptField.IssueTime, TenderReceiptFieldMetaIssueTime],
  [TenderReceiptField.ContractName, TenderReceiptFieldMetaContractName],
  [TenderReceiptField.Note, TenderReceiptFieldMetaNote],
  [TenderReceiptField.RegisteredDate, TenderReceiptFieldMetaRegisteredDate],
  [TenderReceiptField.RegisteredTime, TenderReceiptFieldMetaRegisteredTime],
  [TenderReceiptField.TenderDocumentReference, TenderReceiptFieldMetaTenderDocumentReference],
  [TenderReceiptField.Signature, TenderReceiptFieldMetaSignature],
  [TenderReceiptField.SenderParty, TenderReceiptFieldMetaSenderParty],
  [TenderReceiptField.ReceiverParty, TenderReceiptFieldMetaReceiverParty]
])
