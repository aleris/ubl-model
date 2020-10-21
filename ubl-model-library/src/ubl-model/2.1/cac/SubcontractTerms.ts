import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { Text } from '../cbc/Text'

/**
 * A class to describe subcontract terms for a tendering process.
 */
export interface SubcontractTerms {
  /**
   * MF: I agree with the query. Rate?
   * Rate
   * Cardinality: 0..1
   */
  Rate?: [Numeric] | undefined

  /**
   * An indicator that the subcontract price is known (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  UnknownPriceIndicator?: [Indicator] | undefined

  /**
   * Text describing the subcontract terms.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The monetary amount assigned to the subcontracted task.
   * Amount
   * Cardinality: 0..1
   */
  Amount?: [Amount] | undefined

  /**
   * A code specifying the conditions for subcontracting.
   * Code
   * Cardinality: 0..1
   */
  SubcontractingConditionsCode?: [Code] | undefined

  /**
   * The maximum percentage allowed to be subcontracted.
   * Percent
   * Cardinality: 0..1
   */
  MaximumPercent?: [Numeric] | undefined

  /**
   * The minimum percentage allowed to be subcontracted.
   * Percent
   * Cardinality: 0..1
   */
  MinimumPercent?: [Numeric] | undefined
}
