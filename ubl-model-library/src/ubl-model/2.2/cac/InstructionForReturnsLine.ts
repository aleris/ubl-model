import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { Party } from './Party'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to define a line in an Instruction for Returns.
 */
export interface InstructionForReturnsLine {
  /**
   * An identifier for this instruction for returns line.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * The quantity of goods being returned.
   * Quantity
   * Cardinality: 1
   */
  Quantity: [Quantity]

  /**
   * The manufacturer of the goods being returned.
   * Party
   * Cardinality: 0..1
   */
  ManufacturerParty: [Party] | undefined

  /**
   * A description of the item being returned.
   * Item
   * Cardinality: 1
   */
  Item: [Item]
}
