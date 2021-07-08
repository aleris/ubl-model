import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { TransportHandlingUnit } from  '../../model/cac/TransportHandlingUnit'
import { TransportHandlingUnitField, TransportHandlingUnitFieldMeta, TransportHandlingUnitTypeName } from  '../../meta/cac/TransportHandlingUnitMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { CustomsDeclarationDisplay } from './CustomsDeclarationDisplay'
import { DespatchLineDisplay } from './DespatchLineDisplay'
import { DimensionDisplay } from './DimensionDisplay'
import { DocumentReferenceDisplay } from './DocumentReferenceDisplay'
import { GoodsItemDisplay } from './GoodsItemDisplay'
import { HazardousGoodsTransitDisplay } from './HazardousGoodsTransitDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PackageDisplay } from './PackageDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { ReceiptLineDisplay } from './ReceiptLineDisplay'
import { ShipmentDisplay } from './ShipmentDisplay'
import { StatusDisplay } from './StatusDisplay'
import { TemperatureDisplay } from './TemperatureDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TransportEquipmentDisplay } from './TransportEquipmentDisplay'
import { TransportMeansDisplay } from './TransportMeansDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<TransportHandlingUnit, void>
  transportHandlingUnit: TransportHandlingUnit[] | undefined
  renderContext: RenderContext
}

