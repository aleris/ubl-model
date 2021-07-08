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
import { MeasureType } from '../cbc/MeasureMeta'
import { MonetaryTotalType } from '../cac/MonetaryTotalMeta'
import { NumericType } from '../cbc/NumericMeta'
import { OrderLineType } from '../cac/OrderLineMeta'
import { OrderReferenceType } from '../cac/OrderReferenceMeta'
import { PartyType } from '../cac/PartyMeta'
import { PaymentMeansType } from '../cac/PaymentMeansMeta'
import { PaymentTermsType } from '../cac/PaymentTermsMeta'
import { PeriodType } from '../cac/PeriodMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { SignatureType } from '../cac/SignatureMeta'
import { SupplierPartyType } from '../cac/SupplierPartyMeta'
import { TaxTotalType } from '../cac/TaxTotalMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransactionConditionsType } from '../cac/TransactionConditionsMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  OrderChangeDocumentReference = 'OrderChangeDocumentReference',
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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const OrderResponseFieldMetaUBLVersionID = new FieldMeta<OrderResponseField>(
  OrderResponseField.UBLVersionID,
  'UBLVersionID',
  'UBL Version Identifier',
  IdentifierType.name,
  'Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that might be encountered in the current instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.0.5'
)

export const OrderResponseFieldMetaCustomizationID = new FieldMeta<OrderResponseField>(
  OrderResponseField.CustomizationID,
  'CustomizationID',
  'Customization Identifier',
  IdentifierType.name,
  'Identifies a user-defined customization of UBL.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'NES'
)

export const OrderResponseFieldMetaProfileID = new FieldMeta<OrderResponseField>(
  OrderResponseField.ProfileID,
  'ProfileID',
  'Profile Identifier',
  IdentifierType.name,
  'Identifies a user-defined profile of the customization of UBL being used.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BasicProcurementProcess'
)

export const OrderResponseFieldMetaProfileExecutionID = new FieldMeta<OrderResponseField>(
  OrderResponseField.ProfileExecutionID,
  'ProfileExecutionID',
  'Profile Execution Identifier',
  IdentifierType.name,
  'Identifies an instance of executing a profile, to associate all transactions in a collaboration.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'BPP-1001'
)

export const OrderResponseFieldMetaID = new FieldMeta<OrderResponseField>(
  OrderResponseField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this document, assigned by the sender.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  'Purchase Order Response Number, Acknowledgement of Order Number',
  undefined
)

