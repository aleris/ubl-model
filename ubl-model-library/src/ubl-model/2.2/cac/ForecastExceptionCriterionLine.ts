import { Code } from '../cbc/Code'
import { Quantity } from '../cbc/Quantity'

/**
 * Establishes the criterion for one of the three types of exceptions. This class provides criteria for the kind of
 * forecast exception, the identification of the purpose of the forecast, the source of data and the time basis
 * criterion for the exception.
 */
export interface ForecastExceptionCriterionLine {
  /**
   * A description of the purpose for the forecast that is assigned to each forecast data item exception criterion.
   * Code
   * Cardinality: 1
   */
  ForecastPurposeCode: [Code]

  /**
   * A description of a Forecast selected from a list.
   * Code
   * Cardinality: 1
   */
  ForecastTypeCode: [Code]

  /**
   * If it is a forecast comparison exception, this value indicates the other source of information.
   * Code
   * Cardinality: 0..1
   */
  ComparisonDataSourceCode: [Code] | undefined

  /**
   * Indication of the partner who provides the information.
   * Code
   * Cardinality: 1
   */
  DataSourceCode: [Code]

  /**
   * Time basis in days for the Exception.
   * Quantity
   * Cardinality: 0..1
   */
  TimeDeltaDaysQuantity: [Quantity] | undefined
}
