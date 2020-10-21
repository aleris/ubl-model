import { Code } from '../cbc/Code'
import { Condition } from './Condition'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Numeric } from '../cbc/Numeric'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to describe the condition or position of an object.
 */
export interface Status {
  /**
   * Specifies the status condition of the related object.
   * Code
   * Cardinality: 0..1
   */
  ConditionCode?: [Code] | undefined

  /**
   * The reference date for this status.
   * Date
   * Cardinality: 0..1
   */
  ReferenceDate?: [Date] | undefined

  /**
   * The reference time for this status.
   * Time
   * Cardinality: 0..1
   */
  ReferenceTime?: [Time] | undefined

  /**
   * Text describing this status.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * The reason for this status condition or position, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  StatusReasonCode?: [Code] | undefined

  /**
   * The reason for this status condition or position, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  StatusReason?: Array<Text> | undefined

  /**
   * A sequence identifier for this status.
   * Identifier
   * Cardinality: 0..1
   */
  SequenceID?: [Identifier] | undefined

  /**
   * Provides any textual information related to this status.
   * Text
   * Cardinality: 0..n
   */
  Text?: Array<Text> | undefined

  /**
   * Specifies an indicator relevant to a specific status.
   * Indicator
   * Cardinality: 0..1
   */
  IndicationIndicator?: [Indicator] | undefined

  /**
   * A percentage meaningful in the context of this status.
   * Percent
   * Cardinality: 0..1
   */
  Percent?: [Numeric] | undefined

  /**
   * The reliability of this status, expressed as a percentage.
   * Percent
   * Cardinality: 0..1
   */
  ReliabilityPercent?: [Numeric] | undefined

  /**
   * Measurements that quantify the condition of the objects covered by the status.
   * Condition
   * Cardinality: 0..n
   */
  Condition?: Array<Condition> | undefined
}
