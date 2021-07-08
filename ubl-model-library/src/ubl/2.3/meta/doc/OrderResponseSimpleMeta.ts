import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { CodeType } from '../cbc/CodeMeta'
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

export enum OrderResponseSimpleField {
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
  AcceptedIndicator = 'AcceptedIndicator',
  RejectionNote = 'RejectionNote',
  CustomerReference = 'CustomerReference',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  OrderReference = 'OrderReference',
  OrderChangeDocumentReference = 'OrderChangeDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Signature = 'Signature',
  SellerSupplierParty = 'SellerSupplierParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  AccountingSupplierParty = 'AccountingSupplierParty',
  AccountingCustomerParty = 'AccountingCustomerParty'
}

export const OrderResponseSimpleFieldMetaUBLExtensions = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaUBLVersionID = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const OrderResponseSimpleFieldMetaCustomizationID = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const OrderResponseSimpleFieldMetaProfileID = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const OrderResponseSimpleFieldMetaProfileExecutionID = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaID = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Purchase Order Response Number, Acknowledgement of Order Number',
  undefined
)

export const OrderResponseSimpleFieldMetaCopyIndicator = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaUUID = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaIssueDate = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaIssueTime = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaNote = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaAcceptedIndicator = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.AcceptedIndicator,
  'AcceptedIndicator',
  'Accepted Indicator',
  IndicatorType.name,
  'Indicates whether the Order is accepted (true) or rejected (false).',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaRejectionNote = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.RejectionNote,
  'RejectionNote',
  'Rejection Note',
  TextType.name,
  'The reason for rejection if the order was not accepted.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  'Out of Stock , Not able to supply , Unable to fulfill within the contracted conditions , Buyer Account not Recognised'
)

export const OrderResponseSimpleFieldMetaCustomerReference = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.CustomerReference,
  'CustomerReference',
  'Customer Reference',
  TextType.name,
  'A supplementary reference for the transaction (e.g., when using a purchasing card).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaAccountingCostCode = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'An accounting cost code applied to the order as a whole.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaAccountingCost = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'An accounting cost code applied to the order as a whole, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaOrderReference = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'A reference to the Order being responded to.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaOrderChangeDocumentReference = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.OrderChangeDocumentReference,
  'OrderChangeDocumentReference',
  'Order Change Document Reference',
  DocumentReferenceType.name,
  'A reference to an Order Change being responded to.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaAdditionalDocumentReference = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaSignature = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaSellerSupplierParty = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaBuyerCustomerParty = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaOriginatorCustomerParty = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originator.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaAccountingSupplierParty = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The accounting supplier party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseSimpleFieldMetaAccountingCustomerParty = new FieldMeta<OrderResponseSimpleField>(
  OrderResponseSimpleField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class OrderResponseSimpleFieldMeta {
  public static readonly UBLExtensions = OrderResponseSimpleFieldMetaUBLExtensions
  public static readonly UBLVersionID = OrderResponseSimpleFieldMetaUBLVersionID
  public static readonly CustomizationID = OrderResponseSimpleFieldMetaCustomizationID
  public static readonly ProfileID = OrderResponseSimpleFieldMetaProfileID
  public static readonly ProfileExecutionID = OrderResponseSimpleFieldMetaProfileExecutionID
  public static readonly ID = OrderResponseSimpleFieldMetaID
  public static readonly CopyIndicator = OrderResponseSimpleFieldMetaCopyIndicator
  public static readonly UUID = OrderResponseSimpleFieldMetaUUID
  public static readonly IssueDate = OrderResponseSimpleFieldMetaIssueDate
  public static readonly IssueTime = OrderResponseSimpleFieldMetaIssueTime
  public static readonly Note = OrderResponseSimpleFieldMetaNote
  public static readonly AcceptedIndicator = OrderResponseSimpleFieldMetaAcceptedIndicator
  public static readonly RejectionNote = OrderResponseSimpleFieldMetaRejectionNote
  public static readonly CustomerReference = OrderResponseSimpleFieldMetaCustomerReference
  public static readonly AccountingCostCode = OrderResponseSimpleFieldMetaAccountingCostCode
  public static readonly AccountingCost = OrderResponseSimpleFieldMetaAccountingCost
  public static readonly OrderReference = OrderResponseSimpleFieldMetaOrderReference
  public static readonly OrderChangeDocumentReference = OrderResponseSimpleFieldMetaOrderChangeDocumentReference
  public static readonly AdditionalDocumentReference = OrderResponseSimpleFieldMetaAdditionalDocumentReference
  public static readonly Signature = OrderResponseSimpleFieldMetaSignature
  public static readonly SellerSupplierParty = OrderResponseSimpleFieldMetaSellerSupplierParty
  public static readonly BuyerCustomerParty = OrderResponseSimpleFieldMetaBuyerCustomerParty
  public static readonly OriginatorCustomerParty = OrderResponseSimpleFieldMetaOriginatorCustomerParty
  public static readonly AccountingSupplierParty = OrderResponseSimpleFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = OrderResponseSimpleFieldMetaAccountingCustomerParty
}

