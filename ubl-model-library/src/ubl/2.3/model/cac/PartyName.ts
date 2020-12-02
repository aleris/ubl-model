import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class for defining the name of a party.
 */
export interface PartyName {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The name of the party.
   * Name
   * Cardinality: 1
   * Examples: Microsoft
   */
  Name: Array<Text>
}
