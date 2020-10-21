import { FieldMeta } from '../../FieldMeta'

export enum OrderChangeField {
  UBLExtensions = 'UBLExtensions',
  UBLVersionID = 'UBLVersionID',
  CustomizationID = 'CustomizationID',
  ProfileID = 'ProfileID',
  ProfileExecutionID = 'ProfileExecutionID',
  ID = 'ID',
  SalesOrderID = 'SalesOrderID',
  CopyIndicator = 'CopyIndicator',
  UUID = 'UUID',
  IssueDate = 'IssueDate',
  IssueTime = 'IssueTime',
  SequenceNumberID = 'SequenceNumberID',
  Note = 'Note',
  RequestedInvoiceCurrencyCode = 'RequestedInvoiceCurrencyCode',
  DocumentCurrencyCode = 'DocumentCurrencyCode',
  PricingCurrencyCode = 'PricingCurrencyCode',
  TaxCurrencyCode = 'TaxCurrencyCode',
  CustomerReference = 'CustomerReference',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  LineCountNumeric = 'LineCountNumeric',
  ValidityPeriod = 'ValidityPeriod',
  OrderReference = 'OrderReference',
  QuotationDocumentReference = 'QuotationDocumentReference',
  OriginatorDocumentReference = 'OriginatorDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Contract = 'Contract',
  Signature = 'Signature',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  FreightForwarderParty = 'FreightForwarderParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  AccountingSupplierParty = 'AccountingSupplierParty',
  Delivery = 'Delivery',
  DeliveryTerms = 'DeliveryTerms',
  PaymentMeans = 'PaymentMeans',
  PaymentTerms = 'PaymentTerms',
  TransactionConditions = 'TransactionConditions',
  AllowanceCharge = 'AllowanceCharge',
  TaxExchangeRate = 'TaxExchangeRate',
  PricingExchangeRate = 'PricingExchangeRate',
  PaymentExchangeRate = 'PaymentExchangeRate',
  DestinationCountry = 'DestinationCountry',
  TaxTotal = 'TaxTotal',
  AnticipatedMonetaryTotal = 'AnticipatedMonetaryTotal',
  OrderLine = 'OrderLine'
}

