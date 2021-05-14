import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: Certificate
  meta: FieldMeta<T>
}

export default function CertificateDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-Certificate ubl-CertificateType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-Certificate ubl-UBLExtensions"
          meta={CertificateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={CertificateFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Certificate ubl-Identifier ubl-ID"
          meta={CertificateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={CertificateFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Certificate ubl-Code ubl-CertificateTypeCode"
          meta={CertificateFieldMeta.CertificateTypeCode} 
          value={value.CertificateTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay
              key={key}
              label="Certificate Type Code"
              value={itemValue}
              meta={CertificateFieldMeta.CertificateTypeCode}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-Certificate ubl-Text ubl-CertificateType"
          meta={CertificateFieldMeta.CertificateType} 
          value={value.CertificateType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Certificate Type"
              value={itemValue}
              meta={CertificateFieldMeta.CertificateType}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cbc ubl-Certificate ubl-Text ubl-Remarks"
          meta={CertificateFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Remarks"
              value={itemValue}
              meta={CertificateFieldMeta.Remarks}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-Certificate ubl-Party ubl-IssuerParty"
          meta={CertificateFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay
              key={key}
              label="Issuer Party"
              value={itemValue}
              meta={CertificateFieldMeta.IssuerParty}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Certificate ubl-DocumentReference"
          meta={CertificateFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay
              key={key}
              label="Document Reference"
              value={itemValue}
              meta={CertificateFieldMeta.DocumentReference}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-Certificate ubl-Signature"
          meta={CertificateFieldMeta.Signature} 
          value={value.Signature}
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
