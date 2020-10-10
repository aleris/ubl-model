import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { TenderRequirement } from './TenderRequirement'
import { Text } from '../cbc/Text'

/**
 * A class to describe a tendering framework agreement.
 */
export interface FrameworkAgreement {
  /**
   * The number of economic operators expected to participate in this framework agreement.
   * Quantity
   * Cardinality: 0..1
   */
  ExpectedOperatorQuantity: [Quantity] | undefined

  /**
   * The maximum number of economic operators allowed to participate in this framework agreement.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumOperatorQuantity: [Quantity] | undefined

  /**
   * Text describing the justification for this framework agreement.
   * Text
   * Cardinality: 0..n
   */
  Justification: Array<Text> | undefined

  /**
   * Text describing the frequency with which subsequent contracts will be awarded.
   * Text
   * Cardinality: 0..n
   */
  Frequency: Array<Text> | undefined

  /**
   * The period during which this framework agreement applies.
   * Period
   * Cardinality: 0..1
   */
  DurationPeriod: [Period] | undefined

  /**
   * A tender requirement intended for consumption by downstream tendering processes derived from the establishment of
   * this framework agreement.
   * Tender Requirement
   * Cardinality: 0..n
   * Examples: Curricula required
   */
  SubsequentProcessTenderRequirement: Array<TenderRequirement> | undefined
}
