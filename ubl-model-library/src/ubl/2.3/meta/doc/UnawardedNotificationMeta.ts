import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AppealTermsType } from '../cac/AppealTermsMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TenderResultType } from '../cac/TenderResultMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum UnawardedNotificationField {
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
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  MinutesDocumentReference = 'MinutesDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  TenderResult = 'TenderResult',
  AppealTerms = 'AppealTerms'
}

export const UnawardedNotificationFieldMetaUBLExtensions = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaUBLVersionID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const UnawardedNotificationFieldMetaCustomizationID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const UnawardedNotificationFieldMetaProfileID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const UnawardedNotificationFieldMetaProfileExecutionID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const UnawardedNotificationFieldMetaID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaCopyIndicator = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaUUID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaContractFolderID = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaIssueDate = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaIssueTime = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaContractName = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'The name, expressed as text, of this procurement project.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaNote = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaSignature = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaSenderParty = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaReceiverParty = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaMinutesDocumentReference = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.MinutesDocumentReference,
  'MinutesDocumentReference',
  'Minutes Document Reference',
  DocumentReferenceType.name,
  'A reference to a set of minutes associated with this award.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaAdditionalDocumentReference = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document. It can be used to include annex documents such as the minutes of the awarding process meetings.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaTenderResult = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.TenderResult,
  'TenderResult',
  'Tender Result',
  TenderResultType.name,
  'An association to the Tender Result being notified',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const UnawardedNotificationFieldMetaAppealTerms = new FieldMeta<UnawardedNotificationField>(
  UnawardedNotificationField.AppealTerms,
  'AppealTerms',
  'Appeal Terms',
  AppealTermsType.name,
  'Terms of appeal for this tendering process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class UnawardedNotificationFieldMeta {
  public static readonly UBLExtensions = UnawardedNotificationFieldMetaUBLExtensions
  public static readonly UBLVersionID = UnawardedNotificationFieldMetaUBLVersionID
  public static readonly CustomizationID = UnawardedNotificationFieldMetaCustomizationID
  public static readonly ProfileID = UnawardedNotificationFieldMetaProfileID
  public static readonly ProfileExecutionID = UnawardedNotificationFieldMetaProfileExecutionID
  public static readonly ID = UnawardedNotificationFieldMetaID
  public static readonly CopyIndicator = UnawardedNotificationFieldMetaCopyIndicator
  public static readonly UUID = UnawardedNotificationFieldMetaUUID
  public static readonly ContractFolderID = UnawardedNotificationFieldMetaContractFolderID
  public static readonly IssueDate = UnawardedNotificationFieldMetaIssueDate
  public static readonly IssueTime = UnawardedNotificationFieldMetaIssueTime
  public static readonly ContractName = UnawardedNotificationFieldMetaContractName
  public static readonly Note = UnawardedNotificationFieldMetaNote
  public static readonly Signature = UnawardedNotificationFieldMetaSignature
  public static readonly SenderParty = UnawardedNotificationFieldMetaSenderParty
  public static readonly ReceiverParty = UnawardedNotificationFieldMetaReceiverParty
  public static readonly MinutesDocumentReference = UnawardedNotificationFieldMetaMinutesDocumentReference
  public static readonly AdditionalDocumentReference = UnawardedNotificationFieldMetaAdditionalDocumentReference
  public static readonly TenderResult = UnawardedNotificationFieldMetaTenderResult
  public static readonly AppealTerms = UnawardedNotificationFieldMetaAppealTerms
}

export const UnawardedNotificationFieldMap = new Map([
  [UnawardedNotificationField.UBLExtensions, UnawardedNotificationFieldMetaUBLExtensions],
  [UnawardedNotificationField.UBLVersionID, UnawardedNotificationFieldMetaUBLVersionID],
  [UnawardedNotificationField.CustomizationID, UnawardedNotificationFieldMetaCustomizationID],
  [UnawardedNotificationField.ProfileID, UnawardedNotificationFieldMetaProfileID],
  [UnawardedNotificationField.ProfileExecutionID, UnawardedNotificationFieldMetaProfileExecutionID],
  [UnawardedNotificationField.ID, UnawardedNotificationFieldMetaID],
  [UnawardedNotificationField.CopyIndicator, UnawardedNotificationFieldMetaCopyIndicator],
  [UnawardedNotificationField.UUID, UnawardedNotificationFieldMetaUUID],
  [UnawardedNotificationField.ContractFolderID, UnawardedNotificationFieldMetaContractFolderID],
  [UnawardedNotificationField.IssueDate, UnawardedNotificationFieldMetaIssueDate],
  [UnawardedNotificationField.IssueTime, UnawardedNotificationFieldMetaIssueTime],
  [UnawardedNotificationField.ContractName, UnawardedNotificationFieldMetaContractName],
  [UnawardedNotificationField.Note, UnawardedNotificationFieldMetaNote],
  [UnawardedNotificationField.Signature, UnawardedNotificationFieldMetaSignature],
  [UnawardedNotificationField.SenderParty, UnawardedNotificationFieldMetaSenderParty],
  [UnawardedNotificationField.ReceiverParty, UnawardedNotificationFieldMetaReceiverParty],
  [UnawardedNotificationField.MinutesDocumentReference, UnawardedNotificationFieldMetaMinutesDocumentReference],
  [UnawardedNotificationField.AdditionalDocumentReference, UnawardedNotificationFieldMetaAdditionalDocumentReference],
  [UnawardedNotificationField.TenderResult, UnawardedNotificationFieldMetaTenderResult],
  [UnawardedNotificationField.AppealTerms, UnawardedNotificationFieldMetaAppealTerms]
])

export const UnawardedNotificationType: Type<UnawardedNotificationField> = {
  name: 'UnawardedNotification',
  label: 'Unawarded Notification',
  module: TypeModule.doc,
  definition: 'A document communicating to a tenderer that the contract has been awarded to different tenderer.',
  fields: UnawardedNotificationFieldMap,
}
