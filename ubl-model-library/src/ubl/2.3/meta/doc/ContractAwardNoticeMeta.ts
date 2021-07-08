import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LanguageType } from '../cac/LanguageMeta'
import { PartyType } from '../cac/PartyMeta'
import { ProcurementProjectType } from '../cac/ProcurementProjectMeta'
import { ProcurementProjectLotType } from '../cac/ProcurementProjectLotMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TenderingProcessType } from '../cac/TenderingProcessMeta'
import { TenderingTermsType } from '../cac/TenderingTermsMeta'
import { TenderResultType } from '../cac/TenderResultMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ContractAwardNoticeField {
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
  PublishAwardIndicator = 'PublishAwardIndicator',
  NoticeLanguageCode = 'NoticeLanguageCode',
  AdditionalNoticeLanguage = 'AdditionalNoticeLanguage',
  PreviousDocumentReference = 'PreviousDocumentReference',
  MinutesDocumentReference = 'MinutesDocumentReference',
  Signature = 'Signature',
  ContractingParty = 'ContractingParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  ReceiverParty = 'ReceiverParty',
  TenderingTerms = 'TenderingTerms',
  TenderingProcess = 'TenderingProcess',
  ProcurementProject = 'ProcurementProject',
  ProcurementProjectLot = 'ProcurementProjectLot',
  TenderResult = 'TenderResult'
}

