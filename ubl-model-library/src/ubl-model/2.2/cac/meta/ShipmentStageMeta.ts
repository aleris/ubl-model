import { FieldMeta } from '../../FieldMeta'

export enum ShipmentStageField {
  ID = 'ID',
  TransportModeCode = 'TransportModeCode',
  TransportMeansTypeCode = 'TransportMeansTypeCode',
  TransitDirectionCode = 'TransitDirectionCode',
  PreCarriageIndicator = 'PreCarriageIndicator',
  OnCarriageIndicator = 'OnCarriageIndicator',
  EstimatedDeliveryDate = 'EstimatedDeliveryDate',
  EstimatedDeliveryTime = 'EstimatedDeliveryTime',
  RequiredDeliveryDate = 'RequiredDeliveryDate',
  RequiredDeliveryTime = 'RequiredDeliveryTime',
  LoadingSequenceID = 'LoadingSequenceID',
  SuccessiveSequenceID = 'SuccessiveSequenceID',
  Instructions = 'Instructions',
  DemurrageInstructions = 'DemurrageInstructions',
  CrewQuantity = 'CrewQuantity',
  PassengerQuantity = 'PassengerQuantity',
  TransitPeriod = 'TransitPeriod',
  CarrierParty = 'CarrierParty',
  TransportMeans = 'TransportMeans',
  LoadingPortLocation = 'LoadingPortLocation',
  UnloadingPortLocation = 'UnloadingPortLocation',
  TransshipPortLocation = 'TransshipPortLocation',
  LoadingTransportEvent = 'LoadingTransportEvent',
  ExaminationTransportEvent = 'ExaminationTransportEvent',
  AvailabilityTransportEvent = 'AvailabilityTransportEvent',
  ExportationTransportEvent = 'ExportationTransportEvent',
  DischargeTransportEvent = 'DischargeTransportEvent',
  WarehousingTransportEvent = 'WarehousingTransportEvent',
  TakeoverTransportEvent = 'TakeoverTransportEvent',
  OptionalTakeoverTransportEvent = 'OptionalTakeoverTransportEvent',
  DropoffTransportEvent = 'DropoffTransportEvent',
  ActualPickupTransportEvent = 'ActualPickupTransportEvent',
  DeliveryTransportEvent = 'DeliveryTransportEvent',
  ReceiptTransportEvent = 'ReceiptTransportEvent',
  StorageTransportEvent = 'StorageTransportEvent',
  AcceptanceTransportEvent = 'AcceptanceTransportEvent',
  TerminalOperatorParty = 'TerminalOperatorParty',
  CustomsAgentParty = 'CustomsAgentParty',
  EstimatedTransitPeriod = 'EstimatedTransitPeriod',
  FreightAllowanceCharge = 'FreightAllowanceCharge',
  FreightChargeLocation = 'FreightChargeLocation',
  DetentionTransportEvent = 'DetentionTransportEvent',
  RequestedDepartureTransportEvent = 'RequestedDepartureTransportEvent',
  RequestedArrivalTransportEvent = 'RequestedArrivalTransportEvent',
  RequestedWaypointTransportEvent = 'RequestedWaypointTransportEvent',
  PlannedDepartureTransportEvent = 'PlannedDepartureTransportEvent',
  PlannedArrivalTransportEvent = 'PlannedArrivalTransportEvent',
  PlannedWaypointTransportEvent = 'PlannedWaypointTransportEvent',
  ActualDepartureTransportEvent = 'ActualDepartureTransportEvent',
  ActualWaypointTransportEvent = 'ActualWaypointTransportEvent',
  ActualArrivalTransportEvent = 'ActualArrivalTransportEvent',
  TransportEvent = 'TransportEvent',
  EstimatedDepartureTransportEvent = 'EstimatedDepartureTransportEvent',
  EstimatedArrivalTransportEvent = 'EstimatedArrivalTransportEvent',
  PassengerPerson = 'PassengerPerson',
  DriverPerson = 'DriverPerson',
  ReportingPerson = 'ReportingPerson',
  CrewMemberPerson = 'CrewMemberPerson',
  SecurityOfficerPerson = 'SecurityOfficerPerson',
  MasterPerson = 'MasterPerson',
  ShipsSurgeonPerson = 'ShipsSurgeonPerson'
}

