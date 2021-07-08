import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { CriterionItem } from  '../../model/cac/CriterionItem'
import { CriterionItemField, CriterionItemFieldMeta, CriterionItemTypeName } from  '../../meta/cac/CriterionItemMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { ItemDisplay } from './ItemDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<CriterionItem, void>
  criterionItem: CriterionItem[] | undefined
  renderContext: RenderContext
}

export const CriterionItemSubElementsMap: SubElementsTemplatesMap<CriterionItemField, CriterionItem, void> = new Map([
    [
      CriterionItemField.UBLExtensions,
      { meta: CriterionItemFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CriterionItemField.UBLExtensions}
          meta={CriterionItemFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CriterionItemField.ID,
      { meta: CriterionItemFieldMeta.ID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={CriterionItemField.ID}
          meta={CriterionItemFieldMeta.ID}
          fieldConfig={fieldConfig}
          identifier={value?.ID}
          renderContext={renderContext}
        />}
    ],

    [
      CriterionItemField.TypeCode,
      { meta: CriterionItemFieldMeta.TypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CriterionItemField.TypeCode}
          meta={CriterionItemFieldMeta.TypeCode}
          fieldConfig={fieldConfig}
          code={value?.TypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      CriterionItemField.CriterionDescription,
      { meta: CriterionItemFieldMeta.CriterionDescription,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CriterionItemField.CriterionDescription}
          meta={CriterionItemFieldMeta.CriterionDescription}
          fieldConfig={fieldConfig}
          text={value?.CriterionDescription}
          renderContext={renderContext}
        />}
    ],

    [
      CriterionItemField.DeclaredPropertyItem,
      { meta: CriterionItemFieldMeta.DeclaredPropertyItem,
        template: ({value, renderContext, fieldConfig}) => <ItemDisplay
          key={CriterionItemField.DeclaredPropertyItem}
          meta={CriterionItemFieldMeta.DeclaredPropertyItem}
          fieldConfig={fieldConfig}
          item={value?.DeclaredPropertyItem}
          renderContext={renderContext}
        />}
    ]
]) 

export function CriterionItemDisplay<TFieldMeta>({ meta, fieldConfig, criterionItem, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CriterionItemTypeName,
    meta,
    fieldConfig,
    criterionItem,
    renderContext,
    CriterionItemSubElementsMap,
  )
}
