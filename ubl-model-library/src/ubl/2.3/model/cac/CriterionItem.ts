import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Item } from './Item'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class describing a criteria
 */
export interface CriterionItem {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this criteria
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A code describing the type of criteria
   * Code
   * Cardinality: 0..1
   */
  TypeCode?: Array<Code> | undefined

  /**
   * The criteria for this item, expressed as a text
   * Text
   * Cardinality: 1..n
   */
  CriterionDescription: Array<Text>

  /**
   * The item associated with this criteria
   * Item
   * Cardinality: 1
   */
  DeclaredPropertyItem: Array<Item>
}
