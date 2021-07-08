import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { FinancialGuaranteeType } from '../cac/FinancialGuaranteeMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TenderResultType } from '../cac/TenderResultMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum AwardedNotificationField {
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
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  MinutesDocumentReference = 'MinutesDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  TenderResult = 'TenderResult',
  FinalFinancialGuarantee = 'FinalFinancialGuarantee',
  Signature = 'Signature'
}

export const AwardedNotificationFieldMetaUBLExtensions = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaUBLVersionID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const AwardedNotificationFieldMetaCustomizationID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const AwardedNotificationFieldMetaProfileID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const AwardedNotificationFieldMetaProfileExecutionID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const AwardedNotificationFieldMetaID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaCopyIndicator = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaUUID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaContractFolderID = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaIssueDate = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaIssueTime = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaContractName = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'The name, expressed as text, of this procurement project.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaNote = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaSenderParty = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaReceiverParty = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaMinutesDocumentReference = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.MinutesDocumentReference,
  'MinutesDocumentReference',
  'Minutes Document Reference',
  DocumentReferenceType.name,
  'A reference to a set of minutes associated with this award.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaAdditionalDocumentReference = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaTenderResult = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.TenderResult,
  'TenderResult',
  'Tender Result',
  TenderResultType.name,
  'The result of the tendering process reported in this notification.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaFinalFinancialGuarantee = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.FinalFinancialGuarantee,
  'FinalFinancialGuarantee',
  'Final Financial Guarantee',
  FinancialGuaranteeType.name,
  'A bond guarantee by the submitter of a tender or bid, required of the tender winner.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const AwardedNotificationFieldMetaSignature = new FieldMeta<AwardedNotificationField>(
  AwardedNotificationField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class AwardedNotificationFieldMeta {
  public static readonly UBLExtensions = AwardedNotificationFieldMetaUBLExtensions
  public static readonly UBLVersionID = AwardedNotificationFieldMetaUBLVersionID
  public static readonly CustomizationID = AwardedNotificationFieldMetaCustomizationID
  public static readonly ProfileID = AwardedNotificationFieldMetaProfileID
  public static readonly ProfileExecutionID = AwardedNotificationFieldMetaProfileExecutionID
  public static readonly ID = AwardedNotificationFieldMetaID
  public static readonly CopyIndicator = AwardedNotificationFieldMetaCopyIndicator
  public static readonly UUID = AwardedNotificationFieldMetaUUID
  public static readonly ContractFolderID = AwardedNotificationFieldMetaContractFolderID
  public static readonly IssueDate = AwardedNotificationFieldMetaIssueDate
  public static readonly IssueTime = AwardedNotificationFieldMetaIssueTime
  public static readonly ContractName = AwardedNotificationFieldMetaContractName
  public static readonly Note = AwardedNotificationFieldMetaNote
  public static readonly SenderParty = AwardedNotificationFieldMetaSenderParty
  public static readonly ReceiverParty = AwardedNotificationFieldMetaReceiverParty
  public static readonly MinutesDocumentReference = AwardedNotificationFieldMetaMinutesDocumentReference
  public static readonly AdditionalDocumentReference = AwardedNotificationFieldMetaAdditionalDocumentReference
  public static readonly TenderResult = AwardedNotificationFieldMetaTenderResult
  public static readonly FinalFinancialGuarantee = AwardedNotificationFieldMetaFinalFinancialGuarantee
  public static readonly Signature = AwardedNotificationFieldMetaSignature
}

export const AwardedNotificationFieldMap = new Map([
  [AwardedNotificationField.UBLExtensions, AwardedNotificationFieldMetaUBLExtensions],
  [AwardedNotificationField.UBLVersionID, AwardedNotificationFieldMetaUBLVersionID],
  [AwardedNotificationField.CustomizationID, AwardedNotificationFieldMetaCustomizationID],
  [AwardedNotificationField.ProfileID, AwardedNotificationFieldMetaProfileID],
  [AwardedNotificationField.ProfileExecutionID, AwardedNotificationFieldMetaProfileExecutionID],
  [AwardedNotificationField.ID, AwardedNotificationFieldMetaID],
  [AwardedNotificationField.CopyIndicator, AwardedNotificationFieldMetaCopyIndicator],
  [AwardedNotificationField.UUID, AwardedNotificationFieldMetaUUID],
  [AwardedNotificationField.ContractFolderID, AwardedNotificationFieldMetaContractFolderID],
  [AwardedNotificationField.IssueDate, AwardedNotificationFieldMetaIssueDate],
  [AwardedNotificationField.IssueTime, AwardedNotificationFieldMetaIssueTime],
  [AwardedNotificationField.ContractName, AwardedNotificationFieldMetaContractName],
  [AwardedNotificationField.Note, AwardedNotificationFieldMetaNote],
  [AwardedNotificationField.SenderParty, AwardedNotificationFieldMetaSenderParty],
  [AwardedNotificationField.ReceiverParty, AwardedNotificationFieldMetaReceiverParty],
  [AwardedNotificationField.MinutesDocumentReference, AwardedNotificationFieldMetaMinutesDocumentReference],
  [AwardedNotificationField.AdditionalDocumentReference, AwardedNotificationFieldMetaAdditionalDocumentReference],
  [AwardedNotificationField.TenderResult, AwardedNotificationFieldMetaTenderResult],
  [AwardedNotificationField.FinalFinancialGuarantee, AwardedNotificationFieldMetaFinalFinancialGuarantee],
  [AwardedNotificationField.Signature, AwardedNotificationFieldMetaSignature]
])

export const AwardedNotificationType: Type<AwardedNotificationField> = {
  name: 'AwardedNotification',
  label: 'Awarded Notification',
  module: TypeModule.doc,
  definition: 'The document used to communicate a contract award to the winner.',
  fields: AwardedNotificationFieldMap,
}
