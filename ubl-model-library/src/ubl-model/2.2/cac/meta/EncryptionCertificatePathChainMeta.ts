import { FieldMeta } from '../../FieldMeta'

export enum EncryptionCertificatePathChainField {
  Value = 'Value',
  URI = 'URI'
}

export const EncryptionCertificatePathChainFieldMetaValue = new FieldMeta<EncryptionCertificatePathChainField>(
  EncryptionCertificatePathChainField.Value,
  'Value',
  'Value',
  'Text',
  'The path chain value manifest in the instance.',
  '0..1',
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
  undefined,
  undefined
)

export class EncryptionCertificatePathChainFieldMeta {
  public static readonly Value = EncryptionCertificatePathChainFieldMetaValue
  public static readonly URI = EncryptionCertificatePathChainFieldMetaURI
}

export const EncryptionCertificatePathChainFieldMap = new Map([
  [EncryptionCertificatePathChainField.Value, EncryptionCertificatePathChainFieldMetaValue],
  [EncryptionCertificatePathChainField.URI, EncryptionCertificatePathChainFieldMetaURI]
])
