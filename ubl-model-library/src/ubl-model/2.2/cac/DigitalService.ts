import { DeliveryChannel } from './DeliveryChannel'
import { DocumentMetadata } from './DocumentMetadata'
import { DocumentReference } from './DocumentReference'
import { Identifier } from '../cbc/Identifier'

/**
 * A class to describe a specific digital trade service supported by an organization for either sending or receiving
 * business documents on different formats (e.g. UBL, ISO20022, EDIFACT, ...).
 */
export interface DigitalService {
  /**
   * An identifier for the digital service (aka transaction ID).
   * Identifier
   * Cardinality: 0..1
   * Examples: urn:www.cenbii.eu:transaction:biitrns010:ver2.0
   */
  ID: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of this digital service (e.g. a PEPPOL customization).
   * Identifier
   * Cardinality: 0..1
   * Examples: urn:www.cenbii.eu:transaction:biitrns010:ver2.0:extended:urn:www.peppol.eu:bis:peppol5a:ver2.0
   */
  CustomizationID: [Identifier] | undefined

  /**
   * The digital document metadata associated with this digital service.
   * Document Metadata
   * Cardinality: 1..n
   */
  DigitalDocumentMetadata: Array<DocumentMetadata>

  /**
   * The digital delivery channel associated with this digital service.
   * Delivery Channel
   * Cardinality: 0..n
   */
  DigitalDeliveryChannel: Array<DeliveryChannel> | undefined

  /**
   * A reference to a certification document associated with this digital service.
   * Document Reference
   * Cardinality: 0..n
   */
  CertificationDocumentReference: Array<DocumentReference> | undefined
}
