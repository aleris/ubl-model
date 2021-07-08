import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Shipment } from  '../../model/cac/Shipment'
import { ShipmentField, ShipmentFieldMeta, ShipmentTypeName } from  '../../meta/cac/ShipmentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { ConsignmentDisplay } from './ConsignmentDisplay'
import { CountryDisplay } from './CountryDisplay'
import { DeliveryDisplay } from './DeliveryDisplay'
import { GoodsItemDisplay } from './GoodsItemDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { LocationDisplay } from './LocationDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { ShipmentStageDisplay } from './ShipmentStageDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TransportHandlingUnitDisplay } from './TransportHandlingUnitDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Shipment, void>
  shipment: Shipment[] | undefined
  renderContext: RenderContext
}

export const ShipmentSubElementsMap: SubElementsTemplatesMap<ShipmentField, Shipment, void> = new Map([
    [
      ShipmentField.UBLExtensions,
      { meta: ShipmentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ShipmentField.UBLExtensions}
          meta={ShipmentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.ID,
      { meta: ShipmentFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ShipmentField.ID}
          meta={ShipmentFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.ShippingPriorityLevelCode,
      { meta: ShipmentFieldMeta.ShippingPriorityLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ShipmentField.ShippingPriorityLevelCode}
          meta={ShipmentFieldMeta.ShippingPriorityLevelCode}
          fieldConfig={fieldConfig}
          code={value?.ShippingPriorityLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.HandlingCode,
      { meta: ShipmentFieldMeta.HandlingCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ShipmentField.HandlingCode}
          meta={ShipmentFieldMeta.HandlingCode}
          fieldConfig={fieldConfig}
          code={value?.HandlingCode}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.HandlingInstructions,
      { meta: ShipmentFieldMeta.HandlingInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ShipmentField.HandlingInstructions}
          meta={ShipmentFieldMeta.HandlingInstructions}
          fieldConfig={fieldConfig}
          text={value?.HandlingInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.Information,
      { meta: ShipmentFieldMeta.Information,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ShipmentField.Information}
          meta={ShipmentFieldMeta.Information}
          fieldConfig={fieldConfig}
          text={value?.Information}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.GrossWeightMeasure,
      { meta: ShipmentFieldMeta.GrossWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ShipmentField.GrossWeightMeasure}
          meta={ShipmentFieldMeta.GrossWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.NetWeightMeasure,
      { meta: ShipmentFieldMeta.NetWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ShipmentField.NetWeightMeasure}
          meta={ShipmentFieldMeta.NetWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.NetNetWeightMeasure,
      { meta: ShipmentFieldMeta.NetNetWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ShipmentField.NetNetWeightMeasure}
          meta={ShipmentFieldMeta.NetNetWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetNetWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.GrossVolumeMeasure,
      { meta: ShipmentFieldMeta.GrossVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ShipmentField.GrossVolumeMeasure}
          meta={ShipmentFieldMeta.GrossVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.NetVolumeMeasure,
      { meta: ShipmentFieldMeta.NetVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={ShipmentField.NetVolumeMeasure}
          meta={ShipmentFieldMeta.NetVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.TotalGoodsItemQuantity,
      { meta: ShipmentFieldMeta.TotalGoodsItemQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ShipmentField.TotalGoodsItemQuantity}
          meta={ShipmentFieldMeta.TotalGoodsItemQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalGoodsItemQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.TotalTransportHandlingUnitQuantity,
      { meta: ShipmentFieldMeta.TotalTransportHandlingUnitQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ShipmentField.TotalTransportHandlingUnitQuantity}
          meta={ShipmentFieldMeta.TotalTransportHandlingUnitQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalTransportHandlingUnitQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.InsuranceValueAmount,
      { meta: ShipmentFieldMeta.InsuranceValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ShipmentField.InsuranceValueAmount}
          meta={ShipmentFieldMeta.InsuranceValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.InsuranceValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.DeclaredCustomsValueAmount,
      { meta: ShipmentFieldMeta.DeclaredCustomsValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ShipmentField.DeclaredCustomsValueAmount}
          meta={ShipmentFieldMeta.DeclaredCustomsValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredCustomsValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.DeclaredForCarriageValueAmount,
      { meta: ShipmentFieldMeta.DeclaredForCarriageValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ShipmentField.DeclaredForCarriageValueAmount}
          meta={ShipmentFieldMeta.DeclaredForCarriageValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredForCarriageValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.DeclaredStatisticsValueAmount,
      { meta: ShipmentFieldMeta.DeclaredStatisticsValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ShipmentField.DeclaredStatisticsValueAmount}
          meta={ShipmentFieldMeta.DeclaredStatisticsValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredStatisticsValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.FreeOnBoardValueAmount,
      { meta: ShipmentFieldMeta.FreeOnBoardValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ShipmentField.FreeOnBoardValueAmount}
          meta={ShipmentFieldMeta.FreeOnBoardValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.FreeOnBoardValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.SpecialInstructions,
      { meta: ShipmentFieldMeta.SpecialInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ShipmentField.SpecialInstructions}
          meta={ShipmentFieldMeta.SpecialInstructions}
          fieldConfig={fieldConfig}
          text={value?.SpecialInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.DeliveryInstructions,
      { meta: ShipmentFieldMeta.DeliveryInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ShipmentField.DeliveryInstructions}
          meta={ShipmentFieldMeta.DeliveryInstructions}
          fieldConfig={fieldConfig}
          text={value?.DeliveryInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.SplitConsignmentIndicator,
      { meta: ShipmentFieldMeta.SplitConsignmentIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={ShipmentField.SplitConsignmentIndicator}
          meta={ShipmentFieldMeta.SplitConsignmentIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.SplitConsignmentIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.ConsignmentQuantity,
      { meta: ShipmentFieldMeta.ConsignmentQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ShipmentField.ConsignmentQuantity}
          meta={ShipmentFieldMeta.ConsignmentQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ConsignmentQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.Consignment,
      { meta: ShipmentFieldMeta.Consignment,
        template: ({value, renderContext, fieldConfig}) => <ConsignmentDisplay
          key={ShipmentField.Consignment}
          meta={ShipmentFieldMeta.Consignment}
          fieldConfig={fieldConfig}
          consignment={value?.Consignment}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.GoodsItem,
      { meta: ShipmentFieldMeta.GoodsItem,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemDisplay
          key={ShipmentField.GoodsItem}
          meta={ShipmentFieldMeta.GoodsItem}
          fieldConfig={fieldConfig}
          goodsItem={value?.GoodsItem}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.ShipmentStage,
      { meta: ShipmentFieldMeta.ShipmentStage,
        template: ({value, renderContext, fieldConfig}) => <ShipmentStageDisplay
          key={ShipmentField.ShipmentStage}
          meta={ShipmentFieldMeta.ShipmentStage}
          fieldConfig={fieldConfig}
          shipmentStage={value?.ShipmentStage}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.Delivery,
      { meta: ShipmentFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={ShipmentField.Delivery}
          meta={ShipmentFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.TransportHandlingUnit,
      { meta: ShipmentFieldMeta.TransportHandlingUnit,
        template: ({value, renderContext, fieldConfig}) => <TransportHandlingUnitDisplay
          key={ShipmentField.TransportHandlingUnit}
          meta={ShipmentFieldMeta.TransportHandlingUnit}
          fieldConfig={fieldConfig}
          transportHandlingUnit={value?.TransportHandlingUnit}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.ReturnAddress,
      { meta: ShipmentFieldMeta.ReturnAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={ShipmentField.ReturnAddress}
          meta={ShipmentFieldMeta.ReturnAddress}
          fieldConfig={fieldConfig}
          address={value?.ReturnAddress}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.OriginAddress,
      { meta: ShipmentFieldMeta.OriginAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={ShipmentField.OriginAddress}
          meta={ShipmentFieldMeta.OriginAddress}
          fieldConfig={fieldConfig}
          address={value?.OriginAddress}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.FirstArrivalPortLocation,
      { meta: ShipmentFieldMeta.FirstArrivalPortLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ShipmentField.FirstArrivalPortLocation}
          meta={ShipmentFieldMeta.FirstArrivalPortLocation}
          fieldConfig={fieldConfig}
          location={value?.FirstArrivalPortLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.LastExitPortLocation,
      { meta: ShipmentFieldMeta.LastExitPortLocation,
        template: ({value, renderContext, fieldConfig}) => <LocationDisplay
          key={ShipmentField.LastExitPortLocation}
          meta={ShipmentFieldMeta.LastExitPortLocation}
          fieldConfig={fieldConfig}
          location={value?.LastExitPortLocation}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.ExportCountry,
      { meta: ShipmentFieldMeta.ExportCountry,
        template: ({value, renderContext, fieldConfig}) => <CountryDisplay
          key={ShipmentField.ExportCountry}
          meta={ShipmentFieldMeta.ExportCountry}
          fieldConfig={fieldConfig}
          country={value?.ExportCountry}
          renderContext={renderContext}
        />}
    ],

    [
      ShipmentField.FreightAllowanceCharge,
      { meta: ShipmentFieldMeta.FreightAllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={ShipmentField.FreightAllowanceCharge}
          meta={ShipmentFieldMeta.FreightAllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.FreightAllowanceCharge}
          renderContext={renderContext}
        />}
    ]
]) 

export function ShipmentDisplay<TFieldMeta>({ meta, fieldConfig, shipment, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ShipmentTypeName,
    meta,
    fieldConfig,
    shipment,
    renderContext,
    ShipmentSubElementsMap,
  )
}
