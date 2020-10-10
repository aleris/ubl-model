import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Party } from './Party'
import { Time } from '../cbc/Time'

/**
 * A class to describe a pickup for delivery.
 */
export interface Pickup {
  /**
   * An identifier for this pickup.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The actual pickup date.
   * Date
   * Cardinality: 0..1
   */
  ActualPickupDate: [Date] | undefined

  /**
   * The actual pickup time.
   * Time
   * Cardinality: 0..1
   */
  ActualPickupTime: [Time] | undefined

  /**
   * The earliest pickup date.
   * Date
   * Cardinality: 0..1
   */
  EarliestPickupDate: [Date] | undefined

  /**
   * The earliest pickup time.
   * Time
   * Cardinality: 0..1
   */
  EarliestPickupTime: [Time] | undefined

  /**
   * The latest pickup date.
   * Date
   * Cardinality: 0..1
   */
  LatestPickupDate: [Date] | undefined

  /**
   * The latest pickup time.
   * Time
   * Cardinality: 0..1
   */
  LatestPickupTime: [Time] | undefined

  /**
   * The pickup location.
   * Location
   * Cardinality: 0..1
   */
  PickupLocation: [Location] | undefined

  /**
   * The party responsible for picking up a delivery.
   * Party
   * Cardinality: 0..1
   */
  PickupParty: [Party] | undefined
}
