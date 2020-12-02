import { Code } from '../cbc/Code'
import { ExtensionContent } from './ExtensionContent'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A single extension for private use.
 */
export interface UBLExtension {
  /**
   * An identifier for the Extension assigned by the creator of the extension.
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A name for the Extension assigned by the creator of the extension.
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * An agency that maintains one or more Extensions.
   * Cardinality: 0..1
   */
  ExtensionAgencyID?: Array<Identifier> | undefined

  /**
   * The name of the agency that maintains the Extension.
   * Cardinality: 0..1
   */
  ExtensionAgencyName?: Array<Text> | undefined

  /**
   * The version of the Extension.
   * Cardinality: 0..1
   */
  ExtensionVersionID?: Array<Identifier> | undefined

  /**
   * A URI for the Agency that maintains the Extension.
   * Cardinality: 0..1
   */
  ExtensionAgencyURI?: Array<Identifier> | undefined

  /**
   * A URI for the Extension.
   * Cardinality: 0..1
   */
  ExtensionURI?: Array<Identifier> | undefined

  /**
   * A code for reason the Extension is being included.
   * Cardinality: 0..1
   */
  ExtensionReasonCode?: Array<Code> | undefined

  /**
   * A description of the reason for the Extension.
   * Cardinality: 0..1
   */
  ExtensionReason?: Array<Text> | undefined

  /**
   * The definition of the extension content.
   * Cardinality: 1..1
   */
  ExtensionContent: Array<ExtensionContent>
}
