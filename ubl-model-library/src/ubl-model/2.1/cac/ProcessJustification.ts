import { Code } from '../cbc/Code'
import { Text } from '../cbc/Text'

/**
 * A class to describe a justification for the choice of tendering process.
 */
export interface ProcessJustification {
  /**
   * A code signifying the type of the previous tendering process (which is now being cancelled).
   * Code
   * Cardinality: 0..1
   */
  PreviousCancellationReasonCode?: [Code] | undefined

  /**
   * The reason why the contracting authority has followed a particular tendering procedure for the awarding of a
   * contract, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  ProcessReasonCode?: [Code] | undefined

  /**
   * The reason why the contracting authority has followed a particular tendering procedure for the awarding of a
   * contract, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  ProcessReason?: Array<Text> | undefined

  /**
   * Text providing justification for the selection of this process.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined
}
