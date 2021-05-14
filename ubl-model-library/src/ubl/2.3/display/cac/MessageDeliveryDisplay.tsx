import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MessageDelivery } from  '../../model/cac/MessageDelivery'
import { MessageDeliveryFieldMeta } from  '../../meta/cac/MessageDeliveryMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: MessageDelivery
  meta: FieldMeta<T>
}

export default function MessageDeliveryDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-MessageDelivery ubl-MessageDeliveryType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-MessageDelivery ubl-UBLExtensions"
          meta={MessageDeliveryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={MessageDeliveryFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MessageDelivery ubl-Identifier ubl-ProtocolID"
          meta={MessageDeliveryFieldMeta.ProtocolID} 
          value={value.ProtocolID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Protocol Identifier"
              value={itemValue}
              meta={MessageDeliveryFieldMeta.ProtocolID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MessageDelivery ubl-Code ubl-EnvelopeTypeCode"
          meta={MessageDeliveryFieldMeta.EnvelopeTypeCode} 
          value={value.EnvelopeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Envelope Type Code"
              value={itemValue}
              meta={MessageDeliveryFieldMeta.EnvelopeTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-MessageDelivery ubl-Identifier ubl-EndpointURI"
          meta={MessageDeliveryFieldMeta.EndpointURI} 
          value={value.EndpointURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Endpoint URI"
              value={itemValue}
              meta={MessageDeliveryFieldMeta.EndpointURI}
            />
          }
        />
        </div>
    </div>
  )
}
