import { Amount } from '../cbc/Amount'
import { Indicator } from '../cbc/Indicator'
import { TaxSubtotal } from './TaxSubtotal'

/**
 * A class to describe the total tax for a particular taxation scheme.
 */
export interface TaxTotal {
  /**
   * The total tax amount for a particular taxation scheme, e.g., VAT; the sum of the tax subtotals for each tax
   * category within the taxation scheme.
   * Amount
   * Cardinality: 1
   */
  TaxAmount: [Amount]

  /**
   * The rounding amount (positive or negative) added to the calculated tax total to produce the rounded TaxAmount.
   * Amount
   * Cardinality: 0..1
   */
  RoundingAmount?: [Amount] | undefined

  /**
   * An indicator that this total is recognized as legal evidence for taxation purposes (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  TaxEvidenceIndicator?: [Indicator] | undefined

  /**
   * An indicator that tax is included in the calculation (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  TaxIncludedIndicator?: [Indicator] | undefined

  /**
   * One of the subtotals the sum of which equals the total tax amount for a particular taxation scheme.
   * Tax Subtotal
   * Cardinality: 0..n
   */
  TaxSubtotal?: Array<TaxSubtotal> | undefined
}
