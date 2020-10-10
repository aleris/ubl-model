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
 * A document sent by a transport user to request a transport service from a transport service provider.
 */
export interface TransportExecutionPlanRequest {
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
   */
  UBLVersionID: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   */
  CustomizationID: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileID: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileExecutionID: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * An identifier for the current version of the Transport Execution Plan Request.
   * Identifier
   * Cardinality: 0..1
   * Examples: 1.1 
   */
  VersionID: [Identifier] | undefined

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
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 0..1
   * Alternative business terms: Transport Document Date
   */
  IssueDate: [Date] | undefined

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * A code signifying the status of the Transport Execution Plan Request.
   * Code
   * Cardinality: 0..1
   */
  DocumentStatusCode: [Code] | undefined

  /**
   * A code signifying a reason associated with the status of the Transport Execution Plan Request.
   * Code
   * Cardinality: 0..1
   */
  DocumentStatusReasonCode: [Code] | undefined

  /**
   * A reason associated with the status of the Transport Execution Plan Request.
   * Text
   * Cardinality: 0..n
   * Examples: 123 Standard Chartered Tower 
   */
  DocumentStatusReasonDescription: Array<Text> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * Remarks from the transport user regarding the transport operations referenced in the Transport Execution Plan
   * Request.
   * Text
   * Cardinality: 0..n
   */
  TransportUserRemarks: Array<Text> | undefined

  /**
   * The party sending the Transport Execution Plan Request.
   * Party
   * Cardinality: 0..1
   */
  SenderParty: [Party] | undefined

  /**
   * The party receiving the Transport Execution Plan Request.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty: [Party] | undefined

  /**
   * The party requesting the transport services referenced in the Transport Execution Plan Request.
   * Party
   * Cardinality: 1
   */
  TransportUserParty: [Party]

  /**
   * The party providing the transport services referenced in the Transport Execution Plan Request.
   * Party
   * Cardinality: 1
   */
  TransportServiceProviderParty: [Party]

  /**
   * The party that will pay for the transport service(s) referred to in a Transport Execution Plan.
   * Party
   * Cardinality: 0..1
   */
  PayeeParty: [Party] | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * A reference to an original Transport Execution Plan Document.
   * Document Reference
   * Cardinality: 0..1
   */
  TransportExecutionPlanDocumentReference: [DocumentReference] | undefined

  /**
   * A reference to the Transport Service Description, which is used by a transport service provider to announce
   * transport services to transport users (buyers).
   * Document Reference
   * Cardinality: 0..1
   */
  TransportServiceDescriptionDocumentReference: [DocumentReference] | undefined

  /**
   * A reference to an additional document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  AdditionalDocumentReference: Array<DocumentReference> | undefined

  /**
   * A potential contract related to the Transport Execution Plan Request.
   * Contract
   * Cardinality: 0..1
   */
  TransportContract: [Contract] | undefined

  /**
   * A deadline for a response from the Transport Service Provider to this Transport Execution Plan Request.
   * Period
   * Cardinality: 0..n
   */
  TransportServiceProviderResponseDeadlinePeriod: Array<Period> | undefined

  /**
   * A description of the main transportation service referenced in the Transport Execution Plan Request.
   * Transportation Service
   * Cardinality: 0..1
   */
  MainTransportationService: [TransportationService] | undefined

  /**
   * A description of an additional transportation service referenced in the Transport Execution Plan Request.
   * Transportation Service
   * Cardinality: 0..n
   */
  AdditionalTransportationService: Array<TransportationService> | undefined

  /**
   * The period within which the services referred to in the Transport Execution Plan Request must begin.
   * Period
   * Cardinality: 0..1
   */
  ServiceStartTimePeriod: [Period] | undefined

  /**
   * The period during which the services referred to in the Transport Execution Plan Request must be completed.
   * Period
   * Cardinality: 0..1
   */
  ServiceEndTimePeriod: [Period] | undefined

  /**
   * The location of origin of the transport service referenced in the Transport Execution Plan Request.
   * Location
   * Cardinality: 0..1
   */
  FromLocation: [Location] | undefined

  /**
   * The destination location for the transport service referenced in the Transport Execution Plan Request.
   * Location
   * Cardinality: 0..1
   */
  ToLocation: [Location] | undefined

  /**
   * The location of a transport service (e.g., terminal handling service) that does not require transport movement.
   * Location
   * Cardinality: 0..1
   */
  AtLocation: [Location] | undefined

  /**
   * A description of terms and conditions related to the Transport Execution Plan Request.
   * Transport Execution Terms
   * Cardinality: 0..1
   */
  TransportExecutionTerms: [TransportExecutionTerms] | undefined

  /**
   * A description of an identifiable collection of goods items to be transported between the consignor and the
   * consignee. This information may be defined within a transport contract. A consignment may comprise more than one
   * shipment (e.g., when consolidated by a freight forwarder).
   * Consignment
   * Cardinality: 1..n
   */
  Consignment: Array<Consignment>
}
