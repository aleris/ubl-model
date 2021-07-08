import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CountryType } from '../cac/CountryMeta'
import { DateType } from '../cbc/DateMeta'
import { DigitalAgreementTermsType } from '../cac/DigitalAgreementTermsMeta'
import { DigitalProcessType } from '../cac/DigitalProcessMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { ParticipantPartyType } from '../cac/ParticipantPartyMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum DigitalAgreementField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  AgreementTypeCode = 'AgreementTypeCode',
  VersionID = 'VersionID',
  PreviousVersionID = 'PreviousVersionID',
  RequiredResponseMessageLevelCode = 'RequiredResponseMessageLevelCode',
  Signature = 'Signature',
  GovernorParty = 'GovernorParty',
  ParticipantParty = 'ParticipantParty',
  AgreementCountry = 'AgreementCountry',
  RequiredCertificationDocumentReference = 'RequiredCertificationDocumentReference',
  DigitalAgreementTerms = 'DigitalAgreementTerms',
  DigitalProcess = 'DigitalProcess'
}

export const DigitalAgreementFieldMetaUBLExtensions = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaUBLVersionID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.2'
)

export const DigitalAgreementFieldMetaCustomizationID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'EESPA'
)

export const DigitalAgreementFieldMetaProfileID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const DigitalAgreementFieldMetaProfileExecutionID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const DigitalAgreementFieldMetaID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaUUID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaIssueDate = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaIssueTime = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaAgreementTypeCode = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.AgreementTypeCode,
  'AgreementTypeCode',
  'Agreement Type Code',
  CodeType.name,
  'A code signifying the type of digital agreement (e.g. bi-lateral, multi-lateral).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'multi-lateral'
)

export const DigitalAgreementFieldMetaVersionID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.VersionID,
  'VersionID',
  'Version Identifier',
  IdentifierType.name,
  'Identifies the current version of this digital agreement.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  '1.1'
)

export const DigitalAgreementFieldMetaPreviousVersionID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version Identifier',
  IdentifierType.name,
  'Identifies the previous version of this digital agreement.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1'
)

export const DigitalAgreementFieldMetaRequiredResponseMessageLevelCode = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.RequiredResponseMessageLevelCode,
  'RequiredResponseMessageLevelCode',
  'Required Response Message Level Code',
  CodeType.name,
  'A code signifying the minimum response message level the parties are required to provide (e.g. EESPA response message level).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'RM2'
)

export const DigitalAgreementFieldMetaSignature = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaGovernorParty = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.GovernorParty,
  'GovernorParty',
  'Governor Party',
  PartyType.name,
  'The party governing the agreement (e.g. a multi-lateral digital agreement).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaParticipantParty = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.ParticipantParty,
  'ParticipantParty',
  'Participant Party',
  ParticipantPartyType.name,
  'The business parties agreeing on a set of digital processes, terms and conditions to ensure interoperability.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaAgreementCountry = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.AgreementCountry,
  'AgreementCountry',
  'Agreement Country',
  CountryType.name,
  'The country to which this digital agreement applies.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaRequiredCertificationDocumentReference = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.RequiredCertificationDocumentReference,
  'RequiredCertificationDocumentReference',
  'Required Certification Document Reference',
  DocumentReferenceType.name,
  'A reference to a certification document required by this digital agreement.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaDigitalAgreementTerms = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.DigitalAgreementTerms,
  'DigitalAgreementTerms',
  'Digital Agreement Terms',
  DigitalAgreementTermsType.name,
  'A reference to digital agreement terms and conditions.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaDigitalProcess = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.DigitalProcess,
  'DigitalProcess',
  'Digital Process',
  DigitalProcessType.name,
  'The digital processes in scope of this digital agreement.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class DigitalAgreementFieldMeta {
  public static readonly UBLExtensions = DigitalAgreementFieldMetaUBLExtensions
  public static readonly UBLVersionID = DigitalAgreementFieldMetaUBLVersionID
  public static readonly CustomizationID = DigitalAgreementFieldMetaCustomizationID
  public static readonly ProfileID = DigitalAgreementFieldMetaProfileID
  public static readonly ProfileExecutionID = DigitalAgreementFieldMetaProfileExecutionID
  public static readonly ID = DigitalAgreementFieldMetaID
  public static readonly UUID = DigitalAgreementFieldMetaUUID
  public static readonly IssueDate = DigitalAgreementFieldMetaIssueDate
  public static readonly IssueTime = DigitalAgreementFieldMetaIssueTime
  public static readonly AgreementTypeCode = DigitalAgreementFieldMetaAgreementTypeCode
  public static readonly VersionID = DigitalAgreementFieldMetaVersionID
  public static readonly PreviousVersionID = DigitalAgreementFieldMetaPreviousVersionID
  public static readonly RequiredResponseMessageLevelCode = DigitalAgreementFieldMetaRequiredResponseMessageLevelCode
  public static readonly Signature = DigitalAgreementFieldMetaSignature
  public static readonly GovernorParty = DigitalAgreementFieldMetaGovernorParty
  public static readonly ParticipantParty = DigitalAgreementFieldMetaParticipantParty
  public static readonly AgreementCountry = DigitalAgreementFieldMetaAgreementCountry
  public static readonly RequiredCertificationDocumentReference = DigitalAgreementFieldMetaRequiredCertificationDocumentReference
  public static readonly DigitalAgreementTerms = DigitalAgreementFieldMetaDigitalAgreementTerms
  public static readonly DigitalProcess = DigitalAgreementFieldMetaDigitalProcess
}

