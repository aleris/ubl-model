import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { PromotionalSpecification } from './PromotionalSpecification'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * Agree can be renamed as PromotionalEvents
 */
export interface PromotionalEvent {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * A code signifying the type of this promotional event. Examples can be: Holiday, Seasonal Event, Store Closing,
   * Trade Item Introduction
   * Code
   * Cardinality: 1
   */
  PromotionalEventTypeCode: Array<Code>

  /**
   * The date on which a proposal for this promotional event was submitted.
   * Date
   * Cardinality: 0..1
   */
  SubmissionDate?: Array<Date> | undefined

  /**
   * The first day that products will be available to ship from buyer to seller if the proposal for this promotional
   * event is accepted.
   * Date
   * Cardinality: 0..1
   */
  FirstShipmentAvailibilityDate?: Array<Date> | undefined

  /**
   * The deadline for acceptance of this promotional event.
   * Date
   * Cardinality: 0..1
   */
  LatestProposalAcceptanceDate?: Array<Date> | undefined

  /**
   * A specification for a promotional event.
   * Promotional Specification
   * Cardinality: 1..n
   */
  PromotionalSpecification: Array<PromotionalSpecification>
}
