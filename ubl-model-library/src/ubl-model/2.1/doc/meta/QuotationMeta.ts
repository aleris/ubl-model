import { FieldMeta } from '../../FieldMeta'

export enum QuotationField {
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
  PricingCurrencyCode = 'PricingCurrencyCode',
  LineCountNumeric = 'LineCountNumeric',
  ValidityPeriod = 'ValidityPeriod',
  RequestForQuotationDocumentReference = 'RequestForQuotationDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Contract = 'Contract',
  Signature = 'Signature',
  SellerSupplierParty = 'SellerSupplierParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  Delivery = 'Delivery',
  DeliveryTerms = 'DeliveryTerms',
  PaymentMeans = 'PaymentMeans',
  TransactionConditions = 'TransactionConditions',
  AllowanceCharge = 'AllowanceCharge',
  DestinationCountry = 'DestinationCountry',
  TaxTotal = 'TaxTotal',
  QuotedMonetaryTotal = 'QuotedMonetaryTotal',
  QuotationLine = 'QuotationLine'
}

export const QuotationFieldMetaUBLExtensions = new FieldMeta<QuotationField>(
  QuotationField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaUBLVersionID = new FieldMeta<QuotationField>(
  QuotationField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const QuotationFieldMetaCustomizationID = new FieldMeta<QuotationField>(
  QuotationField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const QuotationFieldMetaProfileID = new FieldMeta<QuotationField>(
  QuotationField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the subset of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const QuotationFieldMetaProfileExecutionID = new FieldMeta<QuotationField>(
  QuotationField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaID = new FieldMeta<QuotationField>(
  QuotationField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaCopyIndicator = new FieldMeta<QuotationField>(
  QuotationField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaUUID = new FieldMeta<QuotationField>(
  QuotationField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaIssueDate = new FieldMeta<QuotationField>(
  QuotationField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const QuotationFieldMetaIssueTime = new FieldMeta<QuotationField>(
  QuotationField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaNote = new FieldMeta<QuotationField>(
  QuotationField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const QuotationFieldMetaPricingCurrencyCode = new FieldMeta<QuotationField>(
  QuotationField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for all prices in the Quotation.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaLineCountNumeric = new FieldMeta<QuotationField>(
  QuotationField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Quotation Lines in this document.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaValidityPeriod = new FieldMeta<QuotationField>(
  QuotationField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'The period for which the Quotation is valid.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaRequestForQuotationDocumentReference = new FieldMeta<QuotationField>(
  QuotationField.RequestForQuotationDocumentReference,
  'RequestForQuotationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to the Request for Quotation associated with this Quotation.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaAdditionalDocumentReference = new FieldMeta<QuotationField>(
  QuotationField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const QuotationFieldMetaContract = new FieldMeta<QuotationField>(
  QuotationField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'A contract associated with this Quotation.',
  '0..n',
  undefined,
  undefined
)

export const QuotationFieldMetaSignature = new FieldMeta<QuotationField>(
  QuotationField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const QuotationFieldMetaSellerSupplierParty = new FieldMeta<QuotationField>(
  QuotationField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '1',
  undefined,
  undefined
)

export const QuotationFieldMetaBuyerCustomerParty = new FieldMeta<QuotationField>(
  QuotationField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'Association to the Buyer.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaOriginatorCustomerParty = new FieldMeta<QuotationField>(
  QuotationField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The originator.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaDelivery = new FieldMeta<QuotationField>(
  QuotationField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const QuotationFieldMetaDeliveryTerms = new FieldMeta<QuotationField>(
  QuotationField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaPaymentMeans = new FieldMeta<QuotationField>(
  QuotationField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaTransactionConditions = new FieldMeta<QuotationField>(
  QuotationField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  'TransactionConditions',
  'A specification of purchasing, sales, or payment conditions applying to Orders related to this Quotation.',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaAllowanceCharge = new FieldMeta<QuotationField>(
  QuotationField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  undefined,
  undefined
)

export const QuotationFieldMetaDestinationCountry = new FieldMeta<QuotationField>(
  QuotationField.DestinationCountry,
  'DestinationCountry',
  'Country',
  'Country',
  'The country of destination of potential orders (for customs purposes).',
  '0..1',
  undefined,
  undefined
)

export const QuotationFieldMetaTaxTotal = new FieldMeta<QuotationField>(
  QuotationField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  undefined,
  undefined
)

export const QuotationFieldMetaQuotedMonetaryTotal = new FieldMeta<QuotationField>(
  QuotationField.QuotedMonetaryTotal,
  'QuotedMonetaryTotal',
  'Monetary Total',
  'MonetaryTotal',
  'The total amount of the Quotation.',
  '1',
  undefined,
  undefined
)

export const QuotationFieldMetaQuotationLine = new FieldMeta<QuotationField>(
  QuotationField.QuotationLine,
  'QuotationLine',
  'Quotation Line',
  'QuotationLine',
  'A line quoting a cost for one kind of item.',
  '1..n',
  undefined,
  undefined
)

export class QuotationFieldMeta {
  public static readonly UBLExtensions = QuotationFieldMetaUBLExtensions
  public static readonly UBLVersionID = QuotationFieldMetaUBLVersionID
  public static readonly CustomizationID = QuotationFieldMetaCustomizationID
  public static readonly ProfileID = QuotationFieldMetaProfileID
  public static readonly ProfileExecutionID = QuotationFieldMetaProfileExecutionID
  public static readonly ID = QuotationFieldMetaID
  public static readonly CopyIndicator = QuotationFieldMetaCopyIndicator
  public static readonly UUID = QuotationFieldMetaUUID
  public static readonly IssueDate = QuotationFieldMetaIssueDate
  public static readonly IssueTime = QuotationFieldMetaIssueTime
  public static readonly Note = QuotationFieldMetaNote
  public static readonly PricingCurrencyCode = QuotationFieldMetaPricingCurrencyCode
  public static readonly LineCountNumeric = QuotationFieldMetaLineCountNumeric
  public static readonly ValidityPeriod = QuotationFieldMetaValidityPeriod
  public static readonly RequestForQuotationDocumentReference = QuotationFieldMetaRequestForQuotationDocumentReference
  public static readonly AdditionalDocumentReference = QuotationFieldMetaAdditionalDocumentReference
  public static readonly Contract = QuotationFieldMetaContract
  public static readonly Signature = QuotationFieldMetaSignature
  public static readonly SellerSupplierParty = QuotationFieldMetaSellerSupplierParty
  public static readonly BuyerCustomerParty = QuotationFieldMetaBuyerCustomerParty
  public static readonly OriginatorCustomerParty = QuotationFieldMetaOriginatorCustomerParty
  public static readonly Delivery = QuotationFieldMetaDelivery
  public static readonly DeliveryTerms = QuotationFieldMetaDeliveryTerms
  public static readonly PaymentMeans = QuotationFieldMetaPaymentMeans
  public static readonly TransactionConditions = QuotationFieldMetaTransactionConditions
  public static readonly AllowanceCharge = QuotationFieldMetaAllowanceCharge
  public static readonly DestinationCountry = QuotationFieldMetaDestinationCountry
  public static readonly TaxTotal = QuotationFieldMetaTaxTotal
  public static readonly QuotedMonetaryTotal = QuotationFieldMetaQuotedMonetaryTotal
  public static readonly QuotationLine = QuotationFieldMetaQuotationLine
}

export const QuotationFieldMap = new Map([
  [QuotationField.UBLExtensions, QuotationFieldMetaUBLExtensions],
  [QuotationField.UBLVersionID, QuotationFieldMetaUBLVersionID],
  [QuotationField.CustomizationID, QuotationFieldMetaCustomizationID],
  [QuotationField.ProfileID, QuotationFieldMetaProfileID],
  [QuotationField.ProfileExecutionID, QuotationFieldMetaProfileExecutionID],
  [QuotationField.ID, QuotationFieldMetaID],
  [QuotationField.CopyIndicator, QuotationFieldMetaCopyIndicator],
  [QuotationField.UUID, QuotationFieldMetaUUID],
  [QuotationField.IssueDate, QuotationFieldMetaIssueDate],
  [QuotationField.IssueTime, QuotationFieldMetaIssueTime],
  [QuotationField.Note, QuotationFieldMetaNote],
  [QuotationField.PricingCurrencyCode, QuotationFieldMetaPricingCurrencyCode],
  [QuotationField.LineCountNumeric, QuotationFieldMetaLineCountNumeric],
  [QuotationField.ValidityPeriod, QuotationFieldMetaValidityPeriod],
  [QuotationField.RequestForQuotationDocumentReference, QuotationFieldMetaRequestForQuotationDocumentReference],
  [QuotationField.AdditionalDocumentReference, QuotationFieldMetaAdditionalDocumentReference],
  [QuotationField.Contract, QuotationFieldMetaContract],
  [QuotationField.Signature, QuotationFieldMetaSignature],
  [QuotationField.SellerSupplierParty, QuotationFieldMetaSellerSupplierParty],
  [QuotationField.BuyerCustomerParty, QuotationFieldMetaBuyerCustomerParty],
  [QuotationField.OriginatorCustomerParty, QuotationFieldMetaOriginatorCustomerParty],
  [QuotationField.Delivery, QuotationFieldMetaDelivery],
  [QuotationField.DeliveryTerms, QuotationFieldMetaDeliveryTerms],
  [QuotationField.PaymentMeans, QuotationFieldMetaPaymentMeans],
  [QuotationField.TransactionConditions, QuotationFieldMetaTransactionConditions],
  [QuotationField.AllowanceCharge, QuotationFieldMetaAllowanceCharge],
  [QuotationField.DestinationCountry, QuotationFieldMetaDestinationCountry],
  [QuotationField.TaxTotal, QuotationFieldMetaTaxTotal],
  [QuotationField.QuotedMonetaryTotal, QuotationFieldMetaQuotedMonetaryTotal],
  [QuotationField.QuotationLine, QuotationFieldMetaQuotationLine]
])
