import React from 'react'
import { FieldMeta } from '../../meta/FieldMeta'
import { DeliveryChannel } from  '../../model/cac/DeliveryChannel'
import { DeliveryChannelField, DeliveryChannelFieldMeta, DeliveryChannelTypeName } from  '../../meta/cac/DeliveryChannelMeta'
import { RenderContext } from '../RenderContext'
import { FieldConfig } from '../FieldConfig'
import { renderTemplatedTypeElement, SubElementsTemplatesMap } from '../Template'
import { CertificateDisplay } from './CertificateDisplay'
import { IdentifierDisplay } from '../cbc/IdentifierDisplay'
import { IndicatorDisplay } from '../cbc/IndicatorDisplay'
import { MessageDeliveryDisplay } from './MessageDeliveryDisplay'
import { UBLExtensionsDisplay } from '../ext/UBLExtensionsDisplay'

type Props<TFieldMeta> = {
  meta: FieldMeta<TFieldMeta>
  fieldConfig?: FieldConfig<DeliveryChannel, void>
  deliveryChannel: DeliveryChannel[] | undefined
  renderContext: RenderContext
}

export const DeliveryChannelSubElementsMap: SubElementsTemplatesMap<DeliveryChannelField, DeliveryChannel, void> = new Map([
    [
      DeliveryChannelField.UBLExtensions,
      { meta: DeliveryChannelFieldMeta.UBLExtensions,
        template: ({value, renderContext, fieldConfig}) => <UBLExtensionsDisplay
          key={DeliveryChannelField.UBLExtensions}
          meta={DeliveryChannelFieldMeta.UBLExtensions}
          fieldConfig={fieldConfig}
          ublExtensions={value?.UBLExtensions}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryChannelField.NetworkID,
      { meta: DeliveryChannelFieldMeta.NetworkID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DeliveryChannelField.NetworkID}
          meta={DeliveryChannelFieldMeta.NetworkID}
          fieldConfig={fieldConfig}
          identifier={value?.NetworkID}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryChannelField.ParticipantID,
      { meta: DeliveryChannelFieldMeta.ParticipantID,
        template: ({value, renderContext, fieldConfig}) => <IdentifierDisplay
          key={DeliveryChannelField.ParticipantID}
          meta={DeliveryChannelFieldMeta.ParticipantID}
          fieldConfig={fieldConfig}
          identifier={value?.ParticipantID}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryChannelField.TestIndicator,
      { meta: DeliveryChannelFieldMeta.TestIndicator,
        template: ({value, renderContext, fieldConfig}) => <IndicatorDisplay
          key={DeliveryChannelField.TestIndicator}
          meta={DeliveryChannelFieldMeta.TestIndicator}
          fieldConfig={fieldConfig}
          indicator={value?.TestIndicator}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryChannelField.DigitalCertificate,
      { meta: DeliveryChannelFieldMeta.DigitalCertificate,
        template: ({value, renderContext, fieldConfig}) => <CertificateDisplay
          key={DeliveryChannelField.DigitalCertificate}
          meta={DeliveryChannelFieldMeta.DigitalCertificate}
          fieldConfig={fieldConfig}
          certificate={value?.DigitalCertificate}
          renderContext={renderContext}
        />}
    ],

    [
      DeliveryChannelField.DigitalMessageDelivery,
      { meta: DeliveryChannelFieldMeta.DigitalMessageDelivery,
        template: ({value, renderContext, fieldConfig}) => <MessageDeliveryDisplay
          key={DeliveryChannelField.DigitalMessageDelivery}
          meta={DeliveryChannelFieldMeta.DigitalMessageDelivery}
          fieldConfig={fieldConfig}
          messageDelivery={value?.DigitalMessageDelivery}
          renderContext={renderContext}
        />}
    ]
]) 

export function DeliveryChannelDisplay<TFieldMeta>({ meta, fieldConfig, deliveryChannel, renderContext }: Props<TFieldMeta>) {
  return renderTemplatedTypeElement(
    DeliveryChannelTypeName,
    meta,
    fieldConfig,
    deliveryChannel,
    renderContext,
    DeliveryChannelSubElementsMap,
  )
}
