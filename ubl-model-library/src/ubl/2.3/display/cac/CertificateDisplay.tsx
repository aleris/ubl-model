import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { Certificate } from  '../../model/cac/Certificate'
import { CertificateFieldMeta } from  '../../meta/cac/CertificateMeta'
import CodeDisplay from '../cbc/CodeDisplay'
import { Code } from '../../model/cbc/Code'
import DocumentReferenceDisplay from './DocumentReferenceDisplay'
import { DocumentReference } from '../../model/cac/DocumentReference'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import PartyDisplay from './PartyDisplay'
import { Party } from '../../model/cac/Party'
import SignatureDisplay from './SignatureDisplay'
import { Signature } from '../../model/cac/Signature'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: Certificate | undefined
  meta: FieldMeta<T>
}

export default function CertificateDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-Certificate">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={CertificateFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={CertificateFieldMeta.ID}
          />

          <CodeDisplay
            label="Certificate Type Code"
            value={value.CertificateTypeCode?.[0]}
            meta={CertificateFieldMeta.CertificateTypeCode}
          />

          <TextDisplay
            label="Certificate Type"
            value={value.CertificateType?.[0]}
            meta={CertificateFieldMeta.CertificateType}
          />

          <ElementListDisplay
            className="ubl-cac ubl-Text ubl-Remarks"
            label="Remarks"
            items={value.Remarks}
            meta={CertificateFieldMeta.Remarks} 
            itemDisplay={ (itemValue: Text, key: string | number) =>
              <TextDisplay
                key={key}
                label="Remarks"
                value={itemValue}
                meta={CertificateFieldMeta.Remarks}
              />
            }
          />

          <PartyDisplay
            label="Issuer Party"
            value={value.IssuerParty?.[0]}
            meta={CertificateFieldMeta.IssuerParty}
          />

          <ElementListDisplay
            className="ubl-cac ubl-DocumentReference"
            label="Document Reference"
            items={value.DocumentReference}
            meta={CertificateFieldMeta.DocumentReference} 
            itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
              <DocumentReferenceDisplay
                key={key}
                label="Document Reference"
                value={itemValue}
                meta={CertificateFieldMeta.DocumentReference}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-Signature"
            label="Signature"
            items={value.Signature}
            meta={CertificateFieldMeta.Signature} 
            itemDisplay={ (itemValue: Signature, key: string | number) =>
              <SignatureDisplay
                key={key}
                label="Signature"
                value={itemValue}
                meta={CertificateFieldMeta.Signature}
              />
            }
          />
        </div>
    </div>
  )
}
