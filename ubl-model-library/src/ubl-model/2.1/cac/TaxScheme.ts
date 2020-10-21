import { Address } from './Address'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'

/**
 * A class to describe a taxation scheme (e.g., VAT, State tax, County tax).
 */
export interface TaxScheme {
  /**
   * An identifier for this taxation scheme.
   * Identifier
   * Cardinality: 0..1
   * Examples: http://www.unece.org/uncefact/codelist/standard/EDIFICASEU_TaxExemptionReason_D09B.xsd
   */
  ID?: [Identifier] | undefined

  /**
   * The name of this taxation scheme.
   * Name
   * Cardinality: 0..1
   * Examples: Value Added Tax , Wholesale Tax , Sales Tax , State Tax
   */
  Name?: [Text] | undefined

  /**
   * A code signifying the type of tax.
   * Code
   * Cardinality: 0..1
   * Examples: Consumption , Sales
   */
  TaxTypeCode?: [Code] | undefined

  /**
   * A code signifying the currency in which the tax is collected and reported.
   * Code
   * Cardinality: 0..1
   */
  CurrencyCode?: [Code] | undefined

  /**
   * A geographic area in which this taxation scheme applies.
   * Address
   * Cardinality: 0..n
   */
  JurisdictionRegionAddress?: Array<Address> | undefined
}
