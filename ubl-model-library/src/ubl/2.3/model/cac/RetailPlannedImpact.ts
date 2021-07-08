import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Period } from './Period'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a planned effect of a retail event (e.g., a promotion or a change in inventory policy) upon
 * supply or demand.
 */
export interface RetailPlannedImpact {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Estimated monetary value of the planned event as an impact
   * Amount
   * Cardinality: 1
   */
  Amount: Array<Amount>

  /**
   * It will have impact on either Sales forecast or Order Forecast
   * Code
   * Cardinality: 1
   */
  ForecastPurposeCode: Array<Code>

  /**
   * A code signifying the type of forecast. Examples of values are: BASE PROMOTIONAL SEASONAL TOTAL
   * Code
   * Cardinality: 1
   */
  ForecastTypeCode: Array<Code>

  /**
   * The period to which this impact applies.
   * Period
   * Cardinality: 0..1
   */
  Period?: Array<Period> | undefined
}
