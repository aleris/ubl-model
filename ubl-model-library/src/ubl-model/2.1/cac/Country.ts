import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'

/**
 * A class to describe a country.
 */
export interface Country {
  /**
   * A code signifying this country.
   * Code
   * Cardinality: 0..1
   */
  IdentificationCode: [Code] | undefined

  /**
   * The name of this country.
   * Name
   * Cardinality: 0..1
   * Examples: SOUTH AFRICA
   */
  Name: [Text] | undefined
}
