import { DigitalService } from './DigitalService'
import { Identifier } from '../cbc/Identifier'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe a digital trade collaboration.
 */
export interface DigitalCollaboration {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the digital collaboration.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * The sending digital service associated with this digital collaboration.
   * Digital Service
   * Cardinality: 0..1
   */
  SendingDigitalService?: Array<DigitalService> | undefined

  /**
   * The receiving digital service associated with this digital collaboration.
   * Digital Service
   * Cardinality: 0..1
   */
  ReceivingDigitalService?: Array<DigitalService> | undefined
}
