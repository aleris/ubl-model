import React from 'react'
import ElementListDisplay from '../ElementListDisplay'
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

type Props<T> = {
  label: string
  value: EncryptionData | undefined
  meta: FieldMeta<T>
}

export default function EncryptionDataDisplay<T>({ label, value, meta }: Props<T>) {
  if (value === undefined) {
      return null
  }

  return (
    <div className="ubl-cac ubl-EncryptionData">
        <div className="ren-component-title">{label}</div>
        <div className="ren-component-elements">
          <UBLExtensionsDisplay
            label="undefined"
            value={value.UBLExtensions?.[0]}
            meta={EncryptionDataFieldMeta.UBLExtensions}
          />

          <TextDisplay
            label="Message Format"
            value={value.MessageFormat?.[0]}
            meta={EncryptionDataFieldMeta.MessageFormat}
          />

          <AttachmentDisplay
            label="Encryption Certificate Attachment"
            value={value.EncryptionCertificateAttachment?.[0]}
            meta={EncryptionDataFieldMeta.EncryptionCertificateAttachment}
          />

          <ElementListDisplay
            className="ubl-cac ubl-EncryptionCertificatePathChain"
            label="Encryption Certificate Path Chain"
            items={value.EncryptionCertificatePathChain}
            meta={EncryptionDataFieldMeta.EncryptionCertificatePathChain} 
            itemDisplay={ (itemValue: EncryptionCertificatePathChain, key: string | number) =>
              <EncryptionCertificatePathChainDisplay
                key={key}
                label="Encryption Certificate Path Chain"
                value={itemValue}
                meta={EncryptionDataFieldMeta.EncryptionCertificatePathChain}
              />
            }
          />

          <ElementListDisplay
            className="ubl-cac ubl-EncryptionSymmetricAlgorithm"
            label="Encryption Symmetric Algorithm"
            items={value.EncryptionSymmetricAlgorithm}
            meta={EncryptionDataFieldMeta.EncryptionSymmetricAlgorithm} 
            itemDisplay={ (itemValue: EncryptionSymmetricAlgorithm, key: string | number) =>
              <EncryptionSymmetricAlgorithmDisplay
                key={key}
                label="Encryption Symmetric Algorithm"
                value={itemValue}
                meta={EncryptionDataFieldMeta.EncryptionSymmetricAlgorithm}
              />
            }
          />
        </div>
    </div>
  )
}
