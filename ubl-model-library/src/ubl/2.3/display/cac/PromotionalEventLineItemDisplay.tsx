import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { PromotionalEventLineItem } from  '../../model/cac/PromotionalEventLineItem'
import { PromotionalEventLineItemField, PromotionalEventLineItemFieldMeta, PromotionalEventLineItemTypeName } from  '../../meta/cac/PromotionalEventLineItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { EventLineItemDisplay } from './EventLineItemDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<PromotionalEventLineItem, void>
  promotionalEventLineItem: PromotionalEventLineItem[] | undefined
  renderContext: RenderContext
}

export const PromotionalEventLineItemSubElementsMap: SubElementsTemplatesMap<PromotionalEventLineItemField, PromotionalEventLineItem, void> = new Map([
    [
      PromotionalEventLineItemField.UBLExtensions,
      { meta: PromotionalEventLineItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={PromotionalEventLineItemField.UBLExtensions}
          meta={PromotionalEventLineItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalEventLineItemField.Amount,
      { meta: PromotionalEventLineItemFieldMeta.Amount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={PromotionalEventLineItemField.Amount}
          meta={PromotionalEventLineItemFieldMeta.Amount}
          fieldConfig={fieldConfig}
          amount={value?.Amount}
          renderContext={renderContext}
        />}
    ],

    [
      PromotionalEventLineItemField.EventLineItem,
      { meta: PromotionalEventLineItemFieldMeta.EventLineItem,
        template: ({value, renderContext, fieldConfig}) => <EventLineItemDisplay
          key={PromotionalEventLineItemField.EventLineItem}
          meta={PromotionalEventLineItemFieldMeta.EventLineItem}
          fieldConfig={fieldConfig}
          eventLineItem={value?.EventLineItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function PromotionalEventLineItemDisplay<TFieldMeta>({ meta, fieldConfig, promotionalEventLineItem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    PromotionalEventLineItemTypeName,
    meta,
    fieldConfig,
    promotionalEventLineItem,
    renderContext,
    PromotionalEventLineItemSubElementsMap,
  )
}
