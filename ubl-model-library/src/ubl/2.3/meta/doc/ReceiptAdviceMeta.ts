import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { OrderReferenceType } from '../cac/OrderReferenceMeta'
import { ReceiptLineType } from '../cac/ReceiptLineMeta'
import { ShipmentType } from '../cac/ShipmentMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaUBLVersionID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const ReceiptAdviceFieldMetaCustomizationID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const ReceiptAdviceFieldMetaProfileID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the subset of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const ReceiptAdviceFieldMetaProfileExecutionID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaCopyIndicator = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaUUID = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaIssueDate = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaIssueTime = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaDocumentStatusCode = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  CodeType.name,
  'A code signifying the status of the Receipt Advice with respect to its original state. This code may be used if the document precedes the event and is subsequently found to be incorrect and in need of cancellation or revision.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaReceiptAdviceTypeCode = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ReceiptAdviceTypeCode,
  'ReceiptAdviceTypeCode',
  'Receipt Advice Type Code',
  CodeType.name,
  'A code signifying the type of the Receipt Advice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaNote = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaLineCountNumeric = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Receipt Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaOrderReference = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'A reference to an Order associated with this Receipt Advice.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaDespatchDocumentReference = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.DespatchDocumentReference,
  'DespatchDocumentReference',
  'Despatch Document Reference',
  DocumentReferenceType.name,
  'A reference to a Despatch Advice associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaAdditionalDocumentReference = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaSignature = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaDeliveryCustomerParty = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.DeliveryCustomerParty,
  'DeliveryCustomerParty',
  'Delivery Customer Party',
  CustomerPartyType.name,
  'The customer party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaDespatchSupplierParty = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.DespatchSupplierParty,
  'DespatchSupplierParty',
  'Despatch Supplier Party',
  SupplierPartyType.name,
  'The supplier party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaBuyerCustomerParty = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaSellerSupplierParty = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaShipment = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'Details about the Shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ReceiptAdviceFieldMetaReceiptLine = new FieldMeta<ReceiptAdviceField>(
  ReceiptAdviceField.ReceiptLine,
  'ReceiptLine',
  'Receipt Line',
  ReceiptLineType.name,
  'A line detailing a kind of item received.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const ReceiptAdviceType: Type<ReceiptAdviceField> = {
  name: 'ReceiptAdvice',
  label: 'Receipt Advice',
  module: TypeModule.doc,
  definition: 'A document used to describe the receipt of goods and services.',
  fields: ReceiptAdviceFieldMap,
}
