import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to reference to a lot identifier.
 */
export interface ProcurementProjectLotReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this procurement project lot.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>
}
