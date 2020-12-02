import { CardAccount } from './CardAccount'
import { Code } from '../cbc/Code'
import { CreditAccount } from './CreditAccount'
import { Date } from '../cbc/Date'
import { FinancialAccount } from './FinancialAccount'
import { Identifier } from '../cbc/Identifier'
import { PaymentMandate } from './PaymentMandate'
import { Text } from '../cbc/Text'
import { TradeFinancing } from './TradeFinancing'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a means of payment.
 */
export interface PaymentMeans {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this means of payment.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A code signifying the type of this means of payment.
   * Code
   * Cardinality: 1
   */
  PaymentMeansCode: Array<Code>

  /**
   * The date on which payment is due for this means of payment.
   * Date
   * Cardinality: 0..1
   */
  PaymentDueDate?: Array<Date> | undefined

  /**
   * A code signifying the payment channel for this means of payment.
   * Code
   * Cardinality: 0..1
   */
  PaymentChannelCode?: Array<Code> | undefined

  /**
   * An identifier for the payment instruction.
   * Identifier
   * Cardinality: 0..1
   */
  InstructionID?: Array<Identifier> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  InstructionNote?: Array<Text> | undefined

  /**
   * An identifier for a payment made using this means of payment.
   * Identifier
   * Cardinality: 0..n
   */
  PaymentID?: Array<Identifier> | undefined

  /**
   * A credit card, debit card, or charge card account that constitutes this means of payment.
   * Card Account
   * Cardinality: 0..n
   */
  CardAccount?: Array<CardAccount> | undefined

  /**
   * The payer's financial account.
   * Financial Account
   * Cardinality: 0..1
   */
  PayerFinancialAccount?: Array<FinancialAccount> | undefined

  /**
   * The payee's financial account.
   * Financial Account
   * Cardinality: 0..1
   */
  PayeeFinancialAccount?: Array<FinancialAccount> | undefined

  /**
   * A credit account associated with this means of payment.
   * Credit Account
   * Cardinality: 0..1
   */
  CreditAccount?: Array<CreditAccount> | undefined

  /**
   * The payment mandate associated with this means of payment.
   * Payment Mandate
   * Cardinality: 0..1
   */
  PaymentMandate?: Array<PaymentMandate> | undefined

  /**
   * A trade finance agreement applicable to this means of payment.
   * Trade Financing
   * Cardinality: 0..1
   */
  TradeFinancing?: Array<TradeFinancing> | undefined
}
