import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { ItemInformationRequestLineType } from '../cac/ItemInformationRequestLineMeta'
import { PartyType } from '../cac/PartyMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ItemInformationRequestField {
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
  Period = 'Period',
  DocumentReference = 'DocumentReference',
  Signature = 'Signature',
  SenderParty = 'SenderParty',
  ReceiverParty = 'ReceiverParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  ItemInformationRequestLine = 'ItemInformationRequestLine'
}

export const ItemInformationRequestFieldMetaUBLExtensions = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaUBLVersionID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ItemInformationRequestFieldMetaCustomizationID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ItemInformationRequestFieldMetaProfileID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ItemInformationRequestFieldMetaProfileExecutionID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const ItemInformationRequestFieldMetaID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Item Information Request Number',
  undefined
)

export const ItemInformationRequestFieldMetaCopyIndicator = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaUUID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaIssueDate = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Item Information Request Date',
  undefined
)

export const ItemInformationRequestFieldMetaIssueTime = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaNote = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaPeriod = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.Period,
  'Period',
  'Period',
  PeriodType.name,
  'The period of time to which the Item Information Request applies.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaDocumentReference = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  DocumentReferenceType.name,
  'A reference to another document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaSignature = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaSenderParty = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.SenderParty,
  'SenderParty',
  'Sender Party',
  PartyType.name,
  'The buyer.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaReceiverParty = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  PartyType.name,
  'The seller.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaBuyerCustomerParty = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaSellerSupplierParty = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaItemInformationRequestLine = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ItemInformationRequestLine,
  'ItemInformationRequestLine',
  'Item Information Request Line',
  ItemInformationRequestLineType.name,
  'A line requesting information regarding an item of sale.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export class ItemInformationRequestFieldMeta {
  public static readonly UBLExtensions = ItemInformationRequestFieldMetaUBLExtensions
  public static readonly UBLVersionID = ItemInformationRequestFieldMetaUBLVersionID
  public static readonly CustomizationID = ItemInformationRequestFieldMetaCustomizationID
  public static readonly ProfileID = ItemInformationRequestFieldMetaProfileID
  public static readonly ProfileExecutionID = ItemInformationRequestFieldMetaProfileExecutionID
  public static readonly ID = ItemInformationRequestFieldMetaID
  public static readonly CopyIndicator = ItemInformationRequestFieldMetaCopyIndicator
  public static readonly UUID = ItemInformationRequestFieldMetaUUID
  public static readonly IssueDate = ItemInformationRequestFieldMetaIssueDate
  public static readonly IssueTime = ItemInformationRequestFieldMetaIssueTime
  public static readonly Note = ItemInformationRequestFieldMetaNote
  public static readonly Period = ItemInformationRequestFieldMetaPeriod
  public static readonly DocumentReference = ItemInformationRequestFieldMetaDocumentReference
  public static readonly Signature = ItemInformationRequestFieldMetaSignature
  public static readonly SenderParty = ItemInformationRequestFieldMetaSenderParty
  public static readonly ReceiverParty = ItemInformationRequestFieldMetaReceiverParty
  public static readonly BuyerCustomerParty = ItemInformationRequestFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ItemInformationRequestFieldMetaSellerSupplierParty
  public static readonly ItemInformationRequestLine = ItemInformationRequestFieldMetaItemInformationRequestLine
}

export const ItemInformationRequestFieldMap = new Map([
  [ItemInformationRequestField.UBLExtensions, ItemInformationRequestFieldMetaUBLExtensions],
  [ItemInformationRequestField.UBLVersionID, ItemInformationRequestFieldMetaUBLVersionID],
  [ItemInformationRequestField.CustomizationID, ItemInformationRequestFieldMetaCustomizationID],
  [ItemInformationRequestField.ProfileID, ItemInformationRequestFieldMetaProfileID],
  [ItemInformationRequestField.ProfileExecutionID, ItemInformationRequestFieldMetaProfileExecutionID],
  [ItemInformationRequestField.ID, ItemInformationRequestFieldMetaID],
  [ItemInformationRequestField.CopyIndicator, ItemInformationRequestFieldMetaCopyIndicator],
  [ItemInformationRequestField.UUID, ItemInformationRequestFieldMetaUUID],
  [ItemInformationRequestField.IssueDate, ItemInformationRequestFieldMetaIssueDate],
  [ItemInformationRequestField.IssueTime, ItemInformationRequestFieldMetaIssueTime],
  [ItemInformationRequestField.Note, ItemInformationRequestFieldMetaNote],
  [ItemInformationRequestField.Period, ItemInformationRequestFieldMetaPeriod],
  [ItemInformationRequestField.DocumentReference, ItemInformationRequestFieldMetaDocumentReference],
  [ItemInformationRequestField.Signature, ItemInformationRequestFieldMetaSignature],
  [ItemInformationRequestField.SenderParty, ItemInformationRequestFieldMetaSenderParty],
  [ItemInformationRequestField.ReceiverParty, ItemInformationRequestFieldMetaReceiverParty],
  [ItemInformationRequestField.BuyerCustomerParty, ItemInformationRequestFieldMetaBuyerCustomerParty],
  [ItemInformationRequestField.SellerSupplierParty, ItemInformationRequestFieldMetaSellerSupplierParty],
  [ItemInformationRequestField.ItemInformationRequestLine, ItemInformationRequestFieldMetaItemInformationRequestLine]
])

export const ItemInformationRequestType: Type<ItemInformationRequestField> = {
  name: 'ItemInformationRequest',
  label: 'Item Information Request',
  module: TypeModule.doc,
  definition: 'A document used to request product activity, forecast, or performance data.',
  fields: ItemInformationRequestFieldMap,
}
