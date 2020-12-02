import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { Party } from './Party'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a line in an Instruction for Returns.
 */
export interface InstructionForReturnsLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this instruction for returns line.
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
   * The quantity of goods being returned.
   * Quantity
   * Cardinality: 1
   */
  Quantity: Array<Quantity>

  /**
   * The manufacturer of the goods being returned.
   * Party
   * Cardinality: 0..1
   */
  ManufacturerParty?: Array<Party> | undefined

  /**
   * A description of the item being returned.
   * Item
   * Cardinality: 1
   */
  Item: Array<Item>
}
