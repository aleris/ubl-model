import { Communication } from './Communication'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a contactable person or department in an organization.
 */
export interface Contact {
  /**
   * An identifier for this contact.
   * Identifier
   * Cardinality: 0..1
   * Examples: Receivals Clerk
   */
  ID?: [Identifier] | undefined

  /**
   * The name of this contact. It is recommended that this be used for a functional name and not a personal name.
   * Name
   * Cardinality: 0..1
   * Examples: Delivery Dock
   */
  Name?: [Text] | undefined

  /**
   * The primary telephone number of this contact.
   * Text
   * Cardinality: 0..1
   */
  Telephone?: [Text] | undefined

  /**
   * The primary fax number of this contact.
   * Text
   * Cardinality: 0..1
   */
  Telefax?: [Text] | undefined

  /**
   * The primary email address of this contact.
   * Text
   * Cardinality: 0..1
   */
  ElectronicMail?: [Text] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures; in particular, a textual
   * description of the circumstances under which this contact can be used (e.g., "emergency" or "after hours").
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Another means of communication with this contact.
   * Communication
   * Cardinality: 0..n
   */
  OtherCommunication?: Array<Communication> | undefined
}
