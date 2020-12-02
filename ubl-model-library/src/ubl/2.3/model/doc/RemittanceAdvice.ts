import { Amount } from '../cbc/Amount'
import { BillingReference } from '../cac/BillingReference'
import { Code } from '../cbc/Code'
import { CustomerParty } from '../cac/CustomerParty'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { Party } from '../cac/Party'
import { PaymentMeans } from '../cac/PaymentMeans'
import { Period } from '../cac/Period'
import { RemittanceAdviceLine } from '../cac/RemittanceAdviceLine'
import { Signature } from '../cac/Signature'
import { SupplierParty } from '../cac/SupplierParty'
import { TaxTotal } from '../cac/TaxTotal'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document that specifies details of an actual payment.
 */
export interface RemittanceAdvice {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID?: Array<Identifier> | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID?: Array<Identifier> | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: Array<Indicator> | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: Array<Date>

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

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
  DocumentCurrencyCode?: Array<Code> | undefined

  /**
   * The totals of all debit amounts for the Remittance Advice.
   * Amount
   * Cardinality: 0..1
   */
  TotalDebitAmount?: Array<Amount> | undefined

  /**
   * The totals of all credit amounts for the Remittance Advice.
   * Amount
   * Cardinality: 0..1
   */
  TotalCreditAmount?: Array<Amount> | undefined

  /**
   * The total payable amount for the Remittance Advice (must be positive).
   * Amount
   * Cardinality: 0..1
   */
  TotalPaymentAmount?: Array<Amount> | undefined

  /**
   * An internal reference to the order for payment from the payer to the payer's bank.
   * Text
   * Cardinality: 0..1
   */
  PaymentOrderReference?: Array<Text> | undefined

  /**
   * An internal reference to the payer's order for payment.
   * Text
   * Cardinality: 0..1
   */
  PayerReference?: Array<Text> | undefined

  /**
   * An internal reference to the order for payment by the invoicing party. This may have been requested of the payer by
   * the payee to accompany the payer's remittance.
   * Text
   * Cardinality: 0..1
   */
  InvoicingPartyReference?: Array<Text> | undefined

  /**
   * The number of Remittance Advice Lines in the document.
   * Numeric
   * Cardinality: 0..1
   */
  LineCountNumeric?: Array<Numeric> | undefined

  /**
   * A period (rather than a specific invoice) associated with this document.
   * Period
   * Cardinality: 0..n
   */
  InvoicePeriod?: Array<Period> | undefined

  /**
   * A reference to a billing document associated with this document.
   * Billing Reference
   * Cardinality: 0..1
   */
  BillingReference?: Array<BillingReference> | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The accounting customer party.
   * Customer Party
   * Cardinality: 1
   */
  AccountingCustomerParty: Array<CustomerParty>

  /**
   * The accounting supplier party.
   * Supplier Party
   * Cardinality: 1
   */
  AccountingSupplierParty: Array<SupplierParty>

  /**
   * The payee.
   * Party
   * Cardinality: 0..1
   */
  PayeeParty?: Array<Party> | undefined

  /**
   * Expected means of payment.
   * Payment Means
   * Cardinality: 0..1
   */
  PaymentMeans?: Array<PaymentMeans> | undefined

  /**
   * The total amount of a specific type of tax.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * A line specifying a balance.
   * Remittance Advice Line
   * Cardinality: 1..n
   */
  RemittanceAdviceLine: Array<RemittanceAdviceLine>
}
