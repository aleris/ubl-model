import { Period } from './Period'
import { ServiceLevelAgreement } from './ServiceLevelAgreement'
import { Text } from '../cbc/Text'

/**
 * A class to describe the terms and conditions of a digital agreement.
 */
export interface DigitalAgreementTerms {
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
  ValidityPeriod?: [Period] | undefined

  /**
   * The period during which a digital agreement must be adopted.
   * Period
   * Cardinality: 0..1
   */
  AdoptionPeriod?: [Period] | undefined

  /**
   * The service level agreement which regulates the quality, availability and responsibilities of digital services.
   * Service Level Agreement
   * Cardinality: 0..n
   * Alternative business terms: SLA
   */
  ServiceLevelAgreement?: Array<ServiceLevelAgreement> | undefined
}
