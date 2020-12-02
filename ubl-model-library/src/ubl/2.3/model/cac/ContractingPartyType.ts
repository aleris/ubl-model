import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * The type of contracting party that is independent of its role.
 */
export interface ContractingPartyType {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code specifying the type of party that is independent of its role.
   * Code
   * Cardinality: 0..1
   */
  PartyTypeCode?: Array<Code> | undefined

  /**
   * The type of party that is independent of its role, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  PartyType?: Array<Text> | undefined
}
