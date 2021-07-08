import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class that refers to a phase of work. Used for instance to specify what part of the contract the billing is
 * referring to.
 */
export interface WorkPhaseReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this phase of work.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A code signifying this phase of work.
   * Code
   * Cardinality: 0..1
   */
  WorkPhaseCode?: Array<Code> | undefined

  /**
   * Text describing this phase of work.
   * Text
   * Cardinality: 0..n
   */
  WorkPhase?: Array<Text> | undefined

  /**
   * The progress percentage of the work phase.
   * Percent
   * Cardinality: 0..1
   */
  ProgressPercent?: Array<Numeric> | undefined

  /**
   * The date on which this phase of work begins.
   * Date
   * Cardinality: 0..1
   */
  StartDate?: Array<Date> | undefined

  /**
   * The date on which this phase of work ends.
   * Date
   * Cardinality: 0..1
   */
  EndDate?: Array<Date> | undefined

  /**
   * A reference to a document regarding the work order for the project in which this phase of work takes place.
   * Document Reference
   * Cardinality: 0..n
   */
  WorkOrderDocumentReference?: Array<DocumentReference> | undefined
}
