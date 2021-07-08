import { Attachment } from '../cac/Attachment'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { LineReference } from '../cac/LineReference'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A wrapper that allows a document of any kind to be packaged with the UBL document that references it.
 */
export interface AttachedDocument {
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
   * Examples: 2.0.5
   */
  UBLVersionID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID?: Array<Identifier> | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID?: Array<Identifier> | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
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
   * Cardinality: 1
   */
  IssueDate: Array<Date>

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
   * A code signifying the type of document.
   * Code
   * Cardinality: 0..1
   */
  DocumentTypeCode?: Array<Code> | undefined

  /**
   * Text specifying the type of document.
   * Text
   * Cardinality: 0..1
   */
  DocumentType?: Array<Text> | undefined

  /**
   * The Identifier of the parent document.
   * Identifier
   * Cardinality: 1
   */
  ParentDocumentID: Array<Identifier>

  /**
   * A code signifying the type of parent document.
   * Code
   * Cardinality: 0..1
   */
  ParentDocumentTypeCode?: Array<Code> | undefined

  /**
   * Indicates the current version of the referred document.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1
   */
  ParentDocumentVersionID?: Array<Identifier> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party sending this document.
   * Party
   * Cardinality: 1
   */
  SenderParty: Array<Party>

  /**
   * The party receiving this document.
   * Party
   * Cardinality: 1
   */
  ReceiverParty: Array<Party>

  /**
   * An attachment containing the document content.
   * Attachment
   * Cardinality: 1
   */
  Attachment: Array<Attachment>

  /**
   * A reference to a line in the attached document.
   * Line Reference
   * Cardinality: 0..n
   */
  ParentDocumentLineReference?: Array<LineReference> | undefined
}
