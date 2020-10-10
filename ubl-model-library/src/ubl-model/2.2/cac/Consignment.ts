import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Contract } from './Contract'
import { Country } from './Country'
import { CustomsDeclaration } from './CustomsDeclaration'
import { DeliveryTerms } from './DeliveryTerms'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Location } from './Location'
import { Measure } from '../cbc/Measure'
import { Party } from './Party'
import { PaymentTerms } from './PaymentTerms'
import { Quantity } from '../cbc/Quantity'
import { Shipment } from './Shipment'
import { ShipmentStage } from './ShipmentStage'
import { Status } from './Status'
import { Text } from '../cbc/Text'
import { TransportationService } from './TransportationService'
import { TransportEvent } from './TransportEvent'
import { TransportHandlingUnit } from './TransportHandlingUnit'

/**
 * A class to describe an identifiable collection of one or more goods items to be transported between the consignor and
 * the consignee. This information may be defined within a transport contract. A consignment may comprise more than one
 * shipment (e.g., when consolidated by a freight forwarder).
 */
export interface Consignment {
  /**
   * An identifier assigned to a collection of goods for both import and export.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Unique consignment reference number (UCR)
   */
  ID: [Identifier]

  /**
   * An identifier for this consignment, assigned by the carrier.
   * Identifier
   * Cardinality: 0..1
   */
  CarrierAssignedID: [Identifier] | undefined

  /**
   * An identifier for this consignment, assigned by the consignee.
   * Identifier
   * Cardinality: 0..1
   */
  ConsigneeAssignedID: [Identifier] | undefined

  /**
   * An identifier for this consignment, assigned by the consignor.
   * Identifier
   * Cardinality: 0..1
   */
  ConsignorAssignedID: [Identifier] | undefined

  /**
   * An identifier for this consignment, assigned by the freight forwarder.
   * Identifier
   * Cardinality: 0..1
   */
  FreightForwarderAssignedID: [Identifier] | undefined

  /**
   * An identifier for this consignment, assigned by the broker.
   * Identifier
   * Cardinality: 0..1
   */
  BrokerAssignedID: [Identifier] | undefined

  /**
   * An identifier for this consignment, assigned by the contracted carrier.
   * Identifier
   * Cardinality: 0..1
   */
  ContractedCarrierAssignedID: [Identifier] | undefined

  /**
   * An identifier for this consignment, assigned by the performing carrier.
   * Identifier
   * Cardinality: 0..1
   */
  PerformingCarrierAssignedID: [Identifier] | undefined

  /**
   * A textual summary description of the consignment.
   * Text
   * Cardinality: 0..n
   */
  SummaryDescription: Array<Text> | undefined

  /**
   * The total of all invoice amounts declared in this consignment.
   * Amount
   * Cardinality: 0..1
   */
  TotalInvoiceAmount: [Amount] | undefined

  /**
   * The total declared value for customs purposes of all the goods in this consignment, regardless of whether they are
   * subject to the same customs procedure, tariff/statistical categorization, country information, or duty regime.
   * Amount
   * Cardinality: 0..1
   */
  DeclaredCustomsValueAmount: [Amount] | undefined

  /**
   * Text describing the tariff applied to this consignment.
   * Text
   * Cardinality: 0..n
   */
  TariffDescription: Array<Text> | undefined

  /**
   * A code signifying the tariff applied to this consignment.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Tariff code number (WCO ID 145)
   */
  TariffCode: [Code] | undefined

  /**
   * The amount of the premium payable to an insurance company for insuring the goods contained in this consignment.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Insurance Cost
   */
  InsurancePremiumAmount: [Amount] | undefined

  /**
   * The total declared weight of the goods in this consignment, including packaging but excluding the carrier's
   * equipment.
   * Measure
   * Cardinality: 0..1
   * Alternative business terms: Total gross weight (WCO ID 131)
   * Examples: Total cube of all goods items referred to as one consignment.
   */
  GrossWeightMeasure: [Measure] | undefined

  /**
   * The total net weight of all the goods items referred to as one consignment.
   * Measure
   * Cardinality: 0..1
   */
  NetWeightMeasure: [Measure] | undefined

