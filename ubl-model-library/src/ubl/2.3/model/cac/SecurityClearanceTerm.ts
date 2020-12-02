import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to specify security clearance terms.
 */
export interface SecurityClearanceTerm {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the security clearance requirement.
   * Code
   * Cardinality: 0..1
   */
  Code?: Array<Code> | undefined

  /**
   * A description of the security clearance requirement.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined
}
