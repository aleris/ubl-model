import { Code } from '../cbc/Code'
import { Consignment } from '../cac/Consignment'
import { Contract } from '../cac/Contract'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Location } from '../cac/Location'
import { Party } from '../cac/Party'
import { Period } from '../cac/Period'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransportationService } from '../cac/TransportationService'
import { TransportExecutionTerms } from '../cac/TransportExecutionTerms'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document used in the negotiation of a transport service between a transport user and a transport service provider.
 */
export interface TransportExecutionPlan {
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
   * Indicates the current version of the Transport Execution Plan.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1
   */
  VersionID?: Array<Identifier> | undefined

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
   * Cardinality: 0..1
   * Alternative business terms: Transport Document Date
   */
  IssueDate?: Array<Date> | undefined

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: Array<Time> | undefined

  /**
   * A code signifying the status of the Transport Execution Plan (updated, cancelled, confirmed, etc.)
   * Code
   * Cardinality: 0..1
   */
  DocumentStatusCode?: Array<Code> | undefined

  /**
   * A code signifying a reason associated with the status of a Transport Execution Plan.
   * Code
   * Cardinality: 0..1
   */
  DocumentStatusReasonCode?: Array<Code> | undefined

  /**
   * A reason for the status assigned to the Transport Execution Plan, expressed in text.
   * Text
   * Cardinality: 0..n
   * Examples: 123 Standard Chartered Tower
   */
  DocumentStatusReasonDescription?: Array<Text> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * Remarks from the transport user regarding the transport operations referred to in the Transport Execution Plan.
   * Text
   * Cardinality: 0..n
   */
  TransportUserRemarks?: Array<Text> | undefined

  /**
   * Remarks from the transport service provider regarding the transport operations referred to in the Transport
   * Execution Plan.
   * Text
   * Cardinality: 0..n
   */
  TransportServiceProviderRemarks?: Array<Text> | undefined

  /**
   * The party sending this document (can be either the transport user or the transport service provider).
   * Party
   * Cardinality: 0..1
   */
  SenderParty?: Array<Party> | undefined

  /**
   * The party receiving this document (can be either the transport user or the transport service provider).
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty?: Array<Party> | undefined

  /**
   * The party requesting the transport service from a transport service provider.
   * Party
   * Cardinality: 1
   */
  TransportUserParty: Array<Party>

  /**
   * The party offering the transport service based upon a request from a transport user.
   * Party
   * Cardinality: 1
   */
  TransportServiceProviderParty: Array<Party>

  /**
   * Describes the party that will pay for the transport service(s) provided in a Transport Execution Plan
   * Party
   * Cardinality: 0..1
   */
  BillToParty?: Array<Party> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * A reference to a Transport Execution Plan Request.
   * Document Reference
   * Cardinality: 0..1
   */
  TransportExecutionPlanRequestDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to an original Transport Execution Plan.
   * Document Reference
   * Cardinality: 0..1
   */
  TransportExecutionPlanDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to the Transport Service Description, which is used by a transport service provider to announce
   * transport services to transport users (buyers).
   * Document Reference
   * Cardinality: 0..1
   */
  TransportServiceDescriptionDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference?: Array<DocumentReference> | undefined

  /**
   * A contract related to the Transport Execution Plan.
   * Contract
   * Cardinality: 0..1
   */
  TransportContract?: Array<Contract> | undefined

  /**
   * Describes the deadline for when the Transport Service Provider will have to respond to a Transport Execution Plan .
   * Period
   * Cardinality: 0..1
   */
  TransportServiceProviderResponseRequiredPeriod?: Array<Period> | undefined

  /**
   * Describes the deadline for when the Transport User will have to respond to a Transport Execution Plan suggested by
   * a Transport Service Provider.
   * Period
   * Cardinality: 0..n
   */
  TransportUserResponseRequiredPeriod?: Array<Period> | undefined

  /**
   * A period during which the Transport Execution Plan is valid.
   * Period
   * Cardinality: 0..n
   */
  ValidityPeriod?: Array<Period> | undefined

  /**
   * Description of the main transportation service referenced in the Transport Execution Plan.
   * Transportation Service
   * Cardinality: 0..1
   */
  MainTransportationService?: Array<TransportationService> | undefined

  /**
   * A description of an additional transportation service referenced in the Transport Execution Plan.
   * Transportation Service
   * Cardinality: 0..n
   */
  AdditionalTransportationService?: Array<TransportationService> | undefined

  /**
   * The period within which the service must begin.
   * Period
   * Cardinality: 0..1
   */
  ServiceStartTimePeriod?: Array<Period> | undefined

  /**
   * The period during which the service must be completed.
   * Period
   * Cardinality: 0..1
   */
  ServiceEndTimePeriod?: Array<Period> | undefined

  /**
   * The location of origin of the transport service referenced in the Transport Execution Plan.
   * Location
   * Cardinality: 0..1
   */
  FromLocation?: Array<Location> | undefined

  /**
   * The destination location for the transport service referenced in the Transport Execution Plan.
   * Location
   * Cardinality: 0..1
   */
  ToLocation?: Array<Location> | undefined

  /**
   * The location of a transport service (e.g., terminal handling service) that does not require transport movement.
   * Location
   * Cardinality: 0..1
   */
  AtLocation?: Array<Location> | undefined

  /**
   * A description of terms and conditions related to the Transport Execution Plan.
   * Transport Execution Terms
   * Cardinality: 0..1
   */
  TransportExecutionTerms?: Array<TransportExecutionTerms> | undefined

  /**
   * A description of an identifiable collection of goods items to be transported between the consignor and the
   * consignee. This information may be defined within a transport contract. A consignment may comprise more than one
   * shipment (e.g., when consolidated by a freight forwarder).
   * Consignment
   * Cardinality: 1..n
   */
  Consignment: Array<Consignment>
}
