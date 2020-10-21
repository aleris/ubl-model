import { CertificateOfOriginApplication } from '../cac/CertificateOfOriginApplication'
import { Date } from '../cbc/Date'
import { Endorsement } from '../cac/Endorsement'
import { EndorserParty } from '../cac/EndorserParty'
import { Identifier } from '../cbc/Identifier'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document that describes the Certificate of Origin.
 */
export interface CertificateOfOrigin {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: [UBLExtensions] | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID?: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID?: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID?: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID?: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: [Date] | undefined

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: [Time] | undefined

  /**
   * Textual description of the document instance.
   * Text
   * Cardinality: 0..n
   */
  Description?: Array<Text> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Identifies the version of this Certificate of Origin.
   * Identifier
   * Cardinality: 0..1
   */
  VersionID?: [Identifier] | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The Party who makes the export declaration, or on whose behalf the export declaration is made, and who is the owner
   * of the goods or has similar right of disposal over them at the time when the declaration is accepted.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Exporter (WCO ID 41 and 42)
   */
  ExporterParty?: [Party] | undefined

  /**
   * The Party who makes an import declaration, or on whose behalf a Customs clearing agent or other authorized person
   * makes an import declaration. This may include a person who has possession of the goods or to whom the goods are
   * consigned.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Importer (WCO ID 39 and 40)
   */
  ImporterParty?: [Party] | undefined

  /**
   * The Party providing the endorsement.
   * Endorser Party
   * Cardinality: 0..n
   */
  EndorserParty?: Array<EndorserParty> | undefined

  /**
   * Details of the application for a Certificate of Origin.
   * Certificate Of Origin Application
   * Cardinality: 1
   */
  CertificateOfOriginApplication: [CertificateOfOriginApplication]

  /**
   * Issuer Endorsement details.
   * Endorsement
   * Cardinality: 1
   */
  IssuerEndorsement: [Endorsement]

  /**
   * Embassy Endorsement details.
   * Endorsement
   * Cardinality: 0..1
   */
  EmbassyEndorsement?: [Endorsement] | undefined

  /**
   * Insurance Endorsement details.
   * Endorsement
   * Cardinality: 0..1
   */
  InsuranceEndorsement?: [Endorsement] | undefined
}
