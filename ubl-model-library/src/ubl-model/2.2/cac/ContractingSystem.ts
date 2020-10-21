import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe the contracting system. If the procedure is individual (nonrepetitive), this class should not be
 * used.
 */
export interface ContractingSystem {
  /**
   * An identifier for the contracting system.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * A code signifying the type of contracting system (e.g., framework agreement, dynamic purchasing system).
   * Code
   * Cardinality: 0..1
   */
  ContractingSystemTypeCode?: [Code] | undefined

  /**
   * The description of the contracting system
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined
}
