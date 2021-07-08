import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a physical attribute.
 */
export interface PhysicalAttribute {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this physical attribute.
   * Identifier
   * Cardinality: 1
   * Examples: colour style
   */
  AttributeID: Array<Identifier>

  /**
   * A code signifying the position of this physical attribute.
   * Code
   * Cardinality: 0..1
   */
  PositionCode?: Array<Code> | undefined

  /**
   * A description of the physical attribute, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: XXL , Small
   */
  DescriptionCode?: Array<Code> | undefined

  /**
   * A description of the physical attribute, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined
}
