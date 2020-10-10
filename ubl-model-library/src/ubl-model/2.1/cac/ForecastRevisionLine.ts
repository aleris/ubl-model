import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Period } from './Period'
import { SalesItem } from './SalesItem'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to define a line in a Forecast Revision describing a revision to a line in a Forecast.
 */
export interface ForecastRevisionLine {
  /**
   * An identifier for this forecast revision line.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * Text describing the revision to this line.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * An identifier for the revised forecast line.
   * Identifier
   * Cardinality: 1
   */
  RevisedForecastLineID: [Identifier]

  /**
   * The date on which the forecast modified by this revision was generated or created.
   * Date
   * Cardinality: 1
   */
  SourceForecastIssueDate: [Date]

  /**
   * The time at which the forecast modified by this revision was generated or created.
   * Time
   * Cardinality: 1
   */
  SourceForecastIssueTime: [Time]

  /**
   * A code signifying the reason for the adjustment specified in this forecast revision line.
   * Code
   * Cardinality: 0..1
   */
  AdjustmentReasonCode: [Code] | undefined

  /**
   * The period to which this forecast revision line applies.
   * Period
   * Cardinality: 0..1
   */
  ForecastPeriod: [Period] | undefined

  /**
   * Sales information for the item to which this line applies.
   * Sales Item
   * Cardinality: 0..1
   */
  SalesItem: [SalesItem] | undefined
}
