import { EventTactic } from './EventTactic'
import { Identifier } from '../cbc/Identifier'
import { PromotionalEventLineItem } from './PromotionalEventLineItem'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a promotional event as a set of item locations that share a set of promotional tactics.
 */
export interface PromotionalSpecification {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this promotional specification.
   * Identifier
   * Cardinality: 0..1
   */
  SpecificationID?: Array<Identifier> | undefined

  /**
   * A line item for a promotional event involving a specific product at a specific location; it describes the expected
   * impacts associated with the event and specifies the promotional price of the item."
   * Promotional Event Line Item
   * Cardinality: 1..n
   */
  PromotionalEventLineItem: Array<PromotionalEventLineItem>

  /**
   * An event tactic associated with this promotion.
   * Event Tactic
   * Cardinality: 0..n
   */
  EventTactic?: Array<EventTactic> | undefined
}
