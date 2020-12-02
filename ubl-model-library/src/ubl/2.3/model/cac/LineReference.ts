import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a reference to a line in a document.
 */
export interface LineReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Identifies the referenced line in the document.
   * Identifier
   * Cardinality: 1
   */
  LineID: Array<Identifier>

  /**
   * A universally unique identifier for this line reference.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * A code signifying the status of the referenced line with respect to its original state.
   * Code
   * Cardinality: 0..1
   */
  LineStatusCode?: Array<Code> | undefined

  /**
   * A reference to the document containing the referenced line.
   * Document Reference
   * Cardinality: 0..1
   */
  DocumentReference?: Array<DocumentReference> | undefined
}
