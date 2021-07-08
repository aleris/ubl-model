import { Code } from '../cbc/Code'
import { Consignment } from '../cac/Consignment'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Location } from '../cac/Location'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document requesting a Transportation Status report.
 */
export interface TransportationStatusRequest {
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
   * A reference number assigned by a carrier or its agent to identify a specific shipment, such as a booking reference
   * number when cargo space is reserved prior to loading.
   * Identifier
   * Cardinality: 0..1
   */
  CarrierAssignedID?: Array<Identifier> | undefined

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
   * Text, assigned by the sender, that identifies this document to business users.
   * Name
   * Cardinality: 0..1
   */
  Name?: Array<Text> | undefined

  /**
   * A textual description of the document instance.
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
   * A reference number for a shipping order.
   * Identifier
   * Cardinality: 0..1
   */
  ShippingOrderID?: Array<Identifier> | undefined

  /**
   * An instruction regarding this message.
   * Text
   * Cardinality: 0..1
   */
  OtherInstruction?: Array<Text> | undefined

  /**
   * A code signifying the type of status requested in a Transportation Status document.
   * Code
   * Cardinality: 0..1
   */
  TransportationStatusTypeCode?: Array<Code> | undefined

  /**
   * The party sending this document.
   * Party
   * Cardinality: 0..1
   */
  SenderParty?: Array<Party> | undefined

  /**
   * The party receiving this document.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty?: Array<Party> | undefined

  /**
   * A reference to the Transport Execution Plan associated with the transport service for which status is requested.
   * Document Reference
   * Cardinality: 0..1
   */
  TransportExecutionPlanDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A consignment regarding which status is requested.
   * Consignment
   * Cardinality: 0..n
   */
  Consignment?: Array<Consignment> | undefined

  /**
   * A reference to another document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * A location for which status is requested.
   * Location
   * Cardinality: 0..n
   */
  RequestedStatusLocation?: Array<Location> | undefined

  /**
   * A period for which status is requested.
   * Period
   * Cardinality: 0..n
   */
  RequestedStatusPeriod?: Array<Period> | undefined
}
