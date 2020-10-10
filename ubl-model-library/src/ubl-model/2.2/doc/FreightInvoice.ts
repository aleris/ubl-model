import { AllowanceCharge } from '../cac/AllowanceCharge'
import { BillingReference } from '../cac/BillingReference'
import { Code } from '../cbc/Code'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
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
import { ProjectReference } from '../cac/ProjectReference'
import { Shipment } from '../cac/Shipment'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { TaxTotal } from '../cac/TaxTotal'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document stating the charges incurred for a logistics service.
 */
export interface FreightInvoice {
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
   * Alternative business terms: Invoice Number
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
   * Alternative business terms: Invoice Date
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * The date on which Invoice is due.
   * Date
   * Cardinality: 0..1
   */
  DueDate: [Date] | undefined

  /**
   * A code signifying the type of the Freight Invoice.
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
   * The date of the Freight Invoice, used to indicate the point at which tax becomes applicable.
   * Date
   * Cardinality: 0..1
   */
  TaxPointDate: [Date] | undefined

  /**
   * A code signifying the default currency for this document.
   * Code
   * Cardinality: 0..1
   */
  DocumentCurrencyCode: [Code] | undefined

  /**
   * A code signifying the currency used for tax amounts in the Freight Invoice.
   * Code
   * Cardinality: 0..1
   */
  TaxCurrencyCode: [Code] | undefined

  /**
   * A code signifying the currency used for prices in the Freight Invoice.
   * Code
   * Cardinality: 0..1
   */
  PricingCurrencyCode: [Code] | undefined

  /**
   * A code signifying the currency used for payment in the Freight Invoice.
   * Code
   * Cardinality: 0..1
   */
  PaymentCurrencyCode: [Code] | undefined

  /**
   * A code signifying the alternative currency used for payment in the Freight Invoice.
   * Code
   * Cardinality: 0..1
   */
  PaymentAlternativeCurrencyCode: [Code] | undefined

  /**
   * The buyer's accounting code, applied to the Freight Invoice as a whole.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode: [Code] | undefined

  /**
   * The buyer's accounting cost centre, applied to the Freight Invoice as a whole, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost: [Text] | undefined

  /**
   * The number of Invoice Lines in the document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric: [Numeric] | undefined

  /**
   * The time periods to which the Freight Invoice applies.
   * Period
   * Cardinality: 0..n
   */
  InvoicePeriod: Array<Period> | undefined

  /**
   * Details about one or more shipments covered by this Freight Invoice.
   * Shipment
   * Cardinality: 1..n
   */
  Shipment: Array<Shipment>

  /**
   * Reference to an Order associated with this Freight Invoice.
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
   * A reference to an originator document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  OriginatorDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to a contract associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  ContractDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference: Array<DocumentReference> | undefined

  /**
   * A reference to a project associated with this document.
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
   * The accounting supplier party.
   * Supplier Party
   * Cardinality: 1
   */
  AccountingSupplierParty: [SupplierParty]

  /**
   * The accounting customer party.
   * Customer Party
   * Cardinality: 1
   */
  AccountingCustomerParty: [CustomerParty]

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
   * The total withholding tax.
   * Tax Total
   * Cardinality: 0..n
   */
  WithholdingTaxTotal: Array<TaxTotal> | undefined

  /**
   * The total amount payable on the Freight Invoice, including Allowances, Charges, and Taxes.
   * Monetary Total
   * Cardinality: 1
   */
  LegalMonetaryTotal: [MonetaryTotal]

  /**
   * An Invoice Line.
   * Invoice Line
   * Cardinality: 1..n
   */
  InvoiceLine: Array<InvoiceLine>
}
