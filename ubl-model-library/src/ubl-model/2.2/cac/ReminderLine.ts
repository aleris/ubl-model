import { Amount } from '../cbc/Amount'
import { BillingReference } from './BillingReference'
import { Code } from '../cbc/Code'
import { ExchangeRate } from './ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Text } from '../cbc/Text'

/**
 * A class to define a line in a Reminder document.
 */
export interface ReminderLine {
  /**
   * An identifier for this reminder line.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

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
  UUID?: [Identifier] | undefined

  /**
   * An indication that this reminder line contains a balance brought forward (true) or does not (false).
   * Indicator
   * Cardinality: 0..1
   */
  BalanceBroughtForwardIndicator?: [Indicator] | undefined

  /**
   * The amount debited on this reminder line.
   * Amount
   * Cardinality: 0..1
   */
  DebitLineAmount?: [Amount] | undefined

  /**
   * The amount credited on this reminder line.
   * Amount
   * Cardinality: 0..1
   */
  CreditLineAmount?: [Amount] | undefined

  /**
   * The buyer's accounting cost centre for this reminder line, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  AccountingCostCode?: [Code] | undefined

  /**
   * The buyer's accounting cost centre for this reminder line, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  AccountingCost?: [Text] | undefined

  /**
   * The penalty for late payment, expressed as a percentage.
   * Percent
   * Cardinality: 0..1
   */
  PenaltySurchargePercent?: [Numeric] | undefined

  /**
   * The amount on this reminder line.
   * Amount
   * Cardinality: 0..1
   */
  Amount?: [Amount] | undefined

  /**
   * A code signifying the business purpose for this payment.
   * Code
   * Cardinality: 0..1
   */
  PaymentPurposeCode?: [Code] | undefined

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
  ExchangeRate?: [ExchangeRate] | undefined
}
