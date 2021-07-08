import { Address } from './Address'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a taxation scheme (e.g., VAT, State tax, County tax).
 */
export interface TaxScheme {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this taxation scheme.
   * Identifier
   * Cardinality: 0..1
   * Examples: http://www.unece.org/uncefact/codelist/standard/EDIFICASEU_TaxExemptionReason_D09B.xsd
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of this taxation scheme.
   * Name
   * Cardinality: 0..1
   * Examples: Value Added Tax , Wholesale Tax , Sales Tax , State Tax
   */
  Name?: Array<Text> | undefined

  /**
   * A code signifying the type of tax.
   * Code
   * Cardinality: 0..1
   * Examples: Consumption , Sales
   */
  TaxTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the currency in which the tax is collected and reported.
   * Code
   * Cardinality: 0..1
   */
  CurrencyCode?: Array<Code> | undefined

  /**
   * A geographic area in which this taxation scheme applies.
   * Address
   * Cardinality: 0..n
   */
  JurisdictionRegionAddress?: Array<Address> | undefined
}
