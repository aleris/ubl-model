import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AllowanceChargeType } from './AllowanceChargeMeta'
import { CodeType } from '../cbc/CodeMeta'
import { DateType } from '../cbc/DateMeta'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { IndicatorType } from '../cbc/IndicatorMeta'
import { LocationType } from './LocationMeta'
import { PartyType } from './PartyMeta'
import { PeriodType } from './PeriodMeta'
import { PersonType } from './PersonMeta'
import { QuantityType } from '../cbc/QuantityMeta'
import { TextType } from '../cbc/TextMeta'
import { TimeType } from '../cbc/TimeMeta'
import { TransportEventType } from './TransportEventMeta'
import { TransportMeansType } from './TransportMeansMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum ShipmentStageField {
  UBLExtensions = 'UBLExtensions',
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

export const ShipmentStageFieldMetaUBLExtensions = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaID = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'An identifier for this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '1 , 2 , etc..'
)

export const ShipmentStageFieldMetaTransportModeCode = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransportModeCode,
  'TransportModeCode',
  'Transport Mode Code',
  CodeType.name,
  'A code signifying the method of transport used for this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransportMeansTypeCode = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransportMeansTypeCode,
  'TransportMeansTypeCode',
  'Transport Means Type Code',
  CodeType.name,
  'A code signifying the kind of transport means (truck, vessel, etc.) used for this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransitDirectionCode = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransitDirectionCode,
  'TransitDirectionCode',
  'Transit Direction Code',
  CodeType.name,
  'A code signifying the direction of transit in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPreCarriageIndicator = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PreCarriageIndicator,
  'PreCarriageIndicator',
  'Pre Carriage Indicator',
  IndicatorType.name,
  'An indicator that this stage takes place before the main carriage of the shipment (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Truck delivery to wharf'
)

export const ShipmentStageFieldMetaOnCarriageIndicator = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.OnCarriageIndicator,
  'OnCarriageIndicator',
  'On Carriage Indicator',
  IndicatorType.name,
  'An indicator that this stage takes place after the main carriage of the shipment (true) or not (false).',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'Truck delivery from wharf'
)

