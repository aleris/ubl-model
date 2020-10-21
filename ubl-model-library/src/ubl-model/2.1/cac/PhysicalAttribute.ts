import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a physical attribute.
 */
export interface PhysicalAttribute {
  /**
   * An identifier for this physical attribute.
   * Identifier
   * Cardinality: 1
   * Examples: colour style
   */
  AttributeID: [Identifier]

  /**
   * A code signifying the position of this physical attribute.
   * Code
   * Cardinality: 0..1
   */
  PositionCode?: [Code] | undefined

  /**
   * A description of the physical attribute, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: XXL , Small
   */
  DescriptionCode?: [Code] | undefined

  /**
   * A description of the physical attribute, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined
}
