import { Attachment } from './Attachment'
import { Date } from '../cbc/Date'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'

/**
 * A class to define a signature.
 */
export interface Signature {
  /**
   * An identifier for this signature.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * Free-form text conveying information that is not contained explicitly in other structures; in particular,
   * information regarding the circumstances in which the signature is being used.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * The date upon which this signature was verified.
   * Date
   * Cardinality: 0..1
   */
  ValidationDate?: [Date] | undefined

  /**
   * The time at which this signature was verified.
   * Time
   * Cardinality: 0..1
   */
  ValidationTime?: [Time] | undefined

  /**
   * An identifier for the organization, person, service, or server that verified this signature.
   * Identifier
   * Cardinality: 0..1
   */
  ValidatorID?: [Identifier] | undefined

  /**
   * The method used to perform XML canonicalization of this signature.
   * Text
   * Cardinality: 0..1
   */
  CanonicalizationMethod?: [Text] | undefined

  /**
   * Text describing the method of signature.
   * Text
   * Cardinality: 0..1
   */
  SignatureMethod?: [Text] | undefined

  /**
   * The signing party.
   * Party
   * Cardinality: 0..1
   */
  SignatoryParty?: [Party] | undefined

  /**
   * The actual encoded signature (e.g., in XMLDsig format).
   * Attachment
   * Cardinality: 0..1
   */
  DigitalSignatureAttachment?: [Attachment] | undefined

  /**
   * A reference to the document that the signature applies to. For evidentiary purposes, this may be the document image
   * that the signatory party saw when applying their signature.
   * Document Reference
   * Cardinality: 0..1
   */
  OriginalDocumentReference?: [DocumentReference] | undefined
}
