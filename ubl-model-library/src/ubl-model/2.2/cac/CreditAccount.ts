import { Identifier } from '../cbc/Identifier'

/**
 * A class to identify a credit account for sales on account.
 */
export interface CreditAccount {
  /**
   * An identifier for this credit account.
   * Identifier
   * Cardinality: 1
   * Examples: Customer Code 29 
   */
  AccountID: [Identifier]
}
