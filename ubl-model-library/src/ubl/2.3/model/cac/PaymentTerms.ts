import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { ExchangeRate } from './ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Period } from './Period'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a set of payment terms.
 */
export interface PaymentTerms {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this set of payment terms.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

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
  PrepaidPaymentReferenceID?: Array<Identifier> | undefined

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
  ReferenceEventCode?: Array<Code> | undefined

  /**
   * The percentage for the settlement discount that is offered for payment under these payment terms.
   * Percent
   * Cardinality: 0..1
   */
  SettlementDiscountPercent?: Array<Numeric> | undefined

  /**
   * The penalty for payment after the settlement period, expressed as a percentage of the payment.
   * Percent
   * Cardinality: 0..1
   */
  PenaltySurchargePercent?: Array<Numeric> | undefined

  /**
   * The part of a payment, expressed as a percent, relevant for these payment terms.
   * Percent
   * Cardinality: 0..1
   */
  PaymentPercent?: Array<Numeric> | undefined

  /**
   * The monetary amount covered by these payment terms.
   * Amount
   * Cardinality: 0..1
   */
  Amount?: Array<Amount> | undefined

  /**
   * The amount of a settlement discount offered for payment under these payment terms.
   * Amount
   * Cardinality: 0..1
   */
  SettlementDiscountAmount?: Array<Amount> | undefined

  /**
   * The monetary amount of the penalty for payment after the settlement period.
   * Amount
   * Cardinality: 0..1
   */
  PenaltyAmount?: Array<Amount> | undefined

  /**
   * The Uniform Resource Identifier (URI) of a document providing additional details regarding these payment terms.
   * Identifier
   * Cardinality: 0..1
   */
  PaymentTermsDetailsURI?: Array<Identifier> | undefined

  /**
   * The due date for these payment terms.
   * Date
   * Cardinality: 0..1
   */
  PaymentDueDate?: Array<Date> | undefined

  /**
   * The due date for an installment payment for these payment terms.
   * Date
   * Cardinality: 0..1
   */
  InstallmentDueDate?: Array<Date> | undefined

  /**
   * A reference to the payment terms used by the invoicing party. This may have been requested of the payer by the
   * payee to accompany its remittance.
   * Text
   * Cardinality: 0..1
   */
  InvoicingPartyReference?: Array<Text> | undefined

  /**
   * The period during which settlement may occur.
   * Period
   * Cardinality: 0..1
   */
  SettlementPeriod?: Array<Period> | undefined

  /**
   * The period during which penalties may apply.
   * Period
   * Cardinality: 0..1
   */
  PenaltyPeriod?: Array<Period> | undefined

  /**
   * The currency exchange rate for purposes of these payment terms.
   * Exchange Rate
   * Cardinality: 0..1
   */
  ExchangeRate?: Array<ExchangeRate> | undefined

  /**
   * The period during which these payment terms are valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined
}
