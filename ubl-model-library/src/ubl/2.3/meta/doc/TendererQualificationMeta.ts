import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { EvidenceType } from '../cac/EvidenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TendererPartyQualificationType } from '../cac/TendererPartyQualificationMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaUBLVersionID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TendererQualificationFieldMetaCustomizationID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TendererQualificationFieldMetaProfileID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TendererQualificationFieldMetaProfileExecutionID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TendererQualificationFieldMetaID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaCopyIndicator = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaUUID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaContractFolderID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaIssueDate = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaIssueTime = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaNote = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaVersionID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.VersionID,
  'VersionID',
  'Version',
  IdentifierType.name,
  'Indicates the current version of the Tenderer Qualification.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const TendererQualificationFieldMetaPreviousVersionID = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version',
  IdentifierType.name,
  'Identifies the previous version of the Tenderer Qualification which is superceded by this version.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1.0'
)

export const TendererQualificationFieldMetaSignature = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaTendererPartyQualification = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.TendererPartyQualification,
  'TendererPartyQualification',
  'Tenderer Party Qualification',
  TendererPartyQualificationType.name,
  'A specific qualification of the Tenderer.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaContractingParty = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The contracting party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaEvidence = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.Evidence,
  'Evidence',
  'Evidence',
  EvidenceType.name,
  'An evidentiary document supporting Tenderer qualifications.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TendererQualificationFieldMetaAdditionalDocumentReference = new FieldMeta<TendererQualificationField>(
  TendererQualificationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const TendererQualificationType: Type<TendererQualificationField> = {
  name: 'TendererQualification',
  label: 'Tenderer Qualification',
  module: TypeModule.doc,
  definition: 'A document declaring the qualifications of a tenderer.',
  fields: TendererQualificationFieldMap,
}
