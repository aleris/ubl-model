import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { DocumentResponse } from  '../../model/cac/DocumentResponse'
import { DocumentResponseFieldMeta } from  '../../meta/cac/DocumentResponseMeta'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import LineResponseDisplay from './LineResponseDisplay'
import { LineResponse } from '../../model/cac/LineResponse'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import ResponseDisplay from './ResponseDisplay'
import { Response } from '../../model/cac/Response'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: DocumentResponse | undefined
  meta: FieldMeta<T>
}

export default function DocumentResponseDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-DocumentResponse">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={DocumentResponseFieldMeta.UBLExtensions}
          />

          <ResponseDisplay
            label="Response"
            value={value.Response?.[0]}
            meta={DocumentResponseFieldMeta.Response}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={DocumentResponseFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={DocumentResponseFieldMeta.DocumentReference}
              />
            }
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={DocumentResponseFieldMeta.IssuerParty}
          />

          <PartyDisplay
            label="Recipient Party"
            value={value.RecipientParty?.[0]}
            meta={DocumentResponseFieldMeta.RecipientParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-LineResponse"
            label="Line Response"
            items={value.LineResponse}
            meta={DocumentResponseFieldMeta.LineResponse} 
            itemDisplay={ (itemValue: LineResponse, key: string | number) =>
              <LineResponseDisplay
                key={key}
                label="Line Response"
                value={itemValue}
                meta={DocumentResponseFieldMeta.LineResponse}
              />
            }
          />
        </div>
    </div>
  )
}