export const OrderChangeFieldMetaUBLExtensions = new FieldMeta<OrderChangeField>(
  OrderChangeField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaUBLVersionID = new FieldMeta<OrderChangeField>(
  OrderChangeField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const OrderChangeFieldMetaCustomizationID = new FieldMeta<OrderChangeField>(
  OrderChangeField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const OrderChangeFieldMetaProfileID = new FieldMeta<OrderChangeField>(
  OrderChangeField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const OrderChangeFieldMetaProfileExecutionID = new FieldMeta<OrderChangeField>(
  OrderChangeField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const OrderChangeFieldMetaID = new FieldMeta<OrderChangeField>(
  OrderChangeField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaSalesOrderID = new FieldMeta<OrderChangeField>(
  OrderChangeField.SalesOrderID,
  'SalesOrderID',
  'Order Identifier',
  'Identifier',
  'An identifier for the Order Change, assigned by the seller.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaCopyIndicator = new FieldMeta<OrderChangeField>(
  OrderChangeField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaUUID = new FieldMeta<OrderChangeField>(
  OrderChangeField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaIssueDate = new FieldMeta<OrderChangeField>(
  OrderChangeField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaIssueTime = new FieldMeta<OrderChangeField>(
  OrderChangeField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaSequenceNumberID = new FieldMeta<OrderChangeField>(
  OrderChangeField.SequenceNumberID,
  'SequenceNumberID',
  'Sequence Number',
  'Identifier',
  'The Order Change Sequence Number assigned by the Buyer to ensure the proper sequencing of changes.',
  '1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaNote = new FieldMeta<OrderChangeField>(
  OrderChangeField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaRequestedInvoiceCurrencyCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.RequestedInvoiceCurrencyCode,
  'RequestedInvoiceCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying he currency requested for amount totals in Invoices related to this Order Change.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaDocumentCurrencyCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaPricingCurrencyCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency that is used for all prices in the Order Change.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaTaxCurrencyCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency requested for tax amounts in Invoices related to this Order Change.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaCustomerReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.CustomerReference,
  'CustomerReference',
  'Reference',
  'Text',
  'A supplementary reference for the transaction (e.g., CRI when using purchasing card).',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaAccountingCostCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting code, applied to the Order Change as a whole.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaAccountingCost = new FieldMeta<OrderChangeField>(
  OrderChangeField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting code, applied to the Order Change as a whole, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaLineCountNumeric = new FieldMeta<OrderChangeField>(
  OrderChangeField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Order Change lines in the document.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaValidityPeriod = new FieldMeta<OrderChangeField>(
  OrderChangeField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'A period during which the Order Change is valid.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaOrderReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to the Order being changed.',
  '1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaQuotationDocumentReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.QuotationDocumentReference,
  'QuotationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Quotation.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaOriginatorDocumentReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an originator document associated with this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaAdditionalDocumentReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaContract = new FieldMeta<OrderChangeField>(
  OrderChangeField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'A contract associated with the Order being changed.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaSignature = new FieldMeta<OrderChangeField>(
  OrderChangeField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaBuyerCustomerParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaSellerSupplierParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaOriginatorCustomerParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The originator.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaFreightForwarderParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.FreightForwarderParty,
  'FreightForwarderParty',
  'Party',
  'Party',
  'A freight forwarder or carrier.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaAccountingCustomerParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaAccountingSupplierParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaDelivery = new FieldMeta<OrderChangeField>(
  OrderChangeField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaDeliveryTerms = new FieldMeta<OrderChangeField>(
  OrderChangeField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaPaymentMeans = new FieldMeta<OrderChangeField>(
  OrderChangeField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaPaymentTerms = new FieldMeta<OrderChangeField>(
  OrderChangeField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaTransactionConditions = new FieldMeta<OrderChangeField>(
  OrderChangeField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  'TransactionConditions',
  'Purchasing, sales, or payment conditions applying to the whole Order being changed.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaAllowanceCharge = new FieldMeta<OrderChangeField>(
  OrderChangeField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaTaxExchangeRate = new FieldMeta<OrderChangeField>(
  OrderChangeField.TaxExchangeRate,
  'TaxExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaPricingExchangeRate = new FieldMeta<OrderChangeField>(
  OrderChangeField.PricingExchangeRate,
  'PricingExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaPaymentExchangeRate = new FieldMeta<OrderChangeField>(
  OrderChangeField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaDestinationCountry = new FieldMeta<OrderChangeField>(
  OrderChangeField.DestinationCountry,
  'DestinationCountry',
  'Country',
  'Country',
  'The country of destination (for customs purposes).',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaTaxTotal = new FieldMeta<OrderChangeField>(
  OrderChangeField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  undefined,
  undefined
)

export const OrderChangeFieldMetaAnticipatedMonetaryTotal = new FieldMeta<OrderChangeField>(
  OrderChangeField.AnticipatedMonetaryTotal,
  'AnticipatedMonetaryTotal',
  'Monetary Total',
  'MonetaryTotal',
  'The amount of change to the total cost of the order anticipated by the buyer.',
  '0..1',
  undefined,
  undefined
)

export const OrderChangeFieldMetaOrderLine = new FieldMeta<OrderChangeField>(
  OrderChangeField.OrderLine,
  'OrderLine',
  'Order Line',
  'OrderLine',
  'An association to one or more (changed) Order Lines.',
  '1..n',
  undefined,
  undefined
)

export class OrderChangeFieldMeta {
  public static readonly UBLExtensions = OrderChangeFieldMetaUBLExtensions
  public static readonly UBLVersionID = OrderChangeFieldMetaUBLVersionID
  public static readonly CustomizationID = OrderChangeFieldMetaCustomizationID
  public static readonly ProfileID = OrderChangeFieldMetaProfileID
  public static readonly ProfileExecutionID = OrderChangeFieldMetaProfileExecutionID
  public static readonly ID = OrderChangeFieldMetaID
  public static readonly SalesOrderID = OrderChangeFieldMetaSalesOrderID
  public static readonly CopyIndicator = OrderChangeFieldMetaCopyIndicator
  public static readonly UUID = OrderChangeFieldMetaUUID
  public static readonly IssueDate = OrderChangeFieldMetaIssueDate
  public static readonly IssueTime = OrderChangeFieldMetaIssueTime
  public static readonly SequenceNumberID = OrderChangeFieldMetaSequenceNumberID
  public static readonly Note = OrderChangeFieldMetaNote
  public static readonly RequestedInvoiceCurrencyCode = OrderChangeFieldMetaRequestedInvoiceCurrencyCode
  public static readonly DocumentCurrencyCode = OrderChangeFieldMetaDocumentCurrencyCode
  public static readonly PricingCurrencyCode = OrderChangeFieldMetaPricingCurrencyCode
  public static readonly TaxCurrencyCode = OrderChangeFieldMetaTaxCurrencyCode
  public static readonly CustomerReference = OrderChangeFieldMetaCustomerReference
  public static readonly AccountingCostCode = OrderChangeFieldMetaAccountingCostCode
  public static readonly AccountingCost = OrderChangeFieldMetaAccountingCost
  public static readonly LineCountNumeric = OrderChangeFieldMetaLineCountNumeric
  public static readonly ValidityPeriod = OrderChangeFieldMetaValidityPeriod
  public static readonly OrderReference = OrderChangeFieldMetaOrderReference
  public static readonly QuotationDocumentReference = OrderChangeFieldMetaQuotationDocumentReference
  public static readonly OriginatorDocumentReference = OrderChangeFieldMetaOriginatorDocumentReference
  public static readonly AdditionalDocumentReference = OrderChangeFieldMetaAdditionalDocumentReference
  public static readonly Contract = OrderChangeFieldMetaContract
  public static readonly Signature = OrderChangeFieldMetaSignature
  public static readonly BuyerCustomerParty = OrderChangeFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = OrderChangeFieldMetaSellerSupplierParty
  public static readonly OriginatorCustomerParty = OrderChangeFieldMetaOriginatorCustomerParty
  public static readonly FreightForwarderParty = OrderChangeFieldMetaFreightForwarderParty
  public static readonly AccountingCustomerParty = OrderChangeFieldMetaAccountingCustomerParty
  public static readonly AccountingSupplierParty = OrderChangeFieldMetaAccountingSupplierParty
  public static readonly Delivery = OrderChangeFieldMetaDelivery
  public static readonly DeliveryTerms = OrderChangeFieldMetaDeliveryTerms
  public static readonly PaymentMeans = OrderChangeFieldMetaPaymentMeans
  public static readonly PaymentTerms = OrderChangeFieldMetaPaymentTerms
  public static readonly TransactionConditions = OrderChangeFieldMetaTransactionConditions
  public static readonly AllowanceCharge = OrderChangeFieldMetaAllowanceCharge
  public static readonly TaxExchangeRate = OrderChangeFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = OrderChangeFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = OrderChangeFieldMetaPaymentExchangeRate
  public static readonly DestinationCountry = OrderChangeFieldMetaDestinationCountry
  public static readonly TaxTotal = OrderChangeFieldMetaTaxTotal
  public static readonly AnticipatedMonetaryTotal = OrderChangeFieldMetaAnticipatedMonetaryTotal
  public static readonly OrderLine = OrderChangeFieldMetaOrderLine
}

export const OrderChangeFieldMap = new Map([
  [OrderChangeField.UBLExtensions, OrderChangeFieldMetaUBLExtensions],
  [OrderChangeField.UBLVersionID, OrderChangeFieldMetaUBLVersionID],
  [OrderChangeField.CustomizationID, OrderChangeFieldMetaCustomizationID],
  [OrderChangeField.ProfileID, OrderChangeFieldMetaProfileID],
  [OrderChangeField.ProfileExecutionID, OrderChangeFieldMetaProfileExecutionID],
  [OrderChangeField.ID, OrderChangeFieldMetaID],
  [OrderChangeField.SalesOrderID, OrderChangeFieldMetaSalesOrderID],
  [OrderChangeField.CopyIndicator, OrderChangeFieldMetaCopyIndicator],
  [OrderChangeField.UUID, OrderChangeFieldMetaUUID],
  [OrderChangeField.IssueDate, OrderChangeFieldMetaIssueDate],
  [OrderChangeField.IssueTime, OrderChangeFieldMetaIssueTime],
  [OrderChangeField.SequenceNumberID, OrderChangeFieldMetaSequenceNumberID],
  [OrderChangeField.Note, OrderChangeFieldMetaNote],
  [OrderChangeField.RequestedInvoiceCurrencyCode, OrderChangeFieldMetaRequestedInvoiceCurrencyCode],
  [OrderChangeField.DocumentCurrencyCode, OrderChangeFieldMetaDocumentCurrencyCode],
  [OrderChangeField.PricingCurrencyCode, OrderChangeFieldMetaPricingCurrencyCode],
  [OrderChangeField.TaxCurrencyCode, OrderChangeFieldMetaTaxCurrencyCode],
  [OrderChangeField.CustomerReference, OrderChangeFieldMetaCustomerReference],
  [OrderChangeField.AccountingCostCode, OrderChangeFieldMetaAccountingCostCode],
  [OrderChangeField.AccountingCost, OrderChangeFieldMetaAccountingCost],
  [OrderChangeField.LineCountNumeric, OrderChangeFieldMetaLineCountNumeric],
  [OrderChangeField.ValidityPeriod, OrderChangeFieldMetaValidityPeriod],
  [OrderChangeField.OrderReference, OrderChangeFieldMetaOrderReference],
  [OrderChangeField.QuotationDocumentReference, OrderChangeFieldMetaQuotationDocumentReference],
  [OrderChangeField.OriginatorDocumentReference, OrderChangeFieldMetaOriginatorDocumentReference],
  [OrderChangeField.AdditionalDocumentReference, OrderChangeFieldMetaAdditionalDocumentReference],
  [OrderChangeField.Contract, OrderChangeFieldMetaContract],
  [OrderChangeField.Signature, OrderChangeFieldMetaSignature],
  [OrderChangeField.BuyerCustomerParty, OrderChangeFieldMetaBuyerCustomerParty],
  [OrderChangeField.SellerSupplierParty, OrderChangeFieldMetaSellerSupplierParty],
  [OrderChangeField.OriginatorCustomerParty, OrderChangeFieldMetaOriginatorCustomerParty],
  [OrderChangeField.FreightForwarderParty, OrderChangeFieldMetaFreightForwarderParty],
  [OrderChangeField.AccountingCustomerParty, OrderChangeFieldMetaAccountingCustomerParty],
  [OrderChangeField.AccountingSupplierParty, OrderChangeFieldMetaAccountingSupplierParty],
  [OrderChangeField.Delivery, OrderChangeFieldMetaDelivery],
  [OrderChangeField.DeliveryTerms, OrderChangeFieldMetaDeliveryTerms],
  [OrderChangeField.PaymentMeans, OrderChangeFieldMetaPaymentMeans],
  [OrderChangeField.PaymentTerms, OrderChangeFieldMetaPaymentTerms],
  [OrderChangeField.TransactionConditions, OrderChangeFieldMetaTransactionConditions],
  [OrderChangeField.AllowanceCharge, OrderChangeFieldMetaAllowanceCharge],
  [OrderChangeField.TaxExchangeRate, OrderChangeFieldMetaTaxExchangeRate],
  [OrderChangeField.PricingExchangeRate, OrderChangeFieldMetaPricingExchangeRate],
  [OrderChangeField.PaymentExchangeRate, OrderChangeFieldMetaPaymentExchangeRate],
  [OrderChangeField.DestinationCountry, OrderChangeFieldMetaDestinationCountry],
  [OrderChangeField.TaxTotal, OrderChangeFieldMetaTaxTotal],
  [OrderChangeField.AnticipatedMonetaryTotal, OrderChangeFieldMetaAnticipatedMonetaryTotal],
  [OrderChangeField.OrderLine, OrderChangeFieldMetaOrderLine]
])
