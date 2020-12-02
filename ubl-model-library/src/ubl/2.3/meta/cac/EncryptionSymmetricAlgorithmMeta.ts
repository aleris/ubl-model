import { FieldMeta } from '../FieldMeta'

export enum EncryptionSymmetricAlgorithmField {
  UBLExtensions = 'UBLExtensions',
  ID = 'ID',
  OID = 'OID'
}

export const EncryptionSymmetricAlgorithmFieldMetaUBLExtensions = new FieldMeta<EncryptionSymmetricAlgorithmField>(
  EncryptionSymmetricAlgorithmField.UBLExtensions,
  'UBLExtensions',
  'undefined',
  'UBLExtensions',
  'A container for extensions foreign to the document.',
  '0..1',
  'ext',
  undefined,
  undefined
)

export const EncryptionSymmetricAlgorithmFieldMetaID = new FieldMeta<EncryptionSymmetricAlgorithmField>(
  EncryptionSymmetricAlgorithmField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'A human-readable identifier the algorithm.',
  '0..1',
  'cbc',
  undefined,
  'AES-256 Rijndael CBC'
)

export const EncryptionSymmetricAlgorithmFieldMetaOID = new FieldMeta<EncryptionSymmetricAlgorithmField>(
  EncryptionSymmetricAlgorithmField.OID,
  'OID',
  'OID',
  'Identifier',
  'The object identifier for the algorithm.',
  '0..1',
  'cbc',
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
