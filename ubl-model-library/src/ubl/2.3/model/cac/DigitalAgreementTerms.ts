import { Period } from './Period'
import { ServiceLevelAgreement } from './ServiceLevelAgreement'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe the terms and conditions of a digital agreement.
 */
export interface DigitalAgreementTerms {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Text describing the terms and conditions of a digital agreement.
   * Text
   * Cardinality: 1..n
   */
  Description: Array<Text>

  /**
   * The period of time for which this digital agreement is valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * The period during which a digital agreement must be adopted.
   * Period
   * Cardinality: 0..1
   */
  AdoptionPeriod?: Array<Period> | undefined

  /**
   * The service level agreement which regulates the quality, availability and responsibilities of digital services.
   * Service Level Agreement
   * Cardinality: 0..n
   * Alternative business terms: SLA
   */
  ServiceLevelAgreement?: Array<ServiceLevelAgreement> | undefined
}
