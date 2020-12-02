import { FieldMeta } from '../FieldMeta'

export enum ContractNoticeField {
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
  RequestedPublicationDate = 'RequestedPublicationDate',
  RegulatoryDomain = 'RegulatoryDomain',
  NoticeTypeCode = 'NoticeTypeCode',
  NoticeLanguageCode = 'NoticeLanguageCode',
  AdditionalNoticeLanguage = 'AdditionalNoticeLanguage',
  FrequencyPeriod = 'FrequencyPeriod',
  Signature = 'Signature',
  ContractingParty = 'ContractingParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  ReceiverParty = 'ReceiverParty',
  TenderingTerms = 'TenderingTerms',
  TenderingProcess = 'TenderingProcess',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLot = 'ProcurementProjectLot'
}

export const ContractNoticeFieldMetaUBLExtensions = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaUBLVersionID = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaCustomizationID = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaProfileID = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaProfileExecutionID = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaID = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaCopyIndicator = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaUUID = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaContractFolderID = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaIssueDate = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaIssueTime = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaNote = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaVersionID = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.VersionID,
  'VersionID',
  'Version Identifier',
  'Identifier',
  'An identifier of the current version of the Contract Notice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaPreviousVersionID = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version Identifier',
  'Identifier',
  'An identifier of the previous version of the Contract Notice which is superceded by this version.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaRequestedPublicationDate = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.RequestedPublicationDate,
  'RequestedPublicationDate',
  'Requested Publication Date',
  'Date',
  'The requested publication date for this Contract Notice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaRegulatoryDomain = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.RegulatoryDomain,
  'RegulatoryDomain',
  'Regulatory Domain',
  'Text',
  'Information about the law that defines the regulatory domain.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaNoticeTypeCode = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.NoticeTypeCode,
  'NoticeTypeCode',
  'Notice Type Code',
  'Code',
  'The type of notice (PIN, Qualification, Reduce time...)',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaNoticeLanguageCode = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.NoticeLanguageCode,
  'NoticeLanguageCode',
  'Notice Language Code',
  'Code',
  'The language used for this contract notice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaAdditionalNoticeLanguage = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.AdditionalNoticeLanguage,
  'AdditionalNoticeLanguage',
  'Additional Notice Language',
  'Language',
  'An additional official language used in this contract notice.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaFrequencyPeriod = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.FrequencyPeriod,
  'FrequencyPeriod',
  'Frequency Period',
  'Period',
  'The estimated frequency of future notices.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaSignature = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaContractingParty = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The contracting party or parties in case of joint procurement.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaOriginatorCustomerParty = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  'CustomerParty',
  'A party who originally requested the tender.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaReceiverParty = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The party receiving this document.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaTenderingTerms = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.TenderingTerms,
  'TenderingTerms',
  'Tendering Terms',
  'TenderingTerms',
  'The tendering terms associated with this tendering process.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaTenderingProcess = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.TenderingProcess,
  'TenderingProcess',
  'Tendering Process',
  'TenderingProcess',
  'A description of the tendering process itself.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaProcurementProject = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ContractNoticeFieldMetaProcurementProjectLot = new FieldMeta<ContractNoticeField>(
  ContractNoticeField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'One of the procurement project lots into which this contract can be split.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export class ContractNoticeFieldMeta {
  public static readonly UBLExtensions = ContractNoticeFieldMetaUBLExtensions
  public static readonly UBLVersionID = ContractNoticeFieldMetaUBLVersionID
  public static readonly CustomizationID = ContractNoticeFieldMetaCustomizationID
  public static readonly ProfileID = ContractNoticeFieldMetaProfileID
  public static readonly ProfileExecutionID = ContractNoticeFieldMetaProfileExecutionID
  public static readonly ID = ContractNoticeFieldMetaID
  public static readonly CopyIndicator = ContractNoticeFieldMetaCopyIndicator
  public static readonly UUID = ContractNoticeFieldMetaUUID
  public static readonly ContractFolderID = ContractNoticeFieldMetaContractFolderID
  public static readonly IssueDate = ContractNoticeFieldMetaIssueDate
  public static readonly IssueTime = ContractNoticeFieldMetaIssueTime
  public static readonly Note = ContractNoticeFieldMetaNote
  public static readonly VersionID = ContractNoticeFieldMetaVersionID
  public static readonly PreviousVersionID = ContractNoticeFieldMetaPreviousVersionID
  public static readonly RequestedPublicationDate = ContractNoticeFieldMetaRequestedPublicationDate
  public static readonly RegulatoryDomain = ContractNoticeFieldMetaRegulatoryDomain
  public static readonly NoticeTypeCode = ContractNoticeFieldMetaNoticeTypeCode
  public static readonly NoticeLanguageCode = ContractNoticeFieldMetaNoticeLanguageCode
  public static readonly AdditionalNoticeLanguage = ContractNoticeFieldMetaAdditionalNoticeLanguage
  public static readonly FrequencyPeriod = ContractNoticeFieldMetaFrequencyPeriod
  public static readonly Signature = ContractNoticeFieldMetaSignature
  public static readonly ContractingParty = ContractNoticeFieldMetaContractingParty
  public static readonly OriginatorCustomerParty = ContractNoticeFieldMetaOriginatorCustomerParty
  public static readonly ReceiverParty = ContractNoticeFieldMetaReceiverParty
  public static readonly TenderingTerms = ContractNoticeFieldMetaTenderingTerms
  public static readonly TenderingProcess = ContractNoticeFieldMetaTenderingProcess
  public static readonly ProcurementProject = ContractNoticeFieldMetaProcurementProject
  public static readonly ProcurementProjectLot = ContractNoticeFieldMetaProcurementProjectLot
}

