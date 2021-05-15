import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: ShipmentStage | undefined
  meta: FieldMeta<T>
}

export default function ShipmentStageDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-ShipmentStage">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={ShipmentStageFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={ShipmentStageFieldMeta.ID}
          />

          <CodeDisplay
            label="Transport Mode Code"
            value={value.TransportModeCode?.[0]}
            meta={ShipmentStageFieldMeta.TransportModeCode}
          />

          <CodeDisplay
            label="Transport Means Type Code"
            value={value.TransportMeansTypeCode?.[0]}
            meta={ShipmentStageFieldMeta.TransportMeansTypeCode}
          />

          <CodeDisplay
            label="Transit Direction Code"
            value={value.TransitDirectionCode?.[0]}
            meta={ShipmentStageFieldMeta.TransitDirectionCode}
          />

          <IndicatorDisplay
            label="Pre Carriage Indicator"
            value={value.PreCarriageIndicator?.[0]}
            meta={ShipmentStageFieldMeta.PreCarriageIndicator}
          />

          <IndicatorDisplay
            label="On Carriage Indicator"
            value={value.OnCarriageIndicator?.[0]}
            meta={ShipmentStageFieldMeta.OnCarriageIndicator}
          />

          <DateDisplay
            label="Estimated Delivery Date"
            value={value.EstimatedDeliveryDate?.[0]}
            meta={ShipmentStageFieldMeta.EstimatedDeliveryDate}
          />

          <TimeDisplay
            label="Estimated Delivery Time"
            value={value.EstimatedDeliveryTime?.[0]}
            meta={ShipmentStageFieldMeta.EstimatedDeliveryTime}
          />

          <DateDisplay
            label="Required Delivery Date"
            value={value.RequiredDeliveryDate?.[0]}
            meta={ShipmentStageFieldMeta.RequiredDeliveryDate}
          />

          <TimeDisplay
            label="Required Delivery Time"
            value={value.RequiredDeliveryTime?.[0]}
            meta={ShipmentStageFieldMeta.RequiredDeliveryTime}
          />

          <IdentifierDisplay
            label="Loading Sequence Identifier"
            value={value.LoadingSequenceID?.[0]}
            meta={ShipmentStageFieldMeta.LoadingSequenceID}
          />

          <IdentifierDisplay
            label="Successive Sequence Identifier"
            value={value.SuccessiveSequenceID?.[0]}
            meta={ShipmentStageFieldMeta.SuccessiveSequenceID}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Instructions"
            label="Instructions"
            items={value.Instructions}
            meta={ShipmentStageFieldMeta.Instructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Instructions"
                value={itemValue}
                meta={ShipmentStageFieldMeta.Instructions}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-DemurrageInstructions"
            label="Demurrage Instructions"
            items={value.DemurrageInstructions}
            meta={ShipmentStageFieldMeta.DemurrageInstructions} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Demurrage Instructions"
                value={itemValue}
                meta={ShipmentStageFieldMeta.DemurrageInstructions}
              />
            }
          />

          <QuantityDisplay
            label="Crew Quantity"
            value={value.CrewQuantity?.[0]}
            meta={ShipmentStageFieldMeta.CrewQuantity}
          />

          <QuantityDisplay
            label="Passenger Quantity"
            value={value.PassengerQuantity?.[0]}
            meta={ShipmentStageFieldMeta.PassengerQuantity}
          />

          <PeriodDisplay
            label="Transit Period"
            value={value.TransitPeriod?.[0]}
            meta={ShipmentStageFieldMeta.TransitPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Party ubl-CarrierParty"
            label="Carrier Party"
            items={value.CarrierParty}
            meta={ShipmentStageFieldMeta.CarrierParty} 
            itemDisplay={ (itemValue: Party, key: string | number) =>
              <PartyDisplay
                key={key}
                label="Carrier Party"
                value={itemValue}
                meta={ShipmentStageFieldMeta.CarrierParty}
              />
            }
          />

          <TransportMeansDisplay
            label="Transport Means"
            value={value.TransportMeans?.[0]}
            meta={ShipmentStageFieldMeta.TransportMeans}
          />

          <LocationDisplay
            label="Loading Port Location"
            value={value.LoadingPortLocation?.[0]}
            meta={ShipmentStageFieldMeta.LoadingPortLocation}
          />

          <LocationDisplay
            label="Unloading Port Location"
            value={value.UnloadingPortLocation?.[0]}
            meta={ShipmentStageFieldMeta.UnloadingPortLocation}
          />

          <LocationDisplay
            label="Transship Port Location"
            value={value.TransshipPortLocation?.[0]}
            meta={ShipmentStageFieldMeta.TransshipPortLocation}
          />

          <TransportEventDisplay
            label="Loading Transport Event"
            value={value.LoadingTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.LoadingTransportEvent}
          />

          <TransportEventDisplay
            label="Examination Transport Event"
            value={value.ExaminationTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.ExaminationTransportEvent}
          />

          <TransportEventDisplay
            label="Availability Transport Event"
            value={value.AvailabilityTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.AvailabilityTransportEvent}
          />

          <TransportEventDisplay
            label="Exportation Transport Event"
            value={value.ExportationTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.ExportationTransportEvent}
          />

          <TransportEventDisplay
            label="Discharge Transport Event"
            value={value.DischargeTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.DischargeTransportEvent}
          />

          <TransportEventDisplay
            label="Warehousing Transport Event"
            value={value.WarehousingTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.WarehousingTransportEvent}
          />

          <TransportEventDisplay
            label="Takeover Transport Event"
            value={value.TakeoverTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.TakeoverTransportEvent}
          />

          <TransportEventDisplay
            label="Optional Takeover Transport Event"
            value={value.OptionalTakeoverTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.OptionalTakeoverTransportEvent}
          />

          <TransportEventDisplay
            label="Dropoff Transport Event"
            value={value.DropoffTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.DropoffTransportEvent}
          />

          <TransportEventDisplay
            label="Actual Pickup Transport Event"
            value={value.ActualPickupTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.ActualPickupTransportEvent}
          />

          <TransportEventDisplay
            label="Delivery Transport Event"
            value={value.DeliveryTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.DeliveryTransportEvent}
          />

          <TransportEventDisplay
            label="Receipt Transport Event"
            value={value.ReceiptTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.ReceiptTransportEvent}
          />

          <TransportEventDisplay
            label="Storage Transport Event"
            value={value.StorageTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.StorageTransportEvent}
          />

          <TransportEventDisplay
            label="Acceptance Transport Event"
            value={value.AcceptanceTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.AcceptanceTransportEvent}
          />

          <PartyDisplay
            label="Terminal Operator Party"
            value={value.TerminalOperatorParty?.[0]}
            meta={ShipmentStageFieldMeta.TerminalOperatorParty}
          />

          <PartyDisplay
            label="Customs Agent Party"
            value={value.CustomsAgentParty?.[0]}
            meta={ShipmentStageFieldMeta.CustomsAgentParty}
          />

          <PeriodDisplay
            label="Estimated Transit Period"
            value={value.EstimatedTransitPeriod?.[0]}
            meta={ShipmentStageFieldMeta.EstimatedTransitPeriod}
          />

          <ElementListDisplay
            className="ubl-cac ubl-AllowanceCharge ubl-FreightAllowanceCharge"
            label="Freight Allowance Charge"
            items={value.FreightAllowanceCharge}
            meta={ShipmentStageFieldMeta.FreightAllowanceCharge} 
            itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
              <AllowanceChargeDisplay
                key={key}
                label="Freight Allowance Charge"
                value={itemValue}
                meta={ShipmentStageFieldMeta.FreightAllowanceCharge}
              />
            }
          />

          <LocationDisplay
            label="Freight Charge Location"
            value={value.FreightChargeLocation?.[0]}
            meta={ShipmentStageFieldMeta.FreightChargeLocation}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent ubl-DetentionTransportEvent"
            label="Detention Transport Event"
            items={value.DetentionTransportEvent}
            meta={ShipmentStageFieldMeta.DetentionTransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Detention Transport Event"
                value={itemValue}
                meta={ShipmentStageFieldMeta.DetentionTransportEvent}
              />
            }
          />

          <TransportEventDisplay
            label="Requested Departure Transport Event"
            value={value.RequestedDepartureTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.RequestedDepartureTransportEvent}
          />

          <TransportEventDisplay
            label="Requested Arrival Transport Event"
            value={value.RequestedArrivalTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.RequestedArrivalTransportEvent}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent ubl-RequestedWaypointTransportEvent"
            label="Requested Waypoint Transport Event"
            items={value.RequestedWaypointTransportEvent}
            meta={ShipmentStageFieldMeta.RequestedWaypointTransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Requested Waypoint Transport Event"
                value={itemValue}
                meta={ShipmentStageFieldMeta.RequestedWaypointTransportEvent}
              />
            }
          />

          <TransportEventDisplay
            label="Planned Departure Transport Event"
            value={value.PlannedDepartureTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.PlannedDepartureTransportEvent}
          />

          <TransportEventDisplay
            label="Planned Arrival Transport Event"
            value={value.PlannedArrivalTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.PlannedArrivalTransportEvent}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent ubl-PlannedWaypointTransportEvent"
            label="Planned Waypoint Transport Event"
            items={value.PlannedWaypointTransportEvent}
            meta={ShipmentStageFieldMeta.PlannedWaypointTransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Planned Waypoint Transport Event"
                value={itemValue}
                meta={ShipmentStageFieldMeta.PlannedWaypointTransportEvent}
              />
            }
          />

          <TransportEventDisplay
            label="Actual Departure Transport Event"
            value={value.ActualDepartureTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.ActualDepartureTransportEvent}
          />

          <TransportEventDisplay
            label="Actual Waypoint Transport Event"
            value={value.ActualWaypointTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.ActualWaypointTransportEvent}
          />

          <TransportEventDisplay
            label="Actual Arrival Transport Event"
            value={value.ActualArrivalTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.ActualArrivalTransportEvent}
          />

          <ElementListDisplay
            className="ubl-cac ubl-TransportEvent"
            label="Transport Event"
            items={value.TransportEvent}
            meta={ShipmentStageFieldMeta.TransportEvent} 
            itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
              <TransportEventDisplay
                key={key}
                label="Transport Event"
                value={itemValue}
                meta={ShipmentStageFieldMeta.TransportEvent}
              />
            }
          />

          <TransportEventDisplay
            label="Estimated Departure Transport Event"
            value={value.EstimatedDepartureTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.EstimatedDepartureTransportEvent}
          />

          <TransportEventDisplay
            label="Estimated Arrival Transport Event"
            value={value.EstimatedArrivalTransportEvent?.[0]}
            meta={ShipmentStageFieldMeta.EstimatedArrivalTransportEvent}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Person ubl-PassengerPerson"
            label="Passenger Person"
            items={value.PassengerPerson}
            meta={ShipmentStageFieldMeta.PassengerPerson} 
            itemDisplay={ (itemValue: Person, key: string | number) =>
              <PersonDisplay
                key={key}
                label="Passenger Person"
                value={itemValue}
                meta={ShipmentStageFieldMeta.PassengerPerson}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Person ubl-DriverPerson"
            label="Driver Person"
            items={value.DriverPerson}
            meta={ShipmentStageFieldMeta.DriverPerson} 
            itemDisplay={ (itemValue: Person, key: string | number) =>
              <PersonDisplay
                key={key}
                label="Driver Person"
                value={itemValue}
                meta={ShipmentStageFieldMeta.DriverPerson}
              />
            }
          />

          <PersonDisplay
            label="Reporting Person"
            value={value.ReportingPerson?.[0]}
            meta={ShipmentStageFieldMeta.ReportingPerson}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Person ubl-CrewMemberPerson"
            label="Crew Member Person"
            items={value.CrewMemberPerson}
            meta={ShipmentStageFieldMeta.CrewMemberPerson} 
            itemDisplay={ (itemValue: Person, key: string | number) =>
              <PersonDisplay
                key={key}
                label="Crew Member Person"
                value={itemValue}
                meta={ShipmentStageFieldMeta.CrewMemberPerson}
              />
            }
          />

          <PersonDisplay
            label="Security Officer Person"
            value={value.SecurityOfficerPerson?.[0]}
            meta={ShipmentStageFieldMeta.SecurityOfficerPerson}
          />

          <PersonDisplay
            label="Master Person"
            value={value.MasterPerson?.[0]}
            meta={ShipmentStageFieldMeta.MasterPerson}
          />

          <PersonDisplay
            label="Ships Surgeon Person"
            value={value.ShipsSurgeonPerson?.[0]}
            meta={ShipmentStageFieldMeta.ShipsSurgeonPerson}
          />
        </div>
    </div>
  )
}
