import { AllowanceCharge } from '../cac/AllowanceCharge'
import { Code } from '../cbc/Code'
import { Contract } from '../cac/Contract'
import { Country } from '../cac/Country'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { Delivery } from '../cac/Delivery'
import { DeliveryTerms } from '../cac/DeliveryTerms'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { MonetaryTotal } from '../cac/MonetaryTotal'
import { Numeric } from '../cbc/Numeric'
import { PaymentMeans } from '../cac/PaymentMeans'
import { Period } from '../cac/Period'
import { QuotationLine } from '../cac/QuotationLine'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { TaxTotal } from '../cac/TaxTotal'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransactionConditions } from '../cac/TransactionConditions'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used to quote for the provision of goods and services.
 */
export interface Quotation {
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
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID?: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the subset of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID?: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileExecutionID?: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

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
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * A code signifying the currency used for all prices in the Quotation.
   * Code
   * Cardinality: 0..1
   */
  PricingCurrencyCode?: [Code] | undefined

  /**
   * The number of Quotation Lines in this document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric?: [Numeric] | undefined

  /**
   * The period for which the Quotation is valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: [Period] | undefined

  /**
   * A reference to the Request for Quotation associated with this Quotation.
   * Document Reference
   * Cardinality: 0..1
   */
  RequestForQuotationDocumentReference?: [DocumentReference] | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A contract associated with this Quotation.
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
   * Association to the Buyer.
   * Customer Party
   * Cardinality: 0..1
   */
  BuyerCustomerParty?: [CustomerParty] | undefined

  /**
   * The originator.
   * Customer Party
   * Cardinality: 0..1
   */
  OriginatorCustomerParty?: [CustomerParty] | undefined

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
   * Cardinality: 0..1
   */
  PaymentMeans?: [PaymentMeans] | undefined

  /**
   * A specification of purchasing, sales, or payment conditions applying to Orders related to this Quotation.
   * Transaction Conditions
   * Cardinality: 0..1
   */
  TransactionConditions?: [TransactionConditions] | undefined

  /**
   * A discount or charge that applies to a price component.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * The country of destination of potential orders (for customs purposes).
   * Country
   * Cardinality: 0..1
   */
  DestinationCountry?: [Country] | undefined

  /**
   * The total amount of a specific type of tax.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * The total amount of the Quotation.
   * Monetary Total
   * Cardinality: 1
   */
  QuotedMonetaryTotal: [MonetaryTotal]

  /**
   * A line quoting a cost for one kind of item.
   * Quotation Line
   * Cardinality: 1..n
   */
  QuotationLine: Array<QuotationLine>
}
