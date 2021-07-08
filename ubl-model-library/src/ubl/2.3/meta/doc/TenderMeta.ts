import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TenderedProjectType } from '../cac/TenderedProjectMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderFieldMetaUBLVersionID = new FieldMeta<TenderField>(
  TenderField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TenderFieldMetaCustomizationID = new FieldMeta<TenderField>(
  TenderField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TenderFieldMetaProfileID = new FieldMeta<TenderField>(
  TenderField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TenderFieldMetaProfileExecutionID = new FieldMeta<TenderField>(
  TenderField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TenderFieldMetaID = new FieldMeta<TenderField>(
  TenderField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderFieldMetaCopyIndicator = new FieldMeta<TenderField>(
  TenderField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderFieldMetaUUID = new FieldMeta<TenderField>(
  TenderField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderFieldMetaTenderTypeCode = new FieldMeta<TenderField>(
  TenderField.TenderTypeCode,
  'TenderTypeCode',
  'Tender Type Code',
  CodeType.name,
  'A code to specify the type of tender (economical or objective criteria versus technical or subjective criteria)',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderFieldMetaContractFolderID = new FieldMeta<TenderField>(
  TenderField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderFieldMetaIssueDate = new FieldMeta<TenderField>(
  TenderField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderFieldMetaIssueTime = new FieldMeta<TenderField>(
  TenderField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderFieldMetaContractName = new FieldMeta<TenderField>(
  TenderField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderFieldMetaNote = new FieldMeta<TenderField>(
  TenderField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderFieldMetaValidityPeriod = new FieldMeta<TenderField>(
  TenderField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period for which the Tender is valid.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderFieldMetaCallForTenderDocumentReference = new FieldMeta<TenderField>(
  TenderField.CallForTenderDocumentReference,
  'CallForTenderDocumentReference',
  'Call For Tender Document Reference',
  DocumentReferenceType.name,
  'A reference to the call for tender document of which this tender result of.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderFieldMetaDocumentReference = new FieldMeta<TenderField>(
  TenderField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderFieldMetaSignature = new FieldMeta<TenderField>(
  TenderField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderFieldMetaTendererParty = new FieldMeta<TenderField>(
  TenderField.TendererParty,
  'TendererParty',
  'Tenderer Party',
  PartyType.name,
  'The primary tenderer.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderFieldMetaTendererQualificationDocumentReference = new FieldMeta<TenderField>(
  TenderField.TendererQualificationDocumentReference,
  'TendererQualificationDocumentReference',
  'Tenderer Qualification Document Reference',
  DocumentReferenceType.name,
  'A reference to the tenderer qualification document that has been used to qualify the tenderer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderFieldMetaSubcontractorParty = new FieldMeta<TenderField>(
  TenderField.SubcontractorParty,
  'SubcontractorParty',
  'Subcontractor Party',
  PartyType.name,
  'A subcontractor or other tenderer participating in the same Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderFieldMetaContractingParty = new FieldMeta<TenderField>(
  TenderField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The contracting party.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderFieldMetaOriginatorCustomerParty = new FieldMeta<TenderField>(
  TenderField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The party originating the Tender.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderFieldMetaTenderedProject = new FieldMeta<TenderField>(
  TenderField.TenderedProject,
  'TenderedProject',
  'Tendered Project',
  TenderedProjectType.name,
  'A project with which this Tender is associated. A single Tender can be used to bid for one project, multiple projects, or the global project.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const TenderType: Type<TenderField> = {
  name: 'Tender',
  label: 'Tender',
  module: TypeModule.doc,
  definition: 'A document whereby an economic operator (the tenderer) makes a formal offer (the tender) to a contracting authority to execute an order for the supply or purchase of goods, or for the execution of work, according to the terms of a proposed contract.',
  fields: TenderFieldMap,
}
