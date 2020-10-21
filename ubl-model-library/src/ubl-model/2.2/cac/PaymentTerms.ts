import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { ExchangeRate } from './ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Text } from '../cbc/Text'

/**
 * A class to describe a set of payment terms.
 */
export interface PaymentTerms {
  /**
   * An identifier for this set of payment terms.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * An identifier for a means of payment associated with these payment terms.
   * Identifier
   * Cardinality: 0..n
   */
  PaymentMeansID?: Array<Identifier> | undefined

  /**
   * An identifier for a reference to a prepaid payment.
   * Identifier
   * Cardinality: 0..1
   */
  PrepaidPaymentReferenceID?: [Identifier] | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * A code signifying the event during which these terms are offered.
   * Code
   * Cardinality: 0..1
   */
  ReferenceEventCode?: [Code] | undefined

  /**
   * The percentage for the settlement discount that is offered for payment under these payment terms.
   * Percent
   * Cardinality: 0..1
   */
  SettlementDiscountPercent?: [Numeric] | undefined

  /**
   * The penalty for payment after the settlement period, expressed as a percentage of the payment.
   * Percent
   * Cardinality: 0..1
   */
  PenaltySurchargePercent?: [Numeric] | undefined

  /**
   * The part of a payment, expressed as a percent, relevant for these payment terms.
   * Percent
   * Cardinality: 0..1
   */
  PaymentPercent?: [Numeric] | undefined

  /**
   * The monetary amount covered by these payment terms.
   * Amount
   * Cardinality: 0..1
   */
  Amount?: [Amount] | undefined

  /**
   * The amount of a settlement discount offered for payment under these payment terms.
   * Amount
   * Cardinality: 0..1
   */
  SettlementDiscountAmount?: [Amount] | undefined

  /**
   * The monetary amount of the penalty for payment after the settlement period.
   * Amount
   * Cardinality: 0..1
   */
  PenaltyAmount?: [Amount] | undefined

  /**
   * The Uniform Resource Identifier (URI) of a document providing additional details regarding these payment terms.
   * Identifier
   * Cardinality: 0..1
   */
  PaymentTermsDetailsURI?: [Identifier] | undefined

  /**
   * The due date for these payment terms.
   * Date
   * Cardinality: 0..1
   */
  PaymentDueDate?: [Date] | undefined

  /**
   * The due date for an installment payment for these payment terms.
   * Date
   * Cardinality: 0..1
   */
  InstallmentDueDate?: [Date] | undefined

  /**
   * A reference to the payment terms used by the invoicing party. This may have been requested of the payer by the
   * payee to accompany its remittance.
   * Text
   * Cardinality: 0..1
   */
  InvoicingPartyReference?: [Text] | undefined

  /**
   * The period during which settlement may occur.
   * Period
   * Cardinality: 0..1
   */
  SettlementPeriod?: [Period] | undefined

  /**
   * The period during which penalties may apply.
   * Period
   * Cardinality: 0..1
   */
  PenaltyPeriod?: [Period] | undefined

  /**
   * The currency exchange rate for purposes of these payment terms.
   * Exchange Rate
   * Cardinality: 0..1
   */
  ExchangeRate?: [ExchangeRate] | undefined

  /**
   * The period during which these payment terms are valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: [Period] | undefined
}
