import React from 'react'
import AttributeDisplay, { getMetaClassName } from '../AttributeDisplay'
import { FieldMeta } from '../../meta/FieldMeta'
import { EncryptionData } from  '../../model/cac/EncryptionData'
import { EncryptionDataFieldMeta } from  '../../meta/cac/EncryptionDataMeta'
import AttachmentDisplay from './AttachmentDisplay'
import { Attachment } from '../../model/cac/Attachment'
import EncryptionCertificatePathChainDisplay from './EncryptionCertificatePathChainDisplay'
import { EncryptionCertificatePathChain } from '../../model/cac/EncryptionCertificatePathChain'
import EncryptionSymmetricAlgorithmDisplay from './EncryptionSymmetricAlgorithmDisplay'
import { EncryptionSymmetricAlgorithm } from '../../model/cac/EncryptionSymmetricAlgorithm'
import TextDisplay from '../cbc/TextDisplay'
import { Text } from '../../model/cbc/Text'
import UBLExtensionsDisplay from '../ext/UBLExtensionsDisplay'
import { UBLExtensions } from '../../model/ext/UBLExtensions'

type Params<T> = {
  value: EncryptionData
  meta: FieldMeta<T>
}

export default function EncryptionDataDisplay<T>({ value, meta }: Params<T>) {
  return (
    <div className={getMetaClassName(meta)}>
        <div className="title">{meta.label}</div>
        <div className="attributes">
        <AttributeDisplay
          meta={EncryptionDataFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay key={key} meta={EncryptionDataFieldMeta.UBLExtensions} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EncryptionDataFieldMeta.MessageFormat} 
          value={value.MessageFormat}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay key={key} meta={EncryptionDataFieldMeta.MessageFormat} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EncryptionDataFieldMeta.EncryptionCertificateAttachment} 
          value={value.EncryptionCertificateAttachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay key={key} meta={EncryptionDataFieldMeta.EncryptionCertificateAttachment} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EncryptionDataFieldMeta.EncryptionCertificatePathChain} 
          value={value.EncryptionCertificatePathChain}
          itemDisplay={ (itemValue: EncryptionCertificatePathChain, key: string | number) =>
            <EncryptionCertificatePathChainDisplay key={key} meta={EncryptionDataFieldMeta.EncryptionCertificatePathChain} value={itemValue} />
          }
        />

        <AttributeDisplay
          meta={EncryptionDataFieldMeta.EncryptionSymmetricAlgorithm} 
          value={value.EncryptionSymmetricAlgorithm}
          itemDisplay={ (itemValue: EncryptionSymmetricAlgorithm, key: string | number) =>
            <EncryptionSymmetricAlgorithmDisplay key={key} meta={EncryptionDataFieldMeta.EncryptionSymmetricAlgorithm} value={itemValue} />
          }
        />
        </div>
    </div>
  )
}
