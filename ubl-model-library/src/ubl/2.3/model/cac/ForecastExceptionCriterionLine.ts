import { Code } from '../cbc/Code'
import { Quantity } from '../cbc/Quantity'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * Establishes the criterion for one of the three types of exceptions. This class provides criteria for the kind of
 * forecast exception, the identification of the purpose of the forecast, the source of data and the time basis
 * criterion for the exception.
 */
export interface ForecastExceptionCriterionLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A description of the purpose for the forecast that is assigned to each forecast data item exception criterion.
   * Code
   * Cardinality: 1
   */
  ForecastPurposeCode: Array<Code>

  /**
   * A description of a Forecast selected from a list.
   * Code
   * Cardinality: 1
   */
  ForecastTypeCode: Array<Code>

  /**
   * If it is a forecast comparison exception, this value indicates the other source of information.
   * Code
   * Cardinality: 0..1
   */
  ComparisonDataSourceCode?: Array<Code> | undefined

  /**
   * Indication of the partner who provides the information.
   * Code
   * Cardinality: 1
   */
  DataSourceCode: Array<Code>

  /**
   * Time basis in days for the Exception.
   * Quantity
   * Cardinality: 0..1
   */
  TimeDeltaDaysQuantity?: Array<Quantity> | undefined
}
