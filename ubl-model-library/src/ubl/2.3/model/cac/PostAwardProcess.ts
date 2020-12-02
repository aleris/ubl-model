import { Indicator } from '../cbc/Indicator'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a post award process. These processes following the agreement on a contract for supply of goods
 * or services ( for example, after the awarding of a tender).
 */
export interface PostAwardProcess {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An indicator to specify whether an electronic catalogue will be used during the post award phase.
   * Indicator
   * Cardinality: 0..1
   */
  ElectronicCatalogueUsageIndicator?: Array<Indicator> | undefined

  /**
   * An indicator on whether the electronic invoice is allowed for this process.
   * Indicator
   * Cardinality: 0..1
   */
  ElectronicInvoiceAcceptedIndicator?: Array<Indicator> | undefined

  /**
   * An indicator on whether electronic ordering shall be used in the post award process.
   * Indicator
   * Cardinality: 0..1
   */
  ElectronicOrderUsageIndicator?: Array<Indicator> | undefined

  /**
   * An indicator on whether electronic payment shall be used in the post award process.
   * Indicator
   * Cardinality: 0..n
   */
  ElectronicPaymentUsageIndicator?: Array<Indicator> | undefined
}
