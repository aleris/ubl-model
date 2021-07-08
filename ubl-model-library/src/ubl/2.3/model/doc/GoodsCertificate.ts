import { Address } from '../cac/Address'
import { Attestation } from '../cac/Attestation'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { GoodsProcessing } from '../cac/GoodsProcessing'
import { Identifier } from '../cbc/Identifier'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { Shipment } from '../cac/Shipment'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document that describes a certificate of goods for importation and exportation
 */
export interface GoodsCertificate {
  /**
   * A container for extensions foreign to the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: Array<UBLExtensions> | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.3
   */
  UBLVersionID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   */
  CustomizationID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileID?: Array<Identifier> | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID?: Array<Identifier> | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: Array<Identifier> | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * A code specifying the type of goods certificate
   * Code
   * Cardinality: 0..1
   */
  TypeCode?: Array<Code> | undefined

  /**
   * Textual description of this goods certificate
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
   * Identifies the current version of this goods certificate
   * Identifier
   * Cardinality: 0..1
   */
  VersionID?: Array<Identifier> | undefined

  /**
   * The period of time for which this goods certificate is considered valid
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * A geographic area where this goods certificate is valid
   * Address
   * Cardinality: 0..1
   */
  ApplicableTerritoryAddress?: Array<Address> | undefined

  /**
   * The party who exports the goods or has similar right of disposal over them at the time of export
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Exporter (WCO ID 41 and 42)
   */
  ExporterParty?: Array<Party> | undefined

  /**
   * The party who imports the goods, or on whose behalf the goods are being import
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Importer (WCO ID 39 and 40)
   */
  ImporterParty?: Array<Party> | undefined

  /**
   * The party who is responsible for storing the goods
   * Party
   * Cardinality: 0..1
   */
  WarehouseParty?: Array<Party> | undefined

  /**
   * The party, usually the seller, who is responsible for the consignment
   * Party
   * Cardinality: 0..1
   */
  ConsignorParty?: Array<Party> | undefined

  /**
   * The party, usually the buyer, who will receive the goods
   * Party
   * Cardinality: 0..1
   */
  ConsigneeParty?: Array<Party> | undefined

  /**
   * The freight forwarder or the forwarding agent responsible for the transportation of the goods
   * Party
   * Cardinality: 0..1
   */
  FreightForwarderParty?: Array<Party> | undefined

  /**
   * The party issuing this goods certificate
   * Party
   * Cardinality: 1
   */
  IssuerParty: Array<Party>

  /**
   * The legal authority, when different from the issuer, who sanctions this goods certificate
   * Party
   * Cardinality: 0..1
   */
  LegalAuthorityParty?: Array<Party> | undefined

  /**
   * The shipment for which this goods certificate is issued
   * Shipment
   * Cardinality: 1
   */
  Shipment: Array<Shipment>

  /**
   * Any attestations made for the goods related to this goods certificate
   * Attestation
   * Cardinality: 0..n
   */
  Attestation?: Array<Attestation> | undefined

  /**
   * Any processing that the goods have been undergoing
   * Goods Processing
   * Cardinality: 0..n
   */
  GoodsProcessing?: Array<GoodsProcessing> | undefined

  /**
   * A reference to the original version of the goods certificate
   * Document Reference
   * Cardinality: 0..1
   */
  OriginalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to the previous version of the goods certificate
   * Document Reference
   * Cardinality: 0..1
   */
  PreviousDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document associated with this goods certificate
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined
}
