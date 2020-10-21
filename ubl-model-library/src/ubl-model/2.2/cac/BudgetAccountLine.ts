import { Amount } from '../cbc/Amount'
import { BudgetAccount } from './BudgetAccount'
import { Identifier } from '../cbc/Identifier'

/**
 * A class to define a budget account line.
 */
export interface BudgetAccountLine {
  /**
   * An identifier for this budget account line.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * The total monetary amount for this budget account line.
   * Amount
   * Cardinality: 0..1
   */
  TotalAmount?: [Amount] | undefined

  /**
   * An account covering this budget account line.
   * Budget Account
   * Cardinality: 0..n
   */
  BudgetAccount?: Array<BudgetAccount> | undefined
}