  /**
   * The total net weight of the goods in this consignment, exclusive of packaging.
   * Measure
   * Cardinality: 0..1
   */
  NetNetWeightMeasure: [Measure] | undefined

  /**
   * The weight upon which a charge is to be based.
   * Measure
   * Cardinality: 0..1
   * Alternative business terms: Chargeable Weight. Basis.Measure
   */
  ChargeableWeightMeasure: [Measure] | undefined

  /**
   * The total volume of the goods referred to as one consignment.
   * Measure
   * Cardinality: 0..1
   * Alternative business terms: Cube
   */
  GrossVolumeMeasure: [Measure] | undefined

  /**
   * The total net volume of all goods items referred to as one consignment.
   * Measure
   * Cardinality: 0..1
   */
  NetVolumeMeasure: [Measure] | undefined

  /**
   * The total length in a means of transport or a piece of transport equipment which, given the width and height of the
   * transport means, will accommodate all of the consignments in a single consolidation.
   * Measure
   * Cardinality: 0..1
   */
  LoadingLengthMeasure: [Measure] | undefined

  /**
   * Remarks concerning the complete consignment, to be printed on the transport document.
   * Text
   * Cardinality: 0..n
   */
  Remarks: Array<Text> | undefined

  /**
   * An indication that the transported goods in this consignment are subject to an international regulation concerning
   * the carriage of dangerous goods (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Alternative business terms: Dangerous Goods RID Indicator
   * Examples: default is negative
   */
  HazardousRiskIndicator: [Indicator] | undefined

  /**
   * An indication that the transported goods in this consignment are animal foodstuffs (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  AnimalFoodIndicator: [Indicator] | undefined

  /**
   * An indication that the transported goods in this consignment are for human consumption (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  HumanFoodIndicator: [Indicator] | undefined

  /**
   * An indication that the transported goods are livestock (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  LivestockIndicator: [Indicator] | undefined

  /**
   * An indication that the transported goods in this consignment are bulk cargoes (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  BulkCargoIndicator: [Indicator] | undefined

  /**
   * An indication that the transported goods in this consignment are containerized cargoes (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  ContainerizedIndicator: [Indicator] | undefined

  /**
   * An indication that the transported goods in this consignment are general cargoes (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  GeneralCargoIndicator: [Indicator] | undefined

  /**
   * An indication that the transported goods in this consignment require special security (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  SpecialSecurityIndicator: [Indicator] | undefined

  /**
   * An indication that this consignment will be paid for by a third party (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  ThirdPartyPayerIndicator: [Indicator] | undefined

  /**
   * Service instructions to the carrier, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  CarrierServiceInstructions: Array<Text> | undefined

  /**
   * Service instructions for customs clearance, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  CustomsClearanceServiceInstructions: Array<Text> | undefined

  /**
   * Service instructions for the forwarder, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  ForwarderServiceInstructions: Array<Text> | undefined

  /**
   * Special service instructions, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  SpecialServiceInstructions: Array<Text> | undefined

  /**
   * A sequence identifier for this consignment.
   * Identifier
   * Cardinality: 0..1
   */
  SequenceID: [Identifier] | undefined

  /**
   * A code signifying the priority or level of service required for this consignment.
   * Code
   * Cardinality: 0..1
   */
  ShippingPriorityLevelCode: [Code] | undefined

  /**
   * The handling required for this consignment, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: Special Handling
   */
  HandlingCode: [Code] | undefined

  /**
   * The handling required for this consignment, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  HandlingInstructions: Array<Text> | undefined

  /**
   * Free-form text pertinent to this consignment, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Information: Array<Text> | undefined

  /**
   * The total number of goods items in this consignment.
   * Quantity
   * Cardinality: 0..1
   */
  TotalGoodsItemQuantity: [Quantity] | undefined

  /**
   * The number of pieces of transport handling equipment (pallets, boxes, cases, etc.) in this consignment.
   * Quantity
   * Cardinality: 0..1
   * Alternative business terms: Number of THUs
   */
  TotalTransportHandlingUnitQuantity: [Quantity] | undefined

  /**
   * The amount covered by insurance for this consignment.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Value Insured
   */
  InsuranceValueAmount: [Amount] | undefined

