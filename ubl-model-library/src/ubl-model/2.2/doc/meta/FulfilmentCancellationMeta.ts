import { FieldMeta } from '../../FieldMeta'

export enum FulfilmentCancellationField {
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
  DespatchDocumentReference = 'DespatchDocumentReference',
  ReceiptDocumentReference = 'ReceiptDocumentReference',
  OrderReference = 'OrderReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Contract = 'Contract',
  Signature = 'Signature',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  DeliveryCustomerParty = 'DeliveryCustomerParty',
  DespatchSupplierParty = 'DespatchSupplierParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty'
}

export const FulfilmentCancellationFieldMetaUBLExtensions = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaUBLVersionID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const FulfilmentCancellationFieldMetaCustomizationID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const FulfilmentCancellationFieldMetaProfileID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const FulfilmentCancellationFieldMetaProfileExecutionID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaCopyIndicator = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaUUID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaIssueDate = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaIssueTime = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaNote = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaCancellationNote = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.CancellationNote,
  'CancellationNote',
  'Note',
  'Text',
  'The reason for cancellation of the referenced document.',
  '1..n',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaDespatchDocumentReference = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Despatch Advice associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaReceiptDocumentReference = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Receipt Advice associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaOrderReference = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to an Order document associated with the referenced Despatch or Receipt Advice(s).',
  '0..n',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaAdditionalDocumentReference = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaContract = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'The contracts or framework agreements with which the referenced fulfilment document is associated.',
  '0..n',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaSignature = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaBuyerCustomerParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaSellerSupplierParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaDeliveryCustomerParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.DeliveryCustomerParty,
  'DeliveryCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The delivery party.',
  '0..1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaDespatchSupplierParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.DespatchSupplierParty,
  'DespatchSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The despatch party.',
  '0..1',
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaOriginatorCustomerParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The originator party',
  '0..1',
  undefined,
  undefined
)

export class FulfilmentCancellationFieldMeta {
  public static readonly UBLExtensions = FulfilmentCancellationFieldMetaUBLExtensions
  public static readonly UBLVersionID = FulfilmentCancellationFieldMetaUBLVersionID
  public static readonly CustomizationID = FulfilmentCancellationFieldMetaCustomizationID
  public static readonly ProfileID = FulfilmentCancellationFieldMetaProfileID
  public static readonly ProfileExecutionID = FulfilmentCancellationFieldMetaProfileExecutionID
  public static readonly ID = FulfilmentCancellationFieldMetaID
  public static readonly CopyIndicator = FulfilmentCancellationFieldMetaCopyIndicator
  public static readonly UUID = FulfilmentCancellationFieldMetaUUID
  public static readonly IssueDate = FulfilmentCancellationFieldMetaIssueDate
  public static readonly IssueTime = FulfilmentCancellationFieldMetaIssueTime
  public static readonly Note = FulfilmentCancellationFieldMetaNote
  public static readonly CancellationNote = FulfilmentCancellationFieldMetaCancellationNote
  public static readonly DespatchDocumentReference = FulfilmentCancellationFieldMetaDespatchDocumentReference
  public static readonly ReceiptDocumentReference = FulfilmentCancellationFieldMetaReceiptDocumentReference
  public static readonly OrderReference = FulfilmentCancellationFieldMetaOrderReference
  public static readonly AdditionalDocumentReference = FulfilmentCancellationFieldMetaAdditionalDocumentReference
  public static readonly Contract = FulfilmentCancellationFieldMetaContract
  public static readonly Signature = FulfilmentCancellationFieldMetaSignature
  public static readonly BuyerCustomerParty = FulfilmentCancellationFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = FulfilmentCancellationFieldMetaSellerSupplierParty
  public static readonly DeliveryCustomerParty = FulfilmentCancellationFieldMetaDeliveryCustomerParty
  public static readonly DespatchSupplierParty = FulfilmentCancellationFieldMetaDespatchSupplierParty
  public static readonly OriginatorCustomerParty = FulfilmentCancellationFieldMetaOriginatorCustomerParty
}

export const FulfilmentCancellationFieldMap = new Map([
  [FulfilmentCancellationField.UBLExtensions, FulfilmentCancellationFieldMetaUBLExtensions],
  [FulfilmentCancellationField.UBLVersionID, FulfilmentCancellationFieldMetaUBLVersionID],
  [FulfilmentCancellationField.CustomizationID, FulfilmentCancellationFieldMetaCustomizationID],
  [FulfilmentCancellationField.ProfileID, FulfilmentCancellationFieldMetaProfileID],
  [FulfilmentCancellationField.ProfileExecutionID, FulfilmentCancellationFieldMetaProfileExecutionID],
  [FulfilmentCancellationField.ID, FulfilmentCancellationFieldMetaID],
  [FulfilmentCancellationField.CopyIndicator, FulfilmentCancellationFieldMetaCopyIndicator],
  [FulfilmentCancellationField.UUID, FulfilmentCancellationFieldMetaUUID],
  [FulfilmentCancellationField.IssueDate, FulfilmentCancellationFieldMetaIssueDate],
  [FulfilmentCancellationField.IssueTime, FulfilmentCancellationFieldMetaIssueTime],
  [FulfilmentCancellationField.Note, FulfilmentCancellationFieldMetaNote],
  [FulfilmentCancellationField.CancellationNote, FulfilmentCancellationFieldMetaCancellationNote],
  [FulfilmentCancellationField.DespatchDocumentReference, FulfilmentCancellationFieldMetaDespatchDocumentReference],
  [FulfilmentCancellationField.ReceiptDocumentReference, FulfilmentCancellationFieldMetaReceiptDocumentReference],
  [FulfilmentCancellationField.OrderReference, FulfilmentCancellationFieldMetaOrderReference],
  [FulfilmentCancellationField.AdditionalDocumentReference, FulfilmentCancellationFieldMetaAdditionalDocumentReference],
  [FulfilmentCancellationField.Contract, FulfilmentCancellationFieldMetaContract],
  [FulfilmentCancellationField.Signature, FulfilmentCancellationFieldMetaSignature],
  [FulfilmentCancellationField.BuyerCustomerParty, FulfilmentCancellationFieldMetaBuyerCustomerParty],
  [FulfilmentCancellationField.SellerSupplierParty, FulfilmentCancellationFieldMetaSellerSupplierParty],
  [FulfilmentCancellationField.DeliveryCustomerParty, FulfilmentCancellationFieldMetaDeliveryCustomerParty],
  [FulfilmentCancellationField.DespatchSupplierParty, FulfilmentCancellationFieldMetaDespatchSupplierParty],
  [FulfilmentCancellationField.OriginatorCustomerParty, FulfilmentCancellationFieldMetaOriginatorCustomerParty]
])
