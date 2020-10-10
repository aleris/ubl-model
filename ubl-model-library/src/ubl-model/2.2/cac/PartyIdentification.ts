import { Identifier } from '../cbc/Identifier'

/**
 * A class to define an identifier for a party.
 */
export interface PartyIdentification {
  /**
   * An identifier for the party.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]
}
