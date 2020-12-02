import { Amount } from '../cbc/Amount'
import { Measure } from '../cbc/Measure'
import { Numeric } from '../cbc/Numeric'
import { TaxCategory } from './TaxCategory'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define the subtotal for a particular tax category within a particular taxation scheme, such as standard
 * rate within VAT.
 */
export interface TaxSubtotal {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The net amount to which the tax percent (rate) is applied to calculate the tax amount.
   * Amount
   * Cardinality: 0..1
   */
  TaxableAmount?: Array<Amount> | undefined

  /**
   * The amount of this tax subtotal.
   * Amount
   * Cardinality: 1
   */
  TaxAmount: Array<Amount>

  /**
   * The number of this tax subtotal in the sequence of subtotals corresponding to the order in which multiple taxes are
   * applied. If all taxes are applied to the same taxable amount (i.e., their order of application is inconsequential),
   * then CalculationSequenceNumeric is 1 for all tax subtotals applied to a given amount.
   * Numeric
   * Cardinality: 0..1
   */
  CalculationSequenceNumeric?: Array<Numeric> | undefined

  /**
   * The amount of this tax subtotal, expressed in the currency used for invoicing.
   * Amount
   * Cardinality: 0..1
   */
  TransactionCurrencyTaxAmount?: Array<Amount> | undefined

  /**
   * The tax rate of the tax category applied to this tax subtotal, expressed as a percentage.
   * Percent
   * Cardinality: 0..1
   */
  Percent?: Array<Numeric> | undefined

  /**
   * The unit of measure on which the tax calculation is based
   * Measure
   * Cardinality: 0..1
   */
  BaseUnitMeasure?: Array<Measure> | undefined

  /**
   * Where a tax is applied at a certain rate per unit, the rate per unit applied.
   * Amount
   * Cardinality: 0..1
   */
  PerUnitAmount?: Array<Amount> | undefined

  /**
   * Where a tax is tiered, the range of taxable amounts that determines the rate of tax applicable to this tax
   * subtotal.
   * Text
   * Cardinality: 0..1
   */
  TierRange?: Array<Text> | undefined

  /**
   * Where a tax is tiered, the tax rate that applies within a specified range of taxable amounts for this tax subtotal.
   * Percent
   * Cardinality: 0..1
   */
  TierRatePercent?: Array<Numeric> | undefined

  /**
   * The tax category applicable to this subtotal.
   * Tax Category
   * Cardinality: 1
   */
  TaxCategory: Array<TaxCategory>
}
