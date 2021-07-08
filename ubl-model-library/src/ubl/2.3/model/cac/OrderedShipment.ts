import { Package } from './Package'
import { Shipment } from './Shipment'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe an ordered shipment.
 */
export interface OrderedShipment {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The ordered shipment.
   * Shipment
   * Cardinality: 1
   */
  Shipment: Array<Shipment>

  /**
   * A package in this ordered shipment.
   * Package
   * Cardinality: 0..n
   */
  Package?: Array<Package> | undefined
}
