import { AllowanceCharge } from '../cac/AllowanceCharge'
import { CatalogueReference } from '../cac/CatalogueReference'
import { Code } from '../cbc/Code'
import { Contract } from '../cac/Contract'
import { Country } from '../cac/Country'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { Delivery } from '../cac/Delivery'
import { DeliveryTerms } from '../cac/DeliveryTerms'
import { DocumentReference } from '../cac/DocumentReference'
import { ExchangeRate } from '../cac/ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { MonetaryTotal } from '../cac/MonetaryTotal'
import { Numeric } from '../cbc/Numeric'
import { OrderLine } from '../cac/OrderLine'
import { Party } from '../cac/Party'
import { PaymentMeans } from '../cac/PaymentMeans'
import { PaymentTerms } from '../cac/PaymentTerms'
import { Period } from '../cac/Period'
import { ProjectReference } from '../cac/ProjectReference'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { TaxTotal } from '../cac/TaxTotal'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransactionConditions } from '../cac/TransactionConditions'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used to order goods and services.
 */
export interface Order {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions: [UBLExtensions] | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Purchase Order Number, Order Number
   */
  ID: [Identifier]

  /**
   * An identifier for the Order, assigned by the seller.
   * Identifier
   * Cardinality: 0..1
   */
  SalesOrderID: [Identifier] | undefined

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator: [Indicator] | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   * Alternative business terms: Order Date
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * A code signifying the type of Order.
   * Code
   * Cardinality: 0..1
   */
  OrderTypeCode: [Code] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * A code signifying the currency requested for amount totals in Invoices related to this Order.
   * Code
   * Cardinality: 0..1
   */
  RequestedInvoiceCurrencyCode: [Code] | undefined

  /**
   * A code signifying the default currency for this document.
   * Code
   * Cardinality: 0..1
   */
  DocumentCurrencyCode: [Code] | undefined

  /**
   * A code signifying the currency used for all prices in the Order.
   * Code
   * Cardinality: 0..1
   */
  PricingCurrencyCode: [Code] | undefined

  /**
   * A code signifying the currency requested for tax amounts in Invoices related to this Order.
   * Code
   * Cardinality: 0..1
   */
  TaxCurrencyCode: [Code] | undefined

  /**
   * A supplementary reference for the Order.
   * Text
   * Cardinality: 0..1
   */
  CustomerReference: [Text] | undefined

  /**
   * The buyer's accounting code, applied to the Order as a whole.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode: [Code] | undefined

  /**
   * The buyer's accounting cost centre, applied to the Order as a whole, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost: [Text] | undefined

  /**
   * The number of Order Lines in the document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric: [Numeric] | undefined

  /**
   * The period for which the Order is valid.
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod: Array<Period> | undefined

  /**
   * A reference to a Quotation.
   * Document Reference
   * Cardinality: 0..1
   */
  QuotationDocumentReference: [DocumentReference] | undefined

  /**
   * A reference to another Order.
   * Document Reference
   * Cardinality: 0..n
   */
  OrderDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to an originator document associated with this document.
   * Document Reference
   * Cardinality: 0..1
   */
  OriginatorDocumentReference: [DocumentReference] | undefined

  /**
   * A reference to the Catalogue on which this Order is based.
   * Catalogue Reference
   * Cardinality: 0..1
   */
  CatalogueReference: [CatalogueReference] | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference: Array<DocumentReference> | undefined

  /**
   * A contracts associated with this Order.
   * Contract
   * Cardinality: 0..n
   */
  Contract: Array<Contract> | undefined

  /**
   * A project with which this Order is associated.
   * Project Reference
   * Cardinality: 0..n
   */
  ProjectReference: Array<ProjectReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The buyer.
   * Customer Party
   * Cardinality: 1
   */
  BuyerCustomerParty: [CustomerParty]

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 1
   */
  SellerSupplierParty: [SupplierParty]

  /**
   * The originator.
   * Customer Party
   * Cardinality: 0..1
   */
  OriginatorCustomerParty: [CustomerParty] | undefined

  /**
   * A freight forwarder or carrier.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Carrier
   */
  FreightForwarderParty: [Party] | undefined

  /**
   * The accounting customer party.
   * Customer Party
   * Cardinality: 0..1
   */
  AccountingCustomerParty: [CustomerParty] | undefined

  /**
   * A delivery associated with this document.
   * Delivery
   * Cardinality: 0..n
   */
  Delivery: Array<Delivery> | undefined

  /**
   * A set of delivery terms associated with this document.
   * Delivery Terms
   * Cardinality: 0..n
   */
  DeliveryTerms: Array<DeliveryTerms> | undefined

  /**
   * Expected means of payment.
   * Payment Means
   * Cardinality: 0..n
   */
  PaymentMeans: Array<PaymentMeans> | undefined

  /**
   * A set of payment terms associated with this document.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms: Array<PaymentTerms> | undefined

  /**
   * A specification of purchasing or sales conditions applying to the whole Order.
   * Transaction Conditions
   * Cardinality: 0..1
   * Alternative business terms: Sales condition, procurement condition
   */
  TransactionConditions: [TransactionConditions] | undefined

  /**
   * A discount or charge that applies to a price component.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge: Array<AllowanceCharge> | undefined

  /**
   * The exchange rate between the document currency and the tax currency.
   * Exchange Rate
   * Cardinality: 0..1
   */
  TaxExchangeRate: [ExchangeRate] | undefined

  /**
   * The exchange rate between the document currency and the pricing currency.
   * Exchange Rate
   * Cardinality: 0..1
   */
  PricingExchangeRate: [ExchangeRate] | undefined

  /**
   * The exchange rate between the document currency and the payment currency.
   * Exchange Rate
   * Cardinality: 0..1
   */
  PaymentExchangeRate: [ExchangeRate] | undefined

  /**
   * The country of destination (for customs purposes).
   * Country
   * Cardinality: 0..1
   */
  DestinationCountry: [Country] | undefined

  /**
   * The total amount of a specific type of tax.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal: Array<TaxTotal> | undefined

  /**
   * The total amount for the Order anticipated by the buyer.
   * Monetary Total
   * Cardinality: 0..1
   */
  AnticipatedMonetaryTotal: [MonetaryTotal] | undefined

  /**
   * A line associated with a line in the Catalogue and specifying a kind of item being ordered.
   * Order Line
   * Cardinality: 1..n
   */
  OrderLine: Array<OrderLine>
}
