import { Text } from '../cbc/Text'

/**
 * A class to define an unstructured address line.
 */
export interface AddressLine {
  /**
   * An address line expressed as unstructured text.
   * Text
   * Cardinality: 1
   * Examples: 123 Standard Chartered Tower 
   */
  Line: [Text]
}
