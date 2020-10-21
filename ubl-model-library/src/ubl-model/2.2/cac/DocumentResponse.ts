import { DocumentReference } from './DocumentReference'
import { LineResponse } from './LineResponse'
import { Party } from './Party'
import { Response } from './Response'

/**
 * A class to describe an application-level response to a document.
 */
export interface DocumentResponse {
  /**
   * A response to the document as a whole.
   * Response
   * Cardinality: 1
   */
  Response: [Response]

  /**
   * A referenced document.
   * Document Reference
   * Cardinality: 1..n
   */
  DocumentReference: Array<DocumentReference>

  /**
   * The party that issued the document.
   * Party
   * Cardinality: 0..1
   */
  IssuerParty?: [Party] | undefined

  /**
   * The party for which the document is intended.
   * Party
   * Cardinality: 0..1
   */
  RecipientParty?: [Party] | undefined

  /**
   * A response to a particular line in the document.
   * Line Response
   * Cardinality: 0..n
   */
  LineResponse?: Array<LineResponse> | undefined
}
