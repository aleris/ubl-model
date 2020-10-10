import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { ProcurementProjectLot } from './ProcurementProjectLot'
import { TenderRequirement } from './TenderRequirement'
import { Text } from '../cbc/Text'

/**
 * A class to describe directions for preparing a tender.
 */
export interface TenderPreparation {
  /**
   * An identifier for the tender envelope to be used with the tender.
   * Identifier
   * Cardinality: 1
   */
  TenderEnvelopeID: [Identifier]

  /**
   * A code signifying the type of tender envelope (economical or objective criteria versus technical or subjective
   * criteria).
   * Code
   * Cardinality: 0..1
   */
  TenderEnvelopeTypeCode: [Code] | undefined

  /**
   * Text describing the tender envelope.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * An identifier for the open tender associated with this tender preparation.
   * Identifier
   * Cardinality: 0..1
   */
  OpenTenderID: [Identifier] | undefined

  /**
   * The procurement project lot associated with a particular tenderer.
   * Procurement Project Lot
   * Cardinality: 0..n
   */
  ProcurementProjectLot: Array<ProcurementProjectLot> | undefined

  /**
   * A reference to the template for a required document in a tendering process.
   * Tender Requirement
   * Cardinality: 0..n
   * Examples: Curricula required, Experience required, ....
   */
  DocumentTenderRequirement: Array<TenderRequirement> | undefined
}
