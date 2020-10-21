import { BinaryObject } from '../cbc/BinaryObject'
import { ExternalReference } from './ExternalReference'

/**
 * A class to describe an attached document. An attachment can refer to an external document or be included with the
 * document being exchanged.
 */
export interface Attachment {
  /**
   * A binary large object containing an attached document.
   * Binary Object
   * Cardinality: 0..1
   */
  EmbeddedDocumentBinaryObject?: [BinaryObject] | undefined

  /**
   * A reference to an attached document that is external to the document(s) being exchanged.
   * External Reference
   * Cardinality: 0..1
   */
  ExternalReference?: [ExternalReference] | undefined
}
