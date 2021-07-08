import { PaymentTerms } from './PaymentTerms'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A scheduled prepayment (on-account payment) for a estimated utility consumption
 */
export interface OnAccountPayment {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The estimated consumed quantity covered by the payment.
   * Quantity
   * Cardinality: 1
   */
  EstimatedConsumedQuantity: Array<Quantity>

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   * Examples: We make a reservation for price regulations. You will receive you next yearly statement about one year
   * Examples: from today.
   */
  Note?: Array<Text> | undefined

  /**
   * A specification of payment terms associated with this payment.
   * Payment Terms
   * Cardinality: 1..n
   */
  PaymentTerms: Array<PaymentTerms>
}
