import { AirTransport } from './AirTransport'
import { Code } from '../cbc/Code'
import { Dimension } from './Dimension'
import { Identifier } from '../cbc/Identifier'
import { MaritimeTransport } from './MaritimeTransport'
import { Party } from './Party'
import { RailTransport } from './RailTransport'
import { RoadTransport } from './RoadTransport'
import { Stowage } from './Stowage'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a particular vehicle or vessel used for the conveyance of goods or persons.
 */
export interface TransportMeans {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the regular service schedule of this means of transport.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Voyage Number, Scheduled Conveyance Identifier (WCO ID 205), Flight Number
   */
  JourneyID?: Array<Identifier> | undefined

  /**
   * An identifier for the country in which this means of transport is registered.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Nationality of Means of Transport (WCO 175, 178 and 179)
   * Examples: LIB
   */
  RegistrationNationalityID?: Array<Identifier> | undefined

  /**
   * Text describing the country in which this means of transport is registered.
   * Text
   * Cardinality: 0..n
   * Alternative business terms: Flag of Vessel, Nationality of Ship
   * Examples: Liberia
   */
  RegistrationNationality?: Array<Text> | undefined

  /**
   * A code signifying the direction of this means of transport.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Transit Direction
   * Examples: North , East
   */
  DirectionCode?: Array<Code> | undefined

  /**
   * A code signifying the type of this means of transport (truck, vessel, etc.).
   * Code
   * Cardinality: 0..1
   */
  TransportMeansTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the service regularly provided by the carrier operating this means of transport.
   * Code
   * Cardinality: 0..1
   */
  TradeServiceCode?: Array<Code> | undefined

  /**
   * The location within the means of transport where goods are to be or have been stowed.
   * Stowage
   * Cardinality: 0..1
   */
  Stowage?: Array<Stowage> | undefined

  /**
   * An aircraft used for transport.
   * Air Transport
   * Cardinality: 0..1
   */
  AirTransport?: Array<AirTransport> | undefined

  /**
   * A vehicle used for road transport.
   * Road Transport
   * Cardinality: 0..1
   */
  RoadTransport?: Array<RoadTransport> | undefined

  /**
   * Equipment used for rail transport.
   * Rail Transport
   * Cardinality: 0..1
   */
  RailTransport?: Array<RailTransport> | undefined

  /**
   * A vessel used for transport by water (not only by sea).
   * Maritime Transport
   * Cardinality: 0..1
   */
  MaritimeTransport?: Array<MaritimeTransport> | undefined

  /**
   * The party that owns this means of transport.
   * Party
   * Cardinality: 0..1
   */
  OwnerParty?: Array<Party> | undefined

  /**
   * A measurable dimension (length, mass, weight, or volume) of this means of transport.
   * Dimension
   * Cardinality: 0..n
   */
  MeasurementDimension?: Array<Dimension> | undefined
}
