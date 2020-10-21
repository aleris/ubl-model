import { Amount } from '../cbc/Amount'

/**
 * A class to define a monetary total.
 */
export interface MonetaryTotal {
  /**
   * The monetary amount of an extended transaction line, net of tax and settlement discounts, but inclusive of any
   * applicable rounding amount.
   * Amount
   * Cardinality: 0..1
   */
  LineExtensionAmount?: [Amount] | undefined

  /**
   * The monetary amount of an extended transaction line, exclusive of taxes.
   * Amount
   * Cardinality: 0..1
   */
  TaxExclusiveAmount?: [Amount] | undefined

  /**
   * The monetary amount including taxes; the sum of payable amount and prepaid amount.
   * Amount
   * Cardinality: 0..1
   */
  TaxInclusiveAmount?: [Amount] | undefined

  /**
   * The total monetary amount of all allowances.
   * Amount
   * Cardinality: 0..1
   */
  AllowanceTotalAmount?: [Amount] | undefined

  /**
   * The total monetary amount of all charges.
   * Amount
   * Cardinality: 0..1
   */
  ChargeTotalAmount?: [Amount] | undefined

  /**
   * The total prepaid monetary amount.
   * Amount
   * Cardinality: 0..1
   */
  PrepaidAmount?: [Amount] | undefined

  /**
   * The rounding amount (positive or negative) added to produce the line extension amount.
   * Amount
   * Cardinality: 0..1
   */
  PayableRoundingAmount?: [Amount] | undefined

  /**
   * The amount of the monetary total to be paid.
   * Amount
   * Cardinality: 1
   */
  PayableAmount: [Amount]

  /**
   * The amount of the monetary total to be paid, expressed in an alternative currency.
   * Amount
   * Cardinality: 0..1
   */
  PayableAlternativeAmount?: [Amount] | undefined
}