export const TransportHandlingUnitSubElementsMap: SubElementsTemplatesMap<TransportHandlingUnitField, TransportHandlingUnit, void> = new Map([
    [
      TransportHandlingUnitField.UBLExtensions,
      { meta: TransportHandlingUnitFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={TransportHandlingUnitField.UBLExtensions}
          meta={TransportHandlingUnitFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.ID,
      { meta: TransportHandlingUnitFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportHandlingUnitField.ID}
          meta={TransportHandlingUnitFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.TransportHandlingUnitTypeCode,
      { meta: TransportHandlingUnitFieldMeta.TransportHandlingUnitTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportHandlingUnitField.TransportHandlingUnitTypeCode}
          meta={TransportHandlingUnitFieldMeta.TransportHandlingUnitTypeCode}
          fieldConfig={fieldConfig}
          code={value?.TransportHandlingUnitTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.HandlingCode,
      { meta: TransportHandlingUnitFieldMeta.HandlingCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={TransportHandlingUnitField.HandlingCode}
          meta={TransportHandlingUnitFieldMeta.HandlingCode}
          fieldConfig={fieldConfig}
          code={value?.HandlingCode}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.HandlingInstructions,
      { meta: TransportHandlingUnitFieldMeta.HandlingInstructions,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportHandlingUnitField.HandlingInstructions}
          meta={TransportHandlingUnitFieldMeta.HandlingInstructions}
          fieldConfig={fieldConfig}
          text={value?.HandlingInstructions}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.HazardousRiskIndicator,
      { meta: TransportHandlingUnitFieldMeta.HazardousRiskIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={TransportHandlingUnitField.HazardousRiskIndicator}
          meta={TransportHandlingUnitFieldMeta.HazardousRiskIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.HazardousRiskIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.TotalGoodsItemQuantity,
      { meta: TransportHandlingUnitFieldMeta.TotalGoodsItemQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TransportHandlingUnitField.TotalGoodsItemQuantity}
          meta={TransportHandlingUnitFieldMeta.TotalGoodsItemQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalGoodsItemQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.TotalPackageQuantity,
      { meta: TransportHandlingUnitFieldMeta.TotalPackageQuantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={TransportHandlingUnitField.TotalPackageQuantity}
          meta={TransportHandlingUnitFieldMeta.TotalPackageQuantity}
          fieldConfig={fieldConfig}
          quantity={value?.TotalPackageQuantity}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.DamageRemarks,
      { meta: TransportHandlingUnitFieldMeta.DamageRemarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportHandlingUnitField.DamageRemarks}
          meta={TransportHandlingUnitFieldMeta.DamageRemarks}
          fieldConfig={fieldConfig}
          text={value?.DamageRemarks}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.ShippingMarks,
      { meta: TransportHandlingUnitFieldMeta.ShippingMarks,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={TransportHandlingUnitField.ShippingMarks}
          meta={TransportHandlingUnitFieldMeta.ShippingMarks}
          fieldConfig={fieldConfig}
          text={value?.ShippingMarks}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.TraceID,
      { meta: TransportHandlingUnitFieldMeta.TraceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={TransportHandlingUnitField.TraceID}
          meta={TransportHandlingUnitFieldMeta.TraceID}
          fieldConfig={fieldConfig}
          identifier={value?.TraceID}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.HandlingUnitDespatchLine,
      { meta: TransportHandlingUnitFieldMeta.HandlingUnitDespatchLine,
        template: ({value, renderContext, fieldConfig}) => <DespatchLineDisplay
          key={TransportHandlingUnitField.HandlingUnitDespatchLine}
          meta={TransportHandlingUnitFieldMeta.HandlingUnitDespatchLine}
          fieldConfig={fieldConfig}
          despatchLine={value?.HandlingUnitDespatchLine}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.ActualPackage,
      { meta: TransportHandlingUnitFieldMeta.ActualPackage,
        template: ({value, renderContext, fieldConfig}) => <PackageDisplay
          key={TransportHandlingUnitField.ActualPackage}
          meta={TransportHandlingUnitFieldMeta.ActualPackage}
          fieldConfig={fieldConfig}
          packageValue={value?.ActualPackage}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.ReceivedHandlingUnitReceiptLine,
      { meta: TransportHandlingUnitFieldMeta.ReceivedHandlingUnitReceiptLine,
        template: ({value, renderContext, fieldConfig}) => <ReceiptLineDisplay
          key={TransportHandlingUnitField.ReceivedHandlingUnitReceiptLine}
          meta={TransportHandlingUnitFieldMeta.ReceivedHandlingUnitReceiptLine}
          fieldConfig={fieldConfig}
          receiptLine={value?.ReceivedHandlingUnitReceiptLine}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.TransportEquipment,
      { meta: TransportHandlingUnitFieldMeta.TransportEquipment,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentDisplay
          key={TransportHandlingUnitField.TransportEquipment}
          meta={TransportHandlingUnitFieldMeta.TransportEquipment}
          fieldConfig={fieldConfig}
          transportEquipment={value?.TransportEquipment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.TransportMeans,
      { meta: TransportHandlingUnitFieldMeta.TransportMeans,
        template: ({value, renderContext, fieldConfig}) => <TransportMeansDisplay
          key={TransportHandlingUnitField.TransportMeans}
          meta={TransportHandlingUnitFieldMeta.TransportMeans}
          fieldConfig={fieldConfig}
          transportMeans={value?.TransportMeans}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.HazardousGoodsTransit,
      { meta: TransportHandlingUnitFieldMeta.HazardousGoodsTransit,
        template: ({value, renderContext, fieldConfig}) => <HazardousGoodsTransitDisplay
          key={TransportHandlingUnitField.HazardousGoodsTransit}
          meta={TransportHandlingUnitFieldMeta.HazardousGoodsTransit}
          fieldConfig={fieldConfig}
          hazardousGoodsTransit={value?.HazardousGoodsTransit}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.MeasurementDimension,
      { meta: TransportHandlingUnitFieldMeta.MeasurementDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={TransportHandlingUnitField.MeasurementDimension}
          meta={TransportHandlingUnitFieldMeta.MeasurementDimension}
          fieldConfig={fieldConfig}
          dimension={value?.MeasurementDimension}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.MinimumTemperature,
      { meta: TransportHandlingUnitFieldMeta.MinimumTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={TransportHandlingUnitField.MinimumTemperature}
          meta={TransportHandlingUnitFieldMeta.MinimumTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.MinimumTemperature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.MaximumTemperature,
      { meta: TransportHandlingUnitFieldMeta.MaximumTemperature,
        template: ({value, renderContext, fieldConfig}) => <TemperatureDisplay
          key={TransportHandlingUnitField.MaximumTemperature}
          meta={TransportHandlingUnitFieldMeta.MaximumTemperature}
          fieldConfig={fieldConfig}
          temperature={value?.MaximumTemperature}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.GoodsItem,
      { meta: TransportHandlingUnitFieldMeta.GoodsItem,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemDisplay
          key={TransportHandlingUnitField.GoodsItem}
          meta={TransportHandlingUnitFieldMeta.GoodsItem}
          fieldConfig={fieldConfig}
          goodsItem={value?.GoodsItem}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.FloorSpaceMeasurementDimension,
      { meta: TransportHandlingUnitFieldMeta.FloorSpaceMeasurementDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={TransportHandlingUnitField.FloorSpaceMeasurementDimension}
          meta={TransportHandlingUnitFieldMeta.FloorSpaceMeasurementDimension}
          fieldConfig={fieldConfig}
          dimension={value?.FloorSpaceMeasurementDimension}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.PalletSpaceMeasurementDimension,
      { meta: TransportHandlingUnitFieldMeta.PalletSpaceMeasurementDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={TransportHandlingUnitField.PalletSpaceMeasurementDimension}
          meta={TransportHandlingUnitFieldMeta.PalletSpaceMeasurementDimension}
          fieldConfig={fieldConfig}
          dimension={value?.PalletSpaceMeasurementDimension}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.ShipmentDocumentReference,
      { meta: TransportHandlingUnitFieldMeta.ShipmentDocumentReference,
        template: ({value, renderContext, fieldConfig}) => <DocumentReferenceDisplay
          key={TransportHandlingUnitField.ShipmentDocumentReference}
          meta={TransportHandlingUnitFieldMeta.ShipmentDocumentReference}
          fieldConfig={fieldConfig}
          documentReference={value?.ShipmentDocumentReference}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.Status,
      { meta: TransportHandlingUnitFieldMeta.Status,
        template: ({value, renderContext, fieldConfig}) => <StatusDisplay
          key={TransportHandlingUnitField.Status}
          meta={TransportHandlingUnitFieldMeta.Status}
          fieldConfig={fieldConfig}
          status={value?.Status}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.CustomsDeclaration,
      { meta: TransportHandlingUnitFieldMeta.CustomsDeclaration,
        template: ({value, renderContext, fieldConfig}) => <CustomsDeclarationDisplay
          key={TransportHandlingUnitField.CustomsDeclaration}
          meta={TransportHandlingUnitFieldMeta.CustomsDeclaration}
          fieldConfig={fieldConfig}
          customsDeclaration={value?.CustomsDeclaration}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.ReferencedShipment,
      { meta: TransportHandlingUnitFieldMeta.ReferencedShipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={TransportHandlingUnitField.ReferencedShipment}
          meta={TransportHandlingUnitFieldMeta.ReferencedShipment}
          fieldConfig={fieldConfig}
          shipment={value?.ReferencedShipment}
          renderContext={renderContext}
        />}
    ],

    [
      TransportHandlingUnitField.Package,
      { meta: TransportHandlingUnitFieldMeta.Package,
        template: ({value, renderContext, fieldConfig}) => <PackageDisplay
          key={TransportHandlingUnitField.Package}
          meta={TransportHandlingUnitFieldMeta.Package}
          fieldConfig={fieldConfig}
          packageValue={value?.Package}
          renderContext={renderContext}
        />}
    ]
]) 

export function TransportHandlingUnitDisplay<TFieldMeta>({ meta, fieldConfig, transportHandlingUnit, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    TransportHandlingUnitTypeName,
    meta,
    fieldConfig,
    transportHandlingUnit,
    renderContext,
    TransportHandlingUnitSubElementsMap,
  )
}
