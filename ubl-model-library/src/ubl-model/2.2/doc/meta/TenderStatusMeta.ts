import { FieldMeta } from '../../FieldMeta'

export enum TenderStatusField {
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
  ProcedureCode = 'ProcedureCode',
  TenderSubmissionDeadlinePeriod = 'TenderSubmissionDeadlinePeriod',
  InvitationSubmissionPeriod = 'InvitationSubmissionPeriod',
  ParticipationRequestReceptionPeriod = 'ParticipationRequestReceptionPeriod',
  ProcurementLegislationDocumentReference = 'ProcurementLegislationDocumentReference',
  FiscalLegislationDocumentReference = 'FiscalLegislationDocumentReference',
  EnvironmentalLegislationDocumentReference = 'EnvironmentalLegislationDocumentReference',
  EmploymentLegislationDocumentReference = 'EmploymentLegislationDocumentReference',
  TenderStatusInquiryDocumentReference = 'TenderStatusInquiryDocumentReference',
  Signature = 'Signature',
  ContractingParty = 'ContractingParty',
  EconomicOperatorParty = 'EconomicOperatorParty',
  DocumentProviderParty = 'DocumentProviderParty',
  TenderRecipientParty = 'TenderRecipientParty',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLot = 'ProcurementProjectLot'
}

