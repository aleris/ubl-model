import { FieldMeta } from '../../FieldMeta'

export enum PriorInformationNoticeField {
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
  PlannedDate = 'PlannedDate',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  ContractingParty = 'ContractingParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  ReceiverParty = 'ReceiverParty',
  TenderingTerms = 'TenderingTerms',
  TenderingProcess = 'TenderingProcess',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLot = 'ProcurementProjectLot'
}

export const PriorInformationNoticeFieldMetaUBLExtensions = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaUBLVersionID = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaCustomizationID = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaProfileID = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaProfileExecutionID = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaID = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaCopyIndicator = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaUUID = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaContractFolderID = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaIssueDate = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaIssueTime = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaNote = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaPlannedDate = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.PlannedDate,
  'PlannedDate',
  'Planned Date',
  'Date',
  'The date planned by the Contracting Party for publication of the contract notice.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaDocumentReference = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaSignature = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaContractingParty = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The contracting party.',
  '1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaOriginatorCustomerParty = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'A party who originated the tendering process.',
  '0..n',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaReceiverParty = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.ReceiverParty,
  'ReceiverParty',
  'Party',
  'Party',
  'The party receiving this document.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaTenderingTerms = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.TenderingTerms,
  'TenderingTerms',
  'Tendering Terms',
  'TenderingTerms',
  'The tendering terms associated with this tendering process.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaTenderingProcess = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.TenderingProcess,
  'TenderingProcess',
  'Tendering Process',
  'TenderingProcess',
  'A description of the tendering process itself.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaProcurementProject = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '0..1',
  undefined,
  undefined
)

export const PriorInformationNoticeFieldMetaProcurementProjectLot = new FieldMeta<PriorInformationNoticeField>(
  PriorInformationNoticeField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'One of the procurement project lots into which this contract can be split.',
  '0..n',
  undefined,
  undefined
)

export class PriorInformationNoticeFieldMeta {
  public static readonly UBLExtensions = PriorInformationNoticeFieldMetaUBLExtensions
  public static readonly UBLVersionID = PriorInformationNoticeFieldMetaUBLVersionID
  public static readonly CustomizationID = PriorInformationNoticeFieldMetaCustomizationID
  public static readonly ProfileID = PriorInformationNoticeFieldMetaProfileID
  public static readonly ProfileExecutionID = PriorInformationNoticeFieldMetaProfileExecutionID
  public static readonly ID = PriorInformationNoticeFieldMetaID
  public static readonly CopyIndicator = PriorInformationNoticeFieldMetaCopyIndicator
  public static readonly UUID = PriorInformationNoticeFieldMetaUUID
  public static readonly ContractFolderID = PriorInformationNoticeFieldMetaContractFolderID
  public static readonly IssueDate = PriorInformationNoticeFieldMetaIssueDate
  public static readonly IssueTime = PriorInformationNoticeFieldMetaIssueTime
  public static readonly Note = PriorInformationNoticeFieldMetaNote
  public static readonly PlannedDate = PriorInformationNoticeFieldMetaPlannedDate
  public static readonly DocumentReference = PriorInformationNoticeFieldMetaDocumentReference
  public static readonly Signature = PriorInformationNoticeFieldMetaSignature
  public static readonly ContractingParty = PriorInformationNoticeFieldMetaContractingParty
  public static readonly OriginatorCustomerParty = PriorInformationNoticeFieldMetaOriginatorCustomerParty
  public static readonly ReceiverParty = PriorInformationNoticeFieldMetaReceiverParty
  public static readonly TenderingTerms = PriorInformationNoticeFieldMetaTenderingTerms
  public static readonly TenderingProcess = PriorInformationNoticeFieldMetaTenderingProcess
  public static readonly ProcurementProject = PriorInformationNoticeFieldMetaProcurementProject
  public static readonly ProcurementProjectLot = PriorInformationNoticeFieldMetaProcurementProjectLot
}

export const PriorInformationNoticeFieldMap = new Map([
  [PriorInformationNoticeField.UBLExtensions, PriorInformationNoticeFieldMetaUBLExtensions],
  [PriorInformationNoticeField.UBLVersionID, PriorInformationNoticeFieldMetaUBLVersionID],
  [PriorInformationNoticeField.CustomizationID, PriorInformationNoticeFieldMetaCustomizationID],
  [PriorInformationNoticeField.ProfileID, PriorInformationNoticeFieldMetaProfileID],
  [PriorInformationNoticeField.ProfileExecutionID, PriorInformationNoticeFieldMetaProfileExecutionID],
  [PriorInformationNoticeField.ID, PriorInformationNoticeFieldMetaID],
  [PriorInformationNoticeField.CopyIndicator, PriorInformationNoticeFieldMetaCopyIndicator],
  [PriorInformationNoticeField.UUID, PriorInformationNoticeFieldMetaUUID],
  [PriorInformationNoticeField.ContractFolderID, PriorInformationNoticeFieldMetaContractFolderID],
  [PriorInformationNoticeField.IssueDate, PriorInformationNoticeFieldMetaIssueDate],
  [PriorInformationNoticeField.IssueTime, PriorInformationNoticeFieldMetaIssueTime],
  [PriorInformationNoticeField.Note, PriorInformationNoticeFieldMetaNote],
  [PriorInformationNoticeField.PlannedDate, PriorInformationNoticeFieldMetaPlannedDate],
  [PriorInformationNoticeField.DocumentReference, PriorInformationNoticeFieldMetaDocumentReference],
  [PriorInformationNoticeField.Signature, PriorInformationNoticeFieldMetaSignature],
  [PriorInformationNoticeField.ContractingParty, PriorInformationNoticeFieldMetaContractingParty],
  [PriorInformationNoticeField.OriginatorCustomerParty, PriorInformationNoticeFieldMetaOriginatorCustomerParty],
  [PriorInformationNoticeField.ReceiverParty, PriorInformationNoticeFieldMetaReceiverParty],
  [PriorInformationNoticeField.TenderingTerms, PriorInformationNoticeFieldMetaTenderingTerms],
  [PriorInformationNoticeField.TenderingProcess, PriorInformationNoticeFieldMetaTenderingProcess],
  [PriorInformationNoticeField.ProcurementProject, PriorInformationNoticeFieldMetaProcurementProject],
  [PriorInformationNoticeField.ProcurementProjectLot, PriorInformationNoticeFieldMetaProcurementProjectLot]
])
