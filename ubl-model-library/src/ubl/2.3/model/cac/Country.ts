import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a country.
 */
export interface Country {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying this country.
   * Code
   * Cardinality: 0..1
   */
  IdentificationCode?: Array<Code> | undefined

  /**
   * The name of this country.
   * Name
   * Cardinality: 0..1
   * Examples: SOUTH AFRICA
   */
  Name?: Array<Text> | undefined
}
