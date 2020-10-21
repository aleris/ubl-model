import { FieldMeta } from '../../FieldMeta'

export enum UnawardedNotificationField {
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
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  MinutesDocumentReference = 'MinutesDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  TenderResult = 'TenderResult',
  AppealTerms = 'AppealTerms'
}

export const UnawardedNotificationFieldMetaUBLExtensions = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaUBLVersionID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const UnawardedNotificationFieldMetaCustomizationID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const UnawardedNotificationFieldMetaProfileID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const UnawardedNotificationFieldMetaProfileExecutionID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const UnawardedNotificationFieldMetaID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaCopyIndicator = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaUUID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaContractFolderID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaIssueDate = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaIssueTime = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaContractName = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'The name, expressed as text, of this procurement project.',
  '0..n',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaNote = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaSignature = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaSenderParty = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.SenderParty,
  'SenderParty',
  'Party',
  'Party',
  'The party sending this document.',
  '1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaReceiverParty = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this document.',
  '1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaMinutesDocumentReference = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.MinutesDocumentReference,
  'MinutesDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a set of minutes associated with this award.',
  '0..1',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaAdditionalDocumentReference = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document. It can be used to include annex documents such as the minutes of the awarding process meetings.',
  '0..n',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaTenderResult = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.TenderResult,
  'TenderResult',
  'Tender Result',
  'TenderResult',
  'An association to the Tender Result being notified',
  '1..n',
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaAppealTerms = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.AppealTerms,
  'AppealTerms',
  'Appeal Terms',
  'AppealTerms',
  'Terms of appeal for this tendering process.',
  '0..1',
  undefined,
  undefined
)

export class UnawardedNotificationFieldMeta {
  public static readonly UBLExtensions = UnawardedNotificationFieldMetaUBLExtensions
  public static readonly UBLVersionID = UnawardedNotificationFieldMetaUBLVersionID
  public static readonly CustomizationID = UnawardedNotificationFieldMetaCustomizationID
  public static readonly ProfileID = UnawardedNotificationFieldMetaProfileID
  public static readonly ProfileExecutionID = UnawardedNotificationFieldMetaProfileExecutionID
  public static readonly ID = UnawardedNotificationFieldMetaID
  public static readonly CopyIndicator = UnawardedNotificationFieldMetaCopyIndicator
  public static readonly UUID = UnawardedNotificationFieldMetaUUID
  public static readonly ContractFolderID = UnawardedNotificationFieldMetaContractFolderID
  public static readonly IssueDate = UnawardedNotificationFieldMetaIssueDate
  public static readonly IssueTime = UnawardedNotificationFieldMetaIssueTime
  public static readonly ContractName = UnawardedNotificationFieldMetaContractName
  public static readonly Note = UnawardedNotificationFieldMetaNote
  public static readonly Signature = UnawardedNotificationFieldMetaSignature
  public static readonly SenderParty = UnawardedNotificationFieldMetaSenderParty
  public static readonly ReceiverParty = UnawardedNotificationFieldMetaReceiverParty
  public static readonly MinutesDocumentReference = UnawardedNotificationFieldMetaMinutesDocumentReference
  public static readonly AdditionalDocumentReference = UnawardedNotificationFieldMetaAdditionalDocumentReference
  public static readonly TenderResult = UnawardedNotificationFieldMetaTenderResult
  public static readonly AppealTerms = UnawardedNotificationFieldMetaAppealTerms
}

export const UnawardedNotificationFieldMap = new Map([
  [UnawardedNotificationField.UBLExtensions, UnawardedNotificationFieldMetaUBLExtensions],
  [UnawardedNotificationField.UBLVersionID, UnawardedNotificationFieldMetaUBLVersionID],
  [UnawardedNotificationField.CustomizationID, UnawardedNotificationFieldMetaCustomizationID],
  [UnawardedNotificationField.ProfileID, UnawardedNotificationFieldMetaProfileID],
  [UnawardedNotificationField.ProfileExecutionID, UnawardedNotificationFieldMetaProfileExecutionID],
  [UnawardedNotificationField.ID, UnawardedNotificationFieldMetaID],
  [UnawardedNotificationField.CopyIndicator, UnawardedNotificationFieldMetaCopyIndicator],
  [UnawardedNotificationField.UUID, UnawardedNotificationFieldMetaUUID],
  [UnawardedNotificationField.ContractFolderID, UnawardedNotificationFieldMetaContractFolderID],
  [UnawardedNotificationField.IssueDate, UnawardedNotificationFieldMetaIssueDate],
  [UnawardedNotificationField.IssueTime, UnawardedNotificationFieldMetaIssueTime],
  [UnawardedNotificationField.ContractName, UnawardedNotificationFieldMetaContractName],
  [UnawardedNotificationField.Note, UnawardedNotificationFieldMetaNote],
  [UnawardedNotificationField.Signature, UnawardedNotificationFieldMetaSignature],
  [UnawardedNotificationField.SenderParty, UnawardedNotificationFieldMetaSenderParty],
  [UnawardedNotificationField.ReceiverParty, UnawardedNotificationFieldMetaReceiverParty],
  [UnawardedNotificationField.MinutesDocumentReference, UnawardedNotificationFieldMetaMinutesDocumentReference],
  [UnawardedNotificationField.AdditionalDocumentReference, UnawardedNotificationFieldMetaAdditionalDocumentReference],
  [UnawardedNotificationField.TenderResult, UnawardedNotificationFieldMetaTenderResult],
  [UnawardedNotificationField.AppealTerms, UnawardedNotificationFieldMetaAppealTerms]
])
