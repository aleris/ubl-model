import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Party } from './Party'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a pickup for delivery.
 */
export interface Pickup {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this pickup.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The actual pickup date.
   * Date
   * Cardinality: 0..1
   */
  ActualPickupDate?: Array<Date> | undefined

  /**
   * The actual pickup time.
   * Time
   * Cardinality: 0..1
   */
  ActualPickupTime?: Array<Time> | undefined

  /**
   * The earliest pickup date.
   * Date
   * Cardinality: 0..1
   */
  EarliestPickupDate?: Array<Date> | undefined

  /**
   * The earliest pickup time.
   * Time
   * Cardinality: 0..1
   */
  EarliestPickupTime?: Array<Time> | undefined

  /**
   * The latest pickup date.
   * Date
   * Cardinality: 0..1
   */
  LatestPickupDate?: Array<Date> | undefined

  /**
   * The latest pickup time.
   * Time
   * Cardinality: 0..1
   */
  LatestPickupTime?: Array<Time> | undefined

  /**
   * The pickup location.
   * Location
   * Cardinality: 0..1
   */
  PickupLocation?: Array<Location> | undefined

  /**
   * The party responsible for picking up a delivery.
   * Party
   * Cardinality: 0..1
   */
  PickupParty?: Array<Party> | undefined
}
