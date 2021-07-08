import { BinaryObject } from '../cbc/BinaryObject'
import { ExternalReference } from './ExternalReference'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe an attached document. An attachment can refer to an external document or be included with the
 * document being exchanged.
 */
export interface Attachment {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A binary large object containing an attached document.
   * Binary Object
   * Cardinality: 0..1
   */
  EmbeddedDocumentBinaryObject?: Array<BinaryObject> | undefined

  /**
   * A clear text object containing an attached document.
   * Text
   * Cardinality: 0..1
   */
  EmbeddedDocument?: Array<Text> | undefined

  /**
   * A reference to an attached document that is external to the document(s) being exchanged.
   * External Reference
   * Cardinality: 0..1
   */
  ExternalReference?: Array<ExternalReference> | undefined
}
