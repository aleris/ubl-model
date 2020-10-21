import { Package } from './Package'
import { Shipment } from './Shipment'

/**
 * A class to describe an ordered shipment.
 */
export interface OrderedShipment {
  /**
   * The ordered shipment.
   * Shipment
   * Cardinality: 1
   */
  Shipment: [Shipment]

  /**
   * A package in this ordered shipment.
   * Package
   * Cardinality: 0..n
   */
  Package?: Array<Package> | undefined
}
