import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'

/**
 * A class to describe the tenderer contracting role.
 */
export interface EconomicOperatorRole {
  /**
   * A code specifying the role of the party.
   * Code
   * Cardinality: 0..1
   */
  RoleCode: [Code] | undefined

  /**
   * A textual description of the party role.
   * Text
   * Cardinality: 0..n
   */
  RoleDescription: Array<Text> | undefined
}