export const ShipmentStageFieldMetaID = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'An identifier for this shipment stage.',
  '0..1',
  undefined,
  '1 , 2 , etc..'
)

export const ShipmentStageFieldMetaTransportModeCode = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransportModeCode,
  'TransportModeCode',
  'Transport Mode Code',
  'Code',
  'A code signifying the method of transport used for this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransportMeansTypeCode = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransportMeansTypeCode,
  'TransportMeansTypeCode',
  'Transport Means Type Code',
  'Code',
  'A code signifying the kind of transport means (truck, vessel, etc.) used for this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransitDirectionCode = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransitDirectionCode,
  'TransitDirectionCode',
  'Direction Code',
  'Code',
  'A code signifying the direction of transit in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPreCarriageIndicator = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PreCarriageIndicator,
  'PreCarriageIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this stage takes place before the main carriage of the shipment (true) or not (false).',
  '0..1',
  undefined,
  'Truck delivery to wharf'
)

export const ShipmentStageFieldMetaOnCarriageIndicator = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.OnCarriageIndicator,
  'OnCarriageIndicator',
  'Indicator',
  'Indicator',
  'An indicator that this stage takes place after the main carriage of the shipment (true) or not (false).',
  '0..1',
  undefined,
  'Truck delivery from wharf'
)

