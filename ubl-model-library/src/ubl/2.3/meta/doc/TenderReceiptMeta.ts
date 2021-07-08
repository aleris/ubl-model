import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { PartyType } from '../cac/PartyMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TenderReceiptField {
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
  RegisteredDate = 'RegisteredDate',
  RegisteredTime = 'RegisteredTime',
  TenderDocumentReference = 'TenderDocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty'
}

export const TenderReceiptFieldMetaUBLExtensions = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaUBLVersionID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TenderReceiptFieldMetaCustomizationID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TenderReceiptFieldMetaProfileID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TenderReceiptFieldMetaProfileExecutionID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TenderReceiptFieldMetaID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaCopyIndicator = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaUUID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaContractFolderID = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ContractFolderID,
  'ContractFolderID',
  'Contract Folder Identifier',
  IdentifierType.name,
  'An identifier, assigned by the sender, for the process file (i.e., record) to which this document belongs.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaIssueDate = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaIssueTime = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaContractName = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ContractName,
  'ContractName',
  'Contract Name',
  TextType.name,
  'Short title of a contract associated with this Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaNote = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaRegisteredDate = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.RegisteredDate,
  'RegisteredDate',
  'Registered Date',
  DateType.name,
  'The date, assigned by the sender, on which the Tender Receipt was created.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaRegisteredTime = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.RegisteredTime,
  'RegisteredTime',
  'Registered Time',
  TimeType.name,
  'The time, assigned by the sender, at which the Tender Receipt was created.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaTenderDocumentReference = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.TenderDocumentReference,
  'TenderDocumentReference',
  'Tender Document Reference',
  DocumentReferenceType.name,
  'A reference to a received Tender.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaSignature = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaSenderParty = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The party sending this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TenderReceiptFieldMetaReceiverParty = new FieldMeta<TenderReceiptField>(
  TenderReceiptField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The party receiving this document.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export class TenderReceiptFieldMeta {
  public static readonly UBLExtensions = TenderReceiptFieldMetaUBLExtensions
  public static readonly UBLVersionID = TenderReceiptFieldMetaUBLVersionID
  public static readonly CustomizationID = TenderReceiptFieldMetaCustomizationID
  public static readonly ProfileID = TenderReceiptFieldMetaProfileID
  public static readonly ProfileExecutionID = TenderReceiptFieldMetaProfileExecutionID
  public static readonly ID = TenderReceiptFieldMetaID
  public static readonly CopyIndicator = TenderReceiptFieldMetaCopyIndicator
  public static readonly UUID = TenderReceiptFieldMetaUUID
  public static readonly ContractFolderID = TenderReceiptFieldMetaContractFolderID
  public static readonly IssueDate = TenderReceiptFieldMetaIssueDate
  public static readonly IssueTime = TenderReceiptFieldMetaIssueTime
  public static readonly ContractName = TenderReceiptFieldMetaContractName
  public static readonly Note = TenderReceiptFieldMetaNote
  public static readonly RegisteredDate = TenderReceiptFieldMetaRegisteredDate
  public static readonly RegisteredTime = TenderReceiptFieldMetaRegisteredTime
  public static readonly TenderDocumentReference = TenderReceiptFieldMetaTenderDocumentReference
  public static readonly Signature = TenderReceiptFieldMetaSignature
  public static readonly SenderParty = TenderReceiptFieldMetaSenderParty
  public static readonly ReceiverParty = TenderReceiptFieldMetaReceiverParty
}

export const TenderReceiptFieldMap = new Map([
  [TenderReceiptField.UBLExtensions, TenderReceiptFieldMetaUBLExtensions],
  [TenderReceiptField.UBLVersionID, TenderReceiptFieldMetaUBLVersionID],
  [TenderReceiptField.CustomizationID, TenderReceiptFieldMetaCustomizationID],
  [TenderReceiptField.ProfileID, TenderReceiptFieldMetaProfileID],
  [TenderReceiptField.ProfileExecutionID, TenderReceiptFieldMetaProfileExecutionID],
  [TenderReceiptField.ID, TenderReceiptFieldMetaID],
  [TenderReceiptField.CopyIndicator, TenderReceiptFieldMetaCopyIndicator],
  [TenderReceiptField.UUID, TenderReceiptFieldMetaUUID],
  [TenderReceiptField.ContractFolderID, TenderReceiptFieldMetaContractFolderID],
  [TenderReceiptField.IssueDate, TenderReceiptFieldMetaIssueDate],
  [TenderReceiptField.IssueTime, TenderReceiptFieldMetaIssueTime],
  [TenderReceiptField.ContractName, TenderReceiptFieldMetaContractName],
  [TenderReceiptField.Note, TenderReceiptFieldMetaNote],
  [TenderReceiptField.RegisteredDate, TenderReceiptFieldMetaRegisteredDate],
  [TenderReceiptField.RegisteredTime, TenderReceiptFieldMetaRegisteredTime],
  [TenderReceiptField.TenderDocumentReference, TenderReceiptFieldMetaTenderDocumentReference],
  [TenderReceiptField.Signature, TenderReceiptFieldMetaSignature],
  [TenderReceiptField.SenderParty, TenderReceiptFieldMetaSenderParty],
  [TenderReceiptField.ReceiverParty, TenderReceiptFieldMetaReceiverParty]
])

export const TenderReceiptType: Type<TenderReceiptField> = {
  name: 'TenderReceipt',
  label: 'Tender Receipt',
  module: TypeModule.doc,
  definition: 'A document sent by a contracting party to an economic operator acknowledging receipt of a Tender.',
  fields: TenderReceiptFieldMap,
}
