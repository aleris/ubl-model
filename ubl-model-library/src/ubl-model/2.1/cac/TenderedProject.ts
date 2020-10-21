import { Amount } from '../cbc/Amount'
import { AwardingCriterionResponse } from './AwardingCriterionResponse'
import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { MonetaryTotal } from './MonetaryTotal'
import { ProcurementProjectLot } from './ProcurementProjectLot'
import { TaxTotal } from './TaxTotal'
import { TenderLine } from './TenderLine'
import { Text } from '../cbc/Text'

/**
 * A class to describe a tendered project or project lot.
 */
export interface TenderedProject {
  /**
   * An identifier for this variant of a tendered project.
   * Identifier
   * Cardinality: 0..1
   */
  VariantID?: [Identifier] | undefined

  /**
   * The fee amount for tendered projects.
   * Amount
   * Cardinality: 0..1
   */
  FeeAmount?: [Amount] | undefined

  /**
   * Text describing the fee amount for tendered projects.
   * Text
   * Cardinality: 0..n
   */
  FeeDescription?: Array<Text> | undefined

  /**
   * An identifier for the tender envelope this tendered project belongs to.
   * Identifier
   * Cardinality: 0..1
   */
  TenderEnvelopeID?: [Identifier] | undefined

  /**
   * A code signifying the type of tender envelope this tendered project belongs to.
   * Code
   * Cardinality: 0..1
   */
  TenderEnvelopeTypeCode?: [Code] | undefined

  /**
   * The procurement project lot to which this Tender Line refers to. If there are no lots, this should not be defined.
   * Procurement Project Lot
   * Cardinality: 0..1
   */
  ProcurementProjectLot?: [ProcurementProjectLot] | undefined

  /**
   * A reference to a non-structured evidentiary document supporting this tendered project.
   * Document Reference
   * Cardinality: 0..n
   */
  EvidenceDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A total amount of taxes of a particular kind applicable to the monetary total for this tendered project.
   * Tax Total
   * Cardinality: 0..n
   */
  TaxTotal?: Array<TaxTotal> | undefined

  /**
   * The total amount for this tendered project.
   * Monetary Total
   * Cardinality: 0..1
   */
  LegalMonetaryTotal?: [MonetaryTotal] | undefined

  /**
   * A line in the tender for this tendered project.
   * Tender Line
   * Cardinality: 0..n
   */
  TenderLine?: Array<TenderLine> | undefined

  /**
   * An association to an Awarding Criterion Response.
   * Awarding Criterion Response
   * Cardinality: 0..n
   */
  AwardingCriterionResponse?: Array<AwardingCriterionResponse> | undefined
}
