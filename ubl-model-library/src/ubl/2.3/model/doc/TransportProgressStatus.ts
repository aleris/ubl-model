import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransportMeans } from '../cac/TransportMeans'
import { TransportSchedule } from '../cac/TransportSchedule'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document sent from a Transportation Network Manager to a Transport Service Provider giving the status of the
 * whereabouts and schedule of the transport means involved in a transport service.
 */
export interface TransportProgressStatus {
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
   */
  ProfileExecutionID?: Array<Identifier> | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: Array<Identifier>

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: Array<Indicator> | undefined

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
   * Cardinality: 1
   */
  IssueTime: Array<Time>

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Indicates whether transport progress information is available.
   * Indicator
   * Cardinality: 0..1
   */
  StatusAvailableIndicator?: Array<Indicator> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party sending the Transport Progress Status.
   * Party
   * Cardinality: 0..1
   */
  SenderParty?: Array<Party> | undefined

  /**
   * The party receiving the Transport Progress Status.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty?: Array<Party> | undefined

  /**
   * The party that is the source of the Transport Progress Status.
   * Party
   * Cardinality: 0..1
   */
  SourceIssuerParty?: Array<Party> | undefined

  /**
   * A reference to the Transport Progress Status Request document to which this status report is a response.
   * Document Reference
   * Cardinality: 0..1
   */
  TransportProgressStatusRequestDocumentReference?: Array<DocumentReference> | undefined

  /**
   * The transport means by which the current transport service is effectuated.
   * Transport Means
   * Cardinality: 1
   */
  TransportMeans: Array<TransportMeans>

  /**
   * Describes the status and schedule of the transport means operating the transport service as well as the current
   * location of the transport means.
   * Transport Schedule
   * Cardinality: 0..n
   */
  TransportSchedule?: Array<TransportSchedule> | undefined
}
