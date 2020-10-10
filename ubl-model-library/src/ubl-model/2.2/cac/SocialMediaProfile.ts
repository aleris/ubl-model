import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a social media profile.
 */
export interface SocialMediaProfile {
  /**
   * An identifier for a specific social media.
   * Identifier
   * Cardinality: 0..1
   * Examples: FB
   */
  ID: [Identifier] | undefined

  /**
   * The common name of the social media.
   * Name
   * Cardinality: 0..1
   * Examples: Facebook
   */
  Name: [Text] | undefined

  /**
   * A code that specifies the type of social media.
   * Code
   * Cardinality: 0..1
   * Examples: BusinessNetwork, SocialNetwork, ...
   */
  SocialMediaTypeCode: [Code] | undefined

  /**
   * The Uniform Resource Identifier (URI) of a party profile in the social media; i.e., its Uniform Resource Locator
   * (URL).
   * Identifier
   * Cardinality: 1
   * Examples: https://www.facebook.com/oasis.open/
   */
  URI: [Identifier]
}
