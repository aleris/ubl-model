import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ItemManagementProfileType } from '../cac/ItemManagementProfileMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum TradeItemLocationProfileField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  Note = 'Note',
  ProfileStatusCode = 'ProfileStatusCode',
  Period = 'Period',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ItemManagementProfile = 'ItemManagementProfile'
}

export const TradeItemLocationProfileFieldMetaUBLExtensions = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaUBLVersionID = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const TradeItemLocationProfileFieldMetaCustomizationID = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const TradeItemLocationProfileFieldMetaProfileID = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const TradeItemLocationProfileFieldMetaProfileExecutionID = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const TradeItemLocationProfileFieldMetaID = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaCopyIndicator = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaUUID = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaIssueDate = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaIssueTime = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaNote = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaProfileStatusCode = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.ProfileStatusCode,
  'ProfileStatusCode',
  'Profile Status Code',
  CodeType.name,
  'A code signifying the status of this Trade Item Location Profile.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaPeriod = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'An association to Period.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaDocumentReference = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaSignature = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaSenderParty = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The sender.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaReceiverParty = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The receiver.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaBuyerCustomerParty = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaSellerSupplierParty = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const TradeItemLocationProfileFieldMetaItemManagementProfile = new FieldMeta<TradeItemLocationProfileField>(
  TradeItemLocationProfileField.ItemManagementProfile,
  'ItemManagementProfile',
  'Item Management Profile',
  ItemManagementProfileType.name,
  'A profile specifying replenishment policies for a particular trade item.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class TradeItemLocationProfileFieldMeta {
  public static readonly UBLExtensions = TradeItemLocationProfileFieldMetaUBLExtensions
  public static readonly UBLVersionID = TradeItemLocationProfileFieldMetaUBLVersionID
  public static readonly CustomizationID = TradeItemLocationProfileFieldMetaCustomizationID
  public static readonly ProfileID = TradeItemLocationProfileFieldMetaProfileID
  public static readonly ProfileExecutionID = TradeItemLocationProfileFieldMetaProfileExecutionID
  public static readonly ID = TradeItemLocationProfileFieldMetaID
  public static readonly CopyIndicator = TradeItemLocationProfileFieldMetaCopyIndicator
  public static readonly UUID = TradeItemLocationProfileFieldMetaUUID
  public static readonly IssueDate = TradeItemLocationProfileFieldMetaIssueDate
  public static readonly IssueTime = TradeItemLocationProfileFieldMetaIssueTime
  public static readonly Note = TradeItemLocationProfileFieldMetaNote
  public static readonly ProfileStatusCode = TradeItemLocationProfileFieldMetaProfileStatusCode
  public static readonly Period = TradeItemLocationProfileFieldMetaPeriod
  public static readonly DocumentReference = TradeItemLocationProfileFieldMetaDocumentReference
  public static readonly Signature = TradeItemLocationProfileFieldMetaSignature
  public static readonly SenderParty = TradeItemLocationProfileFieldMetaSenderParty
  public static readonly ReceiverParty = TradeItemLocationProfileFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = TradeItemLocationProfileFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = TradeItemLocationProfileFieldMetaSellerSupplierParty
  public static readonly ItemManagementProfile = TradeItemLocationProfileFieldMetaItemManagementProfile
}

export const TradeItemLocationProfileFieldMap = new Map([
  [TradeItemLocationProfileField.UBLExtensions, TradeItemLocationProfileFieldMetaUBLExtensions],
  [TradeItemLocationProfileField.UBLVersionID, TradeItemLocationProfileFieldMetaUBLVersionID],
  [TradeItemLocationProfileField.CustomizationID, TradeItemLocationProfileFieldMetaCustomizationID],
  [TradeItemLocationProfileField.ProfileID, TradeItemLocationProfileFieldMetaProfileID],
  [TradeItemLocationProfileField.ProfileExecutionID, TradeItemLocationProfileFieldMetaProfileExecutionID],
  [TradeItemLocationProfileField.ID, TradeItemLocationProfileFieldMetaID],
  [TradeItemLocationProfileField.CopyIndicator, TradeItemLocationProfileFieldMetaCopyIndicator],
  [TradeItemLocationProfileField.UUID, TradeItemLocationProfileFieldMetaUUID],
  [TradeItemLocationProfileField.IssueDate, TradeItemLocationProfileFieldMetaIssueDate],
  [TradeItemLocationProfileField.IssueTime, TradeItemLocationProfileFieldMetaIssueTime],
  [TradeItemLocationProfileField.Note, TradeItemLocationProfileFieldMetaNote],
  [TradeItemLocationProfileField.ProfileStatusCode, TradeItemLocationProfileFieldMetaProfileStatusCode],
  [TradeItemLocationProfileField.Period, TradeItemLocationProfileFieldMetaPeriod],
  [TradeItemLocationProfileField.DocumentReference, TradeItemLocationProfileFieldMetaDocumentReference],
  [TradeItemLocationProfileField.Signature, TradeItemLocationProfileFieldMetaSignature],
  [TradeItemLocationProfileField.SenderParty, TradeItemLocationProfileFieldMetaSenderParty],
  [TradeItemLocationProfileField.ReceiverParty, TradeItemLocationProfileFieldMetaReceiverParty],
  [TradeItemLocationProfileField.BuyerCustomerParty, TradeItemLocationProfileFieldMetaBuyerCustomerParty],
  [TradeItemLocationProfileField.SellerSupplierParty, TradeItemLocationProfileFieldMetaSellerSupplierParty],
  [TradeItemLocationProfileField.ItemManagementProfile, TradeItemLocationProfileFieldMetaItemManagementProfile]
])

export const TradeItemLocationProfileType: Type<TradeItemLocationProfileField> = {
  name: 'TradeItemLocationProfile',
  label: 'Trade Item Location Profile',
  module: TypeModule.doc,
  definition: 'A document specifying trade item attributes relating to replenishment policies.',
  fields: TradeItemLocationProfileFieldMap,
}
