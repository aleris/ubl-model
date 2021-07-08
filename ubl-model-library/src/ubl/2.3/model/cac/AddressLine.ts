import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define an unstructured address line.
 */
export interface AddressLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An address line expressed as unstructured text.
   * Text
   * Cardinality: 1
   * Examples: 123 Standard Chartered Tower
   */
  Line: Array<Text>
}
