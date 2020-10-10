import { Address } from './Address'
import { Date } from '../cbc/Date'
import { DeliveryTerms } from './DeliveryTerms'
import { DeliveryUnit } from './DeliveryUnit'
import { Despatch } from './Despatch'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Party } from './Party'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Shipment } from './Shipment'
import { Time } from '../cbc/Time'

/**
 * A class to describe a delivery.
 */
export interface Delivery {
  /**
   * An identifier for this delivery.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * The quantity of items, child consignments, shipments in this delivery.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity: [Quantity] | undefined

  /**
   * The minimum quantity of items, child consignments, shipments in this delivery.
   * Quantity
   * Cardinality: 0..1
   */
  MinimumQuantity: [Quantity] | undefined

  /**
   * The maximum quantity of items, child consignments, shipments in this delivery.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumQuantity: [Quantity] | undefined

  /**
   * The actual date of delivery.
   * Date
   * Cardinality: 0..1
   */
  ActualDeliveryDate: [Date] | undefined

  /**
   * The actual time of delivery.
   * Time
   * Cardinality: 0..1
   */
  ActualDeliveryTime: [Time] | undefined

  /**
   * The latest date of delivery allowed by the buyer.
   * Date
   * Cardinality: 0..1
   */
  LatestDeliveryDate: [Date] | undefined

  /**
   * The latest time of delivery allowed by the buyer.
   * Time
   * Cardinality: 0..1
   */
  LatestDeliveryTime: [Time] | undefined

  /**
   * An identifier used for approval of access to delivery locations (e.g., port terminals).
   * Identifier
   * Cardinality: 0..1
   */
  ReleaseID: [Identifier] | undefined

  /**
   * The delivery Tracking ID (for transport tracking).
   * Identifier
   * Cardinality: 0..1
   */
  TrackingID: [Identifier] | undefined

  /**
   * The delivery address.
   * Address
   * Cardinality: 0..1
   */
  DeliveryAddress: [Address] | undefined

  /**
   * The delivery location.
   * Location
   * Cardinality: 0..1
   */
  DeliveryLocation: [Location] | undefined

  /**
   * An alternative delivery location.
   * Location
   * Cardinality: 0..1
   */
  AlternativeDeliveryLocation: [Location] | undefined

  /**
   * The period requested for delivery.
   * Period
   * Cardinality: 0..1
   */
  RequestedDeliveryPeriod: [Period] | undefined

  /**
   * The period promised for delivery.
   * Period
   * Cardinality: 0..1
   */
  PromisedDeliveryPeriod: [Period] | undefined

  /**
   * The period estimated for delivery.
   * Period
   * Cardinality: 0..1
   */
  EstimatedDeliveryPeriod: [Period] | undefined

  /**
   * The party responsible for delivering the goods.
   * Party
   * Cardinality: 0..1
   */
  CarrierParty: [Party] | undefined

  /**
   * The party to whom the goods are delivered.
   * Party
   * Cardinality: 0..1
   */
  DeliveryParty: [Party] | undefined

  /**
   * A party to be notified of this delivery.
   * Party
   * Cardinality: 0..n
   */
  NotifyParty: Array<Party> | undefined

  /**
   * The despatch (pickup) associated with this delivery.
   * Despatch
   * Cardinality: 0..1
   */
  Despatch: [Despatch] | undefined

  /**
   * Terms and conditions relating to the delivery.
   * Delivery Terms
   * Cardinality: 0..n
   */
  DeliveryTerms: Array<DeliveryTerms> | undefined

  /**
   * The minimum delivery unit for this delivery.
   * Delivery Unit
   * Cardinality: 0..1
   */
  MinimumDeliveryUnit: [DeliveryUnit] | undefined

  /**
   * The maximum delivery unit for this delivery.
   * Delivery Unit
   * Cardinality: 0..1
   */
  MaximumDeliveryUnit: [DeliveryUnit] | undefined

  /**
   * The shipment being delivered.
   * Shipment
   * Cardinality: 0..1
   */
  Shipment: [Shipment] | undefined
}
