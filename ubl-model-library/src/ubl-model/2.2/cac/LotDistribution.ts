import { Numeric } from '../cbc/Numeric'
import { Text } from '../cbc/Text'

/**
 * A class defining how to treat different lots in a single procurement.
 */
export interface LotDistribution {
  /**
   * The maximum number of lots that can be awarded to a single tenderer.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumLotsAwardedNumeric?: [Numeric] | undefined

  /**
   * The maximum number of lots to which a tenderer can submit an offer to.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumLotsSubmittedNumeric?: [Numeric] | undefined

  /**
   * Description on how to combine lots when submitting a tender.
   * Text
   * Cardinality: 0..n
   */
  GroupingLots?: Array<Text> | undefined
}
