import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define an identifier for a party.
 */
export interface PartyIdentification {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the party.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>
}
