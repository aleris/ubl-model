import { AllowanceCharge } from '../cac/AllowanceCharge'
import { BillingReference } from '../cac/BillingReference'
import { Code } from '../cbc/Code'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { Delivery } from '../cac/Delivery'
import { DeliveryTerms } from '../cac/DeliveryTerms'
import { DocumentReference } from '../cac/DocumentReference'
import { ExchangeRate } from '../cac/ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { InvoiceLine } from '../cac/InvoiceLine'
import { MonetaryTotal } from '../cac/MonetaryTotal'
import { Numeric } from '../cbc/Numeric'
import { OrderReference } from '../cac/OrderReference'
import { Party } from '../cac/Party'
import { Payment } from '../cac/Payment'
import { PaymentMeans } from '../cac/PaymentMeans'
import { PaymentTerms } from '../cac/PaymentTerms'
import { Period } from '../cac/Period'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { TaxTotal } from '../cac/TaxTotal'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * An Invoice document created by the Customer (rather than the Supplier) in a Self Billing relationship.
 */
export interface SelfBilledInvoice {
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
   */
  ProfileExecutionID: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

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
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * The date of the invoice for tax purposes, in accordance with the applicable tax regulation.
   * Date
   * Cardinality: 0..1
   */
  TaxPointDate: [Date] | undefined

  /**
   * A code signifying the type of invoice.
   * Code
   * Cardinality: 0..1
   */
  InvoiceTypeCode: [Code] | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * A code signifying the default currency for this document.
   * Code
   * Cardinality: 0..1
   */
  DocumentCurrencyCode: [Code] | undefined

  /**
   * A code signifying the currency used for tax amounts in the Invoice.
   * Code
   * Cardinality: 0..1
   */
  TaxCurrencyCode: [Code] | undefined

  /**
   * A code signifying the currency used for prices in the Invoice.
   * Code
   * Cardinality: 0..1
   */
  PricingCurrencyCode: [Code] | undefined

  /**
   * A code signifying the currency used for payment in the Invoice.
   * Code
   * Cardinality: 0..1
   */
  PaymentCurrencyCode: [Code] | undefined

  /**
   * A code signifying the alternative currency used for payment in the Invoice.
   * Code
   * Cardinality: 0..1
   */
  PaymentAlternativeCurrencyCode: [Code] | undefined

  /**
   * An accounting cost code, applied to the Invoice as a whole.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode: [Code] | undefined

  /**
   * An accounting cost code, applied to the Invoice as a whole, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost: [Text] | undefined

  /**
   * The number of Invoice Lines in this document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric: [Numeric] | undefined

  /**
   * A period to which the Self Billed Invoice applies.
   * Period
   * Cardinality: 0..n
   */
  InvoicePeriod: Array<Period> | undefined

  /**
   * A reference to the Order with which this Invoice is associated.
   * Order Reference
   * Cardinality: 0..1
   */
  OrderReference: [OrderReference] | undefined

  /**
   * A reference to a billing document associated with this document.
   * Billing Reference
   * Cardinality: 0..n
   */
  BillingReference: Array<BillingReference> | undefined

  /**
   * A reference to a contract associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  ContractDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to a Despatch Advice associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  DespatchDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to a Receipt Advice associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  ReceiptDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to a Statement associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  StatementDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to an originator document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  OriginatorDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The accounting customer party.
   * Customer Party
   * Cardinality: 1
   */
  AccountingCustomerParty: [CustomerParty]

  /**
   * The accounting supplier party.
   * Supplier Party
   * Cardinality: 1
   */
  AccountingSupplierParty: [SupplierParty]

  /**
   * The buyer.
   * Customer Party
   * Cardinality: 0..1
   */
  BuyerCustomerParty: [CustomerParty] | undefined

  /**
   * The seller.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty: [SupplierParty] | undefined

  /**
   * The payee.
   * Party
   * Cardinality: 0..1
   */
  PayeeParty: [Party] | undefined

  /**
   * The tax representative.
   * Party
   * Cardinality: 0..1
   */
  TaxRepresentativeParty: [Party] | undefined

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
   * Cardinality: 0..1
   */
  PaymentMeans: [PaymentMeans] | undefined

  /**
   * A set of payment terms associated with this document.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms: Array<PaymentTerms> | undefined

  /**
   * A prepaid payment.
   * Payment
   * Cardinality: 0..n
   */
  PrepaidPayment: Array<Payment> | undefined

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
   * The exchange rate between the document currency and the payment alternative currency.
   * Exchange Rate
   * Cardinality: 0..1
   */
  PaymentAlternativeExchangeRate: [ExchangeRate] | undefined

  /**
   * The total amount of a specific type of tax.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal: Array<TaxTotal> | undefined

  /**
   * A set of totals associated with this Invoice that are required for the Invoice to be a legal document.
   * Monetary Total
   * Cardinality: 1
   */
  LegalMonetaryTotal: [MonetaryTotal]

  /**
   * A line describing an Invoice Item.
   * Invoice Line
   * Cardinality: 1..n
   */
  InvoiceLine: Array<InvoiceLine>
}
