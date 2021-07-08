import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItem } from  '../../model/cac/GoodsItem'
import { GoodsItemField, GoodsItemFieldMeta, GoodsItemTypeName } from  '../../meta/cac/GoodsItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AddressDisplay } from './AddressDisplay'
import { AllowanceChargeDisplay } from './AllowanceChargeDisplay'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DeliveryDisplay } from './DeliveryDisplay'
import { DespatchDisplay } from './DespatchDisplay'
import { DimensionDisplay } from './DimensionDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { GoodsItemContainerDisplay } from './GoodsItemContainerDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { InvoiceLineDisplay } from './InvoiceLineDisplay'
import { ItemDisplay } from './ItemDisplay'
import { MeasureDisplay } from '../cbc/MeasureDisplay'
import { PackageDisplay } from './PackageDisplay'
import { PickupDisplay } from './PickupDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TemperatureDisplay } from './TemperatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<GoodsItem, void>
  goodsItem: GoodsItem[] | undefined
  renderContext: RenderContext
}

export const GoodsItemSubElementsMap: SubElementsTemplatesMap<GoodsItemField, GoodsItem, void> = new Map([
    [
      GoodsItemField.UBLExtensions,
      { meta: GoodsItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={GoodsItemField.UBLExtensions}
          meta={GoodsItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.ID,
      { meta: GoodsItemFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemField.ID}
          meta={GoodsItemFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.SequenceNumberID,
      { meta: GoodsItemFieldMeta.SequenceNumberID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemField.SequenceNumberID}
          meta={GoodsItemFieldMeta.SequenceNumberID}
          fieldConfig={fieldConfig}
          identifier={value?.SequenceNumberID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.Description,
      { meta: GoodsItemFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={GoodsItemField.Description}
          meta={GoodsItemFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.HazardousRiskIndicator,
      { meta: GoodsItemFieldMeta.HazardousRiskIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={GoodsItemField.HazardousRiskIndicator}
          meta={GoodsItemFieldMeta.HazardousRiskIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.HazardousRiskIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.DeclaredCustomsValueAmount,
      { meta: GoodsItemFieldMeta.DeclaredCustomsValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={GoodsItemField.DeclaredCustomsValueAmount}
          meta={GoodsItemFieldMeta.DeclaredCustomsValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredCustomsValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.DeclaredForCarriageValueAmount,
      { meta: GoodsItemFieldMeta.DeclaredForCarriageValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={GoodsItemField.DeclaredForCarriageValueAmount}
          meta={GoodsItemFieldMeta.DeclaredForCarriageValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredForCarriageValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.DeclaredStatisticsValueAmount,
      { meta: GoodsItemFieldMeta.DeclaredStatisticsValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={GoodsItemField.DeclaredStatisticsValueAmount}
          meta={GoodsItemFieldMeta.DeclaredStatisticsValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.DeclaredStatisticsValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.FreeOnBoardValueAmount,
      { meta: GoodsItemFieldMeta.FreeOnBoardValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={GoodsItemField.FreeOnBoardValueAmount}
          meta={GoodsItemFieldMeta.FreeOnBoardValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.FreeOnBoardValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.InsuranceValueAmount,
      { meta: GoodsItemFieldMeta.InsuranceValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={GoodsItemField.InsuranceValueAmount}
          meta={GoodsItemFieldMeta.InsuranceValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.InsuranceValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.ValueAmount,
      { meta: GoodsItemFieldMeta.ValueAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={GoodsItemField.ValueAmount}
          meta={GoodsItemFieldMeta.ValueAmount}
          fieldConfig={fieldConfig}
          amount={value?.ValueAmount}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.GrossWeightMeasure,
      { meta: GoodsItemFieldMeta.GrossWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={GoodsItemField.GrossWeightMeasure}
          meta={GoodsItemFieldMeta.GrossWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.NetWeightMeasure,
      { meta: GoodsItemFieldMeta.NetWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={GoodsItemField.NetWeightMeasure}
          meta={GoodsItemFieldMeta.NetWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.NetNetWeightMeasure,
      { meta: GoodsItemFieldMeta.NetNetWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={GoodsItemField.NetNetWeightMeasure}
          meta={GoodsItemFieldMeta.NetNetWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetNetWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.ChargeableWeightMeasure,
      { meta: GoodsItemFieldMeta.ChargeableWeightMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={GoodsItemField.ChargeableWeightMeasure}
          meta={GoodsItemFieldMeta.ChargeableWeightMeasure}
          fieldConfig={fieldConfig}
          measure={value?.ChargeableWeightMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.GrossVolumeMeasure,
      { meta: GoodsItemFieldMeta.GrossVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={GoodsItemField.GrossVolumeMeasure}
          meta={GoodsItemFieldMeta.GrossVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.GrossVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.NetVolumeMeasure,
      { meta: GoodsItemFieldMeta.NetVolumeMeasure,
        template: ({value, renderContext, fieldConfig}) => <MeasureDisplay
          key={GoodsItemField.NetVolumeMeasure}
          meta={GoodsItemFieldMeta.NetVolumeMeasure}
          fieldConfig={fieldConfig}
          measure={value?.NetVolumeMeasure}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.Quantity,
      { meta: GoodsItemFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={GoodsItemField.Quantity}
          meta={GoodsItemFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.PreferenceCriterionCode,
      { meta: GoodsItemFieldMeta.PreferenceCriterionCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={GoodsItemField.PreferenceCriterionCode}
          meta={GoodsItemFieldMeta.PreferenceCriterionCode}
          fieldConfig={fieldConfig}
          code={value?.PreferenceCriterionCode}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.RequiredCustomsID,
      { meta: GoodsItemFieldMeta.RequiredCustomsID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemField.RequiredCustomsID}
          meta={GoodsItemFieldMeta.RequiredCustomsID}
          fieldConfig={fieldConfig}
          identifier={value?.RequiredCustomsID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.CustomsStatusCode,
      { meta: GoodsItemFieldMeta.CustomsStatusCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={GoodsItemField.CustomsStatusCode}
          meta={GoodsItemFieldMeta.CustomsStatusCode}
          fieldConfig={fieldConfig}
          code={value?.CustomsStatusCode}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.CustomsTariffQuantity,
      { meta: GoodsItemFieldMeta.CustomsTariffQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={GoodsItemField.CustomsTariffQuantity}
          meta={GoodsItemFieldMeta.CustomsTariffQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.CustomsTariffQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.CustomsImportClassifiedIndicator,
      { meta: GoodsItemFieldMeta.CustomsImportClassifiedIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={GoodsItemField.CustomsImportClassifiedIndicator}
          meta={GoodsItemFieldMeta.CustomsImportClassifiedIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.CustomsImportClassifiedIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.ChargeableQuantity,
      { meta: GoodsItemFieldMeta.ChargeableQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={GoodsItemField.ChargeableQuantity}
          meta={GoodsItemFieldMeta.ChargeableQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ChargeableQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.ReturnableQuantity,
      { meta: GoodsItemFieldMeta.ReturnableQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={GoodsItemField.ReturnableQuantity}
          meta={GoodsItemFieldMeta.ReturnableQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.ReturnableQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.TraceID,
      { meta: GoodsItemFieldMeta.TraceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemField.TraceID}
          meta={GoodsItemFieldMeta.TraceID}
          fieldConfig={fieldConfig}
          identifier={value?.TraceID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.Item,
      { meta: GoodsItemFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={GoodsItemField.Item}
          meta={GoodsItemFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.GoodsItemContainer,
      { meta: GoodsItemFieldMeta.GoodsItemContainer,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemContainerDisplay
          key={GoodsItemField.GoodsItemContainer}
          meta={GoodsItemFieldMeta.GoodsItemContainer}
          fieldConfig={fieldConfig}
          goodsItemContainer={value?.GoodsItemContainer}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.FreightAllowanceCharge,
      { meta: GoodsItemFieldMeta.FreightAllowanceCharge,
        template: ({value, renderContext, fieldConfig}) => <AllowanceChargeDisplay
          key={GoodsItemField.FreightAllowanceCharge}
          meta={GoodsItemFieldMeta.FreightAllowanceCharge}
          fieldConfig={fieldConfig}
          allowanceCharge={value?.FreightAllowanceCharge}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.InvoiceLine,
      { meta: GoodsItemFieldMeta.InvoiceLine,
        template: ({value, renderContext, fieldConfig}) => <InvoiceLineDisplay
          key={GoodsItemField.InvoiceLine}
          meta={GoodsItemFieldMeta.InvoiceLine}
          fieldConfig={fieldConfig}
          invoiceLine={value?.InvoiceLine}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.Temperature,
      { meta: GoodsItemFieldMeta.Temperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={GoodsItemField.Temperature}
          meta={GoodsItemFieldMeta.Temperature}
          fieldConfig={fieldConfig}
          temperature={value?.Temperature}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.ContainedGoodsItem,
      { meta: GoodsItemFieldMeta.ContainedGoodsItem,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemDisplay
          key={GoodsItemField.ContainedGoodsItem}
          meta={GoodsItemFieldMeta.ContainedGoodsItem}
          fieldConfig={fieldConfig}
          goodsItem={value?.ContainedGoodsItem}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.OriginAddress,
      { meta: GoodsItemFieldMeta.OriginAddress,
        template: ({value, renderContext, fieldConfig}) => <AddressDisplay
          key={GoodsItemField.OriginAddress}
          meta={GoodsItemFieldMeta.OriginAddress}
          fieldConfig={fieldConfig}
          address={value?.OriginAddress}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.Delivery,
      { meta: GoodsItemFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={GoodsItemField.Delivery}
          meta={GoodsItemFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.Pickup,
      { meta: GoodsItemFieldMeta.Pickup,
        template: ({value, renderContext, fieldConfig}) => <PickupDisplay
          key={GoodsItemField.Pickup}
          meta={GoodsItemFieldMeta.Pickup}
          fieldConfig={fieldConfig}
          pickup={value?.Pickup}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.Despatch,
      { meta: GoodsItemFieldMeta.Despatch,
        template: ({value, renderContext, fieldConfig}) => <DespatchDisplay
          key={GoodsItemField.Despatch}
          meta={GoodsItemFieldMeta.Despatch}
          fieldConfig={fieldConfig}
          despatch={value?.Despatch}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.MeasurementDimension,
      { meta: GoodsItemFieldMeta.MeasurementDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={GoodsItemField.MeasurementDimension}
          meta={GoodsItemFieldMeta.MeasurementDimension}
          fieldConfig={fieldConfig}
          dimension={value?.MeasurementDimension}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.ContainingPackage,
      { meta: GoodsItemFieldMeta.ContainingPackage,
        template: ({value, renderContext, fieldConfig}) => <PackageDisplay
          key={GoodsItemField.ContainingPackage}
          meta={GoodsItemFieldMeta.ContainingPackage}
          fieldConfig={fieldConfig}
          packageValue={value?.ContainingPackage}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.ShipmentDocumentReference,
      { meta: GoodsItemFieldMeta.ShipmentDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={GoodsItemField.ShipmentDocumentReference}
          meta={GoodsItemFieldMeta.ShipmentDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ShipmentDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.MinimumTemperature,
      { meta: GoodsItemFieldMeta.MinimumTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={GoodsItemField.MinimumTemperature}
          meta={GoodsItemFieldMeta.MinimumTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.MinimumTemperature}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemField.MaximumTemperature,
      { meta: GoodsItemFieldMeta.MaximumTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={GoodsItemField.MaximumTemperature}
          meta={GoodsItemFieldMeta.MaximumTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.MaximumTemperature}
          renderContext={renderContext}
        />}
    ]
]) 

export function GoodsItemDisplay<TFieldMeta>({ meta, fieldConfig, goodsItem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    GoodsItemTypeName,
    meta,
    fieldConfig,
    goodsItem,
    renderContext,
    GoodsItemSubElementsMap,
  )
}