  /**
   * The value of this consignment, declared by the shipper or his agent solely for the purpose of varying the carrier's
   * level of liability from that provided in the contract of carriage, in case of loss or damage to goods or delayed
   * delivery.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Declared value for carriage, Interest in delivery
   */
  DeclaredForCarriageValueAmount: [Amount] | undefined

  /**
   * The value, declared for statistical purposes, of those goods in this consignment that have the same statistical
   * heading.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Statistical Value
   */
  DeclaredStatisticsValueAmount: [Amount] | undefined

  /**
   * The monetary amount that has to be or has been paid as calculated under the applicable trade delivery.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: FOB Value
   */
  FreeOnBoardValueAmount: [Amount] | undefined

  /**
   * Special instructions relating to this consignment.
   * Text
   * Cardinality: 0..n
   */
  SpecialInstructions: Array<Text> | undefined

  /**
   * An indicator that this consignment has been split in transit (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  SplitConsignmentIndicator: [Indicator] | undefined

  /**
   * A set of delivery instructions relating to this consignment.
   * Text
   * Cardinality: 0..n
   */
  DeliveryInstructions: Array<Text> | undefined

  /**
   * The count in this consignment considering goods items, child consignments, shipments
   * Quantity
   * Cardinality: 0..1
   */
  ConsignmentQuantity: [Quantity] | undefined

  /**
   * An indicator that this consignment can be consolidated (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   * Examples: default is negative
   */
  ConsolidatableIndicator: [Indicator] | undefined

  /**
   * Instructions regarding haulage of this consignment, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  HaulageInstructions: Array<Text> | undefined

  /**
   * An identifier for the loading sequence of this consignment.
   * Identifier
   * Cardinality: 0..1
   */
  LoadingSequenceID: [Identifier] | undefined

  /**
   * The quantity of (consolidated) child consignments
   * Quantity
   * Cardinality: 0..1
   */
  ChildConsignmentQuantity: [Quantity] | undefined

  /**
   * The total number of packages associated with a Consignment.
   * Quantity
   * Cardinality: 0..1
   */
  TotalPackagesQuantity: [Quantity] | undefined

  /**
   * A consolidated shipment (a shipment created by an act of consolidation).
   * Shipment
   * Cardinality: 0..n
   */
  ConsolidatedShipment: Array<Shipment> | undefined

  /**
   * A class describing identifiers or references relating to customs procedures.
   * Customs Declaration
   * Cardinality: 0..n
   */
  CustomsDeclaration: Array<CustomsDeclaration> | undefined

  /**
   * The pickup of this consignment requested by the party requesting a transportation service (the transport user).
   * Transport Event
   * Cardinality: 0..1
   */
  RequestedPickupTransportEvent: [TransportEvent] | undefined

  /**
   * The delivery of this consignment requested by the party requesting a transportation service (the transport user).
   * Transport Event
   * Cardinality: 0..1
   */
  RequestedDeliveryTransportEvent: [TransportEvent] | undefined

  /**
   * The pickup of this consignment planned by the party responsible for providing the transportation service (the
   * transport service provider).
   * Transport Event
   * Cardinality: 0..1
   */
  PlannedPickupTransportEvent: [TransportEvent] | undefined

  /**
   * The delivery of this consignment planned by the party responsible for providing the transportation service (the
   * transport service provider).
   * Transport Event
   * Cardinality: 0..1
   */
  PlannedDeliveryTransportEvent: [TransportEvent] | undefined

  /**
   * The actual pickup of this consignment by the party responsible for providing the transportation service (the
   * transport service provider).
   * Transport Event
   * Cardinality: 0..1
   */
  ActualPickupTransportEvent: [TransportEvent] | undefined

  /**
   * The actual delivery of this consignment by the party responsible for providing the transportation service (the
   * transport service provider).
   * Transport Event
   * Cardinality: 0..1
   */
  ActualDeliveryTransportEvent: [TransportEvent] | undefined

  /**
   * The status of a particular condition associated with this consignment.
   * Status
   * Cardinality: 0..n
   */
  Status: Array<Status> | undefined

