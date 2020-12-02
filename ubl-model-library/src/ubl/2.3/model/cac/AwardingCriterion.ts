import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to define a criterion from the contracting party that will be taken into account when awarding a contract. An
 * awarding criterion can be objective, when it can be evaluated following a formula, or subjective, when human analysis
 * is required.
 */
export interface AwardingCriterion {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Identifies a specific awarding criterion.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A code used to define this awarding criterion.
   * Code
   * Cardinality: 0..1
   */
  AwardingCriterionTypeCode?: Array<Code> | undefined

  /**
   * The name of this awarding criterion.
   * Name
   * Cardinality: 0..n
   */
  Name?: Array<Text> | undefined

  /**
   * A description of the awarding criterion.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A number defining the comparative weighting assigned to this awarding criterion, to enable formulaic evaluation.
   * Numeric
   * Cardinality: 0..1
   */
  WeightNumeric?: Array<Numeric> | undefined

  /**
   * A description of the comparative weighting for this awarding criterion.
   * Text
   * Cardinality: 0..n
   */
  Weight?: Array<Text> | undefined

  /**
   * The mathematical expression that will be used to evaluate this criterion.
   * Text
   * Cardinality: 0..n
   */
  CalculationExpression?: Array<Text> | undefined

  /**
   * A code identifying the mathematical expression that will be used to evaluate this criterion.
   * Code
   * Cardinality: 0..1
   */
  CalculationExpressionCode?: Array<Code> | undefined

  /**
   * The minimum quantity for an awarding criterion.
   * Quantity
   * Cardinality: 0..1
   */
  MinimumQuantity?: Array<Quantity> | undefined

  /**
   * The maximum quantity for an awarding criterion.
   * Quantity
   * Cardinality: 0..1
   */
  MaximumQuantity?: Array<Quantity> | undefined

  /**
   * The minimum monetary amount for an awarding criterion.
   * Amount
   * Cardinality: 0..1
   */
  MinimumAmount?: Array<Amount> | undefined

  /**
   * The maximum monetary amount for an awarding criterion.
   * Amount
   * Cardinality: 0..1
   */
  MaximumAmount?: Array<Amount> | undefined

  /**
   * Describes the minimum improvement bid for this awarding criterion when used in an auction.
   * Text
   * Cardinality: 0..n
   */
  MinimumImprovementBid?: Array<Text> | undefined

  /**
   * Defines any subsidiary awarding criterion.
   * Awarding Criterion
   * Cardinality: 0..n
   */
  SubordinateAwardingCriterion?: Array<AwardingCriterion> | undefined
}
