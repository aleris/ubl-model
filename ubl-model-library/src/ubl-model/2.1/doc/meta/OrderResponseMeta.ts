import { FieldMeta } from '../../FieldMeta'

export enum OrderResponseField {
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
  OrderResponseCode = 'OrderResponseCode',
  Note = 'Note',
  DocumentCurrencyCode = 'DocumentCurrencyCode',
  PricingCurrencyCode = 'PricingCurrencyCode',
  TaxCurrencyCode = 'TaxCurrencyCode',
  TotalPackagesQuantity = 'TotalPackagesQuantity',
  GrossWeightMeasure = 'GrossWeightMeasure',
  NetWeightMeasure = 'NetWeightMeasure',
  NetNetWeightMeasure = 'NetNetWeightMeasure',
  GrossVolumeMeasure = 'GrossVolumeMeasure',
  NetVolumeMeasure = 'NetVolumeMeasure',
  CustomerReference = 'CustomerReference',
  AccountingCostCode = 'AccountingCostCode',
  AccountingCost = 'AccountingCost',
  LineCountNumeric = 'LineCountNumeric',
  ValidityPeriod = 'ValidityPeriod',
  OrderReference = 'OrderReference',
  OrderDocumentReference = 'OrderDocumentReference',
  OriginatorDocumentReference = 'OriginatorDocumentReference',
  AdditionalDocumentReference = 'AdditionalDocumentReference',
  Contract = 'Contract',
  Signature = 'Signature',
  SellerSupplierParty = 'SellerSupplierParty',
  BuyerCustomerParty = 'BuyerCustomerParty',
  OriginatorCustomerParty = 'OriginatorCustomerParty',
  FreightForwarderParty = 'FreightForwarderParty',
  AccountingSupplierParty = 'AccountingSupplierParty',
  AccountingCustomerParty = 'AccountingCustomerParty',
  Delivery = 'Delivery',
  DeliveryTerms = 'DeliveryTerms',
  PaymentMeans = 'PaymentMeans',
  PaymentTerms = 'PaymentTerms',
  AllowanceCharge = 'AllowanceCharge',
  TransactionConditions = 'TransactionConditions',
  TaxExchangeRate = 'TaxExchangeRate',
  PricingExchangeRate = 'PricingExchangeRate',
  PaymentExchangeRate = 'PaymentExchangeRate',
  DestinationCountry = 'DestinationCountry',
  TaxTotal = 'TaxTotal',
  LegalMonetaryTotal = 'LegalMonetaryTotal',
  OrderLine = 'OrderLine'
}

