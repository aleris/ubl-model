import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EncryptionSymmetricAlgorithm } from  '../../model/cac/EncryptionSymmetricAlgorithm'
import { EncryptionSymmetricAlgorithmFieldMeta } from  '../../meta/cac/EncryptionSymmetricAlgorithmMeta'
import IdentifierDisplay from '../cbc/IdentifierDisplay'
import { Identifier } from '../../model/cbc/Identifier'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EncryptionSymmetricAlgorithm
  meta: FieldMeta<T>
}

export default function EncryptionSymmetricAlgorithmDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EncryptionSymmetricAlgorithmFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EncryptionSymmetricAlgorithmFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EncryptionSymmetricAlgorithmFieldMeta.ID} 
          value={value.ID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EncryptionSymmetricAlgorithmFieldMeta.ID} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EncryptionSymmetricAlgorithmFieldMeta.OID} 
          value={value.OID}
          itemDisplay={ (itemValue: Identifier, key: string | number) =>
            <IdentifierDisplay key={key} meta={EncryptionSymmetricAlgorithmFieldMeta.OID} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
