import { Indicator } from '../cbc/Indicator'

/**
 * A class to describe a post award process. These processes following the agreement on a contract for supply of goods
 * or services ( for example, after the awarding of a tender).
 */
export interface PostAwardProcess {
  /**
   * An indicator to specify whether an electronic catalogue will be used during the post award phase.
   * Indicator
   * Cardinality: 0..1
   */
  ElectronicCatalogueUsageIndicator?: [Indicator] | undefined

  /**
   * An indicator on whether the electronic invoice is allowed for this process.
   * Indicator
   * Cardinality: 0..1
   */
  ElectronicInvoiceAcceptedIndicator?: [Indicator] | undefined

  /**
   * An indicator on whether electronic ordering shall be used in the post award process.
   * Indicator
   * Cardinality: 0..1
   */
  ElectronicOrderUsageIndicator?: [Indicator] | undefined

  /**
   * An indicator on whether electronic payment shall be used in the post award process.
   * Indicator
   * Cardinality: 0..n
   */
  ElectronicPaymentUsageIndicator?: Array<Indicator> | undefined
}
