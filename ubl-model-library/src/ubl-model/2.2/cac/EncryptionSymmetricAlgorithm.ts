import { Identifier } from '../cbc/Identifier'

/**
 * Details of a symmetric algorithm used in encryption.
 */
export interface EncryptionSymmetricAlgorithm {
  /**
   * A human-readable identifier the algorithm.
   * Identifier
   * Cardinality: 0..1
   * Examples: AES-256 Rijndael CBC
   */
  ID?: [Identifier] | undefined

  /**
   * The object identifier for the algorithm.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.16.840.1.101.3.4.1.42
   */
  OID?: [Identifier] | undefined
}
