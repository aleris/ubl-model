import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { ProcurementProject } from './ProcurementProject'
import { TenderingProcess } from './TenderingProcess'
import { TenderingTerms } from './TenderingTerms'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe one of the parts of a procurement project that is being subdivided to allow the contracting party
 * to award different lots to different economic operators under different contracts.
 */
export interface ProcurementProjectLot {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this procurement project lot.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * A reference to a legal document.
   * Document Reference
   * Cardinality: 0..n
   */
  LegalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a technical document.
   * Document Reference
   * Cardinality: 0..n
   */
  TechnicalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a required document.
   * Document Reference
   * Cardinality: 0..n
   */
  RequiredDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to a provided document.
   * Document Reference
   * Cardinality: 0..n
   */
  ProvidedDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * Tendering terms for this procurement project lot.
   * Tendering Terms
   * Cardinality: 0..1
   */
  TenderingTerms?: Array<TenderingTerms> | undefined

  /**
   * Tendering process for this procurement project lot.
   * Tendering Process
   * Cardinality: 0..1
   */
  TenderingProcess?: Array<TenderingProcess> | undefined

  /**
   * A description of the procurement project to be divided.
   * Procurement Project
   * Cardinality: 0..1
   */
  ProcurementProject?: Array<ProcurementProject> | undefined
}
