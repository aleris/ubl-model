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
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a delivery.
 */
export interface Delivery {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this delivery.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The quantity of items, child consignments, shipments in this delivery.
   * Quantity
   * Cardinality: 0..1
   */
  Quantity?: Array<Quantity> | undefined

  /**
   * The minimum quantity of items, child consignments, shipments in this delivery.
   * Quantity
   * Cardinality: 0..1
   */
  MinimumQuantity?: Array<Quantity> | undefined

  /**
   * The maximum quantity of items, child consignments, shipments in this delivery.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumQuantity?: Array<Quantity> | undefined

  /**
   * The actual date of delivery.
   * Date
   * Cardinality: 0..1
   */
  ActualDeliveryDate?: Array<Date> | undefined

  /**
   * The actual time of delivery.
   * Time
   * Cardinality: 0..1
   */
  ActualDeliveryTime?: Array<Time> | undefined

  /**
   * The latest date of delivery allowed by the buyer.
   * Date
   * Cardinality: 0..1
   */
  LatestDeliveryDate?: Array<Date> | undefined

  /**
   * The latest time of delivery allowed by the buyer.
   * Time
   * Cardinality: 0..1
   */
  LatestDeliveryTime?: Array<Time> | undefined

  /**
   * An identifier used for approval of access to delivery locations (e.g., port terminals).
   * Identifier
   * Cardinality: 0..1
   */
  ReleaseID?: Array<Identifier> | undefined

  /**
   * The delivery Tracking ID (for transport tracking).
   * Identifier
   * Cardinality: 0..1
   */
  TrackingID?: Array<Identifier> | undefined

  /**
   * The delivery address.
   * Address
   * Cardinality: 0..1
   */
  DeliveryAddress?: Array<Address> | undefined

  /**
   * The delivery location.
   * Location
   * Cardinality: 0..1
   */
  DeliveryLocation?: Array<Location> | undefined

  /**
   * An alternative delivery location.
   * Location
   * Cardinality: 0..1
   */
  AlternativeDeliveryLocation?: Array<Location> | undefined

  /**
   * The period requested for delivery.
   * Period
   * Cardinality: 0..1
   */
  RequestedDeliveryPeriod?: Array<Period> | undefined

  /**
   * The period promised for delivery.
   * Period
   * Cardinality: 0..1
   */
  PromisedDeliveryPeriod?: Array<Period> | undefined

  /**
   * The period estimated for delivery.
   * Period
   * Cardinality: 0..1
   */
  EstimatedDeliveryPeriod?: Array<Period> | undefined

  /**
   * The party responsible for delivering the goods.
   * Party
   * Cardinality: 0..1
   */
  CarrierParty?: Array<Party> | undefined

  /**
   * The party to whom the goods are delivered.
   * Party
   * Cardinality: 0..1
   */
  DeliveryParty?: Array<Party> | undefined

  /**
   * A party to be notified of this delivery.
   * Party
   * Cardinality: 0..n
   */
  NotifyParty?: Array<Party> | undefined

  /**
   * The despatch (pickup) associated with this delivery.
   * Despatch
   * Cardinality: 0..1
   */
  Despatch?: Array<Despatch> | undefined

  /**
   * Terms and conditions relating to the delivery.
   * Delivery Terms
   * Cardinality: 0..n
   */
  DeliveryTerms?: Array<DeliveryTerms> | undefined

  /**
   * The minimum delivery unit for this delivery.
   * Delivery Unit
   * Cardinality: 0..1
   */
  MinimumDeliveryUnit?: Array<DeliveryUnit> | undefined

  /**
   * The maximum delivery unit for this delivery.
   * Delivery Unit
   * Cardinality: 0..1
   */
  MaximumDeliveryUnit?: Array<DeliveryUnit> | undefined

  /**
   * The shipment being delivered.
   * Shipment
   * Cardinality: 0..1
   */
  Shipment?: Array<Shipment> | undefined
}
