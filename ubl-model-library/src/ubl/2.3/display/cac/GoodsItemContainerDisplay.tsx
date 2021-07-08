import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { GoodsItemContainer } from  '../../model/cac/GoodsItemContainer'
import { GoodsItemContainerField, GoodsItemContainerFieldMeta, GoodsItemContainerTypeName } from  '../../meta/cac/GoodsItemContainerMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TransportEquipmentDisplay } from './TransportEquipmentDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<GoodsItemContainer, void>
  goodsItemContainer: GoodsItemContainer[] | undefined
  renderContext: RenderContext
}

export const GoodsItemContainerSubElementsMap: SubElementsTemplatesMap<GoodsItemContainerField, GoodsItemContainer, void> = new Map([
    [
      GoodsItemContainerField.UBLExtensions,
      { meta: GoodsItemContainerFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={GoodsItemContainerField.UBLExtensions}
          meta={GoodsItemContainerFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemContainerField.ID,
      { meta: GoodsItemContainerFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={GoodsItemContainerField.ID}
          meta={GoodsItemContainerFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemContainerField.Quantity,
      { meta: GoodsItemContainerFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={GoodsItemContainerField.Quantity}
          meta={GoodsItemContainerFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      GoodsItemContainerField.TransportEquipment,
      { meta: GoodsItemContainerFieldMeta.TransportEquipment,
        template: ({value, renderContext, fieldConfig}) => <TransportEquipmentDisplay
          key={GoodsItemContainerField.TransportEquipment}
          meta={GoodsItemContainerFieldMeta.TransportEquipment}
          fieldConfig={fieldConfig}
          transportEquipment={value?.TransportEquipment}
          renderContext={renderContext}
        />}
    ]
]) 

export function GoodsItemContainerDisplay<TFieldMeta>({ meta, fieldConfig, goodsItemContainer, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    GoodsItemContainerTypeName,
    meta,
    fieldConfig,
    goodsItemContainer,
    renderContext,
    GoodsItemContainerSubElementsMap,
  )
}