export const OrderResponseFieldMetaSalesOrderID = new FieldMeta<OrderResponseField>(
  OrderResponseField.SalesOrderID,
  'SalesOrderID',
  'Sales Order Identifier',
  IdentifierType.name,
  'An identifier for the Order, issued by the Seller.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaCopyIndicator = new FieldMeta<OrderResponseField>(
  OrderResponseField.CopyIndicator,
  'CopyIndicator',
  'Copy Indicator',
  IndicatorType.name,
  'Indicates whether this document is a copy (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaUUID = new FieldMeta<OrderResponseField>(
  OrderResponseField.UUID,
  'UUID',
  'UUID',
  IdentifierType.name,
  'A universally unique identifier for an instance of this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaIssueDate = new FieldMeta<OrderResponseField>(
  OrderResponseField.IssueDate,
  'IssueDate',
  'Issue Date',
  DateType.name,
  'The date, assigned by the sender, on which this document was issued.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaIssueTime = new FieldMeta<OrderResponseField>(
  OrderResponseField.IssueTime,
  'IssueTime',
  'Issue Time',
  TimeType.name,
  'The time, assigned by the sender, at which this document was issued.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaOrderResponseCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.OrderResponseCode,
  'OrderResponseCode',
  'Order Response Code',
  CodeType.name,
  'A code signifying the type of response for this Order.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaNote = new FieldMeta<OrderResponseField>(
  OrderResponseField.Note,
  'Note',
  'Note',
  TextType.name,
  'Free-form text pertinent to this document, conveying information that is not contained explicitly in other structures.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaDocumentCurrencyCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.DocumentCurrencyCode,
  'DocumentCurrencyCode',
  'Document Currency Code',
  CodeType.name,
  'A code signifying the default currency for this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaPricingCurrencyCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.PricingCurrencyCode,
  'PricingCurrencyCode',
  'Pricing Currency Code',
  CodeType.name,
  'A code signifying the currency that is used for all prices in the Order Response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaTaxCurrencyCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.TaxCurrencyCode,
  'TaxCurrencyCode',
  'Tax Currency Code',
  CodeType.name,
  'A code signifying the currency that is used for all tax amounts in the Order Response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaTotalPackagesQuantity = new FieldMeta<OrderResponseField>(
  OrderResponseField.TotalPackagesQuantity,
  'TotalPackagesQuantity',
  'Total Packages Quantity',
  QuantityType.name,
  'The total number of packages contained in the Order Response.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaGrossWeightMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.GrossWeightMeasure,
  'GrossWeightMeasure',
  'Gross Weight',
  MeasureType.name,
  'The total gross weight for the Order Response (goods + packaging + transport equipment).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaNetWeightMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.NetWeightMeasure,
  'NetWeightMeasure',
  'Net Weight',
  MeasureType.name,
  'The total net weight for the Order Response (goods + packaging).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaNetNetWeightMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.NetNetWeightMeasure,
  'NetNetWeightMeasure',
  'Net Net Weight',
  MeasureType.name,
  'The total net weight of the goods in the Order Response excluding packaging.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaGrossVolumeMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.GrossVolumeMeasure,
  'GrossVolumeMeasure',
  'Gross Volume',
  MeasureType.name,
  'The total volume of the goods in the Order Response including packaging.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaNetVolumeMeasure = new FieldMeta<OrderResponseField>(
  OrderResponseField.NetVolumeMeasure,
  'NetVolumeMeasure',
  'Net Volume',
  MeasureType.name,
  'The total volume of the goods in the Order Response excluding packaging.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaCustomerReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.CustomerReference,
  'CustomerReference',
  'Customer Reference',
  TextType.name,
  'A supplementary reference assigned by the buyer, e.g., the CRI in a purchasing card transaction.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaAccountingCostCode = new FieldMeta<OrderResponseField>(
  OrderResponseField.AccountingCostCode,
  'AccountingCostCode',
  'Accounting Cost Code',
  CodeType.name,
  'An accounting cost code applied to the order as a whole.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaAccountingCost = new FieldMeta<OrderResponseField>(
  OrderResponseField.AccountingCost,
  'AccountingCost',
  'Accounting Cost',
  TextType.name,
  'An accounting cost code applied to the order as a whole, expressed as text.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaLineCountNumeric = new FieldMeta<OrderResponseField>(
  OrderResponseField.LineCountNumeric,
  'LineCountNumeric',
  'Line Count',
  NumericType.name,
  'The number of Order Lines in this document.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const OrderResponseFieldMetaValidityPeriod = new FieldMeta<OrderResponseField>(
  OrderResponseField.ValidityPeriod,
  'ValidityPeriod',
  'Validity Period',
  PeriodType.name,
  'The period for which the Order Response is valid.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaOrderReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.OrderReference,
  'OrderReference',
  'Order Reference',
  OrderReferenceType.name,
  'A reference to the Order being responded to.',
  FieldCardinality.Multi,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaOrderDocumentReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.OrderDocumentReference,
  'OrderDocumentReference',
  'Order Document Reference',
  DocumentReferenceType.name,
  'A reference to an Order other than the one being responded to.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaOrderChangeDocumentReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.OrderChangeDocumentReference,
  'OrderChangeDocumentReference',
  'Order Change Document Reference',
  DocumentReferenceType.name,
  'A reference to an Order Change being responded to.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaOriginatorDocumentReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.OriginatorDocumentReference,
  'OriginatorDocumentReference',
  'Originator Document Reference',
  DocumentReferenceType.name,
  'A reference to an originator document associated with this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaAdditionalDocumentReference = new FieldMeta<OrderResponseField>(
  OrderResponseField.AdditionalDocumentReference,
  'AdditionalDocumentReference',
  'Additional Document Reference',
  DocumentReferenceType.name,
  'A reference to an additional document associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaContract = new FieldMeta<OrderResponseField>(
  OrderResponseField.Contract,
  'Contract',
  'Contract',
  ContractType.name,
  'A contract associated with the Order being responded to.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaSignature = new FieldMeta<OrderResponseField>(
  OrderResponseField.Signature,
  'Signature',
  'Signature',
  SignatureType.name,
  'A signature applied to this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaSellerSupplierParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.SellerSupplierParty,
  'SellerSupplierParty',
  'Seller Supplier Party',
  SupplierPartyType.name,
  'The seller.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaBuyerCustomerParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.BuyerCustomerParty,
  'BuyerCustomerParty',
  'Buyer Customer Party',
  CustomerPartyType.name,
  'The buyer.',
  FieldCardinality.Uni,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaOriginatorCustomerParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.OriginatorCustomerParty,
  'OriginatorCustomerParty',
  'Originator Customer Party',
  CustomerPartyType.name,
  'The originator.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaFreightForwarderParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.FreightForwarderParty,
  'FreightForwarderParty',
  'Freight Forwarder Party',
  PartyType.name,
  'A freight forwarder or carrier.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaAccountingSupplierParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.AccountingSupplierParty,
  'AccountingSupplierParty',
  'Accounting Supplier Party',
  SupplierPartyType.name,
  'The accounting supplier party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaAccountingCustomerParty = new FieldMeta<OrderResponseField>(
  OrderResponseField.AccountingCustomerParty,
  'AccountingCustomerParty',
  'Accounting Customer Party',
  CustomerPartyType.name,
  'The accounting customer party.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaDelivery = new FieldMeta<OrderResponseField>(
  OrderResponseField.Delivery,
  'Delivery',
  'Delivery',
  DeliveryType.name,
  'A delivery associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaDeliveryTerms = new FieldMeta<OrderResponseField>(
  OrderResponseField.DeliveryTerms,
  'DeliveryTerms',
  'Delivery Terms',
  DeliveryTermsType.name,
  'A set of delivery terms associated with this document.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaPaymentMeans = new FieldMeta<OrderResponseField>(
  OrderResponseField.PaymentMeans,
  'PaymentMeans',
  'Payment Means',
  PaymentMeansType.name,
  'Expected means of payment.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaPaymentTerms = new FieldMeta<OrderResponseField>(
  OrderResponseField.PaymentTerms,
  'PaymentTerms',
  'Payment Terms',
  PaymentTermsType.name,
  'A set of payment terms associated with this document.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaAllowanceCharge = new FieldMeta<OrderResponseField>(
  OrderResponseField.AllowanceCharge,
  'AllowanceCharge',
  'Allowance Charge',
  AllowanceChargeType.name,
  'A discount or charge that applies to a price component.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaTransactionConditions = new FieldMeta<OrderResponseField>(
  OrderResponseField.TransactionConditions,
  'TransactionConditions',
  'Transaction Conditions',
  TransactionConditionsType.name,
  'A specification of purchasing or sales conditions applying to the whole Order.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaTaxExchangeRate = new FieldMeta<OrderResponseField>(
  OrderResponseField.TaxExchangeRate,
  'TaxExchangeRate',
  'Tax Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the tax currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaPricingExchangeRate = new FieldMeta<OrderResponseField>(
  OrderResponseField.PricingExchangeRate,
  'PricingExchangeRate',
  'Pricing Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the pricing currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaPaymentExchangeRate = new FieldMeta<OrderResponseField>(
  OrderResponseField.PaymentExchangeRate,
  'PaymentExchangeRate',
  'Payment Exchange Rate',
  ExchangeRateType.name,
  'The exchange rate between the document currency and the payment currency.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaDestinationCountry = new FieldMeta<OrderResponseField>(
  OrderResponseField.DestinationCountry,
  'DestinationCountry',
  'Destination Country',
  CountryType.name,
  'The country of destination (for customs purposes).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaTaxTotal = new FieldMeta<OrderResponseField>(
  OrderResponseField.TaxTotal,
  'TaxTotal',
  'Tax Total',
  TaxTotalType.name,
  'The total amount of a specific type of tax, as calculated by the seller.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaLegalMonetaryTotal = new FieldMeta<OrderResponseField>(
  OrderResponseField.LegalMonetaryTotal,
  'LegalMonetaryTotal',
  'Legal Monetary Total',
  MonetaryTotalType.name,
  'The total amount of the Order (or counter-offer).',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const OrderResponseFieldMetaOrderLine = new FieldMeta<OrderResponseField>(
  OrderResponseField.OrderLine,
  'OrderLine',
  'Order Line',
  OrderLineType.name,
  'A line associated with a line in the Catalogue and specifying a kind of item being ordered.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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
  public static readonly OrderChangeDocumentReference = OrderResponseFieldMetaOrderChangeDocumentReference
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
  [OrderResponseField.OrderChangeDocumentReference, OrderResponseFieldMetaOrderChangeDocumentReference],
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

export const OrderResponseType: Type<OrderResponseField> = {
  name: 'OrderResponse',
  label: 'Order Response',
  module: TypeModule.doc,
  definition: 'A document used to indicate detailed acceptance or rejection of an Order or to make a counter-offer.',
  fields: OrderResponseFieldMap,
}
