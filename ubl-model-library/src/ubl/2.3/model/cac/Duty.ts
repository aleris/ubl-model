import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { TaxCategory } from './TaxCategory'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * The charging rate used for both call charging and time dependent charging
 */
export interface Duty {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The amount of this duty.
   * Amount
   * Cardinality: 1
   * Examples: 88.23
   */
  Amount: Array<Amount>

  /**
   * Text describing this duty.
   * Text
   * Cardinality: 0..1
   * Examples: ConnectionFee
   */
  Duty?: Array<Text> | undefined

  /**
   * The type of this charge rate, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: ConnectionFee
   */
  DutyCode?: Array<Code> | undefined

  /**
   * The tax category applicable to this duty.
   * Tax Category
   * Cardinality: 0..1
   */
  TaxCategory?: Array<TaxCategory> | undefined
}
