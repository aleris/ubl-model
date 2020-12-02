import { Code } from '../cbc/Code'
import { CommodityClassification } from './CommodityClassification'
import { EvidenceSupplied } from './EvidenceSupplied'
import { Identifier } from '../cbc/Identifier'
import { Period } from './Period'
import { ProcurementProjectLotReference } from './ProcurementProjectLotReference'
import { ResponseValue } from './ResponseValue'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a response to a criterion property.
 */
export interface TenderingCriterionResponse {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this criterion property response.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The name of the criterion property response
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * A description of the criterion response
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * An identifier for this item of criterion support.
   * Identifier
   * Cardinality: 0..1
   */
  ValidatedCriterionPropertyID?: Array<Identifier> | undefined

  /**
   * A code specifying the confidentiality level of the response to this criterion.
   * Code
   * Cardinality: 0..1
   */
  ConfidentialityLevelCode?: Array<Code> | undefined

  /**
   * The criterion requirement property values.
   * Response Value
   * Cardinality: 0..n
   */
  ResponseValue?: Array<ResponseValue> | undefined

  /**
   * The period to which this criterion property response applies.
   * Period
   * Cardinality: 0..n
   */
  ApplicablePeriod?: Array<Period> | undefined

  /**
   * A reference to the evidence supporting this criterion property response.
   * Evidence Supplied
   * Cardinality: 0..n
   */
  EvidenceSupplied?: Array<EvidenceSupplied> | undefined

  /**
   * One or more lots to which the criterion response applies
   * Procurement Project Lot Reference
   * Cardinality: 0..n
   */
  ProcurementProjectLotReference?: Array<ProcurementProjectLotReference> | undefined

  /**
   * One or more classification to which this criterion response applies
   * Commodity Classification
   * Cardinality: 0..n
   */
  CommodityClassification?: Array<CommodityClassification> | undefined
}
