import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EncryptionCertificatePathChain } from  '../../model/cac/EncryptionCertificatePathChain'
import { EncryptionCertificatePathChainFieldMeta } from  '../../meta/cac/EncryptionCertificatePathChainMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EncryptionCertificatePathChain
  meta: FieldMeta<T>
}

export default function EncryptionCertificatePathChainDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EncryptionCertificatePathChain ubl-EncryptionCertificatePathChainType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EncryptionCertificatePathChain ubl-UBLExtensions"
          meta={EncryptionCertificatePathChainFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EncryptionCertificatePathChainFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EncryptionCertificatePathChain ubl-Text ubl-Value"
          meta={EncryptionCertificatePathChainFieldMeta.Value} 
          value={value.Value}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Value"
              value={itemValue}
              meta={EncryptionCertificatePathChainFieldMeta.Value}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EncryptionCertificatePathChain ubl-Identifier ubl-URI"
          meta={EncryptionCertificatePathChainFieldMeta.URI} 
          value={value.URI}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="URI"
              value={itemValue}
              meta={EncryptionCertificatePathChainFieldMeta.URI}
            />
          }
        />
        </div>
    </div>
  )
}
