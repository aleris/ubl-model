import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'

/**
 * A class to describe a requirement for execution of a contract.
 */
export interface ContractExecutionRequirement {
  /**
   * A name for this requirement.
   * Name
   * Cardinality: 0..n
   */
  Name: Array<Text> | undefined

  /**
   * A code signifying the type of party independent of its role.
   * Code
   * Cardinality: 0..1
   */
  ExecutionRequirementCode: [Code] | undefined

  /**
   * Text describing this requirement.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined
}
