import { Amount } from '../cbc/Amount'
import { EventLineItem } from './EventLineItem'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a line item associated with a promotional event.
 */
export interface PromotionalEventLineItem {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The amount associated with this promotional event line item.
   * Amount
   * Cardinality: 1
   */
  Amount: Array<Amount>

  /**
   * A line item describing the expected impacts associated with this promotional event for a specific product at a
   * specific location.
   * Event Line Item
   * Cardinality: 1
   */
  EventLineItem: Array<EventLineItem>
}
