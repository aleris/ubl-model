import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Party } from '../cac/Party'
import { Shipment } from '../cac/Shipment'
import { Signature } from '../cac/Signature'
import { Time } from '../cbc/Time'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document used to report weight or verified mass measurements in the transport chain.
 */
export interface WeightStatement {
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
   * Examples: 2.2
   */
  UBLVersionID: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   * Examples: SMDG
   */
  CustomizationID: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   * Examples: SOLAS
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
   */
  ID: [Identifier]

  /**
   * A universally unique identifier for an instance of this document.
   * Identifier
   * Cardinality: 0..1
   */
  UUID: [Identifier] | undefined

  /**
   * The date, assigned by the sender, on which this document was issued.
   * Date
   * Cardinality: 1
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 0..1
   */
  IssueTime: [Time] | undefined

  /**
   * A code signifying the type of Weight Statement.
   * Code
   * Cardinality: 0..1
   * Examples: VGM, WeightCertificate
   */
  WeightStatementTypeCode: [Code] | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The party sending this weight statement (e.g. Weighing Station, Shipper, Freight Forwarder, Carrier, ...).
   * Party
   * Cardinality: 1
   */
  SenderParty: [Party]

  /**
   * The party receiving this weight statement (e.g. Carrier, Terminal Operator, ...).
   * Party
   * Cardinality: 1
   */
  ReceiverParty: [Party]

  /**
   * The party executing the weight measure (e.g. Weighing Station).
   * Party
   * Cardinality: 0..1
   */
  WeighingParty: [Party] | undefined

  /**
   * The party playing the role of the Shipper (BCO, FF or NVOCC) who is responsible for the VGM (e.g. according the
   * SOLAS Convention).
   * Party
   * Cardinality: 0..1
   */
  ShipperParty: [Party] | undefined

  /**
   * The party responsible for signing the VGM on behalf of the Shipper.
   * Party
   * Cardinality: 0..1
   */
  ResponsibleParty: [Party] | undefined

  /**
   * The relevant shipment information with details on the transport equipment weight or mass measurements, including
   * verified gross mass (VGM) information.
   * Shipment
   * Cardinality: 1
   */
  Shipment: [Shipment]
}