export const ShipmentStageFieldMetaEstimatedDeliveryDate = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedDeliveryDate,
  'EstimatedDeliveryDate',
  'Delivery Date',
  'Date',
  'The estimated date of delivery in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaEstimatedDeliveryTime = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedDeliveryTime,
  'EstimatedDeliveryTime',
  'Delivery Time',
  'Time',
  'The estimated time of delivery in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequiredDeliveryDate = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequiredDeliveryDate,
  'RequiredDeliveryDate',
  'Delivery Date',
  'Date',
  'The delivery date required by the buyer in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequiredDeliveryTime = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequiredDeliveryTime,
  'RequiredDeliveryTime',
  'Delivery Time',
  'Time',
  'The delivery time required by the buyer in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaLoadingSequenceID = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.LoadingSequenceID,
  'LoadingSequenceID',
  'Sequence Identifier',
  'Identifier',
  'An identifier for the loading sequence (of consignments) associated with this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaSuccessiveSequenceID = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.SuccessiveSequenceID,
  'SuccessiveSequenceID',
  'Sequence Identifier',
  'Identifier',
  'Identifies the successive loading sequence (of consignments) associated with a shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaInstructions = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.Instructions,
  'Instructions',
  'Instructions',
  'Text',
  'Text of instructions applicable to a shipment stage.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDemurrageInstructions = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DemurrageInstructions,
  'DemurrageInstructions',
  'Instructions',
  'Text',
  'Text of instructions relating to demurrage (the case in which a vessel is prevented from loading or discharging cargo within the stipulated laytime).',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaCrewQuantity = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.CrewQuantity,
  'CrewQuantity',
  'Crew Quantity',
  'Quantity',
  'The total number of crew aboard a transport means.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPassengerQuantity = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PassengerQuantity,
  'PassengerQuantity',
  'Passenger Quantity',
  'Quantity',
  'The total number of passengers aboard a transport means.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransitPeriod = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransitPeriod,
  'TransitPeriod',
  'Period',
  'Period',
  'The period during which this shipment stage actually took place.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaCarrierParty = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.CarrierParty,
  'CarrierParty',
  'Party',
  'Party',
  'A carrier party responsible for this shipment stage.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransportMeans = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransportMeans,
  'TransportMeans',
  'Transport Means',
  'TransportMeans',
  'The means of transport used in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaLoadingPortLocation = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.LoadingPortLocation,
  'LoadingPortLocation',
  'Location',
  'Location',
  'The location of loading for a shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaUnloadingPortLocation = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.UnloadingPortLocation,
  'UnloadingPortLocation',
  'Location',
  'Location',
  'The location of unloading for a shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransshipPortLocation = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransshipPortLocation,
  'TransshipPortLocation',
  'Location',
  'Location',
  'The location of transshipment relating to a shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaLoadingTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.LoadingTransportEvent,
  'LoadingTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The loading of goods in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaExaminationTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ExaminationTransportEvent,
  'ExaminationTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The examination of shipments in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaAvailabilityTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.AvailabilityTransportEvent,
  'AvailabilityTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The making available of shipments in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaExportationTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ExportationTransportEvent,
  'ExportationTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The export event associated with this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDischargeTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DischargeTransportEvent,
  'DischargeTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The discharge event associated with this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaWarehousingTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.WarehousingTransportEvent,
  'WarehousingTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The warehousing event associated with this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTakeoverTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TakeoverTransportEvent,
  'TakeoverTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The receiver\'s takeover of the goods in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaOptionalTakeoverTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.OptionalTakeoverTransportEvent,
  'OptionalTakeoverTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The optional takeover of the goods in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDropoffTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DropoffTransportEvent,
  'DropoffTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The dropping off of goods in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaActualPickupTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ActualPickupTransportEvent,
  'ActualPickupTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The pickup of goods in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDeliveryTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DeliveryTransportEvent,
  'DeliveryTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The delivery of goods in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaReceiptTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ReceiptTransportEvent,
  'ReceiptTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The receipt of goods in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaStorageTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.StorageTransportEvent,
  'StorageTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The storage of goods in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaAcceptanceTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.AcceptanceTransportEvent,
  'AcceptanceTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The acceptance of goods in this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTerminalOperatorParty = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TerminalOperatorParty,
  'TerminalOperatorParty',
  'Party',
  'Party',
  'A terminal operator associated with this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaCustomsAgentParty = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.CustomsAgentParty,
  'CustomsAgentParty',
  'Party',
  'Party',
  'A customs agent associated with this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaEstimatedTransitPeriod = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedTransitPeriod,
  'EstimatedTransitPeriod',
  'Period',
  'Period',
  'The estimated transit period of this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaFreightAllowanceCharge = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.FreightAllowanceCharge,
  'FreightAllowanceCharge',
  'Allowance Charge',
  'AllowanceCharge',
  'A freight allowance charge for this shipment stage.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaFreightChargeLocation = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.FreightChargeLocation,
  'FreightChargeLocation',
  'Location',
  'Location',
  'The location associated with a freight charge related to this shipment stage.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDetentionTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DetentionTransportEvent,
  'DetentionTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The detention of a transport means during loading and unloading operations.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequestedDepartureTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequestedDepartureTransportEvent,
  'RequestedDepartureTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The departure requested by the party requesting a transportation service.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequestedArrivalTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequestedArrivalTransportEvent,
  'RequestedArrivalTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The arrival requested by the party requesting a transportation service.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequestedWaypointTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequestedWaypointTransportEvent,
  'RequestedWaypointTransportEvent',
  'Transport Event',
  'TransportEvent',
  'A waypoint requested by the party requesting a transportation service.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPlannedDepartureTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PlannedDepartureTransportEvent,
  'PlannedDepartureTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The departure planned by the party providing a transportation service.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPlannedArrivalTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PlannedArrivalTransportEvent,
  'PlannedArrivalTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The arrival planned by the party providing a transportation service.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPlannedWaypointTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PlannedWaypointTransportEvent,
  'PlannedWaypointTransportEvent',
  'Transport Event',
  'TransportEvent',
  'A waypoint planned by the party providing a transportation service.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaActualDepartureTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ActualDepartureTransportEvent,
  'ActualDepartureTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The actual departure from a specific location during a transportation service.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaActualWaypointTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ActualWaypointTransportEvent,
  'ActualWaypointTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The location of an actual waypoint during a transportation service.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaActualArrivalTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ActualArrivalTransportEvent,
  'ActualArrivalTransportEvent',
  'Transport Event',
  'TransportEvent',
  'The actual arrival at a specific location during a transportation service.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransportEvent,
  'TransportEvent',
  'Transport Event',
  'TransportEvent',
  'A significant occurrence in the course of this shipment of goods.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaEstimatedDepartureTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedDepartureTransportEvent,
  'EstimatedDepartureTransportEvent',
  'Transport Event',
  'TransportEvent',
  'Describes an estimated departure at a location during a transport service.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaEstimatedArrivalTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedArrivalTransportEvent,
  'EstimatedArrivalTransportEvent',
  'Transport Event',
  'TransportEvent',
  'Describes an estimated arrival at a location during a transport service.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPassengerPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PassengerPerson,
  'PassengerPerson',
  'Person',
  'Person',
  'A person who travels in a conveyance without participating in its operation.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDriverPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DriverPerson,
  'DriverPerson',
  'Person',
  'Person',
  'Describes a person responsible for driving the transport means.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaReportingPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ReportingPerson,
  'ReportingPerson',
  'Person',
  'Person',
  'Describes a person being responsible for providing the required administrative reporting relating to a transport.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaCrewMemberPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.CrewMemberPerson,
  'CrewMemberPerson',
  'Person',
  'Person',
  'A person operating or serving aboard a transport means.',
  '0..n',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaSecurityOfficerPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.SecurityOfficerPerson,
  'SecurityOfficerPerson',
  'Person',
  'Person',
  'The person on board the vessel, accountable to the master, designated by the company as responsible for the security of the ship, including implementation and maintenance of the ship security plan and for the liaison with the company security officer and the port facility security officers.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaMasterPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.MasterPerson,
  'MasterPerson',
  'Person',
  'Person',
  'The person responsible for the ship\'s safe and efficient operation, including cargo operations, navigation, crew management and for ensuring that the vessel complies with local and international laws, as well as company and flag state policies.',
  '0..1',
  undefined,
  undefined
)

