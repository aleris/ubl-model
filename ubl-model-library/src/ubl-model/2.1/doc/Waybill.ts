import { Amount } from '../cbc/Amount'
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
 * A transport document describing a shipment It is issued by the party who undertakes to provide transportation
 * services, or undertakes to arrange for their provision, to the party who gives instructions for the transportation
 * services (shipper, consignor, etc.). It states the instructions for the beneficiary and may contain the details of
 * the transportation, charges, and terms and conditions under which the transportation service is provided.
 */
export interface Waybill {
  /**
   * A container for all extensions present in the document.
   * Cardinality: 0..1
   */
  UBLExtensions?: [UBLExtensions] | undefined

  /**
   * Identifies the earliest version of the UBL 2 schema for this document type that defines all of the elements that
   * might be encountered in the current instance.
   * Identifier
   * Cardinality: 0..1
   * Examples: 2.0.5
   */
  UBLVersionID?: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: NES
   */
  CustomizationID?: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: BasicProcurementProcess
   */
  ProfileID?: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   * Examples: BPP-1001
   */
  ProfileExecutionID?: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   * Alternative business terms: Master Waybill Number
   */
  ID: [Identifier]

  /**
   * An identifier (in the form of a reference number) assigned by a carrier or its agent to identify a specific
   * shipment.
   * Identifier
   * Cardinality: 0..1
   */
  CarrierAssignedID?: [Identifier] | undefined

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID?: [Identifier] | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 0..1
   */
  IssueDate?: [Date] | undefined

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime?: [Time] | undefined

  /**
   * Text, assigned by the sender, that identifies this document to business users.
   * Name
   * Cardinality: 0..1
   * Examples: Air Waybill , House Waybill
   */
  Name?: [Text] | undefined

  /**
   * Text describing the contents of the Waybill.
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
   * An identifier (in the form of a reference number) of the Shipping Order or Forwarding Instruction associated with
   * this shipment.
   * Identifier
   * Cardinality: 0..1
   */
  ShippingOrderID?: [Identifier] | undefined

  /**
   * A term used in commerce in reference to certain duties, called ad valorem duties, which are levied on commodities
   * at certain rates per centum on their value.
   * Indicator
   * Cardinality: 0..1
   */
  AdValoremIndicator?: [Indicator] | undefined

  /**
   * Value declared by the shipper or his agent solely for the purpose of varying the carrier's level of liability from
   * that provided in the contract of carriage in case of loss or damage to goods or delayed delivery.
   * Amount
   * Cardinality: 0..1
   */
  DeclaredCarriageValueAmount?: [Amount] | undefined

  /**
   * Other free-text instructions related to the shipment to the forwarders or carriers. This should only be used where
   * such information cannot be represented in other structured information entities within the document.
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
  ConsignorParty?: [Party] | undefined

  /**
   * The party providing the transport of goods between named points.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Transport Company, Shipping Line, NVOCC, Airline, Haulier, Courier, Carrier (WCO ID 49
   * Alternative business terms: and 50)
   */
  CarrierParty?: [Party] | undefined

  /**
   * A party combining individual smaller consignments into a single larger shipment (a so-called consolidated
   * consignment or shipment) that is sent to a counterpart who mirrors the consolidator's activity by dividing the
   * consolidated consignment into its original components.
   * Party
   * Cardinality: 0..1
   * Alternative business terms: Consolidator (WCO ID 192 AND 193)
   */
  FreightForwarderParty?: [Party] | undefined

  /**
   * A description of the shipment.
   * Shipment
   * Cardinality: 1
   */
  Shipment: [Shipment]

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
