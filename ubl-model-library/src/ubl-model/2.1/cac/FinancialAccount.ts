import { Branch } from './Branch'
import { Code } from '../cbc/Code'
import { Country } from './Country'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a financial account.
 */
export interface FinancialAccount {
  /**
   * The identifier for this financial account; the bank account number.
   * Identifier
   * Cardinality: 0..1
   * Examples: SWIFT(BIC) and IBAN are defined in ISO 9362 and ISO 13616.
   */
  ID: [Identifier] | undefined

  /**
   * The name of this financial account.
   * Name
   * Cardinality: 0..1
   */
  Name: [Text] | undefined

  /**
   * An alias for the name of this financial account, to be used in place of the actual account name for security
   * reasons.
   * Name
   * Cardinality: 0..1
   */
  AliasName: [Text] | undefined

  /**
   * A code signifying the type of this financial account.
   * Code
   * Cardinality: 0..1
   */
  AccountTypeCode: [Code] | undefined

  /**
   * A code signifying the format of this financial account.
   * Code
   * Cardinality: 0..1
   * Examples: ISO20022 Clearing System Identification Code
   */
  AccountFormatCode: [Code] | undefined

  /**
   * A code signifying the currency in which this financial account is held.
   * Code
   * Cardinality: 0..1
   */
  CurrencyCode: [Code] | undefined

  /**
   * Free-form text applying to the Payment for the owner of this account.
   * Text
   * Cardinality: 0..n
   */
  PaymentNote: Array<Text> | undefined

  /**
   * The branch of the financial institution associated with this financial account.
   * Branch
   * Cardinality: 0..1
   */
  FinancialInstitutionBranch: [Branch] | undefined

  /**
   * The country in which the holder of the financial account is domiciled.
   * Country
   * Cardinality: 0..1
   */
  Country: [Country] | undefined
}