export const ContractNoticeFieldMap = new Map([
  [ContractNoticeField.UBLExtensions, ContractNoticeFieldMetaUBLExtensions],
  [ContractNoticeField.UBLVersionID, ContractNoticeFieldMetaUBLVersionID],
  [ContractNoticeField.CustomizationID, ContractNoticeFieldMetaCustomizationID],
  [ContractNoticeField.ProfileID, ContractNoticeFieldMetaProfileID],
  [ContractNoticeField.ProfileExecutionID, ContractNoticeFieldMetaProfileExecutionID],
  [ContractNoticeField.ID, ContractNoticeFieldMetaID],
  [ContractNoticeField.CopyIndicator, ContractNoticeFieldMetaCopyIndicator],
  [ContractNoticeField.UUID, ContractNoticeFieldMetaUUID],
  [ContractNoticeField.ContractFolderID, ContractNoticeFieldMetaContractFolderID],
  [ContractNoticeField.IssueDate, ContractNoticeFieldMetaIssueDate],
  [ContractNoticeField.IssueTime, ContractNoticeFieldMetaIssueTime],
  [ContractNoticeField.Note, ContractNoticeFieldMetaNote],
  [ContractNoticeField.VersionID, ContractNoticeFieldMetaVersionID],
  [ContractNoticeField.PreviousVersionID, ContractNoticeFieldMetaPreviousVersionID],
  [ContractNoticeField.RequestedPublicationDate, ContractNoticeFieldMetaRequestedPublicationDate],
  [ContractNoticeField.RegulatoryDomain, ContractNoticeFieldMetaRegulatoryDomain],
  [ContractNoticeField.NoticeTypeCode, ContractNoticeFieldMetaNoticeTypeCode],
  [ContractNoticeField.NoticeLanguageCode, ContractNoticeFieldMetaNoticeLanguageCode],
  [ContractNoticeField.AdditionalNoticeLanguage, ContractNoticeFieldMetaAdditionalNoticeLanguage],
  [ContractNoticeField.FrequencyPeriod, ContractNoticeFieldMetaFrequencyPeriod],
  [ContractNoticeField.Signature, ContractNoticeFieldMetaSignature],
  [ContractNoticeField.ContractingParty, ContractNoticeFieldMetaContractingParty],
  [ContractNoticeField.OriginatorCustomerParty, ContractNoticeFieldMetaOriginatorCustomerParty],
  [ContractNoticeField.ReceiverParty, ContractNoticeFieldMetaReceiverParty],
  [ContractNoticeField.TenderingTerms, ContractNoticeFieldMetaTenderingTerms],
  [ContractNoticeField.TenderingProcess, ContractNoticeFieldMetaTenderingProcess],
  [ContractNoticeField.ProcurementProject, ContractNoticeFieldMetaProcurementProject],
  [ContractNoticeField.ProcurementProjectLot, ContractNoticeFieldMetaProcurementProjectLot]
])
