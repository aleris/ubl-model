import { Amount } from '../cbc/Amount'
import { BillingReference } from './BillingReference'
import { Code } from '../cbc/Code'
import { CustomerParty } from './CustomerParty'
import { DocumentReference } from './DocumentReference'
import { ExchangeRate } from './ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Period } from './Period'
import { SupplierParty } from './SupplierParty'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a line in a Remittance Advice.
 */
export interface RemittanceAdviceLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this remittance advice line.
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
   * A universally unique identifier for this remittance advice line.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * The amount debited on this remittance advice line.
   * Amount
   * Cardinality: 0..1
   */
  DebitLineAmount?: Array<Amount> | undefined

  /**
   * The amount credited on this remittance advice line.
   * Amount
   * Cardinality: 0..1
   */
  CreditLineAmount?: Array<Amount> | undefined

  /**
   * The monetary balance associated with this remittance advice line.
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
   * A reference to the order for payment used by the invoicing party. This may have been requested of the payer by the
   * payee to accompany its remittance.
   * Text
   * Cardinality: 0..1
   */
  InvoicingPartyReference?: Array<Text> | undefined

  /**
   * The Accounting Supplier Party related to the remittance information reported on this Remittance Advice Line.
   * Supplier Party
   * Cardinality: 0..1
   */
  AccountingSupplierParty?: Array<SupplierParty> | undefined

  /**
   * The Accounting Customer Party related to the remittance information reported on this Remittance Advice Line.
   * Customer Party
   * Cardinality: 0..1
   */
  AccountingCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The buyer associated with this remittance advice line.
   * Customer Party
   * Cardinality: 0..1
   */
  BuyerCustomerParty?: Array<CustomerParty> | undefined

  /**
   * The seller/supplier associated with this remittance advice line.
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
   * The payee.
   * Party
   * Cardinality: 0..1
   */
  PayeeParty?: Array<Party> | undefined

  /**
   * An invoice period to which this remittance advice line applies.
   * Period
   * Cardinality: 0..n
   */
  InvoicePeriod?: Array<Period> | undefined

  /**
   * A reference to a billing document associated with this remittance advice line.
   * Billing Reference
   * Cardinality: 0..n
   */
  BillingReference?: Array<BillingReference> | undefined

  /**
   * A reference to a document associated with this remittance advice line.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * The rate of exchange between the currency of the Remittance Advice and the currency of the document described in
   * the BillingReference.
   * Exchange Rate
   * Cardinality: 0..1
   */
  ExchangeRate?: Array<ExchangeRate> | undefined
}
