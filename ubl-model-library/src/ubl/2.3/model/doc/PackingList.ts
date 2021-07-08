import { Date } from '../cbc/Date'
import { DocumentDistribution } from '../cac/DocumentDistribution'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Party } from '../cac/Party'
import { Shipment } from '../cac/Shipment'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document describing how goods are packed.
 */
export interface PackingList {
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
   * Identifies a user-defined profile of the subset of UBL being used.
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
   * Alternative business terms: Packing List Number
   */
  ID: Array<Identifier>

  /**
   * A universally unique identifier for an instance of this document..
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
   * Textual description of the document instance.
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
   * Version identifier of a Packing List.
   * Identifier
   * Cardinality: 0..1
   */
  VersionID?: Array<Identifier> | undefined

  /**
   * Contains other free-text-based instructions related to the shipment to the forwarders or carriers. This should only
   * be used where such information cannot be represented in other structured information entities within the document.
   * Text
   * Cardinality: 0..1
   */
  OtherInstruction?: Array<Text> | undefined

  /**
   * The party consigning goods, as stipulated in the transport contract by the party ordering transport.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Consignor (WCO ID 71 and 72)
   */
  ConsignorParty?: Array<Party> | undefined

  /**
   * The party providing the transport of goods between named points.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49
   * Alternative business terms: and 50)
   */
  CarrierParty?: Array<Party> | undefined

  /**
   * The party combining individual smaller shipments into a single larger consignment (a so-called consolidated
   * consignment) that is sent to a counterpart who mirrors the consolidator's activity by dividing the consolidated
   * consignment into its original components.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Consolidator (WCO ID 192 AND 193)
   */
  FreightForwarderParty?: Array<Party> | undefined

  /**
   * A description of the shipment.
   * Shipment
   * Cardinality: 1
   */
  Shipment: Array<Shipment>

  /**
   * A reference to another document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference?: Array<DocumentReference> | undefined

  /**
   * A list of interested parties to whom this document is distributed.
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
