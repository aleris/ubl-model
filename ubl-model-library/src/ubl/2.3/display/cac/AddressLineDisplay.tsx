import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { AddressLine } from  '../../model/cac/AddressLine'
import { AddressLineField, AddressLineFieldMeta, AddressLineTypeName } from  '../../meta/cac/AddressLineMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<AddressLine, void>
  addressLine: AddressLine[] | undefined
  renderContext: RenderContext
}

export const AddressLineSubElementsMap: SubElementsTemplatesMap<AddressLineField, AddressLine, void> = new Map([
    [
      AddressLineField.UBLExtensions,
      { meta: AddressLineFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={AddressLineField.UBLExtensions}
          meta={AddressLineFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      AddressLineField.Line,
      { meta: AddressLineFieldMeta.Line,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={AddressLineField.Line}
          meta={AddressLineFieldMeta.Line}
          fieldConfig={fieldConfig}
          text={value?.Line}
          renderContext={renderContext}
        />}
    ]
]) 

export function AddressLineDisplay<TFieldMeta>({ meta, fieldConfig, addressLine, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    AddressLineTypeName,
    meta,
    fieldConfig,
    addressLine,
    renderContext,
    AddressLineSubElementsMap,
  )
}
