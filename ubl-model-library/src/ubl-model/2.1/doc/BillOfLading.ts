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
 * A document issued by the party who acts as an agent for a transportation carrier or other agents to the party who
 * gives instructions for the transportation services (shipper, consignor, etc.) stating the details of the
 * transportation, charges, and terms and conditions under which the transportation service is provided. The party
 * issuing this document does not necessarily provide the physical transportation service. The information in the Bill
 * of Lading corresponds to the information on the Forwarding Instructions. It is used for any mode of transport. A Bill
 * of Lading can serve as a contractual document between the parties for the transportation service. The document
 * evidences a contract of carriage by sea and the acceptance of responsibility for the goods by the carrier, by which
 * the carrier undertakes to deliver the goods against surrender of the document. A provision in the document that the
 * goods are to be delivered to the order of a named person, or to order, or to bearer, constitutes such an undertaking.
 */
export interface BillOfLading {
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
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Bill of Lading Number
   */
  ID: [Identifier]

  /**
   * Reference number (such as a booking reference number) assigned by a carrier or its agent to identify a specific
   * shipment when cargo space is reserved prior to loading.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Booking Reference Number
   */
  CarrierAssignedID: [Identifier] | undefined

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
   * Text, assigned by the sender, that identifies this document to business users.
   * Name
   * Cardinality: 0..1
   * Examples: House Bill , Consolidated Bill of Lading , Proforma , Sea Waybill 
   */
  Name: [Text] | undefined

  /**
   * Textual description of the document instance.
   * Text
   * Cardinality: 0..n
   */
  Description: Array<Text> | undefined

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * A code signifying the status of the Bill Of Lading (revision, replacement, etc.).
   * Code
   * Cardinality: 0..1
   */
  DocumentStatusCode: [Code] | undefined

  /**
   * Reference number to identify a Shipping Order or Forwarding Instruction.
   * Identifier
   * Cardinality: 0..1
   * Alternative business terms: Freight forwarding instruction, Shippers letter of instruction
   */
  ShippingOrderID: [Identifier] | undefined

  /**
   * Indicates whether the transport document is consigned to order.
   * Indicator
   * Cardinality: 0..1
   */
  ToOrderIndicator: [Indicator] | undefined

  /**
   * A term used in commerce in reference to certain duties, called ad valorem duties, which are levied on commodities
   * at certain rates per centum on their value.
   * Indicator
   * Cardinality: 0..1
   */
  AdValoremIndicator: [Indicator] | undefined

  /**
   * Value declared by the shipper or his agent solely for the purpose of varying the carrier's level of liability from
   * that provided in the contract of carriage in case of loss or damage to goods or delayed delivery.
   * Amount
   * Cardinality: 0..1
   * Alternative business terms: Interest in Delivery
   */
  DeclaredCarriageValueAmount: [Amount] | undefined

  /**
   * Other free-text instructions to the forwarders or carriers related to the shipment. This element should only be
   * used where such information cannot be represented in other structured information entities within the document.
   * Text
   * Cardinality: 0..n
   * Alternative business terms: Bill of Lading Remark
   */
  OtherInstruction: Array<Text> | undefined

  /**
   * The party consigning goods as stipulated in the transport contract by the party ordering transport.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Consignor (WCO ID 71 and 72)
   */
  ConsignorParty: [Party] | undefined

  /**
   * The party providing the transport of goods between named points.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49
   * Alternative business terms: and 50)
   */
  CarrierParty: [Party] | undefined

  /**
   * A party combining individual smaller consignments into a single larger shipment (a so-called consolidated
   * consignment or shipment) that is sent to a counterpart who mirrors the consolidator's activity by dividing the
   * consolidated consignment into its original components.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Consolidator (WCO ID 192 AND 193)
   */
  FreightForwarderParty: [Party] | undefined

  /**
   * An identifiable collection of one or more goods items to be transported between the seller party and the buyer
   * party.
   * Shipment
   * Cardinality: 0..1
   */
  Shipment: [Shipment] | undefined

  /**
   * A reference to another document associated with this document.
   * Document Reference
   * Cardinality: 0..n
   */
  DocumentReference: Array<DocumentReference> | undefined

  /**
   * Information that directly relates to the rate of exchange (conversion) between two currencies.
   * Exchange Rate
   * Cardinality: 0..n
   */
  ExchangeRate: Array<ExchangeRate> | undefined

  /**
   * A list of interested parties to whom this document is distributed.
   * Document Distribution
   * Cardinality: 0..n
   */
  DocumentDistribution: Array<DocumentDistribution> | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined
}
