import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: DocumentResponse
  meta: FieldMeta<T>
}

export default function DocumentResponseDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={DocumentResponseFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={DocumentResponseFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentResponseFieldMeta.Response} 
          value={value.Response}
          itemDisplay={ (itemValue: Response, key: string | number) =>
            <ResponseDisplay key={key} meta={DocumentResponseFieldMeta.Response} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentResponseFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={DocumentResponseFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentResponseFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DocumentResponseFieldMeta.IssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentResponseFieldMeta.RecipientParty} 
          value={value.RecipientParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={DocumentResponseFieldMeta.RecipientParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={DocumentResponseFieldMeta.LineResponse} 
          value={value.LineResponse}
          itemDisplay={ (itemValue: LineResponse, key: string | number) =>
            <LineResponseDisplay key={key} meta={DocumentResponseFieldMeta.LineResponse} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
