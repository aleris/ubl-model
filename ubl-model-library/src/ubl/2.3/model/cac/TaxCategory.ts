import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Measure } from '../cbc/Measure'
import { Numeric } from '../cbc/Numeric'
import { TaxScheme } from './TaxScheme'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe one of the tax categories within a taxation scheme (e.g., High Rate VAT, Low Rate VAT).
 */
export interface TaxCategory {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this tax category.
   * Identifier
   * Cardinality: 0..1
   * Examples: http://www.unece.org/uncefact/codelist/standard/UNECE_DutyorTaxorFeeCategoryCode_D09B.xsd
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of this tax category.
   * Name
   * Cardinality: 0..1
   * Examples: Luxury Goods , Wine Equalization , Exempt
   */
  Name?: Array<Text> | undefined

  /**
   * The tax rate for this category, expressed as a percentage.
   * Percent
   * Cardinality: 0..1
   */
  Percent?: Array<Numeric> | undefined

  /**
   * A Unit of Measures used as the basic for the tax calculation applied at a certain rate per unit.
   * Measure
   * Cardinality: 0..1
   */
  BaseUnitMeasure?: Array<Measure> | undefined

  /**
   * Where a tax is applied at a certain rate per unit, the rate per unit applied.
   * Amount
   * Cardinality: 0..1
   */
  PerUnitAmount?: Array<Amount> | undefined

  /**
   * The reason for tax being exempted, expressed as a code.
   * Code
   * Cardinality: 0..1
   * Examples: http://www.unece.org/uncefact/codelist/standard/UNECE_DutyTaxFeeTypeCode_D09B.xsd
   */
  TaxExemptionReasonCode?: Array<Code> | undefined

  /**
   * The reason for tax being exempted, expressed as text.
   * Text
   * Cardinality: 0..n
   */
  TaxExemptionReason?: Array<Text> | undefined

  /**
   * Where a tax is tiered, the range of taxable amounts that determines the rate of tax applicable to this tax
   * category.
   * Text
   * Cardinality: 0..1
   */
  TierRange?: Array<Text> | undefined

  /**
   * Where a tax is tiered, the tax rate that applies within the specified range of taxable amounts for this tax
   * category.
   * Percent
   * Cardinality: 0..1
   */
  TierRatePercent?: Array<Numeric> | undefined

  /**
   * The taxation scheme within which this tax category is defined.
   * Tax Scheme
   * Cardinality: 1
   */
  TaxScheme: Array<TaxScheme>
}
