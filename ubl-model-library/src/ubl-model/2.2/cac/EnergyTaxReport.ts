import { Amount } from '../cbc/Amount'
import { TaxScheme } from './TaxScheme'

/**
 * A class to describe energy taxes.
 */
export interface EnergyTaxReport {
  /**
   * The monetary amount of taxes (and duties).
   * Amount
   * Cardinality: 0..1
   * Examples: 3087.90
   */
  TaxEnergyAmount?: [Amount] | undefined

  /**
   * The monetary amount of taxes (and duties) paid on account.
   * Amount
   * Cardinality: 0..1
   * Examples: 2855.40
   */
  TaxEnergyOnAccountAmount?: [Amount] | undefined

  /**
   * The monetary amount of the balance of taxes owing.
   * Amount
   * Cardinality: 0..1
   * Examples: 232.49
   */
  TaxEnergyBalanceAmount?: [Amount] | undefined

  /**
   * The relevant taxation scheme.
   * Tax Scheme
   * Cardinality: 1
   */
  TaxScheme: [TaxScheme]
}
