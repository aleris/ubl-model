import { Date } from '../cbc/Date'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to define comments about a retail event.
 */
export interface EventComment {
  /**
   * Text commenting on the event.
   * Text
   * Cardinality: 1
   */
  Comment: [Text]

  /**
   * The date on which this comment was made.
   * Date
   * Cardinality: 0..1
   */
  IssueDate: [Date] | undefined

  /**
   * The time at which this comment was made.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined
}
