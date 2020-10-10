import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { WebSiteAccess } from './WebSiteAccess'

/**
 * A class to describe a web site.
 */
export interface WebSite {
  /**
   * An identifier for a specific web site.
   * Identifier
   * Cardinality: 0..1
   * Examples: UBL
   */
  ID: [Identifier] | undefined

  /**
   * The common name of the web site.
   * Name
   * Cardinality: 0..1
   * Examples: UBL Online Community
   */
  Name: [Text] | undefined

  /**
   * Text describing the web site.
   * Text
   * Cardinality: 0..n
   * Examples: Online community for the Universal Business Language (UBL) OASIS Standard
   */
  Description: Array<Text> | undefined

  /**
   * A code that specifies the type web site.
   * Code
   * Cardinality: 0..1
   * Examples: Satellite, Portal, Operative, Industry, ...
   */
  WebSiteTypeCode: [Code] | undefined

  /**
   * The Uniform Resource Identifier (URI) of the web site; i.e., its Uniform Resource Locator (URL).
   * Identifier
   * Cardinality: 1
   * Examples: http://ubl.xml.org/
   */
  URI: [Identifier]

  /**
   * Access information for the website (e.g. guest credentials).
   * Web Site Access
   * Cardinality: 0..n
   */
  WebSiteAccess: Array<WebSiteAccess> | undefined
}
