import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DeliveryChannel } from  '../../model/cac/DeliveryChannel'
import { DeliveryChannelFieldMeta } from  '../../meta/cac/DeliveryChannelMeta'
import CertificateDisplay from './CertificateDisplay'
import { Certificate } from '../../model/cac/Certificate'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import IndicatorDisplay from '../cbc/IndicatorDisplay'
import { Indicator } from '../../model/cbc/Indicator'
import MessageDeliveryDisplay from './MessageDeliveryDisplay'
import { MessageDelivery } from '../../model/cac/MessageDelivery'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DeliveryChannel | undefined
  meta: FieldMeta<T>
}

export default function DeliveryChannelDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DeliveryChannel">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DeliveryChannelFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Network Identifier"
            value={value.NetworkID?.[0]}
            meta={DeliveryChannelFieldMeta.NetworkID}
          />

          <IdentifierDisplay
            label="Participant Identifier"
            value={value.ParticipantID?.[0]}
            meta={DeliveryChannelFieldMeta.ParticipantID}
          />

          <IndicatorDisplay
            label="Test Indicator"
            value={value.TestIndicator?.[0]}
            meta={DeliveryChannelFieldMeta.TestIndicator}
          />

          <CertificateDisplay
            label="Digital Certificate"
            value={value.DigitalCertificate?.[0]}
            meta={DeliveryChannelFieldMeta.DigitalCertificate}
          />

          <MessageDeliveryDisplay
            label="Digital Message Delivery"
            value={value.DigitalMessageDelivery?.[0]}
            meta={DeliveryChannelFieldMeta.DigitalMessageDelivery}
          />
        </div>
    </div>
  )
}
