import { FieldMeta } from '../FieldMeta'

export enum TendererQualificationResponseField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  ContractFolderID = 'ContractFolderID',
  ContractName = 'ContractName',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Note = 'Note',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  ResolutionDocumentReference = 'ResolutionDocumentReference',
  QualificationResolution = 'QualificationResolution',
  AppealTerms = 'AppealTerms',
  Signature = 'Signature'
}

export const TendererQualificationResponseFieldMetaUBLExtensions = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaUBLVersionID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const TendererQualificationResponseFieldMetaCustomizationID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const TendererQualificationResponseFieldMetaProfileID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const TendererQualificationResponseFieldMetaProfileExecutionID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const TendererQualificationResponseFieldMetaID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaCopyIndicator = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaUUID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaContractFolderID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaContractName = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Tender.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaIssueDate = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaIssueTime = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaNote = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaSenderParty = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The party sending this message.',
  '1',
  'cac',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaReceiverParty = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving this message.',
  '1',
  'cac',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaResolutionDocumentReference = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ResolutionDocumentReference,
  'ResolutionDocumentReference',
  'Resolution Document Reference',
  'DocumentReference',
  'A document (e.g., meeting minutes) relating to consideration of tenderer qualifications.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaQualificationResolution = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.QualificationResolution,
  'QualificationResolution',
  'Qualification Resolution',
  'QualificationResolution',
  'An association to the resolution that is being notified',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaAppealTerms = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.AppealTerms,
  'AppealTerms',
  'Appeal Terms',
  'AppealTerms',
  'Terms of appeal for this tendering process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaSignature = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class TendererQualificationResponseFieldMeta {
  public static readonly UBLExtensions = TendererQualificationResponseFieldMetaUBLExtensions
  public static readonly UBLVersionID = TendererQualificationResponseFieldMetaUBLVersionID
  public static readonly CustomizationID = TendererQualificationResponseFieldMetaCustomizationID
  public static readonly ProfileID = TendererQualificationResponseFieldMetaProfileID
  public static readonly ProfileExecutionID = TendererQualificationResponseFieldMetaProfileExecutionID
  public static readonly ID = TendererQualificationResponseFieldMetaID
  public static readonly CopyIndicator = TendererQualificationResponseFieldMetaCopyIndicator
  public static readonly UUID = TendererQualificationResponseFieldMetaUUID
  public static readonly ContractFolderID = TendererQualificationResponseFieldMetaContractFolderID
  public static readonly ContractName = TendererQualificationResponseFieldMetaContractName
  public static readonly IssueDate = TendererQualificationResponseFieldMetaIssueDate
  public static readonly IssueTime = TendererQualificationResponseFieldMetaIssueTime
  public static readonly Note = TendererQualificationResponseFieldMetaNote
  public static readonly SenderParty = TendererQualificationResponseFieldMetaSenderParty
  public static readonly ReceiverParty = TendererQualificationResponseFieldMetaReceiverParty
  public static readonly ResolutionDocumentReference = TendererQualificationResponseFieldMetaResolutionDocumentReference
  public static readonly QualificationResolution = TendererQualificationResponseFieldMetaQualificationResolution
  public static readonly AppealTerms = TendererQualificationResponseFieldMetaAppealTerms
  public static readonly Signature = TendererQualificationResponseFieldMetaSignature
}

export const TendererQualificationResponseFieldMap = new Map([
  [TendererQualificationResponseField.UBLExtensions, TendererQualificationResponseFieldMetaUBLExtensions],
  [TendererQualificationResponseField.UBLVersionID, TendererQualificationResponseFieldMetaUBLVersionID],
  [TendererQualificationResponseField.CustomizationID, TendererQualificationResponseFieldMetaCustomizationID],
  [TendererQualificationResponseField.ProfileID, TendererQualificationResponseFieldMetaProfileID],
  [TendererQualificationResponseField.ProfileExecutionID, TendererQualificationResponseFieldMetaProfileExecutionID],
  [TendererQualificationResponseField.ID, TendererQualificationResponseFieldMetaID],
  [TendererQualificationResponseField.CopyIndicator, TendererQualificationResponseFieldMetaCopyIndicator],
  [TendererQualificationResponseField.UUID, TendererQualificationResponseFieldMetaUUID],
  [TendererQualificationResponseField.ContractFolderID, TendererQualificationResponseFieldMetaContractFolderID],
  [TendererQualificationResponseField.ContractName, TendererQualificationResponseFieldMetaContractName],
  [TendererQualificationResponseField.IssueDate, TendererQualificationResponseFieldMetaIssueDate],
  [TendererQualificationResponseField.IssueTime, TendererQualificationResponseFieldMetaIssueTime],
  [TendererQualificationResponseField.Note, TendererQualificationResponseFieldMetaNote],
  [TendererQualificationResponseField.SenderParty, TendererQualificationResponseFieldMetaSenderParty],
  [TendererQualificationResponseField.ReceiverParty, TendererQualificationResponseFieldMetaReceiverParty],
  [TendererQualificationResponseField.ResolutionDocumentReference, TendererQualificationResponseFieldMetaResolutionDocumentReference],
  [TendererQualificationResponseField.QualificationResolution, TendererQualificationResponseFieldMetaQualificationResolution],
  [TendererQualificationResponseField.AppealTerms, TendererQualificationResponseFieldMetaAppealTerms],
  [TendererQualificationResponseField.Signature, TendererQualificationResponseFieldMetaSignature]
])
