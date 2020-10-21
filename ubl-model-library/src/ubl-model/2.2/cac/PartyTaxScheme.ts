import { Address } from './Address'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { TaxScheme } from './TaxScheme'
import { Text } from '../cbc/Text'

/**
 * A class to describe a taxation scheme applying to a party.
 */
export interface PartyTaxScheme {
  /**
   * The name of the party as registered with the relevant fiscal authority.
   * Name
   * Cardinality: 0..1
   * Examples: Microsoft Corporation
   */
  RegistrationName?: [Text] | undefined

  /**
   * An identifier for the party assigned for tax purposes by the taxation authority.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: VAT Number
   * Examples: 3556625
   */
  CompanyID?: [Identifier] | undefined

  /**
   * A code signifying the tax level applicable to the party within this taxation scheme.
   * Code
   * Cardinality: 0..1
   */
  TaxLevelCode?: [Code] | undefined

  /**
   * A reason for the party's exemption from tax, expressed as a code.
   * Code
   * Cardinality: 0..1
   */
  ExemptionReasonCode?: [Code] | undefined

  /**
   * A reason for the party's exemption from tax, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  ExemptionReason?: Array<Text> | undefined

  /**
   * The address of the party as registered for tax purposes.
   * Address
   * Cardinality: 0..1
   */
  RegistrationAddress?: [Address] | undefined

  /**
   * The taxation scheme applicable to the party.
   * Tax Scheme
   * Cardinality: 1
   */
  TaxScheme: [TaxScheme]
}
