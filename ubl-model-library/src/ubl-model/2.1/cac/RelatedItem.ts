import { Identifier } from '../cbc/Identifier'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to describe the relationship to an item different from the item associated with the item line in which
 * RelatedItem is used.
 */
export interface RelatedItem {
  /**
   * An identifier for the related item.
   * Identifier
   * Cardinality: 0..1
   * Examples: First , Second 
   */
  ID: [Identifier] | undefined

  /**
   * The quantity that applies to the relationship.
   * Quantity
   * Cardinality: 0..1
   * Examples: 6 , 10mg per Kilo 
   */
  Quantity: [Quantity] | undefined

  /**
   * Text describing the relationship.
   * Text
   * Cardinality: 0..n
   * Examples: If used in wet conditions or extreme environments 
   */
  Description: Array<Text> | undefined
}
