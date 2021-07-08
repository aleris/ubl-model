import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a property group or classification.
 */
export interface ItemPropertyGroup {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this group of item properties.
   * Identifier
   * Cardinality: 1
   * Examples: 233-004
   */
  ID: Array<Identifier>

  /**
   * The name of this item property group.
   * Name
   * Cardinality: 0..1
   * Examples: Electrical Specifications , Dietary Content
   */
  Name?: Array<Text> | undefined

  /**
   * A code signifying the importance of this property group in using it to describe a required Item.
   * Code
   * Cardinality: 0..1
   */
  ImportanceCode?: Array<Code> | undefined
}
