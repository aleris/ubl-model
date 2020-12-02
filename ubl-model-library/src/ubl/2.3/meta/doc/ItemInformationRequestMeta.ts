import { FieldMeta } from '../FieldMeta'

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
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaUBLVersionID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const ItemInformationRequestFieldMetaCustomizationID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const ItemInformationRequestFieldMetaProfileID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const ItemInformationRequestFieldMetaProfileExecutionID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  'BPP-1001'
)

export const ItemInformationRequestFieldMetaID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  'Item Information Request Number',
  undefined
)

export const ItemInformationRequestFieldMetaCopyIndicator = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaUUID = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaIssueDate = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  'Item Information Request Date',
  undefined
)

export const ItemInformationRequestFieldMetaIssueTime = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaNote = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaPeriod = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.Period,
  'Period',
  'Period',
  'Period',
  'The period of time to which the Item Information Request applies.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaDocumentReference = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.DocumentReference,
  'DocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaSignature = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaSenderParty = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.SenderParty,
  'SenderParty',
  'Sender Party',
  'Party',
  'The buyer.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaReceiverParty = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ReceiverParty,
  'ReceiverParty',
  'Receiver Party',
  'Party',
  'The seller.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaBuyerCustomerParty = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaSellerSupplierParty = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ItemInformationRequestFieldMetaItemInformationRequestLine = new FieldMeta<ItemInformationRequestField>(
  ItemInformationRequestField.ItemInformationRequestLine,
  'ItemInformationRequestLine',
  'Item Information Request Line',
  'ItemInformationRequestLine',
  'A line requesting information regarding an item of sale.',
  '1..n',
  'cac',
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
