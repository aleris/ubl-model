import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
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

type Params<T> = {
  value: Certificate
  meta: FieldMeta<T>
}

export default function CertificateDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={CertificateFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={CertificateFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={CertificateFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateFieldMeta.CertificateTypeCode} 
          value={value.CertificateTypeCode}
          itemDisplay={ (itemValue: Code, key: string | number) =>
            <CodeDisplay key={key} meta={CertificateFieldMeta.CertificateTypeCode} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateFieldMeta.CertificateType} 
          value={value.CertificateType}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CertificateFieldMeta.CertificateType} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateFieldMeta.Remarks} 
          value={value.Remarks}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={CertificateFieldMeta.Remarks} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateFieldMeta.IssuerParty} 
          value={value.IssuerParty}
          itemDisplay={ (itemValue: Party, key: string | number) =>
            <PartyDisplay key={key} meta={CertificateFieldMeta.IssuerParty} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateFieldMeta.DocumentReference} 
          value={value.DocumentReference}
          itemDisplay={ (itemValue: DocumentReference, key: string | number) =>
            <DocumentReferenceDisplay key={key} meta={CertificateFieldMeta.DocumentReference} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={CertificateFieldMeta.Signature} 
          value={value.Signature}
          itemDisplay={ (itemValue: Signature, key: string | number) =>
            <SignatureDisplay key={key} meta={CertificateFieldMeta.Signature} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
