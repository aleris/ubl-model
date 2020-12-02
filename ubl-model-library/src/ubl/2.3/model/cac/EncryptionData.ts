import { Attachment } from './Attachment'
import { EncryptionCertificatePathChain } from './EncryptionCertificatePathChain'
import { EncryptionSymmetricAlgorithm } from './EncryptionSymmetricAlgorithm'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * Details of an encryption process
 */
export interface EncryptionData {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The format of the encrypted message.
   * Text
   * Cardinality: 1
   */
  MessageFormat: Array<Text>

  /**
   * A reference to the certificate used in the encryption process.
   * Attachment
   * Cardinality: 0..1
   */
  EncryptionCertificateAttachment?: Array<Attachment> | undefined

  /**
   * A reference to the path chain defined for the encryption process.
   * Encryption Certificate Path Chain
   * Cardinality: 0..n
   */
  EncryptionCertificatePathChain?: Array<EncryptionCertificatePathChain> | undefined

  /**
   * A reference to the symmetric algorithm used for the encryption process.
   * Encryption Symmetric Algorithm
   * Cardinality: 0..n
   */
  EncryptionSymmetricAlgorithm?: Array<EncryptionSymmetricAlgorithm> | undefined
}
