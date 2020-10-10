import { Attachment } from './Attachment'
import { EncryptionCertificatePathChain } from './EncryptionCertificatePathChain'
import { EncryptionSymmetricAlgorithm } from './EncryptionSymmetricAlgorithm'
import { Text } from '../cbc/Text'

/**
 * Details of an encryption process
 */
export interface EncryptionData {
  /**
   * The format of the encrypted message.
   * Text
   * Cardinality: 1
   */
  MessageFormat: [Text]

  /**
   * A reference to the certificate used in the encryption process.
   * Attachment
   * Cardinality: 0..1
   */
  EncryptionCertificateAttachment: [Attachment] | undefined

  /**
   * A reference to the path chain defined for the encryption process.
   * Encryption Certificate Path Chain
   * Cardinality: 0..n
   */
  EncryptionCertificatePathChain: Array<EncryptionCertificatePathChain> | undefined

  /**
   * A reference to the symmetric algorithm used for the encryption process.
   * Encryption Symmetric Algorithm
   * Cardinality: 0..n
   */
  EncryptionSymmetricAlgorithm: Array<EncryptionSymmetricAlgorithm> | undefined
}
