import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Evidence } from './Evidence'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class defining the required criterion for a tenderer to be elligible in a tendering process.
 */
export interface EvaluationCriterion {
  /**
   * A code that specifies the criterion; it may be financial, technical or organizational.
   * Code
   * Cardinality: 0..1
   */
  EvaluationCriterionTypeCode?: [Code] | undefined

  /**
   * A description of the criterion.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Estimated monetary amount of the threshold for the criterion.
   * Amount
   * Cardinality: 0..1
   */
  ThresholdAmount?: [Amount] | undefined

  /**
   * Estimated quantity of the threshold for the criterion.
   * Quantity
   * Cardinality: 0..1
   */
  ThresholdQuantity?: [Quantity] | undefined

  /**
   * A code identifying the expression that will be used to evaluate the criterion.
   * Code
   * Cardinality: 0..1
   */
  ExpressionCode?: [Code] | undefined

  /**
   * The expression that will be used to evaluate the criterion.
   * Text
   * Cardinality: 0..n
   */
  Expression?: Array<Text> | undefined

  /**
   * Describes the period for which the evaluation criterion is valid.
   * Period
   * Cardinality: 0..1
   */
  DurationPeriod?: [Period] | undefined

  /**
   * Describes any evidences that should be used to satisfy the criterion.
   * Evidence
   * Cardinality: 0..n
   */
  SuggestedEvidence?: Array<Evidence> | undefined
}