export const ShipmentStageFieldMetaShipsSurgeonPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ShipsSurgeonPerson,
  'ShipsSurgeonPerson',
  'Person',
  'Person',
  'The person responsible for the health of the people aboard a ship at sea.',
  '0..1',
  undefined,
  undefined
)

export class ShipmentStageFieldMeta {
  public static readonly ID = ShipmentStageFieldMetaID
  public static readonly TransportModeCode = ShipmentStageFieldMetaTransportModeCode
  public static readonly TransportMeansTypeCode = ShipmentStageFieldMetaTransportMeansTypeCode
  public static readonly TransitDirectionCode = ShipmentStageFieldMetaTransitDirectionCode
  public static readonly PreCarriageIndicator = ShipmentStageFieldMetaPreCarriageIndicator
  public static readonly OnCarriageIndicator = ShipmentStageFieldMetaOnCarriageIndicator
  public static readonly EstimatedDeliveryDate = ShipmentStageFieldMetaEstimatedDeliveryDate
  public static readonly EstimatedDeliveryTime = ShipmentStageFieldMetaEstimatedDeliveryTime
  public static readonly RequiredDeliveryDate = ShipmentStageFieldMetaRequiredDeliveryDate
  public static readonly RequiredDeliveryTime = ShipmentStageFieldMetaRequiredDeliveryTime
  public static readonly LoadingSequenceID = ShipmentStageFieldMetaLoadingSequenceID
  public static readonly SuccessiveSequenceID = ShipmentStageFieldMetaSuccessiveSequenceID
  public static readonly Instructions = ShipmentStageFieldMetaInstructions
  public static readonly DemurrageInstructions = ShipmentStageFieldMetaDemurrageInstructions
  public static readonly CrewQuantity = ShipmentStageFieldMetaCrewQuantity
  public static readonly PassengerQuantity = ShipmentStageFieldMetaPassengerQuantity
  public static readonly TransitPeriod = ShipmentStageFieldMetaTransitPeriod
  public static readonly CarrierParty = ShipmentStageFieldMetaCarrierParty
  public static readonly TransportMeans = ShipmentStageFieldMetaTransportMeans
  public static readonly LoadingPortLocation = ShipmentStageFieldMetaLoadingPortLocation
  public static readonly UnloadingPortLocation = ShipmentStageFieldMetaUnloadingPortLocation
  public static readonly TransshipPortLocation = ShipmentStageFieldMetaTransshipPortLocation
  public static readonly LoadingTransportEvent = ShipmentStageFieldMetaLoadingTransportEvent
  public static readonly ExaminationTransportEvent = ShipmentStageFieldMetaExaminationTransportEvent
  public static readonly AvailabilityTransportEvent = ShipmentStageFieldMetaAvailabilityTransportEvent
  public static readonly ExportationTransportEvent = ShipmentStageFieldMetaExportationTransportEvent
  public static readonly DischargeTransportEvent = ShipmentStageFieldMetaDischargeTransportEvent
  public static readonly WarehousingTransportEvent = ShipmentStageFieldMetaWarehousingTransportEvent
  public static readonly TakeoverTransportEvent = ShipmentStageFieldMetaTakeoverTransportEvent
  public static readonly OptionalTakeoverTransportEvent = ShipmentStageFieldMetaOptionalTakeoverTransportEvent
  public static readonly DropoffTransportEvent = ShipmentStageFieldMetaDropoffTransportEvent
  public static readonly ActualPickupTransportEvent = ShipmentStageFieldMetaActualPickupTransportEvent
  public static readonly DeliveryTransportEvent = ShipmentStageFieldMetaDeliveryTransportEvent
  public static readonly ReceiptTransportEvent = ShipmentStageFieldMetaReceiptTransportEvent
  public static readonly StorageTransportEvent = ShipmentStageFieldMetaStorageTransportEvent
  public static readonly AcceptanceTransportEvent = ShipmentStageFieldMetaAcceptanceTransportEvent
  public static readonly TerminalOperatorParty = ShipmentStageFieldMetaTerminalOperatorParty
  public static readonly CustomsAgentParty = ShipmentStageFieldMetaCustomsAgentParty
  public static readonly EstimatedTransitPeriod = ShipmentStageFieldMetaEstimatedTransitPeriod
  public static readonly FreightAllowanceCharge = ShipmentStageFieldMetaFreightAllowanceCharge
  public static readonly FreightChargeLocation = ShipmentStageFieldMetaFreightChargeLocation
  public static readonly DetentionTransportEvent = ShipmentStageFieldMetaDetentionTransportEvent
  public static readonly RequestedDepartureTransportEvent = ShipmentStageFieldMetaRequestedDepartureTransportEvent
  public static readonly RequestedArrivalTransportEvent = ShipmentStageFieldMetaRequestedArrivalTransportEvent
  public static readonly RequestedWaypointTransportEvent = ShipmentStageFieldMetaRequestedWaypointTransportEvent
  public static readonly PlannedDepartureTransportEvent = ShipmentStageFieldMetaPlannedDepartureTransportEvent
  public static readonly PlannedArrivalTransportEvent = ShipmentStageFieldMetaPlannedArrivalTransportEvent
  public static readonly PlannedWaypointTransportEvent = ShipmentStageFieldMetaPlannedWaypointTransportEvent
  public static readonly ActualDepartureTransportEvent = ShipmentStageFieldMetaActualDepartureTransportEvent
  public static readonly ActualWaypointTransportEvent = ShipmentStageFieldMetaActualWaypointTransportEvent
  public static readonly ActualArrivalTransportEvent = ShipmentStageFieldMetaActualArrivalTransportEvent
  public static readonly TransportEvent = ShipmentStageFieldMetaTransportEvent
  public static readonly EstimatedDepartureTransportEvent = ShipmentStageFieldMetaEstimatedDepartureTransportEvent
  public static readonly EstimatedArrivalTransportEvent = ShipmentStageFieldMetaEstimatedArrivalTransportEvent
  public static readonly PassengerPerson = ShipmentStageFieldMetaPassengerPerson
  public static readonly DriverPerson = ShipmentStageFieldMetaDriverPerson
  public static readonly ReportingPerson = ShipmentStageFieldMetaReportingPerson
  public static readonly CrewMemberPerson = ShipmentStageFieldMetaCrewMemberPerson
  public static readonly SecurityOfficerPerson = ShipmentStageFieldMetaSecurityOfficerPerson
  public static readonly MasterPerson = ShipmentStageFieldMetaMasterPerson
  public static readonly ShipsSurgeonPerson = ShipmentStageFieldMetaShipsSurgeonPerson
}

