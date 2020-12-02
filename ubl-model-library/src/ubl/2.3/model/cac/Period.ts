import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Measure } from '../cbc/Measure'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a period of time.
 */
export interface Period {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The date on which this period begins.
   * Date
   * Cardinality: 0..1
   */
  StartDate?: Array<Date> | undefined

  /**
   * The time at which this period begins.
   * Time
   * Cardinality: 0..1
   */
  StartTime?: Array<Time> | undefined

  /**
   * The date on which this period ends.
   * Date
   * Cardinality: 0..1
   */
  EndDate?: Array<Date> | undefined

  /**
   * The time at which this period ends.
   * Time
   * Cardinality: 0..1
   */
  EndTime?: Array<Time> | undefined

  /**
   * The duration of this period, expressed as an ISO 8601 code.
   * Measure
   * Cardinality: 0..1
   */
  DurationMeasure?: Array<Measure> | undefined

  /**
   * A description of this period, expressed as a code.
   * Code
   * Cardinality: 0..n
   */
  DescriptionCode?: Array<Code> | undefined

  /**
   * A description of this period, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined
}
