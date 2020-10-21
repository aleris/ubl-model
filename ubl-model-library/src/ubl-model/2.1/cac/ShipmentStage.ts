import { AllowanceCharge } from './AllowanceCharge'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Location } from './Location'
import { Party } from './Party'
import { Period } from './Period'
import { Person } from './Person'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransportEvent } from './TransportEvent'
import { TransportMeans } from './TransportMeans'

/**
 * A class to describe one stage of movement in a transport of goods.
 */
export interface ShipmentStage {
  /**
   * An identifier for this shipment stage.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1 , 2 , etc..
   */
  ID?: [Identifier] | undefined

  /**
   * A code signifying the method of transport used for this shipment stage.
   * Code
   * Cardinality: 0..1
   */
  TransportModeCode?: [Code] | undefined

  /**
   * A code signifying the kind of transport means (truck, vessel, etc.) used for this shipment stage.
   * Code
   * Cardinality: 0..1
   */
  TransportMeansTypeCode?: [Code] | undefined

  /**
   * A code signifying the direction of transit in this shipment stage.
   * Code
   * Cardinality: 0..1
   */
  TransitDirectionCode?: [Code] | undefined

  /**
   * An indicator that this stage takes place before the main carriage of the shipment (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: Truck delivery to wharf
   */
  PreCarriageIndicator?: [Indicator] | undefined

  /**
   * An indicator that this stage takes place after the main carriage of the shipment (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: Truck delivery from wharf
   */
  OnCarriageIndicator?: [Indicator] | undefined

  /**
   * The estimated date of delivery in this shipment stage.
   * Date
   * Cardinality: 0..1
   */
  EstimatedDeliveryDate?: [Date] | undefined

  /**
   * The estimated time of delivery in this shipment stage.
   * Time
   * Cardinality: 0..1
   */
  EstimatedDeliveryTime?: [Time] | undefined

  /**
   * The delivery date required by the buyer in this shipment stage.
   * Date
   * Cardinality: 0..1
   */
  RequiredDeliveryDate?: [Date] | undefined

  /**
   * The delivery time required by the buyer in this shipment stage.
   * Time
   * Cardinality: 0..1
   */
  RequiredDeliveryTime?: [Time] | undefined

  /**
   * An identifier for the loading sequence (of consignments) associated with this shipment stage.
   * Identifier
   * Cardinality: 0..1
   */
  LoadingSequenceID?: [Identifier] | undefined

  /**
   * Identifies the successive loading sequence (of consignments) associated with a shipment stage.
   * Identifier
   * Cardinality: 0..1
   */
  SuccessiveSequenceID?: [Identifier] | undefined

  /**
   * Text of instructions applicable to a shipment stage.
   * Text
   * Cardinality: 0..n
   */
  Instructions?: Array<Text> | undefined

  /**
   * Text of instructions relating to demurrage (the case in which a vessel is prevented from loading or discharging
   * cargo within the stipulated laytime).
   * Text
   * Cardinality: 0..n
   */
  DemurrageInstructions?: Array<Text> | undefined

  /**
   * The total number of crew aboard a transport means.
   * Quantity
   * Cardinality: 0..1
   */
  CrewQuantity?: [Quantity] | undefined

  /**
   * The total number of passengers aboard a transport means.
   * Quantity
   * Cardinality: 0..1
   */
  PassengerQuantity?: [Quantity] | undefined

  /**
   * The period during which this shipment stage actually took place.
   * Period
   * Cardinality: 0..1
   */
  TransitPeriod?: [Period] | undefined

  /**
   * A carrier party responsible for this shipment stage.
   * Party
   * Cardinality: 0..n
   */
  CarrierParty?: Array<Party> | undefined

  /**
   * The means of transport used in this shipment stage.
   * Transport Means
   * Cardinality: 0..1
   */
  TransportMeans?: [TransportMeans] | undefined

  /**
   * The location of loading for a shipment stage.
   * Location
   * Cardinality: 0..1
   */
  LoadingPortLocation?: [Location] | undefined

  /**
   * The location of unloading for a shipment stage.
   * Location
   * Cardinality: 0..1
   */
  UnloadingPortLocation?: [Location] | undefined

  /**
   * The location of transshipment relating to a shipment stage.
   * Location
   * Cardinality: 0..1
   */
  TransshipPortLocation?: [Location] | undefined

  /**
   * The loading of goods in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  LoadingTransportEvent?: [TransportEvent] | undefined

  /**
   * The examination of shipments in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  ExaminationTransportEvent?: [TransportEvent] | undefined

  /**
   * The making available of shipments in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  AvailabilityTransportEvent?: [TransportEvent] | undefined

  /**
   * The export event associated with this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  ExportationTransportEvent?: [TransportEvent] | undefined

  /**
   * The discharge event associated with this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  DischargeTransportEvent?: [TransportEvent] | undefined

  /**
   * The warehousing event associated with this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  WarehousingTransportEvent?: [TransportEvent] | undefined

  /**
   * The receiver's takeover of the goods in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  TakeoverTransportEvent?: [TransportEvent] | undefined

  /**
   * The optional takeover of the goods in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  OptionalTakeoverTransportEvent?: [TransportEvent] | undefined

  /**
   * The dropping off of goods in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  DropoffTransportEvent?: [TransportEvent] | undefined

  /**
   * The pickup of goods in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  ActualPickupTransportEvent?: [TransportEvent] | undefined

  /**
   * The delivery of goods in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  DeliveryTransportEvent?: [TransportEvent] | undefined

  /**
   * The receipt of goods in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  ReceiptTransportEvent?: [TransportEvent] | undefined

  /**
   * The storage of goods in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  StorageTransportEvent?: [TransportEvent] | undefined

  /**
   * The acceptance of goods in this shipment stage.
   * Transport Event
   * Cardinality: 0..1
   */
  AcceptanceTransportEvent?: [TransportEvent] | undefined