  /**
   * One of the child consignments of which a consolidated consignment is composed.
   * Consignment
   * Cardinality: 0..n
   */
  ChildConsignment: Array<Consignment> | undefined

  /**
   * A party to which goods are consigned.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Consignee (WCO ID 51 and 52)
   */
  ConsigneeParty: [Party] | undefined

  /**
   * The party that makes the export declaration, or on behalf of which the export declaration is made, and that is the
   * owner of the goods in this consignment or has similar right of disposal over them at the time when the declaration
   * is accepted.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Exporter (WCO ID 41 and 42)
   */
  ExporterParty: [Party] | undefined

  /**
   * The party consigning goods, as stipulated in the transport contract by the party ordering transport.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Consignor (WCO ID 71 and 72)
   */
  ConsignorParty: [Party] | undefined

  /**
   * The party that makes an import declaration regarding this consignment, or on behalf of which a customs clearing
   * agent or other authorized person makes an import declaration regarding this consignment. This may include a person
   * who has possession of the goods or to whom the goods are consigned.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Importer (WCO ID 39 and 40)
   */
  ImporterParty: [Party] | undefined

  /**
   * The party providing the transport of goods in this consignment between named points.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49
   * Alternative business terms: and 50)
   */
  CarrierParty: [Party] | undefined

  /**
   * The party combining individual smaller consignments into a single larger shipment (the consolidated shipment),
   * which is sent to a counterpart that mirrors the consolidator's activity by dividing the consolidated consignment
   * into its original components.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Consolidator (WCO ID 192 AND 193)
   */
  FreightForwarderParty: [Party] | undefined

  /**
   * The party to be notified upon arrival of goods and when special occurrences (usually pre-defined) take place during
   * a transportation service.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: WCO ID 57 and 58
   */
  NotifyParty: [Party] | undefined

  /**
   * The original despatch (sender) party for this consignment.
   * Party
   * Cardinality: 0..1
   */
  OriginalDespatchParty: [Party] | undefined

  /**
   * The final delivery party for this consignment.
   * Party
   * Cardinality: 0..1
   */
  FinalDeliveryParty: [Party] | undefined

  /**
   * The party performing the carriage of this consignment.
   * Party
   * Cardinality: 0..1
   */
  PerformingCarrierParty: [Party] | undefined

  /**
   * A substitute party performing the carriage of this consignment.
   * Party
   * Cardinality: 0..1
   */
  SubstituteCarrierParty: [Party] | undefined

  /**
   * The logistics operator party for this consignment.
   * Party
   * Cardinality: 0..1
   */
  LogisticsOperatorParty: [Party] | undefined

  /**
   * The party providing transport advice this consignment.
   * Party
   * Cardinality: 0..1
   */
  TransportAdvisorParty: [Party] | undefined

  /**
   * The party that would be notified of a hazardous item in this consignment.
   * Party
   * Cardinality: 0..1
   */
  HazardousItemNotificationParty: [Party] | undefined

  /**
   * The party holding the insurance for this consignment.
   * Party
   * Cardinality: 0..1
   */
  InsuranceParty: [Party] | undefined

  /**
   * The party holding the mortgage for this consignment.
   * Party
   * Cardinality: 0..1
   */
  MortgageHolderParty: [Party] | undefined

  /**
   * The party holding the bill of lading for this consignment.
   * Party
   * Cardinality: 0..1
   */
  BillOfLadingHolderParty: [Party] | undefined

  /**
   * The country from which the goods in this consignment were originally exported, without any commercial transaction
   * taking place in intermediate countries.
   * Country
   * Cardinality: 0..1
   * Alternative business terms: Country of origin (WCO ID 062)
   */
  OriginalDepartureCountry: [Country] | undefined

  /**
   * The country in which the goods in this consignment are to be delivered to the final consignee or buyer.
   * Country
   * Cardinality: 0..1
   * Alternative business terms: Ultimate Destination Country, Country of Final Arrival, Country of Destination
   */
  FinalDestinationCountry: [Country] | undefined

  /**
   * One of the countries through which goods or passengers in this consignment are routed between the country of
   * original departure and the country of final destination.
   * Country
   * Cardinality: 0..n
   * Alternative business terms: Country(ies) of routing (WCO ID 064)
   */
  TransitCountry: Array<Country> | undefined

