import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { RelatedItem } from  '../../model/cac/RelatedItem'
import { RelatedItemField, RelatedItemFieldMeta, RelatedItemTypeName } from  '../../meta/cac/RelatedItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { QuantityDisplay } from '../cbc/QuantityDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<RelatedItem, void>
  relatedItem: RelatedItem[] | undefined
  renderContext: RenderContext
}

export const RelatedItemSubElementsMap: SubElementsTemplatesMap<RelatedItemField, RelatedItem, void> = new Map([
    [
      RelatedItemField.UBLExtensions,
      { meta: RelatedItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={RelatedItemField.UBLExtensions}
          meta={RelatedItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      RelatedItemField.ID,
      { meta: RelatedItemFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={RelatedItemField.ID}
          meta={RelatedItemFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      RelatedItemField.Quantity,
      { meta: RelatedItemFieldMeta.Quantity,
        template: ({value, renderContext, fieldConfig}) => <QuantityDisplay
          key={RelatedItemField.Quantity}
          meta={RelatedItemFieldMeta.Quantity}
          fieldConfig={fieldConfig}
          quantity={value?.Quantity}
          renderContext={renderContext}
        />}
    ],

    [
      RelatedItemField.Description,
      { meta: RelatedItemFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={RelatedItemField.Description}
          meta={RelatedItemFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ]
]) 

export function RelatedItemDisplay<TFieldMeta>({ meta, fieldConfig, relatedItem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    RelatedItemTypeName,
    meta,
    fieldConfig,
    relatedItem,
    renderContext,
    RelatedItemSubElementsMap,
  )
}
