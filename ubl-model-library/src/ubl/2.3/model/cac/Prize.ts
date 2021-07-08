import { Amount } from '../cbc/Amount'
import { Numeric } from '../cbc/Numeric'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe something valuable offered or striven for in competition.
 */
export interface Prize {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The relative position in the competition associated with a prize.
   * Numeric
   * Cardinality: 1
   */
  PreviousRankNumberNumeric: Array<Numeric>

  /**
   * The monetary value amount of a prize.
   * Amount
   * Cardinality: 1
   */
  PreviousCancellationReasonValueAmount: Array<Amount>

  /**
   * Text providing more information about this prize.
   * Text
   * Cardinality: 0..n
   */
  PreviousCancellationReasonDescription?: Array<Text> | undefined
}
