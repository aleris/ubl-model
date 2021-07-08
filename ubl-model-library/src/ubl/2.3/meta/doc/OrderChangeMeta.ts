import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from '../cac/AllowanceChargeMeta'
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
import { OrderReferenceType } from '../cac/OrderReferenceMeta'
import { PartyType } from '../cac/PartyMeta'
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PaymentTermsType } from '../cac/PaymentTermsMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransactionConditionsType } from '../cac/TransactionConditionsMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const OrderChangeFieldMetaUBLVersionID = new FieldMeta<OrderChangeField>(
  OrderChangeField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const OrderChangeFieldMetaCustomizationID = new FieldMeta<OrderChangeField>(
  OrderChangeField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL for a specific use.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const OrderChangeFieldMetaProfileID = new FieldMeta<OrderChangeField>(
  OrderChangeField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const OrderChangeFieldMetaProfileExecutionID = new FieldMeta<OrderChangeField>(
  OrderChangeField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const OrderChangeFieldMetaID = new FieldMeta<OrderChangeField>(
  OrderChangeField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaSalesOrderID = new FieldMeta<OrderChangeField>(
  OrderChangeField.SalesOrderID,
  'SalesOrderID',
  'Sales Order Identifier',
  IdentifierType.name,
  'An identifier for the Order Change, assigned by the seller.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaCopyIndicator = new FieldMeta<OrderChangeField>(
  OrderChangeField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaUUID = new FieldMeta<OrderChangeField>(
  OrderChangeField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaIssueDate = new FieldMeta<OrderChangeField>(
  OrderChangeField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaIssueTime = new FieldMeta<OrderChangeField>(
  OrderChangeField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaSequenceNumberID = new FieldMeta<OrderChangeField>(
  OrderChangeField.SequenceNumberID,
  'SequenceNumberID',
  'Sequence Number',
  IdentifierType.name,
  'The Order Change Sequence Number assigned by the Buyer to ensure the proper sequencing of changes.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaNote = new FieldMeta<OrderChangeField>(
  OrderChangeField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaRequestedInvoiceCurrencyCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.RequestedInvoiceCurrencyCode,
  'RequestedInvoiceCurrencyCode',
  'Requested Invoice Currency Code',
  CodeType.name,
  'A code signifying he currency requested for amount totals in Invoices related to this Order Change.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaDocumentCurrencyCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaPricingCurrencyCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  CodeType.name,
  'A code signifying the currency that is used for all prices in the Order Change.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaTaxCurrencyCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  CodeType.name,
  'A code signifying the currency requested for tax amounts in Invoices related to this Order Change.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaCustomerReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.CustomerReference,
  'CustomerReference',
  'Customer Reference',
  TextType.name,
  'A supplementary reference for the transaction (e.g., CRI when using purchasing card).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaAccountingCostCode = new FieldMeta<OrderChangeField>(
  OrderChangeField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'The buyer\'s accounting code, applied to the Order Change as a whole.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaAccountingCost = new FieldMeta<OrderChangeField>(
  OrderChangeField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'The buyer\'s accounting code, applied to the Order Change as a whole, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaLineCountNumeric = new FieldMeta<OrderChangeField>(
  OrderChangeField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Order Change lines in the document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderChangeFieldMetaValidityPeriod = new FieldMeta<OrderChangeField>(
  OrderChangeField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'A period during which the Order Change is valid.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaOrderReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'A reference to the Order being changed.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaQuotationDocumentReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.QuotationDocumentReference,
  'QuotationDocumentReference',
  'Quotation Document Reference',
  DocumentReferenceType.name,
  'A reference to a Quotation.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaOriginatorDocumentReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Originator Document Reference',
  DocumentReferenceType.name,
  'A reference to an originator document associated with this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaAdditionalDocumentReference = new FieldMeta<OrderChangeField>(
  OrderChangeField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaContract = new FieldMeta<OrderChangeField>(
  OrderChangeField.Contract,
  'Contract',
  'Contract',
  ContractType.name,
  'A contract associated with the Order being changed.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaSignature = new FieldMeta<OrderChangeField>(
  OrderChangeField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaBuyerCustomerParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaSellerSupplierParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaOriginatorCustomerParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originator.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaFreightForwarderParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  PartyType.name,
  'A freight forwarder or carrier.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaAccountingCustomerParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaAccountingSupplierParty = new FieldMeta<OrderChangeField>(
  OrderChangeField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The accounting supplier party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaDelivery = new FieldMeta<OrderChangeField>(
  OrderChangeField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaDeliveryTerms = new FieldMeta<OrderChangeField>(
  OrderChangeField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'A set of delivery terms associated with this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaPaymentMeans = new FieldMeta<OrderChangeField>(
  OrderChangeField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaPaymentTerms = new FieldMeta<OrderChangeField>(
  OrderChangeField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A set of payment terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaTransactionConditions = new FieldMeta<OrderChangeField>(
  OrderChangeField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  TransactionConditionsType.name,
  'Purchasing, sales, or payment conditions applying to the whole Order being changed.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaAllowanceCharge = new FieldMeta<OrderChangeField>(
  OrderChangeField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A discount or charge that applies to a price component.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaTaxExchangeRate = new FieldMeta<OrderChangeField>(
  OrderChangeField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the tax currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaPricingExchangeRate = new FieldMeta<OrderChangeField>(
  OrderChangeField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the pricing currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaPaymentExchangeRate = new FieldMeta<OrderChangeField>(
  OrderChangeField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaDestinationCountry = new FieldMeta<OrderChangeField>(
  OrderChangeField.DestinationCountry,
  'DestinationCountry',
  'Destination Country',
  CountryType.name,
  'The country of destination (for customs purposes).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaTaxTotal = new FieldMeta<OrderChangeField>(
  OrderChangeField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaAnticipatedMonetaryTotal = new FieldMeta<OrderChangeField>(
  OrderChangeField.AnticipatedMonetaryTotal,
  'AnticipatedMonetaryTotal',
  'Anticipated Monetary Total',
  MonetaryTotalType.name,
  'The amount of change to the total cost of the order anticipated by the buyer.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderChangeFieldMetaOrderLine = new FieldMeta<OrderChangeField>(
  OrderChangeField.OrderLine,
  'OrderLine',
  'Order Line',
  OrderLineType.name,
  'An association to one or more (changed) Order Lines.',
  FieldCardinality.Multi,
  TypeModule.cac,
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

export const OrderChangeType: Type<OrderChangeField> = {
  name: 'OrderChange',
  label: 'Order Change',
  module: TypeModule.doc,
  definition: 'A document used to specify changes to an existing Order.',
  fields: OrderChangeFieldMap,
}
