import { Date } from '../cbc/Date'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define comments about a retail event.
 */
export interface EventComment {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Text commenting on the event.
   * Text
   * Cardinality: 1
   */
  Comment: Array<Text>

  /**
   * The date on which this comment was made.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The time at which this comment was made.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined
}
