import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { AttachmentType } from './AttachmentMeta'
import { EncryptionCertificatePathChainType } from './EncryptionCertificatePathChainMeta'
import { EncryptionSymmetricAlgorithmType } from './EncryptionSymmetricAlgorithmMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

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
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EncryptionDataFieldMetaMessageFormat = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.MessageFormat,
  'MessageFormat',
  'Message Format',
  TextType.name,
  'The format of the encrypted message.',
  FieldCardinality.Uni,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EncryptionDataFieldMetaEncryptionCertificateAttachment = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.EncryptionCertificateAttachment,
  'EncryptionCertificateAttachment',
  'Encryption Certificate Attachment',
  AttachmentType.name,
  'A reference to the certificate used in the encryption process.',
  FieldCardinality.UniOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EncryptionDataFieldMetaEncryptionCertificatePathChain = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.EncryptionCertificatePathChain,
  'EncryptionCertificatePathChain',
  'Encryption Certificate Path Chain',
  EncryptionCertificatePathChainType.name,
  'A reference to the path chain defined for the encryption process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
  undefined,
  undefined
)

export const EncryptionDataFieldMetaEncryptionSymmetricAlgorithm = new FieldMeta<EncryptionDataField>(
  EncryptionDataField.EncryptionSymmetricAlgorithm,
  'EncryptionSymmetricAlgorithm',
  'Encryption Symmetric Algorithm',
  EncryptionSymmetricAlgorithmType.name,
  'A reference to the symmetric algorithm used for the encryption process.',
  FieldCardinality.MultiOptional,
  TypeModule.cac,
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

export const EncryptionDataType: Type<EncryptionDataField> = {
  name: 'EncryptionData',
  label: 'Encryption Data',
  module: TypeModule.cac,
  definition: 'Details of an encryption process',
  fields: EncryptionDataFieldMap,
}
