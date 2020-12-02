import { Branch } from './Branch'
import { Code } from '../cbc/Code'
import { Country } from './Country'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a financial account.
 */
export interface FinancialAccount {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The identifier for this financial account; the bank account number.
   * Identifier
   * Cardinality: 0..1
   * Examples: SWIFT(BIC) and IBAN are defined in ISO 9362 and ISO 13616.
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of this financial account.
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * An alias for the name of this financial account, to be used in place of the actual account name for security
   * reasons.
   * Name
   * Cardinality: 0..1
   */
  AliasName?: Array<Text> | undefined

  /**
   * A code signifying the type of this financial account.
   * Code
   * Cardinality: 0..1
   */
  AccountTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the format of this financial account.
   * Code
   * Cardinality: 0..1
   * Examples: ISO20022 Clearing System Identification Code
   */
  AccountFormatCode?: Array<Code> | undefined

  /**
   * A code signifying the currency in which this financial account is held.
   * Code
   * Cardinality: 0..1
   */
  CurrencyCode?: Array<Code> | undefined

  /**
   * Free-form text applying to the Payment for the owner of this account.
   * Text
   * Cardinality: 0..n
   */
  PaymentNote?: Array<Text> | undefined

  /**
   * The branch of the financial institution associated with this financial account.
   * Branch
   * Cardinality: 0..1
   */
  FinancialInstitutionBranch?: Array<Branch> | undefined

  /**
   * The country in which the holder of the financial account is domiciled.
   * Country
   * Cardinality: 0..1
   */
  Country?: Array<Country> | undefined
}
