import { FieldMeta } from '../FieldMeta'

export enum ReceiptAdviceField {
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
  DocumentStatusCode = 'DocumentStatusCode',
  ReceiptAdviceTypeCode = 'ReceiptAdviceTypeCode',
  Note = 'Note',
  LineCountNumeric = 'LineCountNumeric',
  OrderReference = 'OrderReference',
  DespatchDocumentReference = 'DespatchDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  DeliveryCustomerParty = 'DeliveryCustomerParty',
  DespatchSupplierParty = 'DespatchSupplierParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  Shipment = 'Shipment',
  ReceiptLine = 'ReceiptLine'
}

export const ReceiptAdviceFieldMetaUBLExtensions = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaUBLVersionID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const ReceiptAdviceFieldMetaCustomizationID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const ReceiptAdviceFieldMetaProfileID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the subset of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const ReceiptAdviceFieldMetaProfileExecutionID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaCopyIndicator = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaUUID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaIssueDate = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaIssueTime = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaDocumentStatusCode = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  'Code',
  'A code signifying the status of the Receipt Advice with respect to its original state. This code may be used if the document precedes the event and is subsequently found to be incorrect and in need of cancellation or revision.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaReceiptAdviceTypeCode = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ReceiptAdviceTypeCode,
  'ReceiptAdviceTypeCode',
  'Receipt Advice Type Code',
  'Code',
  'A code signifying the type of the Receipt Advice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaNote = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaLineCountNumeric = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Receipt Lines in this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaOrderReference = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to an Order associated with this Receipt Advice.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaDespatchDocumentReference = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Despatch Document Reference',
  'DocumentReference',
  'A reference to a Despatch Advice associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaAdditionalDocumentReference = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaSignature = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaDeliveryCustomerParty = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.DeliveryCustomerParty,
  'DeliveryCustomerParty',
  'Delivery Customer Party',
  'CustomerParty',
  'The customer party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaDespatchSupplierParty = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.DespatchSupplierParty,
  'DespatchSupplierParty',
  'Despatch Supplier Party',
  'SupplierParty',
  'The supplier party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaBuyerCustomerParty = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaSellerSupplierParty = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaShipment = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'Details about the Shipment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaReceiptLine = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ReceiptLine,
  'ReceiptLine',
  'Receipt Line',
  'ReceiptLine',
  'A line detailing a kind of item received.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class ReceiptAdviceFieldMeta {
  public static readonly UBLExtensions = ReceiptAdviceFieldMetaUBLExtensions
  public static readonly UBLVersionID = ReceiptAdviceFieldMetaUBLVersionID
  public static readonly CustomizationID = ReceiptAdviceFieldMetaCustomizationID
  public static readonly ProfileID = ReceiptAdviceFieldMetaProfileID
  public static readonly ProfileExecutionID = ReceiptAdviceFieldMetaProfileExecutionID
  public static readonly ID = ReceiptAdviceFieldMetaID
  public static readonly CopyIndicator = ReceiptAdviceFieldMetaCopyIndicator
  public static readonly UUID = ReceiptAdviceFieldMetaUUID
  public static readonly IssueDate = ReceiptAdviceFieldMetaIssueDate
  public static readonly IssueTime = ReceiptAdviceFieldMetaIssueTime
  public static readonly DocumentStatusCode = ReceiptAdviceFieldMetaDocumentStatusCode
  public static readonly ReceiptAdviceTypeCode = ReceiptAdviceFieldMetaReceiptAdviceTypeCode
  public static readonly Note = ReceiptAdviceFieldMetaNote
  public static readonly LineCountNumeric = ReceiptAdviceFieldMetaLineCountNumeric
  public static readonly OrderReference = ReceiptAdviceFieldMetaOrderReference
  public static readonly DespatchDocumentReference = ReceiptAdviceFieldMetaDespatchDocumentReference
  public static readonly AdditionalDocumentReference = ReceiptAdviceFieldMetaAdditionalDocumentReference
  public static readonly Signature = ReceiptAdviceFieldMetaSignature
  public static readonly DeliveryCustomerParty = ReceiptAdviceFieldMetaDeliveryCustomerParty
  public static readonly DespatchSupplierParty = ReceiptAdviceFieldMetaDespatchSupplierParty
  public static readonly BuyerCustomerParty = ReceiptAdviceFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = ReceiptAdviceFieldMetaSellerSupplierParty
  public static readonly Shipment = ReceiptAdviceFieldMetaShipment
  public static readonly ReceiptLine = ReceiptAdviceFieldMetaReceiptLine
}

export const ReceiptAdviceFieldMap = new Map([
  [ReceiptAdviceField.UBLExtensions, ReceiptAdviceFieldMetaUBLExtensions],
  [ReceiptAdviceField.UBLVersionID, ReceiptAdviceFieldMetaUBLVersionID],
  [ReceiptAdviceField.CustomizationID, ReceiptAdviceFieldMetaCustomizationID],
  [ReceiptAdviceField.ProfileID, ReceiptAdviceFieldMetaProfileID],
  [ReceiptAdviceField.ProfileExecutionID, ReceiptAdviceFieldMetaProfileExecutionID],
  [ReceiptAdviceField.ID, ReceiptAdviceFieldMetaID],
  [ReceiptAdviceField.CopyIndicator, ReceiptAdviceFieldMetaCopyIndicator],
  [ReceiptAdviceField.UUID, ReceiptAdviceFieldMetaUUID],
  [ReceiptAdviceField.IssueDate, ReceiptAdviceFieldMetaIssueDate],
  [ReceiptAdviceField.IssueTime, ReceiptAdviceFieldMetaIssueTime],
  [ReceiptAdviceField.DocumentStatusCode, ReceiptAdviceFieldMetaDocumentStatusCode],
  [ReceiptAdviceField.ReceiptAdviceTypeCode, ReceiptAdviceFieldMetaReceiptAdviceTypeCode],
  [ReceiptAdviceField.Note, ReceiptAdviceFieldMetaNote],
  [ReceiptAdviceField.LineCountNumeric, ReceiptAdviceFieldMetaLineCountNumeric],
  [ReceiptAdviceField.OrderReference, ReceiptAdviceFieldMetaOrderReference],
  [ReceiptAdviceField.DespatchDocumentReference, ReceiptAdviceFieldMetaDespatchDocumentReference],
  [ReceiptAdviceField.AdditionalDocumentReference, ReceiptAdviceFieldMetaAdditionalDocumentReference],
  [ReceiptAdviceField.Signature, ReceiptAdviceFieldMetaSignature],
  [ReceiptAdviceField.DeliveryCustomerParty, ReceiptAdviceFieldMetaDeliveryCustomerParty],
  [ReceiptAdviceField.DespatchSupplierParty, ReceiptAdviceFieldMetaDespatchSupplierParty],
  [ReceiptAdviceField.BuyerCustomerParty, ReceiptAdviceFieldMetaBuyerCustomerParty],
  [ReceiptAdviceField.SellerSupplierParty, ReceiptAdviceFieldMetaSellerSupplierParty],
  [ReceiptAdviceField.Shipment, ReceiptAdviceFieldMetaShipment],
  [ReceiptAdviceField.ReceiptLine, ReceiptAdviceFieldMetaReceiptLine]
])