export const TenderStatusFieldMetaUBLExtensions = new FieldMeta<TenderStatusField>(
  TenderStatusField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaUBLVersionID = new FieldMeta<TenderStatusField>(
  TenderStatusField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const TenderStatusFieldMetaCustomizationID = new FieldMeta<TenderStatusField>(
  TenderStatusField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const TenderStatusFieldMetaProfileID = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const TenderStatusFieldMetaProfileExecutionID = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const TenderStatusFieldMetaID = new FieldMeta<TenderStatusField>(
  TenderStatusField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaCopyIndicator = new FieldMeta<TenderStatusField>(
  TenderStatusField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaUUID = new FieldMeta<TenderStatusField>(
  TenderStatusField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaContractFolderID = new FieldMeta<TenderStatusField>(
  TenderStatusField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  'Identifier',
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaIssueDate = new FieldMeta<TenderStatusField>(
  TenderStatusField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaIssueTime = new FieldMeta<TenderStatusField>(
  TenderStatusField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaContractName = new FieldMeta<TenderStatusField>(
  TenderStatusField.ContractName,
  'ContractName',
  'Contract Name',
  'Text',
  'Short title of a contract associated with this Tender.',
  '0..n',
  undefined,
  undefined
)

export const TenderStatusFieldMetaNote = new FieldMeta<TenderStatusField>(
  TenderStatusField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const TenderStatusFieldMetaProcedureCode = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProcedureCode,
  'ProcedureCode',
  'Procedure Code',
  'Code',
  'A code signifying the type of this tendering procedure.',
  '0..1',
  undefined,
  'Open, Restricted, Negotiated'
)

export const TenderStatusFieldMetaTenderSubmissionDeadlinePeriod = new FieldMeta<TenderStatusField>(
  TenderStatusField.TenderSubmissionDeadlinePeriod,
  'TenderSubmissionDeadlinePeriod',
  'Period',
  'Period',
  'The period during which tenders must be delivered.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaInvitationSubmissionPeriod = new FieldMeta<TenderStatusField>(
  TenderStatusField.InvitationSubmissionPeriod,
  'InvitationSubmissionPeriod',
  'Period',
  'Period',
  'The period during which invitations to tender must be completed and delivered.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaParticipationRequestReceptionPeriod = new FieldMeta<TenderStatusField>(
  TenderStatusField.ParticipationRequestReceptionPeriod,
  'ParticipationRequestReceptionPeriod',
  'Period',
  'Period',
  'The period during which requests for participation must be completed and delivered.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaProcurementLegislationDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProcurementLegislationDocumentReference,
  'ProcurementLegislationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document providing references to procurement legislation applicable to the tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaFiscalLegislationDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.FiscalLegislationDocumentReference,
  'FiscalLegislationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document providing references to fiscal legislation applicable to the tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaEnvironmentalLegislationDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.EnvironmentalLegislationDocumentReference,
  'EnvironmentalLegislationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document providing references to environmental legislation applicable to the tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaEmploymentLegislationDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.EmploymentLegislationDocumentReference,
  'EmploymentLegislationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a document providing references to employment legislation applicable to the tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaTenderStatusInquiryDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.TenderStatusInquiryDocumentReference,
  'TenderStatusInquiryDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a received Tender status inquiry.',
  '0..n',
  undefined,
  undefined
)

export const TenderStatusFieldMetaSignature = new FieldMeta<TenderStatusField>(
  TenderStatusField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const TenderStatusFieldMetaContractingParty = new FieldMeta<TenderStatusField>(
  TenderStatusField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  'ContractingParty',
  'The Contracting Party issuing the information about the tender status.',
  '1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaEconomicOperatorParty = new FieldMeta<TenderStatusField>(
  TenderStatusField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  'EconomicOperatorParty',
  'The Economic Operator receiving the tender status information.',
  '1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaDocumentProviderParty = new FieldMeta<TenderStatusField>(
  TenderStatusField.DocumentProviderParty,
  'DocumentProviderParty',
  'Party',
  'Party',
  'The party that has the contract documents for the tendering process.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaTenderRecipientParty = new FieldMeta<TenderStatusField>(
  TenderStatusField.TenderRecipientParty,
  'TenderRecipientParty',
  'Party',
  'Party',
  'The party to which tenders should be presented.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaProcurementProject = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  'ProcurementProject',
  'An overall definition of this procurement project.',
  '0..1',
  undefined,
  undefined
)

export const TenderStatusFieldMetaProcurementProjectLot = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  'ProcurementProjectLot',
  'One of the procurement project lots into which this contract can be split.',
  '0..n',
  undefined,
  undefined
)

export class TenderStatusFieldMeta {
  public static readonly UBLExtensions = TenderStatusFieldMetaUBLExtensions
  public static readonly UBLVersionID = TenderStatusFieldMetaUBLVersionID
  public static readonly CustomizationID = TenderStatusFieldMetaCustomizationID
  public static readonly ProfileID = TenderStatusFieldMetaProfileID
  public static readonly ProfileExecutionID = TenderStatusFieldMetaProfileExecutionID
  public static readonly ID = TenderStatusFieldMetaID
  public static readonly CopyIndicator = TenderStatusFieldMetaCopyIndicator
  public static readonly UUID = TenderStatusFieldMetaUUID
  public static readonly ContractFolderID = TenderStatusFieldMetaContractFolderID
  public static readonly IssueDate = TenderStatusFieldMetaIssueDate
  public static readonly IssueTime = TenderStatusFieldMetaIssueTime
  public static readonly ContractName = TenderStatusFieldMetaContractName
  public static readonly Note = TenderStatusFieldMetaNote
  public static readonly ProcedureCode = TenderStatusFieldMetaProcedureCode
  public static readonly TenderSubmissionDeadlinePeriod = TenderStatusFieldMetaTenderSubmissionDeadlinePeriod
  public static readonly InvitationSubmissionPeriod = TenderStatusFieldMetaInvitationSubmissionPeriod
  public static readonly ParticipationRequestReceptionPeriod = TenderStatusFieldMetaParticipationRequestReceptionPeriod
  public static readonly ProcurementLegislationDocumentReference = TenderStatusFieldMetaProcurementLegislationDocumentReference
  public static readonly FiscalLegislationDocumentReference = TenderStatusFieldMetaFiscalLegislationDocumentReference
  public static readonly EnvironmentalLegislationDocumentReference = TenderStatusFieldMetaEnvironmentalLegislationDocumentReference
  public static readonly EmploymentLegislationDocumentReference = TenderStatusFieldMetaEmploymentLegislationDocumentReference
  public static readonly TenderStatusInquiryDocumentReference = TenderStatusFieldMetaTenderStatusInquiryDocumentReference
  public static readonly Signature = TenderStatusFieldMetaSignature
  public static readonly ContractingParty = TenderStatusFieldMetaContractingParty
  public static readonly EconomicOperatorParty = TenderStatusFieldMetaEconomicOperatorParty
  public static readonly DocumentProviderParty = TenderStatusFieldMetaDocumentProviderParty
  public static readonly TenderRecipientParty = TenderStatusFieldMetaTenderRecipientParty
  public static readonly ProcurementProject = TenderStatusFieldMetaProcurementProject
  public static readonly ProcurementProjectLot = TenderStatusFieldMetaProcurementProjectLot
}

export const TenderStatusFieldMap = new Map([
  [TenderStatusField.UBLExtensions, TenderStatusFieldMetaUBLExtensions],
  [TenderStatusField.UBLVersionID, TenderStatusFieldMetaUBLVersionID],
  [TenderStatusField.CustomizationID, TenderStatusFieldMetaCustomizationID],
  [TenderStatusField.ProfileID, TenderStatusFieldMetaProfileID],
  [TenderStatusField.ProfileExecutionID, TenderStatusFieldMetaProfileExecutionID],
  [TenderStatusField.ID, TenderStatusFieldMetaID],
  [TenderStatusField.CopyIndicator, TenderStatusFieldMetaCopyIndicator],
  [TenderStatusField.UUID, TenderStatusFieldMetaUUID],
  [TenderStatusField.ContractFolderID, TenderStatusFieldMetaContractFolderID],
  [TenderStatusField.IssueDate, TenderStatusFieldMetaIssueDate],
  [TenderStatusField.IssueTime, TenderStatusFieldMetaIssueTime],
  [TenderStatusField.ContractName, TenderStatusFieldMetaContractName],
  [TenderStatusField.Note, TenderStatusFieldMetaNote],
  [TenderStatusField.ProcedureCode, TenderStatusFieldMetaProcedureCode],
  [TenderStatusField.TenderSubmissionDeadlinePeriod, TenderStatusFieldMetaTenderSubmissionDeadlinePeriod],
  [TenderStatusField.InvitationSubmissionPeriod, TenderStatusFieldMetaInvitationSubmissionPeriod],
  [TenderStatusField.ParticipationRequestReceptionPeriod, TenderStatusFieldMetaParticipationRequestReceptionPeriod],
  [TenderStatusField.ProcurementLegislationDocumentReference, TenderStatusFieldMetaProcurementLegislationDocumentReference],
  [TenderStatusField.FiscalLegislationDocumentReference, TenderStatusFieldMetaFiscalLegislationDocumentReference],
  [TenderStatusField.EnvironmentalLegislationDocumentReference, TenderStatusFieldMetaEnvironmentalLegislationDocumentReference],
  [TenderStatusField.EmploymentLegislationDocumentReference, TenderStatusFieldMetaEmploymentLegislationDocumentReference],
  [TenderStatusField.TenderStatusInquiryDocumentReference, TenderStatusFieldMetaTenderStatusInquiryDocumentReference],
  [TenderStatusField.Signature, TenderStatusFieldMetaSignature],
  [TenderStatusField.ContractingParty, TenderStatusFieldMetaContractingParty],
  [TenderStatusField.EconomicOperatorParty, TenderStatusFieldMetaEconomicOperatorParty],
  [TenderStatusField.DocumentProviderParty, TenderStatusFieldMetaDocumentProviderParty],
  [TenderStatusField.TenderRecipientParty, TenderStatusFieldMetaTenderRecipientParty],
  [TenderStatusField.ProcurementProject, TenderStatusFieldMetaProcurementProject],
  [TenderStatusField.ProcurementProjectLot, TenderStatusFieldMetaProcurementProjectLot]
])
