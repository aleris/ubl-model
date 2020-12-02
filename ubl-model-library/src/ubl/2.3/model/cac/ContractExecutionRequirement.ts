import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a requirement for execution of a contract.
 */
export interface ContractExecutionRequirement {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A name for this requirement.
   * Name
   * Cardinality: 0..n
   */
  Name?: Array<Text> | undefined

  /**
   * A code signifying the type of party independent of its role.
   * Code
   * Cardinality: 0..1
   */
  ExecutionRequirementCode?: Array<Code> | undefined

  /**
   * Text describing this requirement.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined
}
