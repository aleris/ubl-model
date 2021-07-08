import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe access to a web site.
 */
export interface WebSiteAccess {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The Uniform Resource Identifier (URI) for this web site; i.e., its Uniform Resource Locator (URL).
   * Identifier
   * Cardinality: 0..1
   */
  URI?: Array<Identifier> | undefined

  /**
   * A password to the web site.
   * Text
   * Cardinality: 1
   * Examples: confidence
   */
  Password: Array<Text>

  /**
   * Text describing login details.
   * Text
   * Cardinality: 1
   * Examples: Utsuser
   */
  Login: Array<Text>
}
