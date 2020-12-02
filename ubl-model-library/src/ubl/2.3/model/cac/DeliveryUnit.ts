import { Indicator } from '../cbc/Indicator'
import { Quantity } from '../cbc/Quantity'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a delivery unit.
 */
export interface DeliveryUnit {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The quantity of ordered Items that constitutes a batch for delivery purposes.
   * Quantity
   * Cardinality: 1
   * Examples: 100 units , by the dozen
   */
  BatchQuantity: Array<Quantity>

  /**
   * The quantity of units in the Delivery Unit expressed in the units used by the consumer.
   * Quantity
   * Cardinality: 0..1
   * Examples: packs of 10
   */
  ConsumerUnitQuantity?: Array<Quantity> | undefined

  /**
   * An indication that the transported goods are subject to an international regulation concerning the carriage of
   * dangerous goods (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: Default is negative
   */
  HazardousRiskIndicator?: Array<Indicator> | undefined
}
