import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { BillingReference } from './BillingReference'
import { Code } from '../cbc/Code'
import { CustomerParty } from './CustomerParty'
import { DocumentReference } from './DocumentReference'
import { ExchangeRate } from './ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from './Party'
import { Payment } from './Payment'
import { PaymentMeans } from './PaymentMeans'
import { PaymentTerms } from './PaymentTerms'
import { Period } from './Period'
import { SupplierParty } from './SupplierParty'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a line in a Statement of account.
 */
export interface StatementLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this statement line.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * A universally unique identifier for this statement line.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * An indication that this statement line contains an outstanding balance from the previous bill(s) (true) or does not
   * (false).
   * Indicator
   * Cardinality: 0..1
   */
  BalanceBroughtForwardIndicator?: Array<Indicator> | undefined

  /**
   * The amount debited on this statement line.
   * Amount
   * Cardinality: 0..1
   */
  DebitLineAmount?: Array<Amount> | undefined

  /**
   * The amount credited on this statement line.
   * Amount
   * Cardinality: 0..1
   */
  CreditLineAmount?: Array<Amount> | undefined

  /**
   * The balance amount on this statement line.
   * Amount
   * Cardinality: 0..1
   */
  BalanceAmount?: Array<Amount> | undefined

  /**
   * A code signifying the business purpose for this payment.
   * Code
   * Cardinality: 0..1
   */
  PaymentPurposeCode?: Array<Code> | undefined

  /**
   * A means of payment associated with this statement line.
   * Payment Means
   * Cardinality: 0..1
   */
  PaymentMeans?: Array<PaymentMeans> | undefined

  /**
   * A specification of payment terms associated with this statement line.
   * Payment Terms
   * Cardinality: 0..n
   */
  PaymentTerms?: Array<PaymentTerms> | undefined

  /**
   * The buyer associated with this statement line.
   * Customer Party
   * Cardinality: 0..1
   */
  BuyerCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The seller/supplier associated with this statement line.
   * Supplier Party
   * Cardinality: 0..1
   */
  SellerSupplierParty?: Array<SupplierParty> | undefined

  /**
   * The originating party.
   * Customer Party
   * Cardinality: 0..1
   */
  OriginatorCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The Accounting Customer Party related to the statement information reported on this Statement Line.
   * Customer Party
   * Cardinality: 0..1
   */
  AccountingCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The Accounting Supplier Party related to the statement information reported on this Statement Line.
   * Supplier Party
   * Cardinality: 0..1
   */
  AccountingSupplierParty?: Array<SupplierParty> | undefined

  /**
   * The payee.
   * Party
   * Cardinality: 0..1
   */
  PayeeParty?: Array<Party> | undefined

  /**
   * An invoice period to which this statement line applies.
   * Period
   * Cardinality: 0..n
   */
  InvoicePeriod?: Array<Period> | undefined

  /**
   * A reference to a billing document associated with this statement line.
   * Billing Reference
   * Cardinality: 0..n
   */
  BillingReference?: Array<BillingReference> | undefined

  /**
   * A reference to a document associated with this statement line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * The rate of exchange between the currency of the Statement and the currency of the document described in the
   * BillingReference.
   * Exchange Rate
   * Cardinality: 0..1
   */
  ExchangeRate?: Array<ExchangeRate> | undefined

  /**
   * A charge or discount price component associated with this statement line.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * A collected payment.
   * Payment
   * Cardinality: 0..n
   */
  CollectedPayment?: Array<Payment> | undefined
}
