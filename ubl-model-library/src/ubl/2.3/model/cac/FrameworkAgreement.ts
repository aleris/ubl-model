import { Amount } from '../cbc/Amount'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { TenderRequirement } from './TenderRequirement'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a tendering framework agreement.
 */
export interface FrameworkAgreement {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The number of economic operators expected to participate in this framework agreement.
   * Quantity
   * Cardinality: 0..1
   */
  ExpectedOperatorQuantity?: Array<Quantity> | undefined

  /**
   * The maximum number of economic operators allowed to participate in this framework agreement.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumOperatorQuantity?: Array<Quantity> | undefined

  /**
   * Text describing the justification for this framework agreement.
   * Text
   * Cardinality: 0..n
   */
  Justification?: Array<Text> | undefined

  /**
   * Text describing the frequency with which subsequent contracts will be awarded.
   * Text
   * Cardinality: 0..n
   */
  Frequency?: Array<Text> | undefined

  /**
   * The estimated value which will be spent within a framework agreement over its whole duration, including options and
   * renewals.
   * Amount
   * Cardinality: 0..1
   */
  EstimatedMaximumValueAmount?: Array<Amount> | undefined

  /**
   * The maximum Value which can be spent within a framework agreement over its whole duration, including options and
   * renewals.
   * Amount
   * Cardinality: 0..1
   */
  MaximumValueAmount?: Array<Amount> | undefined

  /**
   * The period during which this framework agreement applies.
   * Period
   * Cardinality: 0..1
   */
  DurationPeriod?: Array<Period> | undefined

  /**
   * A tender requirement intended for consumption by downstream tendering processes derived from the establishment of
   * this framework agreement.
   * Tender Requirement
   * Cardinality: 0..n
   * Examples: Curricula required
   */
  SubsequentProcessTenderRequirement?: Array<TenderRequirement> | undefined
}
