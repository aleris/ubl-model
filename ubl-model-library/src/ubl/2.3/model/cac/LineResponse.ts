import { LineReference } from './LineReference'
import { Response } from './Response'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe responses to a line in a document.
 */
export interface LineResponse {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A reference to the line being responded to.
   * Line Reference
   * Cardinality: 1
   */
  LineReference: Array<LineReference>

  /**
   * A response to the referenced line.
   * Response
   * Cardinality: 1..n
   */
  Response: Array<Response>
}
