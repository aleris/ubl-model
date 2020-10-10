import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to define a clause (a distinct article or provision) in a contract, treaty, will, or other formal or legal
 * written document requiring compliance.
 */
export interface Clause {
  /**
   * An identifier for this clause.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The text of this clause.
   * Text
   * Cardinality: 0..n
   */
  Content: Array<Text> | undefined
}
