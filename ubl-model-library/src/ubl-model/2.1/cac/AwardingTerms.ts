import { AwardingCriterion } from './AwardingCriterion'
import { Code } from '../cbc/Code'
import { Indicator } from '../cbc/Indicator'
import { Person } from './Person'
import { Text } from '../cbc/Text'

/**
 * A class to define the terms for awarding a contract.
 */
export interface AwardingTerms {
  /**
   * A code signifying the weighting algorithm for awarding criteria. When multiple awarding criteria is used, different
   * weighting and choices management algorithms based upon scores and weights of all award criteria can be used. An
   * algorithm for weighting criteria shall be reported in the call for tenders document. It is used to determine how to
   * perform the final management of tenders based on the results in each of the established award criteria
   * Code
   * Cardinality: 0..1
   */
  WeightingAlgorithmCode: [Code] | undefined

  /**
   * Text describing terms under which the contract is to be awarded.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * Text describing the committee of experts evaluating the subjective criteria for awarding the contract.
   * Text
   * Cardinality: 0..n
   */
  TechnicalCommitteeDescription: Array<Text> | undefined

  /**
   * Text describing the exclusion criterion for abnormally low tenders.
   * Text
   * Cardinality: 0..n
   */
  LowTendersDescription: Array<Text> | undefined

  /**
   * Indicates whether a prize will be awarded (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  PrizeIndicator: [Indicator] | undefined

  /**
   * Number and value of the prizes to be awarded.
   * Text
   * Cardinality: 0..n
   */
  PrizeDescription: Array<Text> | undefined

  /**
   * Details of payments to all participants.
   * Text
   * Cardinality: 0..n
   */
  PaymentDescription: Array<Text> | undefined

  /**
   * Indicates if any service contract following the contest will be awarded to the winner or one of the winners of the
   * contest (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  FollowupContractIndicator: [Indicator] | undefined

  /**
   * Indicates if the decision is binding on the buyer (true) or not (false). 
   * Indicator
   * Cardinality: 0..1
   */
  BindingOnBuyerIndicator: [Indicator] | undefined

  /**
   * Defines a criterion for awarding this tender.
   * Awarding Criterion
   * Cardinality: 0..n
   */
  AwardingCriterion: Array<AwardingCriterion> | undefined

  /**
   * A member of a committee of experts evaluating the subjective criteria for awarding the contract.
   * Person
   * Cardinality: 0..n
   */
  TechnicalCommitteePerson: Array<Person> | undefined
}
