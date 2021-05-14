import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EncryptionSymmetricAlgorithm } from  '../../model/cac/EncryptionSymmetricAlgorithm'
import { EncryptionSymmetricAlgorithmFieldMeta } from  '../../meta/cac/EncryptionSymmetricAlgorithmMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Props<T> = {
  label: string
  value: EncryptionSymmetricAlgorithm
  meta: FieldMeta<T>
}

export default function EncryptionSymmetricAlgorithmDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EncryptionSymmetricAlgorithm ubl-EncryptionSymmetricAlgorithmType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EncryptionSymmetricAlgorithm ubl-UBLExtensions"
          meta={EncryptionSymmetricAlgorithmFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EncryptionSymmetricAlgorithmFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EncryptionSymmetricAlgorithm ubl-Identifier ubl-ID"
          meta={EncryptionSymmetricAlgorithmFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="Identifier"
              value={itemValue}
              meta={EncryptionSymmetricAlgorithmFieldMeta.ID}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EncryptionSymmetricAlgorithm ubl-Identifier ubl-OID"
          meta={EncryptionSymmetricAlgorithmFieldMeta.OID} 
          value={value.OID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay
              key={key}
              label="OID"
              value={itemValue}
              meta={EncryptionSymmetricAlgorithmFieldMeta.OID}
            />
          }
        />
        </div>
    </div>
  )
}