export const DigitalAgreementFieldMap = new Map([
  [DigitalAgreementField.UBLExtensions, DigitalAgreementFieldMetaUBLExtensions],
  [DigitalAgreementField.UBLVersionID, DigitalAgreementFieldMetaUBLVersionID],
  [DigitalAgreementField.CustomizationID, DigitalAgreementFieldMetaCustomizationID],
  [DigitalAgreementField.ProfileID, DigitalAgreementFieldMetaProfileID],
  [DigitalAgreementField.ProfileExecutionID, DigitalAgreementFieldMetaProfileExecutionID],
  [DigitalAgreementField.ID, DigitalAgreementFieldMetaID],
  [DigitalAgreementField.UUID, DigitalAgreementFieldMetaUUID],
  [DigitalAgreementField.IssueDate, DigitalAgreementFieldMetaIssueDate],
  [DigitalAgreementField.IssueTime, DigitalAgreementFieldMetaIssueTime],
  [DigitalAgreementField.AgreementTypeCode, DigitalAgreementFieldMetaAgreementTypeCode],
  [DigitalAgreementField.VersionID, DigitalAgreementFieldMetaVersionID],
  [DigitalAgreementField.PreviousVersionID, DigitalAgreementFieldMetaPreviousVersionID],
  [DigitalAgreementField.RequiredResponseMessageLevelCode, DigitalAgreementFieldMetaRequiredResponseMessageLevelCode],
  [DigitalAgreementField.Signature, DigitalAgreementFieldMetaSignature],
  [DigitalAgreementField.GovernorParty, DigitalAgreementFieldMetaGovernorParty],
  [DigitalAgreementField.ParticipantParty, DigitalAgreementFieldMetaParticipantParty],
  [DigitalAgreementField.AgreementCountry, DigitalAgreementFieldMetaAgreementCountry],
  [DigitalAgreementField.RequiredCertificationDocumentReference, DigitalAgreementFieldMetaRequiredCertificationDocumentReference],
  [DigitalAgreementField.DigitalAgreementTerms, DigitalAgreementFieldMetaDigitalAgreementTerms],
  [DigitalAgreementField.DigitalProcess, DigitalAgreementFieldMetaDigitalProcess]
])

export const DigitalAgreementType: Type<DigitalAgreementField> = {
  name: 'DigitalAgreement',
  label: 'Digital Agreement',
  module: TypeModule.doc,
  definition: 'A document used to support business parties agreeing on a set of digital processes, terms and conditions to ensure interoperability.',
  fields: DigitalAgreementFieldMap,
}
