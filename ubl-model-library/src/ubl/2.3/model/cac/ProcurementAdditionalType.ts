import { Code } from '../cbc/Code'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe additional types for a procurement project
 */
export interface ProcurementAdditionalType {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the type of procurement project (e.g., goods, works, services).
   * Code
   * Cardinality: 0..1
   */
  ProcurementTypeCode?: Array<Code> | undefined
}
