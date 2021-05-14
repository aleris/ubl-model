import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { ShipmentStage } from  '../../model/cac/ShipmentStage'
import { ShipmentStageFieldMeta } from  '../../meta/cac/ShipmentStageMeta'
import AllowanceChargeDisplay from './AllowanceChargeDisplay'
import { AllowanceCharge } from '../../model/cac/AllowanceCharge'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DateDisplay from '../cbc/DateDisplay'
import { Date } from '../../model/cbc/Date'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import LocationDisplay from './LocationDisplay'
import { Location } from '../../model/cac/Location'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import PeriodDisplay from './PeriodDisplay'
import { Period } from '../../model/cac/Period'
import PersonDisplay from './PersonDisplay'
import { Person } from '../../model/cac/Person'
import QuantityDisplay from '../cbc/QuantityDisplay'
import { Quantity } from '../../model/cbc/Quantity'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import TimeDisplay from '../cbc/TimeDisplay'
import { Time } from '../../model/cbc/Time'
import TransportEventDisplay from './TransportEventDisplay'
import { TransportEvent } from '../../model/cac/TransportEvent'
import TransportMeansDisplay from './TransportMeansDisplay'
import { TransportMeans } from '../../model/cac/TransportMeans'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: ShipmentStage
  meta: FieldMeta<T>
}

