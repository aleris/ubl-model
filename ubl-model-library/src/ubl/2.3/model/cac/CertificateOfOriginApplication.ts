import { Code } from '../cbc/Code'
import { Country } from './Country'
import { DocumentDistribution } from './DocumentDistribution'
import { DocumentReference } from './DocumentReference'
import { EndorserParty } from './EndorserParty'
import { Identifier } from '../cbc/Identifier'
import { Party } from './Party'
import { Shipment } from './Shipment'
import { Signature } from './Signature'
import { Text } from '../cbc/Text'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A class to define an application for a Certificate of Origin (CoO).
 */
export interface CertificateOfOriginApplication {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * An identifier for a reference as part of the CoO application.
   * Identifier
   * Cardinality: 1
   */
  ReferenceID: Array<Identifier>

  /**
   * The type of CoO being applied for (Ordinary, Re-export, Commonwealth Preferential, etc.).
   * Text
   * Cardinality: 1
   */
  CertificateType: Array<Text>

  /**
   * A code signifying the status of the application (revision, replacement, etc.).
   * Code
   * Cardinality: 0..1
   */
  ApplicationStatusCode?: Array<Code> | undefined

  /**
   * The latest job number given to the CoO application. This is used by the system to keep track of amendments to or
   * cancellation of any earlier applications.
   * Identifier
   * Cardinality: 1
   */
  OriginalJobID: Array<Identifier>

  /**
   * An identifier for the previous job used in case the application requires query or change.
   * Identifier
   * Cardinality: 0..1
   */
  PreviousJobID?: Array<Identifier> | undefined

  /**
   * Remarks by the applicant for the CoO.
   * Text
   * Cardinality: 0..n
   */
  Remarks?: Array<Text> | undefined

  /**
   * The shipment of goods covered by the CoO.
   * Shipment
   * Cardinality: 1
   */
  Shipment: Array<Shipment>

  /**
   * A party providing an endorsement to the CoO.
   * Endorser Party
   * Cardinality: 1..n
   */
  EndorserParty: Array<EndorserParty>

  /**
   * The party (individual, group, or body) that prepared this CoO application.
   * Party
   * Cardinality: 1
   */
  PreparationParty: Array<Party>

  /**
   * The organization authorized to issue the CoO requested by this application.
   * Party
   * Cardinality: 1
   */
  IssuerParty: Array<Party>

  /**
   * The party making an export declaration, or on behalf of which the export declaration is made, and that is the owner
   * of the goods or has similar right of disposal over them at the time when the declaration is accepted.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Exporter (WCO ID 41 and 42)
   */
  ExporterParty?: Array<Party> | undefined

  /**
   * The party making an import declaration, or on behalf of which a customs clearing agent or other authorized person
   * makes an import declaration. This may include a person who has possession of the goods or to whom the goods are
   * consigned.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Importer (WCO ID 39 and 40)
   */
  ImporterParty?: Array<Party> | undefined

  /**
   * The country where the requested CoO will be issued.
   * Country
   * Cardinality: 1
   */
  IssuingCountry: Array<Country>

  /**
   * An interested party to which the CoO is to be distributed.
   * Document Distribution
   * Cardinality: 0..n
   */
  DocumentDistribution?: Array<DocumentDistribution> | undefined

  /**
   * A reference to a document supporting this application.
   * Document Reference
   * Cardinality: 0..n
   */
  SupportingDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this application.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined
}
