import { Address } from './Address'
import { LineReference } from './LineReference'
import { Numeric } from '../cbc/Numeric'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define the price of an item as a percentage of the price of a different item.
 */
export interface DependentPriceReference {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The percentage by which the price of the different item is multiplied to calculate the price of the item.
   * Percent
   * Cardinality: 0..1
   */
  Percent?: Array<Numeric> | undefined

  /**
   * The reference location for this dependent price reference.
   * Address
   * Cardinality: 0..1
   */
  LocationAddress?: Array<Address> | undefined

  /**
   * A reference to a line that the price is depended of.
   * Line Reference
   * Cardinality: 0..1
   */
  DependentLineReference?: Array<LineReference> | undefined
}
