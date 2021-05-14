import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DeliveryChannel
  meta: FieldMeta<T>
}

export default function DeliveryChannelDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DeliveryChannel ubl-DeliveryChannelType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DeliveryChannel ubl-UBLExtensions"
          meta={DeliveryChannelFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DeliveryChannelFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DeliveryChannel ubl-Identifier ubl-NetworkID"
          meta={DeliveryChannelFieldMeta.NetworkID} 
          value={value.NetworkID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Network Identifier"
              value={itemValue}
              meta={DeliveryChannelFieldMeta.NetworkID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DeliveryChannel ubl-Identifier ubl-ParticipantID"
          meta={DeliveryChannelFieldMeta.ParticipantID} 
          value={value.ParticipantID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Participant Identifier"
              value={itemValue}
              meta={DeliveryChannelFieldMeta.ParticipantID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-DeliveryChannel ubl-Indicator ubl-TestIndicator"
          meta={DeliveryChannelFieldMeta.TestIndicator} 
          value={value.TestIndicator}
          itemDisplay={ (itemValue: Indicator, key: string | number) =>
            <IndicatorDisplay
              key={key}
              label="Test Indicator"
              value={itemValue}
              meta={DeliveryChannelFieldMeta.TestIndicator}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DeliveryChannel ubl-Certificate ubl-DigitalCertificate"
          meta={DeliveryChannelFieldMeta.DigitalCertificate} 
          value={value.DigitalCertificate}
          itemDisplay={ (itemValue: Certificate, key: string | number) =>
            <CertificateDisplay
              key={key}
              label="Digital Certificate"
              value={itemValue}
              meta={DeliveryChannelFieldMeta.DigitalCertificate}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DeliveryChannel ubl-MessageDelivery ubl-DigitalMessageDelivery"
          meta={DeliveryChannelFieldMeta.DigitalMessageDelivery} 
          value={value.DigitalMessageDelivery}
          itemDisplay={ (itemValue: MessageDelivery, key: string | number) =>
            <MessageDeliveryDisplay
              key={key}
              label="Digital Message Delivery"
              value={itemValue}
              meta={DeliveryChannelFieldMeta.DigitalMessageDelivery}
            />
          }
        />
        </div>
    </div>
  )
}
