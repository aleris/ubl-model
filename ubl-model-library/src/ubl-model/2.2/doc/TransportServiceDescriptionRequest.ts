import { Code } from '../cbc/Code'
import { Date } from '../cbc/Date'
import { Identifier } from '../cbc/Identifier'
import { Indicator } from '../cbc/Indicator'
import { Party } from '../cac/Party'
import { Signature } from '../cac/Signature'
import { Text } from '../cbc/Text'
import { Time } from '../cbc/Time'
import { TransportationService } from '../cac/TransportationService'
import { UBLExtensions } from '../ext/UBLExtensions'

/**
 * A document requesting a Transport Service Description, sent from a party with a transport demand (transport user) to
 * a party providing transport services (transport service provider).
 */
export interface TransportServiceDescriptionRequest {
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
   * Cardinality: 1
   */
  IssueDate: [Date]

  /**
   * The time, assigned by the sender, at which this document was issued.
   * Time
   * Cardinality: 1
   */
  IssueTime: [Time]

  /**
   * Free-form text pertinent to this document, conveying information that is not contained explicitly in other
   * structures.
   * Text
   * Cardinality: 0..n
   */
  Note: Array<Text> | undefined

  /**
   * A code signifying the category of service information requested to be provided in the Transport Service
   * Description.
   * Code
   * Cardinality: 0..1
   */
  ServiceInformationPreferenceCode: [Code] | undefined

  /**
   * A signature applied to this document.
   * Signature
   * Cardinality: 0..n
   */
  Signature: Array<Signature> | undefined

  /**
   * The party sending the Transport Service Description Request.
   * Party
   * Cardinality: 0..1
   */
  SenderParty: [Party] | undefined

  /**
   * The party receiving the Transport Service Description Request.
   * Party
   * Cardinality: 0..1
   */
  ReceiverParty: [Party] | undefined

  /**
   * The transport service provider.
   * Party
   * Cardinality: 0..1
   */
  TransportServiceProviderParty: [Party] | undefined

  /**
   * A transportation service about which information is requested.
   * Transportation Service
   * Cardinality: 1..n
   */
  TransportationService: Array<TransportationService>
}
