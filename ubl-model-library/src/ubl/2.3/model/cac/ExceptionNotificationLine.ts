import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { ForecastException } from './ForecastException'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { Measure } from '../cbc/Measure'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a line in an Exception Notification.
 */
export interface ExceptionNotificationLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this exception notification line.
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
   * Text describing the exception.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A code signifying status specific to a shipment exception.
   * Code
   * Cardinality: 0..1
   */
  ExceptionStatusCode?: Array<Code> | undefined

  /**
   * Priority of Exception.
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
  ResolutionCode?: Array<Code> | undefined

  /**
   * The value that was compared with the source value that resulted in the exception
   * Measure
   * Cardinality: 1
   */
  ComparedValueMeasure: Array<Measure>

  /**
   * The value used as the basis of comparison
   * Measure
   * Cardinality: 1
   */
  SourceValueMeasure: Array<Measure>

  /**
   * The variance of a data item from an expected value during a particular time interval.
   * Quantity
   * Cardinality: 0..1
   */
  VarianceQuantity?: Array<Quantity> | undefined

  /**
   * Establishes the criterion for one of the three types of exceptions: Operational, performance metric and forecast.
   * This reports an exception notification about an operational exception. Description could be: A code used to
   * identify an operational exception. Possible values are: CANCELED_ORDERS EMERGENCY_ORDERS ON_HAND ORDERS RECEIPTS
   * SALES SHIPMENTS
   * Code
   * Cardinality: 0..1
   */
  SupplyChainActivityTypeCode?: Array<Code> | undefined

  /**
   * A code used to identify a measure of performance. It defines the type of the Performance Metric on which an
   * exception criteria is being defined
   * Code
   * Cardinality: 0..1
   */
  PerformanceMetricTypeCode?: Array<Code> | undefined

  /**
   * The period (start-end date) when this exception is observed
   * Period
   * Cardinality: 0..1
   */
  ExceptionObservationPeriod?: Array<Period> | undefined

  /**
   * A reference to Exception Criteria document can be provided.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * A forecast accuracy or comparison exception.
   * Forecast Exception
   * Cardinality: 0..1
   */
  ForecastException?: Array<ForecastException> | undefined

  /**
   * The product associated with this exception notification line.
   * Item
   * Cardinality: 1
   */
  SupplyItem: Array<Item>
}
