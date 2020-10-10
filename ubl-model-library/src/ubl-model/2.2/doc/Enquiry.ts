import { Attachment } from '../cac/Attachment'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document sent by a requestor to a responder resquesting information about a particular business process. 
 */
export interface Enquiry {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions: [UBLExtensions] | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the requestor.
   * Identifier
   * Cardinality: 0..1
   */
  ID: [Identifier] | undefined

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator: [Indicator] | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * The date, assigned by the requestor, at which this enquiry was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the requestor, at which this enquiry was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * The date, assigned by the requestor, by which this enquiry shall be replied.
   * Date
   * Cardinality: 0..1
   */
  LatestReplyDate: [Date] | undefined

  /**
   * The time, assigned by the requestor, by which this enquiry shall be replied.
   * Time
   * Cardinality: 0..1
   */
  LatestReplyTime: [Time] | undefined

  /**
   * Free-form text-only description pertinent to this document, conveying information that is not contained explicitly
   * in other structures.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The party issuing the enquiry.
   * Party
   * Cardinality: 1
   */
  RequestorParty: [Party]

  /**
   * The party that has to respond to the enquiry.
   * Party
   * Cardinality: 1
   */
  ResponderParty: [Party]

  /**
   * References to relevant documents for the enquiry such as the Contract folder or the lot in the eTendering.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference: Array<DocumentReference> | undefined

  /**
   * Attachment that includes file-based enquiry.
   * Attachment
   * Cardinality: 0..n
   */
  Attachment: Array<Attachment> | undefined
}
