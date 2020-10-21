import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Legislation } from './Legislation'
import { Numeric } from '../cbc/Numeric'
import { TenderingCriterionPropertyGroup } from './TenderingCriterionPropertyGroup'
import { Text } from '../cbc/Text'

/**
 * A class to describe an item of criterion support for representations of capabilities or the ability to meet tendering
 * requirements, which an economic operator must provide for acceptance into a tendering process.
 */
export interface TenderingCriterion {
  /**
   * An identifier for this item of criterion support.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * A code signifying the type of criterion.
   * Code
   * Cardinality: 0..1
   */
  CriterionTypeCode?: [Code] | undefined

  /**
   * The name of the criterion.
   * Name
   * Cardinality: 0..1
   */
  Name?: [Text] | undefined

  /**
   * The textual description for this criterion.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * A weighting to provide for automatic scoring of the criterion.
   * Numeric
   * Cardinality: 0..1
   */
  WeightNumeric?: [Numeric] | undefined

  /**
   * An indication that this criterion has been fulfilled.
   * Indicator
   * Cardinality: 0..1
   * Examples: TRUE means fulfilled, FALSE means not fulfilled
   */
  FulfilmentIndicator?: [Indicator] | undefined

  /**
   * A code signifying how this criterion has been fulfilled.
   * Code
   * Cardinality: 0..1
   */
  FulfilmentIndicatorTypeCode?: [Code] | undefined

  /**
   * A code signifying the type of Evaluation.
   * Code
   * Cardinality: 0..1
   * Examples: Weight
   */
  EvaluationMethodTypeCode?: [Code] | undefined

  /**
   * The textual description of the Weighting Description
   * Text
   * Cardinality: 0..n
   */
  WeightingConsiderationDescription?: Array<Text> | undefined

  /**
   * One or more tendering subcriteria.
   * Tendering Criterion
   * Cardinality: 0..n
   */
  SubTenderingCriterion?: Array<TenderingCriterion> | undefined

  /**
   * The legislation reference for the criterion.
   * Legislation
   * Cardinality: 0..n
   */
  Legislation?: Array<Legislation> | undefined

  /**
   * The sets of properties that can be used to fulfil the tendering criterion.
   * Tendering Criterion Property Group
   * Cardinality: 1..n
   */
  TenderingCriterionPropertyGroup: Array<TenderingCriterionPropertyGroup>
}
