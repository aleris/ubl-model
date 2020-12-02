import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe subcontract terms for a tendering process.
 */
export interface SubcontractTerms {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The precise percentage allowed to be subcontracted.
   * Rate
   * Cardinality: 0..1
   */
  Rate?: Array<Numeric> | undefined

  /**
   * An indicator that the subcontract price is known (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  UnknownPriceIndicator?: Array<Indicator> | undefined

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
  Amount?: Array<Amount> | undefined

  /**
   * A code specifying the conditions for subcontracting.
   * Code
   * Cardinality: 0..1
   */
  SubcontractingConditionsCode?: Array<Code> | undefined

  /**
   * The maximum percentage allowed to be subcontracted.
   * Percent
   * Cardinality: 0..1
   */
  MaximumPercent?: Array<Numeric> | undefined

  /**
   * The minimum percentage allowed to be subcontracted.
   * Percent
   * Cardinality: 0..1
   */
  MinimumPercent?: Array<Numeric> | undefined
}
