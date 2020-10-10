import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to describe a period of time.
 */
export interface Period {
  /**
   * The date on which this period begins.
   * Date
   * Cardinality: 0..1
   */
  StartDate: [Date] | undefined

  /**
   * The time at which this period begins.
   * Time
   * Cardinality: 0..1
   */
  StartTime: [Time] | undefined

  /**
   * The date on which this period ends.
   * Date
   * Cardinality: 0..1
   */
  EndDate: [Date] | undefined

  /**
   * The time at which this period ends.
   * Time
   * Cardinality: 0..1
   */
  EndTime: [Time] | undefined

  /**
   * The duration of this period, expressed as an ISO 8601 code.
   * Measure
   * Cardinality: 0..1
   */
  DurationMeasure: [Measure] | undefined

  /**
   * A description of this period, expressed as a code.
   * Code
   * Cardinality: 0..n
   */
  DescriptionCode: Array<Code> | undefined

  /**
   * A description of this period, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined
}
