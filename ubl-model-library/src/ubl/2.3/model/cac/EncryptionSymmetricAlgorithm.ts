import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * Details of a symmetric algorithm used in encryption.
 */
export interface EncryptionSymmetricAlgorithm {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A human-readable identifier the algorithm.
   * Identifier
   * Cardinality: 0..1
   * Examples: AES-256 Rijndael CBC
   */
  ID?: Array<Identifier> | undefined

  /**
   * The object identifier for the algorithm.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.16.840.1.101.3.4.1.42
   */
  OID?: Array<Identifier> | undefined
}
