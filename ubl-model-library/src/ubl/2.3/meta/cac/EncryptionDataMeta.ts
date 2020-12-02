import { FieldMeta } from '../FieldMeta'

export enum EncryptionDataField {
  UBLExtensions = 'UBLExtensions',
  MessageFormat = 'MessageFormat',
  EncryptionCertificateAttachment = 'EncryptionCertificateAttachment',
  EncryptionCertificatePathChain = 'EncryptionCertificatePathChain',
  EncryptionSymmetricAlgorithm = 'EncryptionSymmetricAlgorithm'
}

export const EncryptionDataFieldMetaUBLExtensions = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EncryptionDataFieldMetaMessageFormat = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.MessageFormat,
  'MessageFormat',
  'Message Format',
  'Text',
  'The format of the encrypted message.',
  '1',
  'cbc',
  undefined,
  undefined
)

export const EncryptionDataFieldMetaEncryptionCertificateAttachment = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.EncryptionCertificateAttachment,
  'EncryptionCertificateAttachment',
  'Encryption Certificate Attachment',
  'Attachment',
  'A reference to the certificate used in the encryption process.',
  '0..1',
  'cac',
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
  'cac',
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
  'cac',
  undefined,
  undefined
)

export class EncryptionDataFieldMeta {
  public static readonly UBLExtensions = EncryptionDataFieldMetaUBLExtensions
  public static readonly MessageFormat = EncryptionDataFieldMetaMessageFormat
  public static readonly EncryptionCertificateAttachment = EncryptionDataFieldMetaEncryptionCertificateAttachment
  public static readonly EncryptionCertificatePathChain = EncryptionDataFieldMetaEncryptionCertificatePathChain
  public static readonly EncryptionSymmetricAlgorithm = EncryptionDataFieldMetaEncryptionSymmetricAlgorithm
}

export const EncryptionDataFieldMap = new Map([
  [EncryptionDataField.UBLExtensions, EncryptionDataFieldMetaUBLExtensions],
  [EncryptionDataField.MessageFormat, EncryptionDataFieldMetaMessageFormat],
  [EncryptionDataField.EncryptionCertificateAttachment, EncryptionDataFieldMetaEncryptionCertificateAttachment],
  [EncryptionDataField.EncryptionCertificatePathChain, EncryptionDataFieldMetaEncryptionCertificatePathChain],
  [EncryptionDataField.EncryptionSymmetricAlgorithm, EncryptionDataFieldMetaEncryptionSymmetricAlgorithm]
])
