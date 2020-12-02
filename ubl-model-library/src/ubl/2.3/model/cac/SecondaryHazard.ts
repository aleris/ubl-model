import { Code } from '../cbc/Code'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a secondary hazard associated with a hazardous item.
 */
export interface SecondaryHazard {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this secondary hazard.
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * Text of the placard notation corresponding to the hazard class of this secondary hazard. Can also be the hazard
   * identification number of the orange placard (upper part) required on the means of transport.
   * Text
   * Cardinality: 0..1
   * Examples: 5.1
   */
  PlacardNotation?: Array<Text> | undefined

  /**
   * Text of the placard endorsement for this secondary hazard that is to be shown on the shipping papers for a
   * hazardous item. Can also be used for the number of the orange placard (lower part) required on the means of
   * transport.
   * Text
   * Cardinality: 0..1
   * Examples: 2
   */
  PlacardEndorsement?: Array<Text> | undefined

  /**
   * A code signifying the emergency procedures for this secondary hazard.
   * Code
   * Cardinality: 0..1
   * Alternative business terms: EMG code, EMS Page Number
   */
  EmergencyProceduresCode?: Array<Code> | undefined

  /**
   * Additional information about the hazardous substance, which can be used (for example) to specify the type of
   * regulatory requirements that apply to this secondary hazard.
   * Text
   * Cardinality: 0..n
   * Examples: N.O.S. or a Waste Characteristics Code in conjunction with an EPA Waste Stream code
   */
  Extension?: Array<Text> | undefined
}
