import { Amount } from '../cbc/Amount'
import { CustomerParty } from './CustomerParty'
import { EvidenceSupplied } from './EvidenceSupplied'
import { Period } from './Period'
import { Text } from '../cbc/Text'

/**
 * A class to describe the completion of a specific task in the tendering process.
 */
export interface CompletedTask {
  /**
   * The average monetary amount of a task such as this completed task.
   * Amount
   * Cardinality: 0..1
   */
  AnnualAverageAmount: [Amount] | undefined

  /**
   * The actual total monetary amount of this completed task.
   * Amount
   * Cardinality: 0..1
   */
  TotalTaskAmount: [Amount] | undefined

  /**
   * A monetary amount corresponding to the financial capacity of the party that carried out this completed task.
   * Amount
   * Cardinality: 0..1
   */
  PartyCapacityAmount: [Amount] | undefined

  /**
   * Text describing this completed task.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * The evidence justifying a designation of "complete" for this task.
   * Evidence Supplied
   * Cardinality: 0..n
   */
  EvidenceSupplied: Array<EvidenceSupplied> | undefined

  /**
   * The period in which this completed task was performed.
   * Period
   * Cardinality: 0..1
   */
  Period: [Period] | undefined

  /**
   * The original customer for this completed task.
   * Customer Party
   * Cardinality: 0..1
   */
  RecipientCustomerParty: [CustomerParty] | undefined
}
