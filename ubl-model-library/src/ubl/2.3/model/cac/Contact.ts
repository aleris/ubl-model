import { Communication } from './Communication'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a contactable person or department in an organization.
 */
export interface Contact {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this contact.
   * Identifier
   * Cardinality: 0..1
   * Examples: Receivals Clerk
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of this contact. It is recommended that this be used for a functional name and not a personal name.
   * Name
   * Cardinality: 0..1
   * Examples: Delivery Dock
   */
  Name?: Array<Text> | undefined

  /**
   * The job title or function of this contact
   * Text
   * Cardinality: 0..1
   */
  JobTitle?: Array<Text> | undefined

  /**
   * The department where this contact works
   * Text
   * Cardinality: 0..1
   */
  Department?: Array<Text> | undefined

  /**
   * The primary telephone number of this contact.
   * Text
   * Cardinality: 0..1
   */
  Telephone?: Array<Text> | undefined

  /**
   * The primary fax number of this contact.
   * Text
   * Cardinality: 0..1
   */
  Telefax?: Array<Text> | undefined

  /**
   * The primary email address of this contact.
   * Text
   * Cardinality: 0..1
   */
  ElectronicMail?: Array<Text> | undefined

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
