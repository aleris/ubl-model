import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ShipmentStage } from  '../../model/cac/ShipmentStage'
import { ShipmentStageField, ShipmentStageFieldMeta, ShipmentStageTypeName } from  '../../meta/cac/ShipmentStageMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LocationDisplay } from './LocationDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PeriodDisplay } from './PeriodDisplay'
import { PersonDisplay } from './PersonDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { TransportEventDisplay } from './TransportEventDisplay'
import { TransportMeansDisplay } from './TransportMeansDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ShipmentStage, void>
  shipmentStage: ShipmentStage[] | undefined
  renderContext: RenderContext
}

export const ShipmentStageSubElementsMap: SubElementsTemplatesMap<ShipmentStageField, ShipmentStage, void> = new Map([
    [
      ShipmentStageField.UBLExtensions,
      { meta: ShipmentStageFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ShipmentStageField.UBLExtensions}
          meta={ShipmentStageFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ID,
      { meta: ShipmentStageFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ShipmentStageField.ID}
          meta={ShipmentStageFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.TransportModeCode,
      { meta: ShipmentStageFieldMeta.TransportModeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ShipmentStageField.TransportModeCode}
          meta={ShipmentStageFieldMeta.TransportModeCode}
          fieldConfig={fieldConfig}
          code={value?.TransportModeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.TransportMeansTypeCode,
      { meta: ShipmentStageFieldMeta.TransportMeansTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ShipmentStageField.TransportMeansTypeCode}
          meta={ShipmentStageFieldMeta.TransportMeansTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TransportMeansTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.TransitDirectionCode,
      { meta: ShipmentStageFieldMeta.TransitDirectionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ShipmentStageField.TransitDirectionCode}
          meta={ShipmentStageFieldMeta.TransitDirectionCode}
          fieldConfig={fieldConfig}
          code={value?.TransitDirectionCode}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.PreCarriageIndicator,
      { meta: ShipmentStageFieldMeta.PreCarriageIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ShipmentStageField.PreCarriageIndicator}
          meta={ShipmentStageFieldMeta.PreCarriageIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PreCarriageIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.OnCarriageIndicator,
      { meta: ShipmentStageFieldMeta.OnCarriageIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ShipmentStageField.OnCarriageIndicator}
          meta={ShipmentStageFieldMeta.OnCarriageIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.OnCarriageIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.EstimatedDeliveryDate,
      { meta: ShipmentStageFieldMeta.EstimatedDeliveryDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ShipmentStageField.EstimatedDeliveryDate}
          meta={ShipmentStageFieldMeta.EstimatedDeliveryDate}
          fieldConfig={fieldConfig}
          date={value?.EstimatedDeliveryDate}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.EstimatedDeliveryTime,
      { meta: ShipmentStageFieldMeta.EstimatedDeliveryTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ShipmentStageField.EstimatedDeliveryTime}
          meta={ShipmentStageFieldMeta.EstimatedDeliveryTime}
          fieldConfig={fieldConfig}
          time={value?.EstimatedDeliveryTime}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.RequiredDeliveryDate,
      { meta: ShipmentStageFieldMeta.RequiredDeliveryDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ShipmentStageField.RequiredDeliveryDate}
          meta={ShipmentStageFieldMeta.RequiredDeliveryDate}
          fieldConfig={fieldConfig}
          date={value?.RequiredDeliveryDate}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.RequiredDeliveryTime,
      { meta: ShipmentStageFieldMeta.RequiredDeliveryTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ShipmentStageField.RequiredDeliveryTime}
          meta={ShipmentStageFieldMeta.RequiredDeliveryTime}
          fieldConfig={fieldConfig}
          time={value?.RequiredDeliveryTime}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.LoadingSequenceID,
      { meta: ShipmentStageFieldMeta.LoadingSequenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ShipmentStageField.LoadingSequenceID}
          meta={ShipmentStageFieldMeta.LoadingSequenceID}
          fieldConfig={fieldConfig}
          identifier={value?.LoadingSequenceID}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.SuccessiveSequenceID,
      { meta: ShipmentStageFieldMeta.SuccessiveSequenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ShipmentStageField.SuccessiveSequenceID}
          meta={ShipmentStageFieldMeta.SuccessiveSequenceID}
          fieldConfig={fieldConfig}
          identifier={value?.SuccessiveSequenceID}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.Instructions,
      { meta: ShipmentStageFieldMeta.Instructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ShipmentStageField.Instructions}
          meta={ShipmentStageFieldMeta.Instructions}
          fieldConfig={fieldConfig}
          text={value?.Instructions}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.DemurrageInstructions,
      { meta: ShipmentStageFieldMeta.DemurrageInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ShipmentStageField.DemurrageInstructions}
          meta={ShipmentStageFieldMeta.DemurrageInstructions}
          fieldConfig={fieldConfig}
          text={value?.DemurrageInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.CrewQuantity,
      { meta: ShipmentStageFieldMeta.CrewQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ShipmentStageField.CrewQuantity}
          meta={ShipmentStageFieldMeta.CrewQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.CrewQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.PassengerQuantity,
      { meta: ShipmentStageFieldMeta.PassengerQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ShipmentStageField.PassengerQuantity}
          meta={ShipmentStageFieldMeta.PassengerQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.PassengerQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.TransitPeriod,
      { meta: ShipmentStageFieldMeta.TransitPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ShipmentStageField.TransitPeriod}
          meta={ShipmentStageFieldMeta.TransitPeriod}
          fieldConfig={fieldConfig}
          period={value?.TransitPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.CarrierParty,
      { meta: ShipmentStageFieldMeta.CarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ShipmentStageField.CarrierParty}
          meta={ShipmentStageFieldMeta.CarrierParty}
          fieldConfig={fieldConfig}
          party={value?.CarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.TransportMeans,
      { meta: ShipmentStageFieldMeta.TransportMeans,
        template: ({value, renderContext, fieldConfig}) => <TransportMeansDisplay
          key={ShipmentStageField.TransportMeans}
          meta={ShipmentStageFieldMeta.TransportMeans}
          fieldConfig={fieldConfig}
          transportMeans={value?.TransportMeans}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.LoadingPortLocation,
      { meta: ShipmentStageFieldMeta.LoadingPortLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ShipmentStageField.LoadingPortLocation}
          meta={ShipmentStageFieldMeta.LoadingPortLocation}
          fieldConfig={fieldConfig}
          location={value?.LoadingPortLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.UnloadingPortLocation,
      { meta: ShipmentStageFieldMeta.UnloadingPortLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ShipmentStageField.UnloadingPortLocation}
          meta={ShipmentStageFieldMeta.UnloadingPortLocation}
          fieldConfig={fieldConfig}
          location={value?.UnloadingPortLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.TransshipPortLocation,
      { meta: ShipmentStageFieldMeta.TransshipPortLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ShipmentStageField.TransshipPortLocation}
          meta={ShipmentStageFieldMeta.TransshipPortLocation}
          fieldConfig={fieldConfig}
          location={value?.TransshipPortLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.LoadingTransportEvent,
      { meta: ShipmentStageFieldMeta.LoadingTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.LoadingTransportEvent}
          meta={ShipmentStageFieldMeta.LoadingTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.LoadingTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ExaminationTransportEvent,
      { meta: ShipmentStageFieldMeta.ExaminationTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.ExaminationTransportEvent}
          meta={ShipmentStageFieldMeta.ExaminationTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ExaminationTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.AvailabilityTransportEvent,
      { meta: ShipmentStageFieldMeta.AvailabilityTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.AvailabilityTransportEvent}
          meta={ShipmentStageFieldMeta.AvailabilityTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.AvailabilityTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ExportationTransportEvent,
      { meta: ShipmentStageFieldMeta.ExportationTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.ExportationTransportEvent}
          meta={ShipmentStageFieldMeta.ExportationTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ExportationTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.DischargeTransportEvent,
      { meta: ShipmentStageFieldMeta.DischargeTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.DischargeTransportEvent}
          meta={ShipmentStageFieldMeta.DischargeTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.DischargeTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.WarehousingTransportEvent,
      { meta: ShipmentStageFieldMeta.WarehousingTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.WarehousingTransportEvent}
          meta={ShipmentStageFieldMeta.WarehousingTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.WarehousingTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.TakeoverTransportEvent,
      { meta: ShipmentStageFieldMeta.TakeoverTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.TakeoverTransportEvent}
          meta={ShipmentStageFieldMeta.TakeoverTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.TakeoverTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.OptionalTakeoverTransportEvent,
      { meta: ShipmentStageFieldMeta.OptionalTakeoverTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.OptionalTakeoverTransportEvent}
          meta={ShipmentStageFieldMeta.OptionalTakeoverTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.OptionalTakeoverTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.DropoffTransportEvent,
      { meta: ShipmentStageFieldMeta.DropoffTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.DropoffTransportEvent}
          meta={ShipmentStageFieldMeta.DropoffTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.DropoffTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ActualPickupTransportEvent,
      { meta: ShipmentStageFieldMeta.ActualPickupTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.ActualPickupTransportEvent}
          meta={ShipmentStageFieldMeta.ActualPickupTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ActualPickupTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.DeliveryTransportEvent,
      { meta: ShipmentStageFieldMeta.DeliveryTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.DeliveryTransportEvent}
          meta={ShipmentStageFieldMeta.DeliveryTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.DeliveryTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ReceiptTransportEvent,
      { meta: ShipmentStageFieldMeta.ReceiptTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.ReceiptTransportEvent}
          meta={ShipmentStageFieldMeta.ReceiptTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ReceiptTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.StorageTransportEvent,
      { meta: ShipmentStageFieldMeta.StorageTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.StorageTransportEvent}
          meta={ShipmentStageFieldMeta.StorageTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.StorageTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.AcceptanceTransportEvent,
      { meta: ShipmentStageFieldMeta.AcceptanceTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.AcceptanceTransportEvent}
          meta={ShipmentStageFieldMeta.AcceptanceTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.AcceptanceTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.TerminalOperatorParty,
      { meta: ShipmentStageFieldMeta.TerminalOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ShipmentStageField.TerminalOperatorParty}
          meta={ShipmentStageFieldMeta.TerminalOperatorParty}
          fieldConfig={fieldConfig}
          party={value?.TerminalOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.CustomsAgentParty,
      { meta: ShipmentStageFieldMeta.CustomsAgentParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ShipmentStageField.CustomsAgentParty}
          meta={ShipmentStageFieldMeta.CustomsAgentParty}
          fieldConfig={fieldConfig}
          party={value?.CustomsAgentParty}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.EstimatedTransitPeriod,
      { meta: ShipmentStageFieldMeta.EstimatedTransitPeriod,
        template: ({value, renderContext, fieldConfig}) => <PeriodDisplay
          key={ShipmentStageField.EstimatedTransitPeriod}
          meta={ShipmentStageFieldMeta.EstimatedTransitPeriod}
          fieldConfig={fieldConfig}
          period={value?.EstimatedTransitPeriod}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.FreightAllowanceCharge,
      { meta: ShipmentStageFieldMeta.FreightAllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={ShipmentStageField.FreightAllowanceCharge}
          meta={ShipmentStageFieldMeta.FreightAllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.FreightAllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.FreightChargeLocation,
      { meta: ShipmentStageFieldMeta.FreightChargeLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ShipmentStageField.FreightChargeLocation}
          meta={ShipmentStageFieldMeta.FreightChargeLocation}
          fieldConfig={fieldConfig}
          location={value?.FreightChargeLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.DetentionTransportEvent,
      { meta: ShipmentStageFieldMeta.DetentionTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.DetentionTransportEvent}
          meta={ShipmentStageFieldMeta.DetentionTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.DetentionTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.RequestedDepartureTransportEvent,
      { meta: ShipmentStageFieldMeta.RequestedDepartureTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.RequestedDepartureTransportEvent}
          meta={ShipmentStageFieldMeta.RequestedDepartureTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.RequestedDepartureTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.RequestedArrivalTransportEvent,
      { meta: ShipmentStageFieldMeta.RequestedArrivalTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.RequestedArrivalTransportEvent}
          meta={ShipmentStageFieldMeta.RequestedArrivalTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.RequestedArrivalTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.RequestedWaypointTransportEvent,
      { meta: ShipmentStageFieldMeta.RequestedWaypointTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.RequestedWaypointTransportEvent}
          meta={ShipmentStageFieldMeta.RequestedWaypointTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.RequestedWaypointTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.PlannedDepartureTransportEvent,
      { meta: ShipmentStageFieldMeta.PlannedDepartureTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.PlannedDepartureTransportEvent}
          meta={ShipmentStageFieldMeta.PlannedDepartureTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.PlannedDepartureTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.PlannedArrivalTransportEvent,
      { meta: ShipmentStageFieldMeta.PlannedArrivalTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.PlannedArrivalTransportEvent}
          meta={ShipmentStageFieldMeta.PlannedArrivalTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.PlannedArrivalTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.PlannedWaypointTransportEvent,
      { meta: ShipmentStageFieldMeta.PlannedWaypointTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.PlannedWaypointTransportEvent}
          meta={ShipmentStageFieldMeta.PlannedWaypointTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.PlannedWaypointTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ActualDepartureTransportEvent,
      { meta: ShipmentStageFieldMeta.ActualDepartureTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.ActualDepartureTransportEvent}
          meta={ShipmentStageFieldMeta.ActualDepartureTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ActualDepartureTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ActualWaypointTransportEvent,
      { meta: ShipmentStageFieldMeta.ActualWaypointTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.ActualWaypointTransportEvent}
          meta={ShipmentStageFieldMeta.ActualWaypointTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ActualWaypointTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ActualArrivalTransportEvent,
      { meta: ShipmentStageFieldMeta.ActualArrivalTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.ActualArrivalTransportEvent}
          meta={ShipmentStageFieldMeta.ActualArrivalTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ActualArrivalTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.TransportEvent,
      { meta: ShipmentStageFieldMeta.TransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.TransportEvent}
          meta={ShipmentStageFieldMeta.TransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.TransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.EstimatedDepartureTransportEvent,
      { meta: ShipmentStageFieldMeta.EstimatedDepartureTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.EstimatedDepartureTransportEvent}
          meta={ShipmentStageFieldMeta.EstimatedDepartureTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.EstimatedDepartureTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.EstimatedArrivalTransportEvent,
      { meta: ShipmentStageFieldMeta.EstimatedArrivalTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ShipmentStageField.EstimatedArrivalTransportEvent}
          meta={ShipmentStageFieldMeta.EstimatedArrivalTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.EstimatedArrivalTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.PassengerPerson,
      { meta: ShipmentStageFieldMeta.PassengerPerson,
        template: ({value, renderContext, fieldConfig}) => <PersonDisplay
          key={ShipmentStageField.PassengerPerson}
          meta={ShipmentStageFieldMeta.PassengerPerson}
          fieldConfig={fieldConfig}
          person={value?.PassengerPerson}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.DriverPerson,
      { meta: ShipmentStageFieldMeta.DriverPerson,
        template: ({value, renderContext, fieldConfig}) => <PersonDisplay
          key={ShipmentStageField.DriverPerson}
          meta={ShipmentStageFieldMeta.DriverPerson}
          fieldConfig={fieldConfig}
          person={value?.DriverPerson}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ReportingPerson,
      { meta: ShipmentStageFieldMeta.ReportingPerson,
        template: ({value, renderContext, fieldConfig}) => <PersonDisplay
          key={ShipmentStageField.ReportingPerson}
          meta={ShipmentStageFieldMeta.ReportingPerson}
          fieldConfig={fieldConfig}
          person={value?.ReportingPerson}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.CrewMemberPerson,
      { meta: ShipmentStageFieldMeta.CrewMemberPerson,
        template: ({value, renderContext, fieldConfig}) => <PersonDisplay
          key={ShipmentStageField.CrewMemberPerson}
          meta={ShipmentStageFieldMeta.CrewMemberPerson}
          fieldConfig={fieldConfig}
          person={value?.CrewMemberPerson}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.SecurityOfficerPerson,
      { meta: ShipmentStageFieldMeta.SecurityOfficerPerson,
        template: ({value, renderContext, fieldConfig}) => <PersonDisplay
          key={ShipmentStageField.SecurityOfficerPerson}
          meta={ShipmentStageFieldMeta.SecurityOfficerPerson}
          fieldConfig={fieldConfig}
          person={value?.SecurityOfficerPerson}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.MasterPerson,
      { meta: ShipmentStageFieldMeta.MasterPerson,
        template: ({value, renderContext, fieldConfig}) => <PersonDisplay
          key={ShipmentStageField.MasterPerson}
          meta={ShipmentStageFieldMeta.MasterPerson}
          fieldConfig={fieldConfig}
          person={value?.MasterPerson}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentStageField.ShipsSurgeonPerson,
      { meta: ShipmentStageFieldMeta.ShipsSurgeonPerson,
        template: ({value, renderContext, fieldConfig}) => <PersonDisplay
          key={ShipmentStageField.ShipsSurgeonPerson}
          meta={ShipmentStageFieldMeta.ShipsSurgeonPerson}
          fieldConfig={fieldConfig}
          person={value?.ShipsSurgeonPerson}
          renderContext={renderContext}
        />}
    ]
]) 

export function ShipmentStageDisplay<TFieldMeta>({ meta, fieldConfig, shipmentStage, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ShipmentStageTypeName,
    meta,
    fieldConfig,
    shipmentStage,
    renderContext,
    ShipmentStageSubElementsMap,
  )
}
