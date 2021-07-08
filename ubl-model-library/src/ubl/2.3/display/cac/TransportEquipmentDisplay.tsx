import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportEquipment } from  '../../model/cac/TransportEquipment'
import { TransportEquipmentField, TransportEquipmentFieldMeta, TransportEquipmentTypeName } from  '../../meta/cac/TransportEquipmentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DeliveryDisplay } from './DeliveryDisplay'
import { DespatchDisplay } from './DespatchDisplay'
import { DimensionDisplay } from './DimensionDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { GoodsItemDisplay } from './GoodsItemDisplay'
import { HazardousGoodsTransitDisplay } from './HazardousGoodsTransitDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LocationDisplay } from './LocationDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { NumericDisplay } from '../cbc/NumericDisplay'
import { PackageDisplay } from './PackageDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PickupDisplay } from './PickupDisplay'
import { SupplierPartyDisplay } from './SupplierPartyDisplay'
import { TemperatureDisplay } from './TemperatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TradingTermsDisplay } from './TradingTermsDisplay'
import { TransportEquipmentSealDisplay } from './TransportEquipmentSealDisplay'
import { TransportEventDisplay } from './TransportEventDisplay'
import { TransportHandlingUnitDisplay } from './TransportHandlingUnitDisplay'
import { TransportMeansDisplay } from './TransportMeansDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'
import { VerifiedGrossMassDisplay } from './VerifiedGrossMassDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportEquipment, void>
  transportEquipment: TransportEquipment[] | undefined
  renderContext: RenderContext
}

