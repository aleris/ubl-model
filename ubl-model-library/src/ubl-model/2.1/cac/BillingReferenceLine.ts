import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Identifier } from '../cbc/Identifier'

/**
 * A class to define a reference to a transaction line in a billing document.
 */
export interface BillingReferenceLine {
  /**
   * An identifier for this transaction line in a billing document.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * The monetary amount of the transaction line, including any allowances and charges but excluding taxes.
   * Amount
   * Cardinality: 0..1
   */
  Amount: [Amount] | undefined

  /**
   * An allowance or charge applicable to the transaction line.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge: Array<AllowanceCharge> | undefined
}
