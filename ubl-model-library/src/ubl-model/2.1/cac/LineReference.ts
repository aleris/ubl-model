import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'

/**
 * A class to define a reference to a line in a document.
 */
export interface LineReference {
  /**
   * Identifies the referenced line in the document.
   * Identifier
   * Cardinality: 1
   */
  LineID: [Identifier]

  /**
   * A universally unique identifier for this line reference.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * A code signifying the status of the referenced line with respect to its original state.
   * Code
   * Cardinality: 0..1
   */
  LineStatusCode: [Code] | undefined

  /**
   * A reference to the document containing the referenced line.
   * Document Reference
   * Cardinality: 0..1
   */
  DocumentReference: [DocumentReference] | undefined
}
