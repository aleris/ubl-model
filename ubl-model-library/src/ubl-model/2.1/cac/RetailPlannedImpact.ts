import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Period } from './Period'

/**
 * A class to describe a planned effect of a retail event (e.g., a promotion or a change in inventory policy) upon
 * supply or demand.
 */
export interface RetailPlannedImpact {
  /**
   * Estimated monetary value of the planned event as an impact
   * Amount
   * Cardinality: 1
   */
  Amount: [Amount]

  /**
   * It will have impact on either Sales forecast or Order Forecast
   * Code
   * Cardinality: 1
   */
  ForecastPurposeCode: [Code]

  /**
   * A code signifying the type of forecast. Examples of values are: BASE PROMOTIONAL SEASONAL TOTAL
   * Code
   * Cardinality: 1
   */
  ForecastTypeCode: [Code]

  /**
   * The period to which this impact applies.
   * Period
   * Cardinality: 0..1
   */
  Period?: [Period] | undefined
}
