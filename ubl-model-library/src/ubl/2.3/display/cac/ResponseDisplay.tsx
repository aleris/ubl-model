import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Response } from  '../../model/cac/Response'
import { ResponseField, ResponseFieldMeta, ResponseTypeName } from  '../../meta/cac/ResponseMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { DateDisplay } from '../cbc/DateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { StatusDisplay } from './StatusDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { TimeDisplay } from '../cbc/TimeDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Response, void>
  response: Response[] | undefined
  renderContext: RenderContext
}

export const ResponseSubElementsMap: SubElementsTemplatesMap<ResponseField, Response, void> = new Map([
    [
      ResponseField.UBLExtensions,
      { meta: ResponseFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={ResponseField.UBLExtensions}
          meta={ResponseFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseField.ReferenceID,
      { meta: ResponseFieldMeta.ReferenceID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={ResponseField.ReferenceID}
          meta={ResponseFieldMeta.ReferenceID}
          fieldConfig={fieldConfig}
          identifier={value?.ReferenceID}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseField.ResponseCode,
      { meta: ResponseFieldMeta.ResponseCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={ResponseField.ResponseCode}
          meta={ResponseFieldMeta.ResponseCode}
          fieldConfig={fieldConfig}
          code={value?.ResponseCode}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseField.Description,
      { meta: ResponseFieldMeta.Description,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={ResponseField.Description}
          meta={ResponseFieldMeta.Description}
          fieldConfig={fieldConfig}
          text={value?.Description}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseField.EffectiveDate,
      { meta: ResponseFieldMeta.EffectiveDate,
        template: ({value, renderContext, fieldConfig}) => <DateDisplay
          key={ResponseField.EffectiveDate}
          meta={ResponseFieldMeta.EffectiveDate}
          fieldConfig={fieldConfig}
          date={value?.EffectiveDate}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseField.EffectiveTime,
      { meta: ResponseFieldMeta.EffectiveTime,
        template: ({value, renderContext, fieldConfig}) => <TimeDisplay
          key={ResponseField.EffectiveTime}
          meta={ResponseFieldMeta.EffectiveTime}
          fieldConfig={fieldConfig}
          time={value?.EffectiveTime}
          renderContext={renderContext}
        />}
    ],

    [
      ResponseField.Status,
      { meta: ResponseFieldMeta.Status,
        template: ({value, renderContext, fieldConfig}) => <StatusDisplay
          key={ResponseField.Status}
          meta={ResponseFieldMeta.Status}
          fieldConfig={fieldConfig}
          status={value?.Status}
          renderContext={renderContext}
        />}
    ]
]) 

export function ResponseDisplay<TFieldMeta>({ meta, fieldConfig, response, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    ResponseTypeName,
    meta,
    fieldConfig,
    response,
    renderContext,
    ResponseSubElementsMap,
  )
}
