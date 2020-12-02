import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Status } from './Status'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe an application-level response to a document.
 */
export interface Response {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the section (or line) of the document to which this response applies.
   * Identifier
   * Cardinality: 0..1
   */
  ReferenceID?: Array<Identifier> | undefined

  /**
   * A code signifying the type of response.
   * Code
   * Cardinality: 0..1
   */
  ResponseCode?: Array<Code> | undefined

  /**
   * Text describing this response.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The date upon which this response is valid.
   * Date
   * Cardinality: 0..1
   */
  EffectiveDate?: Array<Date> | undefined

  /**
   * The time at which this response is valid.
   * Time
   * Cardinality: 0..1
   */
  EffectiveTime?: Array<Time> | undefined

  /**
   * A status report associated with this response.
   * Status
   * Cardinality: 0..n
   */
  Status?: Array<Status> | undefined
}
