import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { OrderedShipment } from  '../../model/cac/OrderedShipment'
import { OrderedShipmentField, OrderedShipmentFieldMeta, OrderedShipmentTypeName } from  '../../meta/cac/OrderedShipmentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { PackageDisplay } from './PackageDisplay'
import { ShipmentDisplay } from './ShipmentDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<OrderedShipment, void>
  orderedShipment: OrderedShipment[] | undefined
  renderContext: RenderContext
}

export const OrderedShipmentSubElementsMap: SubElementsTemplatesMap<OrderedShipmentField, OrderedShipment, void> = new Map([
    [
      OrderedShipmentField.UBLExtensions,
      { meta: OrderedShipmentFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={OrderedShipmentField.UBLExtensions}
          meta={OrderedShipmentFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      OrderedShipmentField.Shipment,
      { meta: OrderedShipmentFieldMeta.Shipment,
        template: ({value, renderContext, fieldConfig}) => <ShipmentDisplay
          key={OrderedShipmentField.Shipment}
          meta={OrderedShipmentFieldMeta.Shipment}
          fieldConfig={fieldConfig}
          shipment={value?.Shipment}
          renderContext={renderContext}
        />}
    ],

    [
      OrderedShipmentField.Package,
      { meta: OrderedShipmentFieldMeta.Package,
        template: ({value, renderContext, fieldConfig}) => <PackageDisplay
          key={OrderedShipmentField.Package}
          meta={OrderedShipmentFieldMeta.Package}
          fieldConfig={fieldConfig}
          packageValue={value?.Package}
          renderContext={renderContext}
        />}
    ]
]) 

export function OrderedShipmentDisplay<TFieldMeta>({ meta, fieldConfig, orderedShipment, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    OrderedShipmentTypeName,
    meta,
    fieldConfig,
    orderedShipment,
    renderContext,
    OrderedShipmentSubElementsMap,
  )
}