  /**
   * A transport contract relating to this consignment.
   * Contract
   * Cardinality: 0..1
   */
  TransportContract: [Contract] | undefined

  /**
   * A class describing a significant occurrence or happening related to the transportation of goods.
   * Transport Event
   * Cardinality: 0..n
   */
  TransportEvent: Array<TransportEvent> | undefined

  /**
   * The service for pickup from the consignor under the transport contract for this consignment.
   * Transportation Service
   * Cardinality: 0..1
   * Examples: Door-to-door , Pier-to-door 
   */
  OriginalDespatchTransportationService: [TransportationService] | undefined

  /**
   * The service for delivery to the consignee under the transport contract for this consignment.
   * Transportation Service
   * Cardinality: 0..1
   * Examples: Door-to-door , Pier-to-door 
   */
  FinalDeliveryTransportationService: [TransportationService] | undefined

  /**
   * The conditions agreed upon between a seller and a buyer with regard to the delivery of goods and/or services (e.g.,
   * CIF, FOB, or EXW from the INCOTERMS Terms of Delivery).
   * Delivery Terms
   * Cardinality: 0..1
   * Alternative business terms: Trade Terms, INCOTERMS
   */
  DeliveryTerms: [DeliveryTerms] | undefined

  /**
   * The terms of payment between the parties (such as logistics service client, logistics service provider) in a
   * transaction.
   * Payment Terms
   * Cardinality: 0..1
   */
  PaymentTerms: [PaymentTerms] | undefined

  /**
   * The terms of payment that apply to the collection of this consignment.
   * Payment Terms
   * Cardinality: 0..1
   */
  CollectPaymentTerms: [PaymentTerms] | undefined

  /**
   * The terms of payment for disbursement.
   * Payment Terms
   * Cardinality: 0..1
   */
  DisbursementPaymentTerms: [PaymentTerms] | undefined

  /**
   * The terms of payment for prepayment.
   * Payment Terms
   * Cardinality: 0..1
   */
  PrepaidPaymentTerms: [PaymentTerms] | undefined

  /**
   * A cost incurred by the shipper in moving goods, by whatever means, from one place to another under the terms of the
   * contract of carriage for this consignment. In addition to transport costs, this may include such elements as
   * packing, documentation, loading, unloading, and insurance to the extent that they relate to the freight costs.
   * Allowance Charge
   * Cardinality: 0..n
   * Alternative business terms: Freight Costs
   */
  FreightAllowanceCharge: Array<AllowanceCharge> | undefined

  /**
   * A charge for extra allowance.
   * Allowance Charge
   * Cardinality: 0..n
   */
  ExtraAllowanceCharge: Array<AllowanceCharge> | undefined

  /**
   * A shipment stage during main carriage.
   * Shipment Stage
   * Cardinality: 0..n
   */
  MainCarriageShipmentStage: Array<ShipmentStage> | undefined

  /**
   * A shipment stage during precarriage (usually refers to movement activity that takes place prior to the container
   * being loaded at a port of loading).
   * Shipment Stage
   * Cardinality: 0..n
   */
  PreCarriageShipmentStage: Array<ShipmentStage> | undefined

  /**
   * A shipment stage during on-carriage (usually refers to movement activity that takes place after the container is
   * discharged at a port of discharge).
   * Shipment Stage
   * Cardinality: 0..n
   */
  OnCarriageShipmentStage: Array<ShipmentStage> | undefined

  /**
   * A transport handling unit used for loose and containerized goods.
   * Transport Handling Unit
   * Cardinality: 0..n
   */
  TransportHandlingUnit: Array<TransportHandlingUnit> | undefined

  /**
   * The first arrival location in a transport. This would be a port for sea, an airport for air, a terminal for rail,
   * or a border post for land crossing.
   * Location
   * Cardinality: 0..1
   */
  FirstArrivalPortLocation: [Location] | undefined

  /**
   * The final exporting location in a transport. This would be a port for sea, an airport for air, a terminal for rail,
   * or a border post for land crossing.
   * Location
   * Cardinality: 0..1
   */
  LastExitPortLocation: [Location] | undefined
}
