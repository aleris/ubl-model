import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a reference to a transaction line in a billing document.
 */
export interface BillingReferenceLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this transaction line in a billing document.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * The monetary amount of the transaction line, including any allowances and charges but excluding taxes.
   * Amount
   * Cardinality: 0..1
   */
  Amount?: Array<Amount> | undefined

  /**
   * An allowance or charge applicable to the transaction line.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined
}
