import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { EconomicOperatorPartyType } from '../cac/EconomicOperatorPartyMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { ProcurementProjectType } from '../cac/ProcurementProjectMeta'
import { ProcurementProjectLotType } from '../cac/ProcurementProjectLotMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderStatusFieldMetaUBLVersionID = new FieldMeta<TenderStatusField>(
  TenderStatusField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TenderStatusFieldMetaCustomizationID = new FieldMeta<TenderStatusField>(
  TenderStatusField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TenderStatusFieldMetaProfileID = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TenderStatusFieldMetaProfileExecutionID = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TenderStatusFieldMetaID = new FieldMeta<TenderStatusField>(
  TenderStatusField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusFieldMetaCopyIndicator = new FieldMeta<TenderStatusField>(
  TenderStatusField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusFieldMetaUUID = new FieldMeta<TenderStatusField>(
  TenderStatusField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusFieldMetaContractFolderID = new FieldMeta<TenderStatusField>(
  TenderStatusField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusFieldMetaIssueDate = new FieldMeta<TenderStatusField>(
  TenderStatusField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusFieldMetaIssueTime = new FieldMeta<TenderStatusField>(
  TenderStatusField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusFieldMetaContractName = new FieldMeta<TenderStatusField>(
  TenderStatusField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusFieldMetaNote = new FieldMeta<TenderStatusField>(
  TenderStatusField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderStatusFieldMetaProcedureCode = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProcedureCode,
  'ProcedureCode',
  'Procedure Code',
  CodeType.name,
  'A code signifying the type of this tendering procedure.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Open, Restricted, Negotiated'
)

export const TenderStatusFieldMetaTenderSubmissionDeadlinePeriod = new FieldMeta<TenderStatusField>(
  TenderStatusField.TenderSubmissionDeadlinePeriod,
  'TenderSubmissionDeadlinePeriod',
  'Tender Submission Deadline Period',
  PeriodType.name,
  'The period during which tenders must be delivered.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaInvitationSubmissionPeriod = new FieldMeta<TenderStatusField>(
  TenderStatusField.InvitationSubmissionPeriod,
  'InvitationSubmissionPeriod',
  'Invitation Submission Period',
  PeriodType.name,
  'The period during which invitations to tender must be completed and delivered.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaParticipationRequestReceptionPeriod = new FieldMeta<TenderStatusField>(
  TenderStatusField.ParticipationRequestReceptionPeriod,
  'ParticipationRequestReceptionPeriod',
  'Participation Request Reception Period',
  PeriodType.name,
  'The period during which requests for participation must be completed and delivered.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaProcurementLegislationDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProcurementLegislationDocumentReference,
  'ProcurementLegislationDocumentReference',
  'Procurement Legislation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document providing references to procurement legislation applicable to the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaFiscalLegislationDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.FiscalLegislationDocumentReference,
  'FiscalLegislationDocumentReference',
  'Fiscal Legislation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document providing references to fiscal legislation applicable to the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaEnvironmentalLegislationDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.EnvironmentalLegislationDocumentReference,
  'EnvironmentalLegislationDocumentReference',
  'Environmental Legislation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document providing references to environmental legislation applicable to the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaEmploymentLegislationDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.EmploymentLegislationDocumentReference,
  'EmploymentLegislationDocumentReference',
  'Employment Legislation Document Reference',
  DocumentReferenceType.name,
  'A reference to a document providing references to employment legislation applicable to the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaTenderStatusInquiryDocumentReference = new FieldMeta<TenderStatusField>(
  TenderStatusField.TenderStatusInquiryDocumentReference,
  'TenderStatusInquiryDocumentReference',
  'Tender Status Inquiry Document Reference',
  DocumentReferenceType.name,
  'A reference to a received Tender status inquiry.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaSignature = new FieldMeta<TenderStatusField>(
  TenderStatusField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaContractingParty = new FieldMeta<TenderStatusField>(
  TenderStatusField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The Contracting Party issuing the information about the tender status.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaEconomicOperatorParty = new FieldMeta<TenderStatusField>(
  TenderStatusField.EconomicOperatorParty,
  'EconomicOperatorParty',
  'Economic Operator Party',
  EconomicOperatorPartyType.name,
  'The Economic Operator receiving the tender status information.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaDocumentProviderParty = new FieldMeta<TenderStatusField>(
  TenderStatusField.DocumentProviderParty,
  'DocumentProviderParty',
  'Document Provider Party',
  PartyType.name,
  'The party that has the contract documents for the tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaTenderRecipientParty = new FieldMeta<TenderStatusField>(
  TenderStatusField.TenderRecipientParty,
  'TenderRecipientParty',
  'Tender Recipient Party',
  PartyType.name,
  'The party to which tenders should be presented.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaProcurementProject = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderStatusFieldMetaProcurementProjectLot = new FieldMeta<TenderStatusField>(
  TenderStatusField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'One of the procurement project lots into which this contract can be split.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TenderStatusType: Type<TenderStatusField> = {
  name: 'TenderStatus',
  label: 'Tender Status',
  module: TypeModule.doc,
  definition: 'A document sent by the Contracting Party to an Economic Operator describing the status of a tendering procedure.',
  fields: TenderStatusFieldMap,
}
