import { Code } from '../cbc/Code'
import { Period } from './Period'
import { SalesItem } from './SalesItem'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a line in an Item Information Request asking a trading partner for item information.
 */
export interface ItemInformationRequestLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the frequency with which item information should be sent to the requester.
   * Code
   * Cardinality: 0..1
   */
  TimeFrequencyCode?: Array<Code> | undefined

  /**
   * A code used to identify the type of supply chain activity about which information request is issued. Examples:
   * CANCELED_ORDERS EMERGENCY_ORDERS ON_HAND ORDERS
   * Code
   * Cardinality: 0..1
   */
  SupplyChainActivityTypeCode?: Array<Code> | undefined

  /**
   * The information request can be either about supply chain activity or about forecasts or about performance metrics,
   * so it should be optional
   * Code
   * Cardinality: 0..1
   */
  ForecastTypeCode?: Array<Code> | undefined

  /**
   * A code signifying a measure of performance.
   * Code
   * Cardinality: 0..1
   */
  PerformanceMetricTypeCode?: Array<Code> | undefined

  /**
   * A period for which this information is requested.
   * Period
   * Cardinality: 1..n
   */
  Period: Array<Period>

  /**
   * Sales information for the item to which this line applies.
   * Sales Item
   * Cardinality: 1..n
   */
  SalesItem: Array<SalesItem>
}