  /**
   * A terminal operator associated with this shipment stage.
   * Party
   * Cardinality: 0..1
   */
  TerminalOperatorParty?: [Party] | undefined

  /**
   * A customs agent associated with this shipment stage.
   * Party
   * Cardinality: 0..1
   */
  CustomsAgentParty?: [Party] | undefined

  /**
   * The estimated transit period of this shipment stage.
   * Period
   * Cardinality: 0..1
   */
  EstimatedTransitPeriod?: [Period] | undefined

  /**
   * A freight allowance charge for this shipment stage.
   * Allowance Charge
   * Cardinality: 0..n
   */
  FreightAllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * The location associated with a freight charge related to this shipment stage.
   * Location
   * Cardinality: 0..1
   */
  FreightChargeLocation?: [Location] | undefined

  /**
   * The detention of a transport means during loading and unloading operations.
   * Transport Event
   * Cardinality: 0..n
   */
  DetentionTransportEvent?: Array<TransportEvent> | undefined

  /**
   * The departure requested by the party requesting a transportation service.
   * Transport Event
   * Cardinality: 0..1
   */
  RequestedDepartureTransportEvent?: [TransportEvent] | undefined

  /**
   * The arrival requested by the party requesting a transportation service.
   * Transport Event
   * Cardinality: 0..1
   */
  RequestedArrivalTransportEvent?: [TransportEvent] | undefined

  /**
   * A waypoint requested by the party requesting a transportation service.
   * Transport Event
   * Cardinality: 0..n
   */
  RequestedWaypointTransportEvent?: Array<TransportEvent> | undefined

  /**
   * The departure planned by the party providing a transportation service.
   * Transport Event
   * Cardinality: 0..1
   */
  PlannedDepartureTransportEvent?: [TransportEvent] | undefined

  /**
   * The arrival planned by the party providing a transportation service.
   * Transport Event
   * Cardinality: 0..1
   */
  PlannedArrivalTransportEvent?: [TransportEvent] | undefined

  /**
   * A waypoint planned by the party providing a transportation service.
   * Transport Event
   * Cardinality: 0..n
   */
  PlannedWaypointTransportEvent?: Array<TransportEvent> | undefined

  /**
   * The actual departure from a specific location during a transportation service.
   * Transport Event
   * Cardinality: 0..1
   */
  ActualDepartureTransportEvent?: [TransportEvent] | undefined

  /**
   * The location of an actual waypoint during a transportation service.
   * Transport Event
   * Cardinality: 0..1
   */
  ActualWaypointTransportEvent?: [TransportEvent] | undefined

  /**
   * The actual arrival at a specific location during a transportation service.
   * Transport Event
   * Cardinality: 0..1
   */
  ActualArrivalTransportEvent?: [TransportEvent] | undefined

  /**
   * A significant occurrence in the course of this shipment of goods.
   * Transport Event
   * Cardinality: 0..n
   */
  TransportEvent?: Array<TransportEvent> | undefined

  /**
   * Describes an estimated departure at a location during a transport service.
   * Transport Event
   * Cardinality: 0..1
   */
  EstimatedDepartureTransportEvent?: [TransportEvent] | undefined

  /**
   * Describes an estimated arrival at a location during a transport service.
   * Transport Event
   * Cardinality: 0..1
   */
  EstimatedArrivalTransportEvent?: [TransportEvent] | undefined

  /**
   * A person who travels in a conveyance without participating in its operation.
   * Person
   * Cardinality: 0..n
   */
  PassengerPerson?: Array<Person> | undefined

  /**
   * Describes a person responsible for driving the transport means.
   * Person
   * Cardinality: 0..n
   */
  DriverPerson?: Array<Person> | undefined

  /**
   * Describes a person being responsible for providing the required administrative reporting relating to a transport.
   * Person
   * Cardinality: 0..1
   */
  ReportingPerson?: [Person] | undefined

  /**
   * A person operating or serving aboard a transport means.
   * Person
   * Cardinality: 0..n
   */
  CrewMemberPerson?: Array<Person> | undefined

  /**
   * The person on board the vessel, accountable to the master, designated by the company as responsible for the
   * security of the ship, including implementation and maintenance of the ship security plan and for the liaison with
   * the company security officer and the port facility security officers.
   * Person
   * Cardinality: 0..1
   */
  SecurityOfficerPerson?: [Person] | undefined

  /**
   * The person responsible for the ship's safe and efficient operation, including cargo operations, navigation, crew
   * management and for ensuring that the vessel complies with local and international laws, as well as company and flag
   * state policies.
   * Person
   * Cardinality: 0..1
   */
  MasterPerson?: [Person] | undefined

  /**
   * The person responsible for the health of the people aboard a ship at sea.
   * Person
   * Cardinality: 0..1
   */
  ShipsSurgeonPerson?: [Person] | undefined
}
