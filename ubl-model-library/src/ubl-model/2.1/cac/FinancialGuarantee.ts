import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Text } from '../cbc/Text'

/**
 * A class to describe the bond guarantee of a tenderer or bid submitter's actual entry into a contract in the event
 * that it is the successful bidder.
 */
export interface FinancialGuarantee {
  /**
   * A code signifying the type of financial guarantee. For instance "Provisional Guarantee" or "Final Guarantee"
   * Code
   * Cardinality: 1
   */
  GuaranteeTypeCode: [Code]

  /**
   * Text describing this financial guarantee.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * The amount of liability in this financial guarantee.
   * Amount
   * Cardinality: 0..1
   */
  LiabilityAmount: [Amount] | undefined

  /**
   * The rate used to calculate the amount of liability in this financial guarantee.
   * Rate
   * Cardinality: 0..1
   */
  AmountRate: [Numeric] | undefined

  /**
   * The period during the tendering process to which this financial guarantee has to be settled.
   * Period
   * Cardinality: 0..1
   */
  ConstitutionPeriod: [Period] | undefined
}
