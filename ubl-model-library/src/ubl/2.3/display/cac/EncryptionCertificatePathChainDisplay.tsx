import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EncryptionCertificatePathChain } from  '../../model/cac/EncryptionCertificatePathChain'
import { EncryptionCertificatePathChainFieldMeta } from  '../../meta/cac/EncryptionCertificatePathChainMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EncryptionCertificatePathChain
  meta: FieldMeta<T>
}

export default function EncryptionCertificatePathChainDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EncryptionCertificatePathChainFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EncryptionCertificatePathChainFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EncryptionCertificatePathChainFieldMeta.Value} 
          value={value.Value}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EncryptionCertificatePathChainFieldMeta.Value} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EncryptionCertificatePathChainFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EncryptionCertificatePathChainFieldMeta.URI} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
