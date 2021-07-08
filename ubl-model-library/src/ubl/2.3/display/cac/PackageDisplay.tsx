import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Package } from  '../../model/cac/Package'
import { PackageField, PackageFieldMeta, PackageTypeName } from  '../../meta/cac/PackageMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DeliveryDisplay } from './DeliveryDisplay'
import { DeliveryUnitDisplay } from './DeliveryUnitDisplay'
import { DespatchDisplay } from './DespatchDisplay'
import { DimensionDisplay } from './DimensionDisplay'
import { GoodsItemDisplay } from './GoodsItemDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { PickupDisplay } from './PickupDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TransportEquipmentDisplay } from './TransportEquipmentDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Package, void>
  packageValue: Package[] | undefined
  renderContext: RenderContext
}

export const PackageSubElementsMap: SubElementsTemplatesMap<PackageField, Package, void> = new Map([
    [
      PackageField.UBLExtensions,
      { meta: PackageFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PackageField.UBLExtensions}
          meta={PackageFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.ID,
      { meta: PackageFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PackageField.ID}
          meta={PackageFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.Quantity,
      { meta: PackageFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={PackageField.Quantity}
          meta={PackageFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.ReturnableMaterialIndicator,
      { meta: PackageFieldMeta.ReturnableMaterialIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={PackageField.ReturnableMaterialIndicator}
          meta={PackageFieldMeta.ReturnableMaterialIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.ReturnableMaterialIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.PackageLevelCode,
      { meta: PackageFieldMeta.PackageLevelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PackageField.PackageLevelCode}
          meta={PackageFieldMeta.PackageLevelCode}
          fieldConfig={fieldConfig}
          code={value?.PackageLevelCode}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.PackagingTypeCode,
      { meta: PackageFieldMeta.PackagingTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={PackageField.PackagingTypeCode}
          meta={PackageFieldMeta.PackagingTypeCode}
          fieldConfig={fieldConfig}
          code={value?.PackagingTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.PackingMaterial,
      { meta: PackageFieldMeta.PackingMaterial,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={PackageField.PackingMaterial}
          meta={PackageFieldMeta.PackingMaterial}
          fieldConfig={fieldConfig}
          text={value?.PackingMaterial}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.TraceID,
      { meta: PackageFieldMeta.TraceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={PackageField.TraceID}
          meta={PackageFieldMeta.TraceID}
          fieldConfig={fieldConfig}
          identifier={value?.TraceID}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.ContainedPackage,
      { meta: PackageFieldMeta.ContainedPackage,
        template: ({value, renderContext, fieldConfig}) => <PackageDisplay
          key={PackageField.ContainedPackage}
          meta={PackageFieldMeta.ContainedPackage}
          fieldConfig={fieldConfig}
          packageValue={value?.ContainedPackage}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.ContainingTransportEquipment,
      { meta: PackageFieldMeta.ContainingTransportEquipment,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentDisplay
          key={PackageField.ContainingTransportEquipment}
          meta={PackageFieldMeta.ContainingTransportEquipment}
          fieldConfig={fieldConfig}
          transportEquipment={value?.ContainingTransportEquipment}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.GoodsItem,
      { meta: PackageFieldMeta.GoodsItem,
        template: ({value, renderContext, fieldConfig}) => <GoodsItemDisplay
          key={PackageField.GoodsItem}
          meta={PackageFieldMeta.GoodsItem}
          fieldConfig={fieldConfig}
          goodsItem={value?.GoodsItem}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.MeasurementDimension,
      { meta: PackageFieldMeta.MeasurementDimension,
        template: ({value, renderContext, fieldConfig}) => <DimensionDisplay
          key={PackageField.MeasurementDimension}
          meta={PackageFieldMeta.MeasurementDimension}
          fieldConfig={fieldConfig}
          dimension={value?.MeasurementDimension}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.DeliveryUnit,
      { meta: PackageFieldMeta.DeliveryUnit,
        template: ({value, renderContext, fieldConfig}) => <DeliveryUnitDisplay
          key={PackageField.DeliveryUnit}
          meta={PackageFieldMeta.DeliveryUnit}
          fieldConfig={fieldConfig}
          deliveryUnit={value?.DeliveryUnit}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.Delivery,
      { meta: PackageFieldMeta.Delivery,
        template: ({value, renderContext, fieldConfig}) => <DeliveryDisplay
          key={PackageField.Delivery}
          meta={PackageFieldMeta.Delivery}
          fieldConfig={fieldConfig}
          delivery={value?.Delivery}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.Pickup,
      { meta: PackageFieldMeta.Pickup,
        template: ({value, renderContext, fieldConfig}) => <PickupDisplay
          key={PackageField.Pickup}
          meta={PackageFieldMeta.Pickup}
          fieldConfig={fieldConfig}
          pickup={value?.Pickup}
          renderContext={renderContext}
        />}
    ],

    [
      PackageField.Despatch,
      { meta: PackageFieldMeta.Despatch,
        template: ({value, renderContext, fieldConfig}) => <DespatchDisplay
          key={PackageField.Despatch}
          meta={PackageFieldMeta.Despatch}
          fieldConfig={fieldConfig}
          despatch={value?.Despatch}
          renderContext={renderContext}
        />}
    ]
]) 

export function PackageDisplay<TFieldMeta>({ meta, fieldConfig, packageValue, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PackageTypeName,
    meta,
    fieldConfig,
    packageValue,
    renderContext,
    PackageSubElementsMap,
  )
}
