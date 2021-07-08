import { FieldCardinality, FieldMeta } from '../FieldMeta'
import { Type, TypeModule } from '../Type'
import { IdentifierType } from '../cbc/IdentifierMeta'
import { UBLExtensionsType } from '../ext/UBLExtensionsMeta'

export enum EncryptionSymmetricAlgorithmField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  OID = 'OID'
}

export const EncryptionSymmetricAlgorithmFieldMetaUBLExtensions = new FieldMeta<EncryptionSymmetricAlgorithmField>(
  EncryptionSymmetricAlgorithmField.UBLExtensions,
  'UBLExtensions',
  'UBLExtensions',
  UBLExtensionsType.name,
  'A container for extensions foreign to the document.',
  FieldCardinality.UniOptional,
  TypeModule.ext,
  undefined,
  undefined
)

export const EncryptionSymmetricAlgorithmFieldMetaID = new FieldMeta<EncryptionSymmetricAlgorithmField>(
  EncryptionSymmetricAlgorithmField.ID,
  'ID',
  'Identifier',
  IdentifierType.name,
  'A human-readable identifier the algorithm.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  'AES-256 Rijndael CBC'
)

export const EncryptionSymmetricAlgorithmFieldMetaOID = new FieldMeta<EncryptionSymmetricAlgorithmField>(
  EncryptionSymmetricAlgorithmField.OID,
  'OID',
  'OID',
  IdentifierType.name,
  'The object identifier for the algorithm.',
  FieldCardinality.UniOptional,
  TypeModule.cbc,
  undefined,
  '2.16.840.1.101.3.4.1.42'
)

export class EncryptionSymmetricAlgorithmFieldMeta {
  public static readonly UBLExtensions = EncryptionSymmetricAlgorithmFieldMetaUBLExtensions
  public static readonly ID = EncryptionSymmetricAlgorithmFieldMetaID
  public static readonly OID = EncryptionSymmetricAlgorithmFieldMetaOID
}

export const EncryptionSymmetricAlgorithmFieldMap = new Map([
  [EncryptionSymmetricAlgorithmField.UBLExtensions, EncryptionSymmetricAlgorithmFieldMetaUBLExtensions],
  [EncryptionSymmetricAlgorithmField.ID, EncryptionSymmetricAlgorithmFieldMetaID],
  [EncryptionSymmetricAlgorithmField.OID, EncryptionSymmetricAlgorithmFieldMetaOID]
])

export const EncryptionSymmetricAlgorithmType: Type<EncryptionSymmetricAlgorithmField> = {
  name: 'EncryptionSymmetricAlgorithm',
  label: 'Encryption Symmetric Algorithm',
  module: TypeModule.cac,
  definition: 'Details of a symmetric algorithm used in encryption.',
  fields: EncryptionSymmetricAlgorithmFieldMap,
}
