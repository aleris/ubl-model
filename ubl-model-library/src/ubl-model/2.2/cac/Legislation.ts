import { Address } from './Address'
import { Identifier } from '../cbc/Identifier'
import { Language } from './Language'
import { Text } from '../cbc/Text'

/**
 * A class to describe a reference to a piece of legislation.
 */
export interface Legislation {
  /**
   * An identifier to refer to the legislation.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The title of the legislation.
   * Text
   * Cardinality: 0..n
   */
  Title: Array<Text> | undefined

  /**
   * The textual description of the legislation.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * The jurisdiction level for the legislation.
   * Text
   * Cardinality: 0..n
   */
  JurisdictionLevel: Array<Text> | undefined

  /**
   * The article of the legislation.
   * Text
   * Cardinality: 0..n
   */
  Article: Array<Text> | undefined

  /**
   * A URI to the legislation.
   * Identifier
   * Cardinality: 0..n
   */
  URI: Array<Identifier> | undefined

  /**
   * The language of the legislation.
   * Language
   * Cardinality: 0..n
   */
  Language: Array<Language> | undefined

  /**
   * The geopolitical region in which this legislation applies.
   * Address
   * Cardinality: 0..n
   */
  JurisdictionRegionAddress: Array<Address> | undefined
}
