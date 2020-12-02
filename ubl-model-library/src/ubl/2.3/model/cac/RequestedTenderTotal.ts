import { Amount } from '../cbc/Amount'
import { Indicator } from '../cbc/Indicator'
import { TaxCategory } from './TaxCategory'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class defining budgeted monetary amounts.
 */
export interface RequestedTenderTotal {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The estimated overall monetary amount of a contract.
   * Amount
   * Cardinality: 0..1
   */
  EstimatedOverallContractAmount?: Array<Amount> | undefined

  /**
   * The estimated overall monetary amount of subsequent framework contracts.
   * Amount
   * Cardinality: 0..1
   */
  EstimatedOverallFrameworkContractsAmount?: Array<Amount> | undefined

  /**
   * The monetary amount of the total budget including net amount, taxes, and material and instalment costs.
   * Amount
   * Cardinality: 0..1
   */
  TotalAmount?: Array<Amount> | undefined

  /**
   * Indicates whether the amounts are taxes included (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  TaxIncludedIndicator?: Array<Indicator> | undefined

  /**
   * The minimum monetary amount of the budget.
   * Amount
   * Cardinality: 0..1
   */
  MinimumAmount?: Array<Amount> | undefined

  /**
   * The maximum monetary amount of the budget.
   * Amount
   * Cardinality: 0..1
   */
  MaximumAmount?: Array<Amount> | undefined

  /**
   * A description of the monetary scope of the budget.
   * Text
   * Cardinality: 0..n
   */
  MonetaryScope?: Array<Text> | undefined

  /**
   * The average monetary amount for the subsequent contracts following this budget amount.
   * Amount
   * Cardinality: 0..1
   */
  AverageSubsequentContractAmount?: Array<Amount> | undefined

  /**
   * Describes the categories of taxes that apply to the budget amount.
   * Tax Category
   * Cardinality: 0..n
   */
  ApplicableTaxCategory?: Array<TaxCategory> | undefined
}
