import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a device (a transport equipment seal) for securing the doors of a shipping container.
 */
export interface TransportEquipmentSeal {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this transport equipment seal.
   * Identifier
   * Cardinality: 1
   * Examples: ACS1234
   */
  ID: Array<Identifier>

  /**
   * A code signifying the type of party that issues and is responsible for this transport equipment seal.
   * Code
   * Cardinality: 0..1
   */
  SealIssuerTypeCode?: Array<Code> | undefined

  /**
   * The condition of this transport equipment seal.
   * Text
   * Cardinality: 0..1
   */
  Condition?: Array<Text> | undefined

  /**
   * A code signifying the condition of this transport equipment seal.
   * Code
   * Cardinality: 0..1
   */
  SealStatusCode?: Array<Code> | undefined

  /**
   * The role of the sealing party.
   * Text
   * Cardinality: 0..1
   * Alternative business terms: Sealing Party
   */
  SealingPartyType?: Array<Text> | undefined
}
