import { Item } from './Item'
import { Location } from './Location'
import { Numeric } from '../cbc/Numeric'
import { RetailPlannedImpact } from './RetailPlannedImpact'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a line item describing the expected impacts associated with a retail event involving a specific
 * product at a specific location.
 */
export interface EventLineItem {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The number of this event line item.
   * Numeric
   * Cardinality: 0..1
   */
  LineNumberNumeric?: Array<Numeric> | undefined

  /**
   * The location of the stores involved in the event described in this line item.
   * Location
   * Cardinality: 0..1
   */
  ParticipatingLocationsLocation?: Array<Location> | undefined

  /**
   * A planned impact of the event described in this line item.
   * Retail Planned Impact
   * Cardinality: 0..n
   */
  RetailPlannedImpact?: Array<RetailPlannedImpact> | undefined

  /**
   * The product with which the event is associated.
   * Item
   * Cardinality: 1
   */
  SupplyItem: Array<Item>
}
