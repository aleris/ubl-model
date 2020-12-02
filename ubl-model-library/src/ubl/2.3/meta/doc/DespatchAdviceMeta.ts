import { FieldMeta } from '../FieldMeta'

export enum DespatchAdviceField {
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
  DespatchAdviceTypeCode = 'DespatchAdviceTypeCode',
  Note = 'Note',
  LineCountNumeric = 'LineCountNumeric',
  OrderReference = 'OrderReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  DespatchSupplierParty = 'DespatchSupplierParty',
  DeliveryCustomerParty = 'DeliveryCustomerParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  Shipment = 'Shipment',
  DespatchLine = 'DespatchLine'
}

export const DespatchAdviceFieldMetaUBLExtensions = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaUBLVersionID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  'cbc',
  undefined,
  '2.0.5'
)

export const DespatchAdviceFieldMetaCustomizationID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  'cbc',
  undefined,
  'NES'
)

export const DespatchAdviceFieldMetaProfileID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  'cbc',
  undefined,
  'BasicProcurementProcess'
)

export const DespatchAdviceFieldMetaProfileExecutionID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaCopyIndicator = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaUUID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaIssueDate = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaIssueTime = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDocumentStatusCode = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  'Code',
  'A code signifying the status of the Despatch Advice with respect to its original state. This code may be used if the document precedes the event and is subsequently found to be incorrect and in need of cancellation or revision.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDespatchAdviceTypeCode = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DespatchAdviceTypeCode,
  'DespatchAdviceTypeCode',
  'Despatch Advice Type Code',
  'Code',
  'A code signifying the type of the Despatch Advice.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaNote = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaLineCountNumeric = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Despatch Lines in this document.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaOrderReference = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to an Order with which this Despatch Advice is associated.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaAdditionalDocumentReference = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaSignature = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  'cac',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDespatchSupplierParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DespatchSupplierParty,
  'DespatchSupplierParty',
  'Despatch Supplier Party',
  'SupplierParty',
  'The despatch party.',
  '1',
  'cac',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDeliveryCustomerParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DeliveryCustomerParty,
  'DeliveryCustomerParty',
  'Delivery Customer Party',
  'CustomerParty',
  'The delivery recipient.',
  '1',
  'cac',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaBuyerCustomerParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  'CustomerParty',
  'The buyer.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaSellerSupplierParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  'SupplierParty',
  'The seller.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaOriginatorCustomerParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  'CustomerParty',
  'A customer party as originator.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaShipment = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.Shipment,
  'Shipment',
  'Shipment',
  'Shipment',
  'The shipment.',
  '0..1',
  'cac',
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDespatchLine = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DespatchLine,
  'DespatchLine',
  'Despatch Line',
  'DespatchLine',
  'A Despatch Line associated with a kind of item delivered.',
  '1..n',
  'cac',
  undefined,
  undefined
)

export class DespatchAdviceFieldMeta {
  public static readonly UBLExtensions = DespatchAdviceFieldMetaUBLExtensions
  public static readonly UBLVersionID = DespatchAdviceFieldMetaUBLVersionID
  public static readonly CustomizationID = DespatchAdviceFieldMetaCustomizationID
  public static readonly ProfileID = DespatchAdviceFieldMetaProfileID
  public static readonly ProfileExecutionID = DespatchAdviceFieldMetaProfileExecutionID
  public static readonly ID = DespatchAdviceFieldMetaID
  public static readonly CopyIndicator = DespatchAdviceFieldMetaCopyIndicator
  public static readonly UUID = DespatchAdviceFieldMetaUUID
  public static readonly IssueDate = DespatchAdviceFieldMetaIssueDate
  public static readonly IssueTime = DespatchAdviceFieldMetaIssueTime
  public static readonly DocumentStatusCode = DespatchAdviceFieldMetaDocumentStatusCode
  public static readonly DespatchAdviceTypeCode = DespatchAdviceFieldMetaDespatchAdviceTypeCode
  public static readonly Note = DespatchAdviceFieldMetaNote
  public static readonly LineCountNumeric = DespatchAdviceFieldMetaLineCountNumeric
  public static readonly OrderReference = DespatchAdviceFieldMetaOrderReference
  public static readonly AdditionalDocumentReference = DespatchAdviceFieldMetaAdditionalDocumentReference
  public static readonly Signature = DespatchAdviceFieldMetaSignature
  public static readonly DespatchSupplierParty = DespatchAdviceFieldMetaDespatchSupplierParty
  public static readonly DeliveryCustomerParty = DespatchAdviceFieldMetaDeliveryCustomerParty
  public static readonly BuyerCustomerParty = DespatchAdviceFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = DespatchAdviceFieldMetaSellerSupplierParty
  public static readonly OriginatorCustomerParty = DespatchAdviceFieldMetaOriginatorCustomerParty
  public static readonly Shipment = DespatchAdviceFieldMetaShipment
  public static readonly DespatchLine = DespatchAdviceFieldMetaDespatchLine
}

export const DespatchAdviceFieldMap = new Map([
  [DespatchAdviceField.UBLExtensions, DespatchAdviceFieldMetaUBLExtensions],
  [DespatchAdviceField.UBLVersionID, DespatchAdviceFieldMetaUBLVersionID],
  [DespatchAdviceField.CustomizationID, DespatchAdviceFieldMetaCustomizationID],
  [DespatchAdviceField.ProfileID, DespatchAdviceFieldMetaProfileID],
  [DespatchAdviceField.ProfileExecutionID, DespatchAdviceFieldMetaProfileExecutionID],
  [DespatchAdviceField.ID, DespatchAdviceFieldMetaID],
  [DespatchAdviceField.CopyIndicator, DespatchAdviceFieldMetaCopyIndicator],
  [DespatchAdviceField.UUID, DespatchAdviceFieldMetaUUID],
  [DespatchAdviceField.IssueDate, DespatchAdviceFieldMetaIssueDate],
  [DespatchAdviceField.IssueTime, DespatchAdviceFieldMetaIssueTime],
  [DespatchAdviceField.DocumentStatusCode, DespatchAdviceFieldMetaDocumentStatusCode],
  [DespatchAdviceField.DespatchAdviceTypeCode, DespatchAdviceFieldMetaDespatchAdviceTypeCode],
  [DespatchAdviceField.Note, DespatchAdviceFieldMetaNote],
  [DespatchAdviceField.LineCountNumeric, DespatchAdviceFieldMetaLineCountNumeric],
  [DespatchAdviceField.OrderReference, DespatchAdviceFieldMetaOrderReference],
  [DespatchAdviceField.AdditionalDocumentReference, DespatchAdviceFieldMetaAdditionalDocumentReference],
  [DespatchAdviceField.Signature, DespatchAdviceFieldMetaSignature],
  [DespatchAdviceField.DespatchSupplierParty, DespatchAdviceFieldMetaDespatchSupplierParty],
  [DespatchAdviceField.DeliveryCustomerParty, DespatchAdviceFieldMetaDeliveryCustomerParty],
  [DespatchAdviceField.BuyerCustomerParty, DespatchAdviceFieldMetaBuyerCustomerParty],
  [DespatchAdviceField.SellerSupplierParty, DespatchAdviceFieldMetaSellerSupplierParty],
  [DespatchAdviceField.OriginatorCustomerParty, DespatchAdviceFieldMetaOriginatorCustomerParty],
  [DespatchAdviceField.Shipment, DespatchAdviceFieldMetaShipment],
  [DespatchAdviceField.DespatchLine, DespatchAdviceFieldMetaDespatchLine]
])
