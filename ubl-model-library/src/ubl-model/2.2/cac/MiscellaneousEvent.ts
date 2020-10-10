import { Code } from '../cbc/Code'
import { EventLineItem } from './EventLineItem'

/**
 * A class to describe a miscellaneous event associated with a retail event.
 */
export interface MiscellaneousEvent {
  /**
   * A code signifying the type of this miscellaneous event. Examples are: ASSORTMENT_CHARGE DISASTER FORECAST_DECREASE
   * FORECAST_INCREASE FREIGHT_FLOW_ALLOCATION INVENTORY_POLICY_CHANGE LOCATION_CLOSING LOCATION_OPENING OTHER
   * OUT_OF_STOCK PACKAGING_LABELING_CHANGE PRICE_DECREASE PRICE_INCREASE STORE_FORMAT_OR_PLANOGRAM_CHANGE TEST_MARKET
   * WEATHER
   * Code
   * Cardinality: 1
   */
  MiscellaneousEventTypeCode: [Code]

  /**
   * An event line item for this miscellaneous retail event.
   * Event Line Item
   * Cardinality: 1..n
   */
  EventLineItem: Array<EventLineItem>
}
