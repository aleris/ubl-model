import { FieldMeta } from '../../FieldMeta'

export enum EncryptionDataField {
  MessageFormat = 'MessageFormat',
  EncryptionCertificateAttachment = 'EncryptionCertificateAttachment',
  EncryptionCertificatePathChain = 'EncryptionCertificatePathChain',
  EncryptionSymmetricAlgorithm = 'EncryptionSymmetricAlgorithm'
}

export const EncryptionDataFieldMetaMessageFormat = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.MessageFormat,
  'MessageFormat',
  'Message Format',
  'Text',
  'The format of the encrypted message.',
  '1',
  undefined,
  undefined
)

export const EncryptionDataFieldMetaEncryptionCertificateAttachment = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.EncryptionCertificateAttachment,
  'EncryptionCertificateAttachment',
  'Attachment',
  'Attachment',
  'A reference to the certificate used in the encryption process.',
  '0..1',
  undefined,
  undefined
)

export const EncryptionDataFieldMetaEncryptionCertificatePathChain = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.EncryptionCertificatePathChain,
  'EncryptionCertificatePathChain',
  'Encryption Certificate Path Chain',
  'EncryptionCertificatePathChain',
  'A reference to the path chain defined for the encryption process.',
  '0..n',
  undefined,
  undefined
)

export const EncryptionDataFieldMetaEncryptionSymmetricAlgorithm = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.EncryptionSymmetricAlgorithm,
  'EncryptionSymmetricAlgorithm',
  'Encryption Symmetric Algorithm',
  'EncryptionSymmetricAlgorithm',
  'A reference to the symmetric algorithm used for the encryption process.',
  '0..n',
  undefined,
  undefined
)

export class EncryptionDataFieldMeta {
  public static readonly MessageFormat = EncryptionDataFieldMetaMessageFormat
  public static readonly EncryptionCertificateAttachment = EncryptionDataFieldMetaEncryptionCertificateAttachment
  public static readonly EncryptionCertificatePathChain = EncryptionDataFieldMetaEncryptionCertificatePathChain
  public static readonly EncryptionSymmetricAlgorithm = EncryptionDataFieldMetaEncryptionSymmetricAlgorithm
}

export const EncryptionDataFieldMap = new Map([
  [EncryptionDataField.MessageFormat, EncryptionDataFieldMetaMessageFormat],
  [EncryptionDataField.EncryptionCertificateAttachment, EncryptionDataFieldMetaEncryptionCertificateAttachment],
  [EncryptionDataField.EncryptionCertificatePathChain, EncryptionDataFieldMetaEncryptionCertificatePathChain],
  [EncryptionDataField.EncryptionSymmetricAlgorithm, EncryptionDataFieldMetaEncryptionSymmetricAlgorithm]
])
