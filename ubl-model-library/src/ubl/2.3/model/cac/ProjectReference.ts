import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'
import { WorkPhaseReference } from './WorkPhaseReference'

/**
 * A class to define a reference to a procurement project.
 */
export interface ProjectReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the referenced project.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * A universally unique identifier for the referenced project.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * The date on which the referenced project was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: Array<Date> | undefined

  /**
   * A specific phase of work in the referenced project.
   * Work Phase Reference
   * Cardinality: 0..n
   */
  WorkPhaseReference?: Array<WorkPhaseReference> | undefined
}
