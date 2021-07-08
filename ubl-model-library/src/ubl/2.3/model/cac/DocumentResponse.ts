import { DocumentReference } from './DocumentReference'
import { LineResponse } from './LineResponse'
import { Party } from './Party'
import { Response } from './Response'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe an application-level response to a document.
 */
export interface DocumentResponse {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A response to the document as a whole.
   * Response
   * Cardinality: 1
   */
  Response: Array<Response>

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
  IssuerParty?: Array<Party> | undefined

  /**
   * The party for which the document is intended.
   * Party
   * Cardinality: 0..1
   */
  RecipientParty?: Array<Party> | undefined

  /**
   * A response to a particular line in the document.
   * Line Response
   * Cardinality: 0..n
   */
  LineResponse?: Array<LineResponse> | undefined
}