export const ShipmentStageFieldMetaEstimatedDeliveryDate = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedDeliveryDate,
  'EstimatedDeliveryDate',
  'Estimated Delivery Date',
  DateType.name,
  'The estimated date of delivery in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaEstimatedDeliveryTime = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedDeliveryTime,
  'EstimatedDeliveryTime',
  'Estimated Delivery Time',
  TimeType.name,
  'The estimated time of delivery in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequiredDeliveryDate = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequiredDeliveryDate,
  'RequiredDeliveryDate',
  'Required Delivery Date',
  DateType.name,
  'The delivery date required by the buyer in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequiredDeliveryTime = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequiredDeliveryTime,
  'RequiredDeliveryTime',
  'Required Delivery Time',
  TimeType.name,
  'The delivery time required by the buyer in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaLoadingSequenceID = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.LoadingSequenceID,
  'LoadingSequenceID',
  'Loading Sequence Identifier',
  IdentifierType.name,
  'An identifier for the loading sequence (of consignments) associated with this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaSuccessiveSequenceID = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.SuccessiveSequenceID,
  'SuccessiveSequenceID',
  'Successive Sequence Identifier',
  IdentifierType.name,
  'Identifies the successive loading sequence (of consignments) associated with a shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaInstructions = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.Instructions,
  'Instructions',
  'Instructions',
  TextType.name,
  'Text of instructions applicable to a shipment stage.',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDemurrageInstructions = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DemurrageInstructions,
  'DemurrageInstructions',
  'Demurrage Instructions',
  TextType.name,
  'Text of instructions relating to demurrage (the case in which a vessel is prevented from loading or discharging cargo within the stipulated laytime).',
  FieldCardinality.MultiOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaCrewQuantity = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.CrewQuantity,
  'CrewQuantity',
  'Crew Quantity',
  QuantityType.name,
  'The total number of crew aboard a transport means.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPassengerQuantity = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PassengerQuantity,
  'PassengerQuantity',
  'Passenger Quantity',
  QuantityType.name,
  'The total number of passengers aboard a transport means.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransitPeriod = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransitPeriod,
  'TransitPeriod',
  'Transit Period',
  PeriodType.name,
  'The period during which this shipment stage actually took place.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaCarrierParty = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.CarrierParty,
  'CarrierParty',
  'Carrier Party',
  PartyType.name,
  'A carrier party responsible for this shipment stage.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransportMeans = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransportMeans,
  'TransportMeans',
  'Transport Means',
  TransportMeansType.name,
  'The means of transport used in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaLoadingPortLocation = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.LoadingPortLocation,
  'LoadingPortLocation',
  'Loading Port Location',
  LocationType.name,
  'The location of loading for a shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaUnloadingPortLocation = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.UnloadingPortLocation,
  'UnloadingPortLocation',
  'Unloading Port Location',
  LocationType.name,
  'The location of unloading for a shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransshipPortLocation = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransshipPortLocation,
  'TransshipPortLocation',
  'Transship Port Location',
  LocationType.name,
  'The location of transshipment relating to a shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaLoadingTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.LoadingTransportEvent,
  'LoadingTransportEvent',
  'Loading Transport Event',
  TransportEventType.name,
  'The loading of goods in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaExaminationTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ExaminationTransportEvent,
  'ExaminationTransportEvent',
  'Examination Transport Event',
  TransportEventType.name,
  'The examination of shipments in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaAvailabilityTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.AvailabilityTransportEvent,
  'AvailabilityTransportEvent',
  'Availability Transport Event',
  TransportEventType.name,
  'The making available of shipments in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaExportationTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ExportationTransportEvent,
  'ExportationTransportEvent',
  'Exportation Transport Event',
  TransportEventType.name,
  'The export event associated with this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDischargeTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DischargeTransportEvent,
  'DischargeTransportEvent',
  'Discharge Transport Event',
  TransportEventType.name,
  'The discharge event associated with this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaWarehousingTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.WarehousingTransportEvent,
  'WarehousingTransportEvent',
  'Warehousing Transport Event',
  TransportEventType.name,
  'The warehousing event associated with this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTakeoverTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TakeoverTransportEvent,
  'TakeoverTransportEvent',
  'Takeover Transport Event',
  TransportEventType.name,
  'The receiver\'s takeover of the goods in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaOptionalTakeoverTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.OptionalTakeoverTransportEvent,
  'OptionalTakeoverTransportEvent',
  'Optional Takeover Transport Event',
  TransportEventType.name,
  'The optional takeover of the goods in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDropoffTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DropoffTransportEvent,
  'DropoffTransportEvent',
  'Dropoff Transport Event',
  TransportEventType.name,
  'The dropping off of goods in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaActualPickupTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ActualPickupTransportEvent,
  'ActualPickupTransportEvent',
  'Actual Pickup Transport Event',
  TransportEventType.name,
  'The pickup of goods in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDeliveryTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DeliveryTransportEvent,
  'DeliveryTransportEvent',
  'Delivery Transport Event',
  TransportEventType.name,
  'The delivery of goods in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaReceiptTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ReceiptTransportEvent,
  'ReceiptTransportEvent',
  'Receipt Transport Event',
  TransportEventType.name,
  'The receipt of goods in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaStorageTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.StorageTransportEvent,
  'StorageTransportEvent',
  'Storage Transport Event',
  TransportEventType.name,
  'The storage of goods in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaAcceptanceTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.AcceptanceTransportEvent,
  'AcceptanceTransportEvent',
  'Acceptance Transport Event',
  TransportEventType.name,
  'The acceptance of goods in this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTerminalOperatorParty = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TerminalOperatorParty,
  'TerminalOperatorParty',
  'Terminal Operator Party',
  PartyType.name,
  'A terminal operator associated with this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaCustomsAgentParty = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.CustomsAgentParty,
  'CustomsAgentParty',
  'Customs Agent Party',
  PartyType.name,
  'A customs agent associated with this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaEstimatedTransitPeriod = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedTransitPeriod,
  'EstimatedTransitPeriod',
  'Estimated Transit Period',
  PeriodType.name,
  'The estimated transit period of this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaFreightAllowanceCharge = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.FreightAllowanceCharge,
  'FreightAllowanceCharge',
  'Freight Allowance Charge',
  AllowanceChargeType.name,
  'A freight allowance charge for this shipment stage.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaFreightChargeLocation = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.FreightChargeLocation,
  'FreightChargeLocation',
  'Freight Charge Location',
  LocationType.name,
  'The location associated with a freight charge related to this shipment stage.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDetentionTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DetentionTransportEvent,
  'DetentionTransportEvent',
  'Detention Transport Event',
  TransportEventType.name,
  'The detention of a transport means during loading and unloading operations.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequestedDepartureTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequestedDepartureTransportEvent,
  'RequestedDepartureTransportEvent',
  'Requested Departure Transport Event',
  TransportEventType.name,
  'The departure requested by the party requesting a transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequestedArrivalTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequestedArrivalTransportEvent,
  'RequestedArrivalTransportEvent',
  'Requested Arrival Transport Event',
  TransportEventType.name,
  'The arrival requested by the party requesting a transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaRequestedWaypointTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.RequestedWaypointTransportEvent,
  'RequestedWaypointTransportEvent',
  'Requested Waypoint Transport Event',
  TransportEventType.name,
  'A waypoint requested by the party requesting a transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPlannedDepartureTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PlannedDepartureTransportEvent,
  'PlannedDepartureTransportEvent',
  'Planned Departure Transport Event',
  TransportEventType.name,
  'The departure planned by the party providing a transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPlannedArrivalTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PlannedArrivalTransportEvent,
  'PlannedArrivalTransportEvent',
  'Planned Arrival Transport Event',
  TransportEventType.name,
  'The arrival planned by the party providing a transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPlannedWaypointTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PlannedWaypointTransportEvent,
  'PlannedWaypointTransportEvent',
  'Planned Waypoint Transport Event',
  TransportEventType.name,
  'A waypoint planned by the party providing a transportation service.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaActualDepartureTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ActualDepartureTransportEvent,
  'ActualDepartureTransportEvent',
  'Actual Departure Transport Event',
  TransportEventType.name,
  'The actual departure from a specific location during a transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaActualWaypointTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ActualWaypointTransportEvent,
  'ActualWaypointTransportEvent',
  'Actual Waypoint Transport Event',
  TransportEventType.name,
  'The location of an actual waypoint during a transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaActualArrivalTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ActualArrivalTransportEvent,
  'ActualArrivalTransportEvent',
  'Actual Arrival Transport Event',
  TransportEventType.name,
  'The actual arrival at a specific location during a transportation service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.TransportEvent,
  'TransportEvent',
  'Transport Event',
  TransportEventType.name,
  'A significant occurrence in the course of this shipment of goods.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaEstimatedDepartureTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedDepartureTransportEvent,
  'EstimatedDepartureTransportEvent',
  'Estimated Departure Transport Event',
  TransportEventType.name,
  'Describes an estimated departure at a location during a transport service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaEstimatedArrivalTransportEvent = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.EstimatedArrivalTransportEvent,
  'EstimatedArrivalTransportEvent',
  'Estimated Arrival Transport Event',
  TransportEventType.name,
  'Describes an estimated arrival at a location during a transport service.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaPassengerPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.PassengerPerson,
  'PassengerPerson',
  'Passenger Person',
  PersonType.name,
  'A person who travels in a conveyance without participating in its operation.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaDriverPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.DriverPerson,
  'DriverPerson',
  'Driver Person',
  PersonType.name,
  'Describes a person responsible for driving the transport means.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaReportingPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ReportingPerson,
  'ReportingPerson',
  'Reporting Person',
  PersonType.name,
  'Describes a person being responsible for providing the required administrative reporting relating to a transport.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaCrewMemberPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.CrewMemberPerson,
  'CrewMemberPerson',
  'Crew Member Person',
  PersonType.name,
  'A person operating or serving aboard a transport means.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaSecurityOfficerPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.SecurityOfficerPerson,
  'SecurityOfficerPerson',
  'Security Officer Person',
  PersonType.name,
  'The person on board the vessel, accountable to the master, designated by the company as responsible for the security of the ship, including implementation and maintenance of the ship security plan and for the liaison with the company security officer and the port facility security officers.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaMasterPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.MasterPerson,
  'MasterPerson',
  'Master Person',
  PersonType.name,
  'The person responsible for the ship\'s safe and efficient operation, including cargo operations, navigation, crew management and for ensuring that the vessel complies with local and international laws, as well as company and flag state policies.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const ShipmentStageFieldMetaShipsSurgeonPerson = new FieldMeta<ShipmentStageField>(
  ShipmentStageField.ShipsSurgeonPerson,
  'ShipsSurgeonPerson',
  'Ships Surgeon Person',
  PersonType.name,
  'The person responsible for the health of the people aboard a ship at sea.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export class ShipmentStageFieldMeta {
  public static readonly UBLExtensions = ShipmentStageFieldMetaUBLExtensions
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
  [ShipmentStageField.UBLExtensions, ShipmentStageFieldMetaUBLExtensions],
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

export const ShipmentStageType: Type<ShipmentStageField> = {
  name: 'ShipmentStage',
  label: 'Shipment Stage',
  module: TypeModule.cac,
  definition: 'A class to describe one stage of movement in a transport of goods.',
  fields: ShipmentStageFieldMap,
}
