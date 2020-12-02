import { FieldMeta } from '../FieldMeta'

export enum EncryptionCertificatePathChainField {
  UBLExtensions = 'UBLExtensions',
  Value = 'Value',
  URI = 'URI'
}

export const EncryptionCertificatePathChainFieldMetaUBLExtensions = new FieldMeta<EncryptionCertificatePathChainField>(
  EncryptionCertificatePathChainField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EncryptionCertificatePathChainFieldMetaValue = new FieldMeta<EncryptionCertificatePathChainField>(
  EncryptionCertificatePathChainField.Value,
  'Value',
  'Value',
  'Text',
  'The path chain value manifest in the instance.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export const EncryptionCertificatePathChainFieldMetaURI = new FieldMeta<EncryptionCertificatePathChainField>(
  EncryptionCertificatePathChainField.URI,
  'URI',
  'URI',
  'Identifier',
  'The path chain value references external to the instance.',
  '0..1',
  'cbc',
  undefined,
  undefined
)

export class EncryptionCertificatePathChainFieldMeta {
  public static readonly UBLExtensions = EncryptionCertificatePathChainFieldMetaUBLExtensions
  public static readonly Value = EncryptionCertificatePathChainFieldMetaValue
  public static readonly URI = EncryptionCertificatePathChainFieldMetaURI
}

export const EncryptionCertificatePathChainFieldMap = new Map([
  [EncryptionCertificatePathChainField.UBLExtensions, EncryptionCertificatePathChainFieldMetaUBLExtensions],
  [EncryptionCertificatePathChainField.Value, EncryptionCertificatePathChainFieldMetaValue],
  [EncryptionCertificatePathChainField.URI, EncryptionCertificatePathChainFieldMetaURI]
])
