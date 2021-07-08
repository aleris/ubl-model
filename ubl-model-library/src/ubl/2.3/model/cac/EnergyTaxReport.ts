import { Amount } from '../cbc/Amount'
import { TaxScheme } from './TaxScheme'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe energy taxes.
 */
export interface EnergyTaxReport {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * The monetary amount of taxes (and duties).
   * Amount
   * Cardinality: 0..1
   * Examples: 3087.90
   */
  TaxEnergyAmount?: Array<Amount> | undefined

  /**
   * The monetary amount of taxes (and duties) paid on account.
   * Amount
   * Cardinality: 0..1
   * Examples: 2855.40
   */
  TaxEnergyOnAccountAmount?: Array<Amount> | undefined

  /**
   * The monetary amount of the balance of taxes owing.
   * Amount
   * Cardinality: 0..1
   * Examples: 232.49
   */
  TaxEnergyBalanceAmount?: Array<Amount> | undefined

  /**
   * The relevant taxation scheme.
   * Tax Scheme
   * Cardinality: 1
   */
  TaxScheme: Array<TaxScheme>
}
