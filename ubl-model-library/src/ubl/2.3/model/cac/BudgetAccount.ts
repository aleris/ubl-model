import { ClassificationScheme } from './ClassificationScheme'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a budget account.
 */
export interface BudgetAccount {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the budget account, typically an internal accounting reference.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The number of the year for this budget account, e.g. 2012
   * Numeric
   * Cardinality: 0..1
   */
  BudgetYearNumeric?: Array<Numeric> | undefined

  /**
   * A classification scheme required for this budget account.
   * Classification Scheme
   * Cardinality: 0..1
   */
  RequiredClassificationScheme?: Array<ClassificationScheme> | undefined
}
