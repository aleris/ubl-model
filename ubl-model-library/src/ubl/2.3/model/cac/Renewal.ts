import { Amount } from '../cbc/Amount'
import { Period } from './Period'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe the renewal of a commercial arrangement, such as a contract or licence fee.
 */
export interface Renewal {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The monetary amount of this renewal.
   * Amount
   * Cardinality: 0..1
   */
  Amount?: Array<Amount> | undefined

  /**
   * The period for which the arrangement is now valid
   * Period
   * Cardinality: 0..1
   */
  Period?: Array<Period> | undefined
}
