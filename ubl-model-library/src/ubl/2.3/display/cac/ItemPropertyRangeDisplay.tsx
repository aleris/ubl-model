import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemPropertyRange } from  '../../model/cac/ItemPropertyRange'
import { ItemPropertyRangeField, ItemPropertyRangeFieldMeta, ItemPropertyRangeTypeName } from  '../../meta/cac/ItemPropertyRangeMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemPropertyRange, void>
  itemPropertyRange: ItemPropertyRange[] | undefined
  renderContext: RenderContext
}

export const ItemPropertyRangeSubElementsMap: SubElementsTemplatesMap<ItemPropertyRangeField, ItemPropertyRange, void> = new Map([
    [
      ItemPropertyRangeField.UBLExtensions,
      { meta: ItemPropertyRangeFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemPropertyRangeField.UBLExtensions}
          meta={ItemPropertyRangeFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyRangeField.MinimumValue,
      { meta: ItemPropertyRangeFieldMeta.MinimumValue,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemPropertyRangeField.MinimumValue}
          meta={ItemPropertyRangeFieldMeta.MinimumValue}
          fieldConfig={fieldConfig}
          text={value?.MinimumValue}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyRangeField.MaximumValue,
      { meta: ItemPropertyRangeFieldMeta.MaximumValue,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemPropertyRangeField.MaximumValue}
          meta={ItemPropertyRangeFieldMeta.MaximumValue}
          fieldConfig={fieldConfig}
          text={value?.MaximumValue}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemPropertyRangeDisplay<TFieldMeta>({ meta, fieldConfig, itemPropertyRange, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemPropertyRangeTypeName,
    meta,
    fieldConfig,
    itemPropertyRange,
    renderContext,
    ItemPropertyRangeSubElementsMap,
  )
}
