import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { DocumentReference } from '../cac/DocumentReference'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { PaymentTerms } from '../cac/PaymentTerms'
import { Period } from '../cac/Period'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransportationService } from '../cac/TransportationService'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document sent by a transport service provider to announce the availability of a transport service.
 */
export interface TransportServiceDescription {
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
   */
  UBLVersionID?: [Identifier] | undefined

  /**
   * Identifies a user-defined customization of UBL for a specific use.
   * Identifier
   * Cardinality: 0..1
   */
  CustomizationID?: [Identifier] | undefined

  /**
   * Identifies a user-defined profile of the customization of UBL being used.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileID?: [Identifier] | undefined

  /**
   * Identifies an instance of executing a profile, to associate all transactions in a collaboration.
   * Identifier
   * Cardinality: 0..1
   */
  ProfileExecutionID?: [Identifier] | undefined

  /**
   * An identifier for this document, assigned by the sender.
   * Identifier
   * Cardinality: 1
   */
  ID: [Identifier]

  /**
   * Indicates whether this document is a copy (true) or not (false).
   * Indicator
   * Cardinality: 0..1
   */
  CopyIndicator?: [Indicator] | undefined

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
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note?: Array<Text> | undefined

  /**
   * A name, assigned by the Transport Service Provider, for the service being announced.
   * Name
   * Cardinality: 0..1
   */
  ServiceName?: [Text] | undefined

  /**
   * A code signifying a response related to the Transport Service Description.
   * Code
   * Cardinality: 0..1
   */
  ResponseCode?: [Code] | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature?: Array<Signature> | undefined

  /**
   * The party sending the Transport Service Description.
   * Party
   * Cardinality: 0..1
   */
  SenderParty?: [Party] | undefined

  /**
   * The party receiving the Transport Service Description.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty?: [Party] | undefined

  /**
   * A Transport Service Description Request to which this Transport Service Description is a response.
   * Document Reference
   * Cardinality: 0..1
   */
  TransportServiceDescriptionRequestDocumentReference?: [DocumentReference] | undefined

  /**
   * The transport service provider.
   * Party
   * Cardinality: 0..1
   */
  TransportServiceProviderParty?: [Party] | undefined

  /**
   * The terms of payment under which the transport service would be provided.
   * Payment Terms
   * Cardinality: 0..1
   */
  ServiceChargePaymentTerms?: [PaymentTerms] | undefined

  /**
   * A period during which this Transport Service Description is valid.
   * Period
   * Cardinality: 0..1
   */
  ValidityPeriod?: [Period] | undefined

  /**
   * A transportation service announced in this Transport Service Description.
   * Transportation Service
   * Cardinality: 0..n
   */
  TransportationService?: Array<TransportationService> | undefined
}
