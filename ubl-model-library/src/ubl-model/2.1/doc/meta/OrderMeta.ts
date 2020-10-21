import { FieldMeta } from '../../FieldMeta'

export enum OrderField {
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
  OrderTypeCode = 'OrderTypeCode',
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
  QuotationDocumentReference = 'QuotationDocumentReference',
  OrderDocumentReference = 'OrderDocumentReference',
  OriginatorDocumentReference = 'OriginatorDocumentReference',
  CatalogueReference = 'CatalogueReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Contract = 'Contract',
  ProjectReference = 'ProjectReference',
  Signature = 'Signature',
  BuyerCustomerParty = 'BuyerCustomerParty',
  SellerSupplierParty = 'SellerSupplierParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  FreightForwarderParty = 'FreightForwarderParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
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

export const OrderFieldMetaUBLExtensions = new FieldMeta<OrderField>(
  OrderField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaUBLVersionID = new FieldMeta<OrderField>(
  OrderField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const OrderFieldMetaCustomizationID = new FieldMeta<OrderField>(
  OrderField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL for a specific use.',
  '0..1',
  undefined,
  'NES'
)

export const OrderFieldMetaProfileID = new FieldMeta<OrderField>(
  OrderField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const OrderFieldMetaProfileExecutionID = new FieldMeta<OrderField>(
  OrderField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const OrderFieldMetaID = new FieldMeta<OrderField>(
  OrderField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'Purchase Order Number, Order Number',
  undefined
)

export const OrderFieldMetaSalesOrderID = new FieldMeta<OrderField>(
  OrderField.SalesOrderID,
  'SalesOrderID',
  'Order Identifier',
  'Identifier',
  'An identifier for the Order, assigned by the seller.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaCopyIndicator = new FieldMeta<OrderField>(
  OrderField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaUUID = new FieldMeta<OrderField>(
  OrderField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaIssueDate = new FieldMeta<OrderField>(
  OrderField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  'Order Date',
  undefined
)

export const OrderFieldMetaIssueTime = new FieldMeta<OrderField>(
  OrderField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaOrderTypeCode = new FieldMeta<OrderField>(
  OrderField.OrderTypeCode,
  'OrderTypeCode',
  'Order Type Code',
  'Code',
  'A code signifying the type of Order.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaNote = new FieldMeta<OrderField>(
  OrderField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaRequestedInvoiceCurrencyCode = new FieldMeta<OrderField>(
  OrderField.RequestedInvoiceCurrencyCode,
  'RequestedInvoiceCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency requested for amount totals in Invoices related to this Order.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaDocumentCurrencyCode = new FieldMeta<OrderField>(
  OrderField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaPricingCurrencyCode = new FieldMeta<OrderField>(
  OrderField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency used for all prices in the Order.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaTaxCurrencyCode = new FieldMeta<OrderField>(
  OrderField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency requested for tax amounts in Invoices related to this Order.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaCustomerReference = new FieldMeta<OrderField>(
  OrderField.CustomerReference,
  'CustomerReference',
  'Reference',
  'Text',
  'A supplementary reference for the Order.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaAccountingCostCode = new FieldMeta<OrderField>(
  OrderField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'The buyer\'s accounting code, applied to the Order as a whole.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaAccountingCost = new FieldMeta<OrderField>(
  OrderField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'The buyer\'s accounting cost centre, applied to the Order as a whole, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaLineCountNumeric = new FieldMeta<OrderField>(
  OrderField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Order Lines in the document.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaValidityPeriod = new FieldMeta<OrderField>(
  OrderField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'The period for which the Order is valid.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaQuotationDocumentReference = new FieldMeta<OrderField>(
  OrderField.QuotationDocumentReference,
  'QuotationDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to a Quotation.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaOrderDocumentReference = new FieldMeta<OrderField>(
  OrderField.OrderDocumentReference,
  'OrderDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to another Order.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaOriginatorDocumentReference = new FieldMeta<OrderField>(
  OrderField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an originator document associated with this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaCatalogueReference = new FieldMeta<OrderField>(
  OrderField.CatalogueReference,
  'CatalogueReference',
  'Catalogue Reference',
  'CatalogueReference',
  'A reference to the Catalogue on which this Order is based.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaAdditionalDocumentReference = new FieldMeta<OrderField>(
  OrderField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaContract = new FieldMeta<OrderField>(
  OrderField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'A contracts associated with this Order.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaProjectReference = new FieldMeta<OrderField>(
  OrderField.ProjectReference,
  'ProjectReference',
  'Project Reference',
  'ProjectReference',
  'A project with which this Order is associated.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaSignature = new FieldMeta<OrderField>(
  OrderField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaBuyerCustomerParty = new FieldMeta<OrderField>(
  OrderField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '1',
  undefined,
  undefined
)

export const OrderFieldMetaSellerSupplierParty = new FieldMeta<OrderField>(
  OrderField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '1',
  undefined,
  undefined
)

export const OrderFieldMetaOriginatorCustomerParty = new FieldMeta<OrderField>(
  OrderField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The originator.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaFreightForwarderParty = new FieldMeta<OrderField>(
  OrderField.FreightForwarderParty,
  'FreightForwarderParty',
  'Party',
  'Party',
  'A freight forwarder or carrier.',
  '0..1',
  'Carrier',
  undefined
)

export const OrderFieldMetaAccountingCustomerParty = new FieldMeta<OrderField>(
  OrderField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaDelivery = new FieldMeta<OrderField>(
  OrderField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaDeliveryTerms = new FieldMeta<OrderField>(
  OrderField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaPaymentMeans = new FieldMeta<OrderField>(
  OrderField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaPaymentTerms = new FieldMeta<OrderField>(
  OrderField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaTransactionConditions = new FieldMeta<OrderField>(
  OrderField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  'TransactionConditions',
  'A specification of purchasing or sales conditions applying to the whole Order.',
  '0..1',
  'Sales condition, procurement condition',
  undefined
)

export const OrderFieldMetaAllowanceCharge = new FieldMeta<OrderField>(
  OrderField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaTaxExchangeRate = new FieldMeta<OrderField>(
  OrderField.TaxExchangeRate,
  'TaxExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaPricingExchangeRate = new FieldMeta<OrderField>(
  OrderField.PricingExchangeRate,
  'PricingExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaPaymentExchangeRate = new FieldMeta<OrderField>(
  OrderField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaDestinationCountry = new FieldMeta<OrderField>(
  OrderField.DestinationCountry,
  'DestinationCountry',
  'Country',
  'Country',
  'The country of destination (for customs purposes).',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaTaxTotal = new FieldMeta<OrderField>(
  OrderField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax.',
  '0..n',
  undefined,
  undefined
)

export const OrderFieldMetaAnticipatedMonetaryTotal = new FieldMeta<OrderField>(
  OrderField.AnticipatedMonetaryTotal,
  'AnticipatedMonetaryTotal',
  'Monetary Total',
  'MonetaryTotal',
  'The total amount for the Order anticipated by the buyer.',
  '0..1',
  undefined,
  undefined
)

export const OrderFieldMetaOrderLine = new FieldMeta<OrderField>(
  OrderField.OrderLine,
  'OrderLine',
  'Order Line',
  'OrderLine',
  'A line associated with a line in the Catalogue and specifying a kind of item being ordered.',
  '1..n',
  undefined,
  undefined
)

export class OrderFieldMeta {
  public static readonly UBLExtensions = OrderFieldMetaUBLExtensions
  public static readonly UBLVersionID = OrderFieldMetaUBLVersionID
  public static readonly CustomizationID = OrderFieldMetaCustomizationID
  public static readonly ProfileID = OrderFieldMetaProfileID
  public static readonly ProfileExecutionID = OrderFieldMetaProfileExecutionID
  public static readonly ID = OrderFieldMetaID
  public static readonly SalesOrderID = OrderFieldMetaSalesOrderID
  public static readonly CopyIndicator = OrderFieldMetaCopyIndicator
  public static readonly UUID = OrderFieldMetaUUID
  public static readonly IssueDate = OrderFieldMetaIssueDate
  public static readonly IssueTime = OrderFieldMetaIssueTime
  public static readonly OrderTypeCode = OrderFieldMetaOrderTypeCode
  public static readonly Note = OrderFieldMetaNote
  public static readonly RequestedInvoiceCurrencyCode = OrderFieldMetaRequestedInvoiceCurrencyCode
  public static readonly DocumentCurrencyCode = OrderFieldMetaDocumentCurrencyCode
  public static readonly PricingCurrencyCode = OrderFieldMetaPricingCurrencyCode
  public static readonly TaxCurrencyCode = OrderFieldMetaTaxCurrencyCode
  public static readonly CustomerReference = OrderFieldMetaCustomerReference
  public static readonly AccountingCostCode = OrderFieldMetaAccountingCostCode
  public static readonly AccountingCost = OrderFieldMetaAccountingCost
  public static readonly LineCountNumeric = OrderFieldMetaLineCountNumeric
  public static readonly ValidityPeriod = OrderFieldMetaValidityPeriod
  public static readonly QuotationDocumentReference = OrderFieldMetaQuotationDocumentReference
  public static readonly OrderDocumentReference = OrderFieldMetaOrderDocumentReference
  public static readonly OriginatorDocumentReference = OrderFieldMetaOriginatorDocumentReference
  public static readonly CatalogueReference = OrderFieldMetaCatalogueReference
  public static readonly AdditionalDocumentReference = OrderFieldMetaAdditionalDocumentReference
  public static readonly Contract = OrderFieldMetaContract
  public static readonly ProjectReference = OrderFieldMetaProjectReference
  public static readonly Signature = OrderFieldMetaSignature
  public static readonly BuyerCustomerParty = OrderFieldMetaBuyerCustomerParty
  public static readonly SellerSupplierParty = OrderFieldMetaSellerSupplierParty
  public static readonly OriginatorCustomerParty = OrderFieldMetaOriginatorCustomerParty
  public static readonly FreightForwarderParty = OrderFieldMetaFreightForwarderParty
  public static readonly AccountingCustomerParty = OrderFieldMetaAccountingCustomerParty
  public static readonly Delivery = OrderFieldMetaDelivery
  public static readonly DeliveryTerms = OrderFieldMetaDeliveryTerms
  public static readonly PaymentMeans = OrderFieldMetaPaymentMeans
  public static readonly PaymentTerms = OrderFieldMetaPaymentTerms
  public static readonly TransactionConditions = OrderFieldMetaTransactionConditions
  public static readonly AllowanceCharge = OrderFieldMetaAllowanceCharge
  public static readonly TaxExchangeRate = OrderFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = OrderFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = OrderFieldMetaPaymentExchangeRate
  public static readonly DestinationCountry = OrderFieldMetaDestinationCountry
  public static readonly TaxTotal = OrderFieldMetaTaxTotal
  public static readonly AnticipatedMonetaryTotal = OrderFieldMetaAnticipatedMonetaryTotal
  public static readonly OrderLine = OrderFieldMetaOrderLine
}

export const OrderFieldMap = new Map([
  [OrderField.UBLExtensions, OrderFieldMetaUBLExtensions],
  [OrderField.UBLVersionID, OrderFieldMetaUBLVersionID],
  [OrderField.CustomizationID, OrderFieldMetaCustomizationID],
  [OrderField.ProfileID, OrderFieldMetaProfileID],
  [OrderField.ProfileExecutionID, OrderFieldMetaProfileExecutionID],
  [OrderField.ID, OrderFieldMetaID],
  [OrderField.SalesOrderID, OrderFieldMetaSalesOrderID],
  [OrderField.CopyIndicator, OrderFieldMetaCopyIndicator],
  [OrderField.UUID, OrderFieldMetaUUID],
  [OrderField.IssueDate, OrderFieldMetaIssueDate],
  [OrderField.IssueTime, OrderFieldMetaIssueTime],
  [OrderField.OrderTypeCode, OrderFieldMetaOrderTypeCode],
  [OrderField.Note, OrderFieldMetaNote],
  [OrderField.RequestedInvoiceCurrencyCode, OrderFieldMetaRequestedInvoiceCurrencyCode],
  [OrderField.DocumentCurrencyCode, OrderFieldMetaDocumentCurrencyCode],
  [OrderField.PricingCurrencyCode, OrderFieldMetaPricingCurrencyCode],
  [OrderField.TaxCurrencyCode, OrderFieldMetaTaxCurrencyCode],
  [OrderField.CustomerReference, OrderFieldMetaCustomerReference],
  [OrderField.AccountingCostCode, OrderFieldMetaAccountingCostCode],
  [OrderField.AccountingCost, OrderFieldMetaAccountingCost],
  [OrderField.LineCountNumeric, OrderFieldMetaLineCountNumeric],
  [OrderField.ValidityPeriod, OrderFieldMetaValidityPeriod],
  [OrderField.QuotationDocumentReference, OrderFieldMetaQuotationDocumentReference],
  [OrderField.OrderDocumentReference, OrderFieldMetaOrderDocumentReference],
  [OrderField.OriginatorDocumentReference, OrderFieldMetaOriginatorDocumentReference],
  [OrderField.CatalogueReference, OrderFieldMetaCatalogueReference],
  [OrderField.AdditionalDocumentReference, OrderFieldMetaAdditionalDocumentReference],
  [OrderField.Contract, OrderFieldMetaContract],
  [OrderField.ProjectReference, OrderFieldMetaProjectReference],
  [OrderField.Signature, OrderFieldMetaSignature],
  [OrderField.BuyerCustomerParty, OrderFieldMetaBuyerCustomerParty],
  [OrderField.SellerSupplierParty, OrderFieldMetaSellerSupplierParty],
  [OrderField.OriginatorCustomerParty, OrderFieldMetaOriginatorCustomerParty],
  [OrderField.FreightForwarderParty, OrderFieldMetaFreightForwarderParty],
  [OrderField.AccountingCustomerParty, OrderFieldMetaAccountingCustomerParty],
  [OrderField.Delivery, OrderFieldMetaDelivery],
  [OrderField.DeliveryTerms, OrderFieldMetaDeliveryTerms],
  [OrderField.PaymentMeans, OrderFieldMetaPaymentMeans],
  [OrderField.PaymentTerms, OrderFieldMetaPaymentTerms],
  [OrderField.TransactionConditions, OrderFieldMetaTransactionConditions],
  [OrderField.AllowanceCharge, OrderFieldMetaAllowanceCharge],
  [OrderField.TaxExchangeRate, OrderFieldMetaTaxExchangeRate],
  [OrderField.PricingExchangeRate, OrderFieldMetaPricingExchangeRate],
  [OrderField.PaymentExchangeRate, OrderFieldMetaPaymentExchangeRate],
  [OrderField.DestinationCountry, OrderFieldMetaDestinationCountry],
  [OrderField.TaxTotal, OrderFieldMetaTaxTotal],
  [OrderField.AnticipatedMonetaryTotal, OrderFieldMetaAnticipatedMonetaryTotal],
  [OrderField.OrderLine, OrderFieldMetaOrderLine]
])
