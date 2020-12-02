import { Amount } from '../cbc/Amount'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define an average consumption as a monetary amount.
 */
export interface ConsumptionAverage {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The average monetary amount of the consumption.
   * Amount
   * Cardinality: 0..1
   * Examples: 1.65
   */
  AverageAmount?: Array<Amount> | undefined

  /**
   * A description of the average consumed.
   * Text
   * Cardinality: 0..n
   * Examples: Average price incl. value added tax per kilowatt-hour in the billing period.
   */
  Description?: Array<Text> | undefined
}
