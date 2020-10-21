import { AllowanceCharge } from '../cac/AllowanceCharge'
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
import { Measure } from '../cbc/Measure'
import { MonetaryTotal } from '../cac/MonetaryTotal'
import { Numeric } from '../cbc/Numeric'
import { OrderLine } from '../cac/OrderLine'
import { OrderReference } from '../cac/OrderReference'
import { Party } from '../cac/Party'
import { PaymentMeans } from '../cac/PaymentMeans'
import { PaymentTerms } from '../cac/PaymentTerms'
import { Period } from '../cac/Period'
import { Quantity } from '../cbc/Quantity'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { TaxTotal } from '../cac/TaxTotal'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransactionConditions } from '../cac/TransactionConditions'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used to indicate detailed acceptance or rejection of an Order or to make a counter-offer.
 */
export interface OrderResponse {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: [UBLExtensions] | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID?: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID?: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID?: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID?: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Purchase Order Response Number, Acknowledgement of Order Number
   */
  ID: [Identifier]

  /**
   * An identifier for the Order, issued by the Seller.
   * Identifier
   * Cardinality: 0..1
   */
  SalesOrderID?: [Identifier] | undefined

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: [Indicator] | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: [Time] | undefined

  /**
   * A code signifying the type of response for this Order.
   * Code
   * Cardinality: 0..1
   */
  OrderResponseCode?: [Code] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * A code signifying the default currency for this document.
   * Code
   * Cardinality: 0..1
   */
  DocumentCurrencyCode?: [Code] | undefined

  /**
   * A code signifying the currency that is used for all prices in the Order Response.
   * Code
   * Cardinality: 0..1
   */
  PricingCurrencyCode?: [Code] | undefined

  /**
   * A code signifying the currency that is used for all tax amounts in the Order Response.
   * Code
   * Cardinality: 0..1
   */
  TaxCurrencyCode?: [Code] | undefined

  /**
   * The total number of packages contained in the Order Response.
   * Quantity
   * Cardinality: 0..1
   */
  TotalPackagesQuantity?: [Quantity] | undefined

  /**
   * The total gross weight for the Order Response (goods + packaging + transport equipment).
   * Measure
   * Cardinality: 0..1
   */
  GrossWeightMeasure?: [Measure] | undefined

  /**
   * The total net weight for the Order Response (goods + packaging).
   * Measure
   * Cardinality: 0..1
   */
  NetWeightMeasure?: [Measure] | undefined

  /**
   * The total net weight of the goods in the Order Response excluding packaging.
   * Measure
   * Cardinality: 0..1
   */
  NetNetWeightMeasure?: [Measure] | undefined

  /**
   * The total volume of the goods in the Order Response including packaging.
   * Measure
   * Cardinality: 0..1
   */
  GrossVolumeMeasure?: [Measure] | undefined

  /**
   * The total volume of the goods in the Order Response excluding packaging.
   * Measure
   * Cardinality: 0..1
   */
  NetVolumeMeasure?: [Measure] | undefined

  /**
   * A supplementary reference assigned by the buyer, e.g., the CRI in a purchasing card transaction.
   * Text
   * Cardinality: 0..1
   */
  CustomerReference?: [Text] | undefined

  /**
   * An accounting cost code applied to the order as a whole.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode?: [Code] | undefined

  /**
   * An accounting cost code applied to the order as a whole, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost?: [Text] | undefined

  /**
   * The number of Order Lines in this document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric?: [Numeric] | undefined

  /**
   * The period for which the Order Response is valid.
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * A reference to the Order being responded to.
   * Order Reference
   * Cardinality: 1..n
   */
  OrderReference: Array<OrderReference>

  /**
   * A reference to an Order other than the one being responded to.
   * Document Reference
   * Cardinality: 0..n
   */
  OrderDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to an originator document associated with this document.
   * Document Reference
   * Cardinality: 0..1
   */
  OriginatorDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A contract associated with the Order being responded to.
   * Contract
   * Cardinality: 0..n
   */
  Contract?: Array<Contract> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 1
   */
  SellerSupplierParty: [SupplierParty]

  /**
   * The buyer.
   * Customer Party
   * Cardinality: 1
   */
  BuyerCustomerParty: [CustomerParty]

  /**
   * The originator.
   * Customer Party
   * Cardinality: 0..1
   */
  OriginatorCustomerParty?: [CustomerParty] | undefined

  /**
   * A freight forwarder or carrier.
   * Party
   * Cardinality: 0..1
   */
  FreightForwarderParty?: [Party] | undefined

  /**
   * The accounting supplier party.
   * Supplier Party
   * Cardinality: 0..1
   */
  AccountingSupplierParty?: [SupplierParty] | undefined

  /**
   * The accounting customer party.
   * Customer Party
   * Cardinality: 0..1
   */
  AccountingCustomerParty?: [CustomerParty] | undefined

  /**
   * A delivery associated with this document.
   * Delivery
   * Cardinality: 0..n
   */
  Delivery?: Array<Delivery> | undefined

  /**
   * A set of delivery terms associated with this document.
   * Delivery Terms
   * Cardinality: 0..1
   */
  DeliveryTerms?: [DeliveryTerms] | undefined

  /**
   * Expected means of payment.
   * Payment Means
   * Cardinality: 0..n
   */
  PaymentMeans?: Array<PaymentMeans> | undefined

  /**
   * A set of payment terms associated with this document.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms?: Array<PaymentTerms> | undefined

  /**
   * A discount or charge that applies to a price component.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * A specification of purchasing or sales conditions applying to the whole Order.
   * Transaction Conditions
   * Cardinality: 0..1
   */
  TransactionConditions?: [TransactionConditions] | undefined

  /**
   * The exchange rate between the document currency and the tax currency.
   * Exchange Rate
   * Cardinality: 0..1
   */
  TaxExchangeRate?: [ExchangeRate] | undefined

  /**
   * The exchange rate between the document currency and the pricing currency.
   * Exchange Rate
   * Cardinality: 0..1
   */
  PricingExchangeRate?: [ExchangeRate] | undefined

  /**
   * The exchange rate between the document currency and the payment currency.
   * Exchange Rate
   * Cardinality: 0..1
   */
  PaymentExchangeRate?: [ExchangeRate] | undefined

  /**
   * The country of destination (for customs purposes).
   * Country
   * Cardinality: 0..1
   */
  DestinationCountry?: [Country] | undefined

  /**
   * The total amount of a specific type of tax, as calculated by the seller.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * The total amount of the Order (or counter-offer).
   * Monetary Total
   * Cardinality: 0..1
   */
  LegalMonetaryTotal?: [MonetaryTotal] | undefined

  /**
   * A line associated with a line in the Catalogue and specifying a kind of item being ordered.
   * Order Line
   * Cardinality: 0..n
   */
  OrderLine?: Array<OrderLine> | undefined
}
