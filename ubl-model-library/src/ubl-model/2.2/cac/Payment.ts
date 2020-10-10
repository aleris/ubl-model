import { Amount } from '../cbc/Amount'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Time } from '../cbc/Time'

/**
 * A class to describe a payment.
 */
export interface Payment {
  /**
   * An identifier for this payment.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The amount of this payment.
   * Amount
   * Cardinality: 0..1
   */
  PaidAmount: [Amount] | undefined

  /**
   * The date on which this payment was received.
   * Date
   * Cardinality: 0..1
   */
  ReceivedDate: [Date] | undefined

  /**
   * The date on which this payment was made.
   * Date
   * Cardinality: 0..1
   */
  PaidDate: [Date] | undefined

  /**
   * The time at which this payment was made.
   * Time
   * Cardinality: 0..1
   */
  PaidTime: [Time] | undefined

  /**
   * An identifier for the payment instruction.
   * Identifier
   * Cardinality: 0..1
   */
  InstructionID: [Identifier] | undefined
}
