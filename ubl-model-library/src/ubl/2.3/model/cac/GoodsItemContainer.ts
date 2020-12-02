import { Identifier } from '../cbc/Identifier'
import { Quantity } from '../cbc/Quantity'
import { TransportEquipment } from './TransportEquipment'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class defining how goods items are split across transport equipment.
 */
export interface GoodsItemContainer {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this goods item container.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * The number of goods items loaded into or onto one piece of transport equipment as a total consignment or part of a
   * consignment.
   * Quantity
   * Cardinality: 0..1
   * Alternative business terms: Number of packages stuffed
   */
  Quantity?: Array<Quantity> | undefined

  /**
   * A piece of transport equipment used to contain a single goods item.
   * Transport Equipment
   * Cardinality: 0..n
   */
  TransportEquipment?: Array<TransportEquipment> | undefined
}
