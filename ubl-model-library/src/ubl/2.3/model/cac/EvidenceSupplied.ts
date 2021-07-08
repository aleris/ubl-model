import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A reference to evidence.
 */
export interface EvidenceSupplied {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The identifier of the referenced evidence.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>
}
