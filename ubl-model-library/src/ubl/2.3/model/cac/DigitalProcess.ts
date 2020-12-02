import { DigitalCollaboration } from './DigitalCollaboration'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A class to describe a digital trade process.
 */
export interface DigitalProcess {
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
   * Text describing the digital process.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Identifies a user-defined profile of this digital process (e.g. an UBL profile).
   * Identifier
   * Cardinality: 0..1
   * Examples: urn:www.cenbii.eu:profile:bii05:ver2.0
   */
  ProfileID?: Array<Identifier> | undefined

  /**
   * The digital collaboration associated with this digital process.
   * Digital Collaboration
   * Cardinality: 0..n
   */
  DigitalCollaboration?: Array<DigitalCollaboration> | undefined

  /**
   * A reference to a certification document associated with this digital process.
   * Document Reference
   * Cardinality: 0..n
   */
  CertificationDocumentReference?: Array<DocumentReference> | undefined
}
