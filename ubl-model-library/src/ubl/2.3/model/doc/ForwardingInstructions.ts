import { Amount } from '../cbc/Amount'
import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentDistribution } from '../cac/DocumentDistribution'
import { DocumentReference } from '../cac/DocumentReference'
import { ExchangeRate } from '../cac/ExchangeRate'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Shipment } from '../cac/Shipment'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'
/**
 * A document issued to a forwarder, giving instructions regarding the action to be taken for the forwarding of goods
 * described therein. Forwarding Instructions is used by any party who gives instructions for the transportation
 * services required for a consignment of goods to any party who is contracted to provide the transportation services.
 * The parties who issue this document are commonly referred to as the shipper or consignor, while the parties who
 * receive this document are forwarders, carriers, shipping agents, etc. This document may also be issued by a forwarder
 * or shipping agent in its capacity as a shipper. This document can be used to arrange for the transportation (1) of
 * different types of goods or cargoes; (2) whether containerized or non-containerized; (3) through different modes of
 * transport including multi-modal; and (4) from any origin to any destination.
 */
export interface ForwardingInstructions {
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
   * Reference number assigned by a carrier or its agent to identify a specific shipment, such as a booking reference
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
   * A code signifying the status of the Forwarding Instructions with respect to its original state. This code may be
   * used if the document precedes the event and is subsequently found to be incorrect and in need of cancellation or
   * revision.
   * Code
   * Cardinality: 0..1
   */
  DocumentStatusCode?: Array<Code> | undefined

  /**
   * Reference number to identify a Shipping Order.
   * Identifier
   * Cardinality: 0..1
   */
  ShippingOrderID?: Array<Identifier> | undefined

  /**
   * Indicates whether the transport document is consigned to order.
   * Indicator
   * Cardinality: 0..1
   */
  ToOrderIndicator?: Array<Indicator> | undefined

  /**
   * A term used in commerce in reference to certain duties, called ad valorem duties, which are levied on commodities
   * at certain rates per centum on their value.
   * Indicator
   * Cardinality: 0..1
   */
  AdValoremIndicator?: Array<Indicator> | undefined

  /**
   * Value declared by the shipper or his agent solely for the purpose of varying the carrier's level of liability from
   * that provided in the contract of carriage in case of loss or damage to goods or delayed delivery.
   * Amount
   * Cardinality: 0..1
   */
  DeclaredCarriageValueAmount?: Array<Amount> | undefined

  /**
   * Contains other free-text instructions to the forwarders or carriers related to the shipment. This should only be
   * used where such information cannot be represented in other structured information entities within the document.
   * Text
   * Cardinality: 0..n
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
   * A party combining individual smaller consignments into a single larger shipment (a so-called consolidated
   * consignment or shipment) that is sent to a counterpart who mirrors the consolidator's activity by dividing the
   * consolidated consignment into its original components.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Consolidator (WCO ID 192 AND 193)
   */
  FreightForwarderParty?: Array<Party> | undefined

  /**
   * An identifiable collection of one or more goods items to be transported between the seller party and the buyer
   * party.
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
   * Information about the rate of exchange (conversion) between two currencies.
   * Exchange Rate
   * Cardinality: 0..n
   */
  ExchangeRate?: Array<ExchangeRate> | undefined

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
