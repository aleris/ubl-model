import { LotsGroup } from './LotsGroup'
import { Numeric } from '../cbc/Numeric'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class defining how to treat different lots in a single procurement.
 */
export interface LotDistribution {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The maximum number of lots that can be awarded to a single tenderer.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumLotsAwardedNumeric?: Array<Numeric> | undefined

  /**
   * The maximum number of lots to which a tenderer can submit an offer to.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumLotsSubmittedNumeric?: Array<Numeric> | undefined

  /**
   * Description on how to combine lots when submitting a tender.
   * Text
   * Cardinality: 0..n
   */
  GroupingLots?: Array<Text> | undefined

  /**
   * A combination of lots used when evaluating a tender.
   * Lots Group
   * Cardinality: 0..n
   */
  LotsGroup?: Array<LotsGroup> | undefined
}