export default function ShipmentStageDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-ShipmentStage ubl-ShipmentStageType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-ShipmentStage ubl-UBLExtensions"
          meta={ShipmentStageFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={ShipmentStageFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Identifier ubl-ID"
          meta={ShipmentStageFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Code ubl-TransportModeCode"
          meta={ShipmentStageFieldMeta.TransportModeCode} 
          value={value.TransportModeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Mode Code"
              value={itemValue}
              meta={ShipmentStageFieldMeta.TransportModeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Code ubl-TransportMeansTypeCode"
          meta={ShipmentStageFieldMeta.TransportMeansTypeCode} 
          value={value.TransportMeansTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transport Means Type Code"
              value={itemValue}
              meta={ShipmentStageFieldMeta.TransportMeansTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Code ubl-TransitDirectionCode"
          meta={ShipmentStageFieldMeta.TransitDirectionCode} 
          value={value.TransitDirectionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Transit Direction Code"
              value={itemValue}
              meta={ShipmentStageFieldMeta.TransitDirectionCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Indicator ubl-PreCarriageIndicator"
          meta={ShipmentStageFieldMeta.PreCarriageIndicator} 
          value={value.PreCarriageIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Pre Carriage Indicator"
              value={itemValue}
              meta={ShipmentStageFieldMeta.PreCarriageIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Indicator ubl-OnCarriageIndicator"
          meta={ShipmentStageFieldMeta.OnCarriageIndicator} 
          value={value.OnCarriageIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="On Carriage Indicator"
              value={itemValue}
              meta={ShipmentStageFieldMeta.OnCarriageIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Date ubl-EstimatedDeliveryDate"
          meta={ShipmentStageFieldMeta.EstimatedDeliveryDate} 
          value={value.EstimatedDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Estimated Delivery Date"
              value={itemValue}
              meta={ShipmentStageFieldMeta.EstimatedDeliveryDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Time ubl-EstimatedDeliveryTime"
          meta={ShipmentStageFieldMeta.EstimatedDeliveryTime} 
          value={value.EstimatedDeliveryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Estimated Delivery Time"
              value={itemValue}
              meta={ShipmentStageFieldMeta.EstimatedDeliveryTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Date ubl-RequiredDeliveryDate"
          meta={ShipmentStageFieldMeta.RequiredDeliveryDate} 
          value={value.RequiredDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay
              key={key}
              label="Required Delivery Date"
              value={itemValue}
              meta={ShipmentStageFieldMeta.RequiredDeliveryDate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Time ubl-RequiredDeliveryTime"
          meta={ShipmentStageFieldMeta.RequiredDeliveryTime} 
          value={value.RequiredDeliveryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay
              key={key}
              label="Required Delivery Time"
              value={itemValue}
              meta={ShipmentStageFieldMeta.RequiredDeliveryTime}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Identifier ubl-LoadingSequenceID"
          meta={ShipmentStageFieldMeta.LoadingSequenceID} 
          value={value.LoadingSequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Loading Sequence Identifier"
              value={itemValue}
              meta={ShipmentStageFieldMeta.LoadingSequenceID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Identifier ubl-SuccessiveSequenceID"
          meta={ShipmentStageFieldMeta.SuccessiveSequenceID} 
          value={value.SuccessiveSequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Successive Sequence Identifier"
              value={itemValue}
              meta={ShipmentStageFieldMeta.SuccessiveSequenceID}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Text ubl-Instructions"
          meta={ShipmentStageFieldMeta.Instructions} 
          value={value.Instructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Instructions"
              value={itemValue}
              meta={ShipmentStageFieldMeta.Instructions}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Text ubl-DemurrageInstructions"
          meta={ShipmentStageFieldMeta.DemurrageInstructions} 
          value={value.DemurrageInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Demurrage Instructions"
              value={itemValue}
              meta={ShipmentStageFieldMeta.DemurrageInstructions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Quantity ubl-CrewQuantity"
          meta={ShipmentStageFieldMeta.CrewQuantity} 
          value={value.CrewQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Crew Quantity"
              value={itemValue}
              meta={ShipmentStageFieldMeta.CrewQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-ShipmentStage ubl-Quantity ubl-PassengerQuantity"
          meta={ShipmentStageFieldMeta.PassengerQuantity} 
          value={value.PassengerQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay
              key={key}
              label="Passenger Quantity"
              value={itemValue}
              meta={ShipmentStageFieldMeta.PassengerQuantity}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Period ubl-TransitPeriod"
          meta={ShipmentStageFieldMeta.TransitPeriod} 
          value={value.TransitPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Transit Period"
              value={itemValue}
              meta={ShipmentStageFieldMeta.TransitPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Party ubl-CarrierParty"
          meta={ShipmentStageFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Carrier Party"
              value={itemValue}
              meta={ShipmentStageFieldMeta.CarrierParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportMeans"
          meta={ShipmentStageFieldMeta.TransportMeans} 
          value={value.TransportMeans}
          itemDisplay={ (itemValue: TransportMeans, key: string | number) =>
            <TransportMeansDisplay
              key={key}
              label="Transport Means"
              value={itemValue}
              meta={ShipmentStageFieldMeta.TransportMeans}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Location ubl-LoadingPortLocation"
          meta={ShipmentStageFieldMeta.LoadingPortLocation} 
          value={value.LoadingPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Loading Port Location"
              value={itemValue}
              meta={ShipmentStageFieldMeta.LoadingPortLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Location ubl-UnloadingPortLocation"
          meta={ShipmentStageFieldMeta.UnloadingPortLocation} 
          value={value.UnloadingPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Unloading Port Location"
              value={itemValue}
              meta={ShipmentStageFieldMeta.UnloadingPortLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Location ubl-TransshipPortLocation"
          meta={ShipmentStageFieldMeta.TransshipPortLocation} 
          value={value.TransshipPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Transship Port Location"
              value={itemValue}
              meta={ShipmentStageFieldMeta.TransshipPortLocation}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-LoadingTransportEvent"
          meta={ShipmentStageFieldMeta.LoadingTransportEvent} 
          value={value.LoadingTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Loading Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.LoadingTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-ExaminationTransportEvent"
          meta={ShipmentStageFieldMeta.ExaminationTransportEvent} 
          value={value.ExaminationTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Examination Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ExaminationTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-AvailabilityTransportEvent"
          meta={ShipmentStageFieldMeta.AvailabilityTransportEvent} 
          value={value.AvailabilityTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Availability Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.AvailabilityTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-ExportationTransportEvent"
          meta={ShipmentStageFieldMeta.ExportationTransportEvent} 
          value={value.ExportationTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Exportation Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ExportationTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-DischargeTransportEvent"
          meta={ShipmentStageFieldMeta.DischargeTransportEvent} 
          value={value.DischargeTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Discharge Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.DischargeTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-WarehousingTransportEvent"
          meta={ShipmentStageFieldMeta.WarehousingTransportEvent} 
          value={value.WarehousingTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Warehousing Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.WarehousingTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-TakeoverTransportEvent"
          meta={ShipmentStageFieldMeta.TakeoverTransportEvent} 
          value={value.TakeoverTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Takeover Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.TakeoverTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-OptionalTakeoverTransportEvent"
          meta={ShipmentStageFieldMeta.OptionalTakeoverTransportEvent} 
          value={value.OptionalTakeoverTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Optional Takeover Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.OptionalTakeoverTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-DropoffTransportEvent"
          meta={ShipmentStageFieldMeta.DropoffTransportEvent} 
          value={value.DropoffTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Dropoff Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.DropoffTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-ActualPickupTransportEvent"
          meta={ShipmentStageFieldMeta.ActualPickupTransportEvent} 
          value={value.ActualPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Actual Pickup Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ActualPickupTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-DeliveryTransportEvent"
          meta={ShipmentStageFieldMeta.DeliveryTransportEvent} 
          value={value.DeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Delivery Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.DeliveryTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-ReceiptTransportEvent"
          meta={ShipmentStageFieldMeta.ReceiptTransportEvent} 
          value={value.ReceiptTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Receipt Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ReceiptTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-StorageTransportEvent"
          meta={ShipmentStageFieldMeta.StorageTransportEvent} 
          value={value.StorageTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Storage Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.StorageTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-AcceptanceTransportEvent"
          meta={ShipmentStageFieldMeta.AcceptanceTransportEvent} 
          value={value.AcceptanceTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Acceptance Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.AcceptanceTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Party ubl-TerminalOperatorParty"
          meta={ShipmentStageFieldMeta.TerminalOperatorParty} 
          value={value.TerminalOperatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Terminal Operator Party"
              value={itemValue}
              meta={ShipmentStageFieldMeta.TerminalOperatorParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Party ubl-CustomsAgentParty"
          meta={ShipmentStageFieldMeta.CustomsAgentParty} 
          value={value.CustomsAgentParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Customs Agent Party"
              value={itemValue}
              meta={ShipmentStageFieldMeta.CustomsAgentParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Period ubl-EstimatedTransitPeriod"
          meta={ShipmentStageFieldMeta.EstimatedTransitPeriod} 
          value={value.EstimatedTransitPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay
              key={key}
              label="Estimated Transit Period"
              value={itemValue}
              meta={ShipmentStageFieldMeta.EstimatedTransitPeriod}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ShipmentStage ubl-AllowanceCharge ubl-FreightAllowanceCharge"
          meta={ShipmentStageFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay
              key={key}
              label="Freight Allowance Charge"
              value={itemValue}
              meta={ShipmentStageFieldMeta.FreightAllowanceCharge}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Location ubl-FreightChargeLocation"
          meta={ShipmentStageFieldMeta.FreightChargeLocation} 
          value={value.FreightChargeLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay
              key={key}
              label="Freight Charge Location"
              value={itemValue}
              meta={ShipmentStageFieldMeta.FreightChargeLocation}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-DetentionTransportEvent"
          meta={ShipmentStageFieldMeta.DetentionTransportEvent} 
          value={value.DetentionTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Detention Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.DetentionTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-RequestedDepartureTransportEvent"
          meta={ShipmentStageFieldMeta.RequestedDepartureTransportEvent} 
          value={value.RequestedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Requested Departure Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.RequestedDepartureTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-RequestedArrivalTransportEvent"
          meta={ShipmentStageFieldMeta.RequestedArrivalTransportEvent} 
          value={value.RequestedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Requested Arrival Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.RequestedArrivalTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-RequestedWaypointTransportEvent"
          meta={ShipmentStageFieldMeta.RequestedWaypointTransportEvent} 
          value={value.RequestedWaypointTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Requested Waypoint Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.RequestedWaypointTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-PlannedDepartureTransportEvent"
          meta={ShipmentStageFieldMeta.PlannedDepartureTransportEvent} 
          value={value.PlannedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Planned Departure Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.PlannedDepartureTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-PlannedArrivalTransportEvent"
          meta={ShipmentStageFieldMeta.PlannedArrivalTransportEvent} 
          value={value.PlannedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Planned Arrival Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.PlannedArrivalTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-PlannedWaypointTransportEvent"
          meta={ShipmentStageFieldMeta.PlannedWaypointTransportEvent} 
          value={value.PlannedWaypointTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Planned Waypoint Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.PlannedWaypointTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-ActualDepartureTransportEvent"
          meta={ShipmentStageFieldMeta.ActualDepartureTransportEvent} 
          value={value.ActualDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Actual Departure Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ActualDepartureTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-ActualWaypointTransportEvent"
          meta={ShipmentStageFieldMeta.ActualWaypointTransportEvent} 
          value={value.ActualWaypointTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Actual Waypoint Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ActualWaypointTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-ActualArrivalTransportEvent"
          meta={ShipmentStageFieldMeta.ActualArrivalTransportEvent} 
          value={value.ActualArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Actual Arrival Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ActualArrivalTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent"
          meta={ShipmentStageFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.TransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-EstimatedDepartureTransportEvent"
          meta={ShipmentStageFieldMeta.EstimatedDepartureTransportEvent} 
          value={value.EstimatedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Estimated Departure Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.EstimatedDepartureTransportEvent}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-TransportEvent ubl-EstimatedArrivalTransportEvent"
          meta={ShipmentStageFieldMeta.EstimatedArrivalTransportEvent} 
          value={value.EstimatedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay
              key={key}
              label="Estimated Arrival Transport Event"
              value={itemValue}
              meta={ShipmentStageFieldMeta.EstimatedArrivalTransportEvent}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Person ubl-PassengerPerson"
          meta={ShipmentStageFieldMeta.PassengerPerson} 
          value={value.PassengerPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay
              key={key}
              label="Passenger Person"
              value={itemValue}
              meta={ShipmentStageFieldMeta.PassengerPerson}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Person ubl-DriverPerson"
          meta={ShipmentStageFieldMeta.DriverPerson} 
          value={value.DriverPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay
              key={key}
              label="Driver Person"
              value={itemValue}
              meta={ShipmentStageFieldMeta.DriverPerson}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Person ubl-ReportingPerson"
          meta={ShipmentStageFieldMeta.ReportingPerson} 
          value={value.ReportingPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay
              key={key}
              label="Reporting Person"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ReportingPerson}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Person ubl-CrewMemberPerson"
          meta={ShipmentStageFieldMeta.CrewMemberPerson} 
          value={value.CrewMemberPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay
              key={key}
              label="Crew Member Person"
              value={itemValue}
              meta={ShipmentStageFieldMeta.CrewMemberPerson}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Person ubl-SecurityOfficerPerson"
          meta={ShipmentStageFieldMeta.SecurityOfficerPerson} 
          value={value.SecurityOfficerPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay
              key={key}
              label="Security Officer Person"
              value={itemValue}
              meta={ShipmentStageFieldMeta.SecurityOfficerPerson}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Person ubl-MasterPerson"
          meta={ShipmentStageFieldMeta.MasterPerson} 
          value={value.MasterPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay
              key={key}
              label="Master Person"
              value={itemValue}
              meta={ShipmentStageFieldMeta.MasterPerson}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-ShipmentStage ubl-Person ubl-ShipsSurgeonPerson"
          meta={ShipmentStageFieldMeta.ShipsSurgeonPerson} 
          value={value.ShipsSurgeonPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay
              key={key}
              label="Ships Surgeon Person"
              value={itemValue}
              meta={ShipmentStageFieldMeta.ShipsSurgeonPerson}
            />
          }
        />
        </div>
    </div>
  )
}
