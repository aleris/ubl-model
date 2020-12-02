import { Amount } from '../cbc/Amount'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a monetary total.
 */
export interface MonetaryTotal {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The monetary amount of an extended transaction line, net of tax and settlement discounts, but inclusive of any
   * applicable rounding amount.
   * Amount
   * Cardinality: 0..1
   */
  LineExtensionAmount?: Array<Amount> | undefined

  /**
   * The monetary amount of an extended transaction line, exclusive of taxes.
   * Amount
   * Cardinality: 0..1
   */
  TaxExclusiveAmount?: Array<Amount> | undefined

  /**
   * The monetary amount including taxes; the sum of payable amount and prepaid amount.
   * Amount
   * Cardinality: 0..1
   */
  TaxInclusiveAmount?: Array<Amount> | undefined

  /**
   * The total monetary amount of all allowances.
   * Amount
   * Cardinality: 0..1
   */
  AllowanceTotalAmount?: Array<Amount> | undefined

  /**
   * The total monetary amount of all charges.
   * Amount
   * Cardinality: 0..1
   */
  ChargeTotalAmount?: Array<Amount> | undefined

  /**
   * The total withholding tax amount.
   * Amount
   * Cardinality: 0..1
   */
  WithholdingTaxTotalAmount?: Array<Amount> | undefined

  /**
   * The total prepaid monetary amount.
   * Amount
   * Cardinality: 0..1
   */
  PrepaidAmount?: Array<Amount> | undefined

  /**
   * The rounding amount (positive or negative) added to produce the line extension amount.
   * Amount
   * Cardinality: 0..1
   */
  PayableRoundingAmount?: Array<Amount> | undefined

  /**
   * The amount of the monetary total to be paid.
   * Amount
   * Cardinality: 1
   */
  PayableAmount: Array<Amount>

  /**
   * The amount of the monetary total to be paid, expressed in an alternative currency.
   * Amount
   * Cardinality: 0..1
   */
  PayableAlternativeAmount?: Array<Amount> | undefined
}
