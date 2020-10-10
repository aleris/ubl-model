import { LineReference } from './LineReference'
import { Response } from './Response'

/**
 * A class to describe responses to a line in a document.
 */
export interface LineResponse {
  /**
   * A reference to the line being responded to.
   * Line Reference
   * Cardinality: 1
   */
  LineReference: [LineReference]

  /**
   * A response to the referenced line.
   * Response
   * Cardinality: 1..n
   */
  Response: Array<Response>
}
