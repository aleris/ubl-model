import { Amount } from '../cbc/Amount'
import { EventLineItem } from './EventLineItem'

/**
 * A class to describe a line item associated with a promotional event.
 */
export interface PromotionalEventLineItem {
  /**
   * The amount associated with this promotional event line item.
   * Amount
   * Cardinality: 1
   */
  Amount: [Amount]

  /**
   * A line item describing the expected impacts associated with this promotional event for a specific product at a
   * specific location.
   * Event Line Item
   * Cardinality: 1
   */
  EventLineItem: [EventLineItem]
}
