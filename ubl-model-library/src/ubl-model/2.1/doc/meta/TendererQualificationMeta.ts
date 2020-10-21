import { FieldMeta } from '../../FieldMeta'

export enum TendererQualificationField {
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
  Note = 'Note',
  VersionID = 'VersionID',
  PreviousVersionID = 'PreviousVersionID',
  Signature = 'Signature',
  TendererPartyQualification = 'TendererPartyQualification',
  ContractingParty = 'ContractingParty',
  Evidence = 'Evidence',
  AdditionalDocumentReference = 'AdditionalDocumentReference'
}

export const TendererQualificationFieldMetaUBLExtensions = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaUBLVersionID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const TendererQualificationFieldMetaCustomizationID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const TendererQualificationFieldMetaProfileID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const TendererQualificationFieldMetaProfileExecutionID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const TendererQualificationFieldMetaID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaCopyIndicator = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaUUID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaContractFolderID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaIssueDate = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaIssueTime = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaNote = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaVersionID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.VersionID,
  'VersionID',
  'Version',
  'Identifier',
  'Indicates the current version of the Tenderer Qualification.',
  '0..1',
  undefined,
  '1.1'
)

export const TendererQualificationFieldMetaPreviousVersionID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.PreviousVersionID,
  'PreviousVersionID',
  'Version',
  'Identifier',
  'Identifies the previous version of the Tenderer Qualification which is superceded by this version.',
  '0..1',
  undefined,
  '1.0'
)

export const TendererQualificationFieldMetaSignature = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaTendererPartyQualification = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.TendererPartyQualification,
  'TendererPartyQualification',
  'Tenderer Party Qualification',
  'TendererPartyQualification',
  'A specific qualification of the Tenderer.',
  '1..n',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaContractingParty = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The contracting party.',
  '0..1',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaEvidence = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.Evidence,
  'Evidence',
  'Evidence',
  'Evidence',
  'An evidentiary document supporting Tenderer qualifications.',
  '0..n',
  undefined,
  undefined
)

export const TendererQualificationFieldMetaAdditionalDocumentReference = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export class TendererQualificationFieldMeta {
  public static readonly UBLExtensions = TendererQualificationFieldMetaUBLExtensions
  public static readonly UBLVersionID = TendererQualificationFieldMetaUBLVersionID
  public static readonly CustomizationID = TendererQualificationFieldMetaCustomizationID
  public static readonly ProfileID = TendererQualificationFieldMetaProfileID
  public static readonly ProfileExecutionID = TendererQualificationFieldMetaProfileExecutionID
  public static readonly ID = TendererQualificationFieldMetaID
  public static readonly CopyIndicator = TendererQualificationFieldMetaCopyIndicator
  public static readonly UUID = TendererQualificationFieldMetaUUID
  public static readonly ContractFolderID = TendererQualificationFieldMetaContractFolderID
  public static readonly IssueDate = TendererQualificationFieldMetaIssueDate
  public static readonly IssueTime = TendererQualificationFieldMetaIssueTime
  public static readonly Note = TendererQualificationFieldMetaNote
  public static readonly VersionID = TendererQualificationFieldMetaVersionID
  public static readonly PreviousVersionID = TendererQualificationFieldMetaPreviousVersionID
  public static readonly Signature = TendererQualificationFieldMetaSignature
  public static readonly TendererPartyQualification = TendererQualificationFieldMetaTendererPartyQualification
  public static readonly ContractingParty = TendererQualificationFieldMetaContractingParty
  public static readonly Evidence = TendererQualificationFieldMetaEvidence
  public static readonly AdditionalDocumentReference = TendererQualificationFieldMetaAdditionalDocumentReference
}

export const TendererQualificationFieldMap = new Map([
  [TendererQualificationField.UBLExtensions, TendererQualificationFieldMetaUBLExtensions],
  [TendererQualificationField.UBLVersionID, TendererQualificationFieldMetaUBLVersionID],
  [TendererQualificationField.CustomizationID, TendererQualificationFieldMetaCustomizationID],
  [TendererQualificationField.ProfileID, TendererQualificationFieldMetaProfileID],
  [TendererQualificationField.ProfileExecutionID, TendererQualificationFieldMetaProfileExecutionID],
  [TendererQualificationField.ID, TendererQualificationFieldMetaID],
  [TendererQualificationField.CopyIndicator, TendererQualificationFieldMetaCopyIndicator],
  [TendererQualificationField.UUID, TendererQualificationFieldMetaUUID],
  [TendererQualificationField.ContractFolderID, TendererQualificationFieldMetaContractFolderID],
  [TendererQualificationField.IssueDate, TendererQualificationFieldMetaIssueDate],
  [TendererQualificationField.IssueTime, TendererQualificationFieldMetaIssueTime],
  [TendererQualificationField.Note, TendererQualificationFieldMetaNote],
  [TendererQualificationField.VersionID, TendererQualificationFieldMetaVersionID],
  [TendererQualificationField.PreviousVersionID, TendererQualificationFieldMetaPreviousVersionID],
  [TendererQualificationField.Signature, TendererQualificationFieldMetaSignature],
  [TendererQualificationField.TendererPartyQualification, TendererQualificationFieldMetaTendererPartyQualification],
  [TendererQualificationField.ContractingParty, TendererQualificationFieldMetaContractingParty],
  [TendererQualificationField.Evidence, TendererQualificationFieldMetaEvidence],
  [TendererQualificationField.AdditionalDocumentReference, TendererQualificationFieldMetaAdditionalDocumentReference]
])
