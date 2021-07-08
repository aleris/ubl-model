import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { UBLExtensions } from  '../../model/ext/UBLExtensions'
import { UBLExtensionsField, UBLExtensionsFieldMeta, UBLExtensionsTypeName } from  '../../meta/ext/UBLExtensionsMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { UBLExtensionDisplay } from './UBLExtensionDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<UBLExtensions, void>
  ublExtensions: UBLExtensions[] | undefined
  renderContext: RenderContext
}

export const UBLExtensionsSubElementsMap: SubElementsTemplatesMap<UBLExtensionsField, UBLExtensions, void> = new Map([
    [
      UBLExtensionsField.UBLExtension,
      { meta: UBLExtensionsFieldMeta.UBLExtension,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionDisplay
          key={UBLExtensionsField.UBLExtension}
          meta={UBLExtensionsFieldMeta.UBLExtension}
          fieldConfig={fieldConfig}
          ublExtension={value?.UBLExtension}
          renderContext={renderContext}
        />}
    ]
]) 

export function UBLExtensionsDisplay<TFieldMeta>({ meta, fieldConfig, ublExtensions, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    UBLExtensionsTypeName,
    meta,
    fieldConfig,
    ublExtensions,
    renderContext,
    UBLExtensionsSubElementsMap,
  )
}
