import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: MessageDelivery | undefined
  meta: FieldMeta<T>
}

export default function MessageDeliveryDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-MessageDelivery">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={MessageDeliveryFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Protocol Identifier"
            value={value.ProtocolID?.[0]}
            meta={MessageDeliveryFieldMeta.ProtocolID}
          />

          <CodeDisplay
            label="Envelope Type Code"
            value={value.EnvelopeTypeCode?.[0]}
            meta={MessageDeliveryFieldMeta.EnvelopeTypeCode}
          />

          <IdentifierDisplay
            label="Endpoint URI"
            value={value.EndpointURI?.[0]}
            meta={MessageDeliveryFieldMeta.EndpointURI}
          />
        </div>
    </div>
  )
}
