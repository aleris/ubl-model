import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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
  value: EncryptionCertificatePathChain | undefined
  meta: FieldMeta<T>
}

export default function EncryptionCertificatePathChainDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EncryptionCertificatePathChain">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EncryptionCertificatePathChainFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Value"
            value={value.Value?.[0]}
            meta={EncryptionCertificatePathChainFieldMeta.Value}
          />

          <IdentifierDisplay
            label="URI"
            value={value.URI?.[0]}
            meta={EncryptionCertificatePathChainFieldMeta.URI}
          />
        </div>
    </div>
  )
}
