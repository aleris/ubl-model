import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ItemPropertyGroup } from  '../../model/cac/ItemPropertyGroup'
import { ItemPropertyGroupField, ItemPropertyGroupFieldMeta, ItemPropertyGroupTypeName } from  '../../meta/cac/ItemPropertyGroupMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ItemPropertyGroup, void>
  itemPropertyGroup: ItemPropertyGroup[] | undefined
  renderContext: RenderContext
}

export const ItemPropertyGroupSubElementsMap: SubElementsTemplatesMap<ItemPropertyGroupField, ItemPropertyGroup, void> = new Map([
    [
      ItemPropertyGroupField.UBLExtensions,
      { meta: ItemPropertyGroupFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ItemPropertyGroupField.UBLExtensions}
          meta={ItemPropertyGroupFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyGroupField.ID,
      { meta: ItemPropertyGroupFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ItemPropertyGroupField.ID}
          meta={ItemPropertyGroupFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyGroupField.Name,
      { meta: ItemPropertyGroupFieldMeta.Name,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ItemPropertyGroupField.Name}
          meta={ItemPropertyGroupFieldMeta.Name}
          fieldConfig={fieldConfig}
          text={value?.Name}
          renderContext={renderContext}
        />}
    ],

    [
      ItemPropertyGroupField.ImportanceCode,
      { meta: ItemPropertyGroupFieldMeta.ImportanceCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ItemPropertyGroupField.ImportanceCode}
          meta={ItemPropertyGroupFieldMeta.ImportanceCode}
          fieldConfig={fieldConfig}
          code={value?.ImportanceCode}
          renderContext={renderContext}
        />}
    ]
]) 

export function ItemPropertyGroupDisplay<TFieldMeta>({ meta, fieldConfig, itemPropertyGroup, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ItemPropertyGroupTypeName,
    meta,
    fieldConfig,
    itemPropertyGroup,
    renderContext,
    ItemPropertyGroupSubElementsMap,
  )
}
