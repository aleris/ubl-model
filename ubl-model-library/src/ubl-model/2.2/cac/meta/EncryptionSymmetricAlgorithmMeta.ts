import { FieldMeta } from '../../FieldMeta'

export enum EncryptionSymmetricAlgorithmField {
  ID = 'ID',
  OID = 'OID'
}

export const EncryptionSymmetricAlgorithmFieldMetaID = new FieldMeta<EncryptionSymmetricAlgorithmField>(
  EncryptionSymmetricAlgorithmField.ID,
  'ID',
  'Identifier',
  'Identifier',
  'A human-readable identifier the algorithm.',
  '0..1',
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
  undefined,
  '2.16.840.1.101.3.4.1.42'
)

export class EncryptionSymmetricAlgorithmFieldMeta {
  public static readonly ID = EncryptionSymmetricAlgorithmFieldMetaID
  public static readonly OID = EncryptionSymmetricAlgorithmFieldMetaOID
}

export const EncryptionSymmetricAlgorithmFieldMap = new Map([
  [EncryptionSymmetricAlgorithmField.ID, EncryptionSymmetricAlgorithmFieldMetaID],
  [EncryptionSymmetricAlgorithmField.OID, EncryptionSymmetricAlgorithmFieldMetaOID]
])
