import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { Communication } from  '../../model/cac/Communication'
import { CommunicationField, CommunicationFieldMeta, CommunicationTypeName } from  '../../meta/cac/CommunicationMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { TextDisplay } from '../cbc/TextDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<Communication, void>
  communication: Communication[] | undefined
  renderContext: RenderContext
}

export const CommunicationSubElementsMap: SubElementsTemplatesMap<CommunicationField, Communication, void> = new Map([
    [
      CommunicationField.UBLExtensions,
      { meta: CommunicationFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={CommunicationField.UBLExtensions}
          meta={CommunicationFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      CommunicationField.ChannelCode,
      { meta: CommunicationFieldMeta.ChannelCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={CommunicationField.ChannelCode}
          meta={CommunicationFieldMeta.ChannelCode}
          fieldConfig={fieldConfig}
          code={value?.ChannelCode}
          renderContext={renderContext}
        />}
    ],

    [
      CommunicationField.Channel,
      { meta: CommunicationFieldMeta.Channel,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CommunicationField.Channel}
          meta={CommunicationFieldMeta.Channel}
          fieldConfig={fieldConfig}
          text={value?.Channel}
          renderContext={renderContext}
        />}
    ],

    [
      CommunicationField.Value,
      { meta: CommunicationFieldMeta.Value,
        template: ({value, renderContext, fieldConfig}) => <TextDisplay
          key={CommunicationField.Value}
          meta={CommunicationFieldMeta.Value}
          fieldConfig={fieldConfig}
          text={value?.Value}
          renderContext={renderContext}
        />}
    ]
]) 

export function CommunicationDisplay<TFieldMeta>({ meta, fieldConfig, communication, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    CommunicationTypeName,
    meta,
    fieldConfig,
    communication,
    renderContext,
    CommunicationSubElementsMap,
  )
}