export const ContractAwardNoticeFieldMetaUBLExtensions = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaUBLVersionID = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaCustomizationID = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaProfileID = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaProfileExecutionID = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaID = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaCopyIndicator = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaUUID = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaContractFolderID = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaIssueDate = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaIssueTime = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaNote = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaVersionID = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.VersionID,
  'VersionID',
  'Version Identifier',
  IdentifierType.name,
  'An identifier of the current version of the Contract Award Notice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaPreviousVersionID = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version Identifier',
  IdentifierType.name,
  'An identifier of the previous version of the Contract Award Notice which is superceded by this version.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaRequestedPublicationDate = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.RequestedPublicationDate,
  'RequestedPublicationDate',
  'Requested Publication Date',
  DateType.name,
  'The requested publication date for this Contract Award Notice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaRegulatoryDomain = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.RegulatoryDomain,
  'RegulatoryDomain',
  'Regulatory Domain',
  TextType.name,
  'Information about the law that defines the regulatory domain.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaNoticeTypeCode = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.NoticeTypeCode,
  'NoticeTypeCode',
  'Notice Type Code',
  CodeType.name,
  'The type of notice (CAN general, CAN social, Design)',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaPublishAwardIndicator = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.PublishAwardIndicator,
  'PublishAwardIndicator',
  'Publish Award Indicator',
  IndicatorType.name,
  'An indicator specifying if the notice is published for service contracts within certain service categories (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaNoticeLanguageCode = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.NoticeLanguageCode,
  'NoticeLanguageCode',
  'Notice Language Code',
  CodeType.name,
  'The language used for this contract award notice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaAdditionalNoticeLanguage = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.AdditionalNoticeLanguage,
  'AdditionalNoticeLanguage',
  'Additional Notice Language',
  LanguageType.name,
  'An additional official language used in this contract award notice.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaPreviousDocumentReference = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.PreviousDocumentReference,
  'PreviousDocumentReference',
  'Previous Document Reference',
  DocumentReferenceType.name,
  'A reference to a previously sent document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaMinutesDocumentReference = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.MinutesDocumentReference,
  'MinutesDocumentReference',
  'Minutes Document Reference',
  DocumentReferenceType.name,
  'A reference to a set of minutes.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaSignature = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaContractingParty = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The contracting party or parties in case of joint procurement.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaOriginatorCustomerParty = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The party who originated Order.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaReceiverParty = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaTenderingTerms = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.TenderingTerms,
  'TenderingTerms',
  'Tendering Terms',
  TenderingTermsType.name,
  'The tendering terms associated with this tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaTenderingProcess = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.TenderingProcess,
  'TenderingProcess',
  'Tendering Process',
  TenderingProcessType.name,
  'A description of the tendering process itself.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaProcurementProject = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.ProcurementProject,
  'ProcurementProject',
  'Procurement Project',
  ProcurementProjectType.name,
  'An overall definition of this procurement project.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaProcurementProjectLot = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.ProcurementProjectLot,
  'ProcurementProjectLot',
  'Procurement Project Lot',
  ProcurementProjectLotType.name,
  'One of the procurement project lots into which this contract can be split.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ContractAwardNoticeFieldMetaTenderResult = new FieldMeta<ContractAwardNoticeField>(
  ContractAwardNoticeField.TenderResult,
  'TenderResult',
  'Tender Result',
  TenderResultType.name,
  'A result of the bid opening in the tendering process.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class ContractAwardNoticeFieldMeta {
  public static readonly UBLExtensions = ContractAwardNoticeFieldMetaUBLExtensions
  public static readonly UBLVersionID = ContractAwardNoticeFieldMetaUBLVersionID
  public static readonly CustomizationID = ContractAwardNoticeFieldMetaCustomizationID
  public static readonly ProfileID = ContractAwardNoticeFieldMetaProfileID
  public static readonly ProfileExecutionID = ContractAwardNoticeFieldMetaProfileExecutionID
  public static readonly ID = ContractAwardNoticeFieldMetaID
  public static readonly CopyIndicator = ContractAwardNoticeFieldMetaCopyIndicator
  public static readonly UUID = ContractAwardNoticeFieldMetaUUID
  public static readonly ContractFolderID = ContractAwardNoticeFieldMetaContractFolderID
  public static readonly IssueDate = ContractAwardNoticeFieldMetaIssueDate
  public static readonly IssueTime = ContractAwardNoticeFieldMetaIssueTime
  public static readonly Note = ContractAwardNoticeFieldMetaNote
  public static readonly VersionID = ContractAwardNoticeFieldMetaVersionID
  public static readonly PreviousVersionID = ContractAwardNoticeFieldMetaPreviousVersionID
  public static readonly RequestedPublicationDate = ContractAwardNoticeFieldMetaRequestedPublicationDate
  public static readonly RegulatoryDomain = ContractAwardNoticeFieldMetaRegulatoryDomain
  public static readonly NoticeTypeCode = ContractAwardNoticeFieldMetaNoticeTypeCode
  public static readonly PublishAwardIndicator = ContractAwardNoticeFieldMetaPublishAwardIndicator
  public static readonly NoticeLanguageCode = ContractAwardNoticeFieldMetaNoticeLanguageCode
  public static readonly AdditionalNoticeLanguage = ContractAwardNoticeFieldMetaAdditionalNoticeLanguage
  public static readonly PreviousDocumentReference = ContractAwardNoticeFieldMetaPreviousDocumentReference
  public static readonly MinutesDocumentReference = ContractAwardNoticeFieldMetaMinutesDocumentReference
  public static readonly Signature = ContractAwardNoticeFieldMetaSignature
  public static readonly ContractingParty = ContractAwardNoticeFieldMetaContractingParty
  public static readonly OriginatorCustomerParty = ContractAwardNoticeFieldMetaOriginatorCustomerParty
  public static readonly ReceiverParty = ContractAwardNoticeFieldMetaReceiverParty
  public static readonly TenderingTerms = ContractAwardNoticeFieldMetaTenderingTerms
  public static readonly TenderingProcess = ContractAwardNoticeFieldMetaTenderingProcess
  public static readonly ProcurementProject = ContractAwardNoticeFieldMetaProcurementProject
  public static readonly ProcurementProjectLot = ContractAwardNoticeFieldMetaProcurementProjectLot
  public static readonly TenderResult = ContractAwardNoticeFieldMetaTenderResult
}

