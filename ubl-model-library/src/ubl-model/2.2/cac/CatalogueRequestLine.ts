import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { ItemLocationQuantity } from './ItemLocationQuantity'
import { Period } from './Period'
import { Text } from '../cbc/Text'

/**
 * A class to define a line describing a request for a catalogue line.
 */
export interface CatalogueRequestLine {
  /**
   * An identifier for the requested catalogue line.
   * Identifier
   * Cardinality: 1
   * Examples: 1
   */
  ID: [Identifier]

  /**
   * A subdivision of a contract or tender covering the line being requested.
   * Text
   * Cardinality: 0..1
   * Examples: Installation , Phase One , Support and Maintenance
   */
  ContractSubdivision?: [Text] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The period for which the information in the requested catalogue line is valid.
   * Period
   * Cardinality: 0..1
   */
  LineValidityPeriod?: [Period] | undefined

  /**
   * Properties of the item in the requested catalogue line that are dependent on location and quantity.
   * Item Location Quantity
   * Cardinality: 0..n
   */
  RequiredItemLocationQuantity?: Array<ItemLocationQuantity> | undefined

  /**
   * The item associated with the requested catalogue line.
   * Item
   * Cardinality: 1
   */
  Item: [Item]
}
