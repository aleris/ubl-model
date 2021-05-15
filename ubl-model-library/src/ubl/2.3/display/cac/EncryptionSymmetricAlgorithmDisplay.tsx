import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EncryptionSymmetricAlgorithm } from  '../../model/cac/EncryptionSymmetricAlgorithm'
import { EncryptionSymmetricAlgorithmFieldMeta } from  '../../meta/cac/EncryptionSymmetricAlgorithmMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EncryptionSymmetricAlgorithm | undefined
  meta: FieldMeta<T>
}

export default function EncryptionSymmetricAlgorithmDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EncryptionSymmetricAlgorithm">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EncryptionSymmetricAlgorithmFieldMeta.UBLExtensions}
          />

          <IdentifierDisplay
            label="Identifier"
            value={value.ID?.[0]}
            meta={EncryptionSymmetricAlgorithmFieldMeta.ID}
          />

          <IdentifierDisplay
            label="OID"
            value={value.OID?.[0]}
            meta={EncryptionSymmetricAlgorithmFieldMeta.OID}
          />
        </div>
    </div>
  )
}
