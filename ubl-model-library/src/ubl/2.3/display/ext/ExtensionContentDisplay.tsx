import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { ExtensionContent } from  '../../model/ext/ExtensionContent'
import { ExtensionContentField, ExtensionContentFieldMeta, ExtensionContentTypeName } from  '../../meta/ext/ExtensionContentMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<ExtensionContent, void>
  extensionContent: ExtensionContent[] | undefined
  renderContext: RenderContext
}

export const ExtensionContentSubElementsMap: SubElementsTemplatesMap<ExtensionContentField, ExtensionContent, void> = new Map([

]) 

export function ExtensionContentDisplay<TFieldMeta>({ meta, fieldConfig, extensionContent, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ExtensionContentTypeName,
    meta,
    fieldConfig,
    extensionContent,
    renderContext,
    ExtensionContentSubElementsMap,
  )
}
