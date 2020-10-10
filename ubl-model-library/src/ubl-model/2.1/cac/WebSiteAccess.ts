import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe access to a web site.
 */
export interface WebSiteAccess {
  /**
   * The Uniform Resource Identifier (URI) for this web site; i.e., its Uniform Resource Locator (URL).
   * Identifier
   * Cardinality: 0..1
   */
  URI: [Identifier] | undefined

  /**
   * A password to the web site.
   * Text
   * Cardinality: 1
   * Examples: confidence
   */
  Password: [Text]

  /**
   * Text describing login details.
   * Text
   * Cardinality: 1
   * Examples: Utsuser
   */
  Login: [Text]
}
