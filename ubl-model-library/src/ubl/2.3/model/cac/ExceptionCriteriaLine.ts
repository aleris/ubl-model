import { Code } from '../cbc/Code'
import { ForecastExceptionCriterionLine } from './ForecastExceptionCriterionLine'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a line in an ExceptionCriteria document that specifies a threshold for forecast variance, product
 * activity, or performance history, the exceeding of which should trigger an exception message.
 */
export interface ExceptionCriteriaLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this exception criteria line.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Type of comparison to be carried out in reference to the set threshold." Allowed values are:
   * EXCEEDS_EXCEPTION_VALUE FALLS_BELOW_EXCEPTION_VALUE
   * Code
   * Cardinality: 1
   */
  ThresholdValueComparisonCode: Array<Code>

  /**
   * A quantity beyond which an exception will be triggered.
   * Quantity
   * Cardinality: 1
   */
  ThresholdQuantity: Array<Quantity>

  /**
   * A code signifying status specific to a shipment exception.
   * Code
   * Cardinality: 0..1
   */
  ExceptionStatusCode?: Array<Code> | undefined

  /**
   * A collaboratively assigned code signifying priority of the Exception. Possible values are: HIGH, LOW, MEDIUM
   * Code
   * Cardinality: 0..1
   */
  CollaborationPriorityCode?: Array<Code> | undefined

  /**
   * Coded representation of possible resolution methods". Possible values are: DEFAULT_TO_AVERAGE_OF_COMPARED_VALUES
   * DEFAULT_TO_BUYERS_VALUE DEFAULT_TO_HIGH_VALUE DEFAULT_TO_LOW_VALUE DEFAULT_TO_SELLERS_VALUE MANUAL_RESOLUTION
   * MUTUALLY_DEFINED
   * Code
   * Cardinality: 0..1
   */
  ExceptionResolutionCode?: Array<Code> | undefined

  /**
   * Establishes the criterion for one of the three types of exceptions. There can be three types of exception criteria:
   * Operational, Metric and Forecast Exceptions. This will be set if this Exception is about an Operational Exception.
   * Description could be: A code used to identify an operational exception. Possible values are: CANCELED_ORDERS
   * EMERGENCY_ORDERS ON_HAND ORDERS RECEIPTS SALES SHIPMENTS
   * Code
   * Cardinality: 0..1
   */
  SupplyChainActivityTypeCode?: Array<Code> | undefined

  /**
   * A code signifying a measure of performance.
   * Code
   * Cardinality: 0..1
   */
  PerformanceMetricTypeCode?: Array<Code> | undefined

  /**
   * The period during which this exception criteria line is in effect.
   * Period
   * Cardinality: 0..1
   */
  EffectivePeriod?: Array<Period> | undefined

  /**
   * The Trade Item that is the subject of the Exception Criterion.
   * Item
   * Cardinality: 1..n
   */
  SupplyItem: Array<Item>

  /**
   * Establishes the criterion for one of the three types of exceptions. This class provides the criterion for the kind
   * of forecast exception, the identification of the purpose of the forecast, the source of data and the time basis
   * criterion for the exception.
   * Forecast Exception Criterion Line
   * Cardinality: 0..1
   */
  ForecastExceptionCriterionLine?: Array<ForecastExceptionCriterionLine> | undefined
}
