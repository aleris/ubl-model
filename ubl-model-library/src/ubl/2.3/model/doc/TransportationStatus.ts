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
import { TransportEvent } from '../cac/TransportEvent'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document to circulate reports of transportation status or changes in status (events) among a group of participants.
 */
export interface TransportationStatus {
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
   * A textual description of transportation status.
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
   * A code signifying the type of status provided in a Transportation Status document.
   * Code
   * Cardinality: 0..1
   */
  TransportationStatusTypeCode?: Array<Code> | undefined

  /**
   * A code signifying the overall status of transport service execution.
   * Code
   * Cardinality: 0..1
   */
  TransportExecutionStatusCode?: Array<Code> | undefined

  /**
   * A consignment associated with this Transportation Status report.
   * Consignment
   * Cardinality: 0..n
   */
  Consignment?: Array<Consignment> | undefined

  /**
   * An event associated with this Transportation Status report.
   * Transport Event
   * Cardinality: 0..n
   */
  TransportEvent?: Array<TransportEvent> | undefined

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
   * The party sending this Transportation Status report.
   * Party
   * Cardinality: 0..1
   */
  SenderParty?: Array<Party> | undefined

  /**
   * The party receiving this Transportation Status report.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty?: Array<Party> | undefined

  /**
   * A reference to the Transportation Status Request to which this report is a response.
   * Document Reference
   * Cardinality: 0..1
   */
  TransportationStatusRequestDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to the Transport Execution Plan associated with the transport service whose status is being reported.
   * Document Reference
   * Cardinality: 0..1
   */
  TransportExecutionPlanDocumentReference?: Array<DocumentReference> | undefined

  /**
   * Update of the original plan regarding a pickup of goods.
   * Transport Event
   * Cardinality: 0..1
   */
  UpdatedPickupTransportEvent?: Array<TransportEvent> | undefined

  /**
   * Update of the original plan regarding a delivery.
   * Transport Event
   * Cardinality: 0..1
   */
  UpdatedDeliveryTransportEvent?: Array<TransportEvent> | undefined

  /**
   * Locations associated with this Transportation Status report.
   * Location
   * Cardinality: 0..n
   */
  StatusLocation?: Array<Location> | undefined

  /**
   * A period for which status is provided.
   * Period
   * Cardinality: 0..n
   */
  StatusPeriod?: Array<Period> | undefined
}
