import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to describe the result of an attempt to verify a signature.
 */
export interface ResultOfVerification {
  /**
   * An identifier for the organization, person, service, or server that verified the signature.
   * Identifier
   * Cardinality: 0..1
   */
  ValidatorID: [Identifier] | undefined

  /**
   * A code signifying the result of the verification.
   * Code
   * Cardinality: 0..1
   */
  ValidationResultCode: [Code] | undefined

  /**
   * The date upon which verification took place.
   * Date
   * Cardinality: 0..1
   */
  ValidationDate: [Date] | undefined

  /**
   * The time at which verification took place.
   * Time
   * Cardinality: 0..1
   */
  ValidationTime: [Time] | undefined

  /**
   * The verification process.
   * Text
   * Cardinality: 0..1
   */
  ValidateProcess: [Text] | undefined

  /**
   * The tool used to verify the signature.
   * Text
   * Cardinality: 0..1
   */
  ValidateTool: [Text] | undefined

  /**
   * The version of the tool used to verify the signature.
   * Text
   * Cardinality: 0..1
   */
  ValidateToolVersion: [Text] | undefined

  /**
   * The signing party.
   * Party
   * Cardinality: 0..1
   */
  SignatoryParty: [Party] | undefined
}
