import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'

/**
 * The type of contracting party that is independent of its role.
 */
export interface ContractingPartyType {
  /**
   * A code specifying the type of party that is independent of its role.
   * Code
   * Cardinality: 0..1
   */
  PartyTypeCode?: [Code] | undefined

  /**
   * The type of party that is independent of its role, expressed as text.
   * Text
   * Cardinality: 0..1
   */
  PartyType?: [Text] | undefined
}
