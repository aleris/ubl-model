import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'

/**
 * A class describing identifiers or references relating to customs procedures.
 */
export interface CustomsDeclaration {
  /**
   * An identifier associated with customs related procedures.
   * Identifier
   * Cardinality: 1
   * Examples: CUST001 3333-44-123 
   */
  ID: [Identifier]

  /**
   * Describes the party issuing the customs declaration.
   * Party
   * Cardinality: 0..1
   */
  IssuerParty: [Party] | undefined
}
