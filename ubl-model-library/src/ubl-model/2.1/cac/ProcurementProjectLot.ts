import { Identifier } from '../cbc/Identifier'
import { ProcurementProject } from './ProcurementProject'
import { TenderingTerms } from './TenderingTerms'

/**
 * A class to describe one of the parts of a procurement project that is being subdivided to allow the contracting party
 * to award different lots to different economic operators under different contracts.
 */
export interface ProcurementProjectLot {
  /**
   * An identifier for this procurement project lot.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * Tendering terms for this procurement project lot.
   * Tendering Terms
   * Cardinality: 0..1
   */
  TenderingTerms?: [TenderingTerms] | undefined

  /**
   * A description of the procurement project to be divided.
   * Procurement Project
   * Cardinality: 0..1
   */
  ProcurementProject?: [ProcurementProject] | undefined
}
