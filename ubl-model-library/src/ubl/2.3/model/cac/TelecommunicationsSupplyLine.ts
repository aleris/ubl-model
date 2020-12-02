import { AllowanceCharge } from './AllowanceCharge'
import { Amount } from '../cbc/Amount'
import { ExchangeRate } from './ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { TaxTotal } from './TaxTotal'
import { TelecommunicationsService } from './TelecommunicationsService'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class that outlines the telecommunication supply in details
 */
export interface TelecommunicationsSupplyLine {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this telecommunications supply line.
   * Identifier
   * Cardinality: 1
   * Examples: 1
   */
  ID: Array<Identifier>

  /**
   * The phone number used for this telecommunication supply line
   * Text
   * Cardinality: 1
   * Examples: 12345678
   */
  PhoneNumber: Array<Text>

  /**
   * The description of the telecommunication supply line
   * Text
   * Cardinality: 0..n
   * Examples: Additional informations
   */
  Description?: Array<Text> | undefined

  /**
   * An amount specifying the cost of this telecommunication line
   * Amount
   * Cardinality: 0..1
   */
  LineExtensionAmount?: Array<Amount> | undefined

  /**
   * The total amount for this telecommunications supply line, including all allowances, charges and taxes.
   * Amount
   * Cardinality: 0..1
   */
  TaxInclusiveLineExtensionAmount?: Array<Amount> | undefined

  /**
   * Exchanges rates used to calculate the amount for this line.
   * Exchange Rate
   * Cardinality: 0..n
   */
  ExchangeRate?: Array<ExchangeRate> | undefined

  /**
   * An allowance or charge that applies to this telecommunication supply line.
   * Allowance Charge
   * Cardinality: 0..n
   */
  AllowanceCharge?: Array<AllowanceCharge> | undefined

  /**
   * A total amount of taxes of a particular kind applicable to this telecommunications supply line
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * A telecommunications service (e.g., a telephone call).
   * Telecommunications Service
   * Cardinality: 1..n
   */
  TelecommunicationsService: Array<TelecommunicationsService>
}
