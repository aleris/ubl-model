import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a property group or classification.
 */
export interface ItemPropertyGroup {
  /**
   * An identifier for this group of item properties.
   * Identifier
   * Cardinality: 1
   * Examples: 233-004
   */
  ID: [Identifier]

  /**
   * The name of this item property group.
   * Name
   * Cardinality: 0..1
   * Examples: Electrical Specifications , Dietary Content
   */
  Name?: [Text] | undefined

  /**
   * A code signifying the importance of this property group in using it to describe a required Item.
   * Code
   * Cardinality: 0..1
   */
  ImportanceCode?: [Code] | undefined
}
