import { Code } from '../cbc/Code'
import { EvidenceSupplied } from './EvidenceSupplied'
import { Identifier } from '../cbc/Identifier'
import { Period } from './Period'
import { ResponseValue } from './ResponseValue'
import { Text } from '../cbc/Text'

/**
 * A class to describe a response to a criterion property.
 */
export interface TenderingCriterionResponse {
  /**
   * An identifier for this criterion property response.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * The name of the criterion property response
   * Name
   * Cardinality: 0..1
   */
  Name?: [Text] | undefined

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
  ValidatedCriterionPropertyID?: [Identifier] | undefined

  /**
   * A code specifying the confidentiality level of the response to this criterion.
   * Code
   * Cardinality: 0..1
   */
  ConfidentialityLevelCode?: [Code] | undefined

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
}