export const TransportEquipmentSubElementsMap: SubElementsTemplatesMap<TransportEquipmentField, TransportEquipment, void> = new Map([
    [
      TransportEquipmentField.UBLExtensions,
      { meta: TransportEquipmentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportEquipmentField.UBLExtensions}
          meta={TransportEquipmentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.ID,
      { meta: TransportEquipmentFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportEquipmentField.ID}
          meta={TransportEquipmentFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.ReferencedConsignmentID,
      { meta: TransportEquipmentFieldMeta.ReferencedConsignmentID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportEquipmentField.ReferencedConsignmentID}
          meta={TransportEquipmentFieldMeta.ReferencedConsignmentID}
          fieldConfig={fieldConfig}
          identifier={value?.ReferencedConsignmentID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.TransportEquipmentTypeCode,
      { meta: TransportEquipmentFieldMeta.TransportEquipmentTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEquipmentField.TransportEquipmentTypeCode}
          meta={TransportEquipmentFieldMeta.TransportEquipmentTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TransportEquipmentTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.ProviderTypeCode,
      { meta: TransportEquipmentFieldMeta.ProviderTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEquipmentField.ProviderTypeCode}
          meta={TransportEquipmentFieldMeta.ProviderTypeCode}
          fieldConfig={fieldConfig}
          code={value?.ProviderTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.OwnerTypeCode,
      { meta: TransportEquipmentFieldMeta.OwnerTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEquipmentField.OwnerTypeCode}
          meta={TransportEquipmentFieldMeta.OwnerTypeCode}
          fieldConfig={fieldConfig}
          code={value?.OwnerTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.SizeTypeCode,
      { meta: TransportEquipmentFieldMeta.SizeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEquipmentField.SizeTypeCode}
          meta={TransportEquipmentFieldMeta.SizeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.SizeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.DispositionCode,
      { meta: TransportEquipmentFieldMeta.DispositionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEquipmentField.DispositionCode}
          meta={TransportEquipmentFieldMeta.DispositionCode}
          fieldConfig={fieldConfig}
          code={value?.DispositionCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.FullnessIndicationCode,
      { meta: TransportEquipmentFieldMeta.FullnessIndicationCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEquipmentField.FullnessIndicationCode}
          meta={TransportEquipmentFieldMeta.FullnessIndicationCode}
          fieldConfig={fieldConfig}
          code={value?.FullnessIndicationCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.RefrigerationOnIndicator,
      { meta: TransportEquipmentFieldMeta.RefrigerationOnIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportEquipmentField.RefrigerationOnIndicator}
          meta={TransportEquipmentFieldMeta.RefrigerationOnIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.RefrigerationOnIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.Information,
      { meta: TransportEquipmentFieldMeta.Information,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportEquipmentField.Information}
          meta={TransportEquipmentFieldMeta.Information}
          fieldConfig={fieldConfig}
          text={value?.Information}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.ReturnabilityIndicator,
      { meta: TransportEquipmentFieldMeta.ReturnabilityIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportEquipmentField.ReturnabilityIndicator}
          meta={TransportEquipmentFieldMeta.ReturnabilityIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ReturnabilityIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.LegalStatusIndicator,
      { meta: TransportEquipmentFieldMeta.LegalStatusIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportEquipmentField.LegalStatusIndicator}
          meta={TransportEquipmentFieldMeta.LegalStatusIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.LegalStatusIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.AirFlowPercent,
      { meta: TransportEquipmentFieldMeta.AirFlowPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TransportEquipmentField.AirFlowPercent}
          meta={TransportEquipmentFieldMeta.AirFlowPercent}
          fieldConfig={fieldConfig}
          numeric={value?.AirFlowPercent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.HumidityPercent,
      { meta: TransportEquipmentFieldMeta.HumidityPercent,
        template: ({value, renderContext, fieldConfig}) => <NumericDisplay
          key={TransportEquipmentField.HumidityPercent}
          meta={TransportEquipmentFieldMeta.HumidityPercent}
          fieldConfig={fieldConfig}
          numeric={value?.HumidityPercent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.AnimalFoodApprovedIndicator,
      { meta: TransportEquipmentFieldMeta.AnimalFoodApprovedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportEquipmentField.AnimalFoodApprovedIndicator}
          meta={TransportEquipmentFieldMeta.AnimalFoodApprovedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.AnimalFoodApprovedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.HumanFoodApprovedIndicator,
      { meta: TransportEquipmentFieldMeta.HumanFoodApprovedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportEquipmentField.HumanFoodApprovedIndicator}
          meta={TransportEquipmentFieldMeta.HumanFoodApprovedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.HumanFoodApprovedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.DangerousGoodsApprovedIndicator,
      { meta: TransportEquipmentFieldMeta.DangerousGoodsApprovedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportEquipmentField.DangerousGoodsApprovedIndicator}
          meta={TransportEquipmentFieldMeta.DangerousGoodsApprovedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.DangerousGoodsApprovedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.RefrigeratedIndicator,
      { meta: TransportEquipmentFieldMeta.RefrigeratedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportEquipmentField.RefrigeratedIndicator}
          meta={TransportEquipmentFieldMeta.RefrigeratedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.RefrigeratedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.Characteristics,
      { meta: TransportEquipmentFieldMeta.Characteristics,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportEquipmentField.Characteristics}
          meta={TransportEquipmentFieldMeta.Characteristics}
          fieldConfig={fieldConfig}
          text={value?.Characteristics}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.DamageRemarks,
      { meta: TransportEquipmentFieldMeta.DamageRemarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportEquipmentField.DamageRemarks}
          meta={TransportEquipmentFieldMeta.DamageRemarks}
          fieldConfig={fieldConfig}
          text={value?.DamageRemarks}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.Description,
      { meta: TransportEquipmentFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportEquipmentField.Description}
          meta={TransportEquipmentFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.SpecialTransportRequirements,
      { meta: TransportEquipmentFieldMeta.SpecialTransportRequirements,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportEquipmentField.SpecialTransportRequirements}
          meta={TransportEquipmentFieldMeta.SpecialTransportRequirements}
          fieldConfig={fieldConfig}
          text={value?.SpecialTransportRequirements}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.GrossWeightMeasure,
      { meta: TransportEquipmentFieldMeta.GrossWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={TransportEquipmentField.GrossWeightMeasure}
          meta={TransportEquipmentFieldMeta.GrossWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.GrossVolumeMeasure,
      { meta: TransportEquipmentFieldMeta.GrossVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={TransportEquipmentField.GrossVolumeMeasure}
          meta={TransportEquipmentFieldMeta.GrossVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.TareWeightMeasure,
      { meta: TransportEquipmentFieldMeta.TareWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={TransportEquipmentField.TareWeightMeasure}
          meta={TransportEquipmentFieldMeta.TareWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.TareWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.TrackingDeviceCode,
      { meta: TransportEquipmentFieldMeta.TrackingDeviceCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportEquipmentField.TrackingDeviceCode}
          meta={TransportEquipmentFieldMeta.TrackingDeviceCode}
          fieldConfig={fieldConfig}
          code={value?.TrackingDeviceCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.PowerIndicator,
      { meta: TransportEquipmentFieldMeta.PowerIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportEquipmentField.PowerIndicator}
          meta={TransportEquipmentFieldMeta.PowerIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.PowerIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.TraceID,
      { meta: TransportEquipmentFieldMeta.TraceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportEquipmentField.TraceID}
          meta={TransportEquipmentFieldMeta.TraceID}
          fieldConfig={fieldConfig}
          identifier={value?.TraceID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.MeasurementDimension,
      { meta: TransportEquipmentFieldMeta.MeasurementDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={TransportEquipmentField.MeasurementDimension}
          meta={TransportEquipmentFieldMeta.MeasurementDimension}
          fieldConfig={fieldConfig}
          dimension={value?.MeasurementDimension}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.TransportEquipmentSeal,
      { meta: TransportEquipmentFieldMeta.TransportEquipmentSeal,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentSealDisplay
          key={TransportEquipmentField.TransportEquipmentSeal}
          meta={TransportEquipmentFieldMeta.TransportEquipmentSeal}
          fieldConfig={fieldConfig}
          transportEquipmentSeal={value?.TransportEquipmentSeal}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.MinimumTemperature,
      { meta: TransportEquipmentFieldMeta.MinimumTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={TransportEquipmentField.MinimumTemperature}
          meta={TransportEquipmentFieldMeta.MinimumTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.MinimumTemperature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.MaximumTemperature,
      { meta: TransportEquipmentFieldMeta.MaximumTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={TransportEquipmentField.MaximumTemperature}
          meta={TransportEquipmentFieldMeta.MaximumTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.MaximumTemperature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.ProviderParty,
      { meta: TransportEquipmentFieldMeta.ProviderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportEquipmentField.ProviderParty}
          meta={TransportEquipmentFieldMeta.ProviderParty}
          fieldConfig={fieldConfig}
          party={value?.ProviderParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.LoadingProofParty,
      { meta: TransportEquipmentFieldMeta.LoadingProofParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportEquipmentField.LoadingProofParty}
          meta={TransportEquipmentFieldMeta.LoadingProofParty}
          fieldConfig={fieldConfig}
          party={value?.LoadingProofParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.SupplierParty,
      { meta: TransportEquipmentFieldMeta.SupplierParty,
        template: ({value, renderContext, fieldConfig}) => <SupplierPartyDisplay
          key={TransportEquipmentField.SupplierParty}
          meta={TransportEquipmentFieldMeta.SupplierParty}
          fieldConfig={fieldConfig}
          supplierParty={value?.SupplierParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.OwnerParty,
      { meta: TransportEquipmentFieldMeta.OwnerParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportEquipmentField.OwnerParty}
          meta={TransportEquipmentFieldMeta.OwnerParty}
          fieldConfig={fieldConfig}
          party={value?.OwnerParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.OperatingParty,
      { meta: TransportEquipmentFieldMeta.OperatingParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={TransportEquipmentField.OperatingParty}
          meta={TransportEquipmentFieldMeta.OperatingParty}
          fieldConfig={fieldConfig}
          party={value?.OperatingParty}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.LoadingLocation,
      { meta: TransportEquipmentFieldMeta.LoadingLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportEquipmentField.LoadingLocation}
          meta={TransportEquipmentFieldMeta.LoadingLocation}
          fieldConfig={fieldConfig}
          location={value?.LoadingLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.UnloadingLocation,
      { meta: TransportEquipmentFieldMeta.UnloadingLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportEquipmentField.UnloadingLocation}
          meta={TransportEquipmentFieldMeta.UnloadingLocation}
          fieldConfig={fieldConfig}
          location={value?.UnloadingLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.StorageLocation,
      { meta: TransportEquipmentFieldMeta.StorageLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={TransportEquipmentField.StorageLocation}
          meta={TransportEquipmentFieldMeta.StorageLocation}
          fieldConfig={fieldConfig}
          location={value?.StorageLocation}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.PositioningTransportEvent,
      { meta: TransportEquipmentFieldMeta.PositioningTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportEquipmentField.PositioningTransportEvent}
          meta={TransportEquipmentFieldMeta.PositioningTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.PositioningTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.QuarantineTransportEvent,
      { meta: TransportEquipmentFieldMeta.QuarantineTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportEquipmentField.QuarantineTransportEvent}
          meta={TransportEquipmentFieldMeta.QuarantineTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.QuarantineTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.DeliveryTransportEvent,
      { meta: TransportEquipmentFieldMeta.DeliveryTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportEquipmentField.DeliveryTransportEvent}
          meta={TransportEquipmentFieldMeta.DeliveryTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.DeliveryTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.PickupTransportEvent,
      { meta: TransportEquipmentFieldMeta.PickupTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportEquipmentField.PickupTransportEvent}
          meta={TransportEquipmentFieldMeta.PickupTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.PickupTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.HandlingTransportEvent,
      { meta: TransportEquipmentFieldMeta.HandlingTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportEquipmentField.HandlingTransportEvent}
          meta={TransportEquipmentFieldMeta.HandlingTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.HandlingTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.LoadingTransportEvent,
      { meta: TransportEquipmentFieldMeta.LoadingTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportEquipmentField.LoadingTransportEvent}
          meta={TransportEquipmentFieldMeta.LoadingTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.LoadingTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.TransportEvent,
      { meta: TransportEquipmentFieldMeta.TransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={TransportEquipmentField.TransportEvent}
          meta={TransportEquipmentFieldMeta.TransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.TransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.ApplicableTransportMeans,
      { meta: TransportEquipmentFieldMeta.ApplicableTransportMeans,
        template: ({value, renderContext, fieldConfig}) => <TransportMeansDisplay
          key={TransportEquipmentField.ApplicableTransportMeans}
          meta={TransportEquipmentFieldMeta.ApplicableTransportMeans}
          fieldConfig={fieldConfig}
          transportMeans={value?.ApplicableTransportMeans}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.HaulageTradingTerms,
      { meta: TransportEquipmentFieldMeta.HaulageTradingTerms,
        template: ({value, renderContext, fieldConfig}) => <TradingTermsDisplay
          key={TransportEquipmentField.HaulageTradingTerms}
          meta={TransportEquipmentFieldMeta.HaulageTradingTerms}
          fieldConfig={fieldConfig}
          tradingTerms={value?.HaulageTradingTerms}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.HazardousGoodsTransit,
      { meta: TransportEquipmentFieldMeta.HazardousGoodsTransit,
        template: ({value, renderContext, fieldConfig}) => <HazardousGoodsTransitDisplay
          key={TransportEquipmentField.HazardousGoodsTransit}
          meta={TransportEquipmentFieldMeta.HazardousGoodsTransit}
          fieldConfig={fieldConfig}
          hazardousGoodsTransit={value?.HazardousGoodsTransit}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.PackagedTransportHandlingUnit,
      { meta: TransportEquipmentFieldMeta.PackagedTransportHandlingUnit,
        template: ({value, renderContext, fieldConfig}) => <TransportHandlingUnitDisplay
          key={TransportEquipmentField.PackagedTransportHandlingUnit}
          meta={TransportEquipmentFieldMeta.PackagedTransportHandlingUnit}
          fieldConfig={fieldConfig}
          transportHandlingUnit={value?.PackagedTransportHandlingUnit}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.ServiceAllowanceCharge,
      { meta: TransportEquipmentFieldMeta.ServiceAllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={TransportEquipmentField.ServiceAllowanceCharge}
          meta={TransportEquipmentFieldMeta.ServiceAllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.ServiceAllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.FreightAllowanceCharge,
      { meta: TransportEquipmentFieldMeta.FreightAllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={TransportEquipmentField.FreightAllowanceCharge}
          meta={TransportEquipmentFieldMeta.FreightAllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.FreightAllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.AttachedTransportEquipment,
      { meta: TransportEquipmentFieldMeta.AttachedTransportEquipment,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentDisplay
          key={TransportEquipmentField.AttachedTransportEquipment}
          meta={TransportEquipmentFieldMeta.AttachedTransportEquipment}
          fieldConfig={fieldConfig}
          transportEquipment={value?.AttachedTransportEquipment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.Delivery,
      { meta: TransportEquipmentFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={TransportEquipmentField.Delivery}
          meta={TransportEquipmentFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.Pickup,
      { meta: TransportEquipmentFieldMeta.Pickup,
        template: ({value, renderContext, fieldConfig}) => <PickupDisplay
          key={TransportEquipmentField.Pickup}
          meta={TransportEquipmentFieldMeta.Pickup}
          fieldConfig={fieldConfig}
          pickup={value?.Pickup}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.Despatch,
      { meta: TransportEquipmentFieldMeta.Despatch,
        template: ({value, renderContext, fieldConfig}) => <DespatchDisplay
          key={TransportEquipmentField.Despatch}
          meta={TransportEquipmentFieldMeta.Despatch}
          fieldConfig={fieldConfig}
          despatch={value?.Despatch}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.ShipmentDocumentReference,
      { meta: TransportEquipmentFieldMeta.ShipmentDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportEquipmentField.ShipmentDocumentReference}
          meta={TransportEquipmentFieldMeta.ShipmentDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ShipmentDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.ContainedInTransportEquipment,
      { meta: TransportEquipmentFieldMeta.ContainedInTransportEquipment,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentDisplay
          key={TransportEquipmentField.ContainedInTransportEquipment}
          meta={TransportEquipmentFieldMeta.ContainedInTransportEquipment}
          fieldConfig={fieldConfig}
          transportEquipment={value?.ContainedInTransportEquipment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.Package,
      { meta: TransportEquipmentFieldMeta.Package,
        template: ({value, renderContext, fieldConfig}) => <PackageDisplay
          key={TransportEquipmentField.Package}
          meta={TransportEquipmentFieldMeta.Package}
          fieldConfig={fieldConfig}
          packageValue={value?.Package}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.GoodsItem,
      { meta: TransportEquipmentFieldMeta.GoodsItem,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemDisplay
          key={TransportEquipmentField.GoodsItem}
          meta={TransportEquipmentFieldMeta.GoodsItem}
          fieldConfig={fieldConfig}
          goodsItem={value?.GoodsItem}
          renderContext={renderContext}
        />}
    ],

    [
      TransportEquipmentField.VerifiedGrossMass,
      { meta: TransportEquipmentFieldMeta.VerifiedGrossMass,
        template: ({value, renderContext, fieldConfig}) => <VerifiedGrossMassDisplay
          key={TransportEquipmentField.VerifiedGrossMass}
          meta={TransportEquipmentFieldMeta.VerifiedGrossMass}
          fieldConfig={fieldConfig}
          verifiedGrossMass={value?.VerifiedGrossMass}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportEquipmentDisplay<TFieldMeta>({ meta, fieldConfig, transportEquipment, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportEquipmentTypeName,
    meta,
    fieldConfig,
    transportEquipment,
    renderContext,
    TransportEquipmentSubElementsMap,
  )
}
