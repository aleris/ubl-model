import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { TaxCategory } from './TaxCategory'
import { Text } from '../cbc/Text'

/**
 * The charging rate used for both call charging and time dependent charging
 */
export interface Duty {
  /**
   * The amount of this duty.
   * Amount
   * Cardinality: 1
   * Examples: 88.23
   */
  Amount: [Amount]

  /**
   * Text describing this duty.
   * Text
   * Cardinality: 0..1
   * Examples: ConnectionFee
   */
  Duty?: [Text] | undefined

  /**
   * The type of this charge rate, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: ConnectionFee
   */
  DutyCode?: [Code] | undefined

  /**
   * The tax category applicable to this duty.
   * Tax Category
   * Cardinality: 0..1
   */
  TaxCategory?: [TaxCategory] | undefined
}
