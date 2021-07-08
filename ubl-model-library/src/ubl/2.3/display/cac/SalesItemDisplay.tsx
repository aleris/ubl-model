import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { SalesItem } from  '../../model/cac/SalesItem'
import { SalesItemField, SalesItemFieldMeta, SalesItemTypeName } from  '../../meta/cac/SalesItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { ActivityPropertyDisplay } from './ActivityPropertyDisplay'
import { ItemDisplay } from './ItemDisplay'
import { PriceDisplay } from './PriceDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<SalesItem, void>
  salesItem: SalesItem[] | undefined
  renderContext: RenderContext
}

export const SalesItemSubElementsMap: SubElementsTemplatesMap<SalesItemField, SalesItem, void> = new Map([
    [
      SalesItemField.UBLExtensions,
      { meta: SalesItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={SalesItemField.UBLExtensions}
          meta={SalesItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      SalesItemField.Quantity,
      { meta: SalesItemFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={SalesItemField.Quantity}
          meta={SalesItemFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      SalesItemField.ActivityProperty,
      { meta: SalesItemFieldMeta.ActivityProperty,
        template: ({value, renderContext, fieldConfig}) => <ActivityPropertyDisplay
          key={SalesItemField.ActivityProperty}
          meta={SalesItemFieldMeta.ActivityProperty}
          fieldConfig={fieldConfig}
          activityProperty={value?.ActivityProperty}
          renderContext={renderContext}
        />}
    ],

    [
      SalesItemField.TaxExclusivePrice,
      { meta: SalesItemFieldMeta.TaxExclusivePrice,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={SalesItemField.TaxExclusivePrice}
          meta={SalesItemFieldMeta.TaxExclusivePrice}
          fieldConfig={fieldConfig}
          price={value?.TaxExclusivePrice}
          renderContext={renderContext}
        />}
    ],

    [
      SalesItemField.TaxInclusivePrice,
      { meta: SalesItemFieldMeta.TaxInclusivePrice,
        template: ({value, renderContext, fieldConfig}) => <PriceDisplay
          key={SalesItemField.TaxInclusivePrice}
          meta={SalesItemFieldMeta.TaxInclusivePrice}
          fieldConfig={fieldConfig}
          price={value?.TaxInclusivePrice}
          renderContext={renderContext}
        />}
    ],

    [
      SalesItemField.Item,
      { meta: SalesItemFieldMeta.Item,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={SalesItemField.Item}
          meta={SalesItemFieldMeta.Item}
          fieldConfig={fieldConfig}
          item={value?.Item}
          renderContext={renderContext}
        />}
    ]
]) 

export function SalesItemDisplay<TFieldMeta>({ meta, fieldConfig, salesItem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    SalesItemTypeName,
    meta,
    fieldConfig,
    salesItem,
    renderContext,
    SalesItemSubElementsMap,
  )
}
