import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaUBLVersionID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.2'
)

export const DigitalAgreementFieldMetaCustomizationID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'EESPA'
)

export const DigitalAgreementFieldMetaProfileID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const DigitalAgreementFieldMetaProfileExecutionID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const DigitalAgreementFieldMetaID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaUUID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaIssueDate = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaIssueTime = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaAgreementTypeCode = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.AgreementTypeCode,
  'AgreementTypeCode',
  'Agreement Type Code',
  'Code',
  'A code signifying the type of digital agreement (e.g. bi-lateral, multi-lateral).',
  '0..1',
  'cbc',
  undefined,
  'multi-lateral'
)

export const DigitalAgreementFieldMetaVersionID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.VersionID,
  'VersionID',
  'Version Identifier',
  'Identifier',
  'Identifies the current version of this digital agreement.',
  '1',
  'cbc',
  undefined,
  '1.1'
)

export const DigitalAgreementFieldMetaPreviousVersionID = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.PreviousVersionID,
  'PreviousVersionID',
  'Previous Version Identifier',
  'Identifier',
  'Identifies the previous version of this digital agreement.',
  '0..1',
  'cbc',
  undefined,
  '1'
)

export const DigitalAgreementFieldMetaRequiredResponseMessageLevelCode = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.RequiredResponseMessageLevelCode,
  'RequiredResponseMessageLevelCode',
  'Required Response Message Level Code',
  'Code',
  'A code signifying the minimum response message level the parties are required to provide (e.g. EESPA response message level).',
  '0..1',
  'cbc',
  undefined,
  'RM2'
)

export const DigitalAgreementFieldMetaSignature = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaGovernorParty = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.GovernorParty,
  'GovernorParty',
  'Governor Party',
  'Party',
  'The party governing the agreement (e.g. a multi-lateral digital agreement).',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaParticipantParty = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.ParticipantParty,
  'ParticipantParty',
  'Participant Party',
  'ParticipantParty',
  'The business parties agreeing on a set of digital processes, terms and conditions to ensure interoperability.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaAgreementCountry = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.AgreementCountry,
  'AgreementCountry',
  'Agreement Country',
  'Country',
  'The country to which this digital agreement applies.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaRequiredCertificationDocumentReference = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.RequiredCertificationDocumentReference,
  'RequiredCertificationDocumentReference',
  'Required Certification Document Reference',
  'DocumentReference',
  'A reference to a certification document required by this digital agreement.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaDigitalAgreementTerms = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.DigitalAgreementTerms,
  'DigitalAgreementTerms',
  'Digital Agreement Terms',
  'DigitalAgreementTerms',
  'A reference to digital agreement terms and conditions.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DigitalAgreementFieldMetaDigitalProcess = new FieldMeta<DigitalAgreementField>(
  DigitalAgreementField.DigitalProcess,
  'DigitalProcess',
  'Digital Process',
  'DigitalProcess',
  'The digital processes in scope of this digital agreement.',
  '1..n',
  'cac',
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
