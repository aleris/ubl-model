import { Amount } from '../cbc/Amount'
import { Clause } from './Clause'
import { Code } from '../cbc/Code'
import { FinancialAccount } from './FinancialAccount'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { Period } from './Period'

/**
 * A class to describe a payment mandate.
 */
export interface PaymentMandate {
  /**
   * An identifier for this payment mandate.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * A code signifying the type of this payment mandate.
   * Code
   * Cardinality: 0..1
   */
  MandateTypeCode?: [Code] | undefined

  /**
   * The number of maximum payment instructions allowed within the validity period.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumPaymentInstructionsNumeric?: [Numeric] | undefined

  /**
   * The maximum amount to be paid within a single instruction.
   * Amount
   * Cardinality: 0..1
   */
  MaximumPaidAmount?: [Amount] | undefined

  /**
   * An identifier for a signature applied by a signatory party.
   * Identifier
   * Cardinality: 0..1
   */
  SignatureID?: [Identifier] | undefined

  /**
   * The payer party (if different from the debtor).
   * Party
   * Cardinality: 0..1
   */
  PayerParty?: [Party] | undefined

  /**
   * The payer's financial account.
   * Financial Account
   * Cardinality: 0..1
   */
  PayerFinancialAccount?: [FinancialAccount] | undefined

  /**
   * The period during which this mandate is valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: [Period] | undefined

  /**
   * The period of the reverse payment.
   * Period
   * Cardinality: 0..1
   */
  PaymentReversalPeriod?: [Period] | undefined

  /**
   * A clause applicable to this payment mandate.
   * Clause
   * Cardinality: 0..n
   */
  Clause?: Array<Clause> | undefined
}
