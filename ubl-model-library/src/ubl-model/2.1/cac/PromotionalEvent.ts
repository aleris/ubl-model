import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { PromotionalSpecification } from './PromotionalSpecification'

/**
 * Agree can be renamed as PromotionalEvents
 */
export interface PromotionalEvent {
  /**
   * A code signifying the type of this promotional event. Examples can be: Holiday, Seasonal Event, Store Closing,
   * Trade Item Introduction
   * Code
   * Cardinality: 1
   */
  PromotionalEventTypeCode: [Code]

  /**
   * The date on which a proposal for this promotional event was submitted.
   * Date
   * Cardinality: 0..1
   */
  SubmissionDate?: [Date] | undefined

  /**
   * The first day that products will be available to ship from buyer to seller if the proposal for this promotional
   * event is accepted.
   * Date
   * Cardinality: 0..1
   */
  FirstShipmentAvailibilityDate?: [Date] | undefined

  /**
   * The deadline for acceptance of this promotional event.
   * Date
   * Cardinality: 0..1
   */
  LatestProposalAcceptanceDate?: [Date] | undefined

  /**
   * A specification for a promotional event.
   * Promotional Specification
   * Cardinality: 1..n
   */
  PromotionalSpecification: Array<PromotionalSpecification>
}
