import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: DocumentResponse
  meta: FieldMeta<T>
}

export default function DocumentResponseDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-DocumentResponse ubl-DocumentResponseType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-DocumentResponse ubl-UBLExtensions"
          meta={DocumentResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={DocumentResponseFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DocumentResponse ubl-Response"
          meta={DocumentResponseFieldMeta.Response} 
          value={value.Response}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay
              key={key}
              label="Response"
              value={itemValue}
              meta={DocumentResponseFieldMeta.Response}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DocumentResponse ubl-DocumentReference"
          meta={DocumentResponseFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={DocumentResponseFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DocumentResponse ubl-Party ubl-IssuerParty"
          meta={DocumentResponseFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={DocumentResponseFieldMeta.IssuerParty}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-DocumentResponse ubl-Party ubl-RecipientParty"
          meta={DocumentResponseFieldMeta.RecipientParty} 
          value={value.RecipientParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Recipient Party"
              value={itemValue}
              meta={DocumentResponseFieldMeta.RecipientParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-DocumentResponse ubl-LineResponse"
          meta={DocumentResponseFieldMeta.LineResponse} 
          value={value.LineResponse}
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
