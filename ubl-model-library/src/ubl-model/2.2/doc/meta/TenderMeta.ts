import { FieldMeta } from '../../FieldMeta'

export enum TenderField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  TenderTypeCode = 'TenderTypeCode',
  ContractFolderID = 'ContractFolderID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  ContractName = 'ContractName',
  Note = 'Note',
  ValidityPeriod = 'ValidityPeriod',
  CallForTenderDocumentReference = 'CallForTenderDocumentReference',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  TendererParty = 'TendererParty',
  TendererQualificationDocumentReference = 'TendererQualificationDocumentReference',
  SubcontractorParty = 'SubcontractorParty',
  ContractingParty = 'ContractingParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  TenderedProject = 'TenderedProject'
}

export const TenderFieldMetaUBLExtensions = new FieldMeta<TenderField>(
  TenderField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TenderFieldMetaUBLVersionID = new FieldMeta<TenderField>(
  TenderField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const TenderFieldMetaCustomizationID = new FieldMeta<TenderField>(
  TenderField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const TenderFieldMetaProfileID = new FieldMeta<TenderField>(
  TenderField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const TenderFieldMetaProfileExecutionID = new FieldMeta<TenderField>(
  TenderField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const TenderFieldMetaID = new FieldMeta<TenderField>(
  TenderField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const TenderFieldMetaCopyIndicator = new FieldMeta<TenderField>(
  TenderField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TenderFieldMetaUUID = new FieldMeta<TenderField>(
  TenderField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TenderFieldMetaTenderTypeCode = new FieldMeta<TenderField>(
  TenderField.TenderTypeCode,
  'TenderTypeCode',
  'Tender Type Code',
  'Code',
  'A code to specify the type of tender (economical or objective criteria versus technical or subjective criteria)',
  '0..1',
  undefined,
  undefined
)

export const TenderFieldMetaContractFolderID = new FieldMeta<TenderField>(
  TenderField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '1',
  undefined,
  undefined
)

export const TenderFieldMetaIssueDate = new FieldMeta<TenderField>(
  TenderField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TenderFieldMetaIssueTime = new FieldMeta<TenderField>(
  TenderField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const TenderFieldMetaContractName = new FieldMeta<TenderField>(
  TenderField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Tender.',
  '0..n',
  undefined,
  undefined
)

export const TenderFieldMetaNote = new FieldMeta<TenderField>(
  TenderField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TenderFieldMetaValidityPeriod = new FieldMeta<TenderField>(
  TenderField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'The period for which the Tender is valid.',
  '0..1',
  undefined,
  undefined
)

export const TenderFieldMetaCallForTenderDocumentReference = new FieldMeta<TenderField>(
  TenderField.CallForTenderDocumentReference,
  'CallForTenderDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the call for tender document of which this tender result of.',
  '0..1',
  undefined,
  undefined
)

export const TenderFieldMetaDocumentReference = new FieldMeta<TenderField>(
  TenderField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const TenderFieldMetaSignature = new FieldMeta<TenderField>(
  TenderField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TenderFieldMetaTendererParty = new FieldMeta<TenderField>(
  TenderField.TendererParty,
  'TendererParty',
  'Party',
  'Party',
  'The primary tenderer.',
  '1..n',
  undefined,
  undefined
)

export const TenderFieldMetaTendererQualificationDocumentReference = new FieldMeta<TenderField>(
  TenderField.TendererQualificationDocumentReference,
  'TendererQualificationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the tenderer qualification document that has been used to qualify the tenderer.',
  '0..1',
  undefined,
  undefined
)

export const TenderFieldMetaSubcontractorParty = new FieldMeta<TenderField>(
  TenderField.SubcontractorParty,
  'SubcontractorParty',
  'Party',
  'Party',
  'A subcontractor or other tenderer participating in the same Tender.',
  '0..n',
  undefined,
  undefined
)

export const TenderFieldMetaContractingParty = new FieldMeta<TenderField>(
  TenderField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The contracting party.',
  '0..n',
  undefined,
  undefined
)

export const TenderFieldMetaOriginatorCustomerParty = new FieldMeta<TenderField>(
  TenderField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The party originating the Tender.',
  '0..1',
  undefined,
  undefined
)

export const TenderFieldMetaTenderedProject = new FieldMeta<TenderField>(
  TenderField.TenderedProject,
  'TenderedProject',
  'Tendered Project',
  'TenderedProject',
  'A project with which this Tender is associated. A single Tender can be used to bid for one project, multiple projects, or the global project.',
  '1..n',
  undefined,
  undefined
)

export class TenderFieldMeta {
  public static readonly UBLExtensions = TenderFieldMetaUBLExtensions
  public static readonly UBLVersionID = TenderFieldMetaUBLVersionID
  public static readonly CustomizationID = TenderFieldMetaCustomizationID
  public static readonly ProfileID = TenderFieldMetaProfileID
  public static readonly ProfileExecutionID = TenderFieldMetaProfileExecutionID
  public static readonly ID = TenderFieldMetaID
  public static readonly CopyIndicator = TenderFieldMetaCopyIndicator
  public static readonly UUID = TenderFieldMetaUUID
  public static readonly TenderTypeCode = TenderFieldMetaTenderTypeCode
  public static readonly ContractFolderID = TenderFieldMetaContractFolderID
  public static readonly IssueDate = TenderFieldMetaIssueDate
  public static readonly IssueTime = TenderFieldMetaIssueTime
  public static readonly ContractName = TenderFieldMetaContractName
  public static readonly Note = TenderFieldMetaNote
  public static readonly ValidityPeriod = TenderFieldMetaValidityPeriod
  public static readonly CallForTenderDocumentReference = TenderFieldMetaCallForTenderDocumentReference
  public static readonly DocumentReference = TenderFieldMetaDocumentReference
  public static readonly Signature = TenderFieldMetaSignature
  public static readonly TendererParty = TenderFieldMetaTendererParty
  public static readonly TendererQualificationDocumentReference = TenderFieldMetaTendererQualificationDocumentReference
  public static readonly SubcontractorParty = TenderFieldMetaSubcontractorParty
  public static readonly ContractingParty = TenderFieldMetaContractingParty
  public static readonly OriginatorCustomerParty = TenderFieldMetaOriginatorCustomerParty
  public static readonly TenderedProject = TenderFieldMetaTenderedProject
}

export const TenderFieldMap = new Map([
  [TenderField.UBLExtensions, TenderFieldMetaUBLExtensions],
  [TenderField.UBLVersionID, TenderFieldMetaUBLVersionID],
  [TenderField.CustomizationID, TenderFieldMetaCustomizationID],
  [TenderField.ProfileID, TenderFieldMetaProfileID],
  [TenderField.ProfileExecutionID, TenderFieldMetaProfileExecutionID],
  [TenderField.ID, TenderFieldMetaID],
  [TenderField.CopyIndicator, TenderFieldMetaCopyIndicator],
  [TenderField.UUID, TenderFieldMetaUUID],
  [TenderField.TenderTypeCode, TenderFieldMetaTenderTypeCode],
  [TenderField.ContractFolderID, TenderFieldMetaContractFolderID],
  [TenderField.IssueDate, TenderFieldMetaIssueDate],
  [TenderField.IssueTime, TenderFieldMetaIssueTime],
  [TenderField.ContractName, TenderFieldMetaContractName],
  [TenderField.Note, TenderFieldMetaNote],
  [TenderField.ValidityPeriod, TenderFieldMetaValidityPeriod],
  [TenderField.CallForTenderDocumentReference, TenderFieldMetaCallForTenderDocumentReference],
  [TenderField.DocumentReference, TenderFieldMetaDocumentReference],
  [TenderField.Signature, TenderFieldMetaSignature],
  [TenderField.TendererParty, TenderFieldMetaTendererParty],
  [TenderField.TendererQualificationDocumentReference, TenderFieldMetaTendererQualificationDocumentReference],
  [TenderField.SubcontractorParty, TenderFieldMetaSubcontractorParty],
  [TenderField.ContractingParty, TenderFieldMetaContractingParty],
  [TenderField.OriginatorCustomerParty, TenderFieldMetaOriginatorCustomerParty],
  [TenderField.TenderedProject, TenderFieldMetaTenderedProject]
])
