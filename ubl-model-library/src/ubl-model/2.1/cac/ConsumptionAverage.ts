import { Amount } from '../cbc/Amount'
import { Text } from '../cbc/Text'

/**
 * A class to define an average consumption as a monetary amount.
 */
export interface ConsumptionAverage {
  /**
   * The average monetary amount of the consumption.
   * Amount
   * Cardinality: 0..1
   * Examples: 1.65
   */
  AverageAmount: [Amount] | undefined

  /**
   * A description of the average consumed.
   * Text
   * Cardinality: 0..n
   * Examples: Average price incl. value added tax per kilowatt-hour in the billing period.
   */
  Description: Array<Text> | undefined
}
