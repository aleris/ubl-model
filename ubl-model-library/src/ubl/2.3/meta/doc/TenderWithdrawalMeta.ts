import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContractingPartyType } from '../cac/ContractingPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TenderWithdrawalField {
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
  WithdrawOfferIndicator = 'WithdrawOfferIndicator',
  TenderDocumentReference = 'TenderDocumentReference',
  TenderNotificationDocumentReference = 'TenderNotificationDocumentReference',
  Signature = 'Signature',
  ContractingParty = 'ContractingParty',
  TendererParty = 'TendererParty'
}

export const TenderWithdrawalFieldMetaUBLExtensions = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaUBLVersionID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TenderWithdrawalFieldMetaCustomizationID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TenderWithdrawalFieldMetaProfileID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TenderWithdrawalFieldMetaProfileExecutionID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TenderWithdrawalFieldMetaID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaCopyIndicator = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaUUID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaContractFolderID = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaIssueDate = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaIssueTime = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaContractName = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaNote = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaWithdrawOfferIndicator = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.WithdrawOfferIndicator,
  'WithdrawOfferIndicator',
  'Withdraw Offer',
  IndicatorType.name,
  'Indicates whether the referred tender has to be withdrawn (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaTenderDocumentReference = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.TenderDocumentReference,
  'TenderDocumentReference',
  'Tender Document Reference',
  DocumentReferenceType.name,
  'A reference to a received Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaTenderNotificationDocumentReference = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.TenderNotificationDocumentReference,
  'TenderNotificationDocumentReference',
  'Tender Notification Document Reference',
  DocumentReferenceType.name,
  'A reference to the Tender Receipt Notification.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaSignature = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaContractingParty = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.ContractingParty,
  'ContractingParty',
  'Contracting Party',
  ContractingPartyType.name,
  'The Contracting Party or parties in case of joint procurement.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderWithdrawalFieldMetaTendererParty = new FieldMeta<TenderWithdrawalField>(
  TenderWithdrawalField.TendererParty,
  'TendererParty',
  'Tenderer Party',
  PartyType.name,
  'The economic operator or the main tenderer in case of a consortium that is withdrawing the tender.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderWithdrawalFieldMeta {
  public static readonly UBLExtensions = TenderWithdrawalFieldMetaUBLExtensions
  public static readonly UBLVersionID = TenderWithdrawalFieldMetaUBLVersionID
  public static readonly CustomizationID = TenderWithdrawalFieldMetaCustomizationID
  public static readonly ProfileID = TenderWithdrawalFieldMetaProfileID
  public static readonly ProfileExecutionID = TenderWithdrawalFieldMetaProfileExecutionID
  public static readonly ID = TenderWithdrawalFieldMetaID
  public static readonly CopyIndicator = TenderWithdrawalFieldMetaCopyIndicator
  public static readonly UUID = TenderWithdrawalFieldMetaUUID
  public static readonly ContractFolderID = TenderWithdrawalFieldMetaContractFolderID
  public static readonly IssueDate = TenderWithdrawalFieldMetaIssueDate
  public static readonly IssueTime = TenderWithdrawalFieldMetaIssueTime
  public static readonly ContractName = TenderWithdrawalFieldMetaContractName
  public static readonly Note = TenderWithdrawalFieldMetaNote
  public static readonly WithdrawOfferIndicator = TenderWithdrawalFieldMetaWithdrawOfferIndicator
  public static readonly TenderDocumentReference = TenderWithdrawalFieldMetaTenderDocumentReference
  public static readonly TenderNotificationDocumentReference = TenderWithdrawalFieldMetaTenderNotificationDocumentReference
  public static readonly Signature = TenderWithdrawalFieldMetaSignature
  public static readonly ContractingParty = TenderWithdrawalFieldMetaContractingParty
  public static readonly TendererParty = TenderWithdrawalFieldMetaTendererParty
}

export const TenderWithdrawalFieldMap = new Map([
  [TenderWithdrawalField.UBLExtensions, TenderWithdrawalFieldMetaUBLExtensions],
  [TenderWithdrawalField.UBLVersionID, TenderWithdrawalFieldMetaUBLVersionID],
  [TenderWithdrawalField.CustomizationID, TenderWithdrawalFieldMetaCustomizationID],
  [TenderWithdrawalField.ProfileID, TenderWithdrawalFieldMetaProfileID],
  [TenderWithdrawalField.ProfileExecutionID, TenderWithdrawalFieldMetaProfileExecutionID],
  [TenderWithdrawalField.ID, TenderWithdrawalFieldMetaID],
  [TenderWithdrawalField.CopyIndicator, TenderWithdrawalFieldMetaCopyIndicator],
  [TenderWithdrawalField.UUID, TenderWithdrawalFieldMetaUUID],
  [TenderWithdrawalField.ContractFolderID, TenderWithdrawalFieldMetaContractFolderID],
  [TenderWithdrawalField.IssueDate, TenderWithdrawalFieldMetaIssueDate],
  [TenderWithdrawalField.IssueTime, TenderWithdrawalFieldMetaIssueTime],
  [TenderWithdrawalField.ContractName, TenderWithdrawalFieldMetaContractName],
  [TenderWithdrawalField.Note, TenderWithdrawalFieldMetaNote],
  [TenderWithdrawalField.WithdrawOfferIndicator, TenderWithdrawalFieldMetaWithdrawOfferIndicator],
  [TenderWithdrawalField.TenderDocumentReference, TenderWithdrawalFieldMetaTenderDocumentReference],
  [TenderWithdrawalField.TenderNotificationDocumentReference, TenderWithdrawalFieldMetaTenderNotificationDocumentReference],
  [TenderWithdrawalField.Signature, TenderWithdrawalFieldMetaSignature],
  [TenderWithdrawalField.ContractingParty, TenderWithdrawalFieldMetaContractingParty],
  [TenderWithdrawalField.TendererParty, TenderWithdrawalFieldMetaTendererParty]
])

export const TenderWithdrawalType: Type<TenderWithdrawalField> = {
  name: 'TenderWithdrawal',
  label: 'Tender Withdrawal',
  module: TypeModule.doc,
  definition: 'A document sent by an Economic Operator to a Contracting Party with the intention of withdrawing a previously sent Tender document.',
  fields: TenderWithdrawalFieldMap,
}
