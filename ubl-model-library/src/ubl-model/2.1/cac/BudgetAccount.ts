import { ClassificationScheme } from './ClassificationScheme'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'

/**
 * A class to define a budget account.
 */
export interface BudgetAccount {
  /**
   * An identifier for the budget account, typically an internal accounting reference.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The number of the year for this budget account, e.g. 2012
   * Numeric
   * Cardinality: 0..1
   */
  BudgetYearNumeric: [Numeric] | undefined

  /**
   * A classification scheme required for this budget account.
   * Classification Scheme
   * Cardinality: 0..1
   */
  RequiredClassificationScheme: [ClassificationScheme] | undefined
}
