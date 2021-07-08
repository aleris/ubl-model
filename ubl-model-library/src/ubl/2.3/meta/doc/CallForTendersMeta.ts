import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { ProcurementProjectType } from '../cac/ProcurementProjectMeta'
import { ProcurementProjectLotType } from '../cac/ProcurementProjectLotMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TenderingProcessType } from '../cac/TenderingProcessMeta'
import { TenderingTermsType } from '../cac/TenderingTermsMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum CallForTendersField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  ContractFolderID = 'ContractFolderID',
  ApprovalDate = 'ApprovalDate',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Note = 'Note',
  VersionID = 'VersionID',
  PreviousVersionID = 'PreviousVersionID',
  LegalDocumentReference = 'LegalDocumentReference',
  TechnicalDocumentReference = 'TechnicalDocumentReference',
  RequiredDocumentReference = 'RequiredDocumentReference',
  ProvidedDocumentReference = 'ProvidedDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  ContractingParty = 'ContractingParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  ReceiverParty = 'ReceiverParty',
  TenderingTerms = 'TenderingTerms',
  TenderingProcess = 'TenderingProcess',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLot = 'ProcurementProjectLot'
}

export const CallForTendersFieldMetaUBLExtensions = new FieldMeta<CallForTendersField>(
  CallForTendersField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const CallForTendersFieldMetaUBLVersionID = new FieldMeta<CallForTendersField>(
  CallForTendersField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaCustomizationID = new FieldMeta<CallForTendersField>(
  CallForTendersField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaProfileID = new FieldMeta<CallForTendersField>(
  CallForTendersField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaProfileExecutionID = new FieldMeta<CallForTendersField>(
  CallForTendersField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaID = new FieldMeta<CallForTendersField>(
  CallForTendersField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaCopyIndicator = new FieldMeta<CallForTendersField>(
  CallForTendersField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaUUID = new FieldMeta<CallForTendersField>(
  CallForTendersField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaContractFolderID = new FieldMeta<CallForTendersField>(
  CallForTendersField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaApprovalDate = new FieldMeta<CallForTendersField>(
  CallForTendersField.ApprovalDate,
  'ApprovalDate',
  'Approval Date',
  DateType.name,
  'The date, assigned by the contracting party, on which the Call For Tenders was approved.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaIssueDate = new FieldMeta<CallForTendersField>(
  CallForTendersField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaIssueTime = new FieldMeta<CallForTendersField>(
  CallForTendersField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaNote = new FieldMeta<CallForTendersField>(
  CallForTendersField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const CallForTendersFieldMetaVersionID = new FieldMeta<CallForTendersField>(
  CallForTendersField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Indicates the current version of the Call for Tenders.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const CallForTendersFieldMetaPreviousVersionID = new FieldMeta<CallForTendersField>(
  CallForTendersField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version',
  IdentifierType.name,
  'Identifies the previous version of the Call for Tenders which is superceded by this version.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.0'
)

export const CallForTendersFieldMetaLegalDocumentReference = new FieldMeta<CallForTendersField>(
  CallForTendersField.LegalDocumentReference,
  'LegalDocumentReference',
  'Legal Document Reference',
  DocumentReferenceType.name,
  'A reference to a legal document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaTechnicalDocumentReference = new FieldMeta<CallForTendersField>(
  CallForTendersField.TechnicalDocumentReference,
  'TechnicalDocumentReference',
  'Technical Document Reference',
  DocumentReferenceType.name,
  'A reference to a technical document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaRequiredDocumentReference = new FieldMeta<CallForTendersField>(
  CallForTendersField.RequiredDocumentReference,
  'RequiredDocumentReference',
  'Required Document Reference',
  DocumentReferenceType.name,
  'A reference to a required document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaProvidedDocumentReference = new FieldMeta<CallForTendersField>(
  CallForTendersField.ProvidedDocumentReference,
  'ProvidedDocumentReference',
  'Provided Document Reference',
  DocumentReferenceType.name,
  'A reference to a provided document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaAdditionalDocumentReference = new FieldMeta<CallForTendersField>(
  CallForTendersField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaSignature = new FieldMeta<CallForTendersField>(
  CallForTendersField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaContractingParty = new FieldMeta<CallForTendersField>(
  CallForTendersField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The contracting party or parties in case of joint procurement.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaOriginatorCustomerParty = new FieldMeta<CallForTendersField>(
  CallForTendersField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The party who originated Order.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaReceiverParty = new FieldMeta<CallForTendersField>(
  CallForTendersField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaTenderingTerms = new FieldMeta<CallForTendersField>(
  CallForTendersField.TenderingTerms,
  'TenderingTerms',
  'Tendering Terms',
  TenderingTermsType.name,
  'The tendering terms associated with this tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaTenderingProcess = new FieldMeta<CallForTendersField>(
  CallForTendersField.TenderingProcess,
  'TenderingProcess',
  'Tendering Process',
  TenderingProcessType.name,
  'A description of the tendering process itself.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaProcurementProject = new FieldMeta<CallForTendersField>(
  CallForTendersField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const CallForTendersFieldMetaProcurementProjectLot = new FieldMeta<CallForTendersField>(
  CallForTendersField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'One of the procurement project lots into which this contract can be split.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class CallForTendersFieldMeta {
  public static readonly UBLExtensions = CallForTendersFieldMetaUBLExtensions
  public static readonly UBLVersionID = CallForTendersFieldMetaUBLVersionID
  public static readonly CustomizationID = CallForTendersFieldMetaCustomizationID
  public static readonly ProfileID = CallForTendersFieldMetaProfileID
  public static readonly ProfileExecutionID = CallForTendersFieldMetaProfileExecutionID
  public static readonly ID = CallForTendersFieldMetaID
  public static readonly CopyIndicator = CallForTendersFieldMetaCopyIndicator
  public static readonly UUID = CallForTendersFieldMetaUUID
  public static readonly ContractFolderID = CallForTendersFieldMetaContractFolderID
  public static readonly ApprovalDate = CallForTendersFieldMetaApprovalDate
  public static readonly IssueDate = CallForTendersFieldMetaIssueDate
  public static readonly IssueTime = CallForTendersFieldMetaIssueTime
  public static readonly Note = CallForTendersFieldMetaNote
  public static readonly VersionID = CallForTendersFieldMetaVersionID
  public static readonly PreviousVersionID = CallForTendersFieldMetaPreviousVersionID
  public static readonly LegalDocumentReference = CallForTendersFieldMetaLegalDocumentReference
  public static readonly TechnicalDocumentReference = CallForTendersFieldMetaTechnicalDocumentReference
  public static readonly RequiredDocumentReference = CallForTendersFieldMetaRequiredDocumentReference
  public static readonly ProvidedDocumentReference = CallForTendersFieldMetaProvidedDocumentReference
  public static readonly AdditionalDocumentReference = CallForTendersFieldMetaAdditionalDocumentReference
  public static readonly Signature = CallForTendersFieldMetaSignature
  public static readonly ContractingParty = CallForTendersFieldMetaContractingParty
  public static readonly OriginatorCustomerParty = CallForTendersFieldMetaOriginatorCustomerParty
  public static readonly ReceiverParty = CallForTendersFieldMetaReceiverParty
  public static readonly TenderingTerms = CallForTendersFieldMetaTenderingTerms
  public static readonly TenderingProcess = CallForTendersFieldMetaTenderingProcess
  public static readonly ProcurementProject = CallForTendersFieldMetaProcurementProject
  public static readonly ProcurementProjectLot = CallForTendersFieldMetaProcurementProjectLot
}

export const CallForTendersFieldMap = new Map([
  [CallForTendersField.UBLExtensions, CallForTendersFieldMetaUBLExtensions],
  [CallForTendersField.UBLVersionID, CallForTendersFieldMetaUBLVersionID],
  [CallForTendersField.CustomizationID, CallForTendersFieldMetaCustomizationID],
  [CallForTendersField.ProfileID, CallForTendersFieldMetaProfileID],
  [CallForTendersField.ProfileExecutionID, CallForTendersFieldMetaProfileExecutionID],
  [CallForTendersField.ID, CallForTendersFieldMetaID],
  [CallForTendersField.CopyIndicator, CallForTendersFieldMetaCopyIndicator],
  [CallForTendersField.UUID, CallForTendersFieldMetaUUID],
  [CallForTendersField.ContractFolderID, CallForTendersFieldMetaContractFolderID],
  [CallForTendersField.ApprovalDate, CallForTendersFieldMetaApprovalDate],
  [CallForTendersField.IssueDate, CallForTendersFieldMetaIssueDate],
  [CallForTendersField.IssueTime, CallForTendersFieldMetaIssueTime],
  [CallForTendersField.Note, CallForTendersFieldMetaNote],
  [CallForTendersField.VersionID, CallForTendersFieldMetaVersionID],
  [CallForTendersField.PreviousVersionID, CallForTendersFieldMetaPreviousVersionID],
  [CallForTendersField.LegalDocumentReference, CallForTendersFieldMetaLegalDocumentReference],
  [CallForTendersField.TechnicalDocumentReference, CallForTendersFieldMetaTechnicalDocumentReference],
  [CallForTendersField.RequiredDocumentReference, CallForTendersFieldMetaRequiredDocumentReference],
  [CallForTendersField.ProvidedDocumentReference, CallForTendersFieldMetaProvidedDocumentReference],
  [CallForTendersField.AdditionalDocumentReference, CallForTendersFieldMetaAdditionalDocumentReference],
  [CallForTendersField.Signature, CallForTendersFieldMetaSignature],
  [CallForTendersField.ContractingParty, CallForTendersFieldMetaContractingParty],
  [CallForTendersField.OriginatorCustomerParty, CallForTendersFieldMetaOriginatorCustomerParty],
  [CallForTendersField.ReceiverParty, CallForTendersFieldMetaReceiverParty],
  [CallForTendersField.TenderingTerms, CallForTendersFieldMetaTenderingTerms],
  [CallForTendersField.TenderingProcess, CallForTendersFieldMetaTenderingProcess],
  [CallForTendersField.ProcurementProject, CallForTendersFieldMetaProcurementProject],
  [CallForTendersField.ProcurementProjectLot, CallForTendersFieldMetaProcurementProjectLot]
])

export const CallForTendersType: Type<CallForTendersField> = {
  name: 'CallForTenders',
  label: 'Call For Tenders',
  module: TypeModule.doc,
  definition: 'A document used by a Contracting Party to define a procurement project to buy goods, services, or works during a specified period.',
  fields: CallForTendersFieldMap,
}
