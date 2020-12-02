import { Address } from './Address'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class for describing the terms of a trade agreement.
 */
export interface TradingTerms {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Text describing the terms of a trade agreement.
   * Text
   * Cardinality: 0..n
   * Examples: Unless credit terms have been expressly agreed by Dell, payment for the products or services shall be
   * Examples: made in full before physical delivery of products or services. Customer shall pay for all shipping and
   * Examples: handling charges.
   */
  Information?: Array<Text> | undefined

  /**
   * A reference quoting the basis of the terms
   * Text
   * Cardinality: 0..1
   * Examples: http://www1.ap.dell.com/content/topics/topic.aspx/ap/policy/en/au/sales_terms_au
   */
  Reference?: Array<Text> | undefined

  /**
   * The address at which these trading terms apply.
   * Address
   * Cardinality: 0..1
   */
  ApplicableAddress?: Array<Address> | undefined
}
