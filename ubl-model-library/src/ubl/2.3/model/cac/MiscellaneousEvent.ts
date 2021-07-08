import { Code } from '../cbc/Code'
import { EventLineItem } from './EventLineItem'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a miscellaneous event associated with a retail event.
 */
export interface MiscellaneousEvent {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the type of this miscellaneous event. Examples are: ASSORTMENT_CHARGE DISASTER FORECAST_DECREASE
   * FORECAST_INCREASE FREIGHT_FLOW_ALLOCATION INVENTORY_POLICY_CHANGE LOCATION_CLOSING LOCATION_OPENING OTHER
   * OUT_OF_STOCK PACKAGING_LABELING_CHANGE PRICE_DECREASE PRICE_INCREASE STORE_FORMAT_OR_PLANOGRAM_CHANGE TEST_MARKET
   * WEATHER
   * Code
   * Cardinality: 1
   */
  MiscellaneousEventTypeCode: Array<Code>

  /**
   * An event line item for this miscellaneous retail event.
   * Event Line Item
   * Cardinality: 1..n
   */
  EventLineItem: Array<EventLineItem>
}
