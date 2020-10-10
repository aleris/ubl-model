import { CardAccount } from './CardAccount'
import { Code } from '../cbc/Code'
import { CreditAccount } from './CreditAccount'
import { Date } from '../cbc/Date'
import { FinancialAccount } from './FinancialAccount'
import { Identifier } from '../cbc/Identifier'
import { PaymentMandate } from './PaymentMandate'
import { Text } from '../cbc/Text'
import { TradeFinancing } from './TradeFinancing'

/**
 * A class to describe a means of payment.
 */
export interface PaymentMeans {
  /**
   * An identifier for this means of payment.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * A code signifying the type of this means of payment.
   * Code
   * Cardinality: 1
   */
  PaymentMeansCode: [Code]

  /**
   * The date on which payment is due for this means of payment.
   * Date
   * Cardinality: 0..1
   */
  PaymentDueDate: [Date] | undefined

  /**
   * A code signifying the payment channel for this means of payment.
   * Code
   * Cardinality: 0..1
   */
  PaymentChannelCode: [Code] | undefined

  /**
   * An identifier for the payment instruction.
   * Identifier
   * Cardinality: 0..1
   */
  InstructionID: [Identifier] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  InstructionNote: Array<Text> | undefined

  /**
   * An identifier for a payment made using this means of payment.
   * Identifier
   * Cardinality: 0..n
   */
  PaymentID: Array<Identifier> | undefined

  /**
   * A credit card, debit card, or charge card account that constitutes this means of payment.
   * Card Account
   * Cardinality: 0..1
   */
  CardAccount: [CardAccount] | undefined

  /**
   * The payer's financial account.
   * Financial Account
   * Cardinality: 0..1
   */
  PayerFinancialAccount: [FinancialAccount] | undefined

  /**
   * The payee's financial account.
   * Financial Account
   * Cardinality: 0..1
   */
  PayeeFinancialAccount: [FinancialAccount] | undefined

  /**
   * A credit account associated with this means of payment.
   * Credit Account
   * Cardinality: 0..1
   */
  CreditAccount: [CreditAccount] | undefined

  /**
   * The payment mandate associated with this means of payment.
   * Payment Mandate
   * Cardinality: 0..1
   */
  PaymentMandate: [PaymentMandate] | undefined

  /**
   * A trade finance agreement applicable to this means of payment.
   * Trade Financing
   * Cardinality: 0..1
   */
  TradeFinancing: [TradeFinancing] | undefined
}
