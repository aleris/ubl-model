import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { EvidenceSupplied } from './EvidenceSupplied'
import { Period } from './Period'
import { Quantity } from '../cbc/Quantity'
import { Text } from '../cbc/Text'
import { WebSite } from './WebSite'

/**
 * A class to describe a specific capability of an organization.
 */
export interface Capability {
  /**
   * This class can be used as Financial or Technical capabilities. For instance, "Turnover" or "Qualified Engineers"
   * are two possible codes.
   * Code
   * Cardinality: 0..1
   */
  CapabilityTypeCode: [Code] | undefined

  /**
   * Text describing this capability.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * A monetary amount as a measure of this capability.
   * Amount
   * Cardinality: 0..1
   */
  ValueAmount: [Amount] | undefined

  /**
   * A quantity as a measure of this capability.
   * Quantity
   * Cardinality: 0..1
   */
  ValueQuantity: [Quantity] | undefined

  /**
   * The evidence that supports the capability claim.
   * Evidence Supplied
   * Cardinality: 0..n
   */
  EvidenceSupplied: Array<EvidenceSupplied> | undefined

  /**
   * The period of time for which this capability is (or has been) valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod: [Period] | undefined

  /**
   * A web site where the capability is detailed.
   * Web Site
   * Cardinality: 0..1
   */
  WebSite: [WebSite] | undefined
}
