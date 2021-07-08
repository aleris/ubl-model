import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { ContractType } from '../cac/ContractMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { OrderReferenceType } from '../cac/OrderReferenceMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaUBLVersionID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const FulfilmentCancellationFieldMetaCustomizationID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const FulfilmentCancellationFieldMetaProfileID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const FulfilmentCancellationFieldMetaProfileExecutionID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaCopyIndicator = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaUUID = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaIssueDate = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaIssueTime = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaNote = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaCancellationNote = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.CancellationNote,
  'CancellationNote',
  'Cancellation Note',
  TextType.name,
  'The reason for cancellation of the referenced document.',
  FieldCardinality.Multi,
  TypeModule.cbc,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaDespatchDocumentReference = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Despatch Document Reference',
  DocumentReferenceType.name,
  'A reference to a Despatch Advice associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaReceiptDocumentReference = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.ReceiptDocumentReference,
  'ReceiptDocumentReference',
  'Receipt Document Reference',
  DocumentReferenceType.name,
  'A reference to a Receipt Advice associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaOrderReference = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'A reference to an Order document associated with the referenced Despatch or Receipt Advice(s).',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaAdditionalDocumentReference = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaContract = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.Contract,
  'Contract',
  'Contract',
  ContractType.name,
  'The contracts or framework agreements with which the referenced fulfilment document is associated.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaSignature = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaBuyerCustomerParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaSellerSupplierParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaDeliveryCustomerParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.DeliveryCustomerParty,
  'DeliveryCustomerParty',
  'Delivery Customer Party',
  CustomerPartyType.name,
  'The delivery party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaDespatchSupplierParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.DespatchSupplierParty,
  'DespatchSupplierParty',
  'Despatch Supplier Party',
  SupplierPartyType.name,
  'The despatch party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const FulfilmentCancellationFieldMetaOriginatorCustomerParty = new FieldMeta<FulfilmentCancellationField>(
  FulfilmentCancellationField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originator party',
  FieldCardinality.UniOptional,
  TypeModule.cac,
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

export const FulfilmentCancellationType: Type<FulfilmentCancellationField> = {
  name: 'FulfilmentCancellation',
  label: 'Fulfilment Cancellation',
  module: TypeModule.doc,
  definition: 'A document used to cancel an entire fulfilment document (Despatch Advice or Receipt Advice).',
  fields: FulfilmentCancellationFieldMap,
}
