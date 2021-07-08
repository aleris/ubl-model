import { Attachment } from '../cac/Attachment'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Evidence } from '../cac/Evidence'
import { GoodsItemPassportCounterfoil } from '../cac/GoodsItemPassportCounterfoil'
import { Identifier } from '../cbc/Identifier'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document providing a status or a proof that goods have been re-exported
 */
export interface ProofOfReexportation {
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
   * The party issuing this proof of re-exportation
   * Party
   * Cardinality: 1
   */
  IssuerParty: Array<Party>

  /**
   * One or more goods item passport or ATA Carnet counterfoils associated with this proof of re-exportation
   * Goods Item Passport Counterfoil
   * Cardinality: 1..n
   * Alternative business terms: ATA Carnet counterfoil
   */
  GoodsItemPassportCounterfoil: Array<GoodsItemPassportCounterfoil>

  /**
   * One or more references to evidence supporting that goods have been re-exported
   * Evidence
   * Cardinality: 1..n
   */
  ReexportationEvidence: Array<Evidence>

  /**
   * Attachment of the goods item passport or ATA Carnet related to this proof of re-exportation
   * Attachment
   * Cardinality: 0..1
   * Alternative business terms: ATA Carnet
   */
  GoodsItemPassportAttachment?: Array<Attachment> | undefined

  /**
   * One or more references to additional documents related to this proof of re-exportation
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
