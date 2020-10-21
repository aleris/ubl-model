import { FieldMeta } from '../../FieldMeta'

export enum TenderWithdrawalField {
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
  WithdrawOfferIndicator = 'WithdrawOfferIndicator',
  TenderDocumentReference = 'TenderDocumentReference',
  TenderNotificationDocumentReference = 'TenderNotificationDocumentReference',
  Signature = 'Signature',
  ContractingParty = 'ContractingParty',
  TendererParty = 'TendererParty'
}

export const TenderWithdrawalFieldMetaUBLExtensions = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaUBLVersionID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const TenderWithdrawalFieldMetaCustomizationID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const TenderWithdrawalFieldMetaProfileID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const TenderWithdrawalFieldMetaProfileExecutionID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const TenderWithdrawalFieldMetaID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaCopyIndicator = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaUUID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaContractFolderID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '0..1',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaIssueDate = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaIssueTime = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaContractName = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Tender.',
  '0..n',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaNote = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaWithdrawOfferIndicator = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.WithdrawOfferIndicator,
  'WithdrawOfferIndicator',
  'Withdraw Offer',
  'Indicator',
  'Indicates whether the referred tender has to be withdrawn (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaTenderDocumentReference = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.TenderDocumentReference,
  'TenderDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a received Tender.',
  '0..n',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaTenderNotificationDocumentReference = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.TenderNotificationDocumentReference,
  'TenderNotificationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the Tender Receipt Notification.',
  '0..n',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaSignature = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaContractingParty = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The Contracting Party or parties in case of joint procurement.',
  '1..n',
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaTendererParty = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.TendererParty,
  'TendererParty',
  'Party',
  'Party',
  'The economic operator or the main tenderer in case of a consortium that is withdrawing the tender.',
  '1',
  undefined,
  undefined
)

export class TenderWithdrawalFieldMeta {
  public static readonly UBLExtensions = TenderWithdrawalFieldMetaUBLExtensions
  public static readonly UBLVersionID = TenderWithdrawalFieldMetaUBLVersionID
  public static readonly CustomizationID = TenderWithdrawalFieldMetaCustomizationID
  public static readonly ProfileID = TenderWithdrawalFieldMetaProfileID
  public static readonly ProfileExecutionID = TenderWithdrawalFieldMetaProfileExecutionID
  public static readonly ID = TenderWithdrawalFieldMetaID
  public static readonly CopyIndicator = TenderWithdrawalFieldMetaCopyIndicator
  public static readonly UUID = TenderWithdrawalFieldMetaUUID
  public static readonly ContractFolderID = TenderWithdrawalFieldMetaContractFolderID
  public static readonly IssueDate = TenderWithdrawalFieldMetaIssueDate
  public static readonly IssueTime = TenderWithdrawalFieldMetaIssueTime
  public static readonly ContractName = TenderWithdrawalFieldMetaContractName
  public static readonly Note = TenderWithdrawalFieldMetaNote
  public static readonly WithdrawOfferIndicator = TenderWithdrawalFieldMetaWithdrawOfferIndicator
  public static readonly TenderDocumentReference = TenderWithdrawalFieldMetaTenderDocumentReference
  public static readonly TenderNotificationDocumentReference = TenderWithdrawalFieldMetaTenderNotificationDocumentReference
  public static readonly Signature = TenderWithdrawalFieldMetaSignature
  public static readonly ContractingParty = TenderWithdrawalFieldMetaContractingParty
  public static readonly TendererParty = TenderWithdrawalFieldMetaTendererParty
}

export const TenderWithdrawalFieldMap = new Map([
  [TenderWithdrawalField.UBLExtensions, TenderWithdrawalFieldMetaUBLExtensions],
  [TenderWithdrawalField.UBLVersionID, TenderWithdrawalFieldMetaUBLVersionID],
  [TenderWithdrawalField.CustomizationID, TenderWithdrawalFieldMetaCustomizationID],
  [TenderWithdrawalField.ProfileID, TenderWithdrawalFieldMetaProfileID],
  [TenderWithdrawalField.ProfileExecutionID, TenderWithdrawalFieldMetaProfileExecutionID],
  [TenderWithdrawalField.ID, TenderWithdrawalFieldMetaID],
  [TenderWithdrawalField.CopyIndicator, TenderWithdrawalFieldMetaCopyIndicator],
  [TenderWithdrawalField.UUID, TenderWithdrawalFieldMetaUUID],
  [TenderWithdrawalField.ContractFolderID, TenderWithdrawalFieldMetaContractFolderID],
  [TenderWithdrawalField.IssueDate, TenderWithdrawalFieldMetaIssueDate],
  [TenderWithdrawalField.IssueTime, TenderWithdrawalFieldMetaIssueTime],
  [TenderWithdrawalField.ContractName, TenderWithdrawalFieldMetaContractName],
  [TenderWithdrawalField.Note, TenderWithdrawalFieldMetaNote],
  [TenderWithdrawalField.WithdrawOfferIndicator, TenderWithdrawalFieldMetaWithdrawOfferIndicator],
  [TenderWithdrawalField.TenderDocumentReference, TenderWithdrawalFieldMetaTenderDocumentReference],
  [TenderWithdrawalField.TenderNotificationDocumentReference, TenderWithdrawalFieldMetaTenderNotificationDocumentReference],
  [TenderWithdrawalField.Signature, TenderWithdrawalFieldMetaSignature],
  [TenderWithdrawalField.ContractingParty, TenderWithdrawalFieldMetaContractingParty],
  [TenderWithdrawalField.TendererParty, TenderWithdrawalFieldMetaTendererParty]
])