export const OrderResponseFieldMetaUBLExtensions = new FieldMeta<OrderResponseField>(
  OrderResponseField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for all extensions present in the document.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaUBLVersionID = new FieldMeta<OrderResponseField>(
  OrderResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  'Identifier',
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  '0..1',
  undefined,
  '2.0.5'
)

export const OrderResponseFieldMetaCustomizationID = new FieldMeta<OrderResponseField>(
  OrderResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  'Identifier',
  'Identifies a user-defined customization of UBL.',
  '0..1',
  undefined,
  'NES'
)

export const OrderResponseFieldMetaProfileID = new FieldMeta<OrderResponseField>(
  OrderResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  'Identifier',
  'Identifies a user-defined profile of the customization of UBL being used.',
  '0..1',
  undefined,
  'BasicProcurementProcess'
)

export const OrderResponseFieldMetaProfileExecutionID = new FieldMeta<OrderResponseField>(
  OrderResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  'Identifier',
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  '0..1',
  undefined,
  'BPP-1001'
)

export const OrderResponseFieldMetaID = new FieldMeta<OrderResponseField>(
  OrderResponseField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this document, assigned by the sender.',
  '1',
  'Purchase Order Response Number, Acknowledgement of Order Number',
  undefined
)

export const OrderResponseFieldMetaSalesOrderID = new FieldMeta<OrderResponseField>(
  OrderResponseField.SalesOrderID,
  'SalesOrderID',
  'Order Identifier',
  'Identifier',
  'An identifier for the Order, issued by the Seller.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaCopyIndicator = new FieldMeta<OrderResponseField>(
  OrderResponseField.CopyIndicator,
  'CopyIndicator',
  'Indicator',
  'Indicator',
  'Indicates whether this document is a copy (true) or not (false).',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaUUID = new FieldMeta<OrderResponseField>(
  OrderResponseField.UUID,
  'UUID',
  'UUID',
  'Identifier',
  'A universally unique identifier for an instance of this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaIssueDate = new FieldMeta<OrderResponseField>(
  OrderResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  'Date',
  'The date, assigned by the sender, on which this document was issued.',
  '1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaIssueTime = new FieldMeta<OrderResponseField>(
  OrderResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  'Time',
  'The time, assigned by the sender, at which this document was issued.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaOrderResponseCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.OrderResponseCode,
  'OrderResponseCode',
  'Order Response Code',
  'Code',
  'A code signifying the type of response for this Order.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaNote = new FieldMeta<OrderResponseField>(
  OrderResponseField.Note,
  'Note',
  'Note',
  'Text',
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaDocumentCurrencyCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the default currency for this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaPricingCurrencyCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency that is used for all prices in the Order Response.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaTaxCurrencyCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Currency Code',
  'Code',
  'A code signifying the currency that is used for all tax amounts in the Order Response.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaTotalPackagesQuantity = new FieldMeta<OrderResponseField>(
  OrderResponseField.TotalPackagesQuantity,
  'TotalPackagesQuantity',
  'Packages Quantity',
  'Quantity',
  'The total number of packages contained in the Order Response.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaGrossWeightMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.GrossWeightMeasure,
  'GrossWeightMeasure',
  'Weight',
  'Measure',
  'The total gross weight for the Order Response (goods + packaging + transport equipment).',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaNetWeightMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.NetWeightMeasure,
  'NetWeightMeasure',
  'Weight',
  'Measure',
  'The total net weight for the Order Response (goods + packaging).',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaNetNetWeightMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.NetNetWeightMeasure,
  'NetNetWeightMeasure',
  'Weight',
  'Measure',
  'The total net weight of the goods in the Order Response excluding packaging.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaGrossVolumeMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.GrossVolumeMeasure,
  'GrossVolumeMeasure',
  'Volume',
  'Measure',
  'The total volume of the goods in the Order Response including packaging.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaNetVolumeMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.NetVolumeMeasure,
  'NetVolumeMeasure',
  'Volume',
  'Measure',
  'The total volume of the goods in the Order Response excluding packaging.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaCustomerReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.CustomerReference,
  'CustomerReference',
  'Reference',
  'Text',
  'A supplementary reference assigned by the buyer, e.g., the CRI in a purchasing card transaction.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaAccountingCostCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  'Code',
  'An accounting cost code applied to the order as a whole.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaAccountingCost = new FieldMeta<OrderResponseField>(
  OrderResponseField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  'Text',
  'An accounting cost code applied to the order as a whole, expressed as text.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaLineCountNumeric = new FieldMeta<OrderResponseField>(
  OrderResponseField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  'Numeric',
  'The number of Order Lines in this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaValidityPeriod = new FieldMeta<OrderResponseField>(
  OrderResponseField.ValidityPeriod,
  'ValidityPeriod',
  'Period',
  'Period',
  'The period for which the Order Response is valid.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaOrderReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.OrderReference,
  'OrderReference',
  'Order Reference',
  'OrderReference',
  'A reference to the Order being responded to.',
  '1..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaOrderDocumentReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.OrderDocumentReference,
  'OrderDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an Order other than the one being responded to.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaOriginatorDocumentReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an originator document associated with this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaAdditionalDocumentReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Document Reference',
  'DocumentReference',
  'A reference to an additional document associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaContract = new FieldMeta<OrderResponseField>(
  OrderResponseField.Contract,
  'Contract',
  'Contract',
  'Contract',
  'A contract associated with the Order being responded to.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaSignature = new FieldMeta<OrderResponseField>(
  OrderResponseField.Signature,
  'Signature',
  'Signature',
  'Signature',
  'A signature applied to this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaSellerSupplierParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.SellerSupplierParty,
  'SellerSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The seller.',
  '1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaBuyerCustomerParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The buyer.',
  '1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaOriginatorCustomerParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The originator.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaFreightForwarderParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.FreightForwarderParty,
  'FreightForwarderParty',
  'Party',
  'Party',
  'A freight forwarder or carrier.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaAccountingSupplierParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Supplier Party',
  'SupplierParty',
  'The accounting supplier party.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaAccountingCustomerParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Customer Party',
  'CustomerParty',
  'The accounting customer party.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaDelivery = new FieldMeta<OrderResponseField>(
  OrderResponseField.Delivery,
  'Delivery',
  'Delivery',
  'Delivery',
  'A delivery associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaDeliveryTerms = new FieldMeta<OrderResponseField>(
  OrderResponseField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  'DeliveryTerms',
  'A set of delivery terms associated with this document.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaPaymentMeans = new FieldMeta<OrderResponseField>(
  OrderResponseField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  'PaymentMeans',
  'Expected means of payment.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaPaymentTerms = new FieldMeta<OrderResponseField>(
  OrderResponseField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  'PaymentTerms',
  'A set of payment terms associated with this document.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaAllowanceCharge = new FieldMeta<OrderResponseField>(
  OrderResponseField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A discount or charge that applies to a price component.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaTransactionConditions = new FieldMeta<OrderResponseField>(
  OrderResponseField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  'TransactionConditions',
  'A specification of purchasing or sales conditions applying to the whole Order.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaTaxExchangeRate = new FieldMeta<OrderResponseField>(
  OrderResponseField.TaxExchangeRate,
  'TaxExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the tax currency.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaPricingExchangeRate = new FieldMeta<OrderResponseField>(
  OrderResponseField.PricingExchangeRate,
  'PricingExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the pricing currency.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaPaymentExchangeRate = new FieldMeta<OrderResponseField>(
  OrderResponseField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Exchange Rate',
  'ExchangeRate',
  'The exchange rate between the document currency and the payment currency.',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaDestinationCountry = new FieldMeta<OrderResponseField>(
  OrderResponseField.DestinationCountry,
  'DestinationCountry',
  'Country',
  'Country',
  'The country of destination (for customs purposes).',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaTaxTotal = new FieldMeta<OrderResponseField>(
  OrderResponseField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  'TaxTotal',
  'The total amount of a specific type of tax, as calculated by the seller.',
  '0..n',
  undefined,
  undefined
)

export const OrderResponseFieldMetaLegalMonetaryTotal = new FieldMeta<OrderResponseField>(
  OrderResponseField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Monetary Total',
  'MonetaryTotal',
  'The total amount of the Order (or counter-offer).',
  '0..1',
  undefined,
  undefined
)

export const OrderResponseFieldMetaOrderLine = new FieldMeta<OrderResponseField>(
  OrderResponseField.OrderLine,
  'OrderLine',
  'Order Line',
  'OrderLine',
  'A line associated with a line in the Catalogue and specifying a kind of item being ordered.',
  '0..n',
  undefined,
  undefined
)

export class OrderResponseFieldMeta {
  public static readonly UBLExtensions = OrderResponseFieldMetaUBLExtensions
  public static readonly UBLVersionID = OrderResponseFieldMetaUBLVersionID
  public static readonly CustomizationID = OrderResponseFieldMetaCustomizationID
  public static readonly ProfileID = OrderResponseFieldMetaProfileID
  public static readonly ProfileExecutionID = OrderResponseFieldMetaProfileExecutionID
  public static readonly ID = OrderResponseFieldMetaID
  public static readonly SalesOrderID = OrderResponseFieldMetaSalesOrderID
  public static readonly CopyIndicator = OrderResponseFieldMetaCopyIndicator
  public static readonly UUID = OrderResponseFieldMetaUUID
  public static readonly IssueDate = OrderResponseFieldMetaIssueDate
  public static readonly IssueTime = OrderResponseFieldMetaIssueTime
  public static readonly OrderResponseCode = OrderResponseFieldMetaOrderResponseCode
  public static readonly Note = OrderResponseFieldMetaNote
  public static readonly DocumentCurrencyCode = OrderResponseFieldMetaDocumentCurrencyCode
  public static readonly PricingCurrencyCode = OrderResponseFieldMetaPricingCurrencyCode
  public static readonly TaxCurrencyCode = OrderResponseFieldMetaTaxCurrencyCode
  public static readonly TotalPackagesQuantity = OrderResponseFieldMetaTotalPackagesQuantity
  public static readonly GrossWeightMeasure = OrderResponseFieldMetaGrossWeightMeasure
  public static readonly NetWeightMeasure = OrderResponseFieldMetaNetWeightMeasure
  public static readonly NetNetWeightMeasure = OrderResponseFieldMetaNetNetWeightMeasure
  public static readonly GrossVolumeMeasure = OrderResponseFieldMetaGrossVolumeMeasure
  public static readonly NetVolumeMeasure = OrderResponseFieldMetaNetVolumeMeasure
  public static readonly CustomerReference = OrderResponseFieldMetaCustomerReference
  public static readonly AccountingCostCode = OrderResponseFieldMetaAccountingCostCode
  public static readonly AccountingCost = OrderResponseFieldMetaAccountingCost
  public static readonly LineCountNumeric = OrderResponseFieldMetaLineCountNumeric
  public static readonly ValidityPeriod = OrderResponseFieldMetaValidityPeriod
  public static readonly OrderReference = OrderResponseFieldMetaOrderReference
  public static readonly OrderDocumentReference = OrderResponseFieldMetaOrderDocumentReference
  public static readonly OriginatorDocumentReference = OrderResponseFieldMetaOriginatorDocumentReference
  public static readonly AdditionalDocumentReference = OrderResponseFieldMetaAdditionalDocumentReference
  public static readonly Contract = OrderResponseFieldMetaContract
  public static readonly Signature = OrderResponseFieldMetaSignature
  public static readonly SellerSupplierParty = OrderResponseFieldMetaSellerSupplierParty
  public static readonly BuyerCustomerParty = OrderResponseFieldMetaBuyerCustomerParty
  public static readonly OriginatorCustomerParty = OrderResponseFieldMetaOriginatorCustomerParty
  public static readonly FreightForwarderParty = OrderResponseFieldMetaFreightForwarderParty
  public static readonly AccountingSupplierParty = OrderResponseFieldMetaAccountingSupplierParty
  public static readonly AccountingCustomerParty = OrderResponseFieldMetaAccountingCustomerParty
  public static readonly Delivery = OrderResponseFieldMetaDelivery
  public static readonly DeliveryTerms = OrderResponseFieldMetaDeliveryTerms
  public static readonly PaymentMeans = OrderResponseFieldMetaPaymentMeans
  public static readonly PaymentTerms = OrderResponseFieldMetaPaymentTerms
  public static readonly AllowanceCharge = OrderResponseFieldMetaAllowanceCharge
  public static readonly TransactionConditions = OrderResponseFieldMetaTransactionConditions
  public static readonly TaxExchangeRate = OrderResponseFieldMetaTaxExchangeRate
  public static readonly PricingExchangeRate = OrderResponseFieldMetaPricingExchangeRate
  public static readonly PaymentExchangeRate = OrderResponseFieldMetaPaymentExchangeRate
  public static readonly DestinationCountry = OrderResponseFieldMetaDestinationCountry
  public static readonly TaxTotal = OrderResponseFieldMetaTaxTotal
  public static readonly LegalMonetaryTotal = OrderResponseFieldMetaLegalMonetaryTotal
  public static readonly OrderLine = OrderResponseFieldMetaOrderLine
}

export const OrderResponseFieldMap = new Map([
  [OrderResponseField.UBLExtensions, OrderResponseFieldMetaUBLExtensions],
  [OrderResponseField.UBLVersionID, OrderResponseFieldMetaUBLVersionID],
  [OrderResponseField.CustomizationID, OrderResponseFieldMetaCustomizationID],
  [OrderResponseField.ProfileID, OrderResponseFieldMetaProfileID],
  [OrderResponseField.ProfileExecutionID, OrderResponseFieldMetaProfileExecutionID],
  [OrderResponseField.ID, OrderResponseFieldMetaID],
  [OrderResponseField.SalesOrderID, OrderResponseFieldMetaSalesOrderID],
  [OrderResponseField.CopyIndicator, OrderResponseFieldMetaCopyIndicator],
  [OrderResponseField.UUID, OrderResponseFieldMetaUUID],
  [OrderResponseField.IssueDate, OrderResponseFieldMetaIssueDate],
  [OrderResponseField.IssueTime, OrderResponseFieldMetaIssueTime],
  [OrderResponseField.OrderResponseCode, OrderResponseFieldMetaOrderResponseCode],
  [OrderResponseField.Note, OrderResponseFieldMetaNote],
  [OrderResponseField.DocumentCurrencyCode, OrderResponseFieldMetaDocumentCurrencyCode],
  [OrderResponseField.PricingCurrencyCode, OrderResponseFieldMetaPricingCurrencyCode],
  [OrderResponseField.TaxCurrencyCode, OrderResponseFieldMetaTaxCurrencyCode],
  [OrderResponseField.TotalPackagesQuantity, OrderResponseFieldMetaTotalPackagesQuantity],
  [OrderResponseField.GrossWeightMeasure, OrderResponseFieldMetaGrossWeightMeasure],
  [OrderResponseField.NetWeightMeasure, OrderResponseFieldMetaNetWeightMeasure],
  [OrderResponseField.NetNetWeightMeasure, OrderResponseFieldMetaNetNetWeightMeasure],
  [OrderResponseField.GrossVolumeMeasure, OrderResponseFieldMetaGrossVolumeMeasure],
  [OrderResponseField.NetVolumeMeasure, OrderResponseFieldMetaNetVolumeMeasure],
  [OrderResponseField.CustomerReference, OrderResponseFieldMetaCustomerReference],
  [OrderResponseField.AccountingCostCode, OrderResponseFieldMetaAccountingCostCode],
  [OrderResponseField.AccountingCost, OrderResponseFieldMetaAccountingCost],
  [OrderResponseField.LineCountNumeric, OrderResponseFieldMetaLineCountNumeric],
  [OrderResponseField.ValidityPeriod, OrderResponseFieldMetaValidityPeriod],
  [OrderResponseField.OrderReference, OrderResponseFieldMetaOrderReference],
  [OrderResponseField.OrderDocumentReference, OrderResponseFieldMetaOrderDocumentReference],
  [OrderResponseField.OriginatorDocumentReference, OrderResponseFieldMetaOriginatorDocumentReference],
  [OrderResponseField.AdditionalDocumentReference, OrderResponseFieldMetaAdditionalDocumentReference],
  [OrderResponseField.Contract, OrderResponseFieldMetaContract],
  [OrderResponseField.Signature, OrderResponseFieldMetaSignature],
  [OrderResponseField.SellerSupplierParty, OrderResponseFieldMetaSellerSupplierParty],
  [OrderResponseField.BuyerCustomerParty, OrderResponseFieldMetaBuyerCustomerParty],
  [OrderResponseField.OriginatorCustomerParty, OrderResponseFieldMetaOriginatorCustomerParty],
  [OrderResponseField.FreightForwarderParty, OrderResponseFieldMetaFreightForwarderParty],
  [OrderResponseField.AccountingSupplierParty, OrderResponseFieldMetaAccountingSupplierParty],
  [OrderResponseField.AccountingCustomerParty, OrderResponseFieldMetaAccountingCustomerParty],
  [OrderResponseField.Delivery, OrderResponseFieldMetaDelivery],
  [OrderResponseField.DeliveryTerms, OrderResponseFieldMetaDeliveryTerms],
  [OrderResponseField.PaymentMeans, OrderResponseFieldMetaPaymentMeans],
  [OrderResponseField.PaymentTerms, OrderResponseFieldMetaPaymentTerms],
  [OrderResponseField.AllowanceCharge, OrderResponseFieldMetaAllowanceCharge],
  [OrderResponseField.TransactionConditions, OrderResponseFieldMetaTransactionConditions],
  [OrderResponseField.TaxExchangeRate, OrderResponseFieldMetaTaxExchangeRate],
  [OrderResponseField.PricingExchangeRate, OrderResponseFieldMetaPricingExchangeRate],
  [OrderResponseField.PaymentExchangeRate, OrderResponseFieldMetaPaymentExchangeRate],
  [OrderResponseField.DestinationCountry, OrderResponseFieldMetaDestinationCountry],
  [OrderResponseField.TaxTotal, OrderResponseFieldMetaTaxTotal],
  [OrderResponseField.LegalMonetaryTotal, OrderResponseFieldMetaLegalMonetaryTotal],
  [OrderResponseField.OrderLine, OrderResponseFieldMetaOrderLine]
])
