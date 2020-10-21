import { Consignment } from './Consignment'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { ShipmentStage } from './ShipmentStage'
import { TransportationService } from './TransportationService'

/**
 * A class to describe one segment or leg in a transportation service.
 */
export interface TransportationSegment {
  /**
   * A number indicating the order of this segment in the sequence of transportation segments making up a transportation
   * service.
   * Numeric
   * Cardinality: 1
   * Examples: 1, 2, 3, 4, etc.
   */
  SequenceNumeric: [Numeric]

  /**
   * An identifier for the transport execution plan governing this transportation segment.
   * Identifier
   * Cardinality: 0..1
   */
  TransportExecutionPlanReferenceID?: [Identifier] | undefined

  /**
   * The transportation service used in this transportation segment.
   * Transportation Service
   * Cardinality: 1
   */
  TransportationService: [TransportationService]

  /**
   * The transport service provider responsible for carrying out transportation services in this transportation segment.
   * Party
   * Cardinality: 1
   */
  TransportServiceProviderParty: [Party]

  /**
   * A consignment referenced in this transportation segment. Such a consignment may have different identifiers than the
   * consignment identifiers being used in the transportation service agreed between the transport user and the
   * transport service provider.
   * Consignment
   * Cardinality: 0..1
   */
  ReferencedConsignment?: [Consignment] | undefined

  /**
   * The shipment stage associated with this transportation segment.
   * Shipment Stage
   * Cardinality: 0..n
   */
  ShipmentStage?: Array<ShipmentStage> | undefined
}
