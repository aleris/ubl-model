import { Code } from '../cbc/Code'
import { CommodityClassification } from './CommodityClassification'
import { Date } from '../cbc/Date'
import { Dimension } from './Dimension'
import { EnvironmentalEmission } from './EnvironmentalEmission'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { Period } from './Period'
import { ServiceFrequency } from './ServiceFrequency'
import { ShipmentStage } from './ShipmentStage'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransportEquipment } from './TransportEquipment'
import { TransportEvent } from './TransportEvent'

/**
 * A class to describe a transportation service.
 */
export interface TransportationService {
  /**
   * A code signifying the extent of this transportation service (e.g., door-to-door, port-to-port).
   * Code
   * Cardinality: 1
   */
  TransportServiceCode: [Code]

  /**
   * A code signifying the tariff class applicable to this transportation service.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Tariff Class Specifier
   */
  TariffClassCode?: [Code] | undefined

  /**
   * The priority of this transportation service.
   * Text
   * Cardinality: 0..1
   */
  Priority?: [Text] | undefined

  /**
   * A code signifying the rate class for freight in this transportation service.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Charge Basis
   */
  FreightRateClassCode?: [Code] | undefined

  /**
   * Text describing this transportation service.
   * Text
   * Cardinality: 0..n
   */
  TransportationServiceDescription?: Array<Text> | undefined

  /**
   * The Uniform Resource Identifier (URI) of a document providing additional details regarding this transportation
   * service.
   * Identifier
   * Cardinality: 0..1
   */
  TransportationServiceDetailsURI?: [Identifier] | undefined

  /**
   * In a transport contract, the deadline date by which this transportation service has to be booked. For example, if
   * this service is scheduled for Wednesday 16 February 2011 at 10 a.m. CET, the nomination date might be Tuesday15
   * February 2011.
   * Date
   * Cardinality: 0..1
   */
  NominationDate?: [Date] | undefined

  /**
   * In a transport contract, the deadline time by which this transportation service has to be booked. For example, if
   * this service is scheduled for Wednesday 16 February 2011 at 10 a.m. CET, the nomination date might be Tuesday15
   * February 2011 and the nomination time 4 p.m. at the latest.
   * Time
   * Cardinality: 0..1
   */
  NominationTime?: [Time] | undefined

  /**
   * The name of this transportation service.
   * Name
   * Cardinality: 0..1
   */
  Name?: [Text] | undefined

  /**
   * A number indicating the order of this transportation service in a sequence of transportation services.
   * Numeric
   * Cardinality: 0..1
   */
  SequenceNumeric?: [Numeric] | undefined

  /**
   * A piece of transport equipment used in this transportation service.
   * Transport Equipment
   * Cardinality: 0..n
   */
  TransportEquipment?: Array<TransportEquipment> | undefined

  /**
   * A piece of transport equipment supported in this transportation service.
   * Transport Equipment
   * Cardinality: 0..n
   */
  SupportedTransportEquipment?: Array<TransportEquipment> | undefined

  /**
   * A piece of transport equipment that is not supported in this transportation service.
   * Transport Equipment
   * Cardinality: 0..n
   */
  UnsupportedTransportEquipment?: Array<TransportEquipment> | undefined

  /**
   * A classification of this transportation service.
   * Commodity Classification
   * Cardinality: 0..n
   */
  CommodityClassification?: Array<CommodityClassification> | undefined

  /**
   * A classification (e.g., general cargo) for commodities that can be handled in this transportation service.
   * Commodity Classification
   * Cardinality: 0..n
   */
  SupportedCommodityClassification?: Array<CommodityClassification> | undefined

  /**
   * A classification for commodities that cannot be handled in this transportation service.
   * Commodity Classification
   * Cardinality: 0..n
   */
  UnsupportedCommodityClassification?: Array<CommodityClassification> | undefined

  /**
   * The total capacity or volume available in this transportation service.
   * Dimension
   * Cardinality: 0..1
   */
  TotalCapacityDimension?: [Dimension] | undefined

  /**
   * One of the stages of shipment in this transportation service.
   * Shipment Stage
   * Cardinality: 0..n
   */
  ShipmentStage?: Array<ShipmentStage> | undefined

  /**
   * One of the transport events taking place in this transportation service.
   * Transport Event
   * Cardinality: 0..n
   */
  TransportEvent?: Array<TransportEvent> | undefined

  /**
   * The transport service provider responsible for this transportation service.
   * Party
   * Cardinality: 0..1
   */
  ResponsibleTransportServiceProviderParty?: [Party] | undefined

  /**
   * An environmental emission resulting from this transportation service.
   * Environmental Emission
   * Cardinality: 0..n
   */
  EnvironmentalEmission?: Array<EnvironmentalEmission> | undefined

  /**
   * The estimated duration of this transportation service.
   * Period
   * Cardinality: 0..1
   */
  EstimatedDurationPeriod?: [Period] | undefined

  /**
   * A class to specify which day of the week a transport service is operational.
   * Service Frequency
   * Cardinality: 0..n
   */
  ScheduledServiceFrequency?: Array<ServiceFrequency> | undefined
}
