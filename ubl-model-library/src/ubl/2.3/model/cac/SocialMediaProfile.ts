import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a social media profile.
 */
export interface SocialMediaProfile {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for a specific social media.
   * Identifier
   * Cardinality: 0..1
   * Examples: FB
   */
  ID?: Array<Identifier> | undefined

  /**
   * The common name of the social media.
   * Name
   * Cardinality: 0..1
   * Examples: Facebook
   */
  Name?: Array<Text> | undefined

  /**
   * A code that specifies the type of social media.
   * Code
   * Cardinality: 0..1
   * Examples: BusinessNetwork, SocialNetwork, ...
   */
  SocialMediaTypeCode?: Array<Code> | undefined

  /**
   * The Uniform Resource Identifier (URI) of a party profile in the social media; i.e., its Uniform Resource Locator
   * (URL).
   * Identifier
   * Cardinality: 1
   * Examples: https://www.facebook.com/oasis.open/
   */
  URI: Array<Identifier>
}