export const ShipmentStageFieldMap = new Map([
  [ShipmentStageField.ID, ShipmentStageFieldMetaID],
  [ShipmentStageField.TransportModeCode, ShipmentStageFieldMetaTransportModeCode],
  [ShipmentStageField.TransportMeansTypeCode, ShipmentStageFieldMetaTransportMeansTypeCode],
  [ShipmentStageField.TransitDirectionCode, ShipmentStageFieldMetaTransitDirectionCode],
  [ShipmentStageField.PreCarriageIndicator, ShipmentStageFieldMetaPreCarriageIndicator],
  [ShipmentStageField.OnCarriageIndicator, ShipmentStageFieldMetaOnCarriageIndicator],
  [ShipmentStageField.EstimatedDeliveryDate, ShipmentStageFieldMetaEstimatedDeliveryDate],
  [ShipmentStageField.EstimatedDeliveryTime, ShipmentStageFieldMetaEstimatedDeliveryTime],
  [ShipmentStageField.RequiredDeliveryDate, ShipmentStageFieldMetaRequiredDeliveryDate],
  [ShipmentStageField.RequiredDeliveryTime, ShipmentStageFieldMetaRequiredDeliveryTime],
  [ShipmentStageField.LoadingSequenceID, ShipmentStageFieldMetaLoadingSequenceID],
  [ShipmentStageField.SuccessiveSequenceID, ShipmentStageFieldMetaSuccessiveSequenceID],
  [ShipmentStageField.Instructions, ShipmentStageFieldMetaInstructions],
  [ShipmentStageField.DemurrageInstructions, ShipmentStageFieldMetaDemurrageInstructions],
  [ShipmentStageField.CrewQuantity, ShipmentStageFieldMetaCrewQuantity],
  [ShipmentStageField.PassengerQuantity, ShipmentStageFieldMetaPassengerQuantity],
  [ShipmentStageField.TransitPeriod, ShipmentStageFieldMetaTransitPeriod],
  [ShipmentStageField.CarrierParty, ShipmentStageFieldMetaCarrierParty],
  [ShipmentStageField.TransportMeans, ShipmentStageFieldMetaTransportMeans],
  [ShipmentStageField.LoadingPortLocation, ShipmentStageFieldMetaLoadingPortLocation],
  [ShipmentStageField.UnloadingPortLocation, ShipmentStageFieldMetaUnloadingPortLocation],
  [ShipmentStageField.TransshipPortLocation, ShipmentStageFieldMetaTransshipPortLocation],
  [ShipmentStageField.LoadingTransportEvent, ShipmentStageFieldMetaLoadingTransportEvent],
  [ShipmentStageField.ExaminationTransportEvent, ShipmentStageFieldMetaExaminationTransportEvent],
  [ShipmentStageField.AvailabilityTransportEvent, ShipmentStageFieldMetaAvailabilityTransportEvent],
  [ShipmentStageField.ExportationTransportEvent, ShipmentStageFieldMetaExportationTransportEvent],
  [ShipmentStageField.DischargeTransportEvent, ShipmentStageFieldMetaDischargeTransportEvent],
  [ShipmentStageField.WarehousingTransportEvent, ShipmentStageFieldMetaWarehousingTransportEvent],
  [ShipmentStageField.TakeoverTransportEvent, ShipmentStageFieldMetaTakeoverTransportEvent],
  [ShipmentStageField.OptionalTakeoverTransportEvent, ShipmentStageFieldMetaOptionalTakeoverTransportEvent],
  [ShipmentStageField.DropoffTransportEvent, ShipmentStageFieldMetaDropoffTransportEvent],
  [ShipmentStageField.ActualPickupTransportEvent, ShipmentStageFieldMetaActualPickupTransportEvent],
  [ShipmentStageField.DeliveryTransportEvent, ShipmentStageFieldMetaDeliveryTransportEvent],
  [ShipmentStageField.ReceiptTransportEvent, ShipmentStageFieldMetaReceiptTransportEvent],
  [ShipmentStageField.StorageTransportEvent, ShipmentStageFieldMetaStorageTransportEvent],
  [ShipmentStageField.AcceptanceTransportEvent, ShipmentStageFieldMetaAcceptanceTransportEvent],
  [ShipmentStageField.TerminalOperatorParty, ShipmentStageFieldMetaTerminalOperatorParty],
  [ShipmentStageField.CustomsAgentParty, ShipmentStageFieldMetaCustomsAgentParty],
  [ShipmentStageField.EstimatedTransitPeriod, ShipmentStageFieldMetaEstimatedTransitPeriod],
  [ShipmentStageField.FreightAllowanceCharge, ShipmentStageFieldMetaFreightAllowanceCharge],
  [ShipmentStageField.FreightChargeLocation, ShipmentStageFieldMetaFreightChargeLocation],
  [ShipmentStageField.DetentionTransportEvent, ShipmentStageFieldMetaDetentionTransportEvent],
  [ShipmentStageField.RequestedDepartureTransportEvent, ShipmentStageFieldMetaRequestedDepartureTransportEvent],
  [ShipmentStageField.RequestedArrivalTransportEvent, ShipmentStageFieldMetaRequestedArrivalTransportEvent],
  [ShipmentStageField.RequestedWaypointTransportEvent, ShipmentStageFieldMetaRequestedWaypointTransportEvent],
  [ShipmentStageField.PlannedDepartureTransportEvent, ShipmentStageFieldMetaPlannedDepartureTransportEvent],
  [ShipmentStageField.PlannedArrivalTransportEvent, ShipmentStageFieldMetaPlannedArrivalTransportEvent],
  [ShipmentStageField.PlannedWaypointTransportEvent, ShipmentStageFieldMetaPlannedWaypointTransportEvent],
  [ShipmentStageField.ActualDepartureTransportEvent, ShipmentStageFieldMetaActualDepartureTransportEvent],
  [ShipmentStageField.ActualWaypointTransportEvent, ShipmentStageFieldMetaActualWaypointTransportEvent],
  [ShipmentStageField.ActualArrivalTransportEvent, ShipmentStageFieldMetaActualArrivalTransportEvent],
  [ShipmentStageField.TransportEvent, ShipmentStageFieldMetaTransportEvent],
  [ShipmentStageField.EstimatedDepartureTransportEvent, ShipmentStageFieldMetaEstimatedDepartureTransportEvent],
  [ShipmentStageField.EstimatedArrivalTransportEvent, ShipmentStageFieldMetaEstimatedArrivalTransportEvent],
  [ShipmentStageField.PassengerPerson, ShipmentStageFieldMetaPassengerPerson],
  [ShipmentStageField.DriverPerson, ShipmentStageFieldMetaDriverPerson],
  [ShipmentStageField.ReportingPerson, ShipmentStageFieldMetaReportingPerson],
  [ShipmentStageField.CrewMemberPerson, ShipmentStageFieldMetaCrewMemberPerson],
  [ShipmentStageField.SecurityOfficerPerson, ShipmentStageFieldMetaSecurityOfficerPerson],
  [ShipmentStageField.MasterPerson, ShipmentStageFieldMetaMasterPerson],
  [ShipmentStageField.ShipsSurgeonPerson, ShipmentStageFieldMetaShipsSurgeonPerson]
])
