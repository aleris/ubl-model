import { Amount } from '../cbc/Amount'
import { Clause } from './Clause'
import { Code } from '../cbc/Code'
import { FinancialAccount } from './FinancialAccount'
import { Identifier } from '../cbc/Identifier'
import { Numeric } from '../cbc/Numeric'
import { Party } from './Party'
import { Period } from './Period'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a payment mandate.
 */
export interface PaymentMandate {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this payment mandate.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A code signifying the type of this payment mandate.
   * Code
   * Cardinality: 0..1
   */
  MandateTypeCode?: Array<Code> | undefined

  /**
   * The number of maximum payment instructions allowed within the validity period.
   * Numeric
   * Cardinality: 0..1
   */
  MaximumPaymentInstructionsNumeric?: Array<Numeric> | undefined

  /**
   * The maximum amount to be paid within a single instruction.
   * Amount
   * Cardinality: 0..1
   */
  MaximumPaidAmount?: Array<Amount> | undefined

  /**
   * An identifier for a signature applied by a signatory party.
   * Identifier
   * Cardinality: 0..1
   */
  SignatureID?: Array<Identifier> | undefined

  /**
   * The payer party (if different from the debtor).
   * Party
   * Cardinality: 0..1
   */
  PayerParty?: Array<Party> | undefined

  /**
   * The payer's financial account.
   * Financial Account
   * Cardinality: 0..1
   */
  PayerFinancialAccount?: Array<FinancialAccount> | undefined

  /**
   * The period during which this mandate is valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * The period of the reverse payment.
   * Period
   * Cardinality: 0..1
   */
  PaymentReversalPeriod?: Array<Period> | undefined

  /**
   * A clause applicable to this payment mandate.
   * Clause
   * Cardinality: 0..n
   */
  Clause?: Array<Clause> | undefined
}
