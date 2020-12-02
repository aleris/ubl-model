import { FieldMeta } from '../FieldMeta'

export enum OrderCancellationField {
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
  CancellationNote = 'CancellationNote',
  OrderReference = 'OrderReference',
  OriginatorDocumentReference = 'OriginatorDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Contract = 'Contract',
  Signature = 'Signature',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty'
}

export const OrderCancellationFieldMetaUBLExtensions = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaUBLVersionID = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const OrderCancellationFieldMetaCustomizationID = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const OrderCancellationFieldMetaProfileID = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const OrderCancellationFieldMetaProfileExecutionID = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaID = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaCopyIndicator = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaUUID = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaIssueDate = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaIssueTime = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaNote = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaCancellationNote = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.CancellationNote,
  'CancellationNote',
  'Cancellation Note',
  'Text',
  'The general reason for cancellation of the referenced order.',
  '1..n',
  'cbc',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaOrderReference = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to the Order being cancelled. While multiple references are allowed, it is considered better practice to cancel only one Order in each Order Cancellation document.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaOriginatorDocumentReference = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Originator Document Reference',
  'DocumentReference',
  'A reference to an originator document associated with this document.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaAdditionalDocumentReference = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaContract = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'A contract associated with the original Order(s).',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaSignature = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaBuyerCustomerParty = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer.',
  '1',
  'cac',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaSellerSupplierParty = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '1',
  'cac',
  undefined,
  undefined
)

export const OrderCancellationFieldMetaOriginatorCustomerParty = new FieldMeta<OrderCancellationField>(
  OrderCancellationField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  'CustomerParty',
  'The originator.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export class OrderCancellationFieldMeta {
  public static readonly UBLExtensions = OrderCancellationFieldMetaUBLExtensions
  public static readonly UBLVersionID = OrderCancellationFieldMetaUBLVersionID
  public static readonly CustomizationID = OrderCancellationFieldMetaCustomizationID
  public static readonly ProfileID = OrderCancellationFieldMetaProfileID
  public static readonly ProfileExecutionID = OrderCancellationFieldMetaProfileExecutionID
  public static readonly ID = OrderCancellationFieldMetaID
  public static readonly CopyIndicator = OrderCancellationFieldMetaCopyIndicator
  public static readonly UUID = OrderCancellationFieldMetaUUID
  public static readonly IssueDate = OrderCancellationFieldMetaIssueDate
  public static readonly IssueTime = OrderCancellationFieldMetaIssueTime
  public static readonly Note = OrderCancellationFieldMetaNote
  public static readonly CancellationNote = OrderCancellationFieldMetaCancellationNote
  public static readonly OrderReference = OrderCancellationFieldMetaOrderReference
  public static readonly OriginatorDocumentReference = OrderCancellationFieldMetaOriginatorDocumentReference
  public static readonly AdditionalDocumentReference = OrderCancellationFieldMetaAdditionalDocumentReference
  public static readonly Contract = OrderCancellationFieldMetaContract
  public static readonly Signature = OrderCancellationFieldMetaSignature
  public static readonly BuyerCustomerParty = OrderCancellationFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = OrderCancellationFieldMetaSellerSupplierParty
  public static readonly OriginatorCustomerParty = OrderCancellationFieldMetaOriginatorCustomerParty
}

export const OrderCancellationFieldMap = new Map([
  [OrderCancellationField.UBLExtensions, OrderCancellationFieldMetaUBLExtensions],
  [OrderCancellationField.UBLVersionID, OrderCancellationFieldMetaUBLVersionID],
  [OrderCancellationField.CustomizationID, OrderCancellationFieldMetaCustomizationID],
  [OrderCancellationField.ProfileID, OrderCancellationFieldMetaProfileID],
  [OrderCancellationField.ProfileExecutionID, OrderCancellationFieldMetaProfileExecutionID],
  [OrderCancellationField.ID, OrderCancellationFieldMetaID],
  [OrderCancellationField.CopyIndicator, OrderCancellationFieldMetaCopyIndicator],
  [OrderCancellationField.UUID, OrderCancellationFieldMetaUUID],
  [OrderCancellationField.IssueDate, OrderCancellationFieldMetaIssueDate],
  [OrderCancellationField.IssueTime, OrderCancellationFieldMetaIssueTime],
  [OrderCancellationField.Note, OrderCancellationFieldMetaNote],
  [OrderCancellationField.CancellationNote, OrderCancellationFieldMetaCancellationNote],
  [OrderCancellationField.OrderReference, OrderCancellationFieldMetaOrderReference],
  [OrderCancellationField.OriginatorDocumentReference, OrderCancellationFieldMetaOriginatorDocumentReference],
  [OrderCancellationField.AdditionalDocumentReference, OrderCancellationFieldMetaAdditionalDocumentReference],
  [OrderCancellationField.Contract, OrderCancellationFieldMetaContract],
  [OrderCancellationField.Signature, OrderCancellationFieldMetaSignature],
  [OrderCancellationField.BuyerCustomerParty, OrderCancellationFieldMetaBuyerCustomerParty],
  [OrderCancellationField.SellerSupplierParty, OrderCancellationFieldMetaSellerSupplierParty],
  [OrderCancellationField.OriginatorCustomerParty, OrderCancellationFieldMetaOriginatorCustomerParty]
])
