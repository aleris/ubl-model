import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Period } from './Period'

/**
 * A class to describe a price list.
 */
export interface PriceList {
  /**
   * An identifier for this price list.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * A code signifying whether this price list is an original, copy, revision, or cancellation.
   * Code
   * Cardinality: 0..1
   * Examples: new - announcement only , new and available , deleted - announcement only 
   */
  StatusCode: [Code] | undefined

  /**
   * A period during which this price list is valid.
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod: Array<Period> | undefined

  /**
   * The previous price list.
   * Price List
   * Cardinality: 0..1
   */
  PreviousPriceList: [PriceList] | undefined
}
