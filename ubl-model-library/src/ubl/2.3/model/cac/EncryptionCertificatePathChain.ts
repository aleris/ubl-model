import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * Details of a certificate path chain used in encryption.
 */
export interface EncryptionCertificatePathChain {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The path chain value manifest in the instance.
   * Text
   * Cardinality: 0..1
   */
  Value?: Array<Text> | undefined

  /**
   * The path chain value references external to the instance.
   * Identifier
   * Cardinality: 0..1
   */
  URI?: Array<Identifier> | undefined
}
