import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DespatchLineType } from '../cac/DespatchLineMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { NumericType } from '../cbc/NumericMeta'
import { OrderReferenceType } from '../cac/OrderReferenceMeta'
import { ShipmentType } from '../cac/ShipmentMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaUBLVersionID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const DespatchAdviceFieldMetaCustomizationID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const DespatchAdviceFieldMetaProfileID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const DespatchAdviceFieldMetaProfileExecutionID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaCopyIndicator = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaUUID = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaIssueDate = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaIssueTime = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDocumentStatusCode = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DocumentStatusCode,
  'DocumentStatusCode',
  'Document Status Code',
  CodeType.name,
  'A code signifying the status of the Despatch Advice with respect to its original state. This code may be used if the document precedes the event and is subsequently found to be incorrect and in need of cancellation or revision.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDespatchAdviceTypeCode = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DespatchAdviceTypeCode,
  'DespatchAdviceTypeCode',
  'Despatch Advice Type Code',
  CodeType.name,
  'A code signifying the type of the Despatch Advice.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaNote = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaLineCountNumeric = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Despatch Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaOrderReference = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'A reference to an Order with which this Despatch Advice is associated.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaAdditionalDocumentReference = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaSignature = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDespatchSupplierParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DespatchSupplierParty,
  'DespatchSupplierParty',
  'Despatch Supplier Party',
  SupplierPartyType.name,
  'The despatch party.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDeliveryCustomerParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DeliveryCustomerParty,
  'DeliveryCustomerParty',
  'Delivery Customer Party',
  CustomerPartyType.name,
  'The delivery recipient.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaBuyerCustomerParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaSellerSupplierParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaOriginatorCustomerParty = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'A customer party as originator.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaShipment = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.Shipment,
  'Shipment',
  'Shipment',
  ShipmentType.name,
  'The shipment.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const DespatchAdviceFieldMetaDespatchLine = new FieldMeta<DespatchAdviceField>(
  DespatchAdviceField.DespatchLine,
  'DespatchLine',
  'Despatch Line',
  DespatchLineType.name,
  'A Despatch Line associated with a kind of item delivered.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const DespatchAdviceType: Type<DespatchAdviceField> = {
  name: 'DespatchAdvice',
  label: 'Despatch Advice',
  module: TypeModule.doc,
  definition: 'A document used to describe the despatch or delivery of goods and services.',
  fields: DespatchAdviceFieldMap,
}
