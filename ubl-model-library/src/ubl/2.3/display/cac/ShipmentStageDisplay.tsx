import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: ShipmentStage
  meta: FieldMeta<T>
}

export default function ShipmentStageDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={ShipmentStageFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={ShipmentStageFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ShipmentStageFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.TransportModeCode} 
          value={value.TransportModeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ShipmentStageFieldMeta.TransportModeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.TransportMeansTypeCode} 
          value={value.TransportMeansTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ShipmentStageFieldMeta.TransportMeansTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.TransitDirectionCode} 
          value={value.TransitDirectionCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={ShipmentStageFieldMeta.TransitDirectionCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.PreCarriageIndicator} 
          value={value.PreCarriageIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ShipmentStageFieldMeta.PreCarriageIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.OnCarriageIndicator} 
          value={value.OnCarriageIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={ShipmentStageFieldMeta.OnCarriageIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.EstimatedDeliveryDate} 
          value={value.EstimatedDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ShipmentStageFieldMeta.EstimatedDeliveryDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.EstimatedDeliveryTime} 
          value={value.EstimatedDeliveryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ShipmentStageFieldMeta.EstimatedDeliveryTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.RequiredDeliveryDate} 
          value={value.RequiredDeliveryDate}
          itemDisplay={ (itemValue: Date, key: string | number) =>
            <DateDisplay key={key} meta={ShipmentStageFieldMeta.RequiredDeliveryDate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.RequiredDeliveryTime} 
          value={value.RequiredDeliveryTime}
          itemDisplay={ (itemValue: Time, key: string | number) =>
            <TimeDisplay key={key} meta={ShipmentStageFieldMeta.RequiredDeliveryTime} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.LoadingSequenceID} 
          value={value.LoadingSequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ShipmentStageFieldMeta.LoadingSequenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.SuccessiveSequenceID} 
          value={value.SuccessiveSequenceID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={ShipmentStageFieldMeta.SuccessiveSequenceID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.Instructions} 
          value={value.Instructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ShipmentStageFieldMeta.Instructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.DemurrageInstructions} 
          value={value.DemurrageInstructions}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={ShipmentStageFieldMeta.DemurrageInstructions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.CrewQuantity} 
          value={value.CrewQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ShipmentStageFieldMeta.CrewQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.PassengerQuantity} 
          value={value.PassengerQuantity}
          itemDisplay={ (itemValue: Quantity, key: string | number) =>
            <QuantityDisplay key={key} meta={ShipmentStageFieldMeta.PassengerQuantity} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.TransitPeriod} 
          value={value.TransitPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ShipmentStageFieldMeta.TransitPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.CarrierParty} 
          value={value.CarrierParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ShipmentStageFieldMeta.CarrierParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.TransportMeans} 
          value={value.TransportMeans}
          itemDisplay={ (itemValue: TransportMeans, key: string | number) =>
            <TransportMeansDisplay key={key} meta={ShipmentStageFieldMeta.TransportMeans} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.LoadingPortLocation} 
          value={value.LoadingPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ShipmentStageFieldMeta.LoadingPortLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.UnloadingPortLocation} 
          value={value.UnloadingPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ShipmentStageFieldMeta.UnloadingPortLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.TransshipPortLocation} 
          value={value.TransshipPortLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ShipmentStageFieldMeta.TransshipPortLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.LoadingTransportEvent} 
          value={value.LoadingTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.LoadingTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ExaminationTransportEvent} 
          value={value.ExaminationTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.ExaminationTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.AvailabilityTransportEvent} 
          value={value.AvailabilityTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.AvailabilityTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ExportationTransportEvent} 
          value={value.ExportationTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.ExportationTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.DischargeTransportEvent} 
          value={value.DischargeTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.DischargeTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.WarehousingTransportEvent} 
          value={value.WarehousingTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.WarehousingTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.TakeoverTransportEvent} 
          value={value.TakeoverTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.TakeoverTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.OptionalTakeoverTransportEvent} 
          value={value.OptionalTakeoverTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.OptionalTakeoverTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.DropoffTransportEvent} 
          value={value.DropoffTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.DropoffTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ActualPickupTransportEvent} 
          value={value.ActualPickupTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.ActualPickupTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.DeliveryTransportEvent} 
          value={value.DeliveryTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.DeliveryTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ReceiptTransportEvent} 
          value={value.ReceiptTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.ReceiptTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.StorageTransportEvent} 
          value={value.StorageTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.StorageTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.AcceptanceTransportEvent} 
          value={value.AcceptanceTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.AcceptanceTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.TerminalOperatorParty} 
          value={value.TerminalOperatorParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ShipmentStageFieldMeta.TerminalOperatorParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.CustomsAgentParty} 
          value={value.CustomsAgentParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={ShipmentStageFieldMeta.CustomsAgentParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.EstimatedTransitPeriod} 
          value={value.EstimatedTransitPeriod}
          itemDisplay={ (itemValue: Period, key: string | number) =>
            <PeriodDisplay key={key} meta={ShipmentStageFieldMeta.EstimatedTransitPeriod} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.FreightAllowanceCharge} 
          value={value.FreightAllowanceCharge}
          itemDisplay={ (itemValue: AllowanceCharge, key: string | number) =>
            <AllowanceChargeDisplay key={key} meta={ShipmentStageFieldMeta.FreightAllowanceCharge} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.FreightChargeLocation} 
          value={value.FreightChargeLocation}
          itemDisplay={ (itemValue: Location, key: string | number) =>
            <LocationDisplay key={key} meta={ShipmentStageFieldMeta.FreightChargeLocation} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.DetentionTransportEvent} 
          value={value.DetentionTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.DetentionTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.RequestedDepartureTransportEvent} 
          value={value.RequestedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.RequestedDepartureTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.RequestedArrivalTransportEvent} 
          value={value.RequestedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.RequestedArrivalTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.RequestedWaypointTransportEvent} 
          value={value.RequestedWaypointTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.RequestedWaypointTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.PlannedDepartureTransportEvent} 
          value={value.PlannedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.PlannedDepartureTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.PlannedArrivalTransportEvent} 
          value={value.PlannedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.PlannedArrivalTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.PlannedWaypointTransportEvent} 
          value={value.PlannedWaypointTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.PlannedWaypointTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ActualDepartureTransportEvent} 
          value={value.ActualDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.ActualDepartureTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ActualWaypointTransportEvent} 
          value={value.ActualWaypointTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.ActualWaypointTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ActualArrivalTransportEvent} 
          value={value.ActualArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.ActualArrivalTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.TransportEvent} 
          value={value.TransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.TransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.EstimatedDepartureTransportEvent} 
          value={value.EstimatedDepartureTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.EstimatedDepartureTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.EstimatedArrivalTransportEvent} 
          value={value.EstimatedArrivalTransportEvent}
          itemDisplay={ (itemValue: TransportEvent, key: string | number) =>
            <TransportEventDisplay key={key} meta={ShipmentStageFieldMeta.EstimatedArrivalTransportEvent} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.PassengerPerson} 
          value={value.PassengerPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay key={key} meta={ShipmentStageFieldMeta.PassengerPerson} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.DriverPerson} 
          value={value.DriverPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay key={key} meta={ShipmentStageFieldMeta.DriverPerson} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ReportingPerson} 
          value={value.ReportingPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay key={key} meta={ShipmentStageFieldMeta.ReportingPerson} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.CrewMemberPerson} 
          value={value.CrewMemberPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay key={key} meta={ShipmentStageFieldMeta.CrewMemberPerson} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.SecurityOfficerPerson} 
          value={value.SecurityOfficerPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay key={key} meta={ShipmentStageFieldMeta.SecurityOfficerPerson} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.MasterPerson} 
          value={value.MasterPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay key={key} meta={ShipmentStageFieldMeta.MasterPerson} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={ShipmentStageFieldMeta.ShipsSurgeonPerson} 
          value={value.ShipsSurgeonPerson}
          itemDisplay={ (itemValue: Person, key: string | number) =>
            <PersonDisplay key={key} meta={ShipmentStageFieldMeta.ShipsSurgeonPerson} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
