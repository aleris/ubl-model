import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * Details of a certificate path chain used in encryption.
 */
export interface EncryptionCertificatePathChain {
  /**
   * The path chain value manifest in the instance.
   * Text
   * Cardinality: 0..1
   */
  Value: [Text] | undefined

  /**
   * The path chain value references external to the instance.
   * Identifier
   * Cardinality: 0..1
   */
  URI: [Identifier] | undefined
}