export const ContractAwardNoticeFieldMap = new Map([
  [ContractAwardNoticeField.UBLExtensions, ContractAwardNoticeFieldMetaUBLExtensions],
  [ContractAwardNoticeField.UBLVersionID, ContractAwardNoticeFieldMetaUBLVersionID],
  [ContractAwardNoticeField.CustomizationID, ContractAwardNoticeFieldMetaCustomizationID],
  [ContractAwardNoticeField.ProfileID, ContractAwardNoticeFieldMetaProfileID],
  [ContractAwardNoticeField.ProfileExecutionID, ContractAwardNoticeFieldMetaProfileExecutionID],
  [ContractAwardNoticeField.ID, ContractAwardNoticeFieldMetaID],
  [ContractAwardNoticeField.CopyIndicator, ContractAwardNoticeFieldMetaCopyIndicator],
  [ContractAwardNoticeField.UUID, ContractAwardNoticeFieldMetaUUID],
  [ContractAwardNoticeField.ContractFolderID, ContractAwardNoticeFieldMetaContractFolderID],
  [ContractAwardNoticeField.IssueDate, ContractAwardNoticeFieldMetaIssueDate],
  [ContractAwardNoticeField.IssueTime, ContractAwardNoticeFieldMetaIssueTime],
  [ContractAwardNoticeField.Note, ContractAwardNoticeFieldMetaNote],
  [ContractAwardNoticeField.VersionID, ContractAwardNoticeFieldMetaVersionID],
  [ContractAwardNoticeField.PreviousVersionID, ContractAwardNoticeFieldMetaPreviousVersionID],
  [ContractAwardNoticeField.RequestedPublicationDate, ContractAwardNoticeFieldMetaRequestedPublicationDate],
  [ContractAwardNoticeField.RegulatoryDomain, ContractAwardNoticeFieldMetaRegulatoryDomain],
  [ContractAwardNoticeField.NoticeTypeCode, ContractAwardNoticeFieldMetaNoticeTypeCode],
  [ContractAwardNoticeField.PublishAwardIndicator, ContractAwardNoticeFieldMetaPublishAwardIndicator],
  [ContractAwardNoticeField.NoticeLanguageCode, ContractAwardNoticeFieldMetaNoticeLanguageCode],
  [ContractAwardNoticeField.AdditionalNoticeLanguage, ContractAwardNoticeFieldMetaAdditionalNoticeLanguage],
  [ContractAwardNoticeField.PreviousDocumentReference, ContractAwardNoticeFieldMetaPreviousDocumentReference],
  [ContractAwardNoticeField.MinutesDocumentReference, ContractAwardNoticeFieldMetaMinutesDocumentReference],
  [ContractAwardNoticeField.Signature, ContractAwardNoticeFieldMetaSignature],
  [ContractAwardNoticeField.ContractingParty, ContractAwardNoticeFieldMetaContractingParty],
  [ContractAwardNoticeField.OriginatorCustomerParty, ContractAwardNoticeFieldMetaOriginatorCustomerParty],
  [ContractAwardNoticeField.ReceiverParty, ContractAwardNoticeFieldMetaReceiverParty],
  [ContractAwardNoticeField.TenderingTerms, ContractAwardNoticeFieldMetaTenderingTerms],
  [ContractAwardNoticeField.TenderingProcess, ContractAwardNoticeFieldMetaTenderingProcess],
  [ContractAwardNoticeField.ProcurementProject, ContractAwardNoticeFieldMetaProcurementProject],
  [ContractAwardNoticeField.ProcurementProjectLot, ContractAwardNoticeFieldMetaProcurementProjectLot],
  [ContractAwardNoticeField.TenderResult, ContractAwardNoticeFieldMetaTenderResult]
])

export const ContractAwardNoticeType: Type<ContractAwardNoticeField> = {
  name: 'ContractAwardNotice',
  label: 'Contract Award Notice',
  module: TypeModule.doc,
  definition: 'A document published by a Contracting Party to announce the awarding of a procurement project.',
  fields: ContractAwardNoticeFieldMap,
}
