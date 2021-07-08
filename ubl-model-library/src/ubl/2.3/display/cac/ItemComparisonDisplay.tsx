import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemComparison } from  '../../model/cac/ItemComparison'
import { ItemComparisonField, ItemComparisonFieldMeta, ItemComparisonTypeName } from  '../../meta/cac/ItemComparisonMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { AmountDisplay } from '../cbc/AmountDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemComparison, void>
  itemComparison: ItemComparison[] | undefined
  renderContext: RenderContext
}

export const ItemComparisonSubElementsMap: SubElementsTemplatesMap<ItemComparisonField, ItemComparison, void> = new Map([
    [
      ItemComparisonField.UBLExtensions,
      { meta: ItemComparisonFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemComparisonField.UBLExtensions}
          meta={ItemComparisonFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemComparisonField.PriceAmount,
      { meta: ItemComparisonFieldMeta.PriceAmount,
        template: ({value, renderContext, fieldConfig}) => <AmountDisplay
          key={ItemComparisonField.PriceAmount}
          meta={ItemComparisonFieldMeta.PriceAmount}
          fieldConfig={fieldConfig}
          amount={value?.PriceAmount}
          renderContext={renderContext}
        />}
    ],

    [
      ItemComparisonField.Quantity,
      { meta: ItemComparisonFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={ItemComparisonField.Quantity}
          meta={ItemComparisonFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemComparisonDisplay<TFieldMeta>({ meta, fieldConfig, itemComparison, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemComparisonTypeName,
    meta,
    fieldConfig,
    itemComparison,
    renderContext,
    ItemComparisonSubElementsMap,
  )
}
