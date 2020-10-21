import { DigitalService } from './DigitalService'
import { Identifier } from '../cbc/Identifier'

/**
 * A class to describe a digital trade collaboration.
 */
export interface DigitalCollaboration {
  /**
   * An identifier for the digital collaboration.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: [Identifier] | undefined

  /**
   * The sending digital service associated with this digital collaboration.
   * Digital Service
   * Cardinality: 0..1
   */
  SendingDigitalService?: [DigitalService] | undefined

  /**
   * The receiving digital service associated with this digital collaboration.
   * Digital Service
   * Cardinality: 0..1
   */
  ReceivingDigitalService?: [DigitalService] | undefined
}
