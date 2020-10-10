import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Location } from './Location'
import { Text } from '../cbc/Text'

/**
 * A class for describing the terms and conditions applying to the delivery of goods.
 */
export interface DeliveryTerms {
  /**
   * An identifier for this description of delivery terms.
   * Identifier
   * Cardinality: 0..1
   * Examples: CIF, FOB, or EXW from the INCOTERMS Terms of Delivery. (2000 version preferred.)
   */
  ID: [Identifier] | undefined

  /**
   * A description of any terms or conditions relating to the delivery items.
   * Text
   * Cardinality: 0..n
   */
  SpecialTerms: Array<Text> | undefined

  /**
   * A code that identifies one of various responsibilities for loss risk in the execution of the delivery.
   * Code
   * Cardinality: 0..1
   */
  LossRiskResponsibilityCode: [Code] | undefined

  /**
   * A description of responsibility for risk of loss in execution of the delivery, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  LossRisk: Array<Text> | undefined

  /**
   * The monetary amount covered by these delivery terms.
   * Amount
   * Cardinality: 0..1
   */
  Amount: [Amount] | undefined

  /**
   * The location for the contracted delivery.
   * Location
   * Cardinality: 0..1
   */
  DeliveryLocation: [Location] | undefined

  /**
   * An allowance or charge covered by these delivery terms.
   * Allowance Charge
   * Cardinality: 0..1
   */
  AllowanceCharge: [AllowanceCharge] | undefined
}
