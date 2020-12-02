import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: DeliveryChannel
  meta: FieldMeta<T>
}

export default function DeliveryChannelDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DeliveryChannelFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DeliveryChannelFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryChannelFieldMeta.NetworkID} 
          value={value.NetworkID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DeliveryChannelFieldMeta.NetworkID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryChannelFieldMeta.ParticipantID} 
          value={value.ParticipantID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={DeliveryChannelFieldMeta.ParticipantID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryChannelFieldMeta.TestIndicator} 
          value={value.TestIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay key={key} meta={DeliveryChannelFieldMeta.TestIndicator} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryChannelFieldMeta.DigitalCertificate} 
          value={value.DigitalCertificate}
          itemDisplay={ (itemValue: Certificate, key: string | number) =>
            <CertificateDisplay key={key} meta={DeliveryChannelFieldMeta.DigitalCertificate} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DeliveryChannelFieldMeta.DigitalMessageDelivery} 
          value={value.DigitalMessageDelivery}
          itemDisplay={ (itemValue: MessageDelivery, key: string | number) =>
            <MessageDeliveryDisplay key={key} meta={DeliveryChannelFieldMeta.DigitalMessageDelivery} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
