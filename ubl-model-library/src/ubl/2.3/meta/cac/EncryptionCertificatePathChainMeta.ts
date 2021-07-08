import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { TextType } from '../cbc/TextMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EncryptionCertificatePathChainField {
  UBLExtensions = 'UBLExtensions',
  Value = 'Value',
  URI = 'URI'
}

export const EncryptionCertificatePathChainFieldMetaUBLExtensions = new FieldMeta<EncryptionCertificatePathChainField>(
  EncryptionCertificatePathChainField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EncryptionCertificatePathChainFieldMetaValue = new FieldMeta<EncryptionCertificatePathChainField>(
  EncryptionCertificatePathChainField.Value,
  'Value',
  'Value',
  TextType.name,
  'The path chain value manifest in the instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  undefined
)

export const EncryptionCertificatePathChainFieldMetaURI = new FieldMeta<EncryptionCertificatePathChainField>(
  EncryptionCertificatePathChainField.URI,
  'URI',
  'URI',
  IdentifierType.name,
  'The path chain value references external to the instance.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
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

export const EncryptionCertificatePathChainType: Type<EncryptionCertificatePathChainField> = {
  name: 'EncryptionCertificatePathChain',
  label: 'Encryption Certificate Path Chain',
  module: TypeModule.cac,
  definition: 'Details of a certificate path chain used in encryption.',
  fields: EncryptionCertificatePathChainFieldMap,
}
