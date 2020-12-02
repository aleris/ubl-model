import { AttestationLine } from './AttestationLine'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Period } from './Period'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class describing an attestation made for an item
 */
export interface Attestation {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for this attestation
   * Identifier
   * Cardinality: 0..1
   */
  ID?: Array<Identifier> | undefined

  /**
   * A textual description of this attestation
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Free-form text conveying information that is not contained explicitly in other structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The period during which this attestation is valid
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * The party issuing this attestation
   * Party
   * Cardinality: 1
   */
  IssuerParty: Array<Party>

  /**
   * An attestation or statement made and which forms part of this attestation
   * Attestation Line
   * Cardinality: 1
   */
  AttestationLine: Array<AttestationLine>
}
