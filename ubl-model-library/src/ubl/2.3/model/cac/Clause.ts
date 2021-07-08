import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define a clause (a distinct article or provision) in a contract, treaty, will, or other formal or legal
 * written document requiring compliance.
 */
export interface Clause {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this clause.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The text of this clause.
   * Text
   * Cardinality: 0..n
   */
  Content?: Array<Text> | undefined
}
