import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Consignment } from  '../../model/cac/Consignment'
import { ConsignmentField, ConsignmentFieldMeta, ConsignmentTypeName } from  '../../meta/cac/ConsignmentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ContractDisplay } from './ContractDisplay'
import { CountryDisplay } from './CountryDisplay'
import { CustomsDeclarationDisplay } from './CustomsDeclarationDisplay'
import { DeliveryTermsDisplay } from './DeliveryTermsDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LocationDisplay } from './LocationDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { PartyDisplay } from './PartyDisplay'
import { PaymentTermsDisplay } from './PaymentTermsDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { ShipmentDisplay } from './ShipmentDisplay'
import { ShipmentStageDisplay } from './ShipmentStageDisplay'
import { StatusDisplay } from './StatusDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TransportationServiceDisplay } from './TransportationServiceDisplay'
import { TransportEventDisplay } from './TransportEventDisplay'
import { TransportHandlingUnitDisplay } from './TransportHandlingUnitDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Consignment, void>
  consignment: Consignment[] | undefined
  renderContext: RenderContext
}

export const ConsignmentSubElementsMap: SubElementsTemplatesMap<ConsignmentField, Consignment, void> = new Map([
    [
      ConsignmentField.UBLExtensions,
      { meta: ConsignmentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ConsignmentField.UBLExtensions}
          meta={ConsignmentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ID,
      { meta: ConsignmentFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.ID}
          meta={ConsignmentFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.CarrierAssignedID,
      { meta: ConsignmentFieldMeta.CarrierAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.CarrierAssignedID}
          meta={ConsignmentFieldMeta.CarrierAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.CarrierAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ConsigneeAssignedID,
      { meta: ConsignmentFieldMeta.ConsigneeAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.ConsigneeAssignedID}
          meta={ConsignmentFieldMeta.ConsigneeAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.ConsigneeAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ConsignorAssignedID,
      { meta: ConsignmentFieldMeta.ConsignorAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.ConsignorAssignedID}
          meta={ConsignmentFieldMeta.ConsignorAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.ConsignorAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.FreightForwarderAssignedID,
      { meta: ConsignmentFieldMeta.FreightForwarderAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.FreightForwarderAssignedID}
          meta={ConsignmentFieldMeta.FreightForwarderAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.FreightForwarderAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.BrokerAssignedID,
      { meta: ConsignmentFieldMeta.BrokerAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.BrokerAssignedID}
          meta={ConsignmentFieldMeta.BrokerAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.BrokerAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ContractedCarrierAssignedID,
      { meta: ConsignmentFieldMeta.ContractedCarrierAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.ContractedCarrierAssignedID}
          meta={ConsignmentFieldMeta.ContractedCarrierAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.ContractedCarrierAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.PerformingCarrierAssignedID,
      { meta: ConsignmentFieldMeta.PerformingCarrierAssignedID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.PerformingCarrierAssignedID}
          meta={ConsignmentFieldMeta.PerformingCarrierAssignedID}
          fieldConfig={fieldConfig}
          identifier={value?.PerformingCarrierAssignedID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.SummaryDescription,
      { meta: ConsignmentFieldMeta.SummaryDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.SummaryDescription}
          meta={ConsignmentFieldMeta.SummaryDescription}
          fieldConfig={fieldConfig}
          text={value?.SummaryDescription}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TotalInvoiceAmount,
      { meta: ConsignmentFieldMeta.TotalInvoiceAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsignmentField.TotalInvoiceAmount}
          meta={ConsignmentFieldMeta.TotalInvoiceAmount}
          fieldConfig={fieldConfig}
          amount={value?.TotalInvoiceAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.DeclaredCustomsValueAmount,
      { meta: ConsignmentFieldMeta.DeclaredCustomsValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsignmentField.DeclaredCustomsValueAmount}
          meta={ConsignmentFieldMeta.DeclaredCustomsValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredCustomsValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TariffDescription,
      { meta: ConsignmentFieldMeta.TariffDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.TariffDescription}
          meta={ConsignmentFieldMeta.TariffDescription}
          fieldConfig={fieldConfig}
          text={value?.TariffDescription}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TariffCode,
      { meta: ConsignmentFieldMeta.TariffCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsignmentField.TariffCode}
          meta={ConsignmentFieldMeta.TariffCode}
          fieldConfig={fieldConfig}
          code={value?.TariffCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.InsurancePremiumAmount,
      { meta: ConsignmentFieldMeta.InsurancePremiumAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsignmentField.InsurancePremiumAmount}
          meta={ConsignmentFieldMeta.InsurancePremiumAmount}
          fieldConfig={fieldConfig}
          amount={value?.InsurancePremiumAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.GrossWeightMeasure,
      { meta: ConsignmentFieldMeta.GrossWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConsignmentField.GrossWeightMeasure}
          meta={ConsignmentFieldMeta.GrossWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.NetWeightMeasure,
      { meta: ConsignmentFieldMeta.NetWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConsignmentField.NetWeightMeasure}
          meta={ConsignmentFieldMeta.NetWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.NetNetWeightMeasure,
      { meta: ConsignmentFieldMeta.NetNetWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConsignmentField.NetNetWeightMeasure}
          meta={ConsignmentFieldMeta.NetNetWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetNetWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ChargeableWeightMeasure,
      { meta: ConsignmentFieldMeta.ChargeableWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConsignmentField.ChargeableWeightMeasure}
          meta={ConsignmentFieldMeta.ChargeableWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.ChargeableWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.GrossVolumeMeasure,
      { meta: ConsignmentFieldMeta.GrossVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConsignmentField.GrossVolumeMeasure}
          meta={ConsignmentFieldMeta.GrossVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.NetVolumeMeasure,
      { meta: ConsignmentFieldMeta.NetVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConsignmentField.NetVolumeMeasure}
          meta={ConsignmentFieldMeta.NetVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.LoadingLengthMeasure,
      { meta: ConsignmentFieldMeta.LoadingLengthMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ConsignmentField.LoadingLengthMeasure}
          meta={ConsignmentFieldMeta.LoadingLengthMeasure}
          fieldConfig={fieldConfig}
          measure={value?.LoadingLengthMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.Remarks,
      { meta: ConsignmentFieldMeta.Remarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.Remarks}
          meta={ConsignmentFieldMeta.Remarks}
          fieldConfig={fieldConfig}
          text={value?.Remarks}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.HazardousRiskIndicator,
      { meta: ConsignmentFieldMeta.HazardousRiskIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.HazardousRiskIndicator}
          meta={ConsignmentFieldMeta.HazardousRiskIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.HazardousRiskIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.AnimalFoodIndicator,
      { meta: ConsignmentFieldMeta.AnimalFoodIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.AnimalFoodIndicator}
          meta={ConsignmentFieldMeta.AnimalFoodIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.AnimalFoodIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.HumanFoodIndicator,
      { meta: ConsignmentFieldMeta.HumanFoodIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.HumanFoodIndicator}
          meta={ConsignmentFieldMeta.HumanFoodIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.HumanFoodIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.LivestockIndicator,
      { meta: ConsignmentFieldMeta.LivestockIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.LivestockIndicator}
          meta={ConsignmentFieldMeta.LivestockIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.LivestockIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.BulkCargoIndicator,
      { meta: ConsignmentFieldMeta.BulkCargoIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.BulkCargoIndicator}
          meta={ConsignmentFieldMeta.BulkCargoIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.BulkCargoIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ContainerizedIndicator,
      { meta: ConsignmentFieldMeta.ContainerizedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.ContainerizedIndicator}
          meta={ConsignmentFieldMeta.ContainerizedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ContainerizedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.GeneralCargoIndicator,
      { meta: ConsignmentFieldMeta.GeneralCargoIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.GeneralCargoIndicator}
          meta={ConsignmentFieldMeta.GeneralCargoIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.GeneralCargoIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.SpecialSecurityIndicator,
      { meta: ConsignmentFieldMeta.SpecialSecurityIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.SpecialSecurityIndicator}
          meta={ConsignmentFieldMeta.SpecialSecurityIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.SpecialSecurityIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ThirdPartyPayerIndicator,
      { meta: ConsignmentFieldMeta.ThirdPartyPayerIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.ThirdPartyPayerIndicator}
          meta={ConsignmentFieldMeta.ThirdPartyPayerIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ThirdPartyPayerIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.CarrierServiceInstructions,
      { meta: ConsignmentFieldMeta.CarrierServiceInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.CarrierServiceInstructions}
          meta={ConsignmentFieldMeta.CarrierServiceInstructions}
          fieldConfig={fieldConfig}
          text={value?.CarrierServiceInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.CustomsClearanceServiceInstructions,
      { meta: ConsignmentFieldMeta.CustomsClearanceServiceInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.CustomsClearanceServiceInstructions}
          meta={ConsignmentFieldMeta.CustomsClearanceServiceInstructions}
          fieldConfig={fieldConfig}
          text={value?.CustomsClearanceServiceInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ForwarderServiceInstructions,
      { meta: ConsignmentFieldMeta.ForwarderServiceInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.ForwarderServiceInstructions}
          meta={ConsignmentFieldMeta.ForwarderServiceInstructions}
          fieldConfig={fieldConfig}
          text={value?.ForwarderServiceInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.SpecialServiceInstructions,
      { meta: ConsignmentFieldMeta.SpecialServiceInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.SpecialServiceInstructions}
          meta={ConsignmentFieldMeta.SpecialServiceInstructions}
          fieldConfig={fieldConfig}
          text={value?.SpecialServiceInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.SequenceID,
      { meta: ConsignmentFieldMeta.SequenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.SequenceID}
          meta={ConsignmentFieldMeta.SequenceID}
          fieldConfig={fieldConfig}
          identifier={value?.SequenceID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ShippingPriorityLevelCode,
      { meta: ConsignmentFieldMeta.ShippingPriorityLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsignmentField.ShippingPriorityLevelCode}
          meta={ConsignmentFieldMeta.ShippingPriorityLevelCode}
          fieldConfig={fieldConfig}
          code={value?.ShippingPriorityLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.HandlingCode,
      { meta: ConsignmentFieldMeta.HandlingCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ConsignmentField.HandlingCode}
          meta={ConsignmentFieldMeta.HandlingCode}
          fieldConfig={fieldConfig}
          code={value?.HandlingCode}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.HandlingInstructions,
      { meta: ConsignmentFieldMeta.HandlingInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.HandlingInstructions}
          meta={ConsignmentFieldMeta.HandlingInstructions}
          fieldConfig={fieldConfig}
          text={value?.HandlingInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.Information,
      { meta: ConsignmentFieldMeta.Information,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.Information}
          meta={ConsignmentFieldMeta.Information}
          fieldConfig={fieldConfig}
          text={value?.Information}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TotalGoodsItemQuantity,
      { meta: ConsignmentFieldMeta.TotalGoodsItemQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsignmentField.TotalGoodsItemQuantity}
          meta={ConsignmentFieldMeta.TotalGoodsItemQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalGoodsItemQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TotalTransportHandlingUnitQuantity,
      { meta: ConsignmentFieldMeta.TotalTransportHandlingUnitQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsignmentField.TotalTransportHandlingUnitQuantity}
          meta={ConsignmentFieldMeta.TotalTransportHandlingUnitQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalTransportHandlingUnitQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.InsuranceValueAmount,
      { meta: ConsignmentFieldMeta.InsuranceValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsignmentField.InsuranceValueAmount}
          meta={ConsignmentFieldMeta.InsuranceValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.InsuranceValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.DeclaredForCarriageValueAmount,
      { meta: ConsignmentFieldMeta.DeclaredForCarriageValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsignmentField.DeclaredForCarriageValueAmount}
          meta={ConsignmentFieldMeta.DeclaredForCarriageValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredForCarriageValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.DeclaredStatisticsValueAmount,
      { meta: ConsignmentFieldMeta.DeclaredStatisticsValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsignmentField.DeclaredStatisticsValueAmount}
          meta={ConsignmentFieldMeta.DeclaredStatisticsValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredStatisticsValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.FreeOnBoardValueAmount,
      { meta: ConsignmentFieldMeta.FreeOnBoardValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ConsignmentField.FreeOnBoardValueAmount}
          meta={ConsignmentFieldMeta.FreeOnBoardValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.FreeOnBoardValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.SpecialInstructions,
      { meta: ConsignmentFieldMeta.SpecialInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.SpecialInstructions}
          meta={ConsignmentFieldMeta.SpecialInstructions}
          fieldConfig={fieldConfig}
          text={value?.SpecialInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.SplitConsignmentIndicator,
      { meta: ConsignmentFieldMeta.SplitConsignmentIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.SplitConsignmentIndicator}
          meta={ConsignmentFieldMeta.SplitConsignmentIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.SplitConsignmentIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.DeliveryInstructions,
      { meta: ConsignmentFieldMeta.DeliveryInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.DeliveryInstructions}
          meta={ConsignmentFieldMeta.DeliveryInstructions}
          fieldConfig={fieldConfig}
          text={value?.DeliveryInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ConsignmentQuantity,
      { meta: ConsignmentFieldMeta.ConsignmentQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsignmentField.ConsignmentQuantity}
          meta={ConsignmentFieldMeta.ConsignmentQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ConsignmentQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ConsolidatableIndicator,
      { meta: ConsignmentFieldMeta.ConsolidatableIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ConsignmentField.ConsolidatableIndicator}
          meta={ConsignmentFieldMeta.ConsolidatableIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ConsolidatableIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.HaulageInstructions,
      { meta: ConsignmentFieldMeta.HaulageInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ConsignmentField.HaulageInstructions}
          meta={ConsignmentFieldMeta.HaulageInstructions}
          fieldConfig={fieldConfig}
          text={value?.HaulageInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.LoadingSequenceID,
      { meta: ConsignmentFieldMeta.LoadingSequenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ConsignmentField.LoadingSequenceID}
          meta={ConsignmentFieldMeta.LoadingSequenceID}
          fieldConfig={fieldConfig}
          identifier={value?.LoadingSequenceID}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ChildConsignmentQuantity,
      { meta: ConsignmentFieldMeta.ChildConsignmentQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsignmentField.ChildConsignmentQuantity}
          meta={ConsignmentFieldMeta.ChildConsignmentQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ChildConsignmentQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TotalPackagesQuantity,
      { meta: ConsignmentFieldMeta.TotalPackagesQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ConsignmentField.TotalPackagesQuantity}
          meta={ConsignmentFieldMeta.TotalPackagesQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalPackagesQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ConsolidatedShipment,
      { meta: ConsignmentFieldMeta.ConsolidatedShipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={ConsignmentField.ConsolidatedShipment}
          meta={ConsignmentFieldMeta.ConsolidatedShipment}
          fieldConfig={fieldConfig}
          shipment={value?.ConsolidatedShipment}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.CustomsDeclaration,
      { meta: ConsignmentFieldMeta.CustomsDeclaration,
        template: ({value, renderContext, fieldConfig}) => <CustomsDeclarationDisplay
          key={ConsignmentField.CustomsDeclaration}
          meta={ConsignmentFieldMeta.CustomsDeclaration}
          fieldConfig={fieldConfig}
          customsDeclaration={value?.CustomsDeclaration}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.RequestedPickupTransportEvent,
      { meta: ConsignmentFieldMeta.RequestedPickupTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ConsignmentField.RequestedPickupTransportEvent}
          meta={ConsignmentFieldMeta.RequestedPickupTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.RequestedPickupTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.RequestedDeliveryTransportEvent,
      { meta: ConsignmentFieldMeta.RequestedDeliveryTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ConsignmentField.RequestedDeliveryTransportEvent}
          meta={ConsignmentFieldMeta.RequestedDeliveryTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.RequestedDeliveryTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.PlannedPickupTransportEvent,
      { meta: ConsignmentFieldMeta.PlannedPickupTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ConsignmentField.PlannedPickupTransportEvent}
          meta={ConsignmentFieldMeta.PlannedPickupTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.PlannedPickupTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.PlannedDeliveryTransportEvent,
      { meta: ConsignmentFieldMeta.PlannedDeliveryTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ConsignmentField.PlannedDeliveryTransportEvent}
          meta={ConsignmentFieldMeta.PlannedDeliveryTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.PlannedDeliveryTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ActualPickupTransportEvent,
      { meta: ConsignmentFieldMeta.ActualPickupTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ConsignmentField.ActualPickupTransportEvent}
          meta={ConsignmentFieldMeta.ActualPickupTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ActualPickupTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ActualDeliveryTransportEvent,
      { meta: ConsignmentFieldMeta.ActualDeliveryTransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ConsignmentField.ActualDeliveryTransportEvent}
          meta={ConsignmentFieldMeta.ActualDeliveryTransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.ActualDeliveryTransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.Status,
      { meta: ConsignmentFieldMeta.Status,
        template: ({value, renderContext, fieldConfig}) => <StatusDisplay
          key={ConsignmentField.Status}
          meta={ConsignmentFieldMeta.Status}
          fieldConfig={fieldConfig}
          status={value?.Status}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ChildConsignment,
      { meta: ConsignmentFieldMeta.ChildConsignment,
        template: ({value, renderContext, fieldConfig}) => <ConsignmentDisplay
          key={ConsignmentField.ChildConsignment}
          meta={ConsignmentFieldMeta.ChildConsignment}
          fieldConfig={fieldConfig}
          consignment={value?.ChildConsignment}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ConsigneeParty,
      { meta: ConsignmentFieldMeta.ConsigneeParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.ConsigneeParty}
          meta={ConsignmentFieldMeta.ConsigneeParty}
          fieldConfig={fieldConfig}
          party={value?.ConsigneeParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ExporterParty,
      { meta: ConsignmentFieldMeta.ExporterParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.ExporterParty}
          meta={ConsignmentFieldMeta.ExporterParty}
          fieldConfig={fieldConfig}
          party={value?.ExporterParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ConsignorParty,
      { meta: ConsignmentFieldMeta.ConsignorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.ConsignorParty}
          meta={ConsignmentFieldMeta.ConsignorParty}
          fieldConfig={fieldConfig}
          party={value?.ConsignorParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ImporterParty,
      { meta: ConsignmentFieldMeta.ImporterParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.ImporterParty}
          meta={ConsignmentFieldMeta.ImporterParty}
          fieldConfig={fieldConfig}
          party={value?.ImporterParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.CarrierParty,
      { meta: ConsignmentFieldMeta.CarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.CarrierParty}
          meta={ConsignmentFieldMeta.CarrierParty}
          fieldConfig={fieldConfig}
          party={value?.CarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.FreightForwarderParty,
      { meta: ConsignmentFieldMeta.FreightForwarderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.FreightForwarderParty}
          meta={ConsignmentFieldMeta.FreightForwarderParty}
          fieldConfig={fieldConfig}
          party={value?.FreightForwarderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.NotifyParty,
      { meta: ConsignmentFieldMeta.NotifyParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.NotifyParty}
          meta={ConsignmentFieldMeta.NotifyParty}
          fieldConfig={fieldConfig}
          party={value?.NotifyParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.OriginalDespatchParty,
      { meta: ConsignmentFieldMeta.OriginalDespatchParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.OriginalDespatchParty}
          meta={ConsignmentFieldMeta.OriginalDespatchParty}
          fieldConfig={fieldConfig}
          party={value?.OriginalDespatchParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.FinalDeliveryParty,
      { meta: ConsignmentFieldMeta.FinalDeliveryParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.FinalDeliveryParty}
          meta={ConsignmentFieldMeta.FinalDeliveryParty}
          fieldConfig={fieldConfig}
          party={value?.FinalDeliveryParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.PerformingCarrierParty,
      { meta: ConsignmentFieldMeta.PerformingCarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.PerformingCarrierParty}
          meta={ConsignmentFieldMeta.PerformingCarrierParty}
          fieldConfig={fieldConfig}
          party={value?.PerformingCarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.SubstituteCarrierParty,
      { meta: ConsignmentFieldMeta.SubstituteCarrierParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.SubstituteCarrierParty}
          meta={ConsignmentFieldMeta.SubstituteCarrierParty}
          fieldConfig={fieldConfig}
          party={value?.SubstituteCarrierParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.LogisticsOperatorParty,
      { meta: ConsignmentFieldMeta.LogisticsOperatorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.LogisticsOperatorParty}
          meta={ConsignmentFieldMeta.LogisticsOperatorParty}
          fieldConfig={fieldConfig}
          party={value?.LogisticsOperatorParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TransportAdvisorParty,
      { meta: ConsignmentFieldMeta.TransportAdvisorParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.TransportAdvisorParty}
          meta={ConsignmentFieldMeta.TransportAdvisorParty}
          fieldConfig={fieldConfig}
          party={value?.TransportAdvisorParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.HazardousItemNotificationParty,
      { meta: ConsignmentFieldMeta.HazardousItemNotificationParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.HazardousItemNotificationParty}
          meta={ConsignmentFieldMeta.HazardousItemNotificationParty}
          fieldConfig={fieldConfig}
          party={value?.HazardousItemNotificationParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.InsuranceParty,
      { meta: ConsignmentFieldMeta.InsuranceParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.InsuranceParty}
          meta={ConsignmentFieldMeta.InsuranceParty}
          fieldConfig={fieldConfig}
          party={value?.InsuranceParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.MortgageHolderParty,
      { meta: ConsignmentFieldMeta.MortgageHolderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.MortgageHolderParty}
          meta={ConsignmentFieldMeta.MortgageHolderParty}
          fieldConfig={fieldConfig}
          party={value?.MortgageHolderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.BillOfLadingHolderParty,
      { meta: ConsignmentFieldMeta.BillOfLadingHolderParty,
        template: ({value, renderContext, fieldConfig}) => <PartyDisplay
          key={ConsignmentField.BillOfLadingHolderParty}
          meta={ConsignmentFieldMeta.BillOfLadingHolderParty}
          fieldConfig={fieldConfig}
          party={value?.BillOfLadingHolderParty}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.OriginalDepartureCountry,
      { meta: ConsignmentFieldMeta.OriginalDepartureCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={ConsignmentField.OriginalDepartureCountry}
          meta={ConsignmentFieldMeta.OriginalDepartureCountry}
          fieldConfig={fieldConfig}
          country={value?.OriginalDepartureCountry}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.FinalDestinationCountry,
      { meta: ConsignmentFieldMeta.FinalDestinationCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={ConsignmentField.FinalDestinationCountry}
          meta={ConsignmentFieldMeta.FinalDestinationCountry}
          fieldConfig={fieldConfig}
          country={value?.FinalDestinationCountry}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TransitCountry,
      { meta: ConsignmentFieldMeta.TransitCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={ConsignmentField.TransitCountry}
          meta={ConsignmentFieldMeta.TransitCountry}
          fieldConfig={fieldConfig}
          country={value?.TransitCountry}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TransportContract,
      { meta: ConsignmentFieldMeta.TransportContract,
        template: ({value, renderContext, fieldConfig}) => <ContractDisplay
          key={ConsignmentField.TransportContract}
          meta={ConsignmentFieldMeta.TransportContract}
          fieldConfig={fieldConfig}
          contract={value?.TransportContract}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TransportEvent,
      { meta: ConsignmentFieldMeta.TransportEvent,
        template: ({value, renderContext, fieldConfig}) => <TransportEventDisplay
          key={ConsignmentField.TransportEvent}
          meta={ConsignmentFieldMeta.TransportEvent}
          fieldConfig={fieldConfig}
          transportEvent={value?.TransportEvent}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.OriginalDespatchTransportationService,
      { meta: ConsignmentFieldMeta.OriginalDespatchTransportationService,
        template: ({value, renderContext, fieldConfig}) => <TransportationServiceDisplay
          key={ConsignmentField.OriginalDespatchTransportationService}
          meta={ConsignmentFieldMeta.OriginalDespatchTransportationService}
          fieldConfig={fieldConfig}
          transportationService={value?.OriginalDespatchTransportationService}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.FinalDeliveryTransportationService,
      { meta: ConsignmentFieldMeta.FinalDeliveryTransportationService,
        template: ({value, renderContext, fieldConfig}) => <TransportationServiceDisplay
          key={ConsignmentField.FinalDeliveryTransportationService}
          meta={ConsignmentFieldMeta.FinalDeliveryTransportationService}
          fieldConfig={fieldConfig}
          transportationService={value?.FinalDeliveryTransportationService}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.DeliveryTerms,
      { meta: ConsignmentFieldMeta.DeliveryTerms,
        template: ({value, renderContext, fieldConfig}) => <DeliveryTermsDisplay
          key={ConsignmentField.DeliveryTerms}
          meta={ConsignmentFieldMeta.DeliveryTerms}
          fieldConfig={fieldConfig}
          deliveryTerms={value?.DeliveryTerms}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.PaymentTerms,
      { meta: ConsignmentFieldMeta.PaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={ConsignmentField.PaymentTerms}
          meta={ConsignmentFieldMeta.PaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.CollectPaymentTerms,
      { meta: ConsignmentFieldMeta.CollectPaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={ConsignmentField.CollectPaymentTerms}
          meta={ConsignmentFieldMeta.CollectPaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.CollectPaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.DisbursementPaymentTerms,
      { meta: ConsignmentFieldMeta.DisbursementPaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={ConsignmentField.DisbursementPaymentTerms}
          meta={ConsignmentFieldMeta.DisbursementPaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.DisbursementPaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.PrepaidPaymentTerms,
      { meta: ConsignmentFieldMeta.PrepaidPaymentTerms,
        template: ({value, renderContext, fieldConfig}) => <PaymentTermsDisplay
          key={ConsignmentField.PrepaidPaymentTerms}
          meta={ConsignmentFieldMeta.PrepaidPaymentTerms}
          fieldConfig={fieldConfig}
          paymentTerms={value?.PrepaidPaymentTerms}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.FreightAllowanceCharge,
      { meta: ConsignmentFieldMeta.FreightAllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={ConsignmentField.FreightAllowanceCharge}
          meta={ConsignmentFieldMeta.FreightAllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.FreightAllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.ExtraAllowanceCharge,
      { meta: ConsignmentFieldMeta.ExtraAllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={ConsignmentField.ExtraAllowanceCharge}
          meta={ConsignmentFieldMeta.ExtraAllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.ExtraAllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.MainCarriageShipmentStage,
      { meta: ConsignmentFieldMeta.MainCarriageShipmentStage,
        template: ({value, renderContext, fieldConfig}) => <ShipmentStageDisplay
          key={ConsignmentField.MainCarriageShipmentStage}
          meta={ConsignmentFieldMeta.MainCarriageShipmentStage}
          fieldConfig={fieldConfig}
          shipmentStage={value?.MainCarriageShipmentStage}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.PreCarriageShipmentStage,
      { meta: ConsignmentFieldMeta.PreCarriageShipmentStage,
        template: ({value, renderContext, fieldConfig}) => <ShipmentStageDisplay
          key={ConsignmentField.PreCarriageShipmentStage}
          meta={ConsignmentFieldMeta.PreCarriageShipmentStage}
          fieldConfig={fieldConfig}
          shipmentStage={value?.PreCarriageShipmentStage}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.OnCarriageShipmentStage,
      { meta: ConsignmentFieldMeta.OnCarriageShipmentStage,
        template: ({value, renderContext, fieldConfig}) => <ShipmentStageDisplay
          key={ConsignmentField.OnCarriageShipmentStage}
          meta={ConsignmentFieldMeta.OnCarriageShipmentStage}
          fieldConfig={fieldConfig}
          shipmentStage={value?.OnCarriageShipmentStage}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.TransportHandlingUnit,
      { meta: ConsignmentFieldMeta.TransportHandlingUnit,
        template: ({value, renderContext, fieldConfig}) => <TransportHandlingUnitDisplay
          key={ConsignmentField.TransportHandlingUnit}
          meta={ConsignmentFieldMeta.TransportHandlingUnit}
          fieldConfig={fieldConfig}
          transportHandlingUnit={value?.TransportHandlingUnit}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.FirstArrivalPortLocation,
      { meta: ConsignmentFieldMeta.FirstArrivalPortLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ConsignmentField.FirstArrivalPortLocation}
          meta={ConsignmentFieldMeta.FirstArrivalPortLocation}
          fieldConfig={fieldConfig}
          location={value?.FirstArrivalPortLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ConsignmentField.LastExitPortLocation,
      { meta: ConsignmentFieldMeta.LastExitPortLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ConsignmentField.LastExitPortLocation}
          meta={ConsignmentFieldMeta.LastExitPortLocation}
          fieldConfig={fieldConfig}
          location={value?.LastExitPortLocation}
          renderContext={renderContext}
        />}
    ]
]) 

export function ConsignmentDisplay<TFieldMeta>({ meta, fieldConfig, consignment, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ConsignmentTypeName,
    meta,
    fieldConfig,
    consignment,
    renderContext,
    ConsignmentSubElementsMap,
  )
}
