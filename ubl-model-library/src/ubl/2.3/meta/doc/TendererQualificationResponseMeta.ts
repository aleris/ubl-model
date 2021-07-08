import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AppealTermsType } from '../cac/AppealTermsMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { QualificationResolutionType } from '../cac/QualificationResolutionMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaUBLVersionID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TendererQualificationResponseFieldMetaCustomizationID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TendererQualificationResponseFieldMetaProfileID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TendererQualificationResponseFieldMetaProfileExecutionID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TendererQualificationResponseFieldMetaID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaCopyIndicator = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaUUID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaContractFolderID = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaContractName = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaIssueDate = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaIssueTime = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaNote = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaSenderParty = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this message.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaReceiverParty = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this message.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaResolutionDocumentReference = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.ResolutionDocumentReference,
  'ResolutionDocumentReference',
  'Resolution Document Reference',
  DocumentReferenceType.name,
  'A document (e.g., meeting minutes) relating to consideration of tenderer qualifications.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaQualificationResolution = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.QualificationResolution,
  'QualificationResolution',
  'Qualification Resolution',
  QualificationResolutionType.name,
  'An association to the resolution that is being notified',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaAppealTerms = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.AppealTerms,
  'AppealTerms',
  'Appeal Terms',
  AppealTermsType.name,
  'Terms of appeal for this tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationResponseFieldMetaSignature = new FieldMeta<TendererQualificationResponseField>(
  TendererQualificationResponseField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TendererQualificationResponseType: Type<TendererQualificationResponseField> = {
  name: 'TendererQualificationResponse',
  label: 'Tenderer Qualification Response',
  module: TypeModule.doc,
  definition: 'A document issued by a procurement organization to notify an economic operator whether it has been admitted to or excluded from the tendering process.',
  fields: TendererQualificationResponseFieldMap,
}
