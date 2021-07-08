import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to identify a credit account for sales on account.
 */
export interface CreditAccount {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this credit account.
   * Identifier
   * Cardinality: 1
   * Examples: Customer Code 29
   */
  AccountID: Array<Identifier>
}
