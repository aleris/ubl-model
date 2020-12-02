import { Amount } from '../cbc/Amount'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { TaxSubtotal } from './TaxSubtotal'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe the total tax for a particular taxation scheme.
 */
export interface TaxTotal {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The total tax amount for a particular taxation scheme, e.g., VAT; the sum of the tax subtotals for each tax
   * category within the taxation scheme.
   * Amount
   * Cardinality: 1
   */
  TaxAmount: Array<Amount>

  /**
   * The number of this tax total in the sequence of tax totals corresponding to the order in which multiple taxes are
   * applied. If all taxes are applied to the same taxable amount (i.e., their order of application is inconsequential),
   * then CalculationSequenceNumeric is 1 for all tax totals applied to a given amount.
   * Numeric
   * Cardinality: 0..1
   */
  CalculationSequenceNumeric?: Array<Numeric> | undefined

  /**
   * The rounding amount (positive or negative) added to the calculated tax total to produce the rounded TaxAmount.
   * Amount
   * Cardinality: 0..1
   */
  RoundingAmount?: Array<Amount> | undefined

  /**
   * An indicator that this total is recognized as legal evidence for taxation purposes (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  TaxEvidenceIndicator?: Array<Indicator> | undefined

  /**
   * An indicator that tax is included in the calculation (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  TaxIncludedIndicator?: Array<Indicator> | undefined

  /**
   * One of the subtotals the sum of which equals the total tax amount for a particular taxation scheme.
   * Tax Subtotal
   * Cardinality: 0..n
   */
  TaxSubtotal?: Array<TaxSubtotal> | undefined
}
