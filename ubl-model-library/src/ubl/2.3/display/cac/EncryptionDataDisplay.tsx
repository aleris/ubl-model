import React from 'react'
import AttributeListDisplay from '../AttributeListDisplay'
import AttributeSingleDisplay from '../AttributeSingleDisplay'
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
  value: EncryptionData
  meta: FieldMeta<T>
}

export default function EncryptionDataDisplay<T>({ label, value, meta }: Props<T>) {
  return (
    <div className="ubl-cac ubl-EncryptionData ubl-EncryptionDataType">
        <div className="title">{label}</div>
        <div className="child-attributes">
        <AttributeSingleDisplay
          className="ubl-ext ubl-EncryptionData ubl-UBLExtensions"
          meta={EncryptionDataFieldMeta.UBLExtensions} 
          value={value.UBLExtensions}
          itemDisplay={ (itemValue: UBLExtensions, key: string | number) =>
            <UBLExtensionsDisplay
              key={key}
              label="undefined"
              value={itemValue}
              meta={EncryptionDataFieldMeta.UBLExtensions}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cbc ubl-EncryptionData ubl-Text ubl-MessageFormat"
          meta={EncryptionDataFieldMeta.MessageFormat} 
          value={value.MessageFormat}
          itemDisplay={ (itemValue: Text, key: string | number) =>
            <TextDisplay
              key={key}
              label="Message Format"
              value={itemValue}
              meta={EncryptionDataFieldMeta.MessageFormat}
            />
          }
        />

        <AttributeSingleDisplay
          className="ubl-cac ubl-EncryptionData ubl-Attachment ubl-EncryptionCertificateAttachment"
          meta={EncryptionDataFieldMeta.EncryptionCertificateAttachment} 
          value={value.EncryptionCertificateAttachment}
          itemDisplay={ (itemValue: Attachment, key: string | number) =>
            <AttachmentDisplay
              key={key}
              label="Encryption Certificate Attachment"
              value={itemValue}
              meta={EncryptionDataFieldMeta.EncryptionCertificateAttachment}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EncryptionData ubl-EncryptionCertificatePathChain"
          meta={EncryptionDataFieldMeta.EncryptionCertificatePathChain} 
          value={value.EncryptionCertificatePathChain}
          itemDisplay={ (itemValue: EncryptionCertificatePathChain, key: string | number) =>
            <EncryptionCertificatePathChainDisplay
              key={key}
              label="Encryption Certificate Path Chain"
              value={itemValue}
              meta={EncryptionDataFieldMeta.EncryptionCertificatePathChain}
            />
          }
        />

        <AttributeListDisplay
          className="ubl-cac ubl-EncryptionData ubl-EncryptionSymmetricAlgorithm"
          meta={EncryptionDataFieldMeta.EncryptionSymmetricAlgorithm} 
          value={value.EncryptionSymmetricAlgorithm}
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
