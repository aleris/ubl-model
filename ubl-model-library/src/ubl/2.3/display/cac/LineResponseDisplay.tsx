import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { LineResponse } from  '../../model/cac/LineResponse'
import { LineResponseField, LineResponseFieldMeta, LineResponseTypeName } from  '../../meta/cac/LineResponseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { LineReferenceDisplay } from './LineReferenceDisplay'
import { ResponseDisplay } from './ResponseDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<LineResponse, void>
  lineResponse: LineResponse[] | undefined
  renderContext: RenderContext
}

export const LineResponseSubElementsMap: SubElementsTemplatesMap<LineResponseField, LineResponse, void> = new Map([
    [
      LineResponseField.UBLExtensions,
      { meta: LineResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={LineResponseField.UBLExtensions}
          meta={LineResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      LineResponseField.LineReference,
      { meta: LineResponseFieldMeta.LineReference,
        template: ({value, renderContext, fieldConfig}) => <LineReferenceDisplay
          key={LineResponseField.LineReference}
          meta={LineResponseFieldMeta.LineReference}
          fieldConfig={fieldConfig}
          lineReference={value?.LineReference}
          renderContext={renderContext}
        />}
    ],

    [
      LineResponseField.Response,
      { meta: LineResponseFieldMeta.Response,
        template: ({value, renderContext, fieldConfig}) => <ResponseDisplay
          key={LineResponseField.Response}
          meta={LineResponseFieldMeta.Response}
          fieldConfig={fieldConfig}
          response={value?.Response}
          renderContext={renderContext}
        />}
    ]
]) 

export function LineResponseDisplay<TFieldMeta>({ meta, fieldConfig, lineResponse, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    LineResponseTypeName,
    meta,
    fieldConfig,
    lineResponse,
    renderContext,
    LineResponseSubElementsMap,
  )
}