export const OrderResponseSimpleFieldMap = new Map([
  [OrderResponseSimpleField.UBLExtensions, OrderResponseSimpleFieldMetaUBLExtensions],
  [OrderResponseSimpleField.UBLVersionID, OrderResponseSimpleFieldMetaUBLVersionID],
  [OrderResponseSimpleField.CustomizationID, OrderResponseSimpleFieldMetaCustomizationID],
  [OrderResponseSimpleField.ProfileID, OrderResponseSimpleFieldMetaProfileID],
  [OrderResponseSimpleField.ProfileExecutionID, OrderResponseSimpleFieldMetaProfileExecutionID],
  [OrderResponseSimpleField.ID, OrderResponseSimpleFieldMetaID],
  [OrderResponseSimpleField.CopyIndicator, OrderResponseSimpleFieldMetaCopyIndicator],
  [OrderResponseSimpleField.UUID, OrderResponseSimpleFieldMetaUUID],
  [OrderResponseSimpleField.IssueDate, OrderResponseSimpleFieldMetaIssueDate],
  [OrderResponseSimpleField.IssueTime, OrderResponseSimpleFieldMetaIssueTime],
  [OrderResponseSimpleField.Note, OrderResponseSimpleFieldMetaNote],
  [OrderResponseSimpleField.AcceptedIndicator, OrderResponseSimpleFieldMetaAcceptedIndicator],
  [OrderResponseSimpleField.RejectionNote, OrderResponseSimpleFieldMetaRejectionNote],
  [OrderResponseSimpleField.CustomerReference, OrderResponseSimpleFieldMetaCustomerReference],
  [OrderResponseSimpleField.AccountingCostCode, OrderResponseSimpleFieldMetaAccountingCostCode],
  [OrderResponseSimpleField.AccountingCost, OrderResponseSimpleFieldMetaAccountingCost],
  [OrderResponseSimpleField.OrderReference, OrderResponseSimpleFieldMetaOrderReference],
  [OrderResponseSimpleField.OrderChangeDocumentReference, OrderResponseSimpleFieldMetaOrderChangeDocumentReference],
  [OrderResponseSimpleField.AdditionalDocumentReference, OrderResponseSimpleFieldMetaAdditionalDocumentReference],
  [OrderResponseSimpleField.Signature, OrderResponseSimpleFieldMetaSignature],
  [OrderResponseSimpleField.SellerSupplierParty, OrderResponseSimpleFieldMetaSellerSupplierParty],
  [OrderResponseSimpleField.BuyerCustomerParty, OrderResponseSimpleFieldMetaBuyerCustomerParty],
  [OrderResponseSimpleField.OriginatorCustomerParty, OrderResponseSimpleFieldMetaOriginatorCustomerParty],
  [OrderResponseSimpleField.AccountingSupplierParty, OrderResponseSimpleFieldMetaAccountingSupplierParty],
  [OrderResponseSimpleField.AccountingCustomerParty, OrderResponseSimpleFieldMetaAccountingCustomerParty]
])

export const OrderResponseSimpleType: Type<OrderResponseSimpleField> = {
  name: 'OrderResponseSimple',
  label: 'Order Response Simple',
  module: TypeModule.doc,
  definition: 'A document used to indicate simple acceptance or rejection of an entire Order.',
  fields: OrderResponseSimpleFieldMap,
}
