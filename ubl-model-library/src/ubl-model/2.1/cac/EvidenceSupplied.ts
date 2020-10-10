import { Identifier } from '../cbc/Identifier'

/**
 * A reference to evidence.
 */
export interface EvidenceSupplied {
  /**
   * The identifier of the referenced evidence.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]
}
