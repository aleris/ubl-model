import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe the tenderer contracting role.
 */
export interface EconomicOperatorRole {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code specifying the role of the party.
   * Code
   * Cardinality: 0..1
   */
  RoleCode?: Array<Code> | undefined

  /**
   * A textual description of the party role.
   * Text
   * Cardinality: 0..n
   */
  RoleDescription?: Array<Text> | undefined
}
