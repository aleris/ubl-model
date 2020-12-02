import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe the contracting system. If the procedure is individual (nonrepetitive), this class should not be
 * used.
 */
export interface ContractingSystem {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the contracting system.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A code signifying the type of contracting system (e.g., framework agreement, dynamic purchasing system).
   * Code
   * Cardinality: 0..1
   */
  ContractingSystemTypeCode?: Array<Code> | undefined

  /**
   * The description of the contracting system
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined
}
