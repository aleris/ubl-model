import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from '../cac/AllowanceChargeMeta'
import { CatalogueReferenceType } from '../cac/CatalogueReferenceMeta'
import { CodeType } from '../cbc/CodeMeta'
import { ContractType } from '../cac/ContractMeta'
import { CountryType } from '../cac/CountryMeta'
import { CustomerPartyType } from '../cac/CustomerPartyMeta'
import { DateType } from '../cbc/DateMeta'
import { DeliveryType } from '../cac/DeliveryMeta'
import { DeliveryTermsType } from '../cac/DeliveryTermsMeta'
import { DocumentReferenceType } from '../cac/DocumentReferenceMeta'
import { ExchangeRateType } from '../cac/ExchangeRateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { MonetaryTotalType } from '../cac/MonetaryTotalMeta'
import { NumericType } from '../cbc/NumericMeta'
import { OrderLineType } from '../cac/OrderLineMeta'
import { PartyType } from '../cac/PartyMeta'
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PaymentTermsType } from '../cac/PaymentTermsMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { ProjectReferenceType } from '../cac/ProjectReferenceMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransactionConditionsType } from '../cac/TransactionConditionsMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const OrderFieldMetaUBLVersionID = new FieldMeta<OrderField>(
  OrderField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const OrderFieldMetaCustomizationID = new FieldMeta<OrderField>(
  OrderField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const OrderFieldMetaProfileID = new FieldMeta<OrderField>(
  OrderField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const OrderFieldMetaProfileExecutionID = new FieldMeta<OrderField>(
  OrderField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const OrderFieldMetaID = new FieldMeta<OrderField>(
  OrderField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Purchase Order Number, Order Number',
  undefined
)

export const OrderFieldMetaSalesOrderID = new FieldMeta<OrderField>(
  OrderField.SalesOrderID,
  'SalesOrderID',
  'Sales Order Identifier',
  IdentifierType.name,
  'An identifier for the Order, assigned by the seller.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaCopyIndicator = new FieldMeta<OrderField>(
  OrderField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaUUID = new FieldMeta<OrderField>(
  OrderField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaIssueDate = new FieldMeta<OrderField>(
  OrderField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Order Date',
  undefined
)

export const OrderFieldMetaIssueTime = new FieldMeta<OrderField>(
  OrderField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaOrderTypeCode = new FieldMeta<OrderField>(
  OrderField.OrderTypeCode,
  'OrderTypeCode',
  'Order Type Code',
  CodeType.name,
  'A code signifying the type of Order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaNote = new FieldMeta<OrderField>(
  OrderField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaRequestedInvoiceCurrencyCode = new FieldMeta<OrderField>(
  OrderField.RequestedInvoiceCurrencyCode,
  'RequestedInvoiceCurrencyCode',
  'Requested Invoice Currency Code',
  CodeType.name,
  'A code signifying the currency requested for amount totals in Invoices related to this Order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaDocumentCurrencyCode = new FieldMeta<OrderField>(
  OrderField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaPricingCurrencyCode = new FieldMeta<OrderField>(
  OrderField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  CodeType.name,
  'A code signifying the currency used for all prices in the Order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaTaxCurrencyCode = new FieldMeta<OrderField>(
  OrderField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  CodeType.name,
  'A code signifying the currency requested for tax amounts in Invoices related to this Order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaCustomerReference = new FieldMeta<OrderField>(
  OrderField.CustomerReference,
  'CustomerReference',
  'Customer Reference',
  TextType.name,
  'A supplementary reference for the Order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaAccountingCostCode = new FieldMeta<OrderField>(
  OrderField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The buyer\'s accounting code, applied to the Order as a whole.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaAccountingCost = new FieldMeta<OrderField>(
  OrderField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The buyer\'s accounting cost centre, applied to the Order as a whole, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaLineCountNumeric = new FieldMeta<OrderField>(
  OrderField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Order Lines in the document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderFieldMetaValidityPeriod = new FieldMeta<OrderField>(
  OrderField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period for which the Order is valid.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaQuotationDocumentReference = new FieldMeta<OrderField>(
  OrderField.QuotationDocumentReference,
  'QuotationDocumentReference',
  'Quotation Document Reference',
  DocumentReferenceType.name,
  'A reference to a Quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaOrderDocumentReference = new FieldMeta<OrderField>(
  OrderField.OrderDocumentReference,
  'OrderDocumentReference',
  'Order Document Reference',
  DocumentReferenceType.name,
  'A reference to another Order.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaOriginatorDocumentReference = new FieldMeta<OrderField>(
  OrderField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Originator Document Reference',
  DocumentReferenceType.name,
  'A reference to an originator document associated with this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaCatalogueReference = new FieldMeta<OrderField>(
  OrderField.CatalogueReference,
  'CatalogueReference',
  'Catalogue Reference',
  CatalogueReferenceType.name,
  'A reference to the Catalogue on which this Order is based.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaAdditionalDocumentReference = new FieldMeta<OrderField>(
  OrderField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaContract = new FieldMeta<OrderField>(
  OrderField.Contract,
  'Contract',
  'Contract',
  ContractType.name,
  'A contracts associated with this Order.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaProjectReference = new FieldMeta<OrderField>(
  OrderField.ProjectReference,
  'ProjectReference',
  'Project Reference',
  ProjectReferenceType.name,
  'A project with which this Order is associated.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaSignature = new FieldMeta<OrderField>(
  OrderField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaBuyerCustomerParty = new FieldMeta<OrderField>(
  OrderField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaSellerSupplierParty = new FieldMeta<OrderField>(
  OrderField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaOriginatorCustomerParty = new FieldMeta<OrderField>(
  OrderField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originator.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaFreightForwarderParty = new FieldMeta<OrderField>(
  OrderField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  PartyType.name,
  'A freight forwarder or carrier.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Carrier',
  undefined
)

export const OrderFieldMetaAccountingCustomerParty = new FieldMeta<OrderField>(
  OrderField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaDelivery = new FieldMeta<OrderField>(
  OrderField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaDeliveryTerms = new FieldMeta<OrderField>(
  OrderField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'A set of delivery terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaPaymentMeans = new FieldMeta<OrderField>(
  OrderField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaPaymentTerms = new FieldMeta<OrderField>(
  OrderField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A set of payment terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaTransactionConditions = new FieldMeta<OrderField>(
  OrderField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  TransactionConditionsType.name,
  'A specification of purchasing or sales conditions applying to the whole Order.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  'Sales condition, procurement condition',
  undefined
)

export const OrderFieldMetaAllowanceCharge = new FieldMeta<OrderField>(
  OrderField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A discount or charge that applies to a price component.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaTaxExchangeRate = new FieldMeta<OrderField>(
  OrderField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the tax currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaPricingExchangeRate = new FieldMeta<OrderField>(
  OrderField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the pricing currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaPaymentExchangeRate = new FieldMeta<OrderField>(
  OrderField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaDestinationCountry = new FieldMeta<OrderField>(
  OrderField.DestinationCountry,
  'DestinationCountry',
  'Destination Country',
  CountryType.name,
  'The country of destination (for customs purposes).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaTaxTotal = new FieldMeta<OrderField>(
  OrderField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaAnticipatedMonetaryTotal = new FieldMeta<OrderField>(
  OrderField.AnticipatedMonetaryTotal,
  'AnticipatedMonetaryTotal',
  'Anticipated Monetary Total',
  MonetaryTotalType.name,
  'The total amount for the Order anticipated by the buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderFieldMetaOrderLine = new FieldMeta<OrderField>(
  OrderField.OrderLine,
  'OrderLine',
  'Order Line',
  OrderLineType.name,
  'A line associated with a line in the Catalogue and specifying a kind of item being ordered.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const OrderType: Type<OrderField> = {
  name: 'Order',
  label: 'Order',
  module: TypeModule.doc,
  definition: 'A document used to order goods and services.',
  fields: OrderFieldMap,
}
