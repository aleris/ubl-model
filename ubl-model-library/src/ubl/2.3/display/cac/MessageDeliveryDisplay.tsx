import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { MessageDelivery } from  '../../model/cac/MessageDelivery'
import { MessageDeliveryField, MessageDeliveryFieldMeta, MessageDeliveryTypeName } from  '../../meta/cac/MessageDeliveryMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CodeDisplay } from '../cbc/CodeDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<MessageDelivery, void>
  messageDelivery: MessageDelivery[] | undefined
  renderContext: RenderContext
}

export const MessageDeliverySubElementsMap: SubElementsTemplatesMap<MessageDeliveryField, MessageDelivery, void> = new Map([
    [
      MessageDeliveryField.UBLExtensions,
      { meta: MessageDeliveryFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={MessageDeliveryField.UBLExtensions}
          meta={MessageDeliveryFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      MessageDeliveryField.ProtocolID,
      { meta: MessageDeliveryFieldMeta.ProtocolID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={MessageDeliveryField.ProtocolID}
          meta={MessageDeliveryFieldMeta.ProtocolID}
          fieldConfig={fieldConfig}
          identifier={value?.ProtocolID}
          renderContext={renderContext}
        />}
    ],

    [
      MessageDeliveryField.EnvelopeTypeCode,
      { meta: MessageDeliveryFieldMeta.EnvelopeTypeCode,
        template: ({value, renderContext, fieldConfig}) => <CodeDisplay
          key={MessageDeliveryField.EnvelopeTypeCode}
          meta={MessageDeliveryFieldMeta.EnvelopeTypeCode}
          fieldConfig={fieldConfig}
          code={value?.EnvelopeTypeCode}
          renderContext={renderContext}
        />}
    ],

    [
      MessageDeliveryField.EndpointURI,
      { meta: MessageDeliveryFieldMeta.EndpointURI,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={MessageDeliveryField.EndpointURI}
          meta={MessageDeliveryFieldMeta.EndpointURI}
          fieldConfig={fieldConfig}
          identifier={value?.EndpointURI}
          renderContext={renderContext}
        />}
    ]
]) 

export function MessageDeliveryDisplay<TFieldMeta>({ meta, fieldConfig, messageDelivery, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    MessageDeliveryTypeName,
    meta,
    fieldConfig,
    messageDelivery,
    renderContext,
    MessageDeliverySubElementsMap,
  )
}
