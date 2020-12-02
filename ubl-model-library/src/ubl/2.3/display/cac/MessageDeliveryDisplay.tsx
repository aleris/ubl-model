import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { MessageDelivery } from  '../../model/cac/MessageDelivery'
import { MessageDeliveryFieldMeta } from  '../../meta/cac/MessageDeliveryMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: MessageDelivery
  meta: FieldMeta<T>
}

export default function MessageDeliveryDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={MessageDeliveryFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={MessageDeliveryFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MessageDeliveryFieldMeta.ProtocolID} 
          value={value.ProtocolID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={MessageDeliveryFieldMeta.ProtocolID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MessageDeliveryFieldMeta.EnvelopeTypeCode} 
          value={value.EnvelopeTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={MessageDeliveryFieldMeta.EnvelopeTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={MessageDeliveryFieldMeta.EndpointURI} 
          value={value.EndpointURI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={MessageDeliveryFieldMeta.EndpointURI} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
