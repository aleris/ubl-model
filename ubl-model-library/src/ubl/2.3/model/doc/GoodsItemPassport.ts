import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentDistribution } from '../cac/DocumentDistribution'
import { DocumentReference } from '../cac/DocumentReference'
import { Endorsement } from '../cac/Endorsement'
import { GoodsItemPassportCounterfoil } from '../cac/GoodsItemPassportCounterfoil'
import { Identifier } from '../cbc/Identifier'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { Shipment } from '../cac/Shipment'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document providing a temporary export license, also knowned as an ATA Carnet
 */
export interface GoodsItemPassport {
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
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Identifies the current version of this request for proof
   * Identifier
   * Cardinality: 0..1
   */
  VersionID?: Array<Identifier> | undefined

  /**
   * The reason for importing the goods, expressed as a code
   * Code
   * Cardinality: 0..1
   */
  ExportReasonCode?: Array<Code> | undefined

  /**
   * The reason for importing the goods, expressed as text in one or more languages
   * Text
   * Cardinality: 0..n
   */
  ExportReason?: Array<Text> | undefined

  /**
   * The period within which this Goods Item Passport is valid
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * The party issuing this Goods Item Passport
   * Party
   * Cardinality: 0..1
   */
  IssuerParty?: Array<Party> | undefined

  /**
   * The holder of the Goods Item Passport, often the temporary exporter of the goods
   * Party
   * Cardinality: 1
   */
  HolderParty: Array<Party>

  /**
   * The party accompanying the goods while temporarily exported
   * Party
   * Cardinality: 0..1
   */
  RepresentativeParty?: Array<Party> | undefined

  /**
   * The competent Customs party of the exporting country
   * Party
   * Cardinality: 0..1
   */
  ExportingCustomsParty?: Array<Party> | undefined

  /**
   * The competent Customs party of the importing country
   * Party
   * Cardinality: 0..1
   */
  ImportingCustomsParty?: Array<Party> | undefined

  /**
   * A party (often a chamber of commerce) which provides a guarantee goods while temporarily imported
   * Party
   * Cardinality: 0..1
   */
  ImportingGuarantorParty?: Array<Party> | undefined

  /**
   * A party (often a chamber of commerce) which provides a guarantee goods while temporarily exported
   * Party
   * Cardinality: 0..1
   */
  ExportingGuarantorParty?: Array<Party> | undefined

  /**
   * The reference to the shipment of the goods included under this Goods Item Passport
   * Shipment
   * Cardinality: 1
   */
  Shipment: Array<Shipment>

  /**
   * One or more counterfoils associated with this Goods Item Passport
   * Goods Item Passport Counterfoil
   * Cardinality: 1..n
   * Alternative business terms: ATA Carnet counterfoil
   */
  GoodsItemPassportCounterfoil: Array<GoodsItemPassportCounterfoil>

  /**
   * A reference to the issuer's endorsement of this Goods Item Passport
   * Endorsement
   * Cardinality: 0..1
   */
  IssuerEndorsement?: Array<Endorsement> | undefined

  /**
   * One or more references to additional documents related to this Goods Item Passport
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * One or more parties to whom this document is distributed
   * Document Distribution
   * Cardinality: 0..n
   */
  DocumentDistribution?: Array<DocumentDistribution> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined
}
