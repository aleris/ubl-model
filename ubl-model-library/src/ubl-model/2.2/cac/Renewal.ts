import { Amount } from '../cbc/Amount'
import { Period } from './Period'

/**
 * A class to describe the renewal of a commercial arrangement, such as a contract or licence fee.
 */
export interface Renewal {
  /**
   * The monetary amount of this renewal.
   * Amount
   * Cardinality: 0..1
   */
  Amount: [Amount] | undefined

  /**
   * The period for which the arrangement is now valid
   * Period
   * Cardinality: 0..1
   */
  Period: [Period] | undefined
}
