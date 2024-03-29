import { Amount } from '../cbc/Amount'
import { BillingReference } from './BillingReference'
import { Code } from '../cbc/Code'
import { ExchangeRate } from './ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a line in a Reminder document.
 */
export interface ReminderLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this reminder line.
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
   * A universally unique identifier for this reminder line.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * An indication that this reminder line contains a balance brought forward (true) or does not (false).
   * Indicator
   * Cardinality: 0..1
   */
  BalanceBroughtForwardIndicator?: Array<Indicator> | undefined

  /**
   * The amount debited on this reminder line.
   * Amount
   * Cardinality: 0..1
   */
  DebitLineAmount?: Array<Amount> | undefined

  /**
   * The amount credited on this reminder line.
   * Amount
   * Cardinality: 0..1
   */
  CreditLineAmount?: Array<Amount> | undefined

  /**
   * The buyer's accounting cost centre for this reminder line, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode?: Array<Code> | undefined

  /**
   * The buyer's accounting cost centre for this reminder line, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost?: Array<Text> | undefined

  /**
   * The penalty for late payment, expressed as a percentage.
   * Percent
   * Cardinality: 0..1
   */
  PenaltySurchargePercent?: Array<Numeric> | undefined

  /**
   * The amount on this reminder line.
   * Amount
   * Cardinality: 0..1
   */
  Amount?: Array<Amount> | undefined

  /**
   * A code signifying the business purpose for this payment.
   * Code
   * Cardinality: 0..1
   */
  PaymentPurposeCode?: Array<Code> | undefined

  /**
   * A period to which this reminder line applies.
   * Period
   * Cardinality: 0..n
   */
  ReminderPeriod?: Array<Period> | undefined

  /**
   * A reference to a billing document associated with this reminder line.
   * Billing Reference
   * Cardinality: 0..n
   */
  BillingReference?: Array<BillingReference> | undefined

  /**
   * The rate of exchange between the currency of the Reminder and the currency of the document described in the
   * BillingReference.
   * Exchange Rate
   * Cardinality: 0..1
   */
  ExchangeRate?: Array<ExchangeRate> | undefined
}
