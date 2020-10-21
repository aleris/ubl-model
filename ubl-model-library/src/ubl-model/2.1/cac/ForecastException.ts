import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Time } from '../cbc/Time'

/**
 * As explained in Exception Criteria Line: Three types of exception criteria can be defined, Operational, Metric or
 * Forecast Exceptions. This class provides criteria for forecast exception type: the identification of the purpose of
 * the forecast, the source of data and the time basis criteria for the exception.
 */
export interface ForecastException {
  /**
   * It is either Sales forecast or Order Forecast. Definition can be changed like: "The purpose of the Forecast (either
   * sales or order), about which an exception criteria is being defined".
   * Code
   * Cardinality: 1
   */
  ForecastPurposeCode: [Code]

  /**
   * A code signifying the type of forecast. Example of values are:BASE PROMOTIONAL SEASONAL TOTAL
   * Code
   * Cardinality: 1
   */
  ForecastTypeCode: [Code]

  /**
   * The date on which the forecast was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: [Date]

  /**
   * The time at which the forecast was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: [Time] | undefined

  /**
   * A code signifying the partner who provides this information.
   * Code
   * Cardinality: 1
   */
  DataSourceCode: [Code]

  /**
   * A code signifying the partner providing the information in this forecast exception.
   * Code
   * Cardinality: 0..1
   */
  ComparisonDataCode?: [Code] | undefined

  /**
   * The time at which this comparison forecast was issued.
   * Time
   * Cardinality: 0..1
   */
  ComparisonForecastIssueTime?: [Time] | undefined

  /**
   * The date on which this comparison forecast was issued.
   * Date
   * Cardinality: 0..1
   */
  ComparisonForecastIssueDate?: [Date] | undefined
}
