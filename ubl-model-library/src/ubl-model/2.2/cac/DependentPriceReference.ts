import { Address } from './Address'
import { LineReference } from './LineReference'
import { Numeric } from '../cbc/Numeric'

/**
 * A class to define the price of an item as a percentage of the price of a different item.
 */
export interface DependentPriceReference {
  /**
   * The percentage by which the price of the different item is multiplied to calculate the price of the item.
   * Percent
   * Cardinality: 0..1
   */
  Percent: [Numeric] | undefined

  /**
   * The reference location for this dependent price reference.
   * Address
   * Cardinality: 0..1
   */
  LocationAddress: [Address] | undefined

  /**
   * A reference to a line that the price is depended of.
   * Line Reference
   * Cardinality: 0..1
   */
  DependentLineReference: [LineReference] | undefined
}
