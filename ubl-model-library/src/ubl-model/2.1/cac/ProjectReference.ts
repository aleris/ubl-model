import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { WorkPhaseReference } from './WorkPhaseReference'

/**
 * A class to define a reference to a procurement project.
 */
export interface ProjectReference {
  /**
   * An identifier for the referenced project.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * A universally unique identifier for the referenced project.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

  /**
   * The date on which the referenced project was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: [Date] | undefined

  /**
   * A specific phase of work in the referenced project.
   * Work Phase Reference
   * Cardinality: 0..n
   */
  WorkPhaseReference?: Array<WorkPhaseReference> | undefined
}
