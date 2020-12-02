import { FieldMeta } from '../FieldMeta'

export enum AwardedNotificationField {
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
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  MinutesDocumentReference = 'MinutesDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  TenderResult = 'TenderResult',
  FinalFinancialGuarantee = 'FinalFinancialGuarantee',
  Signature = 'Signature'
}

export const AwardedNotificationFieldMetaUBLExtensions = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaUBLVersionID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const AwardedNotificationFieldMetaCustomizationID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const AwardedNotificationFieldMetaProfileID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const AwardedNotificationFieldMetaProfileExecutionID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const AwardedNotificationFieldMetaID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaCopyIndicator = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaUUID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaContractFolderID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaIssueDate = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaIssueTime = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaContractName = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'The name, expressed as text, of this procurement project.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaNote = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaSenderParty = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The party sending this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaReceiverParty = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving this document.',
  '1',
  'cac',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaMinutesDocumentReference = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.MinutesDocumentReference,
  'MinutesDocumentReference',
  'Minutes Document Reference',
  'DocumentReference',
  'A reference to a set of minutes associated with this award.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaAdditionalDocumentReference = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaTenderResult = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.TenderResult,
  'TenderResult',
  'Tender Result',
  'TenderResult',
  'The result of the tendering process reported in this notification.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaFinalFinancialGuarantee = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.FinalFinancialGuarantee,
  'FinalFinancialGuarantee',
  'Final Financial Guarantee',
  'FinancialGuarantee',
  'A bond guarantee by the submitter of a tender or bid, required of the tender winner.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaSignature = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class AwardedNotificationFieldMeta {
  public static readonly UBLExtensions = AwardedNotificationFieldMetaUBLExtensions
  public static readonly UBLVersionID = AwardedNotificationFieldMetaUBLVersionID
  public static readonly CustomizationID = AwardedNotificationFieldMetaCustomizationID
  public static readonly ProfileID = AwardedNotificationFieldMetaProfileID
  public static readonly ProfileExecutionID = AwardedNotificationFieldMetaProfileExecutionID
  public static readonly ID = AwardedNotificationFieldMetaID
  public static readonly CopyIndicator = AwardedNotificationFieldMetaCopyIndicator
  public static readonly UUID = AwardedNotificationFieldMetaUUID
  public static readonly ContractFolderID = AwardedNotificationFieldMetaContractFolderID
  public static readonly IssueDate = AwardedNotificationFieldMetaIssueDate
  public static readonly IssueTime = AwardedNotificationFieldMetaIssueTime
  public static readonly ContractName = AwardedNotificationFieldMetaContractName
  public static readonly Note = AwardedNotificationFieldMetaNote
  public static readonly SenderParty = AwardedNotificationFieldMetaSenderParty
  public static readonly ReceiverParty = AwardedNotificationFieldMetaReceiverParty
  public static readonly MinutesDocumentReference = AwardedNotificationFieldMetaMinutesDocumentReference
  public static readonly AdditionalDocumentReference = AwardedNotificationFieldMetaAdditionalDocumentReference
  public static readonly TenderResult = AwardedNotificationFieldMetaTenderResult
  public static readonly FinalFinancialGuarantee = AwardedNotificationFieldMetaFinalFinancialGuarantee
  public static readonly Signature = AwardedNotificationFieldMetaSignature
}

export const AwardedNotificationFieldMap = new Map([
  [AwardedNotificationField.UBLExtensions, AwardedNotificationFieldMetaUBLExtensions],
  [AwardedNotificationField.UBLVersionID, AwardedNotificationFieldMetaUBLVersionID],
  [AwardedNotificationField.CustomizationID, AwardedNotificationFieldMetaCustomizationID],
  [AwardedNotificationField.ProfileID, AwardedNotificationFieldMetaProfileID],
  [AwardedNotificationField.ProfileExecutionID, AwardedNotificationFieldMetaProfileExecutionID],
  [AwardedNotificationField.ID, AwardedNotificationFieldMetaID],
  [AwardedNotificationField.CopyIndicator, AwardedNotificationFieldMetaCopyIndicator],
  [AwardedNotificationField.UUID, AwardedNotificationFieldMetaUUID],
  [AwardedNotificationField.ContractFolderID, AwardedNotificationFieldMetaContractFolderID],
  [AwardedNotificationField.IssueDate, AwardedNotificationFieldMetaIssueDate],
  [AwardedNotificationField.IssueTime, AwardedNotificationFieldMetaIssueTime],
  [AwardedNotificationField.ContractName, AwardedNotificationFieldMetaContractName],
  [AwardedNotificationField.Note, AwardedNotificationFieldMetaNote],
  [AwardedNotificationField.SenderParty, AwardedNotificationFieldMetaSenderParty],
  [AwardedNotificationField.ReceiverParty, AwardedNotificationFieldMetaReceiverParty],
  [AwardedNotificationField.MinutesDocumentReference, AwardedNotificationFieldMetaMinutesDocumentReference],
  [AwardedNotificationField.AdditionalDocumentReference, AwardedNotificationFieldMetaAdditionalDocumentReference],
  [AwardedNotificationField.TenderResult, AwardedNotificationFieldMetaTenderResult],
  [AwardedNotificationField.FinalFinancialGuarantee, AwardedNotificationFieldMetaFinalFinancialGuarantee],
  [AwardedNotificationField.Signature, AwardedNotificationFieldMetaSignature]
])
