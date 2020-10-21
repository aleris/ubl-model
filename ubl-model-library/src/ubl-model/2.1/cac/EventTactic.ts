import { EventTacticEnumeration } from './EventTacticEnumeration'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class defining a specific type of action or situation arranged by the Buyer or the Seller to promote the product or
 * products.
 */
export interface EventTactic {
  /**
   * Generic field to add additional information or to specify mutually defined eventTacticTypes that are not currently
   * listed.
   * Text
   * Cardinality: 0..1
   */
  Comment?: [Text] | undefined

  /**
   * The currencies, units, etc. that describes what is need for the event or promotion Usage example: Number of pallets
   * per store for a stack display
   * Quantity
   * Cardinality: 0..1
   */
  Quantity?: [Quantity] | undefined

  /**
   * The set of codes that describes this event tactic.
   * Event Tactic Enumeration
   * Cardinality: 1
   */
  EventTacticEnumeration: [EventTacticEnumeration]

  /**
   * The period covered by this event tactic.
   * Period
   * Cardinality: 0..1
   */
  Period?: [Period] | undefined
}
