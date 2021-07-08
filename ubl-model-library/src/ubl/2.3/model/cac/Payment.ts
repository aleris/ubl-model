import { Amount } from '../cbc/Amount'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a payment.
 */
export interface Payment {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this payment.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The amount of this payment.
   * Amount
   * Cardinality: 0..1
   */
  PaidAmount?: Array<Amount> | undefined

  /**
   * The date on which this payment was received.
   * Date
   * Cardinality: 0..1
   */
  ReceivedDate?: Array<Date> | undefined

  /**
   * The date on which this payment was made.
   * Date
   * Cardinality: 0..1
   */
  PaidDate?: Array<Date> | undefined

  /**
   * The time at which this payment was made.
   * Time
   * Cardinality: 0..1
   */
  PaidTime?: Array<Time> | undefined

  /**
   * An identifier for the payment instruction.
   * Identifier
   * Cardinality: 0..1
   */
  InstructionID?: Array<Identifier> | undefined
}
