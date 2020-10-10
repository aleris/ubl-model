import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'

/**
 * A class to define a criterion from the contracting party that will be taken into account when awarding a contract. An
 * awarding criterion can be objective, when it can be evaluated following a formula, or subjective, when human analysis
 * is required.
 */
export interface AwardingCriterion {
  /**
   * Identifies a specific awarding criterion.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * A code used to define this awarding criterion. 
   * Code
   * Cardinality: 0..1
   */
  AwardingCriterionTypeCode: [Code] | undefined

  /**
   * A description of the awarding criterion.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * A number defining the comparative weighting assigned to this awarding criterion, to enable formulaic evaluation.
   * Numeric
   * Cardinality: 0..1
   */
  WeightNumeric: [Numeric] | undefined

  /**
   * A description of the comparative weighting for this awarding criterion.
   * Text
   * Cardinality: 0..n
   */
  Weight: Array<Text> | undefined

  /**
   * The mathematical expression that will be used to evaluate this criterion.
   * Text
   * Cardinality: 0..n
   */
  CalculationExpression: Array<Text> | undefined

  /**
   * A code identifying the mathematical expression that will be used to evaluate this criterion.
   * Code
   * Cardinality: 0..1
   */
  CalculationExpressionCode: [Code] | undefined

  /**
   * The minimum quantity for an awarding criterion.
   * Quantity
   * Cardinality: 0..1
   */
  MinimumQuantity: [Quantity] | undefined

  /**
   * The maximum quantity for an awarding criterion.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumQuantity: [Quantity] | undefined

  /**
   * The minimum monetary amount for an awarding criterion.
   * Amount
   * Cardinality: 0..1
   */
  MinimumAmount: [Amount] | undefined

  /**
   * The maximum monetary amount for an awarding criterion.
   * Amount
   * Cardinality: 0..1
   */
  MaximumAmount: [Amount] | undefined

  /**
   * Describes the minimum improvement bid for this awarding criterion when used in an auction.
   * Text
   * Cardinality: 0..n
   */
  MinimumImprovementBid: Array<Text> | undefined

  /**
   * Defines any subsidiary awarding criterion.
   * Awarding Criterion
   * Cardinality: 0..n
   */
  SubordinateAwardingCriterion: Array<AwardingCriterion> | undefined
}
