import { Amount } from '../cbc/Amount'
import { AwardingCriterionResponse } from './AwardingCriterionResponse'
import { Code } from '../cbc/Code'
import { DocumentReference } from './DocumentReference'
import { Fee } from './Fee'
import { Identifier } from '../cbc/Identifier'
import { MonetaryTotal } from './MonetaryTotal'
import { ProcurementProjectLot } from './ProcurementProjectLot'
import { TaxTotal } from './TaxTotal'
import { TenderLine } from './TenderLine'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a tendered project or project lot.
 */
export interface TenderedProject {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this variant of a tendered project.
   * Identifier
   * Cardinality: 0..1
   */
  VariantID?: Array<Identifier> | undefined

  /**
   * The fee amount for tendered projects.
   * Amount
   * Cardinality: 0..1
   */
  FeeAmount?: Array<Amount> | undefined

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
  TenderEnvelopeID?: Array<Identifier> | undefined

  /**
   * A code signifying the type of tender envelope this tendered project belongs to.
   * Code
   * Cardinality: 0..1
   */
  TenderEnvelopeTypeCode?: Array<Code> | undefined

  /**
   * The procurement project lot to which this Tender Line refers to. If there are no lots, this should not be defined.
   * Procurement Project Lot
   * Cardinality: 0..n
   */
  ProcurementProjectLot?: Array<ProcurementProjectLot> | undefined

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
  LegalMonetaryTotal?: Array<MonetaryTotal> | undefined

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

  /**
   * An additional fee for this tendered project.
   * Fee
   * Cardinality: 0..n
   */
  AdditionalFee?: Array<Fee> | undefined
}
