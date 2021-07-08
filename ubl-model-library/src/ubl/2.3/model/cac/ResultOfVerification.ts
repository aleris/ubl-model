import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to describe the result of an attempt to verify a signature.
 */
export interface ResultOfVerification {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for the organization, person, service, or server that verified the signature.
   * Identifier
   * Cardinality: 0..1
   */
  ValidatorID?: Array<Identifier> | undefined

  /**
   * A code signifying the result of the verification.
   * Code
   * Cardinality: 0..1
   */
  ValidationResultCode?: Array<Code> | undefined

  /**
   * The date upon which verification took place.
   * Date
   * Cardinality: 0..1
   */
  ValidationDate?: Array<Date> | undefined

  /**
   * The time at which verification took place.
   * Time
   * Cardinality: 0..1
   */
  ValidationTime?: Array<Time> | undefined

  /**
   * The verification process.
   * Text
   * Cardinality: 0..1
   */
  ValidateProcess?: Array<Text> | undefined

  /**
   * The tool used to verify the signature.
   * Text
   * Cardinality: 0..1
   */
  ValidateTool?: Array<Text> | undefined

  /**
   * The version of the tool used to verify the signature.
   * Text
   * Cardinality: 0..1
   */
  ValidateToolVersion?: Array<Text> | undefined

  /**
   * The signing party.
   * Party
   * Cardinality: 0..1
   */
  SignatoryParty?: Array<Party> | undefined
}
